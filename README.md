
<h1>Tidal Club website</h1>
<h2>Editing content</h2>
<p>Just use plain html.</p>
<p>To add a line break (between events for example) ad an <strong>&lt;hr&gt;</strong> tag.</p>
<p>Please use the <strong>&lt;strong&gt;</strong> tag for making <strong>bold</strong> rather than
 <strong>&lt;b&gt;</strong>. It's better semantic markup. :stuck_out_tongue_winking_eye:</p>

<h2>Creating a page</h2>
<p>Copy an existing page and replace all the content apart from the bit that says:</p>
<code>
---<br>
layout: default<br>
title: Tidal Club<br>
---
</code>

<h2>Editing the navigation</h2>
<p>The navigation doesn't update dynamically when you create a new page, so you need to edit
 <strong>_layouts/default.html</strong>.</p>
 <p>Do this by copying an existing menu item such as:</p>
 <code>
   &lt;li&gt;&lt;a href="sheffield.html"&gt;Sheffield&lt;/a&gt;&lt;/li&gt;
 </code>
 <p><strong>NB: </strong>You need to do this in two places so the mobile menu also updates.</p>
