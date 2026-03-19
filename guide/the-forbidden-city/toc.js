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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="tian-an-gate.html"><strong aria-hidden="true">2.</strong> 天安门</a></li><li class="chapter-item expanded "><a href="meridian-gate.html"><strong aria-hidden="true">3.</strong> 午门</a></li><li class="chapter-item expanded "><a href="the-gate-of-supreme-harmony.html"><strong aria-hidden="true">4.</strong> 太和门</a></li><li class="chapter-item expanded "><a href="the-big-courtyard-in-front-of-the-hall-of-supreme-harmony.html"><strong aria-hidden="true">5.</strong> 太和殿前广场</a></li><li class="chapter-item expanded "><a href="the-hall-of-supreme-harmony.html"><strong aria-hidden="true">6.</strong> 太和殿</a></li><li class="chapter-item expanded "><a href="the-hall-of-complete-harmony.html"><strong aria-hidden="true">7.</strong> 中和殿</a></li><li class="chapter-item expanded "><a href="the-hall-of-preserving-harmony.html"><strong aria-hidden="true">8.</strong> 保和殿</a></li><li class="chapter-item expanded "><a href="the-gate-of-heavenly-purity.html"><strong aria-hidden="true">9.</strong> 乾清门</a></li><li class="chapter-item expanded "><a href="the-palace-of-heavenly-purity.html"><strong aria-hidden="true">10.</strong> 乾清宫</a></li><li class="chapter-item expanded "><a href="the-palace-of-union-and-peace.html"><strong aria-hidden="true">11.</strong> 交泰殿</a></li><li class="chapter-item expanded "><a href="the-palace-of-earthly-tranquility.html"><strong aria-hidden="true">12.</strong> 坤宁宫</a></li><li class="chapter-item expanded "><a href="the-imperial-garden.html"><strong aria-hidden="true">13.</strong> 御花园</a></li><li class="chapter-item expanded "><a href="the-gate-of-divine-prowess.html"><strong aria-hidden="true">14.</strong> 神武门</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">15.</strong> 宁寿全宫</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">15.1.</strong> 皇极殿</div></li><li class="chapter-item expanded "><a href="the-Palace-of-Tranquil-Longevity/Lady-Pearl.html"><strong aria-hidden="true">15.2.</strong> 珍妃井</a></li><li class="chapter-item expanded "><a href="the-Palace-of-Tranquil-Longevity/Lady-Pearls-Well.html"><strong aria-hidden="true">15.3.</strong> 珍妃井</a></li></ol></li><li class="chapter-item expanded "><a href="the-exhibition-of-treasures/index.html"><strong aria-hidden="true">16.</strong> 珍宝馆</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">16.1.</strong> 金胎掐丝珐琅嵌画珐琅执壶</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.2.</strong> 金嵌珠杯盘</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.3.</strong> 玛瑙葵花式托碗</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.4.</strong> 红珊瑚狮子</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.5.</strong> 翠卧牛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.6.</strong> 东珠朝珠</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.7.</strong> 金瓯永固杯</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.8.</strong> 天球仪</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.9.</strong> 金嵌珍珠宝石塔</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.10.</strong> 金嵌珠立佛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.11.</strong> 金宗喀巴像</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.12.</strong> 金累丝嵌松石坛城</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.13.</strong> 禊赏亭</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.14.</strong> 金瓯永固杯</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.15.</strong> 翠白菜式花插</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.16.</strong> 铜镀金嵌珐琅海棠式盆</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.17.</strong> 红珊瑚盆景</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.18.</strong> 田黄三连印</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">17.</strong> 钟表馆</div></li><li class="chapter-item expanded "><a href="treasures/index.html"><strong aria-hidden="true">18.</strong> 珍宝知识</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="treasures/enamel.html"><strong aria-hidden="true">18.1.</strong> 珐琅</a></li><li class="chapter-item expanded "><a href="treasures/Cloisonne.html"><strong aria-hidden="true">18.2.</strong> 景泰蓝</a></li><li class="chapter-item expanded "><a href="treasures/cha-gang.html"><strong aria-hidden="true">18.3.</strong> 茶缸</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.4.</strong> 莫氏硬度</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.5.</strong> 描金</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.6.</strong> 錾刀</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.7.</strong> 錾刻</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.8.</strong> 錾花</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.9.</strong> 镶嵌，金工工艺</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.10.</strong> 镂雕</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.11.</strong> 圆雕</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.12.</strong> 活环链</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.13.</strong> 象牙染色</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.14.</strong> 落窝</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.15.</strong> 累丝</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.16.</strong> 点翠</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.17.</strong> 田黄</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.18.</strong> 绿松石</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.19.</strong> 东珠</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.20.</strong> 翡翠</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.21.</strong> 硬玉</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.22.</strong> 玛瑙</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.23.</strong> 青玉</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.24.</strong> 黄玉</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.25.</strong> 刚玉</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.26.</strong> 水晶</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.27.</strong> 蜜蜡，琥珀</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.28.</strong> 紫檀木</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.29.</strong> 楠木</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.30.</strong> 红木</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.31.</strong> 沉香</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.32.</strong> 佩、饰</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.33.</strong> 流苏，步摇</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.34.</strong> 钿子，钿口</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.35.</strong> 扳指</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.36.</strong> 芙蓉石</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.37.</strong> 象牙</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.38.</strong> 珊瑚</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.39.</strong> 孔雀石</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.40.</strong> 碧玺</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.41.</strong> 祖母绿</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.42.</strong> 插屏</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.43.</strong> 花插</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.44.</strong> 执壶</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.45.</strong> 鼻烟壶</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.46.</strong> 扁方</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.47.</strong> 夔龙纹</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.48.</strong> 缠枝纹</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.49.</strong> 十二章纹</div></li></ol></li></ol>';
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
