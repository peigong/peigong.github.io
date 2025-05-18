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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="lesson/index.html"><strong aria-hidden="true">2.</strong> 名著里的语文课</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lesson/carved-beams-and-painted-rafters.html"><strong aria-hidden="true">2.1.</strong> 雕梁画栋</a></li><li class="chapter-item expanded "><a href="lesson/lesson-1.html"><strong aria-hidden="true">2.2.</strong> 脊兽</a></li><li class="chapter-item expanded "><a href="lesson/eaves-tile.html"><strong aria-hidden="true">2.3.</strong> 瓦当</a></li></ol></li><li class="chapter-item expanded "><a href="fiction/index.html"><strong aria-hidden="true">3.</strong> 原著小说</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="fiction/fiction-33.html"><strong aria-hidden="true">3.1.</strong> 第三十三回 手足眈眈小动唇舌　不肖种种大承笞挞</a></li></ol></li><li class="chapter-item expanded "><a href="qa/index.html"><strong aria-hidden="true">4.</strong> 常见问题</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="qa/bao-yu.html"><strong aria-hidden="true">4.1.</strong> 有关宝玉的问题</a></li><li class="chapter-item expanded "><a href="qa/dai-yu.html"><strong aria-hidden="true">4.2.</strong> 有关黛玉的问题</a></li><li class="chapter-item expanded "><a href="qa/xi-feng.html"><strong aria-hidden="true">4.3.</strong> 有关王熙凤的问题</a></li><li class="chapter-item expanded "><a href="qa/xi-ren.html"><strong aria-hidden="true">4.4.</strong> 有关袭人的问题</a></li><li class="chapter-item expanded "><a href="qa/qing-wen.html"><strong aria-hidden="true">4.5.</strong> 有关晴雯的问题</a></li></ol></li></ol>';
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
