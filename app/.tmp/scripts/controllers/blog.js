(function() {
  define(['controllers/nav', 'controllers/posts', 'controllers/post'], function(nav, posts, post) {
    var Blog;
    Blog = (function() {
      function Blog() {}

      Blog.prototype.route = function(channel, category, link) {
        if (!channel) {
          channel = 'tcm';
        }
        if (!category) {
          category = 'default';
        }
        nav.setCurrentNav(channel, category);
        posts.setCurrentList(channel, category);
        posts.getCurrentPostLink(category, link).then(function(link) {
          return post.setLink(link, channel);
        });
        return false;
      };

      return Blog;

    })();
    return new Blog;
  });

}).call(this);
