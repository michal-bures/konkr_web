---
layout: page
title: About the game
short_title: About
description: Inspired by the brilliant simplicity of Sean O'Connor's Slay, this game aspires to be a love letter to the concept of 'easy to learn, hard to master'.
permalink: /about/
seo_priority: 0.8
seo_frequency: monthly
---

Konkr is a turn-based strategy game by <a href='mailto:mike@konkr.io' target='_blank'>Michal Bureš</a>.

Inspired by the brilliant simplicity of <a href='https://www.windowsgames.co.uk/slay.html' target='_blank'>Sean O'Connor's "Slay"</a>,
this game aspires to be a love letter to the concept of "easy to learn, hard to master". It's designed to be as simple, fast and intuitive to play
 as possible, but still provide a deeply strategic, almost chess-like experience, where every decision matters.

## FAQ

**When is the next update coming?** 
 
Hopefully soon 😉. This is a one-man hobby project, so I work on it when I have the spare time and motivation.
You can [join the discord server]({{ site.discord_link }}) to chat and find out what I'm working on at the moment.

**Multiplayer when?**

Some kind of local or peer-to-peer multiplayer might be a thing in the not so far future, perhaps even a co-op campaign.

An online multiplayer against random players is not something I consider worth pursuing at the moment. I used to play [kdice.com](https://www.kdice.com/)
a lot back in the day, and it taught me that once you have multiple strangers around the table in a game like this, 
the game mechanics become largely irrelevant, and it just becomes a fairly toxic game of risk. All about politics, silent aliances, social dynamics and backstabbing.
Which can be pretty engaging too I guess, but I don't think I want to deal with that, plus there's already enough games like this. If you still think that's a shame,
also consider how fun would it be to:
- play this game without rewinds
- wait for 5 other people to make their moves after every turn 
- have two rivals team up on you because they are friends in real life
- have everyone rage quit on you the moment you start winning

Etc... You can tell I'm not a huge fan of the idea of competitive konkr multiplayer 🙂. Maybe at some point, but there's a lot of 
other priorities that seem more appealing at the moment.

**Is it open source? Can I contribute?**

The game itself is currently not open source. What *is* open source:
- [this website](https://github.com/michal-bures/konkr_web)
- [the source file for AI chatter messages](https://github.com/michal-bures/konkr_data/blob/master/ai-chatter/default.md) - I welcome any contributions to this!

Reach out to me if you'd like to contribute to the game! I would especially welcome any help from:
 - a sound designer
 - an artist, especially one with experience in UI design
 - a writer, to help me flesh out the AI chatter and overall lore and story of the game 

But keep in mind this is not currently a for-profit project, so I can't offer any compensation for your time.

**Will it always remain free? How can I support the game?**

The currently available features will always remain free on [www.konkr.io](https://www.konkr.io).

At the moment, you can contribute by:
 - sending me a nice feedback message - that counts for more than you think!
 - spreading awareness about the game (tell your friends!)
 - donating on [itch.io](https://embair.itch.io/konkr)

I want to avoid ads or any of the predatory monetization practices that have become an unfortunate standard in the industry. 
As the game grows, I do eventually plan to support the development and maintenance of the game in two ways:
- via a paid Steam release and/or mobile app
- by locking some extra features or game modes behind a paid expansion pack

**How was the game made?**

The game itself is written in typescript, using version 3 of the [Phaser](//phaser.io) game engine. It uses [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) for rendering.
It relies heavily on [ImmutableJS](https://immutable-js.com/) for managing the game state, bringing together the benefits of immutability (great for the undo, rewind and replay features) and fast updates
thanks to structural sharing.

Some favourite tools I use to enable smooth release, deployment, and maintenance of the game are:
* [Jekyll](https://jekyllrb.com/) for generating most of this static website from markdown (you can [view this website on github](https://github.com/michal-bures/konkr_web))
* [Netlify](https://www.netlify.com/) for a simple static web hosting
* [GitHub Actions](https://github.com/features/actions) for automating the release/deployment process
* [Firebase](https://firebase.google.com/) for implementing authentication and a simple data store 
* [Sentry.io](https://sentry.io/) for error tracking and analysis
* [Browser stack](https://www.browserstack.com/) for easy testing across a range of browsers and devices 

Feel free to contact me on <a href="mailto:{{ site.email }}">{{ site.email }}</a> if you'd like to learn more!


