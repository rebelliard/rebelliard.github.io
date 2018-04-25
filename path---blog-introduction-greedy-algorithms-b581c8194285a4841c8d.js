webpackJsonp([99004157742242],{325:function(e,t){e.exports={data:{site:{siteMetadata:{title:"rafael.do",author:"Rafael E. Belliard"}},markdownRemark:{id:"/Users/rafael/play/rebelliard.github.io/src/pages/blog/2016-07-11-introduction-to-greedy-algorithms/index.md absPath of file >>> MarkdownRemark",html:'<p>Greedy algorithms are good at finding solutions to problems by choosing a consistently optimal solution on each step.</p>\n<h2>Basic concepts</h2>\n<ul>\n<li>An <strong>optimal solution</strong> is a feasible solution with the largest (or smallest) objective function value.</li>\n<li>A <strong>local optimum</strong> can be obtained by finding the optimal solution within a neighboring set of candidate solutions.</li>\n<li>A <strong>global optimum</strong> can be obtained by finding the optimal solutions among all possible solutions.</li>\n</ul>\n<h2>Problem characteristics</h2>\n<ol>\n<li><strong>Greedy choice property</strong>: a global optimum can be obtained by the selection of a local optimum.</li>\n<li><strong>Optimal substructure</strong>: a global optimum can be obtained by using the local optimum of its subproblems.</li>\n</ol>\n<h2>General strategies</h2>\n<h3>“Greedy stays ahead” arguments</h3>\n<p>Using “Greedy stays ahead” strategy, the algorithm is always at least as far ahead as the optimal solution of each iteration.</p>\n<ol>\n<li>\n<p><strong>Define your solutions.</strong> Define what object will represent the global optimum, and what form each local optimum takes.</p>\n</li>\n<li>\n<p><strong>Find a measure.</strong> Find a series of measurements to ensure your algorithm stays ahead of the local optimums you’ve found.</p>\n</li>\n<li>\n<p><strong>Proove greedy stays ahead.</strong> <em>Inductively</em> show that the local optimums are as good as any of the solution’s measures.</p>\n</li>\n<li>\n<p><em>Mathematical induction:</em> a means of proving a theorem by showing that if it is true of any particular case, it is true of the next case in a series, and then showing that it is indeed true in one particular case.</p>\n</li>\n<li>\n<p><strong>Prove optimality.</strong> By <em>contradiction</em>, prove that since the algorithm stays ahead of its previous measures, it must produce an optimal solution.</p>\n</li>\n<li>\n<p><em>Mathematical proof by contradiction:</em> assume that a statement is not true and then to show that that assumption leads to a contradiction. In the case of trying to prove this is equivalent to assuming that That is, to assume that is true and is false.</p>\n</li>\n</ol>\n<h3>Exchange arguments</h3>\n<p>The greedy exchange strategy is used to prove the correctness of greedy algorithms by transforming the global optimum iteratively without worsening its quality.</p>\n<ol>\n<li><strong>Define your solutions.</strong> Define an object <code class="language-text">A</code> that will represent the global optimum and an object <code class="language-text">O</code> that represents a local optimum.</li>\n<li><strong>Compare solutions.</strong> Show that if the global optimum is not the same as the local optimum, either:</li>\n<li>There is an element in <code class="language-text">O</code> that is not in <code class="language-text">A</code>.</li>\n<li>There are two elements of <code class="language-text">O</code> that are in a different order in <code class="language-text">A</code>.</li>\n<li><strong>Exchange pieces.</strong> Gradually modify the local optimum <code class="language-text">O</code> until it is the same as the algorithm’s global optimum <code class="language-text">A</code>.</li>\n<li><strong>Iterate.</strong> Decrease the number of differences between <code class="language-text">A</code> and <code class="language-text">O</code>, until you can turn <code class="language-text">A</code> into <code class="language-text">O</code> without worsening the quality of the solution. Inductively, <code class="language-text">O</code> must be optimal.</li>\n</ol>\n<h2>Example: Change-making problem</h2>\n<p>This <a href="https://en.wikipedia.org/wiki/Change-making_problem">classical problem</a> addresses the following question: How can a given amount of money be made with the least number of coins of given denominations 1, 5, 10 and 25?</p>\n<p>Example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Input:\n  37\n\nOutput:\n  4\n\nExplanation:\n  37 = 25 + 10 + 1 + 1</code></pre>\n      </div>\n<p>Implementation in Python:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">def change_making_problem(n):\n    count = 0\n    for coin in [25, 10, 5, 1]:\n        # Largest coin not greater\n        # than the remaining amount.\n        while n &gt;= coin:\n            count += 1\n            n -= coin\n    return count</code></pre>\n      </div>\n<h3>Read more</h3>\n<ul>\n<li><a href="http://web.stanford.edu/class/archive/cs/cs161/cs161.1138/handouts/120%20Guide%20to%20Greedy%20Algorithms.pdf">Guide to Greedy Algorithms</a>.</li>\n<li><a href="http://www.cs.cornell.edu/courses/cs482/2004su/handouts/greedy_ahead.pdf">Proof Techniques: Greedy Stays Ahead</a>.</li>\n<li><a href="http://www.cs.cornell.edu/courses/cs482/2003su/handouts/greedy_exchange.pdf">Proof Techniques: Greedy Exchange</a>.</li>\n</ul>',frontmatter:{title:"Introduction to greedy algorithms",date:"July 11, 2016",permalink:"/blog/introduction-greedy-algorithms/"}}},pathContext:{slug:"/blog/introduction-greedy-algorithms/",previous:{fields:{slug:"/blog/how-do-i-become-a-better-developer/"},frontmatter:{title:"How do I become a better developer?",teaser:"Start a blog.",description:"How I can break away from my plateau and improve my coding skills?",tags:["growth"],redirectFrom:["/how-do-i-become-a-better-developer/"]}},next:{fields:{slug:"/blog/react-driven-by-facebook-principle-concerns/"},frontmatter:{title:"React's “Driven by Facebook” principle concerns me",teaser:"React's “Design Principles” article gave me a rollercoaster of emotions that reminded me of Facebook's ill-fated Parse service.",description:"React's “Design Principles” article gave me a rollercoaster of emotions that reminded me of Facebook's ill-fated Parse service.",tags:["react"],redirectFrom:null}}}}}});
//# sourceMappingURL=path---blog-introduction-greedy-algorithms-b581c8194285a4841c8d.js.map