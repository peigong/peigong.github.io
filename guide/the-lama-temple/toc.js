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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="note.html"><strong aria-hidden="true">2.</strong> 讲解提纲</a></li><li class="chapter-item expanded "><a href="price.html"><strong aria-hidden="true">3.</strong> 参观门票价格</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 宝坊院和辇道院</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">4.1.</strong> 牌楼</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.2.</strong> 辇道</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.3.</strong> 佛仓</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 昭泰门（山门）</div></li><li class="chapter-item expanded "><a href="YongheGateHall.html"><strong aria-hidden="true">6.</strong> 雍和门（天王殿）</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">6.1.</strong> 灯杆和灯杆座</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.2.</strong> 青铜巨狮</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.3.</strong> 鼓楼</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.4.</strong> 大铜锅和腊八粥</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.5.</strong> 钟楼</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.6.</strong> 古钟</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.7.</strong> 西碑亭</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.8.</strong> 东碑亭</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.9.</strong> 西阿斯门</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.10.</strong> 东阿斯门</div></li></ol></li><li class="chapter-item expanded "><a href="YongheGongHall.html"><strong aria-hidden="true">7.</strong> 雍和宫（大雄宝殿、银安殿）</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">7.1.</strong> 古铜鼎香炉</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.2.</strong> 四体碑亭</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.3.</strong> 铜铸须弥山</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.4.</strong> 嘛呢杆</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.5.</strong> 讲经殿</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.6.</strong> 密宗殿</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.7.</strong> 时轮殿</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.8.</strong> 药师殿</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.9.</strong> 转经筒</div></li></ol></li><li class="chapter-item expanded "><a href="YongyouHall.html"><strong aria-hidden="true">8.</strong> 永佑殿（正寝殿、神御殿）</a></li><li class="chapter-item expanded "><a href="FalunHall.html"><strong aria-hidden="true">9.</strong> 法轮殿</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.1.</strong> 西配殿</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.2.</strong> 东配殿</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.3.</strong> 戒台楼</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.4.</strong> 班禅楼</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.5.</strong> 五百罗汉山</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.6.</strong> 鱼龙盆</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.</strong> 金贲巴瓶</div></li></ol></li><li class="chapter-item expanded "><a href="WanfugePavilion.html"><strong aria-hidden="true">10.</strong> 万福阁</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">10.1.</strong> 延绥阁</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.2.</strong> 永康阁</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.3.</strong> 雅曼达嘎楼</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.4.</strong> 昭佛楼</div></li></ol></li><li class="chapter-item expanded "><a href="SuichengHall.html"><strong aria-hidden="true">11.</strong> 绥成殿</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">11.1.</strong> 西顺山楼</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">11.2.</strong> 东顺山楼</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">12.</strong> 藏传佛教知识</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="knowledge/fo-mu.html"><strong aria-hidden="true">12.1.</strong> 佛母</a></li><li class="chapter-item expanded "><a href="knowledge/du-mu.html"><strong aria-hidden="true">12.2.</strong> 度母</a></li><li class="chapter-item expanded "><a href="knowledge/hu-fa.html"><strong aria-hidden="true">12.3.</strong> 护法</a></li><li class="chapter-item expanded "><a href="knowledge/Vajra.html"><strong aria-hidden="true">12.4.</strong> 金刚</a></li><li class="chapter-item expanded "><a href="knowledge/zhan-tan-fo.html"><strong aria-hidden="true">12.5.</strong> 旃檀佛</a></li><li class="chapter-item expanded "><a href="knowledge/chang-shou-fo.html"><strong aria-hidden="true">12.6.</strong> 长寿佛</a></li><li class="chapter-item expanded "><a href="knowledge/shi-hou-fo.html"><strong aria-hidden="true">12.7.</strong> 狮吼佛</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.</strong> 相关人物</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">13.1.</strong> 弥勒菩萨</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.2.</strong> 四大金刚</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.3.</strong> 韦陀尊者</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.4.</strong> 大威德金刚</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.5.</strong> 章嘉呼图克图</div></li><li class="chapter-item expanded "><a href="celebrities/zong-ka-ba.html"><strong aria-hidden="true">13.6.</strong> 宗喀巴</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.7.</strong> 达赖</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.8.</strong> 班禅</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.9.</strong> 哲布尊丹巴</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.</strong> 相关文献</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">14.1.</strong> 御制雍和宫碑文</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.2.</strong> 酌定西藏善后章程十三条</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.3.</strong> 钦定二十九条章程</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.4.</strong> 御制喇嘛说</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">15.</strong> 扩展内容</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">15.1.</strong> 蒙麻脱沙法</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">15.2.</strong> 彩绘拨金</div></li></ol></li></ol>';
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
