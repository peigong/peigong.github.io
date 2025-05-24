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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.</strong> 一层 空军展区</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="f1-air-force/h6.html"><strong aria-hidden="true">2.1.</strong> 中国造轰-6轰炸机</a></li><li class="chapter-item expanded "><a href="f1-air-force/wang-hai-079.html"><strong aria-hidden="true">2.2.</strong> 功勋喷气式歼击机</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.3.</strong> 苏联造米格-15比斯战斗机</div></li><li class="chapter-item expanded "><a href="f1-air-force/P-51D.html"><strong aria-hidden="true">2.4.</strong> 美国造P-51D野马战斗机</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.5.</strong> 苏联造图-2轰炸机</div></li><li class="chapter-item expanded "><a href="f1-air-force/99.html"><strong aria-hidden="true">2.6.</strong> 日本造立川九九式高级教练机</a></li><li class="chapter-item expanded "><a href="f1-air-force/Q5.html"><strong aria-hidden="true">2.7.</strong> 中国造强-5强击机</a></li><li class="chapter-item expanded "><a href="f1-air-force/BQM-147.html"><strong aria-hidden="true">2.8.</strong> 美国造BQM-147无人驾驶高空侦察机残骸</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.9.</strong> 加拿大造U-6A海狸效用机</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.10.</strong> 美国造T-33A教练机</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.11.</strong> 美国造F-86F“佩刀”战斗机</div></li><li class="chapter-item expanded "><a href="f1-air-force/f1-air-force-1.html"><strong aria-hidden="true">2.12.</strong> 空军的军徽一直就是红色八一吗？</a></li></ol></li><li class="chapter-item expanded "><a href="f1-fighter/index.html"><strong aria-hidden="true">3.</strong> 一层 歼击机</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="f1-fighter/ChineseFighter.html"><strong aria-hidden="true">3.1.</strong> 中国歼击机</a></li><li class="chapter-item expanded "><a href="f1-fighter/J5.html"><strong aria-hidden="true">3.2.</strong> 中国造歼-5歼击机</a></li><li class="chapter-item expanded "><a href="f1-fighter/J6.html"><strong aria-hidden="true">3.3.</strong> 中国造歼-6歼击机</a></li><li class="chapter-item expanded "><a href="f1-fighter/J8.html"><strong aria-hidden="true">3.4.</strong> 中国造歼-8歼击机</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.5.</strong> 中国造歼-8E歼击机</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.6.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.7.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.8.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.9.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.10.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.11.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.12.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.13.</strong> </div></li><li class="chapter-item expanded "><a href="f1-fighter/f1-fighter-1.html"><strong aria-hidden="true">3.14.</strong> 揭秘中国歼系列战斗机的发展历程</a></li><li class="chapter-item expanded "><a href="f1-fighter/f1-fighter-2.html"><strong aria-hidden="true">3.15.</strong> 中国的第一款国产战斗机，为何叫歼5，而不是歼1？</a></li><li class="chapter-item expanded "><a href="f1-fighter/f1-fighter-3.html"><strong aria-hidden="true">3.16.</strong> 中国退役后的战斗机都去了哪？</a></li><li class="chapter-item expanded "><a href="f1-fighter/f1-fighter-4.html"><strong aria-hidden="true">3.17.</strong> 从追赶到超越：中国歼击机地崛起之路</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.18.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.19.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.20.</strong> </div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> 一层 导弹展区</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="f1-rocket-force/df-1.html"><strong aria-hidden="true">4.1.</strong> 中国造东风一号地地导弹</a></li><li class="chapter-item expanded "><a href="f1-rocket-force/df-2.html"><strong aria-hidden="true">4.2.</strong> 中国造东风二号地地导弹</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 一层 海军展区</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="f1-navy/zhen-yuan-anchor.html"><strong aria-hidden="true">5.1.</strong> 镇远舰铁锚</a></li><li class="chapter-item expanded "><a href="f1-navy/torpedo-boat.html"><strong aria-hidden="true">5.2.</strong> 功勋鱼雷快艇</a></li><li class="chapter-item expanded "><a href="f1-navy/414.html"><strong aria-hidden="true">5.3.</strong> 头门山海战英雄艇</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.4.</strong> 中国造海鹰1号岸舰导弹</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.5.</strong> 日本造十年式120毫米高射炮</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.6.</strong> 中国造上游1号舰舰导弹</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.7.</strong> 中国造鹰击6号空舰导弹</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.8.</strong> 中国造C-601空舰导弹</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.9.</strong> 中国造C-611空舰导弹</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.10.</strong> 中国造海鹰2号岸舰导弹</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.11.</strong> 中国造海鹰2号改岸舰导弹</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.12.</strong> 中国造海鹰2号甲岸舰导弹</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.13.</strong> 中国造海鹰3号岸舰导弹</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.14.</strong> 美国造40毫米双联装舰用高射机关炮</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.15.</strong> 中国造61式25毫米双联装舰炮</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.16.</strong> 中国造66式25毫米双联装舰炮</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.17.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.18.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.19.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.20.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.21.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.22.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.23.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.24.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.25.</strong> </div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> 一层 其他</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">6.1.</strong> 吉斯-110型防弹轿车</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.2.</strong> 斯柯达VOS防弹轿车</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.3.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.4.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.5.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.6.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.7.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.8.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.9.</strong> </div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.10.</strong> </div></li></ol></li></ol>';
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
