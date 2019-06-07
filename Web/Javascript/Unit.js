/*
"Unit" represents a unit in Fire Emblem Heroes. It stores all information about a specific unit.
*/
function Unit(parameters) {
	Unit.maxMerge = 10 //Static variable indicating max number of merges a unit can have

	//Default properties of a Unit
	var properties = $.extend({

		//General information about the unit irrelevant to combat
		genInfo: {
			id: -1, //Uniquely identifies a specific instance of a unit
			name: "No Unit Selected", //Name of the unit
			title: "", //Title of the unit, which alongside the name uniquely specifies a unit in the game (not a SPECIFIC unit owned by the player though)
			description: "", //In-game description of the unit
			chibiImg: "", //Link to chibi art
			neutralImg: "", //Link to neutral art
			attackImg: "", //Link to attack art
			specialImg: "", //Link to special art
			damagedImg: "" //Link to damaged art
		},

		//General information about the unit relevant to combat
		genBattleInfo: {
			mvtType: "", //infantry, armor, flier, or cavalry
			wpnType: "", //sword, lance, axe, tome, bow, dagger, staff, dragon, or beast
			color: "", //red, blue, green, or colorless
			rarity: 0, //Unit's rarity in stars
			level: 0, //Unit's level
			asset: "none", //IV asset, "none" implies flaw is also "none"
			flaw: "none", //IV flaw, "none" implies asset is also "none"
			merges: 0, //Number of merges, ranges from 0 to Unit.maxMerge
			sSupport: 'N', //Summoner support level: N for none, C, B, A, or S
			aSupport: { //Ally support information
				name: "none", //Name of the ally this unit supports with
				title: "none", //Title of the ally this unit supports with
				level: 'N' //Ally support level: N for none, C, B, A, or S
			},
			pairUp: {
				canPair: false, //Indicates if unit can pair up. Only one unit in a pair needs this to be true.
				id: -1, //ID of the unit this unit is paired up with
				leader: false //Indicates whether this unit is the leader or the cohort
			},
			dragonflower: 0, //Number of dragonflowers consumed
			legendary: false, //Refers to if unit is legendary or mythic, affects how blessing interacts
			blessing: "none" //blessing that unit bestows or was bestowed
		},

		//Base stats of the unit without any modifiers.
		baseStats: {
			maxHP: 0,
			atk: 0,
			spd: 0,
			def: 0,
			res: 0,
			bst: 0
		}

		//Effective passive stats of the unit with all weapons, skills, and items equipped
		battleStats: {
			maxHP: 0,
			currHP: 0,
			atk: 0,
			spd: 0,
			def: 0,
			res: 0,
			maxCD: 0,
			currCD: 0,
			rating: 0
		}
	})
	//========== Variables ==========
	var this.info = {
		name = "",
		title = "",
		description = "",
	}

	var this.stats = {
		maxHP = 0,
		currHP = 0,
		atk = 0,
		spd = 0,
		def = 0,
		res = 0,
		maxCD = 0,
		currCD = 0
	}

	var this.buffs = {
		atk = 0,
		spd = 0,
		def = 0,
		res = 0
	}

	var this.debuffs = {
		atk = 0,
		spd = 0,
		def = 0,
		res = 0
	}

	var this.spurs = {
		attack = 0,
		speed = 0,
		defense = 0,
		resistance = 0
	}

	var this.skills = {
		weapon = null,
		assist = null,
		special = null,
		A = null,
		B = null,
		C = null,
		seal = null
	}

	var this.statusEffects = {}
}
