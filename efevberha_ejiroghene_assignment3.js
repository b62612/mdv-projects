//alert("JavaScript works!");
																					
// Ejiroghene Efevberha
// SDI 1308
// Deliverable 3
// Players to Market

// my global variables
var surplusPlayers; //obj1
	//properties (in arrays and objects)
	//methods (function)
	//methods (procedure)
var obj2;
	//methods (accessor)
	// methods (mutator)
var jsonData;
var obj4
var obj5

										 
{
		// my method procedure (# of surplusPlayers)
		console.log ("NUMBER OF PLAYERS FOR THE MARKET");
		var surplus;
		var requiredSurplus = 3;
		var checkSurplus = function(surplus) {
         				   if   (surplus < requiredSurplus) {   
             				    console.log ("We do not have the required number of players considered suplus. Hence, we will keep the " + surplus + " players we have, off the market."); 
                    	   }
        				   else {
             					console.log ("We have "+ surplus + " players available to market in this transfer window");
        	 			   }
			};
			checkSurplus(2);
			console.log (" ");

}								 
										 
										 				
var thisYearGoals = 212;

var handleData = function (clubs) {	
	var output = "";
	for (var i = 0; i < clubs.soccerClubs.length; i++){
		var club = clubs.soccerClubs[i]
		output += "Profile of clubs interested in signing player: \n";
		output += "Name: " + club.clubName + ", Year Founded: " + club.foundingYear + ", Table Position: " + club.tablePosition + '\n\n';
		
	};
	return output;
};
console.log(clubsData);
var data = handleData(clubsData);
console.log(data);

var playerStats = {
	checkProlificacy: function (player, thisYearGoals) {
		var totalGoals = 0;
		var output = "";
   	 	for (var i = 0; i < player.goalsLastYears.length; i++) {
            totalGoals = totalGoals + player.goalsLastYears[i];
			output += "Goals scored in Year " +  ( i + 1) + " : " + player.goalsLastYears[i]  + '\n';
			output += "Prolificacy in Year: " + ( i + 1 ) + " : " +  (totalGoals / (i + 1))  + '\n';
	 		if (i === 2) {
	 			output += "After this year's season end: Prolificacy = " + ((totalGoals + thisYearGoals) / (i + 2)) + '\n';
	 		};//closes if statement
	    };//closes for loop
		return output;
	},
	
	getPlayerStats : function (player) {
		var stats = "Name: " + player.name + '\n';
		stats += "Age : " + player.age + '\n';
		stats += "Versatility : ";
		//loop versatility
		//player.versatility.join(', ');
		var i = 0
		while (i < player.versatility.length) {
			stats += player.versatility[i] + ", ";
			i++;
		}
		stats = stats.substr(0, stats.length - 2) + '\n';
		
		//assists
		stats += "\nAssists : \n";
		for (var i in player.performanceStats.assistsLastYears) {
			stats += " " + i  + " : " + player.performanceStats.assistsLastYears[i] + '\n';
		}
		return stats;
	}	
};

//Prolificacy
for (var i in players) {
	var player49stats = playerStats.getPlayerStats(players[i]);
	console.log(player49stats + '\n');
	var player49pro = playerStats.checkProlificacy(players[i], thisYearGoals);
	console.log(player49pro + '\n\n');	
}

