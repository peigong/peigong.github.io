---
layout: post
category: manual
title: 前端框架Webplate的技术栈
---

## 前端框架Webplate ##

[Webplate](http://getwebplate.com/)是一款优秀的前端框架，可使开发者专注于站点或应用的开发，它提供了稳健的布局引擎、全局按钮元素和可定制性的表格，同时还包括了jQuery插件和大量工具。 = [GitHub](https://github.com/chrishumboldt/webplate)

Webplate is an awesome front-end framework that lets you stay focused on building your site or app all the while remaining really easy to use.

## Yepnope.js ##

Yepnope.js是一个能够根据输入条件来选择性异步加载资源文件的js脚本，可以在页面上仅加载用户需要的js/css。

The first thing executed by the stack is yepnope.js to asynchronously load the necessary Javascript and CSS files. In essence the stack.js file is a custom configured deployment and will load up essential libraries before checking for project files. Even though this library has been deprecated it is still valuable in its execution and is the core of how Webplate runs. There are plans to build a custom loader but for now this works great.

## jQuery ##

Next up is jQuery and is one of the most important libraries used by Webplate. All of the Javascript tools, custom plugins and wrappers are written using jQuery and as such cannot be removed. Also the version 2 build of jQuery is being used and as such Webplate is not compatible with any IE version below 9. This is a conscious decision to stay ahead of the curve in terms of front-end development.

## Modernizr ##

Modernizr是一个开源的JS库，它使得那些基于访客浏览器的不同（指对新标准支持性的差异）而开发不同级别体验的设计师的工作变得更为简单。它使得设计师可以在支持HTML5和CSS3的浏览器中充分利用HTML5和CSS3的特性进行开发，同时又不会牺牲其他不支持这些新技术的浏览器的控制。

Another critical library, Modernizr is a feature detection script used to determine what the browser is capable of doing, ranging from CSS animations to touch enabled events. It does so by assigning a class to the HTML element which can then be used by your Javascript or CSS.

## Hammer.js ##

Hammer.js是一个轻量级的JavaScript库（仅有2kb），能让你的网站轻松实现触控事件。它依赖于jQuery，用来控制触摸设备上的多点触控特性。

All touch based gestures are handled through Hammer.js with the jQuery plugin included as part of the stack. This really is a great library and replaces the original inclusion of jQuery.Finger. To find out more visit the Hammer.js site.

## Velocity.js ##

Velocity.js 是velocity模板语法的javascript实现。Velocity 是基于Java的模板引擎，广泛应用在阿里集 体各个子公司。Velocity模板适用于大量模板使用的场景，支持复杂的逻辑运算，包含 基本数据类型、变量赋值和函数等功能。Velocity.js 支持 Node.js 和浏览器环境。

Animations are an important part of the front-end experience but managing the right kind of animation for the particular device is a challenge. Velocity.js is the best out there for this job and will give you smooth Javascript animations across the board.

## Fastclick ##

FastClick 是一个简单，易于使用的JS库用于消除在移动浏览器上触发click事件与一个物理Tap(敲击)之间的300延迟。

Most mobile devices come with an irritating delay on touch click events for links and buttons. Fastclick removes this delay resulting in a more app like feel to the whole project. Note that this library will only be loaded if Webplate detects touch capabilities and is executed automatically.

## Normalize.css ##

Normalize.css 是一个可定制的 CSS 文件，使浏览器呈现的所有元素，更一致和符合现代标准。它正是针对只需要统一的元素样式。该项目依赖于研究浏览器默认元素风格之间的差异，精确定位需要重置的样式。这是一个现代的，HTML5-ready 的 CSS 重置样式集。

A collection of HTML element and attribute style-normalizations to help clear any strange style nuances. Normalize.css helps maintain consistency across all your projects in all the browsers.

## Typeplate ##

Typeplate 是一个“排版入门套件”。我们不需要美学设计,但定义适当的标记与可扩展样式为常见的排版模式。一个精简Sass 库关注适当的技术实现的设计模式。

Typelate is a “typographic starter kit” used to define proper markup for common typographic patterns. It will handle all your type from heading tags, to paragraphs and lists.