(function() {
  define(['jquery'], function($) {
    var categories, dict, exports, posts;
    categories = [];
    posts = [];
    dict = {};
    exports = {
      getCategories: function() {
        var defer;
        defer = $.Deferred();
        if (categories && categories.length) {
          defer.resolve(categories);
        } else {
          $.getJSON('./categories.json').then(function(data) {
            categories = data;
            return defer.resolve(categories);
          }).fail(function(err) {
            return defer.reject(err);
          });
        }
        return defer.promise();
      },
      getPosts: function() {
        var defer;
        defer = $.Deferred();
        if (posts && posts.length) {
          defer.resolve(posts);
        } else {
          $.getJSON('./posts.json').then(function(data) {
            var post, push, _i, _len;
            push = function(item) {
              var arr;
              arr = item.link.split('/');
              item.filename = arr.pop();
              return posts.push(item);
            };
            for (_i = 0, _len = data.length; _i < _len; _i++) {
              post = data[_i];
              if (post.link.length) {
                push(post);
              }
            }
            return defer.resolve(posts);
          }).fail(function(err) {
            return defer.reject(err);
          });
        }
        return defer.promise();
      },
      getPost: function(link) {
        var defer, err;
        defer = $.Deferred();
        if (dict.hasOwnProperty(link)) {
          defer.resolve(dict[link]);
        } else if (link) {
          $.get(link).then(function(text) {
            dict[link] = text;
            return defer.resolve(text);
          }).fail(function(err) {
            return defer.reject(err);
          });
        } else {
          err = new Error('link is empty.');
        }
        return defer.promise();
      }
    };
    return exports;
  });

}).call(this);
