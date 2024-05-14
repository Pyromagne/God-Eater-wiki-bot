const aragami = [
    {
        value: 'Ogretail',
        name: 'Ogretail',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/7/77/OGT.png',
        attribute: ['none'],
        weakness: ['blaze','freeze','spark'],
        resistance: ['divine','none [GE3]'],
        weakPoint: ['Body [S/P]'],
        breakBond: ['none'],
        description: `A small Aragami whose tail resembles a demon's face. Usually subsisting on the corpses of other Aragami, it is prolific and found throughout the world. Although new breeds of Aragami have been growing, Ogretail are still the most numerous.`,
    },
    {
        value: 'Fallen Ogretail',
        name: 'Fallen Ogretail',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/d/d0/FFOT.png',
        attribute: ['Freeze'],
        weakness: ['Blaze'],
        resistance: ['Freeze'],
        weakPoint: ['Body [S/P]'],
        breakBond: ['none'],
        description: `An Ogretail adapted to cold climates. Its hide is thicker than the standard Ogretail and its physical abilities are also much higher. Native to the northern areas of North America.`,
    },
    {
        value: 'Vajratail [Blaze]',
        name: 'Vajratail [Blaze]',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/d/d1/BVT.png',
        attribute: ['Blaze'],
        weakness: ['Freeze'],
        resistance: ['Blaze'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `Similar in appearance to the Vajra, except for its crimson exoskeleton. Perhaps due to its inability to regulate its incandescent core, it is more aggressive than the Ogretail. Native to southeastern North America.`,
    },
    {
        value: 'Vajratail [Spark]',
        name: 'Vajratail [Spark]',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/c/cb/SVT.png',
        attribute: ['Spark'],
        weakness: ['Divine'],
        resistance: ['Spark'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `An Aragami that can discharge electric bursts. Due to its having devoured a Vajra core, its exoskeleton closely resembles that Aragami. Its offensive capabilities are considerably above the Ogretail. Perhaps due to its unique evolution, it can call down lightning upon its enemies. Stay wary of this during battle.`,
    },
    {
        value: 'Zygote',
        name: 'Zygote',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/4/4f/ZG.png',
        attribute: ['none'],
        weakness: ['Blaze','Freeze','Spark'],
        resistance: ['Divine'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `A fusion between a woman and an egg, this Aragami possesses great mobility. Soon after its discovery in the Americas, it spread across the globe.\n\nIts body is filled with deadly gas dangerous to humans. It can see over large areas, and when it spots a human, it lets out a piercing scream before rushing to attack. Aragami hearing this scream are put to guard. God Eaters should eliminate Zygotes before reinforcements appear.`,
    },
    {
        value: 'Fallen Zygote [Blaze]',
        name: 'Fallen Zygote [Blaze]',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/3/3e/BFZG.png',
        attribute: ['Blaze'],
        weakness: ['Freeze','Spark'],
        resistance: ['Blaze','Divine'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `A fallen Zygote brimming with highly flammable poisonous gas. As the poison can weaken the bond of Oracle Cells adapted to the body, the power of a God Eater is temporarily weakened if inhaled. If attacked by other Aragami when one's defenses are down, one could be incapacitated instantly. It might be safer to take this one out with gunfire, even if it takes more time.`,
    },
    {
        value: 'Fallen Zygote [Spark]',
        name: 'Fallen Zygote [Spark]',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/f/fb/SFZG.png',
        attribute: ['Spark'],
        weakness: ['Freeze'],
        resistance: ['Spark'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `This Zygote has the ability to generate powerful internal electrical currents. Native to eastern Eurasia, it is thought to have developed in areas with heavy industrial concentrations.\n\nThe gas it breathes is charged with powerful electric current and God Eaters who inhale it temporarily suffer from weakened attacks. This lowered offensive capability naturally leads to longer, more drawn-out battles. Caution is advised when facing it.`,
    },
    {
        value: 'Fallen Zygote [Freeze]',
        name: 'Fallen Zygote [Freeze]',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/e/eb/FFZG.png',
        attribute: ['Freeze'],
        weakness: ['Blaze'],
        resistance: ['Freeze','Divine'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `This Zygote was first discovered in the northwestern regions of America. It generates a heat-absorbing poisonous gas, and simply by being present can lower an area's temperature a number of degrees. Inhaling the gas it breathes causes Oracle Points to Leak, slowly trickling out of a God Eater. Gun-focused God Eaters should take great care not to get hit by its gaseous attack.`,
    },
    {
        value: 'Cocoon Maiden',
        name: 'Cocoon Maiden',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/4/40/CCM.png',
        attribute: ['none'],
        weakness: ['Blaze','Freeze','Spark'],
        resistance: ['Divine','none [GE3]'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `A unique type of immobile Aragami that resembles a gun turret. Since its discovery in the Americas, it has spread throughout the globe. However, it has never been seen on the move. It is thought that it travels underground at night. Its attacks include a high-density, long-range laser and short-range poison spikes hidden in its body. The best strategy is to quickly shift behind it to strike.`,
    },
    {
        value: 'Fallen Cocoon Maiden [Blaze]',
        name: 'Fallen Cocoon Maiden [Blaze]',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/e/ef/BFCCM.png',
        attribute: ['Blaze'],
        weakness: ['Freeze', 'Spark'],
        resistance: ['Blaze', 'Divine'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `Primarily found in the steamy regions surrounding open magma, this Cocoon Maiden has an incredible resistance to heat. By sucking magma up through its body, it can expel it to attack foes. Although similar to regular Cocoon Maidens, its poisonous spikes have the ability to lower defense. It can be particularly dangerous when paired with other Aragami.`,
    },
    {
        value: 'Fallen Cocoon Maiden [Spark]',
        name: 'Fallen Cocoon Maiden [Spark]',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/4/45/SFCCM.png',
        attribute: ['Spark'],
        weakness: ['Freeze'],
        resistance: ['Spark','Divine'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `Originally discovered in the mountains of western North America, theories that this Cocoon Maiden was struck by lightning and mutated are unconfirmed. Electricity has been added to all its attacks, and not only it can stun God Eaters, but it can also lower their attack strength. Make sure not to stand in front of it during battle.`,
    },
    {
        value: 'Fallen Cocoon Maiden [Freeze]',
        name: 'Fallen Cocoon Maiden [Freeze]',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/b/b2/FFCCM.png',
        attribute: ['Freeze'],
        weakness: ['Blaze'],
        resistance: ['Freeze','Divine'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `This type of Cocoon Maiden is usually seen on the surface of water. Dissection has shown that it most likely travels by expelling jets of water, but this has never been seen. Native to northeastern North America. The poison needles it fires around itself sap not just health, but also the heat of living organisms. This attack comes shortly after it stretches upward. Make sure to watch for this when fighting it up close.`,
    },
    {
        value: 'Dreadpike',
        name: 'Dreadpike',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/8/88/DP.png',
        attribute: ['none'],
        weakness: ['Blaze', 'freeze', 'Spark', 'Divine'],
        resistance: ['none'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `A small Aragami with the shell and horns of a beetle. Native to South America, in recent years it has spread throughout the world.\n\nOnly able to attack by rushing enemies with its horn, its simple movements and attack patterns should prove no problem for a trained God Eater.`,
    },
    {
        value: 'Zhou Wang',
        name: 'Zhou Wang',
        type: 'Small/Psion',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/0/01/Zan_.png',
        attribute: ['Freeze'],
        weakness: ['Blaze', 'Spark', 'Divine'],
        resistance: ['none'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `A psion version of the Ogretail, it is covered with plumage-like fur. Brought about by the Yan Zhi's ability, it possesses an imperfect core, which causes it to instantaneously disperse into a cloud of mist on death. Individually not much of a threat, it becomes incredibly dangerous when a swarm focuses its attacks. Dealing with each quickly and efficiently is the best strategy for dealing with them.`,
    },
    {
        value: 'Night Hollow',
        name: 'Night Hollow',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/3/3e/NH.png',
        attribute: ['none'],
        weakness: ['Blaze', 'Freeze', 'Spark', 'Divine'],
        resistance: ['none'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `A small Aragami with a single eye, its body looks like it is wrapped in a dirty black bandange. A new species, it can be found worldwide; however its origins are unknown. Unable to move on its own accord, how its has spread is currently under investigation. Althought it can fire and explosive timed Oracle attack from its eye, it has no other means of attack and is quite fragile.`,
    },
    {
        value: 'Silky',
        name: 'Silky',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/9/90/Silky.png',
        attribute: ['none'],
        weakness: ['Blaze', 'Freeze', 'Spark'],
        resistance: ['none'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `An Aragami thought to have formed inside the Spiral Tree. Its original purpose appears to have been to seek out and expel foreign matter.\n\nAlthough not very strong and possessing very simple patterns of movement, the Oracle attack it emits from its uniquely developed organ lasts for an exceptionally long period of time.\n\nTake extra caution when fighting more than one.`,
    },
    {
        value: 'Abaddon',
        name: 'Abaddon',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/0/0c/Abaddon.png',
        attribute: ['none'],
        weakness: ['Blaze', 'Freeze', 'Spark', 'Divine'],
        resistance: ['none'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `A mysterious Aragami that appears without warning and disappears to parts unknown. Sightings of this Aragami are few and far between, but as of now they have reportedly never attacked a God Eater.\n\nTheir bodies contain extremely rare cores, and thus are highly sought after. However, their speed is uncanny. Pursue them at your own risk.`,
    },
    {
        value: 'Amor',
        name: 'Amor',
        type: 'Small',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/0/0c/Abaddon.png',
        attribute: ['none'],
        weakness: ['Blaze', 'Freeze', 'Spark', 'Divine'],
        resistance: ['none'],
        weakPoint: ['none'],
        breakBond: ['none'],
        description: `A mysterious new Aragami that appears as suddenly it vanishes. Sightings are rare, but there have been no reports of it harming any God Eater. It should be defeated in order to collect the extremely valuable core it contains, but focusing on it while it attempts to flee could invite disaster, so maintain situational awareness while engaging.`,
    },

    //MEDIUM ARAGAMI

    {
        value: 'Kongou',
        name: 'Kongou',
        type: 'Medium',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/c/c9/KG.png',
        attribute: ['none'],
        weakness: ['Spark', 'Blaze'],
        resistance: ['Freeze', 'none [GE3]'],
        weakPoint: ['Tail'],
        breakBond: ['Face', 'Torso', 'Tail'],
        description: `An Aragami built like a giant ape-man. Characterized by its agility and brutal attacks. It will assemble a herd to launch an attack. First appeared in the Far East, Eurasian continent.\n\nIt'll fire vacuum waves from the pipe-shaped organs on its back. When enraged, it boosts its speed and attack power. Should several Kongous activate simultaneously, it's best to be cautious.`,
    },
    {
        value: 'Fallen Kongou',
        name: 'Fallen Kongou',
        type: 'Medium',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/f/fd/FKG.png',
        attribute: ['Freeze'],
        weakness: ['Blaze'],
        resistance: ['Freeze'],
        weakPoint: ['Arms', 'Feet'],
        breakBond: ['Face','Torso','Tail'],
        description: `A type of Kongou that swarms in cold regions. The pipe-like organ on its back differ from normal Kongou, with the ability to instantly freeze water molecules in the air before firing them. Native to northeast Eurasia. Its tri-directional ice shots are extremely dangerous. God Eaters should be ready to evade or guard against these at any moment. Additionally, the frozen air it releases when attacking increases the range of all of its attacks.`,
    },
    {
        value: 'Fierce Kongou',
        name: 'Fierce Kongou',
        type: 'Medium',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/6/6f/FIEKG.png',
        attribute: ['Spark'],
        weakness: ['Divine'],
        resistance: ['Spark'],
        weakPoint: ['Arms','Feet'],
        breakBond: ['Plume','Back','Arms'],
        description: `An Aragami similar to the Kongou, but with a face that seems split open. Its body sizzles with barely containing electricity, and it emits this and calls down lightning attack. Although thought to be a unique species of Kongou, its origins are unknown. When active, it slams its fists into the ground to call down a stunning lightning bolt. Countering this with skills is wise. Its widespread attacks are many. Stay back and fire at its head and arms.`,
    },
    {
        value: 'Rakshasa Kongou',
        name: 'Rakshasa Kongou',
        type: 'Medium/Arc Aberrant',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/9/9d/RKG.png',
        attribute: ['Blaze'],
        weakness: ['Divine'],
        resistance: ['Blaze'],
        weakPoint: ['Tail','Head'],
        breakBond: ['Head','Boost Hammer Portion','Tail'],
        description: `An Arc Aberrant born from Dr. Rachel Claudius's will. Has the body of a Kongou and wields a Boost Hammer similar to Nana's.\n\nControls shockwaves in a manner mimicking Nana's Blood Art in addition to its Boost ability. It uses shockwaves to defend itself when it gets knocked down, so caution is advised.`,
    },
    {
        value: 'Chi-You',
        name: 'Chi-You',
        type: 'Medium',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/2/20/Shiyuu2.png',
        attribute: ['Blaze'],
        weakness: ['Blaze','Freeze'],
        resistance: ['Divine'],
        weakPoint: ['Head','Fist'],
        breakBond: ['Head','Arm Wings','Lower Body'],
        description: `A humanoid Aragami with a set of iron-like wings. Although it appears to be a simple melee fighter that uses its wings in close-quarters combat, it can also gather explosive energy in its palms and fling it at enemies. Native to central Eurasia. Its wings are resilient to melee, so it is best to first break the armor on its legs or wings with crushing bullets, then close in for the kill. When angry, its gliding speed increases, so bear caution.`,
    },
    {
        value: 'Fallen Chi-You',
        name: 'Fallen Chi-You',
        type: 'Medium',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/c/c9/FCHY.png',
        attribute: ['Spark'],
        weakness: ['Blaze'],
        resistance: ['Freeze','Spark','Divine'],
        weakPoint: ['Head','Fist'],
        breakBond: ['Head','Arm Wings','Lower Body'],
        description: `A Chi-You that can control electricity. The attacks it looses from its palms reach farther and do more damage than those of a normal Chi-You. It is thought to be more native to the mountains of northeastern Eurasia. Hits from its palms can stun God Eaters, so using skills etc. to counter this is recommended. When angry, it is particularly susceptible to the Hold debuff. Use this to your advantage.`,
    },
    {
        value: 'Sekhmet',
        name: 'Sekhmet',
        type: 'Medium/Deusphage 1',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/9/9a/Sekhmet.png',
        attribute: ['Blaze'],
        weakness: ['Freeze'],
        resistance: ['Blaze','Spark'],
        weakPoint: ['Head','Fist'],
        breakBond: ['Head','Arm Wings','Lower Body'],
        description: `A humanoid Aragami with wings wreathed in flame. Recklessly offensive, the fireballs it flings from its hands explode dangerously on contact. Thought to be native to southwest Eurasia.\n\nThe flames it emits from its wings when gliding make its charges quite hard to evade. Its flames grow larger and even more intense when it's angered, but its resistance to the hold debuff decreases.`,
    },
    {
        value: 'Hera',
        name: 'Hera',
        type: 'Medium/Deusphage 2',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/5/56/Hera.png',
        attribute: ['Blaze'],
        weakness: ['Freeze'],
        resistance: ['Blaze','Spark','Divine'],
        weakPoint: ['Head','Fist'],
        breakBond: ['Head','Arm Wings','Lower Body'],
        description: ``,
    },
    {
        value: 'Gboro-Gboro',
        name: 'Gboro-Gboro',
        type: 'Medium',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/b/b4/GBGB.png',
        attribute: ['Freeze'],
        weakness: ['Blaze','Spark'],
        resistance: ['Freeze'],
        weakPoint: ['torso','Arm fins'],
        breakBond: ['Teeth','Torso','Back Fin'],
        description: `An aquatic Aragami with massive fins, head, and chin. It can fire multiple balls of liquid from its cannon-like snout. It is at home on both land and in the water, and is surprisingly fast. Native to southeast Eurasian coastal areas.\n\nThe range of its shots is huge and the strength of its jaws make attacking its head-on a fool's errand. Additionally, it can spin quickly and violently to face attackers behind it.`,
    },
    {
        value: 'Fallen Gboro-Gboro [Blaze]',
        name: 'Fallen Gboro-Gboro [Blaze]',
        type: 'Medium',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/c/cf/BFGB.png',
        attribute: ['Blaze'],
        weakness: ['Freeze'],
        resistance: ['Blaze'],
        weakPoint: ['Unbound Cannon'],
        breakBond: ['Cannon, Back Fin, Tail Fin'],
        description: `A type of Gboro-Gboro that inhibits scorching hot climates, it can fire the magma stored in its body in the form of a fiery orb. Unlike the standard Gboro-Gboro, it can swim in magma. Native to central Eurasia.\n\nThe range of the mist it exhales from its snout is large, and breathing it will significantly weaken attacks. The fiery orbs it fires in front of itself explode on contact, so be ready to avoid them.`,
    },
    {
        value: 'Fallen Gboro-Gboro [Freeze]',
        name: 'Fallen Gboro-Gboro [Freeze]',
        type: 'Medium',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/5/5a/FFGB.png',
        attribute: ['Freeze'],
        weakness: ['Blaze'],
        resistance: ['Freeze'],
        weakPoint: ['Unbound Cannon'],
        breakBond: ['Cannon, Back Fin, Tail Fin'],
        description: `A Type of Gboro-Gboro first discovered in the far northern reaches of Eurasia. It propels the ice it hardens inside its body and fires them incredible distances. Populations of these Aragami have grown explosively in recent years.\n\nThe range of the mist it exhales from its snout is large, and breathing it will significantly weaken defense. Be wary of this when fighting up close.`,
    },
    {
        value: 'Golden Gboro-Gboro',
        name: 'Golden Gboro-Gboro',
        type: 'Medium',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/4/49/GGB.png',
        attribute: ['none'],
        weakness: ['blaze','Freeze','Spark','Divine'],
        resistance: ['none'],
        weakPoint: ['Back Fin','Tail Fin','Cannon','Fangs','Torso','Arm Fins'],
        breakBond: ['Cannon','Back Fin','Tail Fin'],
        description: `A rare species of Gboro-Gboro that glimmers golden. Why is still a mystery, but it is exceptionnally weak and brittle. Be sure to break its bonds with precise attacks before finishing off.\n\nMaterials that can be obtained from it are, unlike other Gboro-Gboro, mostly metals. There is a superstition among God Eaters that those who encounter one will find true happiness.`,
    },
    {
        value: 'Yan Zhi',
        name: 'Yan Zhi',
        type: 'Medium/Psion',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/2/24/NewYanzhi.png',
        attribute: ['Freeze'],
        weakness: ['Blaze'],
        resistance: ['Freeze','Spark'],
        weakPoint: ['Head'],
        breakBond: ['Head','Arm Wings','Lower Body'],
        description: `A Chi-You psion with the body of a beautiful girl. Using its resonance ability, it can control nearby Aragami, causing them to attack a single target. It can also instantly gather swarms of Oracle Cells, forming them into Zhou Wang slaves. Anyone targeted by Yan Zhi should be defended at all costs.\n\nIt can both glide with its wings and fly extremely high, only to dive on unsuspecting God Eaters.`,
    },
    {
        value: 'Kabbala Kabbala',
        name: 'Kabbala Kabbala',
        type: 'Medium/Psion',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/d/da/Kabbala.png',
        attribute: ['Spark'],
        weakness: ['Blaze','Freeze','Divine'],
        resistance: ['Spark'],
        weakPoint: ['Nose'],
        breakBond: ['Nose','Arm Fins','Tail Fin'],
        description: `A psion Aragami belonging to the Gboro-Gboro breed, it has the face of some sort of shaman.\n\nIt can emit resonance wave pulses with its dancing movement to activates the Oracle Cell in nearby Aragami and God Arcs.\n\nIt powerful explosive lighting blasts and agile movements make it far more battle capable than other types of Gboro-Gboro.`,
    },
    {
        value: 'Yaksha',
        name: 'Yaksha',
        type: 'Medium',
        imageURL: 'https://static.wikia.nocookie.net/godeater/images/e/e3/YK.png',
        attribute: ['Divine'],
        weakness: ['Blaze','Freeze','Spark'],
        resistance: ['Divine'],
        weakPoint: ['Head'],
        breakBond: ['Head','Pauldrons'],
        description: `A humanoid Aragami with a gun in place of its right arm. Primarily travels and works in packs. Very wary, it will investigate the source of any sounds emanating from combat.\n\nContinually fires Oracle Cells from its cannon, though they are easily dodged and thus pose little threat. When confronted in groups, their cannons pose a greater threat. The should be dealt with quickly.`,
    },
]

module.exports = aragami;

/* {
    value: '',
    name: '',
    type: '',
    imageURL: '',
    attribute: [''],
    weakness: [''],
    resistance: [''],
    weakPoint: [''],
    breakBond: [''],
    description: ``,
}, */
