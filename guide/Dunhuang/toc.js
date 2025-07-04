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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.</strong> 传统文化</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">2.1.</strong> 丝绸之路</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.2.</strong> 河西走廊</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.3.</strong> 敦煌石窟</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.4.</strong> 莫高窟</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.5.</strong> 敦煌壁画</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.6.</strong> 敦煌飞天</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.7.</strong> 马家窑文化</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.8.</strong> 彩陶</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.9.</strong> 彩绘</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.10.</strong> 钻木取火</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> 自然风光</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.</strong> 阳关</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.</strong> 玉门关</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.3.</strong> 鸣沙山</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.4.</strong> 月牙泉</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.5.</strong> 雅丹地貌</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.6.</strong> 雅丹国家地质公园</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 现代科技</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">4.1.</strong> 新能源车</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.2.</strong> 敦煌光电博览园</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.3.</strong> 光伏发电</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.4.</strong> 光热发电</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.5.</strong> 熔盐塔式</div></li></ol></li></ol>';
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
