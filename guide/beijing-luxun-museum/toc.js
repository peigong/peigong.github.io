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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="meng-zang/index.html"><strong aria-hidden="true">2.</strong> 蒙藏学校旧址</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="meng-zang/The-high-school-affiliated-to-Minzu-Universitv-of-China.html"><strong aria-hidden="true">2.1.</strong> 中央民族大学附属中学</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.2.</strong> 蒙藏委员会</div></li></ol></li><li class="chapter-item expanded "><a href="Beijing-Luxun-Museum/index.html"><strong aria-hidden="true">3.</strong> 北京鲁迅旧居</a></li><li class="chapter-item expanded "><a href="xin-wen-hua-yun-dong/index.html"><strong aria-hidden="true">4.</strong> 新文化运动纪念馆</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="xin-wen-hua-yun-dong/Red-Building-of-Peking-University.html"><strong aria-hidden="true">4.1.</strong> 北京大学红楼</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.2.</strong> 五四运动</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.3.</strong> 新潮杂志社</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.4.</strong> 《青年杂志》</div></li><li class="chapter-item expanded "><a href="xin-wen-hua-yun-dong/mi-yan-gong-kuan.html"><strong aria-hidden="true">4.5.</strong> 湖南米盐公款</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 名人录</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.1.</strong> 贡桑诺尔布</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.2.</strong> 乌兰夫</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.3.</strong> 荣耀先</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.4.</strong> 章嘉活佛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.5.</strong> 李大钊</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.6.</strong> 陈独秀</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.7.</strong> 张国涛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.8.</strong> 蔡和森</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.9.</strong> 邓中夏</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.10.</strong> 张申府</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.11.</strong> 赵世炎</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.12.</strong> 和嘉公主府</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.13.</strong> 章士钊</div></li><li class="chapter-item expanded "><a href="celebrities/yuan-ke-ding.html"><strong aria-hidden="true">5.14.</strong> 袁克定</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.15.</strong> 张伯驹</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.16.</strong> 赵尔巽</div></li></ol></li></ol>';
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
