---
title:  "📝 Roadmap update"
layout: post
date:   2023-11-04 01:00:00
categories: update
---
It's been a while since the last proper blog post, so [let's take a minute to look back as well as forward](/update/2023/11/04/roadmap-update.html)!
There's also a <a href="https://forms.gle/VpfxxMW5tYiez5RL7" target="_blank">poll attached</a>, so let me know what you'd like to see next in the game!

<!-- excerpt-end -->

### Looking back

I've been working towards the UI overhaul for the past few months now and there's still a lot of work left.
Not going to lie, it's been a bit of a slog. Maybe with the new world map screen now mostly in place, the rest will be more 
of a breeze, but if years of dev experience taught me anything, it's not to trust my own estimates 🙂.

I've been balancing the UI work with some opportunistic features and improvements, culminating in 
the Dead Islands expedition release. This was in part to keep you guys interested, but also to keep the development fun to me. 
I've noticed a vicious feedback loop - when the progress feels slow, I get less motivated to work on the game, 
which makes the progress even slower. In contrast, the additions like the King's Landing mode or the whole new undead faction were very easy to add, which 
makes me quite happy and excited for the future! It feels like I have the right foundation to build on.

While I have a huge respect for the pure and simple Slay formula this game is based on, variety is the spice of life, and I see huge potential
for Konkr to be a sort of platform for all kinds of interesting new modes and twists on the formula. I'm looking forward to 
exploring this unlimited space of possibilities with you in the future and perhaps stumbling on some ideas that really bring
the Slay formula to the next level!

Speaking of which, a lot of fun and interesting ideas were already pitched in the #feedback-and-ideas channel on discord.
While I normally avoid getting into long discussions about them, I read and deeply appreciate all the feedback and ideas you guys share!

### Looking forward
 
While there has been a lot of new little additions to the game in the past months, seen through the lens of the [roadmap I shared back in January](/update/2023/01/29/roadmap-update.html), 
we're kind of still at the start. The UI for expeditions is finally taking shape, so finishing that is my most 
immediate priority. Follow up to that will be more UI improvements in the main in-game screen, so that you can for
example easily review current difficulty and victory conditions without exiting the level.

After that, these are the next milestones currently on my mind:

- **A full-featured level editor** including detailed map generation options. I originally wanted to wait with this
until I have the infrastructure for level sharing in place, but that seems still ways off, and polishing and expanding 
the current unofficial map editor should be quite straightforward. Official level sharing/rating/tagging system can come later.  

- **Decoupling AI calculations from the core game**. This is already the case to large extent, but there are some
unfortunate dependencies between the AI code and the core game engine that I need to get rid of. What this will unlock is:
   - ability to run AI calculations in a separate thread, which should make the AI turns significantly faster, 
     especially on lower-end hardware.
   - it will make it easier to use the AI to evaluate procedurally generated maps, which is relevant for the next item on the list.

- **Procedurally generated expeditions**. I'm talking weekly expeditions and daily challenges, a more interesting
 form of "endgame" content than just re-rolling random conquest levels. Since these will be generated in advance, 
  I can use the AI to play-test the levels and make sure they are both challenging and actually winnable. 
  No more totally lopsided/unwinnable levels!

- **Mobile UI improvements and Android/iOS app**: Since the large majority of players are currently on PC,
  I've been neglecting the mobile user experience quite a bit. But at some point that becomes a bit of a self-fulfilling prophecy.
  I think the game itself is great fit for mobile gaming, but the half-assed mobile UI is getting in the way.
  I believe this comes down mostly to some easily fixable issues, so it's time to tackle them. 
  I'll also look into releasing the game on Android and/or iOS app store,
  that would be a great way to celebrate the improved UI and bring the game to whole new audiences.

- **Next iteration of the rival AI**. It's about a year since the last big rival AI overhaul. It was a huge improvement over the previous
  version and since it's initial release it has seen a pile of tweaks and improvements to address some of its weaknesses.
  Aimed with better understanding of what worked and what didn't and also a bunch of specific replays documenting 
  the problems with the current AI, I'm looking forward to taking another stab at it.
  - The big theme of the previous overhaul was to make rivals more dynamic and able to react to the overall situation on the board.
  For this next version, I think one of the major goals will be to make the AI less coupled to specific rules and units. This is already the case to some extent
  (for example if I add a new buyable unit to the game, the AI will start using it automatically), but I need to apply this concept more broadly.
  Otherwise, the AI adjustments would become a major bottleneck for all the new modes and mechanics I want to experiment with in the future.
  
The order of these milestones is not set in stone, in fact I'm quite interested in your feedback - what are you looking forward to most? <a href="https://forms.gle/VpfxxMW5tYiez5RL7" target="_blank">Let me know in this poll!</a>  

### What NOT to expect in the near future

Well, don't expect a new mechanic or mini-campaign every week 🙂. I hope the Dead Islands expedition was a nice demo of what kind of fun new content will be
coming to the game in the future, but for now I'll probably be scaling that down to really focus on chipping away at the big milestones.
It means you might see less stuff in the changelog in the coming weeks, as a lot of work will be done in a separate branch and only released once it's ready.

I will also likely keep the larger blog posts few and far between. They help me sort through my thoughts and I hope you enjoy reading them, 
but they also take considerable time to write, which I'd rather spend working on the actual game. On a few occasions I also realized, that sharing 
detailed plans or UI designs in advance tends to make me too committed to them, even if I later realize they are not working out so well.

### Upcoming switch to a single level auto-save system 

One thing that seemed cool at the time, but now I think it's just pointless and confusing is how whenever you leave a campaign level,
the auto-save for that level is kept indefinitely even after you start playing a different one. You have to explicitly click the "give up" button to delete your previously abandoned attempt and start from scratch.

  * From technical perspective, this creates the problem that save data for a bunch of unfinished levels can start piling up in local storage, eventually
even hitting the limit of what the browser is willing to store for a single website (in fact I already had to add code that starts silently removing oldest save data when it gets close to that). 
  * From user perspective, it's just messy and confusing. You come back to an old level after a few days, and you're 
  thrown back right into the unwinnable situation that made you quit it in the first place. Or you open the level select 
  screen and see a dozen of "in progress" levels, not sure which is the one you actually want to get back to.

So I'm planning to drastically simplify this and make it so that you have just one level in progress at any time.
If you start playing a different level, any progress on the previous one will be discarded. I've asked about this on discord before, 
and I'm yet to hear anyone finding the current behavior useful, so I hope this change will be welcome. 
But just in case you're horrified reading this, do let me know about your concerns! 🙂

I think adding some manual save slots to this might be a good addition in the future, but I also think it's not that 
important. Individual Konkr match is not that long anyway, so a full-featured save system seems like a bit of an overkill.

### Closing thoughts

After a bit of a rush to get the Dead Islands expedition released for Halloween, it feels good to take some time to
gather my thoughts and think about the bigger picture. If you read this far, thanks from the bottom of my heart 
for your continued interest and support of the game! It's what makes this endeavour worth continuing! 

Keep the feedback and bug reports coming, and I'll keep working on making this game the best it can be!
