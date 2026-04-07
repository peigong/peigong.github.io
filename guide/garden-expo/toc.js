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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="BeijingGardenExpo/index.html"><strong aria-hidden="true">2.</strong> 北京园博园</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">2.1.</strong> 永定塔</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.2.</strong> 锦绣谷</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.3.</strong> 园博湖</div></li><li class="chapter-item expanded "><a href="BeijingGardenExpo/beijing.html"><strong aria-hidden="true">2.4.</strong> 北京园</a></li><li class="chapter-item expanded "><a href="BeijingGardenExpo/jiang-su.html"><strong aria-hidden="true">2.5.</strong> 江苏园·忆江南</a></li><li class="chapter-item expanded "><a href="BeijingGardenExpo/fu-jiang.html"><strong aria-hidden="true">2.6.</strong> 福建园·闽园</a></li><li class="chapter-item expanded "><a href="BeijingGardenExpo/guang-dong.html"><strong aria-hidden="true">2.7.</strong> 广东园·岭南园</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.8.</strong> 重庆园</div></li><li class="chapter-item expanded "><a href="BeijingGardenExpo/ji-nan.html"><strong aria-hidden="true">2.9.</strong> 济南园</a></li></ol></li><li class="chapter-item expanded "><a href="ChinaGardenMuseum/index.html"><strong aria-hidden="true">3.</strong> 中国园林博物馆</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 参考资料</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="pagoda/index.html"><strong aria-hidden="true">4.1.</strong> 佛塔</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.2.</strong> 福建土楼</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.3.</strong> 妈祖</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.4.</strong> 歌仔戏</div></li></ol></li></ol>';
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
