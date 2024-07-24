# Variable: $name (String)
start = Hello there, { $name }!

# Emoji
# - Gnome
emoji-gnome-1 = 🧙‍♀️
emoji-gnome-2 = 🧙
emoji-gnome-3 = 🌿
# - Knight
emoji-knight-1 = 🤺
emoji-knight-2 = 🏰
emoji-knight-3 = ⚜️

# Profile
# Variables: $emoji (String), $name (String), $gold (Number), $stamina (Number), $state (String)
profile = { $emoji } { $name }

          ⚡️ Stamina: { $stamina }
          💰 { $gold }

          { $state }

# New player
new-start = Welcome to the Warforge - battleground of the Great Gnome-Knight War. It is time you pick a side!
# - Gnome
new-intro-gnome = ...you wake up to the gentle sway of a cart and the soft clatter of wheels on a dirt path. Sunlight filters through the forest canopy above, and the air is filled with the scents of moss and pine. The cart stops, revealing the entrance to your new home — a hidden burrow beneath an ancient oak tree. Here, your journey begins...
# - Knight
new-intro-knight = ...you awaken to the rhythmic clanking of armor and the distant sound of a bugle call. Dawn's light casts a golden glow on the open plains. The scent of dew-covered grass and campfire smoke fills the air. The camp is abuzz with activity as knights prepare for the day's journey. You mount your steed, feeling the weight of your armor and the cool breeze. Ahead lies your destiny — the grand castle, its towers piercing the sky. Here, your journey begins...

# Buttons
# - Class selection
buttons-class-gnomes = 🧙🏽 Gnomes
buttons-class-knights = 🏰 Knights
# - Main menu
buttons-main-hero = 📜 Hero
buttons-main-quest = 🗺 Quest
buttons-main-attack = ⚔️ Attack
buttons-main-defense = 🛡 Defense

# System messages
# - Wait
# - - Quest
system-wait-quest-gnome = 🌲 You are venturing into the enchanted forest. Wait until you come back to start another action
system-wait-quest-knight = 🕯 You are patrolling the ancient dungeon. Wait until you come back to start another action
# - - Stamina
system-wait-stamina = ⏳ You're exhausted from your journey. Time to rest
# - - War
system-wait-war-gnome = 🧚🏼‍♂️ Whispers of war rustle through the underbrush, brave gnome; hold your quest until the clash of steel and spell subsides, and peace returns to our realm
system-wait-war-knight = ⚔️ Amidst the clash of steel and spell, the kingdom's fate hangs in the balance; return when the echoes of war have faded and silence once again graces our realms
# - Results
# - - State
system-state-gnome-defense = 🛡️ You defend the mystical realm, ancient trees whispering their support
system-state-gnome-attack = ⚔️ Your wrath awakens, ready to strike the knights
system-state-knight-defense = 🛡️ You stand vigilant, shield raised against the gnomish threat
system-state-knight-attack = ⚔️ Your steel thirsts for battle, ready to vanquish the gnomes
# - - Quest
# Variables: $gold (Number)
system-quest = You got { $gold }💰

# Quests
# - Gnome
# - - Positive
quest-gnome-positive-1 = Deep in the Enchanted Forest, you stumbled upon a hidden grove. Amidst the glowing flowers, you found an ancient chest. Opening it, you discovered a stash of { $gold }💰 in golden coins, left behind by fleeing knights. You quickly pocketed your newfound fortune and hurried back home
quest-gnome-positive-2 = While exploring the misty mountains, you encountered an old hermit who offered you a riddle. Upon solving it, he revealed a secret passage to a knight’s hidden treasure room. Inside, you found { $gold }💰 in shiny jewels. The hermit smiled as you shared a cup of tea before you made your way back, wealthier than before
quest-gnome-positive-3 = Venturing through the haunted marshes, you found a shimmering portal. Stepping through, you landed in an abandoned knight’s camp. Scouring the area, you discovered a forgotten treasure chest filled with { $gold }💰. You thanked your luck and hurried back through the portal, richer and unscathed
quest-gnome-positive-4 = On a rainy day, you sought shelter in an old, crumbling tower. To your surprise, you discovered a secret compartment in the wall containing a map. Following it, you unearthed a buried treasure of { $gold }💰 left by knights long gone. Elated, you secured the treasure and dashed home through the storm
quest-gnome-positive-5 = Exploring the ruins of an ancient castle, you came across a hidden dungeon. Inside, you found a group of friendly sprites who had been guarding a knight’s forgotten treasure. Grateful for your company, they gifted you { $gold }💰 in precious gems. With their blessing, you returned home safely
quest-gnome-positive-6 = In the heart of the dark forest, you encountered a magical deer caught in a trap. Freeing it, the deer led you to a secret glade where knights had hidden their loot. As a reward for your kindness, you found { $gold }💰 in gold coins. The deer nodded in gratitude as you left the forest with your newfound wealth
quest-gnome-positive-7 = Journeying through the crystal caves, you discovered an old knight’s journal detailing a hidden treasure. Following the clues, you found a glittering hoard of { $gold }💰 in a secret alcove. The crystals sparkled as you gathered the treasure and carefully made your way back to the surface
quest-gnome-positive-8 = While wandering the plains, you came across a wounded griffin. Tending to its injuries, it took you to a hidden nest where knights had stored their spoils. The griffin rewarded you with { $gold }💰 in golden feathers. You thanked the majestic creature and returned home with your fortune
quest-gnome-positive-9 = In a forgotten valley, you found an ancient stone circle. Solving its puzzle, a hidden cache of knight’s treasure was revealed. Inside, you found { $gold }💰 in precious artifacts. The sun set as you made your way back, the ancient stones whispering their secrets behind you
quest-gnome-positive-10 = While exploring the shadowy swamps, you met an old alchemist who needed help finding rare herbs. In gratitude for your assistance, he revealed a knight’s hidden stash of { $gold }💰. The alchemist’s eyes twinkled as you pocketed the treasure and bid him farewell, returning home richer and wiser
# - - Negative
quest-gnome-negative-1 = You ventured into the gloomy cave, hoping to find treasure, but tripped over a hidden wire. A net sprung up, trapping you until a group of knights came by and took { $gold }💰 from your pockets
quest-gnome-negative-2 = Walking through the dense forest, you heard a rustle in the bushes. Before you could react, a trap was sprung, and a heavy log hit you, causing you to lose { $gold }💰 as you crawled back home
quest-gnome-negative-3 = You climbed a steep hill, spotting a glint of treasure at the top. As you reached for it, the ground gave way, and you tumbled down, losing { $gold }💰 along with your hopes
quest-gnome-negative-4 = Exploring the ancient ruins, you found a chest but triggered a trap. Poisonous darts flew at you, and in your rush to escape, you dropped { $gold }💰 from your pouch
quest-gnome-negative-5 = In the thick of the dark swamp, you were ambushed by bandits disguised as knights. They took { $gold }💰 from you before vanishing into the mist
quest-gnome-negative-6 = While crossing a rickety bridge over a deep gorge, a sudden gust of wind caused you to lose your balance. In the chaos, your bag tore open, spilling { $gold }💰 into the abyss
quest-gnome-negative-7 = You stumbled upon a knight’s camp and tried to sneak in for loot. Unfortunately, you were caught and barely escaped with your life, losing { $gold }💰 in the process
quest-gnome-negative-8 = Investigating a mysterious abandoned tower, you triggered a collapsing floor trap. As you scrambled to climb out, you lost { $gold }💰 from your belt
quest-gnome-negative-9 = In the heart of the eerie forest, you found a treasure chest. As you opened it, a cursed fog enveloped you, causing you to drop { $gold }💰 while fleeing
quest-gnome-negative-10 = You followed a trail of shiny coins deeper into the woods, only to fall into a hidden pit. Struggling to climb out, you realized you had lost { $gold }💰 from your satchel
# - Knight
# - - Positive
quest-knight-positive-1 = While patrolling the ancient woods, you discovered a hidden grove where gnomes had hidden a stash of { $gold }💰. Quick and vigilant, you retrieved it and returned to your camp
quest-knight-positive-2 = Venturing into a dark cave, you uncovered an old chest covered in moss. Inside, you found coins left behind by fleeing gnomes. With { $gold }💰 in hand, you swiftly returned to your fort
quest-knight-positive-3 = As you scouted the outskirts of the gnome village, you came across an abandoned camp. Searching through the remnants, you found a pouch filled with { $gold }💰. You took it and returned to your comrades
quest-knight-positive-4 = During a raid, you noticed a gnome drop his coin purse while fleeing. You cleverly seized the opportunity, snatched the purse containing { $gold }💰, and dashed back to safety
quest-knight-positive-5 = You encountered a mysterious merchant in the woods who, for a favor, gifted you a small bag. To your delight, it contained { $gold }💰. You thanked the merchant and rode back to your stronghold
quest-knight-positive-6 = Climbing an old treehouse, you discovered a hidden compartment filled with { $gold }💰, evidently forgotten by gnomes. You pocketed the gold and made your way down safely
quest-knight-positive-7 = You witnessed two gnomes arguing fiercely. While they were distracted, you noticed a fallen pouch of { $gold }💰. Seizing the moment, you grabbed the gold and returned unnoticed
quest-knight-positive-8 = Behind a roaring waterfall, you found a secret alcove. There, hidden under a rock, was a small treasure chest filled with { $gold }💰. You quickly took the gold and slipped away quietly
quest-knight-positive-9 = Exploring the ruins of an old fortress, you found a stash of { $gold }💰 hidden under a loose stone. It seemed to have been left behind by retreating gnomes. You carefully collected it and headed back
quest-knight-positive-10 = A loyal hawk led you to a gnome’s hidden stash in a hollow tree. Inside, you found { $gold }💰. You thanked the hawk, took the gold, and returned to your realm with a smile
# - - Negative
quest-knight-negative-1 = While chasing a gnome through the forest, you stumbled into a patch of quicksand cleverly hidden by an illusion. By the time you escaped, the gnomes had stolen { $gold }💰 from your pouch
quest-knight-negative-2 = You found an old map leading to hidden treasure. After following it for hours, you realized it was a decoy planted by gnomes. Frustrated, you returned home, only to discover { $gold }💰 was missing from your belongings
quest-knight-negative-3 = A seemingly friendly squirrel led you deep into the woods, only to vanish. Realizing too late it was a gnome in disguise, you struggled to find your way back and discovered { $gold }💰 was gone
quest-knight-negative-4 = You entered a beautiful meadow that seemed to promise riches, but it was an enchanted trap. The gnomes' magic drained your energy and { $gold }💰, leaving you weakened and empty-handed
quest-knight-negative-5 = A gnome in disguise posed as a helpful villager, guiding you to what he claimed was a hidden stash of gold. When you arrived, there was nothing but empty ground, and the gnome had already taken { $gold }💰 from your pouch
quest-knight-negative-6 = A thick fog enveloped you while you were on patrol. Gnomes used this cover to steal { $gold }💰 from your saddlebags while you were disoriented and trying to find your way out
quest-knight-negative-7 = You drank from a clear, inviting spring, only to realize it was cursed by gnomes. You felt dizzy and weak, dropping { $gold }💰 as you struggled to stay conscious and make your way back to safety
quest-knight-negative-8 = You followed a caravan that appeared to be full of traders, only to find it was an illusion. By the time you realized the deception, you had lost { $gold }💰 to the sneaky gnomes who had set the trap
quest-knight-negative-9 = Lured by a sweet, enchanting melody, you wandered off your path and found yourself lost in the wilderness. When you finally found your way back, { $gold }💰 was missing from your pouch, taken by the gnomes
quest-knight-negative-10 = You crossed a bridge that seemed sturdy, but halfway across, it vanished. You barely escaped the fall but dropped { $gold }💰 into the river below in the process, losing it to the gnomes who had set the trap

# State
# - Gnome
states-gnome-normal = 💤 Taking a break
states-gnome-attack = ⚔️ Raiding the castle
states-gnome-defense = 🛡️ Protecting the grove
states-gnome-quest = 🌲 Venturing into the enchanted forest
# - Knight
states-knight-normal = 💤 Resting in the barracks
states-knight-attack = ⚔️ Attacking the gnome hideout
states-knight-defense = 🛡️ Defending the kingdom
states-knight-quest = 🕯 Patrolling the ancient dungeon
