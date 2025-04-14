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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.</strong> APEC</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> 集贤厅</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="Jixian/design-1.html"><strong aria-hidden="true">3.1.</strong> 集贤厅设计全记录</a></li><li class="chapter-item expanded "><a href="Jixian/design-2.html"><strong aria-hidden="true">3.2.</strong> 雁栖湖国际会议中心集贤厅设计解读</a></li><li class="chapter-item expanded "><a href="Jixian/design-3.html"><strong aria-hidden="true">3.3.</strong> APEC二十一国元首圆桌会议集贤厅设计全记录</a></li><li class="chapter-item expanded "><a href="Jixian/design-4.html"><strong aria-hidden="true">3.4.</strong> 揭秘APEC会场集贤厅 木制装修与景泰蓝技艺结合</a></li><li class="chapter-item expanded "><a href="Jixian/design-5.html"><strong aria-hidden="true">3.5.</strong> 将民族传统推向世界舞台，全面解读北京APEC集贤厅</a></li><li class="chapter-item expanded "><a href="Jixian/design-6.html"><strong aria-hidden="true">3.6.</strong> 集贤厅室内设计之考鉴</a></li><li class="chapter-item expanded "><a href="Jixian/design-7.html"><strong aria-hidden="true">3.7.</strong> 传统与现代建筑风格的完美融合</a></li><li class="chapter-item expanded "><a href="Jixian/design-8.html"><strong aria-hidden="true">3.8.</strong> 中国木结构古建在现代民族建筑中的应用典范</a></li><li class="chapter-item expanded "><a href="Jixian/design-9.html"><strong aria-hidden="true">3.9.</strong> 体现21世纪独有的设计</a></li><li class="chapter-item expanded "><a href="Jixian/dong-yang.html"><strong aria-hidden="true">3.10.</strong> 中国工艺美术大师陆光正</a></li><li class="chapter-item expanded "><a href="Jixian/news-1.html"><strong aria-hidden="true">3.11.</strong> 大国服务可以精准到这种程度</a></li><li class="chapter-item expanded "><a href="Jixian/news-2.html"><strong aria-hidden="true">3.12.</strong> 盛事记忆里的劳动者</a></li><li class="chapter-item expanded "><a href="Jixian/news-3.html"><strong aria-hidden="true">3.13.</strong> 习主席和39位外方领导人围桌共绘“工笔画”</a></li><li class="chapter-item expanded "><a href="Jixian/news-4.html"><strong aria-hidden="true">3.14.</strong> 习近平集贤厅主持压轴戏 亚太雁阵期待振翅翱翔</a></li><li class="chapter-item expanded "><a href="Jixian/qsnews-1.html"><strong aria-hidden="true">3.15.</strong> 清尚公司多项作品荣获2020-2021“建筑应用创新大奖”</a></li></ol></li><li class="chapter-item expanded "><a href="YanqiLake/index.html"><strong aria-hidden="true">4.</strong> 雁栖湖</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="YanqiLake/YanqiByland.html"><strong aria-hidden="true">4.1.</strong> 雁栖半岛</a></li><li class="chapter-item expanded "><a href="YanqiLake/TourismResort.html"><strong aria-hidden="true">4.2.</strong> 北京雁栖湖国际旅游度假区</a></li><li class="chapter-item expanded "><a href="YanqiLake/ConferenceCenter.html"><strong aria-hidden="true">4.3.</strong> 雁栖湖国际会都</a></li><li class="chapter-item expanded "><a href="YanqiLake/BYCC.html"><strong aria-hidden="true">4.4.</strong> 北京雁栖湖国际会展中心</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 怀柔景区</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.1.</strong> 红螺寺</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.2.</strong> 青龙峡</div></li></ol></li></ol>';
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
