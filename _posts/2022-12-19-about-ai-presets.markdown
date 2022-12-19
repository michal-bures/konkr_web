---
layout: post
title:  About the AI personality presets
date:   2022-12-19 18:00
categories: update
---

Currently, you can find four AI personality presets in the customization console in the [test branch](https://www.konkr.io/releases/dev/test-ai-update/).
These represent a few different answers to the crucial question: **How should the AI rivals behave in order to be fun to play against?**

<img src="/img/blog/presets.png"/>

The short version is:
* **competitive** - it should try to win by any means necessary
* **roleplaying** - it should represent a kingdom in the game world which reacts to player actions in a way that feels natural
* **maniac** - it should be constantly attacking, making the game fast and exciting
* **neutral** - it should have no feelings towards others, simply attacking whoever happens to be in it's way at the moment

For a slightly deeper explanation see the section below.

I don't think there is necessarily a single "right" answer here,
rather I suspect it might be a thing of personal preference. Which makes me very curious which of these personalities 
sounds most fun to **YOU**. It's one of the questions in the **[feedback survey](https://forms.gle/W7xgbGW5Q6UFLR7Z8)**! Or does your idea of an ideal AI rival behavior not fit any of these? In that case I'd really like to hear about it!

More detailed info on each personality preset bellow. Please note that this describes the *goal* I have in mind for each 
personality type, the current implementation might not be the most accurate reflection of it yet ☺. So far I was mainly
focusing on polishing the AI behavior with the default settings ("competitive" personality).

### Competitive
*In a Game of Thrones, you win, or you die.*

This was always my preferred direction for the AI in Konkr. Each AI rival tries their best to win the game, emulating a reasonably skilled human opponent. It's a competition where
everyone is aware that the second place is worth nothing.
* Every turn demands your full concentration and any mistake can be very costly, even when you're in the lead.
* When one faction gains the upper hand, the others will conspire to take it down - late game usually becomes a "you vs everybody else" battle.
* Rivals have strong sense of self-preservation and avoid reckless risks unless they are desperate.
* Alliances are only reliable for as long as they remain mutually beneficial, not for one turn longer.

### Roleplaying
*Violence begets violence.*

This is more along the lines of what you would expect in a more immersive sandbox strategy game. The rival factions naturally grow and respond to player actions, but they are not focused on winning the game. Weaker factions don't conspire to stop the stronger ones and allies rarely betray you.
* The human player is in control and usually free to choose who to attack and who to ally with, leading to a wide breath of strategic choice (but perhaps not enough challenge).
* The rivals can strike back, but the player can generally relax once they get a sizable lead.
* Alliances are reliable, grudges are bitter.
* Rivals have strong sense of self-preservation and avoid reckless risks.

### Maniac
*Ride now! Ride for ruin and the world's ending!*

For those looking for a more fast-paced and action-packed experience. The AI rivals are there to make crazy and exciting stuff happen on the board. They expand and attack recklessly, leaving
their defenses wide open, but can also greatly benefit when their gamble pays off.
* The human player mostly has to react to the rivals actions in order to consistently punish their numerous reckless gambles.
* The games are fast and full of grandiose moves, but don't leave much space for strategy or politics.

### Neutral
*What makes a man turn neutral? Lust for gold? Power? Or were you just born with a heart full of neutrality?*

This is closest to the pure Slay experience. It essentially removes diplomatic considerations from the game. There are no grudges, truces or alliances, everyone is
simply out for themselves. There's also no conspiring against stronger factions. The rivals take over tiles from other
players with the same kind of indifference as if it was a neutral tile.

