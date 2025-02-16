---
title:  "🏡 First Steps Into Your Domain!"
layout: post
date:   2025-02-16 01:00:00
categories: update
---

It's time to share some progress on upcoming Konkr features!

<!-- excerpt-end -->

# Your Domain

I've done some long overdue cleanup and improvements in user data storage,
 which unlocked the potential to store relatively unrestricted amount of replays and custom maps
in the browser (programmer talk: mainly by moving most of it from local storage to IndexedDB).

With this in place, I could start working on new section of Konkr UI, which I currently call **My Domain** (not sure if final title, but it's at least a step up from the previous working title *My Stuff* 😀).

![Stats button](/img/blog/my-domain-1.png)

This will be the home for all your personal content: custom islands, saved replays, achievements and statistics, possibly more.

Right now it only has a single section called *Recent Exploits*. Here you can revisit your most recently played maps and/or replays.
(including those you drag&dropped into the game). It's like your browser history, but for konkr maps 🙂.

You can try it out right now in the <b><a href="https://www.konkr.io/releases/dev/test-userdata-v3/" target="_blank">dedicated test branch</a></b>,
just be aware your expedition progress in this branch will **NOT** carry over back to the main game, not even after this feature is released.
I'm still making breaking changes to the underlying data structures, so don't expect any saved replays etc. in this branch to survive very long!
If you decide to play with it anyway, I will deeply appreciate any bug reports posted in the [#bug-reports discord channel](https://discordapp.com/channels/809676281775390770/1231962757016981616)
or using the in-game feedback dialog. Any other feedback is welcome too, as always!

# What's next

The next section on the *My Domain* screen will let you permanently save your favourite replays and islands. This will probably 
land in the test branch relatively soon!

The more long term course remains unchanged:
- an official version of the in-game map editor
- extended customization for procedurally generated maps (including local multiplayer)
- procedurally generated weekly expeditions

I will probably remain relatively tight-lipped about my progress, only showing off stuff when it's actually implemented or when I really need feedback.
I can tease early screen designs and ideas and then feel pressured to deliver on them,
or I can just code in peace while looking forward to share the result with everyone once it's ready. I found the latter tends to work better 
for my motivation and enjoyment and I think it's also less frustrating in the long run for you all.

Thank you for your continued patience and all your bug reports, ideas, custom maps and all around support. I can't promise
how fast things will keep moving, but I am as determined as ever to keep making Konkr ever more awesome, step by step! ❤️


 



