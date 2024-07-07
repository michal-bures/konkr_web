

---
v2.31.12 <small>released 2024-07-07</small>
- bugfix: fixed another case where the auto-attack functionality would try to use knight on a swamp tile 

---
v2.31.11 <small>released 2024-06-30</small>
- bugfix: fix auto unit merge occasionally attempting to use tiles outside owners province
- bugfix: fix crash attempting to upgrade pikeman into knight after picking him up form a swamp tile
- various bugfixes in map editor

---
v2.31.10 <small>released 2024-06-16</small>
- using "view replay" while post-defeat spectating starts the replay from the beginning
- bugfix: using rewind after spectating no longer breaks the game
- bugfix: fix ghost notifications after finishing spectating mode 

---
v2.31.9 <small>released 2024-06-09</small>
- two new maps in Mapmakers Archipelago by @kardinalg
- drag&drop for files and replays now works also with plain text and discord attachment links  
- swamp rules adjustment: cannot merge pikeman into knight on swamp tiles
- small tweak to "Reckoning" tutorial level to prevent Godfrey wiping out enemy king on turn 1
- bugfix: fixed more cases of incorrect conquerable hexes and auto-merge behavior when conquering protected swamp tiles
- bugfix: rewind button layout in play menu sometimes broken when first opened
- bugfix: broken "more info" button in "Double Trouble" tutorial level
- bugfix: prevent overlapping tooltips in help sidebar panel  
- bugfix: prevent side panel buttons background sometimes incorrectly remaining in place after menu was collapsed on mobile
 
---
v2.31.7 <small>released 2024-06-02</small>
- bugfix: in "always retreat" mode units no longer prefer death to retreating away from town 

---
v2.31.6 <small>released 2024-05-26</small>
- added link to level stats in level detail menu and victory screen
- added button to sort level list on expedition screen by name, personal best number of turns, or active modes
- new levels by @CuteNepgear and @Jam2020
- bugfix: changing color theme on expedition screen now works properly 
- bugfix: don't show defense marker icon over swamps when placing towers

---
v2.31.4 <small>released 2024-05-19</small>
- 3 new levels by @33333 and @dys in Mapmakers Archipelago

---
v2.31.3 <small>released 2024-05-19</small>
- bugfix: fixed mute/fullscreen buttons not appearing/disappearing properly when toggling level menu or showing up at wrong place
- bugfix: fixed rewind controls not hiding on mobile when opening level menu
- bugfix: fixed icons display on difficulty toggle when restarting level 
- added a bunch of missing tooltips

---
v2.31.2 <small>released 2024-05-09</small>
- use "leave" instead of "menu" on the victory/defeat screen

---
v2.31.1 <small>released 2024-05-09</small>
- bugfix: help button not working on title screen
- bugfix: fixed error when exiting replay
- bugfix: fixed level menu glitching into view when loading replay 

---
v2.31.0 <small>released 2024-05-08</small>
- new level detail menu and level info header
- improve display of buyable pawns when there's a lot of them due to plugins 
- new levels by @33333, @A_Nerd and @Jam2020 in Mapmakers Archipelago
- various small UI graphics improvements

---
v2.30.4 <small>released 2024-04-29</small>
- bugfix: fix starting state for "Happy Present" level

---
v2.30.3 <small>released 2024-04-28</small>
- 5 new levels in Mapmakers Archipelago by @33333

---
v2.30.2 <small>released 2024-04-27</small>
- bugfix: shift-cliking no longer causing occasional overkill when eliminating bandits/zombies on own territory
- bugfix: gold looted by bandits/zombies no longer goes to the owner of the tile 
- bugfix: fixed introduction message not showing after loading or importing game, including the kings landing introduction
- support for obnoxiously long intro messages + tweaks to intro message positioning and color scheme 

---
v2.30.1 <small>released 2024-04-21</small>
- 5 new community maps in Mapmakers Archipelago by @33333, @Arran, @CuteNepgear and @SuperRoroB
- Unique hero characters can go into swamps just like regular heroes
- Zooming on expedition screen now works also with pinch-zoom on touch devices
- Zombies that can't find a path to any town waltz around randomly instead of standing still
- Clear occupied mine warning once the occupying pest is defeated
- Renamed one of the two levels called "Spider" in Mapmakers Archipelago
- bugfix: fixed sudden AI tantrums in levels with refuge tiles
- bugfix: no longer able to buy villagers for rival factions in some cases when holding shift
- bugfix: fixed error when importing a custom map
- bugfix: fixed ghost coins in level "Siege Wall" and fixed map editor bug that could introduce them
- bugfix: fixed glitched defense animation when multiple units defend the tile clicked by the player
- bugfix: map introduction text now appears again after exiting map editor
- bugfix: fixed town ruins graphic not updating after moving a unit out of it within your own territory

---
v2.30.0 <small>released 2024-04-14</small>
- while playing, level feature icons are displayed in the header panel next to level name
- new level in Unstable Vortex: "Regicide", featuring warrior kings and refuge tiles
- 5 new community maps in Mapmakers Archipelago by @33333, @Arran and @TegaeArIfs
- small AI tweaks: reduced desirability of swamp tiles and gold mines
- hunting down the bunny is now worth 10 coins
- bugfix: don't show level introduction after rewind from defeat screen
- bugfix: structures like mines and abandoned settlements no longer jump around to defend an adjacent tile

---
v2.29.20 <small>released 2024-04-07</small>
- experimental UI improvement: hold shift to auto-merge and buy units while conquering tiles
- 6 new maps by @adamjarn, @33333 added to the Mapmakers Archipelago
- allow zooming out with mouse wheel on the world map
- bugfix: cleaned up glitched coins in "Ruined Kingdom" island

---
v2.29.19 <small>released 2024-04-06</small>
- automatic camera zoom less aggressive and disabled during replays

---
v2.29.18 <small>released 2024-04-01</small>
- new unstable vortex map "Easter Egg"
- bugfix: fix province budget summary not updating after bandit movement in some cases (for both friendly and hostile province)

---
v2.29.17 <small>released 2024-03-31</small>
- 12 new community maps added courtesy of @adamjarn, @Arran, @MemeWizard, @SuperRoroB, @33333, @ravageur
- bugfix: fix rare cases of incorrect conquerable hexes highlighting on swamp tiles
- added alert when players gold mine is occupied

---
v2.29.15 <small>released 2024-03-18</small>
- bugfix: fix side buttons alignment on mobile
- bugfix: fix some islands in the Mapmakers Archipelago not appearing in the level list side panel
- more grammar fixes
- Insomnia level updated

---
v2.29.14 <small>released 2024-03-17</small>
- 6 new community maps in Mapmakers Archipelago, courtesy of @33333, @alexvornoffice, @Servo Omnissiah, @sclark39, @SuperRoroB, @tmczar
- bugfix: prevent Christmas tree spawning on a tile with mine in conquest
- bugfix: fixed a couple typos in tutorial prompts
- bugfix: level feature icons no longer occasionally appearing misaligned in the expeditions levels list
- bugfix: fix region income tooltip text occasionally overflowing when zooming out
- bugfix: indication that town is about to be rebuild is present again (in occupation mode)

---
v2.29.13 <small>released 2024-03-10</small>
- gold mines and swamps now appear in conquest mode
- new level added to Islands of Pain
- bugfix: fix rivals not valuing neutral gold mines
- bugfix: don't allow landing on swamps or gold mines in King's landing mode

---
v2.29.12 <small>released 2024-03-03</small>
- bugfix: fix display bug when summoning dread knight
- bugfix: fix crash when AI tries to place dread knight on swamp terrain

---
v2.29.11 <small>released 2024-03-03</small>
- tuned how AI values swamp tiles
- bugfix: fix crash on going to next level 

---
v2.29.10 <small>released 2024-03-03</small>
- gold mines added to the game in a new Unstable Vortex level "Gold Rush"
- swamp rules change: Heroes can now enter swamp tiles
- swamp graphics upgrade for better visibility
- added tooltips for new tiles (abandoned settlements, gold mines, swamps)
- new smooth transition between title and expedition screen
- new map by @SuperRoroB added to Mapmakers Archipelago
- bugfix: fixed inaccurate numbers in region ledger when there are bandits on swamp tiles

---
v2.29.9 <small>released 2024-02-26</small>
- bugfix: ahem, fixed the previous fix that made bandit no longer loot coins *anywhere*... 

---
v2.29.8 <small>released 2024-02-26</small>
- bandits no longer loot coins from swamp
- bugfix: fixed various inaccuracies in conquerable hexes

---
v2.29.7 <small>released 2024-02-26</small>
- hotfix: fixed bandit camps and haunted towns spawning in forest on Conquest maps

---
v2.29.4 <small>released 2024-02-25</small>
- new vortex map featuring experimental Swamp terrain
- new community levels by @SuperRoroB and @CuteNepgear
- AI chatter messages grammar fixes and tweaks (courtesy of a fan pull request https://github.com/michal-bures/konkr_data/pull/1 ❤️)  
- present spawn location is now deterministic (fixes presents breaking replays)
- "Knights Before Christmas" level made slightly easier
- map editor: hitting "play" always resets turn counter and saves current state for restart
- bugfix: fixed town ruins sometimes rendering in front of units

---
v2.29.1 <small>released 2024-02-18</small>
- added icons for a number of the recently added level modifiers, so that they can be recognized on the world map
- added new community levels to the Mapmakers Archipelago by @adamjarn, @PositronicBranez and @sclark39 

---
v2.29.0 <small>released 2024-02-04</small>
- Occupation mode added to conquest (towns get captured instead of razed)
- new Vortex level: defeated units always retreat  
- new community level: Small World by @adamjarn
- crisper art for abandoned towns + indication when town is being rebuilt
- AI no longer builds castles on abandoned settlements and bandit camps don't spawn on them either 
- bugfix: abandoned settlements rendering glitches cleanup
 
---
v2.28.7 <small>released 2024-02-03</small>
- added difficulty label to level menu UI on mobile
- bugfix: resizing window or opening sidebar no longer resets the state of difficulty slider on world map screen
- bugfix: fixed a source of crashes after loading replay (including when clicking "watch latest replay")
- bugfix: fixed "how to play button" not appearing after layout change
- bugfix: fixed town graphic not updating after rival is bankrupted during bandit phase 
- map editor fix: opening map editor from a menu screen no longer leads to crash when trying to playtest the level
- map editor fix: "finalize" button removed, map sanitization is now done automatically on clicking play or export
- map editor fix: all errors when loading modified map JSON are handled and shown in the UI, there should be no more silent freezes

---
v2.28.6 <small>released 2024-01-30</small>
- bugfix: removed unreachable rival in level Lazania

---
v2.28.4 <small>released 2024-01-30</small>
- new experimental level - capture and settle new towns!
- new community levels added to Mapmakers Archipelago, credit to @adamjarm, @CuteNepgear, @gidey and @MykhailoBarabash  

---
v2.28.2 <small>released 2024-01-23</small>
- bugfix: fix bandits able to cross from camp into a walled off player territory

---
v2.28.0 <small>released 2024-01-21</small>
- new title screen
- new unstable vortex level: bandit castles!
- one level added and one remove (Towerfall) from Mapmakers Archipelago 
- bugfix: fixed a frequent source of crashes when saving a replay on custom maps
- bugfix: Christmas tree can no longer split conquest map in half
- bugfix: fix ocean not changing color initially after switching from custom to default theme

---
v2.27.0 <small>released 2024-01-14</small>
- smooth transitions between expeditions menu and world map
- adaptive grid layout on expeditions menu 
- new community level by @tmczar
- new Unstable Vortex level (reduced unit upkeep)

---
v2.26.0 <small>released 2024-01-07</small>
- new conquest mode: Christmas (spawns christmas tree in the middle and allows giving presents to your rivals)
- new levels from @adamjarm & @lovalmidas added to Mapmakers Archipelago, thanks guys!
- new special expedition: Unstable Vortex
- mute buttons state now persists after reload and is available also on mobile
- option to gift presents removed from normal maps
- bugfix: if win and lose condition is triggered at the same time, lose condition now gets priority
- bugfix: drag-scrolling on the expedition selection screen no longer registers as button click
- improved expedition selection screen layout on mobile

---
v2.25.3 <small>released 2023-12-25</small>
- bugfix: fixed issue with unlocking kongregate badges 

---
v2.25.2 <small>released 2023-12-23</small>
- bugfix: disable surrender in the christmas level

---
v2.25.0 <small>released 2023-12-23</small>
- new expeditions system replaces the old campaign
- new expedition levels
- option to unlock all islands in expeditions
- christmas theme, including a new option to give presents to your rivals
- to play in portable mode with everything unlocked, add `/portable=1` at the end of the URL, that is: https://www.konkr.io/releases/dev/test-overworld/?portable=1
- you can now press spacebar to restore the default zoom level

---
v2.24.25 <small>released 2023-12-14</small>
- smoother zooming (esp. on trackpad)

---
v2.24.24 <small>released 2023-12-13</small>
- limit on maximum length of feedback messages to prevent crash on sending

---
v2.24.23 <small>released 2023-12-13</small>
- new hotkey: use spacebar to reset back to default zoom level

---
v2.24.21 <small>released 2023-12-03</small>
- new campaign level

---
v2.24.20 <small>released 2023-11-26</small>
- new campaign level

---
v2.24.19 <small>released 2023-11-21</small>
- renamed spectating button on defeat screen
- don't play the defeat sound effect when returning to defeat screen from spectating
- updated default replay filename (removed island number and extra space, added turn count) 
- experiment with serving help files directly from https://github.com/michal-bures/konkr_data/tree/master/help
- level tweak: Thrakia starting position made a bit harder
- bugfix: don't skip the next AI rival turn after starting spectating

---
v2.24.18 <small>released 2023-11-19</small>
- option to continue watching the game play out after defeat screen
- unit hotkeys don't trigger when Control or Alt is held down
- simplified surplus/deficit icon
- new campaign level
- bugfix: fixed source of glitches after exiting an imported replay and starting/continuing another level
- bugfix: fixed income drain from zombies not showing up in region budget ledger
- bugfix: fixed custom chatter file import not working
- bugfix: fixed one more cause of pending regions selection incorrect after rewind
- bugfix: fixed tooltip and prevented flag showing for Necromancers Lair

---
v2.24.17 <small>released 2023-11-15</small>
- bugfix: reset list of regions pending for selection after rewind

---
v2.24.16 <small>released 2023-11-12</small>
- added flags to rival towns that are projected to have enough coins for a new villager
- level tweak: Arrival (dead islands #1) made easier
- level tweak: Guardia made sligthly easier and more interesting
- AI tweak: on hard difficulty, avoid very grateful rivals becoming naively trusting even in endgame 1v1 situations
- bugfix: fixed zombie survival badge unlocking even on defeat in conquest zombie mode
- bugfix: fixed crash when hitting escape while watching a replay after defeat

---
v2.24.15 <small>released 2023-11-09</small>
- bugfix: fix occasionally inaccurate/glitchy faction size ribbon
 
---
v2.24.14 <small>released 2023-11-06</small>
- bugfix: fix dead islands and zombie conquest maps not counting towards the "Not Quite The End Of The World" badge on Kongregate

---
v2.24.13 <small>released 2023-11-05</small>
- added "campaign progress" section to the settings panel, with buttons to wipe your progress or export it to a file 
- tweaked the gloomy color scheme to use light color for text/icons for better contrast
- alert tooltips in zombie mode are now more accurate (no longer say a unit turned to bandit, when it's in fact a zombie)  
- smoother transitions from and to the expedition screen
- bugfix: fix various visual jank related to new placement of fullscreen and mute buttons, especially on mobile
- bugfix: fixed "typewriter" sound effect stuck in the on state when leaving level while it's playing
- bugfix: fixed bug where under some conditions a Dread Knight could be spawned using mana from an already destroyed lair.
- bugfix: fixed alert symbols stranded over empty tiles when player units turn to zombies and move to a new tile
- bugfix: fixed broken level detail panel layout after entering expedition overview screen for the first time from the play screen 
- bugfix: fixed another cause of coin animations getting stuck

---
v2.24.12 <small>released 2023-11-02</small>
- bugfix: fixed unable to resume replayed campaign level 

---
v2.24.11 <small>released 2023-11-02</small>
- bugfix: keyboard scroll sensitivity fix

---
v2.24.9 <small>released 2023-10-31</small>
- scrolling with WASD or arrow keys now works on expedition overview screen
- improved responsiveness of keyboard scrolling
- bugfix: fix "play again" displayed instead of "continue" on old level detail screen when replaying completed campaign level
- bugfix: fixed an issue responsible for a whole class of coins-related glitches (stray coins staying on the map or coin transaction suddenly no longer animating)
- bugfix: fixed crash when exiting a Dead Islands level entered from the title screen
- bugfix: mana from crowded haunted town or Lair now actually goes to the closest Lair as opposed to a random one

---
v2.24.8 <small>released 2023-10-31</small>
- bugfix: fixed progress not auto-saved when replaying an already completed level

---
v2.24.7 <small>released 2023-10-31</small>
- bugfix: campaign maps clickable on mobile again
- bugfix: fixed campaign map progress not saving

---
v2.24.4 <small>released 2023-10-30</small>
- improved background contrast of guidance messages when shown over land
- show victory turn count in level detail panel on the expedition map

---
v2.24.3 <small>released 2023-10-30</small>
- bugfix: rivals can surrender again

---
v2.24.2 <small>released 2023-10-30</small>
- bugfix: fixed levels won before difficulty selection was introduced showing up as silver instead of gold medal

---
v2.24.0 <small>released 2023-10-29</small>
- The Dead Islands Expedition!
- bugfix: fixed animation of zombies crossing walls glitching out on slow playback speed
- bugfix: fixed coin piles sometimes getting out of sync when hitting undo during coin animations

---
v2.23.2 <small>released 2023-10-24</small>
- bugfix: fixed rivals maintaining a stoic expression no matter what

---
v2.23.1 <small>released 2023-10-23</small>
- bugfix: fixed pawns jumping in replays

---
v2.23.0 <small>released 2023-10-22</small>
- updated zombie mechanics (experimental): zombie movement is more aggressive towards towns, but they need a turn to build a ladder before they can cross walls
- new campaign map
- bugfix: fixed visual glitches when toggling unit tooltip by clicking
- bugfix: better variety of coastal forests distribution on large maps and prevent completely forest-surrounded maps (invalidates previous conquest map links!)

---
v2.22.1 <small>released 2023-10-15</small>
- bugfix: prevent crash when latest conquest settings in user profile contain invalid data

---
v2.22.0 <small>released 2023-10-15</small>
- "First Landing" mode added to the conquest
- new campaign level swapped in for "Zeal"
- bugfix: fixed a rare conquest map generator bug leading to player faction getting no starting town 
- bugfix: restarting conquest map no longer switches rivals AI to the currently selected campaign difficulty 

---
v2.21.2 <small>released 2023-10-08</small>
- new campaign level
- bugfix: clear alert symbols when entering replay

---
v2.21.0 <small>released 2023-10-01</small>
- rivals now slightly less eager to feed their units to zombies
- zombie mode now available in Conquest!
- zombie mode no longer overrides color theme (but if you miss the gloomy aesthetic, you can still switch to the "Muted" theme manually in the options sidebar)
- conquest maps now include bandit camps (or haunted towns in zombie mode)
- new campaign level
- bugfix: changing the color theme now applies immediately on title and conquest screens  
- bugfix: fixed major memory leak related to ocean highlights rendering (slowing the game down the longer you play)

---
v2.20.0 <small>released 2023-09-28</small>
- better small-screen support - conquest settings and other side panels now scroll when content doesn't fit on screen 
- scrollable views no longer allow you to scroll way past the end of the content
- reset map zoom level when entering conquest menu
- bugfix: fixed sidebar panel content not adjusting after window resize
- bugfix: fixed random forest placement deviations when recreating conquest map (invalidates old conquest map links) 

---
v2.19.11 <small>released 2023-09-25</small>
- new campaign level

---
v2.19.10 <small>released 2023-09-17</small>
- new campaign level
- water reflections rendering optimization
- further refinement of rendering vs AI calculations balance

---
v2.19.8 <small>released 2023-09-16</small>
- conquest mode now lets you cycle between 10 starting location variations
- conquest mode layout tweaked to give better overview of the map
- performance optimization: faster AI on devices without hardware accelerated graphics (better balance CPU resources between AI calculations and rendering) 
- improved UI contrast for dark ocean colors and other color palette tweaks
- bugfix: fix non-deterministic town placement in conquest mode, conquest level links should be reliable again
- bugfix: get rid of occasional horizontal and vertical seams between island chunks

---
v2.19.7 <small>released 2023-09-10</small>
- new campaign level
- bugfix: coins from chests on friendly territory can be no longer used for buying units
- UI color tweaks in rewind mode and in restart/rewind menu

---
v2.19.6 <small>released 2023-09-04</small>
- bugfix: fix a graphical glitch causing tile to not fully change color in rare cases 

---
v2.19.5 <small>released 2023-09-04</small>
- bugfix: fix for major performance issue when loading a level with hardware acceleration disabled  

---
v2.19.3 <small>released 2023-09-04</small>
- bugfix: fix crash when color setting in user data no longer matches any known preset

---
v2.19.2 <small>released 2023-09-03</small>
- bugfix: fix rare crash when loading the color theme setting 

---
v2.19.0 <small>released 2023-09-03</small>
- new campaign level
- the latest level replay is saved automatically and can be opened from the title screen
- new ocean graphics
- adjustable ocean color (either as part of overall theme or separately)
- improved positioning and layout of tutorial panel on large maps
- live transition between compact and large UI now smoother and without a memory leak
- bugfix: fixed a source of occasional crash after loading a replay
- bugfix: fixed the "One rival down, one more to go" down message showing up at the wrong time on Island 4: Reckoning
- bugfix: fixed zombie forest leaking into regulary-themed maps and vice versa
- bugfix: fixed icons on twitter/discord buttons alignment on the feedback sidebar

---
v2.18.8 <small>released 2023-08-30</small>
- bugfix: fix incorrect image shown on the "Unit Upkeep" help page.

---
v2.18.7 <small>released 2023-08-28</small>
- new campaign level
- bugfix: fixed typo in level select UI
- bugfix: remove broken difficulty selector when restarting conquest map
- bugfix: prevent canceling rewind when entered from the defeat screen 

---
v2.18.6 <small>released 2023-08-21</small>
- new campaign level

---
v2.18.5 <small>released 2023-08-14</small>
- bugfix: "continue" button on title screen no longer recommending already completed tutorial levels
- bugfix: uploaded correct version of the new campaign level (Furor)

---
v2.18.4 <small>released 2023-08-14</small>
- new campaign level

---
v2.18.3 <small>released 2023-08-13</small>
- minor tile rendering optimization
- bugfix: attempt to fix rare race condition crash on startup after progress reset when using kongregate login

---
v2.18.2 <small>released 2023-08-11</small>
- added hotkey "C" to build castle
- if all campaign levels are completed, display the total turn count on level select screen
- clicking "next level" on victory screen no longer skips over levels that were completed on lower than the current
  difficulty (making replaying campaign levels on higher difficulty easier)
- fast-forward overlay tweaks - less aggressive darkening, not shown when estimated time left is very low 
- bugfix: fixed a rare boot sequence race condition causing a crash on startup    

---
v2.18.1 <small>released 2023-08-07</small>
- bugfix: fast forward overlay breaking the game when hitting "skip" while watching replay

---
v2.18.0 <small>released 2023-08-06</small>
- news alerts (exclamation marks) now appear instantly over the course of enemy turn and no longer disappear after undo
- skipping enemy turn now displays progress indicator while rival moves are calculated
- new campaign level
- campaign levels tweaked to be slightly easier: Maze, Sherwood
- bugfix: fixed game glitching out after leaving to main menu while enemy turn is in progress and restarting the level
- bugfix: fix rival tiles background not updating properly when spectating on slowest playback speed
- bugfix: fixed shield indicator not appearing on a protected tile from which a unit was just picked up
- bugfix: fixed the Control modifier key getting stuck in "down" state after leaving the game window while holding it down 
- bugfix: prevent recurrent reset warning messages after syncing local progress both with kongregate and another login method
- bugfix: no longer able to make feedback emojis in feedback dialog fly off-screen by spam-clicking them 

---
v2.17.4 <small>released 2023-08-02</small>
- kongregate statistics API integration
- bugfix: fix incorrect date when saving replay

---
v2.17.2 <small>released 2023-07-31</small>
- bugfix: fix town levels not updating properly after rival faction turn

---
v2.17.0 <small>released 2023-07-30</small>
- option to wipe campaign progress (found at the bottom of the campaign overview screen)
- smarter auto-attack pawn selection (will now avoid using already defensively placed pawns) 
- when you decline surrender, it still counts as victory for the purpose of tracking your lowest turn count for the level (only after you actually win though!)
- AI chatter: no longer showing reaction messages from off-screen rivals
- AI chatter: many new messages, fixed some spelling mistakes
- AI chatter: avoid multiple rivals making identical comments in the same turn as much as possible
- AI chatter: rival comment doesn't change when selecting the same region repeatedly
- new advanced help pages: "Visual Cues" and "Difficulty Modes" 
- new campaign level "Debt Spiral"
- bugfix: fixed rare issue with best turn count not updating for tutorial levels
- bugfix: fixed level being saved as in progress after viewing replay from victory screen
- bugfix: fixed minor visual artifacts in tile background
- bugfix: fixed animation glitches when updating tile defense markers
- added rate limits to cloud sync and error reporting to avoid spamming the server

---
v2.16.0 <small>released 2023-07-24</small>
- long press of undo button undos all moves in the current turn
- option to increase difficulty when hitting "play again" on the victory screen 
- new campaign level
- improved error reporting and error message for boot-time errors

---
v2.15.13 <small>released 2023-07-23</small>
- performance optimizations mainly affecting undo and rewind

---
v2.15.12 <small>released 2023-07-22</small>
- rendering performance optimization

---
v2.15.11 <small>released 2023-07-21</small>
- bugfix: fix trophies getting converted from silver to gold in the background when syncing through kongregate account

---
v2.15.10 <small>released 2023-07-17</small>
- bugfix: fix missing grass on tiles

---
v2.15.9 <small>released 2023-07-17</small>
- bugfix: fix inconsistent coloring of conquerable hex highlight after stopped hovering over a tile
- bugfix: scrolling on level select screen now works past level 85

---
v2.15.8 <small>released 2023-07-17</small>
- revert rendering optimization changes as they are actually tanking performance on devices without hardware accelerated graphics  

---
v2.15.7 <small>released 2023-07-14</small>
- bugfix: another fix to random map generation not being random enough

---
v2.15.6 <small>released 2023-07-10</small>
- new campaign level "Gladius"

---
v2.15.5 <small>released 2023-07-10</small>
- bugfix: AI rivals build castles again

---
v2.15.4 <small>released 2023-07-10</small>
- bugfix: fix conquest map generator often producing the same maps again 

---
v2.15.3 <small>released 2023-07-09</small>
- improved feedback dialog
- tweaked victory screen layout on smaller display size so that feedback dialog doesn't block the Next button
- reverted to simpler shoreline rendering
- bugfix: fixed lag after conquering a tile
- bugfix: fix other tiles in region sometimes not updating correctly after a tile was taken
- bugfix: fix problems with tile updates during replay

---
v2.15.2 <small>released 2023-07-09</small>
- bugfix: fix graphical glitch when generating new map

---
v2.15.1 <small>released 2023-07-08</small>
- major optimization of map rendering (up to 2x framerate boost!)
- small tweaks to shoreline and province selection outline graphics
- bugfix: fixed a rare visual glitch where conquerable hex highlight would incorrectly display semi-transparently after a unit was bought

---
v2.15.0 <small>released 2023-07-07</small>
- all remaining low-res graphics and fonts upscaled for non-blurry 2x zoom
- bandit camps now fly black flag when they have enough coins to produce new bandit

---
v2.14.13 <small>released 2023-07-06</small>
- improved navigation controls in help sidebar
- chapter on merging units added to "How to Play" section
- a whole new "Advanced topics" section added to the help sidebar
- various small tweaks to the "How to Play" section content

---
v2.14.12 <small>released 2023-07-06</small>
- bugfix: fixed graphical bug when moving around a hero

---
v2.14.11 <small>released 2023-07-06</small>
- tweaked tutorial #3 to be easier
- AI rivals on normal difficulty now never ally with each other

---
v2.14.10 <small>released 2023-07-05</small>
- fixed defense icon for hero to be the same as for knight
- you can now dismiss tutorial messages with an "x" button
- made some messages in tutorial #3 less spammy

---
v2.14.9 <small>released 2023-07-05</small>
- made the income label text a little darker
- tutorial level 3 tweaked to be a little easier 
- bugfix: fixed Godfrey the Goose not actually being sufficiently dumb
- AI bugfix: fixed attack planning bug which would in rare cases sometimes cause the rival to do nothing at all instead of chosing a weak attack option

---
v2.14.7 <small>released 2023-07-04</small>
- new campaign map "Valor"

---
v2.14.6 <small>released 2023-07-04</small>
- ban Godfrey the Goose from building castles
- the NEXT button in level detail screen takes now takes you to the next adjacent level (rather than next *unfinished one*)
- How to Play document improvements

---
v2.14.5 <small>released 2023-07-04</small>
- bugfix: fixed a rare issue where an outdated version of user data could be loaded by the game, leading to seeming loss of campaign progress
- bugfix: fixed an issue where a victory on normal mode could override a victory on hard mode when syncing level progress 
- first part of "How to play" section overhaul

---
v2.14.3 <small>released 2023-07-02</small>
- Kongregate account login integration

---
v2.14.2 <small>released 2023-07-02</small>
- improved resolution of tiles and palisades
- difficulty selection prompt after the 3rd tutorial level
- make sure the Roboto font is loaded for rendering dialog texts

---
v2.14.1 <small>released 2023-07-02</small>
- tweaked tutorial dialog background and positioning mainly to avoid hard to read text at the bottom when overlayed over the island
- bugfix: improve advisor messages and fix broken "more info" button in tutorial 1 when it comes to warning about buying expensive unit
- bugfix: properly center camera when dropping player into the first tutorial 

---
v2.14.0 <small>released 2023-07-01</small>
- Campaign: levels now have two AI difficulty settings - normal (opponents are less envious of player and not quite as cunning) and hard (same as before); winning on normal grants you a silver trophy
- Conquest: difficulty level "Normal" - same as "Challenging" but with the easier AI rivals
- Conquest: the "Casual" difficulty level now also uses the easier AI rivals
- added cap on how much a smaller faction can appreciate you defeating a common enemy to prevent absurd levels of gratefulness in some edge cases
- bugfix: prevent invalid link being copied to clipboard on conquest screen before a level was generated


v2.13.1 <small>released 2023-07-01</small>
- option to dismiss tutorial prompts in phone layout 

---
v2.13.0 <small>released 2023-06-30</small>
- new final tutorial level ("Reckoning") added as replacement for levels "Dark Age", "Diplomacy", "Robber Baron"
- new AI Persona "Godfrey the Gooose", for now used only in the tutorial levels

---
v2.12.16 <small>released 2023-06-28</small>
- second tutorial level ("Hold the line") replaced with new one

---
v2.12.15 <small>released 2023-06-27</small>
- fix typo in tutorial text
- add a subtle sound effect to text reveal transitions

---
v2.12.14 <small>released 2023-06-27</small>
- bugfix: fixed a common source of visual glitches after skipping an enemy turn 

---
v2.12.13 <small>released 2023-06-27</small>
- new tutorial messages now supported also in mobile layout

---
v2.12.12 <small>released 2023-06-26</small>
- new UI for restart/rewind/view replay saves you a click
- new panel for inspecting province economy
- new "R" hotkey for rewind
- new impending rebellion indicators
- new campaign level
- work in progress on tutorial overhaul (mostly complete for level 1, but only in desktop mode)
- hitting Escape in rewind mode now aborts the rewind instead of exiting to menu
- "How to play" sidebar improvements (less confusing layout, next page button)
- upscaled resolution for unit indicators
- bugfix: rivals no longer grateful after you attack their bankrupt unit behind a wall.
- going to next/previous level in the level detail screen using the left/right arrow buttons is now instant
- bugfix: don't show plus icons on top of heroes

---
v2.12.11 <small>released 2023-06-22</small>
- bugfix: conquerable tiles indicators now update instantly on player turn, fixing a whole class of visual glitches and crashes when clicking to capture a number of tiles in rapid sequence

---
v2.12.10 <small>released 2023-06-21</small>
- new level "Riposte"
- alert icons now show instantly at start of player turn (prevents some race condition bugs)
- land display tweak - connected local player land now shows "alive" color instantly after capture (to avoid confusing new players)
- bugfix: appropriate AI chatter after rival received major damage but is still friendly
- bugfix: fixed tile defense markers not updating after move aborted with right-click
- bugfix: restored tile defense markers animation after dropping unit on a tile

---
v2.12.9 <small>released 2023-06-16</small>
- AI rivals now less likely to defend their town with a knight outside of truly desperate situations
- rivals tactical AI tuned to be a little less suicidally aggressive when desperate
- fix tactical AI being blind to the value of defending with villagers in late game   
- bugfix: fix error in move score calculation causing AI to sometimes overvalue being proactive to the point of very clearly suicidal moves
- "Enclaves" moved later in campaign
- "Zeal" level moved later in campaign and made a bit easier

---
v2.12.8 <small>released 2023-06-15</small>
- bugfix: prevent crash when a bandit camp is created and immediately destroyed while spectating on fast speed 

---
v2.12.7 <small>released 2023-06-14</small>
- bugfix: don't trigger AI chatter during replay
- more fitting and more timely AI chatter response when the rival appreciates you ending your turn without attacking them  

---
v2.12.6 <small>released 2023-06-13</small>
- bugfix: fixed a major bug with saving AI moves to replay. It could cause corrupted replay data after a game was saved during AI turn or after a replay was cropped due to being too long. 
- bugfix: fix a display error on fast playback speed when a bandit camp is spawned and immediately produces a bandit

---
v2.12.5 <small>released 2023-06-12</small>
- levels "Riverlands" and "Meadows" shifted later in the campaign to avoid a difficulty spike 
- bugfix: AI factions no longer tend to compliment themselves after attacking
- bugfix: fix rare case where move option indicator would fail to disappear after clearing a bandit inside your own territory

---
v2.12.4 <small>released 2023-06-11</small>
- support for import custom AI chatter files
- clean up chatter messages on undo/rewind
- more AI chatter: on player defeat
- more AI chatter: praising player's contribution against common enemy

---
v2.12.3 <small>released 2023-06-10</small>
- rivals sometimes proactively comment on major events in the game
- bugfix: fixed AI sometimes treating major damage as minor for the purpose of generating chatter
- bugfix: added missing chatter reaction when AI counter-attacks after suffering losses by the player 

---
v2.12.1 <small>released 2023-06-09</small>
- bugfix: ensured the generated province names are not too long for the UI
- bugfix: fixed auto-attacker selection highlight incorrectly disappearing when issuing multiple moves in quick succession 
- auto-dismiss success notifications when leaving/changing level
- bugfix: fixed map alert symbols not cleared after restart or rewind

---
v2.12.0 <small>released 2023-06-08</small>
- bugfix: fix overly eager paralelizing of plays in fastest spectating mode
- bugfix: fix rare failures to simplify complicated sequences of moves while spectating on fast speed, leading to visual errors 

---
v2.11.0 <small>released 2023-06-06</small>
- 3 new campaign maps.
- AI chatter messages!
- complete overhaul of the AI diplomacy/politics layer
- improvements to the way AI assesses the likelyhood of getting attacked from a particular province
- smarter playback on faster spectating speeds - only moves that don't affect the player are paralelized
- bugfix: patched a few campaign levels that accidentally started you with fake history of past aggression between provinces
- bugfix: diplomatic AI no longer forgets about damage inflicted to regions that were completely destroyed
- bugfix: emoji not updating correctly after undo
- bugfix: power by faction calculation no longer incorrectly takes into account dead tiles
- bugfix: power by faction calculation now correctly takes into account whether the player already collected income this turn
- bugfix: retreated units no longer count as killed for the purpose of calculating AI relations impact

---
v2.10.3 <small>released 2023-06-01</small>
- AI bugfix: fixed bug in move score calculation that could cause AI to sometimes stop defending 
- bugfix: prevent a rare crash when clicking really fast while buying a unit

---
v2.10.2 <small>released 2023-06-01</small>
- bugfix: fix misaligned "right" button on level detail screen on first load 

---
v2.10.1 <small>released 2023-06-01</small>
- bugfix: fix freeze when right-clicking immediately after picking up pawn
- bugfix: fix province popover elements being visible on title screen

---
v2.10.0 <small>released 2023-06-01</small>
- improved performance thanks to migration to Phaser 3.60
- new UI for displaying rival province stats
- less aggressive border coloring when selecting rival province
- new town flag color for indicating imminent bankrupcy
- rewrite of map overlays synchronization fixes number of glitches regarding highlighting selected region, showing town flags, etc.
- bugfix: fixed two sources of occasional crash while loading a replay from file
- bugfix: fixed pawn camera drag sometimes incorrectly triggering while dragging a unit
- bugfix: attitude emojis now updating properly during replay
- bugfix: no more ghost emojis after loading replay
- bugfix: fixed rare crash when wiping out rival factions last town

---
v2.9.14 <small>released 2023-05-30</small>
- Balance tweak: "Hourglass" level made a little harder.  

---
v2.9.13 <small>released 2023-05-29</small>
- bugfix: fix rival emoji reactions not showing on player turn
- greatly improved fixed performance on the level index screen
- new map "Hourglass" swapped in for "Scorching Heat"
- a number of campaign maps have been moved to achieve a smoother difficulty curve in the campaign

---
v2.9.12 <small>released 2023-05-29</small>
- bugfix: don't show emoji over player towns

---
v2.9.11 <small>released 2023-05-27</small>
- bugfix: fix misaligned/invisible DOM elements (buttons and text inputs) on Safari 

---
v2.9.10 <small>released 2023-05-27</small>
- level 2 (Hold the line): ban rivals from using knights
- avoid showing the error popup for various minor non-fatal issues
- show proper error message if the game fails to load textures instead of running it in a broken state
- bugfix: prevent rare crash when switching level
- bugfix: proper transition for bandit move => bandit replaced by camp sequence on faster replay speeds  

---
v2.9.8 <small>released 2023-05-26</small>
- less assertive feedback prompts - don't ask for level feedback unless user spent at least a minute in the level in the current session
- bugfix: going back during rewind no longer skips two turns at a time 
- bugfix: unit animations no longer randomly skipped during rival turn playback & replay
- bugfix: fixed animations not always parallelized properly at faster playback speeds
- bugfix: fix attitude emojis display glitches during replay (no more ghost emojis etc.) 
- bugfix: fix occasional crash when going to start of replay
- bugfix: fix towns backlight not deactivating on end of replay
- bugfix: fix town backlight not always appearing during player turn
- replays compression improvements
- internal: collecting replay and feedback data as part of level stats, improved error tracking

---
v2.9.7 <small>released 2023-05-24</small>
- bugfix: fix service worker not starting (offline mode should work again)
- experiment with serving latest level data directly from github
- improve performance tracking and error detection during game load 
- slightly raise FPS limit to avoid needless dips under 60 FPS

---
v2.9.6 <small>released 2023-05-22</small>
- new campaign level "Midas" swapped for "Caldera"

---
v2.9.5 <small>released 2023-05-21</small>
- limit FPS to 60 (to reduce CPU usage and battery drain)
- bugfix: fix screen transition bugs mostly in mobile UI introduced by the screen transition changes in v2.9.2
- bugfix: fix play time measurement

---
v2.9.4 <small>released 2023-05-16</small>
- another tweak to automatic UI scaling

---
v2.9.3 <small>released 2023-05-16</small>
- bugfix: 3rd attempt to make screen orientation lock attempt not crash the game on mobile firefox (ﾉಠдಠ)ﾉ︵ ┻━┻
- bugfix: fixed broken behavior when returning to menu after rewinding from the defeat screen

---
v2.9.2 <small>released 2023-05-15</small>
- bugfix: prevent crashes or unpredictable behavior when leaving a map while the AI is calculating its moves  
- bugfix: disable UI interactions while transitioning between screens, fixing a whole class of UI glitches 
- bugfix: fix crash on firefox mobile due to lack of access to screen orientation lock API 

---
v2.9.1 <small>released 2023-05-15</small>
- bugfix: fix error after exiting conquest menu while a map is being generated
- bugfix: fix glitchy map transition to/from conquest menu

---
v2.9.0 <small>released 2023-05-14</small>
- new campaign level "Zanahary" swapped for "Kirkstall"
- automatic camera pan is less aggressive and less eager to mess with your zoom level
- automatic camera pan and zoom-out behavior can be customized in settings
- improved UI scaling on high DPI screens (avoids tiny UI elements, improves performance, lowers battery usage)
- clicking the end-turn button while holding a pawn will cause it to be returned instead of doing nothing
- zombie mode: levels must be won by eradicating all zombies
- zombie mode: zombies can no longer infect units through walls, not even when they have nowehere else to move
- zombie mode: AI rivals are a little less eager to let zombies overrun their towns 
- bugfix: fix subtle visual glitches in pawns move transitions
- bugfix: automatic camera focus takes into account space taken by control penel
- bugfix: fix spectating camera jumping around for no reason at the start of player turn 
- bugfix: fixed rare crash after undo while hostile region is selected
- bugfix: fixed level autosave not getting deleted after defeat
- bugfix: fix incorrect screen pan when requesting next conquest island
- internal: gameplay stats collection rework, error and event logging improvements

---
v2.8.13 <small>released 2023-05-10</small>
- bugfix: dont't crash game in case of analytics initialization error
- improve copy to clipboard robustness

---
v2.8.10 <small>released 2023-05-09</small>
- bugfix: fix "continue" button not working on the main screen

---
v2.8.9 <small>released 2023-05-08</small>
- new campaign level "Triage" replaced "Kingmaker"
- level "Zeal" moved later in the campaign

---
v2.8.7 <small>released 2023-05-01</small>
- copy to clipboard robustness improvements

---
v2.8.6 <small>released 2023-05-01</small>
- tweaks for better kongregate and itch.io integration
- level header panel made less transparent

---
v2.8.5 <small>released 2023-05-01</small>
- fix mute button overlap with fullscreen button when hosted on itch.io

---
v2.8.4 <small>released 2023-05-01</small>
- more robust copy to clipboard functionality
- analytics setup tweaks

---
v2.8.2 <small>released 2023-04-30</small>
- new campaign level swapped in for "Scramble"
- new rewind UI allows rewinding more than one turn back
- rewind to first turn refunds all lives, rewind within the current turn is free 
- explicit error message when dropping a link instead of file into the dropzone
- game UI panel transitions cleanup and robustness improvements (fixes some minor UI bugs)
- turn counter added to victory screen
- option to view replay added to defeat screen when out of rewinds
- bugfix: update map preview correctly when exiting to manu while viewing replay or rewinding 
- bugfix: no more ghost tile highlights when going back/forward a turn in replay mode
- bugfix: fixed error when loading level on mobile safari
- bugfix: fixed incorrect town variant showing on the region budget panel   

---
v2.8.1 <small>released 2023-04-24</small>
- fix zombies mode

---
v2.8.0 <small>released 2023-04-23</small>
- new campaign levels swapped in for "Mount Blanik" and "Three Towers"
- added option to view replay of the entire game, not just the last turn
- added option to save the game replay to a file and load it by dragging the file into the game window
- option to view replay added to victory screen
- it's now possible to import custom maps by dragging the map file into the browser window
- saved games now include history => you can undo, rewind and view replay after resuming a saved game
- bugfix: "Skip spectating" button now works when pressed while playback is paused.
- bugfix: prevent scrolling off screen on map selection
- bugfix: incorrect metadata after merging a freshly bought unit could corrupt replay data
- diplomacy AI tweak: AI rivals are slightly less envious 
- automatically remove old autosaves when running out of local storage space

---
v2.7.12 <small>released 2023-04-10</small>
- new campaign level swapped for "Black forest"

---
v2.7.11 <small>released 2023-04-07</small>
- surrender disabled in zombie mode
- fixed cases where player could not attack hero

---
v2.7.10 <small>released 2023-04-03</small>
- new campaign level swapped for "Outbreak"

---
v2.7.9 <small>released 2023-03-26</small>
- 2 new campaign levels swapped for levels "Afuru" and "Treasure Hunt"

---
v2.7.8 <small>released 2023-03-26</small>
- bugfix: rewind no longer broken on the defeat screen or when rewinding in the middle of enemy turn

---
v2.7.5 <small>released 2023-03-25</small>
- bugfix: you no longer get stuck in replay mode after you start it with no province selected
- bugfix: fix spectating mode failing on fast speed when unit retreated multiple times in one turn
- bugfix: fix glitches in spectating mode when tabbing in and out of the game

---
v2.7.3 <small>released 2023-03-20</small>
- bugfix: fix cut-off symbols not showing up on start of player turn
- new levels "Canyonero" (by @Graggle) and "Decadence" swapped for "Pilgrims" and "Kiawa" in the campaign
- level "Stronghold" moved later in the campaign

---
v2.7.1 <small>released 2023-03-13</small>
- bugfix: fixed ghost villager after buying and merging unit 

---
v2.7.0 <small>released 2023-03-13</small>
- ability to view replay of latest rival turn
- enemy region summary tooltip now also shows their net income
- number of improvements to rival turn playback on all spectating speeds - less jank and pointless waiting
- fast and very fast speeds no longer skip unit merging and moves within rivals own territory
- defeat screen appears instantly - you no longer have to wait for the end of all rivals turns
- fastest playback speed now even faster (no artificial delay after focusing next faction)
- bugfix: heroes can attack each other again
- bugfix: coin consumption animation shows up properly again
- 1 new campaign level (swapped for "Boiling Pot")

---
v2.6.8 <small>released 2023-03-05</small>
- campaign maps rotation: Wolfpaw nad Hold the Tide swapped with two new levels

---
v2.6.7 <small>released 2023-02-26</small>
- the power balance bar proportions now reflecting purely the size of each factions territory (previously included other factors used by the AI to estimate faction strength) 
- rivals now offer surrender when hopelessly overpowered
- bugfix: tooltips no longer appear during rival turn after player ends the turn by pressing 'E' while hovering a unit 
- 2 new campaign levels

---
v2.6.6 <small>released 2023-02-21</small>
- 2 new campaign levels

---
v2.6.5 <small>released 2023-02-19</small>
- overhaul of the way AI balances offensive and defensive moves - greedier expansion, less turtling, restored will to make desperate attacks in desperate circumstances 
- minor AI performance improvements (better use of caching in some helper data structures)
- rebalanced campaign maps:
  - parched empire (#57, made easier)
  - let the winter come (#61, made easier)
  - hold the tide (#72, made harder)

---
v2.6.4 <small>released 2023-02-12</small>
- AI performance improvements (especially on large maps) thanks to improved caching and heuristics
- AI got slightly better at evaluating attack options
- bugfix: fixed main source of occasional very long delay during AI turn
- 2 new campaign levels

---
v2.6.3 <small>released 2023-02-06</small>
- 2 new campaign levels

---
v2.6.2 <small>released 2023-01-29</small>
- bugfix: fixed a massive bug in AI move evaluation which have caused the AI rivals to make totally reckless moves from time to time.
- 2 new campaign levels

---
v2.6.0 <small>released 2023-01-23</small>
- major AI update released - AI rivals have greatly improved offensive and defensive capabilities and should exhibit a lot more "common sense" 
- number of campaign levels moved and/or patched for the updated AI
- 6 new levels added and 3 levels removed from the campaign
- fixed a bug in the map generator that led to regions of same colour being placed too close together, often leading to severely imbalanced maps; 
  this unfortunately makes older conquest map links incompatible with the current version  

---
v2.5.13 <small>released 2022-12-10</small>
- bugfix: fixed various cases of the game breaking or controls disappearing when exiting level or opening a menu during enemy turn

---
v2.5.12 <small>released 2022-12-09</small>
- bugfix: fix occasional freeze when cornered AI is planning next move

---
v2.5.11 <small>released 2022-12-05</small>
- 3 new levels
- level 56 (Containment) removed

---
v2.5.10 <small>released 2022-11-28</small>
- tweak to level 56 (Containment) to prevent cheap victory

---
v2.5.9 <small>released 2022-11-27</small>
- 3 new levels
- bugfix: haunted Towns produce zombies properly again

---
v2.5.7 <small>released 2022-11-26</small>
- bugfix: fixed offline mode

---
v2.5.6 <small>released 2022-11-20</small>
- 3 new levels

---
v2.5.5 <small>released 2022-11-13</small>
- add author credit to community-submitted levels  
- 3 new levels
- "Bay of salt" moved later in the campaign

---
v2.5.4 <small>released 2022-11-06</small>
- bandits are now unable to pass through walls
- smarter detection which regions are actionable - if there's nothing you can do in a given region, it will be skipped when you clicking "next"
- shift-click to buy another unit of the same type
- ctrl-click to bypass most confirmation windows
- 3 new campaign levels
- removed Halloween level "They are dozens" from campaign
- bugfix: using rewind on defeat screen no longer gives you back all lives in certain situations

---
v2.5.3 <small>released 2022-11-01</small>
- bugfix: check win conditions on start of player turn

---
v2.5.2 <small>released 2022-10-30</small>
- a few additional tips in "how to play"
- 3 new campaign levels
- campaing level 48 "Incursion" removed
- zombies?...

---
v2.5.1 <small>released 2022-10-23</small>
- three new levels added
- campaign level "Quagmire" removed
- campaign levels "Red River" (#27) and "Fjords" (#30) tweaked to be more interesting
- rivals no longer smile at you after a backstab
- AI tweak: AI less confrontational and eager to buy expensive units in 1v1 lategame situations
- bugfix: avoid crash when loading game that was saved during AI turn

---
v2.5.0 <small>released 2022-10-21</small>
- performance optimization of player actions (reduced lag when moving/buying unit)
- option to adjust enemy turn playback speed in options menu
- bandit moves are deterministic (you will always see the same moves after rewind)
- game waits for UI transitions to finish before start of AI calculations (prevents choppy UX feel after hitting end turn)
- bugfix: properly cleanup past conquest levels from user data
- bugfix: fix a rare crash during AI frontline defense calculation

---
v2.4.2 <small>released 2022-10-19</small>
- bugfix: fix a bug that would cause the AI to freeze for an extended period

---
v2.4.1 <small>released 2022-10-18</small>
- "Incursion" level difficulty nerf

---
v2.4.0 <small>released 2022-10-17</small>
- AI is better at defending and plays balances attack and defense more evenly especially in late game
- AI makes better army composition decisions (in particular doesn't get expensive units until it really needs them)
- AI gives more attention to defending against attacks from provinces which were attacking it the previous turn
- AI should never stay completely passive
- in a 1v1 late game scenario, AI no longer holds back when attacking, even if it really likes the remaining opponent 
- overhaul of truce approval bonus calculation - it is a lot easier to make friends by playing peacefully
- balance changes in campaign levels "Hold The Tide", "Promised land", "Natives", "Incursion" and "Sedition"
- many campaign levels changed their position in the campaign based on shift in their difficulty with the new AI
- added 6 new levels
- bugfix: fixed AI doing nothing in various specific situations
- bugfix: fix "unit not paid" symbols over units not updating properly during enemy turn
- bugfix: AI should no longer be wasting expensive units to weed out bandits on its own territory

---
v2.3.6 <small>released 2022-10-14</small>
- bugfix: When enemy takes a hex that had a bandit, the alert tooltip no longer says "They killed our bandit!"
- bugfix: Fix bought pawn not reappearing in shopping tray after being returned to town. (thanks @Deathbanesravenhaft)

---
v2.3.4 <small>released 2022-10-07</small>
- fixed typo in tutorial (thanks @XanderStuff)

---
v2.3.3 <small>released 2022-10-03</small>
- bugfix: fixed player missing their starting villager in Island 25 ("Scorching Heat") 

---
v2.3.2 <small>released 2022-10-02</small>
- restored the AI to be a little more suspecting against dominant faction
- AI less likely to just sit around and defend in a losing situation

---
v2.3.0 <small>released 2022-09-25</small>
- 3 new campaign levels
- rival attitude emojis now animate, giving you instant feedback on the diplomatic effect of your actions
- defense strength indicators are now always visible when province is selected (both own and rival province)
- AI may now choose to wait and conserve coins when there is no good expansion opportunity
- AI bugfix: no longer has the habit to use knights as town guards
- AI tuning: AI acts less unhinged in desperate situations, still pays some attention to defense and economy 
- AI tuning: AI is a bit less envious of dominant faction in early game
- AI tuning: more nuanced calculation on approval impact on allies and enemies of attacked player
- AI bugfix: AI no longer completely ignores rich bandit camps when focusing on war
- AI bugfix: faction power estimate is no longer blind to units that didn't attack in the preceding turn
- AI bugfix: fixed a bug that made a dominant faction quickly begin to like everyone else
- AI bugfix: attacking an already bankrupt province no longer incurs the same approval penalty as did bankrupting it in the first place 
- campaign island 34 (Hold the Tide) rebalanced to compensate for AI improvements
- bugfix: missing defense marker on the tile a pawn was picked up from   
- bugfix: attitude emojis now update immediately after end of player turn
- bugfix: rewind now works correctly when used during enemy turn playback  

---
v2.2.4 <small>released 2022-09-18</small>
- 3 new campaign levels
- ability to copy and reuse a link to the current level (buttons added to conquest setup, play and victory screens)
- level name now more prominently visible on play and victory screens
- conquest islands now have randomly generated names (no more boring "Unknown island")
- in conquest mode you can now also generate a new island by entering a custom name 
- you can now close modal dialogs with escape key
- bugfix: fix UI tooltips sometimes appearing even when element is no longer under mouse pointer
- bugfix: improve victory screen buttons layout on small screens
- bugfix: fixed missing modal window header decoration and occasional bad sizing 
- bugfix: fix level feedback form not showing

---
v2.2.3 <small>released 2022-09-11</small>
- 3 new campaign levels
- Campaign level 22 ("Politics") removed
- Bankruptcy markers on units take precedence over exclamation mark markers

---
v2.2.2 <small>released 2022-09-04</small>
- highlight new levels on the level select screen
- 3 new levels
- bugfix: fix sign-in buttons showing up even when sidebar closed after unexpected disconnect

---
v2.2.0 <small>released 2022-09-03</small>
- ability to sign in via email/google/facebook and automatically sync progress in background
- new sidebar UI for How to play and Feedback form
- color palette choice is now a global preference and persist across levels and sessions
- new toggle fullscreen prompt on mobile
- allow to import a game from string by hitting F8
- mute and fullscreen toggle buttons moved to bottom right corner on desktop
- completed capmaign maps show the starting state (for reaply) instead of the winning state
- bugfix: added preloading for certain sprites on victory screen so that they won't fail to show while offline
- bugfix: fixed feedback dialog input box not visible on android/iOS in fullscreen mode 

---
v2.1.41 <small>released 2022-08-28</small>
- new levels 8,13,26
- removed level 12 (Onslaught)
- bugfix: fix campaign maps loading redundantly for a second time during boot

---
v2.1.39 <small>released 2022-08-23</small>
- error reporting improvements

---
v2.1.38 <small>released 2022-08-22</small>
- bugfix: clicking the wrong spot on the screen no longer randomly triggers google login

---
v2.1.37 <small>released 2022-08-22</small>
- bugfix: prevent rare incorrect tile updates resulting from concurrent move transitions on enemy turn
- bugfix: don't start player turn before bandit actions completed animating
- autosave progress at the start of conquest level, even before first player action

---
v2.1.36 <small>released 2022-08-21</small>
- added new levels 5, 17, 18, removed level 11 (Gorith)
- bugfix: fixed a few visual bugs related to the bandit rule change   

---
v2.1.31 <small>released 2022-08-21</small>
- undo hotkey expands the rewind menu if no more actions can be undone in the turn
- allow switching from buying one unit to another with numeric hotkeys 

---
v2.1.30 <small>released 2022-08-21</small>
- RULES CHANGE: All cut off units turn into bandits at the end of EACH players turn (previously this happened at the start of the unit owners turn).
- display current level name on play and victory screens 
- add restart button to victory screen
- minor tweak to 2nd tutorial level
- bugfix: don't show next button on victory screen if all campaign levels were completed 
- bugfix: should be no longer possible to crash the game by using buy unit or other hotkeys rapidly
- bugfix: should be no longer able to get the shop into visually broken state by picking up and dropping pawns too fast clicking
- bugfix: fix race condition in coins animation that could sometimes cause a ghost coin to remain on a tile after it was captured
- bugfix: fix campaign level buttons sometimes disappearing from the campaign overview due to animation glitch
- bugfix: ending camera drag with cursor on top of a button no longer activates it
- bugfix: fix incorrect level preview sometimes displayed after returning from play mode to level detail screen
- bugfix: fix ghost movement highlights staying on map preview

---
v2.1.28 <small>released 2022-08-19</small>
- allow the game to run even when localStorage is unavailable

---
v2.1.27 <small>released 2022-08-18</small>
- disabled right-click context menu only on screens that actually make use of the right mouse button
- bugfix: don't ask for level feedback while offline (thanks @deathbanesravenhaft)

---
v2.1.26 <small>released 2022-08-16</small>
- bugfix: closing shop with the "x" button while holding a bought unit no longer crashes the game (thanks @deathbanesravenhaft)


---
v2.1.24 <small>released 2022-08-15</small>
- bugfix: fix rare case of game failing to start due to campaign data not loaded in time

---
v2.1.23 <small>released 2022-08-15</small>
- made the AI less likely to spam castles out of boredom, especially if it doesn't have any other military units
- bugfix: ensured AI's with small provinces can't get permanently stuck never buying a unit out a fear of budget deficit  
- bugfix: in some cases AI would build a villager even if it had no use for it

---
v2.1.22 <small>released 2022-08-15</small>
- bugfix: failing a level while playing it again could sometimes overwrite your previous victory

---
v2.1.20 <small>released 2022-08-14</small>
- if you have no game in progress the "continue" button on title screen points you to the next unfinished campaign level  
- 3 new campaign levels (8,9,10)
- replaced "give up" button with "restart" on level detail screen
- redesign of campaign level 5 (Scramble)
- friendly AI factions are now a little less eager to backstab you when they start worrying that you're growing too large
- ban AI from building knights in the first two tutorial levels
- bugfix: alert symbols should no longer hang around after restart/rewind

---
v2.1.18 <small>released 2022-08-13</small>
- bugfix: rewind to first move no longer takes you to the start of the current turn when used in the middle of a turn (thanks @Capp) 
- bugfix: prev/next province buttons presence often not updating correctly after merging provinces or undo (thanks @Capp) 
- bugfix: don't show the end turn confirmation dialog if you aren't able to end turn anyway (due to holding a pawn for example) (thanks @Capp)
- bugfix: prevent unit sprites sometimes remaining on screen indefinitely when picking up and dropping units rapidly (thanks @Capp)  

---
v2.1.17 <small>released 2022-08-12</small>
- ending turn with the "E" hotkey is now never subject to the confirmation dialog and "E" now also doubles as the "Skip enemy turn" hotkey  
- confirmation dialogs can now also be confirmed with enter and spacebar 
- bugfix: fixed province boundaries not updated when you're clicking faster than the game can process it (thanks @Duke Garland) 
- bugfix: fixed occasionally glitchy transition (originating at wrong hex) when picking up or dropping pawn
- bugfix: fixed freeze after unexpected action in tutorial (thanks @Capp)
- bugfix: fixed hovering a unit sometime showing an empty tooltip with an arrow icon
- bugfix: AI attitude emojis should no longer continue to hang around after a town is razed

---
v2.1.16 <small>released 2022-08-12</small>
- bugfix: clicking "next" on level detail screen no longer skips over islands in "defeated" state (thanks @Capp)
- bugfix: don't allow selecting different region while holding a pawn (thanks @Capp)
- bugfix: fix occasional janky scrolling behavior after camera drag on map and level detail screens (thanks @Capp)
- bugfix: improve janky mousewheel scrolling on level detail screen (thanks @Capp)

---
v2.1.14 <small>released 2022-08-11</small>
- warning icons on the map now have two levels based on severity - yellow and red
- replaced start of turn news notifications with warning icons on the map with tooltips
- on invalid move attempt a taunt speech bubble brings extra attention to the defending unit
- added left/right buttons on level details screen
- confirmation dialog when ending turn without doing anything
- improved the treasury icon

---
v2.1.13 <small>released 2022-08-08</small>
- tweak level 3 to be easier

---
v2.1.12 <small>released 2022-08-08</small>
- increase number of factions generated for "crowded" maps

---
v2.1.11 <small>released 2022-08-08</small>
- improve fullscreen mode availability detection

---
v2.1.10 <small>released 2022-08-07</small>
- bugfix: hero-on-hero combat no longer causing an en error

---
v2.1.9 <small>released 2022-08-07</small>
- bugfix: prevent the news box from covering part of the how to play modal window

---
v2.1.8 <small>released 2022-08-07</small>
- bugfix: prevent a rare issue in map generator where player gets no starting region on unfair difficulty

---
v2.1.7 <small>released 2022-08-07</small>
- bugfix: error reporter should no longer fail to log error details

---
v2.1.6 <small>released 2022-08-05</small>
- when using rewind you can now choose whether to rewind to start or end of turn
- auto-camera during enemy turn now zooms out if enemy province won't fit screen
- camera position and zoom at end of turn is remembered and automatically restored after turn end
- bugfix: fixed unit sprites occasionally randomly disappearing based on camera position
- bugfix: fixed occasional freezes during enemy turn (race condition when oponnent was simultaneously destroying another unit and buying a new unit)
- bugfix: town levels now update correctly (to reflect what level of unit the enemy can afford)
- bugfix: AI now evaluates the strength of hostile provinces more accurately, leading to slightly better decision making
- bugfix: mobile UI: fixed undo button not shown as disabled at start of turn

---
v2.1.5 <small>released 2022-08-03</small>
- bugfix: if you rewind, end turn, and rewind again, it will now work instead of doing nothing

---
v2.1.4 <small>released 2022-08-03</small>
- bugfix: submitting feedback could fail on some larger maps
- bugfix: cleaned up some invisible forests from campaign maps 4, 16 and 17

---
v2.1.3 <small>released 2022-08-02</small>
- made levels 3 and 5 a bit easier

---
v2.1.2 <small>released 2022-08-02</small>
- bugfix: UI should no longer end up in inconsistent state after skipping turn at the wrong moment
- bugfix: fixed an error that broke automated error reporting 🤦 

---
v2.1.1 <small>released 2022-08-01</small>
- new and updated campaign maps!
- AI is a bit more eager to capture bandit lairs
- AI attitude emojis remain visible during enemy turn
- island is not marked "in progress" unless player made at least one move since starting it
- modal dialogs now have cancel ;button in top right corner
- bugfix: fixed camera panning to incorrect position when focusing on large enemy province during their turn   
- bugfix: right-clicking outside the map to cancel buying unit works again 
- bugfix: hide news box when opening modal window
- bugfix: fix glitches in modal dialog positioning & sizing
- bugfix: removed extra empty space from some campaign levels

---
v2.1.0 <small>released 2022-07-29</small>
- modal dialogs resize to fit small screen
- mobile-friendly friendly layouts for number of screens: level select, level detail, defeat
- new UI effects for moving and buying units, mostly for touch devices
- multitouch support - you can now zoom in/out on touch screen using two-finger gesture
- you can now drag-scroll the map while moving or buying unit 
- improved behavior for tooltips - summon tooltip instantly by clicking on things on the map or in the UI
- new "hamburger menu" for returning to menu, restarting map and rewinding turn on mobile
- hide "toggle fullscreen" button if webapp is running in browser-less mode
- you can now use the back button on your phone to navigate within the app
- bugfix: fixed usability issues of how-to-play screen on mobile
- bugfix: auto camera pan during enemy turn no longer pans to incorrect location on non-default zoom levels
- bugfix: delayed tooltips no longer triggered by touch interactions
- bugfix: mobile UI: skip turn button no longer remains shown after end of opponents turn
- bugfix: mobile UI: region income popup tooltip properly hidden on startup
- bugfix: buying castles no longer highlights conquerable tiles in hostile territory
- bugfix: fix glitchy transition when merging existing pawn with new pawn in shop
- bugfix: auto-attacker indicator arrow now hides properly after defeating bandit inside province  
- bugfix: fixed wonky click detection on the shop area after switching between compact and full UI (after viewport resize)
- bugfix: mobile UI: fix loading indicator alignment

---
v2.0.19 <small>released 2022-07-21</small>
- popup notifications appear only for major news, not when you just lose a few tiles 
- bugfix: "region fractured" notification no longer appears when the split off region is not alive

---
v2.0.18 <small>released 2022-07-19</small>
- discord button added to title screen
- title screen cleanup and improved layout on small display

---
v2.0.16 <small>released 2022-07-18</small>
- caching overhaul: game is fully playable offline again, but also detects updates on startup and applies them automatically (no more green "update available" prompts) 

---
v2.0.15 <small>released 2022-07-17</small>
- integration of in-game "about" and "how to play pages" with the new website
- bugfix: make sure to always hide news-box outside of title page
- automate changelog publishing

---
v2.0.12:
- bugfix: rollback now always properly rewinds you to start of previous turn (not in the middle of it)

---
v2.0.0:
- A brand new random map generator! - available under the "Conquest" menu item
- you no longer have to wait for coin animations to finish before you start your turn
- bugfix: feedback form send button works again
- bugfix: defeating bandit consumes unit action again
