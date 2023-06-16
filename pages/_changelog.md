

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
