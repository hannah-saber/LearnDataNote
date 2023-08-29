import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as a,c as r,a as e,b as t,d as s,e as c}from"./app-260d99d2.js";const g={},l=c('<p>Microsoft store 页面无法打开，提示需要联网或刷新。多数教程将原因归咎于系统更新或 DNS 设置，但实际上是你的 <strong>IE 设置被更改了</strong>。</p><figure><img src="https://img.newzone.top/2022-05-05-16-48-55.png?imageMogr2/thumbnail/500x" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>特别是国内的网银用户，<strong>每次登录建行，U 盾都会修改 Internet 选项</strong>，从而导致 TLS 版本过低无法连接应用商店。</p><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><ol><li><p>选择「开始菜单」&gt;「搜索栏」，搜索「Internet 选项」。</p><figure><img src="https://img.newzone.top/2022-05-05-17-01-23.png?imageMogr2/thumbnail/400x" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Internet 属性中点击「高级」。</p><figure><img src="https://img.newzone.top/2022-05-05-17-01-48.png?imageMogr2/thumbnail/400x" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>勾选「使用 TLS 1.2」和「使用 TLS 1.3」。</p><figure><img src="https://img.newzone.top/2022-05-05-17-02-01.png?imageMogr2/thumbnail/400x" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ol><p>网银用户会重复出现该问题，重新执行上方步骤勾选 TLS 即可。</p><h2 id="其他尝试" tabindex="-1"><a class="header-anchor" href="#其他尝试" aria-hidden="true">#</a> 其他尝试</h2><p>@果子：取消代理服务器</p><blockquote><p>① 除了在[internet 选项]窗口中-[高级]-勾选[TLS1.2 、TSL1.3]，<br> ② 要再加一步：在[internet 选项]窗口中-[连接]-[局域网设置]-取消勾选[代理服务器]相关选项。就能打开微软商店了！不过以后要挂梯的时候，好像得把[代理]勾选回来。</p></blockquote><p>@一头愚鹅：不要开代理</p>',10),p={href:"https://answers.microsoft.com/zh-hans/windows/forum/all/microsoft/43acd62e-a11e-449c-9fa4-50931ad38565",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"解决流程-gif",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#解决流程-gif","aria-hidden":"true"},"#"),t(" 解决流程 GIF")],-1),d=e("figure",null,[e("img",{src:"https://img.newzone.top/IE_SSL_Setting_win11.webp",alt:"win11-ie 高级设置.gif",tabindex:"0",loading:"lazy"}),e("figcaption",null,"win11-ie 高级设置.gif")],-1);function h(m,_){const i=o("ExternalLinkIcon");return a(),r("div",null,[l,e("p",null,[t("如果你依然无法访问，则尝试重置网络连接、DNS、缓存、应用商店设置，操作参考 "),e("a",p,[t("Microsoft Store 打不开，代码：0x80131500"),s(i)]),t("。")]),f,d])}const b=n(g,[["render",h],["__file","2022-02-19-microsoft_store_fixed.html.vue"]]);export{b as default};
