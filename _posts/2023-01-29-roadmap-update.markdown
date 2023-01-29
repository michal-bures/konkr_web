---
layout: post
title:  "🚀 2023 Roadmap!"
date:   2023-01-29 6:00:00
categories: update
---

Hey everyone, I think it's about time for a new update on where Konkr is heading next! Get comfortable and  
get ready to get excited, this will be a big post! **[continue reading](/update/2023/01/29/roadmap-update.html)**

<!-- excerpt-end -->

But before we get to the juicy stuff, allow me a small detour to reflect on some concerns I've seen this week regarding the new AI:

## Not quite done with the AI yet

While the overall reception has been very positive so far, 
I've also seen some frustrated feedback about the new AI, which I totally understand:

**1. It's too slow**

To some extent this is an inevitable tax for its new capabilities. While the metrics from past week show that this 
has not been a deal breaker for the overwhelming majority of players, I can and will definitely improve 
this in the coming weeks. I don't want to leave any folk with weaker devices or more limited patience behind 🙂.

I would say on small maps the current speed of the AI is more or less what you'll get,
but on the larger maps you will hopefully see some major improvements soon. 

**2. It's too hard**

Yes, the game needs a difficulty selection. "Easy to learn, hard to master" has always been my mantra with Konkr 
and with this update I'm really leaning into the "hard to master" part. But I realize not everyone wants this to
be the Dark Souls of turn-based strategy games. If you just want a casual satisfying experience without having 
to sweat every move, rest assured I'm not planning to leave you behind either!

I'm planning on adding difficulty selection as part of a much larger UI overhaul, more on that below. This means it will
take some time, so hang tight, but rest assured it is coming. It will also nicely synergize with the previous issue,
because the easier AI will be also able to play much faster, hopefully at least on par with the old AI.

**3. It's sometimes too defensive for it's own good**

This is very visible in some 1v1 campaign maps where both the AI and the player get a lot of space to expand into. 
The AI can expand rapidly as long as it doesn't see any threat, but once it gets closer to confrontation,
it dedicates too much units to preventive defense, letting the player easily outexpand it. I will try to improve this
in the coming weeks, hopefully without making the AI *too* reckless again.

## The path behind us and the paths ahead

So as you can see, I still have some polishing to do on the AI, but I'm also gearing up for work on the next big features. Let's talk about those!

For those of you that remember the [last big roadmap update back in August](https://www.konkr.io/update/2022/08/07/whats-next.html), 
here's an updated version of the "roadmap" as I see it today:

<img src="/img/blog/what-next-2023.png" alt="2023 roadmap overview"/>

Wait, that's a lot of green "current focus" features, right? What's up with that? Well, all of those are part of a big 
content overhaul that's been slowly forming in my head over the past months, and the exact order in which I will work towards it is
not decided yet. Let's get into it!

### The low hanging fruit

First, there are two smaller things I know I want to start with:

* **AI rivals can surrender** - with the AI putting up a much more determined defense, it's about time to add a victory
  shortcut when it's become beyond obvious that you've won the level. Don't picture any deep diplomatic system,
  this will be just a straighforward way to skip the tedious end-game as soon as every rival acknowledges that they stand absolutely no chance anymore. 
  And don't worry, it *will* be strictly optional. You can still exterminate your rivals down to their last town if you prefer 🙂.
* **Replays** - review, save and share game replays. This should not be that hard to implement and it will accomplish so many good things:
  * In those "wtf just happened" moments, you will finally be able to review the AI turn again and see exactly what went down in what order
  * Ability to attach replay will make the feedback/bug report feature much more powerful
  * The "rewind" power will now allow you to easily go back as far as you want, even multiple turns back (not just to the start or end of latest turn)
  * "Undo" and "Rewind" will now remain available even when you come back to a game you started playing yesterday or after you refresh the page
  * Sharing replays of record-breaking or otherwise fun playthroughs is bound to be fun!
  * It will give me as developer a more direct insight into how people actually play the game, which will be very helpful for adding/improving tutorial levels and "how to play" guide.

### Content overhaul

Next, I'd like to start building up towards a big overhaul of the entire content structure of the game.
My current vision for this overhaul can be summarized like this:

<img src="/img/blog/new-content-structure.png" alt="2023 roadmap overview"/>

Let's discuss it in a bit more detail.

### I. Campaigns

I have long wanted to replace the current boring and clunky map selection UI with something closer to an overworld map,
where you would sail from island to island as you explore the campaign.

I think I will follow an approach that I've seen working really well in many other games. There will be a main "happy path" 
through the campaign, consisting of reasonably challenging but not too punishing levels so nobody should feel totally stuck.
Then there will be optional branching paths leading to the more crazy and puzzle-like levels for those that hunger 
for a greater challenge. 

For every level you will also be able to toggle between two levels of AI difficulty, 
where finishing each level on "normal" difficulty will be enough to unlock the next one, but only "hard" will get you the best trophy. 

As you progress through the early parts of the main campaign, you will also unlock access to whole new campaigns that contain
various gameplay twists (like the zombie mode, or just a very different style of maps compared to the main campaign).

Over time, I can keep expanding the main campaign or any of the alternative campaigns, depending on which ones are most popular.

### II. Conquest

The current Conquest mode tries to serve two purposes:
1. After you are finished with the campaign, there should be more quality content that still feels fun to play and still provides some sense of progression. 
2. You should be able to generate and play exactly the kind of maps that suit your personal preferences. 

And to be honest, it does neither of these very well.

For the next iteration, the customisation will be moved to the Island Forge and Conquest will be entirely focused on providing
an endless campaign-like experience. 

The levels will no longer be generated in the browser. Any levels you see in Conquest will be pre-generated and 
validated first, so that a diverse variety of beatable and reasonably challenging levels will be offered to you.

The levels will be placed on the same kind of overworld map as the Campaign, so there will be a visual 
sense of progression as you beat more and more of them. This overworld map will have same levels for everyone.

Separately from the overworld map, there should be also an ever shifting selection of
daily/weekly/monthly challenges, which will nudge the community to gather around some common maps every week.

### III. Island Forge

The long awaited full-featured level editor and a proper infrastructure for community created content.
You should be able to:
- Use the procedural generator to create levels according to your preference, with much more customization options than offered by the current conquest mode.
- Create your own levels from scratch, save and share them with other players.
- Create levels which have more than one human-controlled faction, allowing for hotseat multiplayer.
- Play, rate and tag levels created by other players.
- While playing any campaign, conquest or island forge map, you can hit a button to clone it into the editor 
  and make your own customized version to play and/or share.

### Thoughts?

While I'm pretty excited about this plan, nothing is set in stone and all the ideas above are sure to evolve as
I get into the nitty-gritty details.

You can also probably guess that all of this will be quite an ambitious undertaking. At the moment my super-rough estimate 
for getting all of this done is maybe by the end of 2023. 

But the good thing is I can definitely build towards this goal incrementally, so hopefully there will be no more waiting months
for the "next big update", as was the case with the AI overhaul.

**So then, which of all these features will be coming first?** Well, you tell me! I've not decided yet from which end to approach this
and I'm eager to hear what you look forward to most. So **[let me know in the poll over here!](https://forms.gle/ZeEd51TSTtQLE8Mm7)** 

And thanks for reading this far! ❤ 
















