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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> 概况简介</a></li><li class="chapter-item expanded "><a href="note/index.html"><strong aria-hidden="true">2.</strong> 讲解提纲</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="note/banknote.html"><strong aria-hidden="true">2.1.</strong> 纪念纸币诞生千年专题展</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.</strong> 中国货币通史陈列</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="history/yong-tong-wan-guo.html"><strong aria-hidden="true">3.1.</strong> 永通万国</a></li><li class="chapter-item expanded "><a href="history/yong-tong-wan-guo-bei-zhou.html"><strong aria-hidden="true">3.2.</strong> 北周永通万国</a></li><li class="chapter-item expanded "><a href="history/kang-ding.html"><strong aria-hidden="true">3.3.</strong> 亢鼎</a></li><li class="chapter-item expanded "><a href="history/hu-ding.html"><strong aria-hidden="true">3.4.</strong> 曶(hū)鼎</a></li><li class="chapter-item expanded "><a href="history/bei-money.html"><strong aria-hidden="true">3.5.</strong> 贝币</a></li><li class="chapter-item expanded "><a href="history/shi-jin-yi-zhu.html"><strong aria-hidden="true">3.6.</strong> 视金一朱铜钱牌</a></li><li class="chapter-item expanded "><a href="history/chu-bi.html"><strong aria-hidden="true">3.7.</strong> 楮(chǔ)币</a></li><li class="chapter-item expanded "><a href="history/qian-shen-lun.html"><strong aria-hidden="true">3.8.</strong> 钱神论</a></li><li class="chapter-item expanded "><a href="history/ma-qian.html"><strong aria-hidden="true">3.9.</strong> 骆驼钱</a></li><li class="chapter-item expanded "><a href="history/ma-qian-yu-tian.html"><strong aria-hidden="true">3.10.</strong> 于阗(‌tián)马钱</a></li><li class="chapter-item expanded "><a href="history/ma-qian-he-tian.html"><strong aria-hidden="true">3.11.</strong> 和田马钱</a></li><li class="chapter-item expanded "><a href="history/tang-dai-yin-ting.html"><strong aria-hidden="true">3.12.</strong> 唐代银铤</a></li><li class="chapter-item expanded "><a href="history/dui-qian.html"><strong aria-hidden="true">3.13.</strong> 对钱</a></li><li class="chapter-item expanded "><a href="history/dui-wen-qian.html"><strong aria-hidden="true">3.14.</strong> 对文钱</a></li><li class="chapter-item expanded "><a href="history/An-odd-shaped-gold.html"><strong aria-hidden="true">3.15.</strong> 元宝</a></li><li class="chapter-item expanded "><a href="history/Great-Universal-Geographic-Map.html"><strong aria-hidden="true">3.16.</strong> 明坤舆万国全图</a></li><li class="chapter-item expanded "><a href="history/xin-jiang-hong-qian.html"><strong aria-hidden="true">3.17.</strong> 新疆红钱</a></li><li class="chapter-item expanded "><a href="history/chao-piao.html"><strong aria-hidden="true">3.18.</strong> 大清宝钞与户部官票</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.19.</strong> 端方</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.20.</strong> 张之洞</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.21.</strong> 海趣</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.22.</strong> 摄政王载沣</div></li><li class="chapter-item expanded "><a href="history/fei-liang-gai-yuan.html"><strong aria-hidden="true">3.23.</strong> 废两改元</a></li><li class="chapter-item expanded "><a href="history/fa-bi-gai-ge.html"><strong aria-hidden="true">3.24.</strong> 国民政府币制改革</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> AI资料</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="AI/gold-smelting.html"><strong aria-hidden="true">4.1.</strong> 古代的黄金冶炼</a></li><li class="chapter-item expanded "><a href="AI/monetaria-moneta.html"><strong aria-hidden="true">4.2.</strong> 中国的贝币</a></li><li class="chapter-item expanded "><a href="AI/history-of-spade-coins.html"><strong aria-hidden="true">4.3.</strong> 布币形制的历史沿革</a></li><li class="chapter-item expanded "><a href="AI/hammered-coins.html"><strong aria-hidden="true">4.4.</strong> 打制货币</a></li><li class="chapter-item expanded "><a href="AI/da-bu-huang-qian.html"><strong aria-hidden="true">4.5.</strong> 新莽大布黄千</a></li><li class="chapter-item expanded "><a href="AI/shenglang-wuzhu-coins.html"><strong aria-hidden="true">4.6.</strong> 沈郎五铢钱</a></li><li class="chapter-item expanded "><a href="AI/xing-sha.html"><strong aria-hidden="true">4.7.</strong> 型砂</a></li><li class="chapter-item expanded "><a href="AI/chuan-xing-yin-ting.html"><strong aria-hidden="true">4.8.</strong> 船形银铤</a></li><li class="chapter-item expanded "><a href="AI/mian-zhi.html"><strong aria-hidden="true">4.9.</strong> 小平、折一、折二、折五、折十</a></li><li class="chapter-item expanded "><a href="AI/cheng-an-bao-huo.html"><strong aria-hidden="true">4.10.</strong> 承安宝货</a></li><li class="chapter-item expanded "><a href="AI/monetary-argument-in-history.html"><strong aria-hidden="true">4.11.</strong> 中国历史上的货币政策争论</a></li><li class="chapter-item expanded "><a href="AI/yi-tiao-bian-fa.html"><strong aria-hidden="true">4.12.</strong> 一条鞭法的货币方案</a></li><li class="chapter-item expanded "><a href="AI/diao-mu-mu-qian-yang-qian.html"><strong aria-hidden="true">4.13.</strong> 雕母、母钱和样钱</a></li><li class="chapter-item expanded "><a href="AI/the-hall-of-supreme-harmony-1918-11.html"><strong aria-hidden="true">4.14.</strong> 1918年11月太和殿阅兵</a></li><li class="chapter-item expanded "><a href="AI/press.html"><strong aria-hidden="true">4.15.</strong> 锻压和冲压</a></li><li class="chapter-item expanded "><a href="AI/monetary-policy-of-the-red-army.html"><strong aria-hidden="true">4.16.</strong> 红军根据地和长征时期的货币政策</a></li><li class="chapter-item expanded "><a href="AI/monetary-policy-1932-1934.html"><strong aria-hidden="true">4.17.</strong> 中央苏区1932–1934完整账面（发多少、准备多少、回笼多少）</a></li><li class="chapter-item expanded "><a href="AI/monetary-policy-in-zun-yi.html"><strong aria-hidden="true">4.18.</strong> 遵义红军票逐日流程</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">5.</strong> 参考文献</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/ying-dui-fa-bi-de-zheng-ce.html"><strong aria-hidden="true">5.1.</strong> 根据地应对法币的政策</a></li></ol></li></ol>';
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
