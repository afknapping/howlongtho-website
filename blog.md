---
layout: null
permalink: /blog/
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Blog — How Long Tho</title>
<meta name="description" content="Notes and updates from How Long Tho.">
<meta property="og:title" content="Blog — How Long Tho">
<meta property="og:type" content="website">
<meta property="og:url" content="https://howlongtho.com/blog/">
<link rel="canonical" href="https://howlongtho.com/blog/">
<link rel="preload" href="/fonts/AtkinsonHyperlegibleNext-Regular.ttf" as="font" type="font/ttf" crossorigin>
<link rel="preload" href="/fonts/AtkinsonHyperlegibleNext-SemiBold.ttf" as="font" type="font/ttf" crossorigin>
<link rel="preload" href="/fonts/AtkinsonHyperlegibleNext-ExtraBold.ttf" as="font" type="font/ttf" crossorigin>
<link rel="stylesheet" href="/assets/style.css">
</head>
<body>
{% include nav.html %}
<main>
<h1>Blog</h1>
<p class="lead">Notes and updates from How Long Tho.</p>
<div class="post-list">
{% for post in site.posts %}<div class="post-summary">
<p class="post-date">{{ post.date | date: "%B %-d, %Y" }}</p>
<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
<p>{{ post.excerpt }}</p>
<a class="post-more" href="{{ post.url }}">Read more &rarr;</a>
</div>
{% endfor %}</div>
</main>
<footer>
<a href="/">Home</a> &middot; <a href="mailto:hello@howlongtho.com">hello@howlongtho.com</a>
</footer>
</body>
</html>
