

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
