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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="jing-de-jie.html"><strong aria-hidden="true">2.</strong> 景德街牌楼</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> 北京通史陈列</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.</strong> 文明曙光</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.1.</strong> 北京猿人</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.2.</strong> 新洞人</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.3.</strong> 田园洞人</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.4.</strong> 山顶洞人</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.5.</strong> 东胡林人</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.</strong> 建城之始</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.3.</strong> 北方重镇</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.4.</strong> 建都之始</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.5.</strong> 大都肇建</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.6.</strong> 都城典范</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.7.</strong> 京师繁华</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.8.</strong> 古都破晓</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 墓葬遗址</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Site/LiuliheSite.html"><strong aria-hidden="true">4.1.</strong> 琉璃河遗址</a></li><li class="chapter-item expanded "><a href="Site/Dabaotai.html"><strong aria-hidden="true">4.2.</strong> 大葆台西汉墓遗址</a></li><li class="chapter-item expanded "><a href="Site/Han-Tomb-at-Laoshan.html"><strong aria-hidden="true">4.3.</strong> 老山汉墓</a></li><li class="chapter-item expanded "><a href="Site/shi-si-ming.html"><strong aria-hidden="true">4.4.</strong> 史思明墓</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.5.</strong> 怀柔转年遗址</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.6.</strong> 平谷上宅文化遗址</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.7.</strong> 昌平雪山村文化遗址</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.8.</strong> 刘家河商代墓葬遗址</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.9.</strong> 军都山玉皇庙墓</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 精品文物</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.1.</strong> 01、北京人头盖骨化石</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.2.</strong> 02、镇江营遗址陶釜</div></li><li class="chapter-item expanded "><a href="core/ke-he.html"><strong aria-hidden="true">5.3.</strong> 03、西周克盉(hé)</a></li><li class="chapter-item expanded "><a href="core/ke-lei.html"><strong aria-hidden="true">5.4.</strong> 03、西周克罍(léi)</a></li><li class="chapter-item expanded "><a href="core/bo-ju-li.html"><strong aria-hidden="true">5.5.</strong> 04、西周伯矩鬲(lì)</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.6.</strong> 05、堇(jǐn)鼎</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.7.</strong> 06、老山汉墓荒帏</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.8.</strong> 07、华芳墓八子银铃</div></li><li class="chapter-item expanded "><a href="core/Stirrup.html"><strong aria-hidden="true">5.9.</strong> 08、史思明墓嵌金铁马镫</a></li><li class="chapter-item expanded "><a href="core/tai-he.html"><strong aria-hidden="true">5.10.</strong> 09、魏太和造像</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.11.</strong> 10、鎏金银面具</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.12.</strong> 11、金大安殿遗址铜坐龙</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.13.</strong> 12、龙凤纹石椁</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.14.</strong> 13、辽代石函</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.15.</strong> 14、景德镇窑青花凤首扁瓶</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.16.</strong> 15、景德镇窑青白釉水月观音菩萨像</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.17.</strong> 16、景德镇窑青白釉戏剧舞台人物纹枕</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.18.</strong> 17、鋄(jiǎn)金云龙纹铁盔</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.19.</strong> 18、宣德款铜炉</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.20.</strong> 19、织锦夹金五佛冠</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.21.</strong> 20、缂丝十二章龙袍</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> 重要文物</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">6.1.</strong> 成周卜甲</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.2.</strong> 圉(yǔ)鼎</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.3.</strong> 乙公簋(guǐ)</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.4.</strong> 攸簋(guǐ)</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.5.</strong> 子方罍(léi)</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.6.</strong> 兽耳三足铜禾</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.7.</strong> 单耳三角云纹铜禾</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.8.</strong> 漆笥(sì)</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.9.</strong> 鎏金车马器</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.10.</strong> 铜鐎(jiāo)壶</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.11.</strong> 耳杯形铜灯</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.12.</strong> 玻璃钵</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.13.</strong> 大代款铜鎏金释迦佛像</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.14.</strong> 舍利函</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.15.</strong> 灰陶契丹人俑</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.16.</strong> 泰和八年铁狮</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.17.</strong> 石函</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.18.</strong> 铜权</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.19.</strong> 嘉靖款景德镇窑青花红彩鱼藻纹</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.20.</strong> 嘉靖款雕漆填花卉云鹤纹圆盒</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.21.</strong> 碧玉灵芝纹双连壶卣(yǒu)</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.22.</strong> 景德镇窑粉彩观音菩萨像</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.23.</strong> 景德镇窑青花缠枝牡丹纹盖罐</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.24.</strong> 西洋珐琅双鸟鸣钟</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.</strong> 文献</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="literature/chun-wang.html"><strong aria-hidden="true">7.1.</strong> 杜甫 - 春望</a></li><li class="chapter-item expanded "><a href="literature/shi-hao-li.html"><strong aria-hidden="true">7.2.</strong> 杜甫 - 石壕吏</a></li><li class="chapter-item expanded "><a href="literature/wen-guan-jun.html"><strong aria-hidden="true">7.3.</strong> 杜甫 - 闻官军收河南河北</a></li><li class="chapter-item expanded "><a href="literature/chang-chu-yuan-ji.html"><strong aria-hidden="true">7.4.</strong> 畅春园记</a></li><li class="chapter-item expanded "><a href="literature/di-du-pian.html"><strong aria-hidden="true">7.5.</strong> 乾隆御制碑 - 帝都篇</a></li><li class="chapter-item expanded "><a href="literature/huang-du-pian.html"><strong aria-hidden="true">7.6.</strong> 乾隆御制碑 - 皇都篇</a></li><li class="chapter-item expanded "><a href="literature/tuo-luo-ni.html"><strong aria-hidden="true">7.7.</strong> 佛顶尊胜陀罗尼经</a></li><li class="chapter-item expanded "><a href="literature/hua-fang-mu-zhi.html"><strong aria-hidden="true">7.8.</strong> 王浚妻华芳墓志</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> 重要人物</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="celebrities/liu-dan.html"><strong aria-hidden="true">8.1.</strong> 燕王刘旦</a></li><li class="chapter-item expanded "><a href="celebrities/liu-jian.html"><strong aria-hidden="true">8.2.</strong> 广阳王刘建</a></li><li class="chapter-item expanded "><a href="celebrities/wang-jun.html"><strong aria-hidden="true">8.3.</strong> 王浚</a></li><li class="chapter-item expanded "><a href="celebrities/hua-fang.html"><strong aria-hidden="true">8.4.</strong> 华芳</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.5.</strong> 安禄山</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.6.</strong> 史思明</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.7.</strong> 利玛窦</div></li></ol></li></ol>';
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
