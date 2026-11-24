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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="note.html"><strong aria-hidden="true">2.</strong> 讲解提纲</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="note/f1.html"><strong aria-hidden="true">2.1.</strong> 一层大厅</a></li><li class="chapter-item expanded "><a href="note/Secrets-of-Life-Exhibition.html"><strong aria-hidden="true">2.2.</strong> 生命展厅</a></li><li class="chapter-item expanded "><a href="note/Technology-and-Everyday-Life-Exhibition.html"><strong aria-hidden="true">2.3.</strong> 生活展厅</a></li><li class="chapter-item expanded "><a href="note/Exhibition-on-Survival-Through-Nature.html"><strong aria-hidden="true">2.4.</strong> 生存展厅</a></li><li class="chapter-item expanded "><a href="note/Central-Axis.html"><strong aria-hidden="true">2.5.</strong> 科技中轴</a></li><li class="chapter-item expanded "><a href="note/Science-Rediscovery.html"><strong aria-hidden="true">2.6.</strong> 科学再发现</a></li><li class="chapter-item expanded "><a href="note/AI-Creatives.html"><strong aria-hidden="true">2.7.</strong> AI 创想记</a></li><li class="chapter-item expanded "><a href="note/celebrities.html"><strong aria-hidden="true">2.8.</strong> 新时代首都科创人物风采展</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> 一层大厅</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.</strong> 堑堵qiàn dǔ</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.</strong> ‌阳马‌</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.3.</strong> 鳖臑（biē nào）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.4.</strong> 角动量</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.5.</strong> 转动惯量</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.6.</strong> 阿基米德墓碑</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.7.</strong> 奋斗者号</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.8.</strong> 三等分角</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.9.</strong> 化圆为方</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.10.</strong> 倍立方问题</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 生命展厅</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">4.1.</strong> 蟹化</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 生活展厅</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.1.</strong> 天鲲号</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.2.</strong> 伯努利原理</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.3.</strong> 等宽曲线</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> 生存展厅</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">6.1.</strong> 宇宙秒</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.2.</strong> 莫霍界面</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.3.</strong> 古登堡界面</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.4.</strong> 雪龙2</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.</strong> 中轴线展厅</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> 科学再发现</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">8.1.</strong> 偏振光</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.2.</strong> 热质说</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.3.</strong> 芝诺悖论</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.4.</strong> 希尔伯特旅馆</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.5.</strong> 墨卡托投影</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> AI 创想记</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.</strong> 新时代首都科创人物风采展</div></li></ol>';
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
