---
layout: page
title: Read Me
permalink: readme/
---

Grey Matter
===========

Inspired by Distillery, built with Jekyll and served locally with Rake, leveraging Oomph SASS Scaffold&hellip; a start for stand-alone wireframe projects. Bourbon, Neat and [Refills](http://refills.bourbon.io/) (even [Empties](http://empties.bourbon.io/) ) help get us up and running with minimal styles in the way of development. 


## Distillery
[Distillery](https://github.com/thinkshout/distillery/tree/master/_assets) is a starter kit for creating wireframes with Jekyll 2.4. I borrowed this code from them as a way to have a simple Jekyll set up with Rake for local watching/serving. Rake adds SASS globbing to this build, allowing us in SASS to use: 

```sass
@import "component/*";
```

Everything inside that folder will be added and watched for changes. 


## Getting started
To get up and running:

### Install dependencies
Navigate to this folder in your Terminal, then:

```
$ gem install bundler
$ gem install rake

$ bundle install
```

### To run the local server

```
$ rake serve
```

The server is available at `http://localhost:4000`. If the compiled file URLs need to be prefixed, add a prefix to the `rakefile` line 21, and serve from that project root as well, i.e. `http://localhost:4000/project`. When you upload the sites content to a server, all URLs will be prefixed with `/project`.

## Usage
Any folder prefixed with an underscore is used as a build folder only, it is not compiled and rendered. An `assets` or `files` folder (unprefixed) will be. Additional files that should be excluded from the build should be added to `_config.yml`.

Use `_includes` like you would use partials in PHP for repetitive elements like headers, footer, nav, etc…

Use `_layouts` to control larger templates. Distillery ships with an example page and a post. Variables use a `{{ double brace }}` syntax, and refer to simple text declarations at the top of page files. `default.html` is the larger template and includes calls for a header and footer. `page.html` is a partial, which renders where the `{{ content }}` call is made. 

Page files live at the site root. All rendered HTML and assets go into the `_site` folder by default, from which they are served in your browser. Pages can also be nested in folders and will be rendered as such. 

More in depth Jekyll instructions here: https://jekyllrb.com/

Pull the Refills components that you want to use from here: http://refills.bourbon.io/


## Markdown
[A markdown syntax usage guide](https://github.com/fletcher/MultiMarkdown/blob/master/Documentation/Markdown%20Syntax.md). Daring Fireball has a really cool [online converter](http://daringfireball.net/projects/markdown/dingus) if you need troubleshooting help.