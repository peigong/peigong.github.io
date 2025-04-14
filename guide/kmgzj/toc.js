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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="history.html"><strong aria-hidden="true">2.</strong> 历史沿革</a></li><li class="chapter-item expanded "><a href="Kongmiao/index.html"><strong aria-hidden="true">3.</strong> 孔庙</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="Kongmiao/Kongmiao-1.html"><strong aria-hidden="true">3.1.</strong> 大成殿</a></li><li class="chapter-item expanded "><a href="Kongmiao/Kongmiao-2.html"><strong aria-hidden="true">3.2.</strong> 大成门</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.3.</strong> 乾隆石鼓</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.4.</strong> 石鼓歌</div></li><li class="chapter-item expanded "><a href="Kongmiao/Kongmiao-3.html"><strong aria-hidden="true">3.5.</strong> 崇圣祠</a></li><li class="chapter-item expanded "><a href="Kongmiao/Kongmiao-3-1.html"><strong aria-hidden="true">3.6.</strong> 大成礼乐</a></li><li class="chapter-item expanded "><a href="Kongmiao/Kongmiao-4.html"><strong aria-hidden="true">3.7.</strong> 进士题名碑</a></li><li class="chapter-item expanded "><a href="Kongmiao/Kongmiao-5.html"><strong aria-hidden="true">3.8.</strong> 十三经碑林</a></li></ol></li><li class="chapter-item expanded "><a href="ImperialCollege/index.html"><strong aria-hidden="true">4.</strong> 国子监</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ImperialCollege/ImperialCollege-1.html"><strong aria-hidden="true">4.1.</strong> 鲤鱼跃龙门</a></li><li class="chapter-item expanded "><a href="ImperialCollege/ImperialCollege-2.html"><strong aria-hidden="true">4.2.</strong> 辟雍大殿</a></li><li class="chapter-item expanded "><a href="ImperialCollege/ImperialCollege-3.html"><strong aria-hidden="true">4.3.</strong> 日晷</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 学术</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="academe/academe-1.html"><strong aria-hidden="true">5.1.</strong> 国子监与清代官学教育</a></li><li class="chapter-item expanded "><a href="academe/academe-2.html"><strong aria-hidden="true">5.2.</strong> 清代北京孔庙释奠礼程序</a></li><li class="chapter-item expanded "><a href="academe/academe-3.html"><strong aria-hidden="true">5.3.</strong> 试析国子监南学的历史演变</a></li><li class="chapter-item expanded "><a href="academe/academe-4.html"><strong aria-hidden="true">5.4.</strong> 国子监街四牌楼历史考</a></li><li class="chapter-item expanded "><a href="academe/academe-5.html"><strong aria-hidden="true">5.5.</strong> 乾隆石鼓考证</a></li><li class="chapter-item expanded "><a href="academe/academe-6.html"><strong aria-hidden="true">5.6.</strong> 北京国子监辟雍匾联探析</a></li><li class="chapter-item expanded "><a href="academe/academe-7.html"><strong aria-hidden="true">5.7.</strong> 进士趣事（五）</a></li><li class="chapter-item expanded "><a href="academe/academe-8.html"><strong aria-hidden="true">5.8.</strong> 北京国子监《五朝上谕碑》初探</a></li><li class="chapter-item expanded "><a href="academe/academe-9.html"><strong aria-hidden="true">5.9.</strong> 北京孔庙和国子监建筑史话之“辟雍篇”</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> 馆藏</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.</strong> 博物馆展览</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">7.1.</strong> 大成殿复原陈列展</div></li><li class="chapter-item expanded "><a href="exhibitions/exhibition-2.html"><strong aria-hidden="true">7.2.</strong> 大哉孔子展</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.3.</strong> 孔庙历史沿革展</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.4.</strong> 国子监辟雍复原陈列</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">7.5.</strong> 国子监原状陈列展</div></li><li class="chapter-item expanded "><a href="exhibitions/exhibition-6.html"><strong aria-hidden="true">7.6.</strong> 中国科举制度展</a></li><li class="chapter-item expanded "><a href="exhibitions/exhibition-7.html"><strong aria-hidden="true">7.7.</strong> 明清皇家祭孔文物文化展</a></li><li class="chapter-item expanded "><a href="exhibitions/exhibition-8.html"><strong aria-hidden="true">7.8.</strong> 中国古代官德文化展</a></li><li class="chapter-item expanded "><a href="exhibitions/exhibition-9.html"><strong aria-hidden="true">7.9.</strong> 御制匾额精品展</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> 历史名人</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="celebrities/celebrity-1.html"><strong aria-hidden="true">8.1.</strong> 张居正</a></li><li class="chapter-item expanded "><a href="celebrities/celebrity-2.html"><strong aria-hidden="true">8.2.</strong> 王阳明</a></li><li class="chapter-item expanded "><a href="celebrities/celebrity-3.html"><strong aria-hidden="true">8.3.</strong> 于谦</a></li><li class="chapter-item expanded "><a href="celebrities/celebrity-4.html"><strong aria-hidden="true">8.4.</strong> 汤显祖</a></li><li class="chapter-item expanded "><a href="celebrities/celebrity-5.html"><strong aria-hidden="true">8.5.</strong> 商辂</a></li><li class="chapter-item expanded "><a href="celebrities/celebrity-6.html"><strong aria-hidden="true">8.6.</strong> 董其昌</a></li><li class="chapter-item expanded "><a href="celebrities/celebrity-7.html"><strong aria-hidden="true">8.7.</strong> 袁崇焕</a></li><li class="chapter-item expanded "><a href="celebrities/celebrity-8.html"><strong aria-hidden="true">8.8.</strong> 刘墉</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> 参考文献</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.1.</strong> 国学新建辟雍环水工成碑记</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.2.</strong> 三老五更说</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.3.</strong> 论辅臣科臣疏</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.4.</strong> 复储疏</div></li></ol></li></ol>';
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
