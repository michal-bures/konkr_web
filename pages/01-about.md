---
layout: page
title: About the game
short_title: About
permalink: /about/
seo_priority: 0.8
seo_frequency: monthly
---

Konkr is a turn-based strategy game by <a href='mailto:dev@konkr.io' target='_blank'>Michal Bureš</a>.

Inspired by the brilliant simplicity of <a href='https://www.windowsgames.co.uk/slay.html' target='_blank'>Sean O'Connor's "Slay"</a>,
this game aspires to be a love letter to the concept of "easy to learn, hard to master". It's designed to be as simple, fast and intuitive to play
 as possible, yet to still offer glimpses of the kind of strategic depth you would normally expect in a 4X strategy game.

The strategy in Konkr is all about:

* Choosing your allies and enemies wisely and launching decisive attacks at the right moment
* Balancing the economy and the military
* Outmaneuvering your enemy while protecting your own supply lines
* Balancing your military might offense, defense and dealing with domestic unrest


## FAQ

**When is the next update coming?** 
 
Hopefully soon 😉. This is a one-man hobby project, so I work on it when I have the spare time and motivation.
You can [join the discord server]({{ site.discord_link }}) to chat and find out what I'm working on at the moment.

**Will it always remain free?**

The currently available features will always remain free.

I don't have any monetization plans at the moment and I'm allergic to ads and predatory monetization practices.
But if the game ever gets popular enough, I might consider adding some extra paid features to support development and maintenance. 

**How was it made?**

The game itself is written in typescript, using version 3 of the [Phaser](//phaser.io) game engine. It uses [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) for rendering.

To make the release, deployment, and website maintenance as effortless as possible, I use combination of:
* [Jekyll](//jekyllrb.com/) for generating this static website (you can [view this website on github](https://github.com/michal-bures/konkr_web))
* [Netlify](//www.netlify.com/) for making it available on the web
* [Github Actions](//github.com/features/actions) for automating the release/deployment process

Feel free to contact me on <a href="mailto:{{ site.email }}">{{ site.email }}</a> if you'd like to learn more!


