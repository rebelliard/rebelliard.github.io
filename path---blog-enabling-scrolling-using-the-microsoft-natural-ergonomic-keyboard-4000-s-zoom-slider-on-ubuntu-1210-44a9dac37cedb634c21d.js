webpackJsonp([47838559778689],{391:function(a,s){a.exports={data:{site:{siteMetadata:{title:"rafael.do",author:"Rafael E. Belliard"}},markdownRemark:{id:"/home/rafael/play/rebelliard.github.io/src/pages/blog/2012-11-02-microsoft-keyboard-4000/index.md absPath of file >>> MarkdownRemark",html:'<p>For the past two years, I have been using the excellent <a href="https://www.amazon.com/Microsoft-Natural-Ergonomic-Keyboard-4000/dp/B000A6PPOK">Microsoft Natural Ergonomic Keyboard 4000</a> almost exclusively. This keyboard has a zoom slider in between the two main keys section that I just never use. I don’t understand what the reasoning behind having a zoom slider instead of a vertical slider, but today we’ll fix that for Ubuntu.</p>\n<p><img src="/public/images/blog/2011-11-02/microsoft-keyboard-4000.jpg" alt="Microsoft Natural Ergonomic Keyboard 4000"></p>\n<p>Open the <code class="language-text">/lib/udev/rules.d/95-keymap.rules</code> file:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> <span class="token function">nano</span> /lib/udev/rules.d/95-keymap.rules</code></pre>\n      </div>\n<p>Let’s find the line that starts with <code class="language-text">ENV{ID_VENDOR}==&quot;Microsoft&quot;</code>. On my setup, it looks like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">ENV<span class="token punctuation">{</span>ID_VENDOR<span class="token punctuation">}</span><span class="token operator">==</span><span class="token string">"Microsoft"</span>, ENV<span class="token punctuation">{</span>ID_MODEL_ID<span class="token punctuation">}</span><span class="token operator">==</span><span class="token string">"00db"</span>, RUN+<span class="token operator">=</span><span class="token string">"keymap <span class="token variable">$name</span> 0xc022d zoomin 0xc022e zoomout"</span></code></pre>\n      </div>\n<p>Replace the <code class="language-text">zoomin</code> value with <code class="language-text">pageup</code> and the <code class="language-text">zoomout</code> value with <code class="language-text">pagedown</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">ENV<span class="token punctuation">{</span>ID_VENDOR<span class="token punctuation">}</span><span class="token operator">==</span><span class="token string">"Microsoft"</span>, ENV<span class="token punctuation">{</span>ID_MODEL_ID<span class="token punctuation">}</span><span class="token operator">==</span><span class="token string">"00db"</span>, RUN+<span class="token operator">=</span><span class="token string">"keymap <span class="token variable">$name</span> 0xc022d pageup 0xc022e pagedown"</span></code></pre>\n      </div>\n<p>After restarting your computer, your scrolling keys should now work.</p>\n<p><strong>Heads up!</strong> This tip has been tested on <a href="https://en.wikipedia.org/wiki/List_of_Ubuntu_releases#Ubuntu_12.10_.28Quantal_Quetzal.29">Ubuntu 12.10</a>.</p>',frontmatter:{title:"Microsoft Natural Ergonomic Keyboard 4000's zoom slider on Ubuntu 12.10",date:"November 02, 2011",permalink:"/blog/enabling-scrolling-using-the-microsoft-natural-ergonomic-keyboard-4000s-zoom-slider-on-ubuntu-1210/"}}},pathContext:{slug:"/blog/enabling-scrolling-using-the-microsoft-natural-ergonomic-keyboard-4000s-zoom-slider-on-ubuntu-1210/",previous:!1,next:{fields:{slug:"/blog/basic-custom-domain-hosting-with-github-pages/"},frontmatter:{title:"Basic custom domain hosting with GitHub Pages",teaser:null,description:"Basic custom domain hosting with GitHub Pages",tags:["setup"],redirectFrom:null}}}}}});
//# sourceMappingURL=path---blog-enabling-scrolling-using-the-microsoft-natural-ergonomic-keyboard-4000-s-zoom-slider-on-ubuntu-1210-44a9dac37cedb634c21d.js.map