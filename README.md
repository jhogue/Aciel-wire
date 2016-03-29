---
layout: page
title: Read Me
permalink: /readme/
---

Sippy Cup
===========
Inspired by Distillery, built with Jekyll and served with Rake, leveraging Oomph SASS Scaffold&hellip; a start for stand-alone wireframe projects


## Distillery
[Distillery](https://github.com/thinkshout/distillery/tree/master/_assets) is a starter kit for creating wireframes with Jekyll 2.4. It uses the Bourbon library — Bourbon, Neat, Bitters, Refills and a nifty Rake setup*

## Getting started
To get up and running:

###Install dependencies

```
$ gem install bundler
$ gem install rake

$ bundle install
```

###Run the local server
```
$ rake serve
```

##Usage
Use `_includes` like you would use partials in PHP for repetitive elements like headers, footer, nav, etc…

Use `_layouts` to control larger templates. Distillery ships with an example page and a post. Variables use a `{{ double brace }}` syntax, and refer to simple text declarations at the top of page files. 

Page files live at the site root (Jekyll renders anything at the site root not prepended with an underscore). All rendered HTMl and assets go into the `_site` folder, from which they are served in your browser. 

More in depth Jekyll instructions here: https://jekyllrb.com/

Pull the Refills components that you want to use from here: http://refills.bourbon.io/


##Markdown
[A markdown syntax usage guide](https://github.com/fletcher/MultiMarkdown/blob/master/Documentation/Markdown%20Syntax.md). Daring Fireball has a really cool [online converter](http://daringfireball.net/projects/markdown/dingus) if you need troubleshooting help.