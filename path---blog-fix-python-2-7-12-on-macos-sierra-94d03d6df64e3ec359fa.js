webpackJsonp([0x90a2d28b631e],{367:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Rafael E. Belliard: Software Developer",author:"Rafael E. Belliard"}},markdownRemark:{id:"/Users/rafael/play/rafael.do/src/pages/blog/2016-09-20-fix-python-2-7-12-on-macos-sierra/index.md absPath of file >>> MarkdownRemark",html:'<p>Early adopters of MacOS Sierra like myself are not able to use Homebrew to install Python 2.7.12 with the <code>--universal</code> flag. This has been reported on <a href="https://bugs.python.org/issue27806">Issue 27806: 2.7 32-bit builds fail on macOS 10.12 Sierra due to dependency on deleted header file QuickTime/QuickTime.h</a>.</p>\n<p>To fix this, you have to patch Homebrew’s Python build:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>brew edit python</code></pre>\n      </div>\n<p>Add the following lines to your <code>python.rb</code> file:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>patch do\n  url "https://bugs.python.org/file44699/issue27806_v3.patch"\n  sha256 "fff60cbdb9ff344cd84ea776ea16e940147419c303ab378fb5c7fb3e9053ef0a"\nend</code></pre>\n      </div>\n<p>The <code>diff</code> will look like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>diff --git a/Formula/python.rb b/Formula/python.rb\nindex b02aef9..55a1a9a 100644\n--- a/Formula/python.rb\n+++ b/Formula/python.rb\n@@ -68,6 +68,11 @@ class Python < Formula\n     sha256 "c075353337f9ff3ccf8091693d278782fcdff62c113245d8de43c5c7acc57daf"\n   end\n\n+  patch do\n+    url "https://bugs.python.org/file44699/issue27806_v3.patch"\n+    sha256 "fff60cbdb9ff344cd84ea776ea16e940147419c303ab378fb5c7fb3e9053ef0a"\n+  end\n+\n   def lib_cellar\n     prefix/"Frameworks/Python.framework/Versions/2.7/lib/python2.7"\n   end</code></pre>\n      </div>\n<p>You should now be able to install python universally:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>brew install python --universal</code></pre>\n      </div>',frontmatter:{title:"Fix Homebrew's Python 2.7.12 --universal on MacOS Sierra",date:"September 21, 2016",permalink:"/blog/fix-python-2-7-12-on-macos-sierra"}}},pathContext:{slug:"/blog/fix-python-2-7-12-on-macos-sierra",previous:{fields:{slug:"/blog/integrating-angularjs-django"},frontmatter:{title:"Integrating AngularJS with Django",teaser:"How to create a single-page application using AngularJS and the Django Framework.",description:"How to create a single-page application using AngularJS and the Django Framework.",tags:["angularjs"],redirectFrom:null,disableListing:null}},next:{fields:{slug:"/blog/fix-unprotected-private-key-file-on-macos"},frontmatter:{title:"Fix “UNPROTECTED PRIVATE KEY FILE” on MacOS Sierra",teaser:"It is recommended that your private key files are NOT accessible by others.",description:"It is recommended that your private key files are NOT accessible by others.",tags:["setup"],redirectFrom:null,disableListing:null}}}}}});
//# sourceMappingURL=path---blog-fix-python-2-7-12-on-macos-sierra-94d03d6df64e3ec359fa.js.map