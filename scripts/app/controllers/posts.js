(function(){var e=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};define(["async","jquery","EventEmitter","providers/data","providers/template","text!templates/list_has_date.tmpl.html","text!templates/list_no_date.tmpl.html","controllers/touch"],function(t,n,r,i,s,o,u,a,f){var l,c,h;return c={list_has_date:o,list_no_date:u},h=new r,l=function(){function r(){var e;e=this,this.loaded=!1,this.el=n("#list"),this.categories={},this.posts={},this.currentList=[],this.key="__all__",t.parallel({categories:function(e){return i.getCategories().then(function(t){return e(null,t)}).fail(function(t){return e(t)})},posts:function(e){return i.getPosts().then(function(t){return e(null,t)}).fail(function(t){return e(t)})}},function(t,n){var r,i;return r=n.categories,i=n.posts,r||(r={}),i||(i=[]),e.load(r,i)}),e.el.delegate("ul li a","click",function(){return f.toPost()})}return r.prototype.load=function(e,t){var n,r,i,s,o,u,a;for(i=0,o=e.length;i<o;i++){r=e[i],r.pool=[],a=r.categories;for(s=0,u=a.length;s<u;s++)n=a[s],r.pool.push(n.name);this.categories[r.name]=r}return this.posts[this.key]=t,this.loaded=!0,h.emit("loaded")},r.prototype.getPosts=function(t,n){var r,i,s,o,u,a,f,l;u=this,s=["posts",t,n].join("-");if(!this.posts.hasOwnProperty(s)){this.posts[s]=[],n==="default"?r=function(n,r){return e.call(u.categories[t].pool,n)>=0&&r<30}:n&&(r=function(e){return e===n});if(this.posts.hasOwnProperty(this.key)){i=0,l=this.posts[this.key];for(a=0,f=l.length;a<f;a++)o=l[a],r(o.categories,i)&&(this.posts[s].push(o),i++)}}return this.posts[s]},r.prototype.setCurrentList=function(e,t){var n,r;return r=this,n=function(){var n,i,u,a,f;return r.currentList=r.getPosts(e,t),i={channel:e,posts:r.currentList},n="tmpl-common-list",a=o,r.categories.hasOwnProperty(e)&&r.categories[e]&&r.categories[e].tmpl&&(f=r.categories[e].tmpl,c.hasOwnProperty(f)&&(n="tmpl-"+e+"-list",a=c[f])),u=s.render(i,n,a),r.el.html(u),h.emit("current-list-ready")},r.el.html(""),this.loaded?n():h.on("loaded",n)},r.prototype.getCurrentPostLink=function(e,t){var r,i,s,o;return s=this,r=n.Deferred(),i=function(){return s.currentList.length?r.resolve(s.currentList[0].link):r.resolve("")},e&&t?(o=["articles",e,t].join("/"),r.resolve(o)):this.loaded?i():h.on("current-list-ready",i),r.promise()},r}(),new l})}).call(this);