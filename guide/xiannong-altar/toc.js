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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="note.html"><strong aria-hidden="true">2.</strong> 讲解提纲</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> 北京中轴线</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.</strong> 钟鼓楼</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.</strong> 万宁桥</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.3.</strong> 景山</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.4.</strong> 故宫</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.5.</strong> 太庙</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.6.</strong> 社稷坛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.7.</strong> 端门</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.8.</strong> 天安门</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.9.</strong> 外金水桥</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.10.</strong> 天安门广场及建筑群</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.11.</strong> 正阳门</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.12.</strong> 天坛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.13.</strong> 先农坛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.14.</strong> 中轴线南段道路遗存</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.15.</strong> 永定门</div></li></ol></li><li class="chapter-item expanded "><a href="xiannong-altar/index.html"><strong aria-hidden="true">4.</strong> 先农坛</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="xiannong-altar/xian-nong.html"><strong aria-hidden="true">4.1.</strong> 先农</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.2.</strong> 庆成宫</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.3.</strong> 神仓</div></li><li class="chapter-item expanded "><a href="xiannong-altar/tai-sui-dian.html"><strong aria-hidden="true">4.4.</strong> 太岁殿</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.5.</strong> 拜殿</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.6.</strong> 焚帛炉</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.7.</strong> 具服殿</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.8.</strong> 观耕台</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.9.</strong> 耤(jí)田（一亩三分地）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.10.</strong> 先农坛祭坛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.11.</strong> 神厨院落</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.12.</strong> 宰牲亭</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 神厨建筑群</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.1.</strong> 井亭</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.2.</strong> 神厨</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.3.</strong> 神牌库</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.4.</strong> 神库</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.5.</strong> 宰牲亭</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.6.</strong> 漂牲池</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.7.</strong> 毛血池</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> 神仓</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">6.1.</strong> 圆廪</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.2.</strong> 收谷亭</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.3.</strong> 仓房</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.4.</strong> 碾房</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.5.</strong> 雄黄玉彩画</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.</strong> 中国古代建筑发展历程</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> 中国古代建筑营造技艺</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="technique/construction-module.html"><strong aria-hidden="true">8.1.</strong> 建筑模数</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.2.</strong> 金砖</div></li><li class="chapter-item expanded "><a href="technique/bracket-system.html"><strong aria-hidden="true">8.3.</strong> 斗拱</a></li><li class="chapter-item expanded "><a href="technique/sunk-panel.html"><strong aria-hidden="true">8.4.</strong> 藻井</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.5.</strong> 中国古代建筑木构技术</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.6.</strong> 建筑施工与构件加工</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> 太岁神坛 - 太岁坛复原陈列</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="tai-sui/tai-sui.html"><strong aria-hidden="true">9.1.</strong> 六十甲子神</a></li><li class="chapter-item expanded "><a href="tai-sui/shi-er-yuan-chen.html"><strong aria-hidden="true">9.2.</strong> 十二元辰</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.</strong> 匠人营国 - 中国古代城市</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">11.</strong> 中国古代建筑类型欣赏</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">12.</strong> 先农坛历史文化展</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">12.1.</strong> 山川坛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">12.2.</strong> 神祇坛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">12.3.</strong> 先农坛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">12.4.</strong> 旗纛庙</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.</strong> 山川有灵 - 地祇坛石龛展</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="di-qi/The-Five-Sacred-Mountains.html"><strong aria-hidden="true">13.1.</strong> 五大镇山</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.</strong> 参考资料</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="referrence/long-fu-si.html"><strong aria-hidden="true">14.1.</strong> 大隆福寺</a></li></ol></li></ol>';
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
