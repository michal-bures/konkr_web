

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
