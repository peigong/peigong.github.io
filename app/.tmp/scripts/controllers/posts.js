(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(['async', 'jquery', 'EventEmitter', 'providers/data', 'providers/template'], function(async, $, EventEmitter, data, template) {
    var Posts, emitter;
    emitter = new EventEmitter;
    Posts = (function() {
      function Posts() {
        var that;
        that = this;
        this.loaded = false;
        this.el = $('#list');
        this.categories = {};
        this.posts = {};
        this.currentList = [];
        this.key = '__all__';
        async.parallel({
          categories: function(callback) {
            return data.getCategories().then(function(categories) {
              return callback(null, categories);
            }).fail(function(err) {
              return callback(err);
            });
          },
          posts: function(callback) {
            return data.getPosts().then(function(posts) {
              return callback(null, posts);
            }).fail(function(err) {
              return callback(err);
            });
          }
        }, function(err, results) {
          var categories, posts;
          categories = results.categories;
          posts = results.posts;
          if (!categories) {
            categories = {};
          }
          if (!posts) {
            posts = [];
          }
          return that.load(categories, posts);
        });
      }

      Posts.prototype.load = function(categories, posts) {
        var cate, category, _i, _j, _len, _len1, _ref;
        for (_i = 0, _len = categories.length; _i < _len; _i++) {
          category = categories[_i];
          this.categories[category.name] = [];
          _ref = category.categories;
          for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
            cate = _ref[_j];
            this.categories[category.name].push(cate.name);
          }
        }
        this.posts[this.key] = posts;
        this.loaded = true;
        return emitter.emit('loaded');
      };

      Posts.prototype.getPosts = function(channel, category) {
        var check, counter, key, post, that, _i, _len, _ref;
        that = this;
        key = ['posts', channel, category].join('-');
        if (!this.posts.hasOwnProperty(key)) {
          this.posts[key] = [];
          if (category === 'default') {
            check = function(cate, counter) {
              return (__indexOf.call(that.categories[channel], cate) >= 0) && (counter < 30);
            };
          } else if (category) {
            check = function(cate) {
              return cate === category;
            };
          }
          if (this.posts.hasOwnProperty(this.key)) {
            counter = 0;
            _ref = this.posts[this.key];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              post = _ref[_i];
              if (check(post.categories, counter)) {
                this.posts[key].push(post);
                counter++;
              }
            }
          }
        }
        return this.posts[key];
      };

      Posts.prototype.setCurrentList = function(channel, category) {
        var set, that;
        that = this;
        set = function() {
          var it, listHTML;
          that.currentList = that.getPosts(channel, category);
          it = {
            channel: channel,
            posts: that.currentList
          };
          listHTML = template.render(it, "tmpl-" + channel + "-list", 'tmpl-common-list');
          that.el.html(listHTML);
          return emitter.emit('current-list-ready');
        };
        that.el.html('');
        if (this.loaded) {
          return set();
        } else {
          return emitter.on('loaded', set);
        }
      };

      Posts.prototype.getCurrentPostLink = function(category, link) {
        var defer, get, that, url;
        that = this;
        defer = $.Deferred();
        get = function() {
          if (that.currentList.length) {
            return defer.resolve(that.currentList[0].link);
          } else {
            return defer.resolve('');
          }
        };
        if (category && link) {
          url = ['articles', category, link].join('/');
          defer.resolve(url);
        } else if (this.loaded) {
          get();
        } else {
          emitter.on('current-list-ready', get);
        }
        return defer.promise();
      };

      return Posts;

    })();
    return new Posts;
  });

}).call(this);
