
var ourMinPrice = 28;
var previousBid;
var clubsProfile = {
	"soccerClubs": [
			{
			"clubName": "Monaco FC",
			"foundingYear": 1960,
			"tablePosition": "12th",
			"bestRecord": "Champions League Finalist",
			"previousBidsinMill" :[9, 10, 11],
			"moneyOfferinMill": 18
			},
			{
			"clubName": "Bolton Wanderers",
			"foundingYear": 1958,
			"tablePosition": "16th",
			"bestRecord": "Premiership League Shield",
			"previousBidsinMill" :[6, 7, 8],
			"moneyOfferinMill": 12
			},
			{
			"clubName": "Besikstas",
			"foundingYear": 1944,
			"tablePosition": "2nd",
			"bestRecord": "Champions League Quaterfinalist",
			"previousBidsinMill" :[7, 8, 10],
			"moneyOfferinMill": 22
			}
	]

};



var players = {
    "shirtNumber49" : {
    	"name": "Sunday Mba",
		"versatility": [
		    "Right-Wing",
			"Left-Wing", 
			"Midfield-Central"
		],
		"age": 24,
		"height": "1.94m",
		"isPlayerInjured": false,
		"performanceStats" : {
			"assistsLastYears":{
		  	"year 1":6,
		  	"year 2":11,
		  	"year 3":9,
		  	"year 4":3
			}
		},
		"goalsLastYears": [12, 3, 5] 
	},
	
	"shirtNumber55": {
		"name": "Ndubuisi Agbim",
		"versatility": [
		    "Keeping", 
	  		"Spot-Kicks", 
		    "Skipper"
	  	],
		"age": 28,
		"height": "1.80m",
		"isPlayerInjured": false,
		"performanceStats": {
		     "assistsLastYears":{
		  	 "year 1":0,
	  		 "year 2":0,
	 		 "year 3":1,
			 "year 4":2
			 }
		},
		"goalsLastYears": [2, 3, 0]
	},
	"shirtNumber84": {
		"name": "Efetobo Oghene",
		"versatility": [
		    "Central-Attack", 
		    "Left-Wing", 
		    "Midfield-Attack"
		],
		"age": 20,
		"height": "1.75m",
		"isPlayerInjured": true,
		"performanceStats": {
		  	"assistsLastYears":{
			"year 1":10,
		  	"year 2":15,
		  	"year 3":11,
		  	"year 4":9
		    }
		},
        "goalsLastYears": [21, 14, 25]
	}
}
