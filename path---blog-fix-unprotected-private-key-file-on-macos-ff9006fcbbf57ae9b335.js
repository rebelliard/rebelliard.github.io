webpackJsonp([94816480091785],{329:function(e,a){e.exports={data:{site:{siteMetadata:{title:"rafael.do",author:"Rafael E. Belliard"}},markdownRemark:{id:"/Users/rafael/play/rebelliard.github.io/src/pages/blog/2016-09-22-fix-unprotected-private-key-file-on-macos/index.md absPath of file >>> MarkdownRemark",html:'<p>After I upgraded from Mac OS X “El Capitan” to MacOS Sierra, I started getting the following error when trying to use my SSH keys:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nPermissions 0644 for &#39;/home/foo/.ssh/id_rsa&#39; are too open.\nIt is recommended that your private key files are NOT accessible by others.\nThis private key will be ignored.\nbad permissions: ignore key: /home/foo/.ssh/id_rsa</code></pre>\n      </div>\n<p>Somehow my SSH keys permissions got messed up. The fix was to simply change their permissions to the <a href="http://bodhizazen.net/Tutorials/SSH_keys#Login">recommended</a> settings:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">chmod 600 ~/.ssh/id_rsa\nchmod 600 ~/.ssh/id_rsa.pub</code></pre>\n      </div>\n<p>Lastly, I made sure the private key was added to MacOS’ Keychain:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">ssh-add -K ~/.ssh/id_rsa</code></pre>\n      </div>',frontmatter:{title:"Fix “UNPROTECTED PRIVATE KEY FILE” on MacOS Sierra",date:"September 22, 2016",permalink:"/blog/fix-unprotected-private-key-file-on-macos/"}}},pathContext:{slug:"/blog/fix-unprotected-private-key-file-on-macos/",previous:{fields:{slug:"/blog/fix-python-2-7-12-on-macos-sierra/"},frontmatter:{title:"Fix Homebrew's Python 2.7.12 --universal on MacOS Sierra",teaser:"Avoid issues installing Python on MacOS Sierra due of deprecated dependencies.",description:"Avoid issues installing Python on MacOS Sierra due of deprecated dependencies.",tags:["setup"],redirectFrom:null}},next:!1}}}});
//# sourceMappingURL=path---blog-fix-unprotected-private-key-file-on-macos-ff9006fcbbf57ae9b335.js.map