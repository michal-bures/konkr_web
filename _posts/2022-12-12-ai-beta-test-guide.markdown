---
layout: post
title:  AI beta test guide
date:   2022-12-05 21:00
categories: update
---

Here are some tips for messing with the new AI available at [www.konkr.io/releases/dev/test-ai-update/](https://www.konkr.io/releases/dev/test-ai-update/):

**Your progress is tracked separately in this branch** (cloud sync is disabled), 
so you can keep track of which levels you tried (and/or beaten) with the new AI.

**There are cheats!** I'm letting you cheat a bit in this branch so that you can experiment with various situations and AI settings:
   * you have unlimited rewinds (you can rewind even with no lives left)
   * you can use middle mouse button to make your units that moved this turn movable again


You have a **Faction customization panel** at your disposal, which allows you to adjust the AI playstyle. Here's a quick summary of all its options:

<img src="/img/blog/faction-controls.png"/>

For more info on each of the adjustable traits, continue reading! 

### Daring
(previously called *expansive*)

How much the AI is willing to get greedy and take big risks.
* When set to 1, the AI will basically stop defending, using all it's units to aggressively expand or harass other factions.
* When set to 0, the AI will heavily prioritize securing its existing territory before taking any risks.


### Combative
(previously called *disruptive*)

How much the AI is willing to start conflict with other factions.
* When set to 1, it will always prefer taking tiles from others, rather than expanding into neutral territory.
* When set to 0, it will basically only ever attack in self-defense.


Important to note here, this has no effect once the AI is under attack, it will always begin to fight back after that
(though it can revert to being at peace if you leave it alone for a few turns; how long? proportional to how much damage you caused).

### Ambitious
How much the AI is trying to stop anybody else from gaining an upper hand. This is what causes the infamous phenomenon of
your ally brutally backstabbing you just a turn before you were about to do it to them :).

* When set to 1, the AI will quickly begin to plot against anyone who's getting too far ahead of the other factions.
* When set to 0, the AI will ignore the big picture and play consistently

This also affects how much the AI shifts it's playstyle based on the total situation. 
For example the AI becomes more *daring* when it's behind and less so when ahead. Setting *ambitious* to 0 gets rid of these effects
and makes the AI playstyle const from the start to the end of the game.

### Honorable
This controls how much the AI let its approval of other factions (what you see on the red-green spectrum of factions emojis) affect its decisions.  

* When set to 1, the AI will almost never attack allies
* When set to 0, it will pay zero attention to its relations with other factions.

### Attack Skill
Getting tired of the AI waltzing in from half across the map with just enough units to snipe your capital? 
You can use this to limit the range at which the AI "sees" attack opportunities.
* When reduced to 0.5, the AI usually won't make lunges farther than 5 tiles from its borders.
* When reduced to 0, the AI basically behaves like the one in main branch, only rarely discovering any effective attack opportunities

### Defense Skill
Getting tired of the AI always placing just enough defenders to prevent any juicy cut? This can be used to introduce
some extra gaps into the AI defenses. It makes the AI slightly underestimate the forces at your disposal.


