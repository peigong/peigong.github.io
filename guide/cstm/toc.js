// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="note/index.html"><strong aria-hidden="true">2.</strong> 讲解提纲</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="note/open.html"><strong aria-hidden="true">2.1.</strong> 公共区域</a></li><li class="chapter-item expanded "><a href="note/glory-of-china.html"><strong aria-hidden="true">2.2.</strong> 一层：华夏之光</a></li><li class="chapter-item expanded "><a href="note/f2.html"><strong aria-hidden="true">2.3.</strong> 二层：探索与发现</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.4.</strong> 三层：科技与生活</div></li><li class="chapter-item expanded "><a href="note/f4.html"><strong aria-hidden="true">2.5.</strong> 四层：挑战与未来</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> 一层 公共区域</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="open/CSS.html"><strong aria-hidden="true">3.1.</strong> 中国空间站</a></li><li class="chapter-item expanded "><a href="open/Tianhe-Core-Module.html"><strong aria-hidden="true">3.2.</strong> 天宫空间站核心舱</a></li><li class="chapter-item expanded "><a href="open/celebrities.html"><strong aria-hidden="true">3.3.</strong> 杰出科学家</a></li><li class="chapter-item expanded "><a href="open/Hall-Thruster.html"><strong aria-hidden="true">3.4.</strong> 霍尔推力器</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.5.</strong> 浑天仪</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 一层 华夏之光</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="f1/hua-ben.html"><strong aria-hidden="true">4.1.</strong> 花本</a></li><li class="chapter-item expanded "><a href="f1/Flowers-floor-machine.html"><strong aria-hidden="true">4.2.</strong> 花楼机</a></li><li class="chapter-item expanded "><a href="f1/Jacquard-machine.html"><strong aria-hidden="true">4.3.</strong> 雅卡尔提花机</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.4.</strong> 日晷</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.5.</strong> 圭表</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.6.</strong> 观星台</div></li><li class="chapter-item expanded "><a href="f1/di-lou.html"><strong aria-hidden="true">4.7.</strong> 滴漏</a></li><li class="chapter-item expanded "><a href="f1/shui-yun-yi-xiang-tai.html"><strong aria-hidden="true">4.8.</strong> 水运仪象台</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 二层 公共区域</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.1.</strong> 许氏禄丰恐龙</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> 三层：科技与生活</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.</strong> 四层：挑战与未来</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="f4/Shenzhou-Spaceship.html"><strong aria-hidden="true">7.1.</strong> 神舟飞船</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
