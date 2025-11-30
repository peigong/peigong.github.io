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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="FragrantHillsPark/index.html"><strong aria-hidden="true">2.</strong> 香山公园</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="FragrantHillsPark/FragrantHillsPark-1.html"><strong aria-hidden="true">2.1.</strong> 香炉峰</a></li><li class="chapter-item expanded "><a href="FragrantHillsPark/FragrantHillsPark-2.html"><strong aria-hidden="true">2.2.</strong> 玉华岫</a></li><li class="chapter-item expanded "><a href="FragrantHillsPark/FragrantHillsPark-3.html"><strong aria-hidden="true">2.3.</strong> 洪光寺</a></li><li class="chapter-item expanded "><a href="FragrantHillsPark/FragrantHillsPark-4.html"><strong aria-hidden="true">2.4.</strong> 香山寺</a></li><li class="chapter-item expanded "><a href="FragrantHillsPark/FragrantHillsPark-5.html"><strong aria-hidden="true">2.5.</strong> 香山饭店</a></li><li class="chapter-item expanded "><a href="FragrantHillsPark/BiyunTemple.html"><strong aria-hidden="true">2.6.</strong> 碧云寺</a></li><li class="chapter-item expanded "><a href="FragrantHillsPark/FragrantHillsPark-6.html"><strong aria-hidden="true">2.7.</strong> 孙中山纪念堂</a></li><li class="chapter-item expanded "><a href="FragrantHillsPark/FragrantHillsPark-7.html"><strong aria-hidden="true">2.8.</strong> 东宫门</a></li><li class="chapter-item expanded "><a href="FragrantHillsPark/FragrantHillsPark-8.html"><strong aria-hidden="true">2.9.</strong> 勤政殿</a></li><li class="chapter-item expanded "><a href="FragrantHillsPark/FragrantHillsPark-9.html"><strong aria-hidden="true">2.10.</strong> 翠微亭</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.11.</strong> 致远斋</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.12.</strong> 知松园</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.13.</strong> 昭庙</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.14.</strong> 琉璃塔</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.15.</strong> 见心斋</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.16.</strong> 眼镜湖</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.17.</strong> 看云起</div></li></ol></li><li class="chapter-item expanded "><a href="xiangshan1949-1/index.html"><strong aria-hidden="true">3.</strong> 香山革命纪念馆</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="xiangshan1949-1/xiangshan1949-1-1.html"><strong aria-hidden="true">3.1.</strong> 目前形势和我们的任务</a></li><li class="chapter-item expanded "><a href="xiangshan1949-1/xiangshan1949-1-2.html"><strong aria-hidden="true">3.2.</strong> 中国人民解放军军徽样徽</a></li><li class="chapter-item expanded "><a href="xiangshan1949-1/xiangshan1949-1-3.html"><strong aria-hidden="true">3.3.</strong> 陈铭枢档案</a></li><li class="chapter-item expanded "><a href="xiangshan1949-1/xiangshan1949-1-4.html"><strong aria-hidden="true">3.4.</strong> 毛泽东从西柏坡进京时乘坐的同型道奇吉普车</a></li><li class="chapter-item expanded "><a href="xiangshan1949-1/xiangshan1949-1-5.html"><strong aria-hidden="true">3.5.</strong> 华东军区、第三野战军政治部印行《渡江一日》</a></li><li class="chapter-item expanded "><a href="xiangshan1949-1/xiangshan1949-1-6.html"><strong aria-hidden="true">3.6.</strong> 社会发展简史</a></li><li class="chapter-item expanded "><a href="xiangshan1949-1/xiangshan1949-1-7.html"><strong aria-hidden="true">3.7.</strong> 甲申三百年祭</a></li><li class="chapter-item expanded "><a href="xiangshan1949-1/xiangshan1949-1-8.html"><strong aria-hidden="true">3.8.</strong> 平津卫戍区司令部制发的汽车通行旗帜</a></li><li class="chapter-item expanded "><a href="xiangshan1949-1/xiangshan1949-1-9.html"><strong aria-hidden="true">3.9.</strong> 1949年中国人民解放军渡江战役使用的木船</a></li><li class="chapter-item expanded "><a href="xiangshan1949-1/xiangshan1949-1-10.html"><strong aria-hidden="true">3.10.</strong> 王光美手绘香山五大书记居住图（附刘少奇大事记）</a></li><li class="chapter-item expanded "><a href="xiangshan1949-1/xiangshan1949-1-11.html"><strong aria-hidden="true">3.11.</strong> 华东人民野战军人民英雄三等奖章</a></li><li class="chapter-item expanded "><a href="xiangshan1949-1/xiangshan1949-1-12.html"><strong aria-hidden="true">3.12.</strong> 毛泽东五评白皮书</a></li><li class="chapter-item expanded "><a href="xiangshan1949-1/xiangshan1949-1-13.html"><strong aria-hidden="true">3.13.</strong> 毛泽东《论人民民主专政》</a></li><li class="chapter-item expanded "><a href="xiangshan1949-1/xiangshan1949-1-14.html"><strong aria-hidden="true">3.14.</strong> 1949年10月1日于北京卧佛寺召开的庆祝人民政协开幕大会</a></li><li class="chapter-item expanded "><a href="xiangshan1949-1/xiangshan1949-1-15.html"><strong aria-hidden="true">3.15.</strong> 中华人民共和国开国大典使用过的礼炮</a></li></ol></li><li class="chapter-item expanded "><a href="xiangshan1949-2/index.html"><strong aria-hidden="true">4.</strong> 香山革命旧址</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="xiangshan1949-2/xiangshan1949-2-1.html"><strong aria-hidden="true">4.1.</strong> 双清别墅</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.2.</strong> 来青轩</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.3.</strong> 思亲舍</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.4.</strong> 小白楼</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.5.</strong> 多云亭</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.6.</strong> 丽瞩楼</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.7.</strong> 镇芳楼</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.8.</strong> 镇南房</div></li></ol></li></ol>';
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
