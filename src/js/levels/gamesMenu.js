module.exports = {
	baseMap: [
		   //01234567890123456789012345678901234567890123456789012345678901234567890123456789
		"                                                                                ",
		"                                                                                ",
		"              Welcome to Cybertroniks GlobalNet 3.2                             ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                    GAMES MENU                                                  ",
		"                                                                                ",
		"                                                                                ",
		"                   ┌─────────────┐                                              ",
		"                   │Hangman      │               %                              ",
		"                                 │                                              ",
		"                   └─────────────┘                                              ",
		"                   ┌─────────────┐                                              ",
		"                   │Rogue                                                       ",
		"                   │             │                %                             ",
		"                   └─────────────┘                                              ",
		"                                                                                ",
		"                                                                                ",
		" ╔═══════════════════════════ ═╦═ ════════════════════════╗                     ",
		" ║   MENU 1  MAINS             ║  MENU 3   Admin Tools    ║                     ",
		" ║                             ║                          ║                     ",
		" ╚═════════════════════════════╩══════════════════════════╝                     ",
		"                                                                                "
	],
	exits: [
		{
			to: "mainMenu",
			on: {
				x: 5,
				y: 21
			}
		},
		{
			to: "adminMenu",
			on: {
				x: 35,
				y: 21
			}
		},
		{
			to: "hangman",
			on: {
				x: 30,
				y: 10
			}
		},
		{
			to: "rogue",
			on: {
				x: 30,
				y: 14
			}
		},
	],
	hints: [
		"I know @root used to enjoy playing these games before becoming an adult.",
		"Hints to the root password can be found within the games."
	]
}