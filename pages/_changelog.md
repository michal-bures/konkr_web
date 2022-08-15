

---
v2.1.24 <small>released 2022-07-15</small>
- bugfix: fix rare race case of game failing to start due to campaign data not loaded in time

---
v2.1.23 <small>released 2022-07-15</small>
- made the AI less likely to spam castles out of boredom, especially if it doesn't have any other military units
- bugfix: ensured AI's with small provinces can't get permanently stuck never buying a unit out a fear of budget deficit  
- bugfix: in some cases AI would build a villager even if it had no use for it

---
v2.1.22 <small>released 2022-07-15</small>
- bugfix: failing a level while playing it again could sometimes overwrite your previous victory

---
v2.1.20 <small>released 2022-07-14</small>
- if you have no game in progress the "continue" button on title screen points you to the next unfinished campaign level  
- 3 new campaign levels (8,9,10)
- replaced "give up" button with "restart" on level detail screen
- redesign of campaign level 5 (Scramble)
- friendly AI factions are now a little less eager to backstab you when they start worrying that you're growing too large
- ban AI from building knights in the first two tutorial levels
- bugfix: alert symbols should no longer hang around after restart/rewind

---
v2.1.18 <small>released 2022-07-13</small>
- bugfix: rewind to first move no longer takes you to the start of the current turn when used in the middle of a turn (thanks @Capp) 
- bugfix: prev/next province buttons presence often not updating correctly after merging provinces or undo (thanks @Capp) 
- bugfix: don't show the end turn confirmation dialog if you aren't able to end turn anyway (due to holding a pawn for example) (thanks @Capp)
- bugfix: prevent unit sprites sometimes remaining on screen indefinitely when picking up and dropping units rapidly (thanks @Capp)  

---
v2.1.17 <small>released 2022-07-12</small>
- ending turn with the "E" hotkey is now never subject to the confirmation dialog and "E" now also doubles as the "Skip enemy turn" hotkey  
- confirmation dialogs can now also be confirmed with enter and spacebar 
- bugfix: fixed province boundaries not updated when you're clicking faster than the game can process it (thanks @Duke Garland) 
- bugfix: fixed occasionally glitchy transition (originating at wrong hex) when picking up or dropping pawn
- bugfix: fixed freeze after unexpected action in tutorial (thanks @Capp)
- bugfix: fixed hovering a unit sometime showing an empty tooltip with an arrow icon
- bugfix: AI attitude emojis should no longer continue to hang around after a town is razed

---
v2.1.16 <small>released 2022-07-12</small>
- bugfix: clicking "next" on level detail screen no longer skips over islands in "defeated" state (thanks @Capp)
- bugfix: don't allow selecting different region while holding a pawn (thanks @Capp)
- bugfix: fix occasional janky scrolling behavior after camera drag on map and level detail screens (thanks @Capp)
- bugfix: improve janky mousewheel scrolling on level detail screen (thanks @Capp)

---
v2.1.14 <small>released 2022-07-11</small>
- warning icons on the map now have two levels based on severity - yellow and red
- replaced start of turn news notifications with warning icons on the map with tooltips
- on invalid move attempt a taunt speech bubble brings extra attention to the defending unit
- added left/right buttons on level details screen
- confirmation dialog when ending turn without doing anything
- improved the treasury icon

---
v2.1.13 <small>released 2022-07-08</small>
- tweak level 3 to be easier

---
v2.1.12 <small>released 2022-07-08</small>
- increase number of factions generated for "crowded" maps

---
v2.1.11 <small>released 2022-07-08</small>
- improve fullscreen mode availability detection

---
v2.1.10 <small>released 2022-07-07</small>
- bugfix: hero-on-hero combat no longer causing an en error

---
v2.1.9 <small>released 2022-07-07</small>
- bugfix: prevent the news box from covering part of the how to play modal window

---
v2.1.8 <small>released 2022-07-07</small>
- bugfix: prevent a rare issue in map generator where player gets no starting region on unfair difficulty

---
v2.1.7 <small>released 2022-07-07</small>
- bugfix: error reporter should no longer fail to log error details

---
v2.1.6 <small>released 2022-07-05</small>
- when using rewind you can now choose whether to rewind to start or end of turn
- auto-camera during enemy turn now zooms out if enemy province won't fit screen
- camera position and zoom at end of turn is remembered and automatically restored after turn end
- bugfix: fixed unit sprites occasionally randomly disappearing based on camera position
- bugfix: fixed occasional freezes during enemy turn (race condition when oponnent was simultaneously destroying another unit and buying a new unit)
- bugfix: town levels now update correctly (to reflect what level of unit the enemy can afford)
- bugfix: AI now evaluates the strength of hostile provinces more accurately, leading to slightly better decision making
- bugfix: mobile UI: fixed undo button not shown as disabled at start of turn

---
v2.1.5 <small>released 2022-07-03</small>
- bugfix: if you rewind, end turn, and rewind again, it will now work instead of doing nothing

---
v2.1.4 <small>released 2022-07-03</small>
- bugfix: submitting feedback could fail on some larger maps
- bugfix: cleaned up some invisible forests from campaign maps 4, 16 and 17

---
v2.1.3 <small>released 2022-07-02</small>
- made levels 3 and 5 a bit easier

---
v2.1.2 <small>released 2022-07-02</small>
- bugfix: UI should no longer end up in inconsistent state after skipping turn at the wrong moment
- bugfix: fixed an error that broke automated error reporting 🤦 

---
v2.1.1 <small>released 2022-07-01</small>
- new and updated campaign maps!
- AI is a bit more eager to capture bandit lairs
- AI attitude emojis remain visible during enemy turn
- island is not marked "in progress" unless player made at least one move since starting it
- modal dialogs now have cancel button in top right corner
- bugfix: fixed camera panning to incorrect position when focusing on large enemy province during their turn   
- bugfix: right-clicking outside the map to cancel buying unit works again 
- bugfix: hide news box when opening modal window
- bugfix: fix glitches in modal dialog positioning & sizing
- bugfix: removed extra empty space from some campaign levels

---
v2.1.0 <small>released 2022-06-29</small>
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
v2.0.19 <small>released 2022-06-21</small>
- popup notifications appear only for major news, not when you just lose a few tiles 
- bugfix: "region fractured" notification no longer appears when the split off region is not alive

---
v2.0.18 <small>released 2022-06-19</small>
- discord button added to title screen
- title screen cleanup and improved layout on small display

---
v2.0.16 <small>released 2022-06-18</small>
- caching overhaul: game is fully playable offline again, but also detects updates on startup and applies them automatically (no more green "update available" prompts) 

---
v2.0.15 <small>released 2022-06-17</small>
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
