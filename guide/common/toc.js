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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.</strong> 原始人类</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="prehistory/jian-shi-ren.html"><strong aria-hidden="true">2.1.</strong> 建始人</a></li><li class="chapter-item expanded "><a href="prehistory/xi-hou-du.html"><strong aria-hidden="true">2.2.</strong> 西侯度文化</a></li><li class="chapter-item expanded "><a href="prehistory/HemuduCulture.html"><strong aria-hidden="true">2.3.</strong> 河姆渡文化</a></li><li class="chapter-item expanded "><a href="prehistory/BanpoSite.html"><strong aria-hidden="true">2.4.</strong> 半坡遗址</a></li><li class="chapter-item expanded "><a href="prehistory/Homo-erectus-pekinensis.html"><strong aria-hidden="true">2.5.</strong> 北京猿人</a></li><li class="chapter-item expanded "><a href="prehistory/xin-dong-ren.html"><strong aria-hidden="true">2.6.</strong> 新洞人</a></li><li class="chapter-item expanded "><a href="prehistory/tian-yuan-dong-ren.html"><strong aria-hidden="true">2.7.</strong> 田园洞人</a></li><li class="chapter-item expanded "><a href="prehistory/shan-ding-dong-ren.html"><strong aria-hidden="true">2.8.</strong> 山顶洞人</a></li><li class="chapter-item expanded "><a href="prehistory/Dong-Hu-Lin-people.html"><strong aria-hidden="true">2.9.</strong> 东胡林人</a></li><li class="chapter-item expanded "><a href="prehistory/long-gu-po.html"><strong aria-hidden="true">2.10.</strong> 龙骨坡遗址</a></li><li class="chapter-item expanded "><a href="prehistory/ren-zi-dong.html"><strong aria-hidden="true">2.11.</strong> 人字洞遗址</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.12.</strong> 周口店遗址</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.13.</strong> 东胡林墓葬遗址</div></li><li class="chapter-item expanded "><a href="prehistory/fei-zhou-qi-yuan-shuo.html"><strong aria-hidden="true">2.14.</strong> 非洲起源说</a></li><li class="chapter-item expanded "><a href="prehistory/fen-zi-kao-gu-xue.html"><strong aria-hidden="true">2.15.</strong> 分子考古学：考古学的第二次革命</a></li><li class="chapter-item expanded "><a href="prehistory/dna-and-fen-zi-kao-gu.html"><strong aria-hidden="true">2.16.</strong> 古DNA与分子考古研究</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> 古代天文</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="ancient-astronomy/sundial.html"><strong aria-hidden="true">3.1.</strong> 日晷</a></li><li class="chapter-item expanded "><a href="ancient-astronomy/hun-tian-yi.html"><strong aria-hidden="true">3.2.</strong> 浑天仪</a></li><li class="chapter-item expanded "><a href="ancient-astronomy/zheng-fang-an.html"><strong aria-hidden="true">3.3.</strong> 正方案</a></li><li class="chapter-item expanded "><a href="ancient-astronomy/jian-yi.html"><strong aria-hidden="true">3.4.</strong> 简仪</a></li><li class="chapter-item expanded "><a href="ancient-astronomy/gui-biao.html"><strong aria-hidden="true">3.5.</strong> 圭表</a></li><li class="chapter-item expanded "><a href="ancient-astronomy/star-observation-platform.html"><strong aria-hidden="true">3.6.</strong> 观星台</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.7.</strong> 水准测量仪</div></li><li class="chapter-item expanded "><a href="science/armillary-sphere.html"><strong aria-hidden="true">3.8.</strong> 浑仪</a></li><li class="chapter-item expanded "><a href="science/di-ping-jing-wei-yi.html"><strong aria-hidden="true">3.9.</strong> 地平经纬仪</a></li><li class="chapter-item expanded "><a href="science/chi-dao-jing-wei-yi.html"><strong aria-hidden="true">3.10.</strong> 赤道经纬仪</a></li><li class="chapter-item expanded "><a href="science/huang-dao-jing-wei-yi.html"><strong aria-hidden="true">3.11.</strong> 黄道经纬仪</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 清史</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">4.1.</strong> 慈禧太后</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 藏传佛教</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.1.</strong> 章嘉活佛</div></li></ol></li><li class="chapter-item expanded "><a href="style/index.html"><strong aria-hidden="true">6.</strong> 样式雷</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="style/tang-yang.html"><strong aria-hidden="true">6.1.</strong> 烫样</a></li><li class="chapter-item expanded "><a href="style/lei-si-qi.html"><strong aria-hidden="true">6.2.</strong> 雷思起</a></li><li class="chapter-item expanded "><a href="style/lei-ting-chang.html"><strong aria-hidden="true">6.3.</strong> 雷廷昌</a></li></ol></li></ol>';
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
