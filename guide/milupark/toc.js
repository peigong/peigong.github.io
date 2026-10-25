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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="note/index.html"><strong aria-hidden="true">2.</strong> 讲解提纲</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="note/park.html"><strong aria-hidden="true">2.1.</strong> 南海子郊野公园</a></li><li class="chapter-item expanded "><a href="note/milupark.html"><strong aria-hidden="true">2.2.</strong> 南海子麋鹿苑</a></li><li class="chapter-item expanded "><a href="note/animal.html"><strong aria-hidden="true">2.3.</strong> 南海子的动物</a></li><li class="chapter-item expanded "><a href="note/plant.html"><strong aria-hidden="true">2.4.</strong> 南海子的植物</a></li></ol></li><li class="chapter-item expanded "><a href="park/index.html"><strong aria-hidden="true">3.</strong> 北京南海子郊野公园</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.1.</strong> 马迭尔</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.</strong> 机器人勇士挑战赛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.3.</strong> 本杰士堆</div></li><li class="chapter-item expanded "><a href="park/jiu-jia.html"><strong aria-hidden="true">3.4.</strong> 救驾台</a></li></ol></li><li class="chapter-item expanded "><a href="milupark/index.html"><strong aria-hidden="true">4.</strong> 南海子麋鹿苑</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="milupark/Elaphurus.html"><strong aria-hidden="true">4.1.</strong> 麋鹿属</a></li><li class="chapter-item expanded "><a href="milupark/Elaphurus-davidianus.html"><strong aria-hidden="true">4.2.</strong> 麋鹿</a></li><li class="chapter-item expanded "><a href="milupark/mi-lu-jiao.html"><strong aria-hidden="true">4.3.</strong> 神奇的麋鹿角</a></li><li class="chapter-item expanded "><a href="milupark/hong-yan.html"><strong aria-hidden="true">4.4.</strong> 麋鹿苑生物圈|鸿雁</a></li><li class="chapter-item expanded "><a href="milupark/bai-guan.html"><strong aria-hidden="true">4.5.</strong> 麋鹿苑生物圈|东方白鹳(guàn)</a></li><li class="chapter-item expanded "><a href="milupark/han-lu.html"><strong aria-hidden="true">4.6.</strong> 寒露时节的麋鹿苑</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 麋鹿苑科普馆（博物馆）</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.1.</strong> 世界之鹿展</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.2.</strong> 麋鹿传奇</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> 南海子的动物</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="animal/Swan-Goose.html"><strong aria-hidden="true">6.1.</strong> 鸿雁</a></li><li class="chapter-item expanded "><a href="animal/Peafowl.html"><strong aria-hidden="true">6.2.</strong> 孔雀</a></li><li class="chapter-item expanded "><a href="animal/Mallard.html"><strong aria-hidden="true">6.3.</strong> 绿头鸭</a></li><li class="chapter-item expanded "><a href="animal/speculum.html"><strong aria-hidden="true">6.4.</strong> 翼镜</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.</strong> 南海子的植物</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="plant/Iris-tectorum-Maxim.html"><strong aria-hidden="true">7.1.</strong> 鸢尾(‌yuān wěi)</a></li><li class="chapter-item expanded "><a href="plant/Ginkgo.html"><strong aria-hidden="true">7.2.</strong> 银杏</a></li><li class="chapter-item expanded "><a href="plant/Forsythia-suspensa.html"><strong aria-hidden="true">7.3.</strong> 连翘</a></li><li class="chapter-item expanded "><a href="plant/Prunus-cerasifera.html"><strong aria-hidden="true">7.4.</strong> 紫叶李</a></li><li class="chapter-item expanded "><a href="plant/Prunus-persica.html"><strong aria-hidden="true">7.5.</strong> 碧桃</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.6.</strong> 榆树</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.7.</strong> 油松</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> 参考资料</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/lu-jiao-jie-shuo.html"><strong aria-hidden="true">8.1.</strong> 麋角解说</a></li><li class="chapter-item expanded "><a href="reference/story-of-qianlong-lu-jiao.html"><strong aria-hidden="true">8.2.</strong> 乾隆鹿角的故事</a></li><li class="chapter-item expanded "><a href="reference/lu-jiao-ji-tu-juan.html"><strong aria-hidden="true">8.3.</strong> 清代，乾隆御笔《鹿角记》图卷</a></li><li class="chapter-item expanded "><a href="reference/dong-zhi.html"><strong aria-hidden="true">8.4.</strong> 冬至阳生麋角解</a></li><li class="chapter-item expanded "><a href="reference/AI/Armand-David.html"><strong aria-hidden="true">8.5.</strong> 达氏鹿、大卫神甫鹿和戴维</a></li><li class="chapter-item expanded "><a href="reference/AI/Bedford.html"><strong aria-hidden="true">8.6.</strong> 十四世贝德福德公爵</a></li></ol></li></ol>';
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
