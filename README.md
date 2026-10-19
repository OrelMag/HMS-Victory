# HMS Victory — Interactive 3D Model

An interactive, browser-based 3D model of HMS Victory as she was at Trafalgar (1805),
built with Three.js. Opens as a static page, no install needed.

## Planned features

### Exterior
- 104-gun first-rate hull with three gun decks, stern and quarter galleries
- 1805 "Nelson chequer" livery as read from the dockyard accounts by Goodwin: slate-grey "black",
  pale yellow bands, black port lids, no red paint
- 104 guns: 30 x 32-pdr, 28 x 24-pdr, 30 x 12-pdr, 12 x 12-pdr on the quarterdeck, and on the
  forecastle 2 x 12-pdr and 2 x 68-pdr carronades
- Boats (launch, barge, pinnace, quarter cutters), seven anchors, Nelson's Vice-Admiral of the White
  flag at the fore, white ensign
- Four switchable poses with animated transitions:
  - **Full sail**: all plain sail set
  - **Trafalgar, 1805**: very light wind from astern, studding sails set, ports open and guns run out,
    Union flags on the fore topgallant and main topmast stays (Nelson's order of 10 October 1805)
  - **Cleared for action**: fighting sail, ports open, guns run out, broadside
  - **At anchor**: sails furled, topsail yards lowered, bower let go, union jack at the jackstaff

### Wind
- Wind direction and strength sliders. The yards brace round, sails fill (or shiver when she is
  too close to the wind), the ship heels and gathers way, the spanker boom swings to leeward,
  headsail sheets shift sides, flags stream with the apparent wind, smoke drifts and the sea builds.

### Rigging
- Standing rigging: shrouds and ratlines, futtock, topmast and topgallant shrouds, backstays,
  stays, bobstays, bowsprit shrouds and martingale; chainplates between the gunports.
- Running rigging: lifts, braces, ties, halyards, course sheets and tacks, headsail sheets,
  buntlines, leechlines, clewlines, spanker brails, boom lifts, gaff vangs; footropes and stirrups,
  studding-sail booms, reef bands on the topsails.
- Sails lie against the lee shrouds and backstays when braced sharp, instead of passing through.

### Interior (fully furnished, deck by deck)
- **Quarterdeck & poop**: wheel, binnacle, Captain Hardy's cabin
- **Upper gun deck**: Nelson's great cabin, dining and sleeping cabins, sick berth
- **Middle gun deck**: galley with the Brodie stove, wardroom, guns, mess tables
- **Lower gun deck**: 32-pounders, hammocks and mess tables, gunroom, capstan
- **Orlop**: surgeon's cockpit, midshipmen's berths, cable tiers, storerooms
- **Hold**: casks, bread and spirit rooms, shot locker, ballast, pumps, powder magazines

### View modes
- **Isometric character mode** (Desperados-style): steer a sailor around the ship; decks above
  and the near hull side cut away automatically when he goes below, blocking walls fade
- **Free camera** with deck peel, cutaway slider, X-ray hull, and clickable room labels

## Historical basis
No survey of Victory's own spars survives that we could find, so the rig follows David Steel's
*Elements and Practice of Rigging and Seamanship* (1794): his table for a 100-gun ship of 2,164 tons
(Victory: 2,162) for mast and yard lengths, and his rules for mast positions, tops and the spanker.
Hull figures follow Wikipedia's sources (Winfield, Lavery, Goodwin). Bowsprit steeve is 30 deg: no
Victory figure was found; Steel gives "nearly thirty-six", Goodwin is cited as 25-30.
Not modelled: Popham's signal flags (sources disagree on their colours).

## Running it
Open `index.html` in a browser (the built bundle is in `dist/`). To rebuild after changing
`src/`: `npm install`, then `npm run build` (or `npm run watch`).

Tools (need Microsoft Edge, or set `SHOT_CHANNEL=chrome`):
- `node tools/shot.mjs <name> "<query>"`: screenshot to `screenshots/tmp/`, e.g.
  `node tools/shot.mjs bow "view=bow&pose=action&wind=90&windStr=0.8"`
- `node tools/clash.mjs`: checks that no rope or spar passes through a sail, and no sail through
  another, in every pose, across wind directions and strengths, and through every pose change.

## Phases
1. Exterior and poses (done)
2. Deck structure and room layout (done: decks, hatchways, ladders, beams, bulkheads, 40 labelled rooms and features with notes)
3. Interior furnishing
4. Isometric character mode and polish
