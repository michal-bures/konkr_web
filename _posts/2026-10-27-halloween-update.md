---
layout: post
title:  "👻 Boo!"
date:   2026-10-27 08:00:00
categories: update
---

A Konkr update so big it's scary!

<!-- excerpt-end -->

## New stuff

Here's a quick summary of what just landed in the game!

<div class="feature-row">
<div markdown="1">

### 👻 Halloween vibes
- A new Halloween night theme, plus a new **Ghosts** ruleset for Conquest
- You can turn the seasonal theme on and off from the title screen or in the options menu

</div>
<img src="/img/blog/halloween-1.png" alt="Halloween vibes"/>
</div>

<div class="feature-row">
<div markdown="1">

### 🌊 New looks
- You can **customize your own and your rivals' faction colors** in the settings menu and map makers can design custom color schemes for their maps 
- The UI refresh is finished: new fonts, consistent style everywhere, readable on any ocean color
- Settings menu is reorganized and easier to use 
- The sea had some subtle effects added to it to look a bit more like a sea
- **Fancy/Fast graphics toggle** in settings menu lets you go back to simpler graphics if your device has trouble keeping up
- Units hop over longer distances instead of sliding across the board
- Rival faces are shown on the power bar while the AI plays

</div>
<img src="/img/blog/halloween-2.png" alt="New look"/>
</div>

<div class="feature-row">
<div markdown="1">

### 🎮 Easier to play
- **Right-click a unit to undo that specific move** instead of spamming the undo button
- The budget overlay view (Q) is now known as the _Spyglass_ and you can customize what it shows when toggled in settings (planning to add more expert-player-focused UI features there in the future) 
- Tooltips show hotkeys, and `-` / `=` zoom the map
- Province income label shows a warning when your province is about to go bankrupt

</div>
<img src="/img/blog/halloween-3.png" alt="Easier to play"/>
</div>

### 📦 Sharing
- Shared replays play smoother and should no longer be prone to glitches
- Shared maps are up to 4× smaller thanks to better compression
- New "Import file..." button on the title screen opens maps, replays and saved progress - no more scratching your head over how to drag and drop on a phone!

### 🐛 Fixes and performance
- The AI is once again a little less prone to accidentally bankrupting itself (just a little)
- No more multi-second freeze at the start of your turn on maps with huge regions
- and the usual assortment of little fixes (see the [changelog](/changelog) for all the details)

I realize all the UI changes might come as a bit of a shock! Let me know if anything feels much more annoying than it used to be, I have my eyes on your feedback as always, in all the usual channels:
- in-game feedback form
- [discord]({{ site.discord_link }})
- [X/Twitter (@konkr_dev)](https://x.com/konkr_dev)
- email: [mike@konkr.io](mailto:mike@konkr.io)

And in case you're truly desperate to have your old Konkr back exactly as you know it, it remains playable right here: [konkr.io/releases/2.36.10](/releases/2.36.10/)

## On the horizon

I am really excited about the pace of progress I'm apparently capable of now, so a lot of big plans and cool ideas are screaming for attention in my head.
That said, I do have a fairly clear plan for what the next main priorities should be, so let me share that with you today:

- **1. Map editor & in-game map sharing**
  
  You might have noticed the map editor conspicuously missing from the update. There are still some major
changes I want to make, both under the hood and on the surface before releasing it to everyone. In the meantime you can still use it
in the [test branch](https://www.konkr.io/releases/dev/test-map-editor/) and the maps you create there will continue to work in the current
version of the game.

- **2. Overall performance optimization and fixes _especially_ on the AI side**
  
  There's a huge untapped potential to make the game run much smoother, which I can't wait to dive into properly!
Making the AI run faster will also make it more feasible for me to use simulated games to evaluate procedurally 
generated maps, which ties into the next goal:

- **3. Endgame content**

  Community maps are one part of it, but also:
  - A new random map generator with a lot more fine-grained customization options
  - Procedurally generated weekly expeditions 
  - Achievements and other forms of long term progression

- **4. New features**
 
  I'm not planning any groundbreaking changes to the core ruleset of the game (I have some *Ideas*, but those belong in a sequel),
  but I do want to add more variety for players to discover over time. New terrains and objects like the swamp terrain and \*cough\*<span style="font-size: 0.6em">boats</span>\*cough\* gold mines are a good example,
  but also more varied victory objectives, more visual eye candy (I swear I will find a way to make mountains work in the Konkr art style eventually), etc.

- **5. New core expeditions**
 
  The built-in expeditions sure have a lot of levels, but they show their age. The more of the above features I add, the
  more it'll be time to take a stab at a brand new campaign that follows the Tutorial and introduces all the additional features at just the right pace,
  so that the player is neither bored nor overwhelmed.

- **Honorable mentions** - other things that are not on the above roadmap, but I would love to find some time for them too:
  - more focus on good mobile UI/UX and a Konkr Android/iOS app
  - more tools for community map makers, including sharing custom expeditions
  - local multiplayer
  - new rival factions with different behavior or even game mechanics (like the Lich King)


As always, none of this is set in stone, so don't get too emotionally attached to the outlook 😇. 

Thanks for reading this far, have a spooky Halloween, and if you spot any bugs crawling around, send them my way! It's a pretty big update, so I'm sure a few of them are lurking in there somewhere! 😅