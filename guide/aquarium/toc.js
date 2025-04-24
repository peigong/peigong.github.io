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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="selva/index.html"><strong aria-hidden="true">2.</strong> 雨林奇观</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="selva/0.serrasalminae.html"><strong aria-hidden="true">2.1.</strong> 食人鱼</a></li><li class="chapter-item expanded "><a href="selva/1.symphysodon-aequifasciata.html"><strong aria-hidden="true">2.2.</strong> 缸#1 七彩神仙</a></li><li class="chapter-item expanded "><a href="selva/2.cyprinus-carpio.html"><strong aria-hidden="true">2.3.</strong> 锦鲤</a></li><li class="chapter-item expanded "><a href="selva/3.amphilophus-citrinellus-x-vieja-melanurus.html"><strong aria-hidden="true">2.4.</strong> 缸#2 血鹦鹉</a></li><li class="chapter-item expanded "><a href="selva/4.jar.html"><strong aria-hidden="true">2.5.</strong> 缸#3 射水鱼、蝙蝠鲳、黄鳍鲳</a></li><li class="chapter-item expanded "><a href="selva/5.jar.html"><strong aria-hidden="true">2.6.</strong> 缸#4 皇冠三间、非洲十间、白鲨</a></li><li class="chapter-item expanded "><a href="selva/6.jar.html"><strong aria-hidden="true">2.7.</strong> 缸#5 红招财、金帆船、大铅笔</a></li><li class="chapter-item expanded "><a href="selva/7.andrias-davidianus.html"><strong aria-hidden="true">2.8.</strong> 娃娃鱼</a></li><li class="chapter-item expanded "><a href="selva/8.jar.html"><strong aria-hidden="true">2.9.</strong> 缸#6 热带雨林景观</a></li><li class="chapter-item expanded "><a href="selva/9.jar.html"><strong aria-hidden="true">2.10.</strong> 缸#7 巨骨舌鱼、鳄雀鳝、淡水白鲳、红尾鲶</a></li><li class="chapter-item expanded "><a href="selva/10.jar.html"><strong aria-hidden="true">2.11.</strong> 缸#8 七彩神仙的繁殖</a></li><li class="chapter-item expanded "><a href="selva/11.jar.html"><strong aria-hidden="true">2.12.</strong> 缸#9 长吻雀鳝、七星刀</a></li><li class="chapter-item expanded "><a href="selva/12.jar.html"><strong aria-hidden="true">2.13.</strong> 缸#10 长丝𩷶（máng）、泰庞海鲢</a></li><li class="chapter-item expanded "><a href="selva/13.jar.html"><strong aria-hidden="true">2.14.</strong> 缸#11 南美生态缸</a></li><li class="chapter-item expanded "><a href="selva/14.jar.html"><strong aria-hidden="true">2.15.</strong> 缸#12 澳洲星斑龙、火鹤</a></li><li class="chapter-item expanded "><a href="selva/15.jar.html"><strong aria-hidden="true">2.16.</strong> 缸#13 钟灵毓秀、霓虹脂鲤</a></li><li class="chapter-item expanded "><a href="selva/16.jar.html"><strong aria-hidden="true">2.17.</strong> 缸#14 绿雨滨蛙和两栖动物</a></li><li class="chapter-item expanded "><a href="selva/17.macrochelodina-rugosa-ogilby.html"><strong aria-hidden="true">2.18.</strong> 缸#15 长颈龟</a></li><li class="chapter-item expanded "><a href="selva/18.ppogona-vitticeps.html"><strong aria-hidden="true">2.19.</strong> 缸#16 鬃狮蜥</a></li><li class="chapter-item expanded "><a href="selva/19.jar.html"><strong aria-hidden="true">2.20.</strong> 缸#17 玻璃象、珍珠马甲、红尾彩虹鱼</a></li><li class="chapter-item expanded "><a href="selva/20.jar.html"><strong aria-hidden="true">2.21.</strong> 缸#18 原生溪流缸</a></li><li class="chapter-item expanded "><a href="selva/21.jar.html"><strong aria-hidden="true">2.22.</strong> 缸#19 黑魔鬼、三间鼠</a></li><li class="chapter-item expanded "><a href="selva/22.jar.html"><strong aria-hidden="true">2.23.</strong> 缸#20 九节龙、倒游鼠</a></li><li class="chapter-item expanded "><a href="selva/23.jar.html"><strong aria-hidden="true">2.24.</strong> 缸#21 玻璃猫、一线飞狐</a></li><li class="chapter-item expanded "><a href="selva/24.jar.html"><strong aria-hidden="true">2.25.</strong> 缸#22 棕竹、海鱼、银板</a></li></ol></li><li class="chapter-item expanded "><a href="seafloor/index.html"><strong aria-hidden="true">3.</strong> 海底环游</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="seafloor/chelonia-mydas.html"><strong aria-hidden="true">3.1.</strong> 绿海龟</a></li><li class="chapter-item expanded "><a href="seafloor/asteroidea.html"><strong aria-hidden="true">3.2.</strong> 海星</a></li><li class="chapter-item expanded "><a href="seafloor/amphiprion-actiniaria.html"><strong aria-hidden="true">3.3.</strong> 小丑鱼和海葵</a></li><li class="chapter-item expanded "><a href="seafloor/spheniscidae.html"><strong aria-hidden="true">3.4.</strong> 企鹅</a></li><li class="chapter-item expanded "><a href="seafloor/anthozoa.html"><strong aria-hidden="true">3.5.</strong> 珊瑚</a></li><li class="chapter-item expanded "><a href="seafloor/medusozoa.html"><strong aria-hidden="true">3.6.</strong> 水母</a></li><li class="chapter-item expanded "><a href="seafloor/hippocampus.html"><strong aria-hidden="true">3.7.</strong> 海马</a></li><li class="chapter-item expanded "><a href="seafloor/delphinidae.html"><strong aria-hidden="true">3.8.</strong> 海豚</a></li><li class="chapter-item expanded "><a href="seafloor/octopodidae.html"><strong aria-hidden="true">3.9.</strong> 章鱼</a></li></ol></li><li class="chapter-item expanded "><a href="shark/index.html"><strong aria-hidden="true">4.</strong> 鲨鱼小镇</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="shark/shark.html"><strong aria-hidden="true">4.1.</strong> 鲨鱼</a></li><li class="chapter-item expanded "><a href="shark/ratomorpha-stingray.html"><strong aria-hidden="true">4.2.</strong> 鳐鱼和魔鬼鱼</a></li></ol></li><li class="chapter-item expanded "><a href="chinese-sturgeon.html"><strong aria-hidden="true">5.</strong> 国宝中华鲟馆</a></li></ol>';
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
