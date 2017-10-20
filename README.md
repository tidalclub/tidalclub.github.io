<h1>Tidal Club website</h1>
<h2>Editing content</h2>
<p>Just use plain html.</p>
<p>To add a line break (between events for example) ad an `<hr>` tag.</p>
<p>Please use the `<strong>` tag for making **bold** rather than
 `<b>`. It's better semantic markup. :stuck_out_tongue_winking_eye:</p>

<h2>Creating a page</h2>
<p>Copy an existing page and replace all the content apart from the bit that says:</p>
---<br>
layout: default<br>
title: Tidal Club<br>
---

<h2>Editing the navigation</h2>
<p>The navigation doesn't update dynamically when you create a new page, so you need to edit
 **_layouts/default.html**.</p>
 <p>Do this by copying an existing menu item such as:</p>

   <li><a href="sheffield.html">Sheffield</a></li>
 </code>
 <p>**NB:** You need to do this in two places so the mobile menu also updates.</p>
