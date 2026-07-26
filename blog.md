---
layout: default
permalink: /blog/
title: "Blog"
description: "Notes and updates from How Long Tho."
---
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
