const aragamiSmall = [
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
        description: `A fusion between a woman and an egg, this Aragami possesses great mobility. Soon after its discovery in the Americas, it spread across the globe. Its body is filled with deadly gas dangerous to humans. It can see over large areas, and when it spots a human, it lets out a piercing scream before rushing to attack. Aragami hearing this scream are put to guard. God Eaters should eliminate Zygotes before reinforcements appear.`,
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
        description: `This Zygote has the ability to generate powerful internal electrical currents. Native to eastern Eurasia, it is thought to have developed in areas with heavy industrial concentrations. The gas it breathes is charged with powerful electric current and God Eaters who inhale it temporarily suffer from weakened attacks. This lowered offensive capability naturally leads to longer, more drawn-out battles. Caution is advised when facing it.`,
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
    
]

module.exports = aragamiSmall;

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