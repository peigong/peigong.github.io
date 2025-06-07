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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="prehistory/index.html"><strong aria-hidden="true">2.</strong> 远古时期</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="prehistory/prehistory-1.html"><strong aria-hidden="true">2.1.</strong> 建始人</a></li><li class="chapter-item expanded "><a href="prehistory/prehistory-2.html"><strong aria-hidden="true">2.2.</strong> 龙骨坡遗址</a></li><li class="chapter-item expanded "><a href="prehistory/prehistory-3.html"><strong aria-hidden="true">2.3.</strong> 人字洞遗址</a></li><li class="chapter-item expanded "><a href="prehistory/prehistory-4.html"><strong aria-hidden="true">2.4.</strong> 西侯度文化</a></li></ol></li><li class="chapter-item expanded "><a href="history-1/index.html"><strong aria-hidden="true">3.</strong> 夏商西周时期</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="history-1/DukeMaoTripod.html"><strong aria-hidden="true">3.1.</strong> 毛公鼎</a></li><li class="chapter-item expanded "><a href="history-1/SanFamilyPlate.html"><strong aria-hidden="true">3.2.</strong> 散氏盘</a></li><li class="chapter-item expanded "><a href="history-1/history-1-1.html"><strong aria-hidden="true">3.3.</strong> 西周大克鼎</a></li></ol></li><li class="chapter-item expanded "><a href="history-2/index.html"><strong aria-hidden="true">4.</strong> 春秋战国时期</a></li><li class="chapter-item expanded "><a href="history-3/index.html"><strong aria-hidden="true">5.</strong> 秦汉时期</a></li><li class="chapter-item expanded "><a href="history-4/index.html"><strong aria-hidden="true">6.</strong> 三国两晋南北朝时期</a></li><li class="chapter-item expanded "><a href="history-5/index.html"><strong aria-hidden="true">7.</strong> 隋唐五代时期</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="history-5/history-5-1.html"><strong aria-hidden="true">7.1.</strong> 王处直</a></li><li class="chapter-item expanded "><a href="history-5/history-5-2.html"><strong aria-hidden="true">7.2.</strong> 李静训</a></li></ol></li><li class="chapter-item expanded "><a href="history-6/index.html"><strong aria-hidden="true">8.</strong> 辽宋夏金元时期</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="history-6/chiwen.html"><strong aria-hidden="true">8.1.</strong> 螭吻</a></li></ol></li><li class="chapter-item expanded "><a href="history-7/index.html"><strong aria-hidden="true">9.</strong> 明清时期</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="history-7/history-7-1.html"><strong aria-hidden="true">9.1.</strong> （宋）王惟一</a></li><li class="chapter-item expanded "><a href="history-7/history-7-2.html"><strong aria-hidden="true">9.2.</strong> 针灸铜人</a></li><li class="chapter-item expanded "><a href="history-7/history-7-3.html"><strong aria-hidden="true">9.3.</strong> 明代针灸铜人像</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.</strong> 参考资料</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/reference-1.html"><strong aria-hidden="true">10.1.</strong> 非洲起源说</a></li><li class="chapter-item expanded "><a href="reference/reference-2.html"><strong aria-hidden="true">10.2.</strong> 分子考古学：考古学的第二次革命</a></li><li class="chapter-item expanded "><a href="reference/reference-3.html"><strong aria-hidden="true">10.3.</strong> 古DNA与分子考古研究</a></li></ol></li></ol>';
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
