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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="note.html"><strong aria-hidden="true">2.</strong> 讲解提纲</a></li><li class="chapter-item expanded "><a href="Dream-of-Red-Mansion.html"><strong aria-hidden="true">3.</strong> 红楼梦索引</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 相关文献</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="literature/ti-po-shan-si-hou-chan-yuan.html"><strong aria-hidden="true">4.1.</strong> 题破山寺后禅院（常建）</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.2.</strong> 醉翁亭记（欧阳修）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.3.</strong> 清明（杜牧）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.4.</strong> 题杏林春燕（唐寅）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.5.</strong> 晚自朝台津至韦隐居郊园（许浑）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.6.</strong> 桃花园记（陶渊明）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.7.</strong> 闺怨（鱼玄机）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.8.</strong> 黄鹤楼（崔颢）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.9.</strong> 登金陵凤凰台（李白）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.10.</strong> 群芳谱</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.11.</strong> 海棠（苏轼）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.12.</strong> 奉和贾至舍人早朝大明宫（杜甫）</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 相关人物</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.1.</strong> 蒋诩</div></li></ol></li></ol>';
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
