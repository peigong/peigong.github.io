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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="note/index.html"><strong aria-hidden="true">2.</strong> 讲解提纲</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="note/future.html"><strong aria-hidden="true">2.1.</strong> 未来馆 Hall of Futrue</a></li><li class="chapter-item expanded "><a href="note/development.html"><strong aria-hidden="true">2.2.</strong> 进步馆 Hall of Development</a></li><li class="chapter-item expanded "><a href="note/innovation.html"><strong aria-hidden="true">2.3.</strong> 创造馆 Hall of Innovation</a></li></ol></li><li class="chapter-item expanded "><a href="future/index.html"><strong aria-hidden="true">3.</strong> 未来馆 Hall of Futrue</a></li><li class="chapter-item expanded "><a href="development/index.html"><strong aria-hidden="true">4.</strong> 进步馆 Hall of Development</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">4.1.</strong> 三点式安全带</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.2.</strong> F1汽车大赛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.3.</strong> 勒芒24小时耐力赛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.4.</strong> 格拉纳达－达喀尔拉力赛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.5.</strong> 印第车赛</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.6.</strong> 世界拉力锦标赛</div></li></ol></li><li class="chapter-item expanded "><a href="innovation/index.html"><strong aria-hidden="true">5.</strong> 创造馆 Hall of Innovation</a></li><li class="chapter-item expanded "><a href="collection/index.html"><strong aria-hidden="true">6.</strong> 藏品精选</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="collection/collection-1.html"><strong aria-hidden="true">6.1.</strong> 大众甲壳虫汽车（1959年）</a></li><li class="chapter-item expanded "><a href="collection/collection-2.html"><strong aria-hidden="true">6.2.</strong> 老照片背后的故事——清华大学微型汽车的研制历程</a></li><li class="chapter-item expanded "><a href="collection/collection-3.html"><strong aria-hidden="true">6.3.</strong> 美国福特A型汽车（1929年）</a></li><li class="chapter-item expanded "><a href="collection/collection-4.html"><strong aria-hidden="true">6.4.</strong> 美国福特T型汽车（1927年）</a></li><li class="chapter-item expanded "><a href="collection/collection-5.html"><strong aria-hidden="true">6.5.</strong> 法国雪铁龙5HP汽车（1925年）</a></li><li class="chapter-item expanded "><a href="collection/collection-6.html"><strong aria-hidden="true">6.6.</strong> 美国奥兹莫比尔R型汽车（1902年）</a></li><li class="chapter-item expanded "><a href="collection/collection-7.html"><strong aria-hidden="true">6.7.</strong> 凤凰涅槃：上海牌轿车的发展历程</a></li><li class="chapter-item expanded "><a href="collection/collection-8.html"><strong aria-hidden="true">6.8.</strong> 从“追光”到“发光”，看这些藏品车里蕴含的奋斗与荣光</a></li><li class="chapter-item expanded "><a href="collection/collection-9.html"><strong aria-hidden="true">6.9.</strong> 时代记忆——中国木炭汽车</a></li><li class="chapter-item expanded "><a href="collection/collection-10.html"><strong aria-hidden="true">6.10.</strong> 馆藏故事 | 搪瓷缸里的岁月记忆</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.</strong> 汽车文化</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="culture/culture-1.html"><strong aria-hidden="true">7.1.</strong> 从八百里加急到同城闪送——说说“快递”的前世今生</a></li><li class="chapter-item expanded "><a href="culture/culture-2.html"><strong aria-hidden="true">7.2.</strong> 古代车马的历史辙印</a></li><li class="chapter-item expanded "><a href="culture/culture-3.html"><strong aria-hidden="true">7.3.</strong> 一项战略举措——我国首部汽车工业产业政策</a></li><li class="chapter-item expanded "><a href="culture/culture-4.html"><strong aria-hidden="true">7.4.</strong> 第二汽车制造厂建设记忆</a></li><li class="chapter-item expanded "><a href="culture/culture-5.html"><strong aria-hidden="true">7.5.</strong> 世界第一次穿越大陆的赛事——1907年北京-巴黎汽车拉力大赛</a></li><li class="chapter-item expanded "><a href="culture/culture-6.html"><strong aria-hidden="true">7.6.</strong> 为祖国而学习——第一汽车制造厂519名实习生赴苏联实习</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> 参考资料</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="referrence/engine.html"><strong aria-hidden="true">8.1.</strong> 深度看展览之动力的变革</a></li></ol></li></ol>';
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
