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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="Old-Summer-Palace/index.html"><strong aria-hidden="true">2.</strong> 圆明园</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Old-Summer-Palace/chang-chun-xian-guan.html"><strong aria-hidden="true">2.1.</strong> 长春仙馆</a></li></ol></li><li class="chapter-item expanded "><a href="qi-chun-yuan/index.html"><strong aria-hidden="true">3.</strong> 绮春园</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.</strong> 迎晖门</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.</strong> 鉴碧亭</div></li><li class="chapter-item expanded "><a href="qi-chun-yuan/Remnants-of-a-Stone-Bridge.html"><strong aria-hidden="true">3.3.</strong> 单孔石桥</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.4.</strong> 涵秋馆</div></li><li class="chapter-item expanded "><a href="qi-chun-yuan/xian-ren-cheng-lu.html"><strong aria-hidden="true">3.5.</strong> 仙人承露</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.6.</strong> 三孔石桥</div></li></ol></li><li class="chapter-item expanded "><a href="chang-chun-yuan/index.html"><strong aria-hidden="true">4.</strong> 长春园</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chang-chun-yuan/hai-yue-kai-jin.html"><strong aria-hidden="true">4.1.</strong> 海岳开襟</a></li></ol></li><li class="chapter-item expanded "><a href="xi-yang-lou/index.html"><strong aria-hidden="true">5.</strong> 西洋楼遗址</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="xi-yang-lou/copperplate.html"><strong aria-hidden="true">5.1.</strong> 西洋楼透视图铜版画</a></li><li class="chapter-item expanded "><a href="xi-yang-lou/xie-qi-qu.html"><strong aria-hidden="true">5.2.</strong> 谐奇趣</a></li><li class="chapter-item expanded "><a href="xi-yang-lou/yellow-array.html"><strong aria-hidden="true">5.3.</strong> 万花阵</a></li><li class="chapter-item expanded "><a href="xi-yang-lou/yang-que-long.html"><strong aria-hidden="true">5.4.</strong> 养雀笼</a></li><li class="chapter-item expanded "><a href="xi-yang-lou/rong-fei.html"><strong aria-hidden="true">5.5.</strong> 容妃</a></li><li class="chapter-item expanded "><a href="xi-yang-lou/fang-wai-guan.html"><strong aria-hidden="true">5.6.</strong> 方外观</a></li><li class="chapter-item expanded "><a href="xi-yang-lou/xi-hai.html"><strong aria-hidden="true">5.7.</strong> 锡海</a></li><li class="chapter-item expanded "><a href="xi-yang-lou/The-Hall-of-National-Peace.html"><strong aria-hidden="true">5.8.</strong> 海晏堂</a></li><li class="chapter-item expanded "><a href="xi-yang-lou/Bronze-statue.html"><strong aria-hidden="true">5.9.</strong> 圆明园十二生肖兽首铜像</a></li><li class="chapter-item expanded "><a href="xi-yang-lou/Dashuifa-Site.html"><strong aria-hidden="true">5.10.</strong> 大水法</a></li><li class="chapter-item expanded "><a href="xi-yang-lou/yuan-ying-guan.html"><strong aria-hidden="true">5.11.</strong> 远瀛观</a></li><li class="chapter-item expanded "><a href="xi-yang-lou/guan-shui-fa.html"><strong aria-hidden="true">5.12.</strong> 观水法</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> 考古</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">6.1.</strong> 考古中的遗迹</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.2.</strong> 考古中的遗物</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.3.</strong> 考古工具</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.4.</strong> 考古与现代科技</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.5.</strong> 田野考古工作规程</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.</strong> 圆明新园</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="New-Yuanming-Palace/New-Yuanming-Palace-1.html"><strong aria-hidden="true">7.1.</strong> 珠海圆明新园</a></li><li class="chapter-item expanded "><a href="New-Yuanming-Palace/New-Yuanming-Palace-2.html"><strong aria-hidden="true">7.2.</strong> 东阳圆明新园</a></li></ol></li><li class="chapter-item expanded "><a href="black-swan/index.html"><strong aria-hidden="true">8.</strong> 圆明园黑天鹅</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="black-swan/black-swan-1.html"><strong aria-hidden="true">8.1.</strong> 圆明园的黑天鹅</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> 北京一零一中</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.</strong> 扩展知识</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="extend/Baroque-Art.html"><strong aria-hidden="true">10.1.</strong> 巴洛克艺术</a></li><li class="chapter-item expanded "><a href="extend/rococo.html"><strong aria-hidden="true">10.2.</strong> 洛可可</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.3.</strong> 维克多·雨果（Victor Hugo）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.4.</strong> 刘猛将军</div></li></ol></li></ol>';
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
