//alert("JavaScript works!");
																					
// Ejiroghene Efevberha
// SDI 1308
// Deliverable 3
// Players to Market

// my global variables
var surplusPlayers; 
var jsonData; // functions and procedures are based on JsonData object


										 
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
		// method accessor and nested loop
		var displayClubProfile = function (clubs) {	
		var clubOutput = "";
			for (var i = 0; i < clubs.soccerClubs.length; i++){
			var club = clubs.soccerClubs[i]
						clubOutput += "Profile of clubs interested in signing player: \n";
						clubOutput += "Name: " + club.clubName + ", Year Founded: " + club.foundingYear + 
						", Current Bid in Million Dollars: " + club.moneyOfferinMill + 
						", Previous Bids in Million Dollars: " + club.previousBidsinMill +  
						", Table Position: " + club.tablePosition + '\n\n';		
			
			//nested for loop to calculate how offers compare to parent club minimum demand
			var calcBizReady = function (ourMinPrice){		
						for (var  b = 0	; b < club.previousBidsinMill.length; b++){
						var bid = club.previousBidsinMill[b]
						var diffOutput;
						diffOutput = ourMinPrice - bid
						}
						return diffOutput;
						};	
						console.log(bid);
						var clubBiz = calcBizReady(bid)	
						console.log(clubBiz);	
	 		};
			return clubOutput;
		};
		console.log(clubsProfile);
		var profile = displayClubProfile(clubsProfile);
		console.log(profile);
		
		var thisYearGoals = 0; // players have been inactive for Team A
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
						 stats += "Height : " + player.height + '\n';
						 stats += "Ruled out of action : " + player.isPlayerInjured + '\n';
						 stats += "Versatility : ";
	
								// while-loop versatility	
								  var i = 0
								  while (i < player.versatility.length) {
								  stats += player.versatility[i] + ", ";
								  i++;
								}
		stats = stats.substr(0, stats.length - 2) + '\n';
		//assists
		stats += "\nAssists : \n";
								// for-loop assists
								for (var i in player.performanceStats.assistsLastYears) {
								stats += " " + i  + " : " + player.performanceStats.assistsLastYears[i] + '\n';
						}
		return stats;
		}	
	};

	// for-in loop Prolificacy
	for (var i in players) {
	var player49stats = playerStats.getPlayerStats(players[i]);
	console.log(player49stats + '\n');
	var player49pro = playerStats.checkProlificacy(players[i], thisYearGoals);
	console.log(player49pro + '\n\n');	
	}

