1. Must be a HTML/CSS/JS frontend with a Rails API backend. All interactions between the client and the server should be handled asynchronously (AJAX) and use JSON as the communication 
format.
2. Backend must render a resource with at least two has-many relationships. 
3. The backend and frontend must collaborate to demonstrate Read, Create AND Update for at least two of your models. Additionally, you'll need either Update or Delete for at 
least two models. The results of each action should be displayed to the user without a page refresh. :bangbang:
4. Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.

Project planning 
Game: Rythm Game

Features: 
Can save the users high score
Can show any keyboard key
3 different modes (Easy, Normal, Hard)
Can update score (for user) CRUD
Leveling system (user hasmany levels)
Unlockable maps and/or modes? 
Can delete account
 
Models:
1. Player Model C: R: U:
2. High Score (Top 10) C: R: U:
3. Song choice Model 
4. Difficulty model 

Controller Actions:
1. Index of top 10 scores

JSON Responses:
{
	"playerData": {
	"id":
	"username":
	"topScore":
	"level":
	},

	"songs": {
		"difficulty": {
			"easy": {
				"song1": = ""
				"song2": = ""
				"song3": = ""
			}
			"normal": {
				"song1": = ""
				"song2": = ""
				"song3": = ""
			}
			"hard": {
				"song1": = ""
				"song2": = ""
				"song3": = ""
			}
		}
	}
}

Stretch Goals: 
Custom made music for game

Other idea instead of lanes make it so that the keys that have to hit are actualyl circles that get get a bigger circle closing in on it to press at the right time



