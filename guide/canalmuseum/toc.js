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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="basic.html"><strong aria-hidden="true">2.</strong> 基本陈列</a></li><li class="chapter-item expanded "><a href="special/index.html"><strong aria-hidden="true">3.</strong> 专题展览</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="special/special-1.html"><strong aria-hidden="true">3.1.</strong> 燕赵乘春复此行——京津冀协同发展专题展</a></li><li class="chapter-item expanded "><a href="special/special-2.html"><strong aria-hidden="true">3.2.</strong> 五光十色——故宫博物院藏古代颜色釉瓷器展</a></li><li class="chapter-item expanded "><a href="special/special-3.html"><strong aria-hidden="true">3.3.</strong> 沧海撷珠——北京市文物交流中心珍藏文物展</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 扩展内容</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">4.1.</strong> 高句丽和朝鲜</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.2.</strong> 汴河怀古二首</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.3.</strong> 孔府南北宗</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.4.</strong> 海陵王完颜亮</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.5.</strong> 马可波罗游记</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.6.</strong> 河道总督</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.7.</strong> 建国初期的水利</div></li></ol></li></ol>';
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
