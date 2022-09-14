import{_ as s,o as n,c as a,d as l}from"./app.368c58e2.js";const A=JSON.parse('{"title":"\u4ECB\u7ECD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u7EC4\u4EF6","slug":"\u57FA\u7840\u7EC4\u4EF6","link":"#\u57FA\u7840\u7EC4\u4EF6","children":[]},{"level":2,"title":"\u6269\u5C55\u7EC4\u4EF6","slug":"\u6269\u5C55\u7EC4\u4EF6","link":"#\u6269\u5C55\u7EC4\u4EF6","children":[]}],"relativePath":"guide/components.md"}'),o={name:"guide/components.md"},p=l(`<h1 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h1><p>\u6846\u67B6\u63D0\u4F9B\u4E00\u7CFB\u5217\u7684\u7EC4\u4EF6\u65B9\u4FBF\u5FEB\u901F\u5F00\u53D1\uFF0C\u5176\u4E2D<strong>\u57FA\u7840\u7EC4\u4EF6</strong>\u4E3A <a href="https://element-plus.org/#/zh-CN" target="_blank" rel="noreferrer">Element Plus</a> \u539F\u751F\u63D0\u4F9B\u7684\u7EC4\u4EF6\uFF1B\u800C<strong>\u6269\u5C55\u7EC4\u4EF6</strong>\u6709\u4E00\u90E8\u5206\u662F\u5728 Element Plus \u7EC4\u4EF6\u4E0A\u8FDB\u884C\u4E86\u4E8C\u6B21\u5F00\u53D1\uFF0C\u8FD8\u6709\u4E00\u90E8\u5206\u662F\u5C01\u88C5\u4E86\u7B2C\u4E09\u65B9\u63D2\u4EF6\u3002</p><p>\u7EC4\u4EF6\u6E90\u7801\u5B8C\u5168\u5F00\u653E\uFF0C\u5982\u679C\u89C9\u5F97\u7528\u7740\u4E0D\u987A\u624B\uFF0C\u53EF\u4EE5\u5230 <code>/src/components/</code> \u76EE\u5F55\u4E0B\u627E\u5230\u5BF9\u5E94\u7EC4\u4EF6\u8FDB\u884C\u4FEE\u6539\u3002</p><h2 id="\u57FA\u7840\u7EC4\u4EF6" tabindex="-1">\u57FA\u7840\u7EC4\u4EF6 <a class="header-anchor" href="#\u57FA\u7840\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>\u57FA\u7840\u7EC4\u4EF6\u7531 Element Plus \u63D0\u4F9B\uFF0C\u5176\u4E2D\u5305\u542B<strong>\u6309\u94AE</strong>\u3001<strong>\u6587\u5B57\u94FE\u63A5</strong>\u3001<strong>\u5355\u9009\u6846</strong>\u3001<strong>\u591A\u9009\u6846</strong>\u3001<strong>\u8F93\u5165\u6846</strong>\u3001<strong>\u8BA1\u6570\u5668</strong>\u3001<strong>\u7EA7\u8054\u9009\u62E9\u5668</strong>\u3001<strong>\u5F00\u5173</strong>\u3001<strong>\u6ED1\u5757</strong>\u7B49 <strong>50+</strong> \u4E2A\u7EC4\u4EF6\u3002</p><p>\u9605\u8BFB\u5E76\u5B66\u4E60\u8BF7\u67E5\u770B <a href="https://element-plus.org/#/zh-CN" target="_blank" rel="noreferrer">Element Plus \u5B98\u65B9\u6587\u6863</a>\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u6846\u67B6\u4E25\u683C\u6309\u7167 Element Plus \u63A8\u8350\u7684\u4F7F\u7528\u65B9\u5F0F\u8FDB\u884C\u5F15\u5165\uFF0C\u5373\u6309\u9700\u81EA\u52A8\u5BFC\u5165\uFF0C\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728\u4EE3\u7801\u91CC\u4F7F\u7528\u7EC4\u4EF6\uFF0C\u800C\u65E0\u9700\u624B\u52A8\u6CE8\u518C\u3002</p><p>\u4F46\u4E5F\u610F\u5473\u7740 Element Plus \u4E00\u4E9B\u5168\u5C40\u65B9\u6CD5\u5C06\u65E0\u6CD5\u4F7F\u7528\uFF0C\u4F8B\u5982 Message \u6D88\u606F\u63D0\u793A\u7EC4\u4EF6\u3002</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u65E0\u6CD5\u4F7F\u7528</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> proxy </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getCurrentInstance</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">success</span><span style="color:#A6ACCD;">(options)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u53EF\u4EE5\u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">ElMessage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">success</span><span style="color:#A6ACCD;">(options)</span></span>
<span class="line"></span></code></pre></div><p>\u53E6\u5916\u56E0\u4E3A\u6846\u67B6\u6CA1\u6709\u91C7\u7528 Element Plus \u5B98\u65B9\u7684\u56FE\u6807\u4F7F\u7528\u65B9\u5F0F\uFF0C\u8FD9\u4E5F\u610F\u5473\u7740\u90E8\u5206\u7EC4\u4EF6\u7684 icon \u5C5E\u6027\u5C06\u65E0\u6CD5\u4F7F\u7528\uFF0C\u4F8B\u5982 Button \u6309\u94AE\u7EC4\u4EF6\u3002</p><div class="language-vue-html"><button class="copy"></button><span class="lang">template</span><pre><code><span class="line"><span style="color:#676E95;">&lt;!-- \u65E0\u6CD5\u4F7F\u7528 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">el-icon-edit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u7F16\u8F91</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">&lt;!-- \u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD\u4EE3\u66FF --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ep:edit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u7F16\u8F91</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></div><h2 id="\u6269\u5C55\u7EC4\u4EF6" tabindex="-1">\u6269\u5C55\u7EC4\u4EF6 <a class="header-anchor" href="#\u6269\u5C55\u7EC4\u4EF6" aria-hidden="true">#</a></h2>`,8),e=[p];function t(c,r,D,F,y,i){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};