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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="wan-shou-shan-kun-ming-hu-shi-bei.html"><strong aria-hidden="true">2.</strong> 万寿山昆明湖石碑</a></li><li class="chapter-item expanded "><a href="wan-shou-shan-qing-yi-yuan-ji.html"><strong aria-hidden="true">3.</strong> 万寿山清漪园记</a></li><li class="chapter-item expanded "><a href="the-east-palace-gate.html"><strong aria-hidden="true">4.</strong> 东宫门</a></li><li class="chapter-item expanded "><a href="the-hall-of-benevolence-and-longevity.html"><strong aria-hidden="true">5.</strong> 仁寿殿</a></li><li class="chapter-item expanded "><a href="the-garden-of-virtuous-harmony.html"><strong aria-hidden="true">6.</strong> 德和园</a></li><li class="chapter-item expanded "><a href="the-hall-of-jade-ripples.html"><strong aria-hidden="true">7.</strong> 玉澜堂</a></li><li class="chapter-item expanded "><a href="the-hall-of-happiness-and-longevity.html"><strong aria-hidden="true">8.</strong> 乐寿堂</a></li><li class="chapter-item expanded "><a href="long-corridor/index.html"><strong aria-hidden="true">9.</strong> 长廊</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.1.</strong> 苏式彩绘</div></li></ol></li><li class="chapter-item expanded "><a href="the-hall-of-dispelling-clouds.html"><strong aria-hidden="true">10.</strong> 排云殿</a></li><li class="chapter-item expanded "><a href="the-tower-of-buddhist-incense/index.html"><strong aria-hidden="true">11.</strong> 佛香阁</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">11.1.</strong> 化佛</div></li></ol></li><li class="chapter-item expanded "><a href="the-back-hill-area.html"><strong aria-hidden="true">12.</strong> 后山景区</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.</strong> 须弥灵境</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">13.1.</strong> 西藏桑耶寺</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.2.</strong> 承德普宁寺</div></li></ol></li><li class="chapter-item expanded "><a href="the-kunming-lake-area.html"><strong aria-hidden="true">14.</strong> 昆明湖景区</a></li><li class="chapter-item expanded "><a href="nan-hu-dao/index.html"><strong aria-hidden="true">15.</strong> 南湖岛</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="nan-hu-dao/gao-liang-he.html"><strong aria-hidden="true">15.1.</strong> 高梁河</a></li><li class="chapter-item expanded "><a href="nan-hu-dao/ci-xi-shui-dao.html"><strong aria-hidden="true">15.2.</strong> 慈禧水道</a></li><li class="chapter-item expanded "><a href="nan-hu-dao/xi-hai-long-wang.html"><strong aria-hidden="true">15.3.</strong> 西海龙王</a></li><li class="chapter-item expanded "><a href="nan-hu-dao/kuo-ru-ting.html"><strong aria-hidden="true">15.4.</strong> 廓如亭</a></li><li class="chapter-item expanded "><a href="nan-hu-dao/Seventeen-Arch-Bridge.html"><strong aria-hidden="true">15.5.</strong> 十七孔桥</a></li><li class="chapter-item expanded "><a href="nan-hu-dao/tong-niu.html"><strong aria-hidden="true">15.6.</strong> 颐和园铜牛</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">15.7.</strong> 一池三山</div></li></ol></li><li class="chapter-item expanded "><a href="Kunlun-Monument.html"><strong aria-hidden="true">16.</strong> 昆仑石</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">17.</strong> 颐和园与海军</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">17.1.</strong> 萨镇冰</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">18.</strong> 借景</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">18.1.</strong> 玉泉山玉峰塔</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">19.</strong> 样式雷雷廷昌</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">20.</strong> 文昌阁</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">20.1.</strong> 文昌帝君</div></li></ol></li></ol>';
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
