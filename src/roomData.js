// Interior arrangement at Trafalgar, deck by deck. Positions are in ship metres (x: stern -28 to
// bow +28; z: port negative, starboard positive). Walls list the sides that get a bulkhead:
// 'fore' | 'aft' | 'port' | 'stbd', or [side, doorway offset in metres along the wall].
//
// Sources: Wikipedia "HMS Victory" (citing McGowan); archived hms-victory.com deck pages; NMRN
// learning sheet and conservation log; Beatty's Narrative (1807); modellers' readings of McKay's
// plans (shipsofscale "Inside Out", Henk van Luinen). Sides and exact positions mostly rest on the
// modellers' readings, so they are approximate.

export const DECK_ABOVE = { hold: 'orlop', orlop: 'lower', lower: 'middle', middle: 'upper', upper: 'qd', qd: 'poop' };
export const LEVEL_OF = { qd: 'quarterdeck', upper: 'upper', middle: 'middle', lower: 'lower', orlop: 'orlop', hold: 'hold' };
export const DECK_NAMES = {
  qd: 'Quarterdeck and forecastle', upper: 'Upper gun deck', middle: 'Middle gun deck',
  lower: 'Lower gun deck', orlop: 'Orlop', hold: 'Hold',
};

const S = {
  wp: 'Wikipedia, "HMS Victory" (citing McGowan)',
  hv: 'HMS Victory official site (archived deck pages)',
  nmrn: 'National Museum of the Royal Navy',
  beatty: "Beatty, Authentic Narrative of the Death of Lord Nelson (1807)",
  mckay: "modellers' readings of McKay's plans",
};

export const ROOMS = [
  // ---- Quarterdeck, under the poop ----
  { deck: 'qd', name: "Captain Hardy's day cabin", x0: -28.6, x1: -23.2, z0: -7, z1: 7, walls: [['fore', 7]],
    note: "The aftermost part of the quarterdeck, under the poop, lit by the stern windows. Hardy's day cabin held two guns, cleared away like the rest of the ship for battle.", source: `${S.wp}; photo captions` },
  { deck: 'qd', name: "Captain's dining cabin", x0: -23.2, x1: -17.6, z0: -7, z1: -1.6, walls: [['stbd', 2.0]],
    note: 'Where the captain dined, often with his officers. Its exact side is not certain.', source: `photo captions; ${S.mckay}` },
  { deck: 'qd', name: "Captain's bed place", x0: -23.2, x1: -20.2, z0: 1.6, z1: 7, walls: ['fore', ['port', 1.5]],
    note: "Hardy's sleeping cabin, part of his quarters under the poop.", source: 'photo captions (medium confidence)' },
  { deck: 'qd', name: "Master's cabin", x0: -17.6, x1: -13.6, z0: -7, z1: -1.7, walls: [['stbd', 2], 'fore'],
    note: 'The master was responsible for navigation. His cabin was on the larboard (port) side, beside the wheel.', source: `R. Fraser / P. Milford deck notes; ${S.mckay}` },
  { deck: 'qd', name: "Secretary's cabin", x0: -17.6, x1: -13.6, z0: 1.7, z1: 7, walls: [['port', 2], 'fore'],
    note: "Nelson's secretary, John Scott, was killed early in the battle. His cabin was to starboard of the wheel.", source: 'R. Fraser / P. Milford deck notes (medium confidence)' },
  { deck: 'qd', name: 'Wheel', obj: true, x0: -15, x1: -14, z0: -1, z1: 1, lx: -14.4, ly: 2.4,
    note: 'The double wheel stands under the overhang of the poop, with the binnacle (compass) forward of it. At Trafalgar the wheel was shot away and she was steered from the gunroom below.', source: `${S.hv}; ${S.beatty}` },
  { deck: 'qd', name: 'Where Nelson fell', x0: -9, x1: -7, z0: 1, z1: 3, ly: 0.6,
    note: 'Nelson was shot by a French marksman in the mizzen top of the Redoutable at about 1:15 pm while walking the quarterdeck with Hardy. A brass plaque marks the spot today; its exact position here is approximate.', source: `${S.hv}; ${S.beatty}` },
  { deck: 'qd', name: 'Forecastle', x0: 18, x1: 22, z0: -1, z1: 1, ly: 1.8,
    note: 'Two 12-pounders and two 68-pounder carronades, the belfry and the galley chimney. The bell struck the half-hours of each watch.', source: S.wp },

  // ---- Upper gun deck: Nelson's quarters aft ----
  { deck: 'upper', name: 'Great cabin', x0: -28.9, x1: -23.6, z0: -7.4, z1: 7.4, walls: [['fore', 7.4]],
    note: "Nelson's day cabin and office at the stern windows, where he wrote his last prayer on the morning of the battle. With the dining cabin and sleeping quarters it took up about a quarter of the deck. His coffin later stood in the after part of this cabin.", source: `${S.hv}; ${S.beatty}` },
  { deck: 'upper', name: 'Dining cabin', x0: -23.6, x1: -18.6, z0: -7.4, z1: 7.4, walls: [['fore', 5.5]],
    note: "Where Nelson entertained his captains: the 'Band of Brothers' dined here before Trafalgar.", source: S.hv },
  { deck: 'upper', name: "Nelson's sleeping cabin", x0: -18.6, x1: -15.2, z0: 1.2, z1: 7.4, walls: [['port', 1.7], 'fore'],
    note: "Nelson's cot hung between two 12-pounders. Which side it was on is not recorded in the sources found; it is shown to starboard.", source: 'R. Fraser / P. Milford deck notes (side not found)' },
  { deck: 'upper', name: 'Steerage (ante-room)', x0: -18.6, x1: -14.6, z0: -7.4, z1: 1.2, walls: [['fore', 6.0]],
    note: "An ante-room for the admiral's clerks and secretary, leading to the dining and day cabins.", source: S.hv },
  { deck: 'upper', name: 'Sick berth', x0: 21.6, x1: 27.4, z0: 0.6, z1: 6, walls: [['aft', 3], 'port'],
    note: 'Forward, in the bow under the forecastle, where the air was best. Cots hung over the guns; the surgeon worked just forward of the foremast. In battle the wounded were taken below to the cockpit instead. The side is uncertain.', source: `${S.nmrn}; ${S.mckay}` },

  // ---- Middle gun deck ----
  { deck: 'middle', name: 'Wardroom', x0: -29.2, x1: -15.8, z0: -3.4, z1: 3.4, walls: [['fore', 3.4]],
    note: "The commissioned officers' mess, aft, with a long table over the rudder head and the officers' cabins along both sides.", source: `${S.wp}; ${S.mckay}` },
  { deck: 'middle', name: "First Lieutenant's cabin", x0: -26.4, x1: -22.4, z0: 3.4, z1: 7.6, walls: [['port', 3.5], 'fore'],
    note: 'On the starboard side, with the use of the starboard quarter gallery.', source: `${S.mckay} (low-medium confidence)` },
  { deck: 'middle', name: "Officer's cabin", x0: -22.4, x1: -19.6, z0: 3.4, z1: 7.6, walls: [['port', 2.4], 'fore'], lx: -21.2,
    note: 'One of seven small cabins of lieutenants and senior officers round the wardroom, separated by light partitions that could be taken down when the ship cleared for action.', source: S.mckay },
  { deck: 'middle', name: "Officers' pantry", x0: -19.6, x1: -15.8, z0: 3.4, z1: 7.6, walls: [['port', 3.2], 'fore'],
    note: "The wardroom's pantry, around the mizzen mast.", source: `${S.mckay} (low-medium confidence)` },
  { deck: 'middle', name: "Officers' cabins", x0: -26.4, x1: -15.8, z0: -7.6, z1: -3.4, walls: [['stbd', 2.0]],
    note: 'Lieutenants\' cabins on the larboard side of the wardroom.', source: S.mckay },
  { deck: 'middle', name: 'Main capstan', obj: true, x0: -7, x1: -5.8, z0: -0.6, z1: 0.6, ly: 1.7,
    note: 'Abaft the mainmast. Its drumhead is on this deck, with a second drumhead below on the lower deck, so men on two decks could heave on the bars at once to weigh the anchors.', source: `${S.nmrn} conservation log` },
  { deck: 'middle', name: 'Jeer capstan', obj: true, x0: 3.1, x1: 4.3, z0: -0.6, z1: 0.6, ly: 1.7,
    note: 'Forward of the mainmast, used to sway up the heavy lower yards and for other heavy lifts.', source: `${S.nmrn} conservation log` },
  { deck: 'middle', name: 'Galley (Brodie stove)', x0: 18.6, x1: 22.0, z0: -2.2, z1: 2.2, ly: 1.6,
    note: "Just abaft the foremast, on a stone hearth. The iron Brodie stove cooked for some 820 men and distilled a little fresh water. The museum places it on this deck; the stove now aboard dates from the 1920s.", source: `${S.nmrn}; ${S.mckay}` },
  { deck: 'middle', name: 'Galley pantry', x0: 16.2, x1: 18.6, z0: -1.8, z1: 1.8, walls: ['aft', ['port', 1.2], ['stbd', 1.2]],
    note: 'Behind (abaft) the galley.', source: S.mckay },

  // ---- Lower gun deck ----
  { deck: 'lower', name: 'Gunroom', x0: -28.6, x1: -23.6, z0: -6.6, z1: 6.6, walls: [['fore', 6.6]],
    note: "Aft on this deck: the gunner's domain and the junior officers' mess, with the tiller sweeping overhead. Some sources put a gun room on the orlop instead. After the wheel was shot away Victory was steered from here.", source: `${S.wp} (Gunroom); ${S.beatty}` },
  { deck: 'lower', name: 'Crew messes', x0: -12, x1: 12, z0: 3.5, z1: 5.5, lx: -4, lz: 4.6,
    note: 'About 600 men ate here and 460 slept, in hammocks slung from the beams in rows 14 inches wide. Messes of up to a dozen men ate at tables hung between the guns.', source: `${S.hv}; ${S.nmrn}` },
  { deck: 'lower', name: 'Chain pumps', obj: true, x0: -1, x1: 1, z0: 1.4, z1: 2.6,
    note: 'Two chain pumps each side of the mainmast drew water from the well in the hold; there was also an elm-tree pump.', source: `on-board placard; ${S.mckay}` },
  { deck: 'lower', name: 'Riding bitts', obj: true, x0: 20, x1: 21, z0: -1, z1: 1, ly: 1.4,
    note: 'The great timbers that held the anchor cables. Their posts ran down to the hold. Forward of them, the hawse holes and the manger that caught water coming in with the cables.', source: S.mckay },

  // ---- Orlop ----
  { deck: 'orlop', name: 'Bread room', x0: -27, x1: -23.5, z0: -6, z1: 6, walls: [['fore', 9.5]],
    note: 'Right aft, lined to keep out damp and rats: ship\'s biscuit for months at sea.', source: S.mckay },
  { deck: 'orlop', name: 'After hanging magazine', x0: -23.5, x1: -21.2, z0: -1.6, z1: 1.6, walls: ['aft', 'fore', 'port', ['stbd', 1.1]],
    note: 'A small magazine for filled cartridges for the after guns.', source: S.mckay },
  { deck: 'orlop', name: "Purser's store", x0: -23.5, x1: -20.2, z0: -6.5, z1: -1.6, walls: [['fore', 2.5]],
    note: "The purser's stores and cabin: clothing, tobacco, soap and candles, sold to the men.", source: S.mckay },
  { deck: 'orlop', name: "Marines' clothes store", x0: -20.2, x1: -18.2, z0: -6.5, z1: -1.6, walls: [['fore', 2.5]],
    note: 'Store for the uniforms and kit of the 146 Royal Marines aboard.', source: S.mckay },
  { deck: 'orlop', name: "Steward's room", x0: -23.5, x1: -21.2, z0: 1.6, z1: 6.5, walls: [['fore', 2.4]],
    note: 'The steward issued provisions from the bread room and stores.', source: S.mckay },
  { deck: 'orlop', name: "Surgeon's cabin", x0: -21.2, x1: -18.2, z0: 1.6, z1: 6.5, walls: [['fore', 2.4]],
    note: "William Beatty, the surgeon, kept his cabin next to the cockpit.", source: `${S.mckay} (low-medium confidence)` },
  { deck: 'orlop', name: 'Cockpit', x0: -18.2, x1: -11, z0: -1.6, z1: 1.6, ly: 0.9,
    note: "In battle the surgeon's station. The wounded were carried down here by the hundred; Beatty operated by lantern light below the waterline, safe from shot.", source: `${S.hv}; ${S.beatty}` },
  { deck: 'orlop', name: "Midshipmen's berth (where Nelson died)", x0: -17, x1: -11, z0: -6.4, z1: -1.6, walls: ['aft', 'fore', ['stbd', 3]],
    lx: -13, lz: -3.6,
    note: "Nelson was carried to one of the midshipmen's berths on the larboard side, and died here at about 4:30 pm, three hours after he was shot. His last words were recorded by Beatty and the chaplain. A lantern marks the spot; it was moved about 6 m forward after Goodwin's study.", source: `${S.beatty}; ${S.nmrn}` },
  { deck: 'orlop', name: 'Pump room', x0: -4, x1: -1, z0: -1.5, z1: 1.5, ly: 0.9,
    note: 'Around the mainmast, over the well, where the pump chains ran down.', source: S.mckay },
  { deck: 'orlop', name: 'Cable tiers', x0: 0.5, x1: 12, z0: 2.6, z1: 6, lx: 6.5, lz: 4.2,
    note: 'The great hemp anchor cables were coiled down here on both sides when the anchors were up.', source: S.mckay },
  { deck: 'orlop', name: "Boatswain's store", x0: 14, x1: 17.5, z0: 1.6, z1: 6, walls: ['aft', ['port', 1.8], 'fore'],
    note: "The boatswain's cabin and store: spare rope, blocks and rigging stores.", source: S.mckay },
  { deck: 'orlop', name: "Carpenter's workshop", x0: 14, x1: 17.5, z0: -6, z1: -1.6, walls: ['aft', ['stbd', 1.8], 'fore'],
    note: "The carpenter and his crew plugged shot holes from the carpenter's walk along the hull during the battle.", source: S.mckay },
  { deck: 'orlop', name: 'Sail room', x0: 17.5, x1: 20.6, z0: 0.4, z1: 5.4, walls: [['port', 1.5], 'fore'],
    note: 'Spare sails, kept forward and dry.', source: S.mckay },
  { deck: 'orlop', name: 'Rope and block room', x0: 17.5, x1: 20.6, z0: -5.4, z1: -0.4, walls: [['stbd', 1.5], 'fore'],
    note: 'Spare cordage and blocks.', source: S.mckay },
  { deck: 'orlop', name: 'Fore hanging magazine', x0: 20.6, x1: 23.6, z0: -1.8, z1: 1.8, walls: [['aft', 1.8], 'fore', 'port', 'stbd'],
    note: 'Filled cartridges ready for the forward guns, with ladders down to the grand magazine. The light-room entry was above the foremast step.', source: S.mckay },

  // ---- Hold ----
  { deck: 'hold', name: 'After hold', x0: -20, x1: -4.5, z0: -4, z1: 4, lx: -10, ly: 1.4,
    note: 'Seven compartments, among them the after powder room and the flour store.', source: `${S.mckay} (low-medium confidence)` },
  { deck: 'hold', name: 'Well and shot lockers', obj: true, x0: -4.5, x1: -0.5, z0: -1.8, z1: 1.8, walls: ['aft', 'fore', 'port', 'stbd'],
    note: 'Around the foot of the mainmast: the well, where the pumps drew from, with the shot lockers forward and aft of it.', source: `${S.mckay}; Longridge` },
  { deck: 'hold', name: 'Main hold', x0: -0.5, x1: 15, z0: -4, z1: 4, lx: 7, ly: 1.4,
    note: 'Water casks bedded on iron and shingle ballast: enough fresh water for several months, with beer, salt beef and pork.', source: S.mckay },
  { deck: 'hold', name: 'Filling room', x0: 15, x1: 18, z0: -3, z1: 3, walls: [['aft', 3], ['fore', 3]],
    note: 'Where powder was made up into cartridges, lit only from the light room through glass.', source: `${S.mckay}; ${S.wp}` },
  { deck: 'hold', name: 'Grand magazine', x0: 18, x1: 23, z0: -3, z1: 3, walls: ['fore'],
    note: 'Forward, copper-lined, below the waterline. It held the ship\'s main stock of gunpowder; men wore felt slippers and nothing iron was allowed inside. The layout changed after 1805.', source: `${S.mckay}; ${S.wp}` },
];
