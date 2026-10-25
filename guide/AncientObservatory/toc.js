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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="note/index.html"><strong aria-hidden="true">2.</strong> 讲解提纲</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="note/celebrities.html"><strong aria-hidden="true">2.1.</strong> 相关人物</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> 建筑</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.</strong> 紫微殿</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.</strong> 晷景堂</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 相关概念</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="lexicon/equator-ecliptic-moonspath.html"><strong aria-hidden="true">4.1.</strong> 赤道、黄道和白道</a></li><li class="chapter-item expanded "><a href="lexicon/nautical-mile.html"><strong aria-hidden="true">4.2.</strong> 海里</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 文物遗存</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="ancient-astronomy/di-ping-jing-wei-yi.html"><strong aria-hidden="true">5.1.</strong> 地平经纬仪</a></li><li class="chapter-item expanded "><a href="ancient-astronomy/chi-dao-jing-wei-yi.html"><strong aria-hidden="true">5.2.</strong> 赤道经纬仪</a></li><li class="chapter-item expanded "><a href="ancient-astronomy/huang-dao-jing-wei-yi.html"><strong aria-hidden="true">5.3.</strong> 黄道经纬仪</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.4.</strong> 天体仪</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.5.</strong> 纪限仪（六分仪）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.6.</strong> 地平经仪</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.7.</strong> 象限仪（地平纬仪）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.8.</strong> 玑衡抚辰仪</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> 古代天文</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="ancient-astronomy/sundial.html"><strong aria-hidden="true">6.1.</strong> 日晷</a></li><li class="chapter-item expanded "><a href="ancient-astronomy/di-ping-shi-ri-gui.html"><strong aria-hidden="true">6.2.</strong> 地平式日晷</a></li><li class="chapter-item expanded "><a href="ancient-astronomy/moondial.html"><strong aria-hidden="true">6.3.</strong> 月晷</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.4.</strong> 星晷</div></li><li class="chapter-item expanded "><a href="ancient-astronomy/armillary-sphere.html"><strong aria-hidden="true">6.5.</strong> 浑仪</a></li><li class="chapter-item expanded "><a href="ancient-astronomy/hun-tian-yi.html"><strong aria-hidden="true">6.6.</strong> 浑天仪</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.7.</strong> 玲珑仪</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.8.</strong> 仰仪</div></li><li class="chapter-item expanded "><a href="ancient-astronomy/zheng-fang-an.html"><strong aria-hidden="true">6.9.</strong> 正方案</a></li><li class="chapter-item expanded "><a href="ancient-astronomy/jian-yi.html"><strong aria-hidden="true">6.10.</strong> 简仪</a></li><li class="chapter-item expanded "><a href="ancient-astronomy/gui-biao.html"><strong aria-hidden="true">6.11.</strong> 圭表</a></li><li class="chapter-item expanded "><a href="ancient-astronomy/star-observation-platform.html"><strong aria-hidden="true">6.12.</strong> 观星台（登封测影台）</a></li><li class="chapter-item expanded "><a href="ancient-astronomy/shui-yun-yi-xiang-tai.html"><strong aria-hidden="true">6.13.</strong> 水运仪象台</a></li><li class="chapter-item expanded "><a href="ancient-astronomy/di-lou.html"><strong aria-hidden="true">6.14.</strong> 滴漏</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.15.</strong> 秤漏</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.16.</strong> 莲花漏</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.17.</strong> 水准测量仪</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.18.</strong> 地动仪</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.19.</strong> 记里鼓车</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.20.</strong> 指南车</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.</strong> 相关人物</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">7.1.</strong> 张衡，汉</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.2.</strong> 祖冲之，南北朝</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.3.</strong> 一行，唐</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.4.</strong> 沈括，北宋</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.5.</strong> 黄裳</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.6.</strong> 王恂</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.7.</strong> 郭守敬</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.8.</strong> 徐光启，明</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.9.</strong> 亚里士多德</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.10.</strong> 托勒密</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.11.</strong> 哥白尼</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.12.</strong> 第谷·布拉赫</div></li><li class="chapter-item expanded "><a href="celebrities/the-death-of-Tycho-Brahe.html"><strong aria-hidden="true">7.13.</strong> 第谷·布拉赫：一个被尿憋死的天才</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.14.</strong> 开普勒</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.15.</strong> 布鲁诺</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.16.</strong> 伽利略</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.17.</strong> 牛顿</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.18.</strong> 威廉·赫歇尔</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.19.</strong> 汤若望，德</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.20.</strong> 南怀仁</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.21.</strong> 杨光先</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.22.</strong> 纪理安</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.23.</strong> 戴进贤</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.24.</strong> 刘松龄</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.25.</strong> 李鉴澄</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> 相关文化</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">8.1.</strong> 观象授时</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.2.</strong> 观察惟勤</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> 参考资料</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/su-zhou-xing-tu.html"><strong aria-hidden="true">9.1.</strong> 苏州石刻天文图</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.2.</strong> 第谷体系</div></li><li class="chapter-item expanded "><a href="reference/AI/Tycho.html"><strong aria-hidden="true">9.3.</strong> 第谷的天文学体系和天文观测工具</a></li><li class="chapter-item expanded "><a href="reference/AI/kang-xi.html"><strong aria-hidden="true">9.4.</strong> 康熙年间的历法之争</a></li><li class="chapter-item expanded "><a href="reference/AI/Classical-Astronomy.html"><strong aria-hidden="true">9.5.</strong> 西方古典天文学</a></li><li class="chapter-item expanded "><a href="reference/AI/degree-360.html"><strong aria-hidden="true">9.6.</strong> 圆周360度的渊源</a></li><li class="chapter-item expanded "><a href="reference/AI/zheng-fang-an-or-sundial.html"><strong aria-hidden="true">9.7.</strong> 简仪上应该是正方案，还是地平式日晷？</a></li><li class="chapter-item expanded "><a href="reference/AI/Nautical-Almanac-and-Marine-Chronometer.html"><strong aria-hidden="true">9.8.</strong> 航海天文历和航海钟</a></li><li class="chapter-item expanded "><a href="reference/AI/sextant.html"><strong aria-hidden="true">9.9.</strong> 六分仪</a></li></ol></li></ol>';
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
