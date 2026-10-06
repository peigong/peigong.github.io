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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="note/index.html"><strong aria-hidden="true">2.</strong> 讲解提纲</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="note/looking-for-another-earth.html"><strong aria-hidden="true">2.1.</strong> 寻找另一个地球</a></li><li class="chapter-item expanded "><a href="note/telescope.html"><strong aria-hidden="true">2.2.</strong> 巨眼观天</a></li><li class="chapter-item expanded "><a href="note/the-sun.html"><strong aria-hidden="true">2.3.</strong> 太阳厅</a></li><li class="chapter-item expanded "><a href="note/moon-and-meteorite.html"><strong aria-hidden="true">2.4.</strong> 月球和陨石展区</a></li><li class="chapter-item expanded "><a href="note/solar-system-family.html"><strong aria-hidden="true">2.5.</strong> 太阳家族</a></li><li class="chapter-item expanded "><a href="note/cosmic-shuttle.html"><strong aria-hidden="true">2.6.</strong> 宇宙穿梭</a></li></ol></li><li class="chapter-item expanded "><a href="Foucault-pendulum.html"><strong aria-hidden="true">3.</strong> 傅科摆</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 穹顶星光 - 天象仪与天文馆世纪巡礼</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">4.1.</strong> 蔡司九型光学天象仪</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 寻找另一个地球</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> 观象授时</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.</strong> 巨眼观天</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">7.1.</strong> 望远镜</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.2.</strong> 施密特望远镜</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> 问月 - 中国探月工程嫦娥五号月球样品展</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="lunar-treasures/CLEP.html"><strong aria-hidden="true">8.1.</strong> 中国探月工程</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.2.</strong> 嫦娥</div></li><li class="chapter-item expanded "><a href="lunar-treasures/YuTu.html"><strong aria-hidden="true">8.3.</strong> 玉兔号</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> 太阳厅</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.1.</strong> 日食</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.2.</strong> 太阳黑子</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.3.</strong> 夫琅和费镨线</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.4.</strong> 黑体辐射</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.5.</strong> 艾国祥，中国的空间太阳望远镜（Sapce Solar Telescope, SST）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.6.</strong> 红巨星</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.7.</strong> 白矮星</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.8.</strong> 黑矮星</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.</strong> 探日逐梦 共绘璀璨</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">11.</strong> 多彩宇宙</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">12.</strong> 星星相伴</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">13.</strong> 月球和陨石展区</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">13.1.</strong> 熔融分异</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.</strong> 宇宙灯塔</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">15.</strong> 太阳家族</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="solar-system-family/Kuiper-belt.html"><strong aria-hidden="true">15.1.</strong> 柯伊伯带</a></li><li class="chapter-item expanded "><a href="solar-system-family/Tianwen.html"><strong aria-hidden="true">15.2.</strong> 天问系列</a></li><li class="chapter-item expanded "><a href="solar-system-family/ZhuRong.html"><strong aria-hidden="true">15.3.</strong> 祝融号</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.</strong> 宇宙穿梭</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">16.1.</strong> 罗伯逊-沃尔克度规</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.2.</strong> 普朗克质量</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.3.</strong> 钱德拉塞卡极限（白矮星的质量上限）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.4.</strong> 奥本海默-沃尔科夫极限（中子星的质量上限）</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.5.</strong> 北落师门</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.6.</strong> 标准烛光</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">16.7.</strong> 造父变星</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">17.</strong> 参考资料</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="referrence/meter.html"><strong aria-hidden="true">17.1.</strong> 米</a></li><li class="chapter-item expanded "><a href="referrence/square-degree.html"><strong aria-hidden="true">17.2.</strong> 平方度</a></li><li class="chapter-item expanded "><a href="referrence/Foucault.html"><strong aria-hidden="true">17.3.</strong> 傅科</a></li><li class="chapter-item expanded "><a href="referrence/Coriolis-force.html"><strong aria-hidden="true">17.4.</strong> 科里奥利力</a></li><li class="chapter-item expanded "><a href="referrence/planet.html"><strong aria-hidden="true">17.5.</strong> 行星</a></li></ol></li></ol>';
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
