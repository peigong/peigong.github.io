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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="note/index.html"><strong aria-hidden="true">2.</strong> 讲解提纲</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="note/The-Earth-Home.html"><strong aria-hidden="true">2.1.</strong> 地球家园</a></li><li class="chapter-item expanded "><a href="note/The-Laws-of-Everything.html"><strong aria-hidden="true">2.2.</strong> 万物法则</a></li><li class="chapter-item expanded "><a href="note/The-Digital-Age.html"><strong aria-hidden="true">2.3.</strong> 数字时代</a></li><li class="chapter-item expanded "><a href="note/Interstellar-Journey.html"><strong aria-hidden="true">2.4.</strong> 星际征程</a></li><li class="chapter-item expanded "><a href="note/The-Imminence-of-the-Future.html"><strong aria-hidden="true">2.5.</strong> 未来已来</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> 地球家园</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.</strong> 太平洋沃克环流</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.</strong> 透光带</div></li><li class="chapter-item expanded "><a href="The-Earth-Home/Whale-Fall.html"><strong aria-hidden="true">3.3.</strong> 鲸落</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.4.</strong> 冷泉</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.5.</strong> 热液</div></li><li class="chapter-item expanded "><a href="The-Earth-Home/primary-production.html"><strong aria-hidden="true">3.6.</strong> 初级生产量</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.7.</strong> 海草床生态系统</div></li><li class="chapter-item expanded "><a href="The-Earth-Home/hong-shu-lin.html"><strong aria-hidden="true">3.8.</strong> 红树林生态系统</a></li><li class="chapter-item expanded "><a href="The-Earth-Home/coral-reef-ecosystem.html"><strong aria-hidden="true">3.9.</strong> 珊瑚生态系统</a></li><li class="chapter-item expanded "><a href="The-Earth-Home/yan-zhao.html"><strong aria-hidden="true">3.10.</strong> 盐沼生态</a></li><li class="chapter-item expanded "><a href="The-Earth-Home/Photosynthesis.html"><strong aria-hidden="true">3.11.</strong> 光合作用</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.12.</strong> 海口鱼</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 万物法则</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">4.1.</strong> 克拉尼图形</div></li><li class="chapter-item expanded "><a href="The-Laws-of-Everything/electromagnetic-gun.html"><strong aria-hidden="true">4.2.</strong> 电磁炮</a></li><li class="chapter-item expanded "><a href="The-Laws-of-Everything/Möbius-band.html"><strong aria-hidden="true">4.3.</strong> 莫比乌斯带</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.4.</strong> 克莱因瓶</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 数字时代</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="The-Digital-Age/Morse-Code.html"><strong aria-hidden="true">5.1.</strong> 摩尔斯电码</a></li><li class="chapter-item expanded "><a href="The-Digital-Age/optical-fiber.html"><strong aria-hidden="true">5.2.</strong> 光学纤维</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> 星际征程</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.</strong> 未来已来</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">7.1.</strong> 引力弹弓</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> 相关人物</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="celebrities/Charles-Kuen-Kao.html"><strong aria-hidden="true">8.1.</strong> 高锟</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> 参考资料</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="referrence/AI/history-of-telegraph.html"><strong aria-hidden="true">9.1.</strong> 电报的历史</a></li><li class="chapter-item expanded "><a href="referrence/AI/Photosynthesis-in-the-Nobel-prize.html"><strong aria-hidden="true">9.2.</strong> 获得诺贝尔奖的光合作用研究</a></li></ol></li></ol>';
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
