(function(){define(["jquery","EventEmitter","providers/data","providers/template","text!templates/nav.tmpl.html","controllers/touch"],function(e,t,n,r,i,s){var o,u;return u=new t,o=function(){function t(){var t;t=this,this.loaded=!1,this.timer=null,this.el=e("#nav"),this.categories||n.getCategories().then(this.load.bind(this)).fail(function(e){throw e}),e("body").click(function(e){return t.hide()})}return t.prototype.load=function(t){var n;return n=this,this.categories=t,this.navHTML=r.render(this.categories,"tmpl-nav",i),this.el.html(this.navHTML),e("#nav ul.master a").click(function(t){return n.show(e(this)),s.toList(),t.stopPropagation()}),this.loaded=!0,u.emit("loaded")},t.prototype.hide=function(){return e("#nav div.slave").hide()},t.prototype.show=function(t){var n,r;return r=this,n=t.attr("data-id"),r.hide(),r.timer&&clearTimeout(r.timer),e("#nav div.slave[data-master="+n+"]").show(),r.timer=setTimeout(function(){return r.hide()},5e3)},t.prototype.setCurrentNav=function(t,n){var r,i;return i=this,r=function(){var n;return n=e("#nav ul.master a[data-id="+t+"]"),i.show(n)},this.loaded?r():u.on("loaded",r)},t}(),new o})}).call(this);