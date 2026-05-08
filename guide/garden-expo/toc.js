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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="BeijingGardenExpo/index.html"><strong aria-hidden="true">2.</strong> 北京园博园</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">2.1.</strong> 园博湖（永定河）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.2.</strong> 锦绣谷</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.3.</strong> 湿地</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.4.</strong> 丘比特花坛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.5.</strong> 依文时尚欧洲园（欧洲城堡）</div></li><li class="chapter-item expanded "><a href="BeijingGardenExpo/Taihu-Lake-stone.html"><strong aria-hidden="true">2.6.</strong> 太湖石</a></li><li class="chapter-item expanded "><a href="BeijingGardenExpo/xiu-yan-yu.html"><strong aria-hidden="true">2.7.</strong> 岫岩玉</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.8.</strong> 重庆园</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.9.</strong> 永定塔</div></li><li class="chapter-item expanded "><a href="BeijingGardenExpo/pagoda.html"><strong aria-hidden="true">2.10.</strong> 佛塔</a></li></ol></li><li class="chapter-item expanded "><a href="beijing/index.html"><strong aria-hidden="true">3.</strong> 北京园</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.</strong> 京西引水石槽</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.</strong> 雕漆</div></li></ol></li><li class="chapter-item expanded "><a href="jiang-su/index.html"><strong aria-hidden="true">4.</strong> 江苏园·忆江南</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">4.1.</strong> 忆江南</div></li></ol></li><li class="chapter-item expanded "><a href="fu-jiang/index.html"><strong aria-hidden="true">5.</strong> 福建园·闽园</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="fu-jiang/Fujian-Tulou.html"><strong aria-hidden="true">5.1.</strong> 福建土楼</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.2.</strong> 闽都文化</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.3.</strong> 闽南文化</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.4.</strong> 客家文化</div></li><li class="chapter-item expanded "><a href="fu-jiang/Mazu-Culture.html"><strong aria-hidden="true">5.5.</strong> 妈祖文化</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.6.</strong> 闽南大厝(cuò‌)</div></li><li class="chapter-item expanded "><a href="fu-jiang/Dovetail-ridge.html"><strong aria-hidden="true">5.7.</strong> 燕尾脊</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.8.</strong> 和福居</div></li><li class="chapter-item expanded "><a href="fu-jiang/bu-dai-xi.html"><strong aria-hidden="true">5.9.</strong> 布袋戏</a></li><li class="chapter-item expanded "><a href="fu-jiang/ge-zai-xi.html"><strong aria-hidden="true">5.10.</strong> 歌仔戏</a></li><li class="chapter-item expanded "><a href="fu-jiang/fang-jian-tang.html"><strong aria-hidden="true">5.11.</strong> 方鉴池（方鉴塘）</a></li><li class="chapter-item expanded "><a href="fu-jiang/ji-mei-nan-xun-lou.html"><strong aria-hidden="true">5.12.</strong> 集美南薰楼</a></li><li class="chapter-item expanded "><a href="fu-jiang/Tan-Kah-Kee.html"><strong aria-hidden="true">5.13.</strong> 陈嘉庚</a></li><li class="chapter-item expanded "><a href="fu-jiang/wind-and-rain-bridge.html"><strong aria-hidden="true">5.14.</strong> 风雨桥</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.15.</strong> 闽山第一亭</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.16.</strong> 真乐山房</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.17.</strong> 太平猴魁</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.18.</strong> 君山毛峰</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.19.</strong> 西湖龙井</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.20.</strong> 茉莉香片</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.21.</strong> 武夷岩茶</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.22.</strong> 进士石</div></li></ol></li><li class="chapter-item expanded "><a href="guang-dong/index.html"><strong aria-hidden="true">6.</strong> 广东园·岭南园</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">6.1.</strong> 九曜春晓</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.2.</strong> 月照明堂</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.3.</strong> 南国红豆</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.4.</strong> 雨打芭蕉</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.5.</strong> 粤韵风华</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.6.</strong> 渔歌唱晚</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.7.</strong> 冸塘荷风</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.8.</strong> 冸塘五秀</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.9.</strong> 粤菜五滋六味</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.10.</strong> 妆台绮绣</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.11.</strong> 虹云飞韵</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.12.</strong> 秋水龙吟</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.13.</strong> 英哥舞</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.14.</strong> 惠州一绝</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.15.</strong> 潮州木雕</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.16.</strong> 功夫茶</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.17.</strong> 卓锡泉</div></li></ol></li><li class="chapter-item expanded "><a href="BeijingGardenExpo/ji-nan.html"><strong aria-hidden="true">7.</strong> 济南园</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ji-nan/Baotu-Spring.html"><strong aria-hidden="true">7.1.</strong> 趵突泉</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.2.</strong> 大明湖：四面荷花三面柳，一城山色半城湖</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.3.</strong> 泉水人家：清泉石上流</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.4.</strong> 五龙漱玉</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.5.</strong> 汇波轩</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> 参考资料</div></li></ol>';
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
