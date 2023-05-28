---
layout: post
title:  "Gearing up for greatness!"
date:   2023-05-28 12:00:00
categories: update
---

Some of you may have already guessed that a big part of what makes developing Konkr fun for me is taking 
it way too seriously for what it is. I guess it's a bit of an indulgence project for the perfectionist side of me, the side that
suffers a bit in my day job as a software developer (where compromises and good enough solutions are the daily bread and butter).

So today I'm here to share some new and exciting ways in which I've been obsessing over the game! 

<!-- excerpt-end -->

## I. Content overhaul plans, part 2

Get ready for some very rough mockups!

<style>
.mockup {
    box-shadow: 2px 2px 5px 0px rgba(158,158,158,1);
    text-align:center;
    display: block;
    margin: auto;
}
</style>

<img class="mockup" src="/img/blog/mockups/title.png"/>

It's been a while since I first advertised the plans for a big content overhaul [back in January](/update/2023/01/29/roadmap-update.html), but now I'm actually
beginning to dive into it! The ideas have evolved quite a bit in the meantime, so let me share my latest thoughts 
along with some very early UI mockups! Just keep in mind **none of this is final** as I'm actively iterating on all
these ideas as we speak! 

That also means any feedback and suggestions from yours truly are more than welcome (hit me up on [discord](https://discord.com/invite/C9HucB9arH) or [dev@konkr.io](mailto:dev@konkr.io))!

<p style="display:flex">
<img class="mockup" src="/img/blog/mockups/expeditions1.png"/>
<img class="mockup" src="/img/blog/mockups/expeditions2.png"/>
</p>

**Expeditions** replace the current campaign mode, featuring an overworld view where you travel between islands, but also a lot more than that:
 - classic expeditions will be similar in style to the current campaign, except with more branching paths.
 - themed expeditions will explore alternative game modes and rule sets, such as the zombie mode.
 - want more "puzzle" maps like Foccacia? There will be an expedition for that!
 - weekly expeditions will string together a few maps into a time-limited event, where you only have one shot to make it to the end!
 - and if you get bored with all of that, you can always let the game create new procedurally generated expeditions for you!

You get an expedition, you get an expedition, everyone gets an expedition! I like that the concept is open and flexible 
enough so that if I come up with any new ideas on how to combine multiple levels into an interesting game mode, 
it will fit right in as simply a new kind of expedition.

The big idea here is that no matter what kind of player you are, you will always be exploring and progressing from island to island,
not just aimlessly playing random levels. 

Speaking of progression...

<img class="mockup" src="/img/blog/mockups/homeisland.png"/>

**Home Island** is my current idea for adding even more meaning to your victories. The fantasy is that you are embarking 
on all these expeditions from your home base, a quaint island town which grows in wealth and beauty as you progress
further into the game. As you **unlock achievements**, **collect trophies** and **amass fame**, both your ship and your
home settlement will become larger and more impressive.

Without boring you with too much detail, here's a rough plan of how these things 
I just mentioned are supposed to fit together.

<img class="mockup" src="/img/blog/mockups/progression.png"/>

Last but not leas I'm also fleshing out the plans for **Island forge** (aka map editor) and the **Uncharted seas** mode 
that lets you explore player created maps. But more on that later!

## II. Putting my finger on the pulse

While I am infinitely grateful for every one of your feedback messages and level ratings, the constant
frequent in-game nagging for explicit feedback is both a bit obnoxious and not nearly accurate enough to help me
evaluate things like minor AI and level balance changes.

In a perfect world I would be able to make small tweaks like changing some AI parameters, and then after a few days see that aha,
people are having about 2% more fun now! Just imagine how easy it would be to make Konkr the best it can be if I could get numbers like that :).

While that's not quite realistic, I've just finished working on a few things that will get me a bit closer to such a world
by collecting and aggregating a bunch of detailed statistics about how people play each level. I'm even collecting entire match
replays now that the games engine supports it! Everything is anonymized of course, so I hope this doesn't come off as too creepy :).

The system has been in place for two weeks now and already gave a lot of useful interesting insights. Let's share some random figures!

- A total of 4177 hours was spent playing Konkr in the last two weeks, averaging around 1.5 hours per player.
- The second tutorial level seriously sucks!
    - Only about 30% of players will notice the hint to build a tower in level 2, making the level a huge pain in the ass to win.
    - What's worse, the hint that there is a rewind button comes much later in the campaign, so when people get cut off in the early levels, they don't realize they can undo their mistake.
- Only 36% of players get a stable 60 FPS framerate, with 10% playing at 30 FPS or less and the rest something inbetween.
  A big reminder that any performance improvements I can implement will have a noticable impact on a lot of peoples experience!
- Out of all the people that attempted the last campaign level, "Foccacia" in the past two weeks, only 20% managed to win it. So pat yourself on the back if you're one of them!

I plan to eventually make a lot of the level statistics publicly visible in the game, but in the meantime, I might make it a habit
to at least share some numbers in these blog posts.

For example for the latest new level **<a href="https://www.konkr.io/#campaign/l-midas" target="_blank">Midas</a>**:
- 20% of players managed to win on their first attempt.
- 73% of players managed to win eventually.
- If you're one of the successful 73%, here you can compare the number of turns it took you with everybody else:

<img class="mockup" src="/img/blog/stats/midas.png"/>

The new system also greatly improved my ability to track down the root cause of various bugs and crashes, which is why you
could notice a lot of bugfixes in the [changelog](/changelog) lately ;).

And finally, needless to say this will be instrumental in designing and balancing all the new content I'm planning, 
including a heavily improved tutorial!

## What to expect next?

More frequent updates for one! I've been a bit more silent lately while taking care of various technical improvements 
and high-level planning, but now there will be a lot of stuff to talk about! In fact, I've had to radically cut down 
the number of things I wanted to discuss today just to keep the size of this post at least somewhat sensible :).

I should also have more time to work on the game in the coming weeks than I had in the past few months combined,
so things are really bound to get interesting! 

Just please keep in mind what I said at the start of this post, this will always be a project that's all about  
striving for perfection, not necessarily speed, so be ready to cut me some slack if I lose myself in tinkering with some
 minor detail in my grand plans :).


