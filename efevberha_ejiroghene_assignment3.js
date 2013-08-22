//alert("JavaScript works!");
																					{
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
										 
										 				{
		// my properties (PlayerStats of surplusPlayers)
		var shirtNumber;
		var performanceStats;
		var playerStats = {
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
       				  				  			 "year1":6,
       				  				  			 "year2":11,
       				  				 			 "year3":9,
       				  				 			 "year4":3
       				  				 			 },
       				  				  "prolificacy": function () {
									  var goalsLastYears = [12, 3, 5];
									  var totalGoals = 0;
									  var checkProlificacy = function(thisYearGoals, data){
									  
															 for (var i = 0; i < data.length; i++){
    														 totalGoals = totalGoals + data [i]; 

    														 console.log ("Goals scored in Year: " + ( i + 1 ) + ".  Season end prolificacy = " + 
                											 (totalGoals / (i + 1)));
        													 			if (i === 2) {
           													 			console.log("   After this year's season end: Prolificacy = " +
           													 			((totalGoals + thisYearGoals) / (i + 2)));
           													 			};//closes if statement
       								 						 };//closes for loop            
    								 	  };//closes checkProlificacy function (shirt49)
                					 	  return data;
                					      console.log ("Here is a summary of goals he scored in the last few years: " +checkProlificacy(3,goalsLastYears));
									 } //closes prolificacy function  (shirt49)
 									
 
       				 				 }, //closes performanceStats (shirt49)
       				 		"playerGradeLevel" : {
       				 							"dribbling": 6,
       				 							"clubLoyalty": 10,
       				 							"ballControl": 7,
       				 							"speed": 4,
       				 							"gradePlayer": function () {
       				 							var grade = (this.dribbling + this.clubLoyalty + this.ballControl + this.speed)/(playerGradeLevel.length - 1);
       				 							return grade;
       				 										 }//closes gradePlayer function (shirt49)
       				 							
       				 							}//closes playerGradeLevel (shirt49)
       		},//closes shirtNumber49
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
       				  				  			 "year1":0,
       				  				  			 "year2":0,
       				  				 			 "year3":1,
       				  				 			 "year4":2
       				  				 			 },
       				  				  "prolificacy": function () {
									  var goalsLastYears = [2, 3, 0];
									  var totalGoals = 0;
									  var checkProlificacy = function(thisYearGoals, data){
									  
															 for (var i = 0; i < data.length; i++){
    														 totalGoals = totalGoals + data [i]; 

    														 console.log ("Goals scored in Year: " + ( i + 1 ) + ".  Season end prolificacy = " + 
                											 (totalGoals / (i + 1)));
        													 			if (i === 2) {
           													 			console.log("   After this year's season end: Prolificacy = " +
           													 			((totalGoals + thisYearGoals) / (i + 2)));
           													 			};//closes if statement
       								 						 };//closes for loop            
    								 	  };//closes checkProlificacy function (shirt55)
                					 	  return data;
                					      console.log ("Here is a summary of goals he scored in the last few years: " +checkProlificacy(1,goalsLastYears));
									 } //closes prolificacy function  (shirt55)
 									
 
       				 				 }, //closes performanceStats (shirt55)
       				 		"playerGradeLevel" : {
       				 							"dribbling": 8,
       				 							"clubLoyalty": 2,
       				 							"ballControl": 6,
       				 							"speed": 9,
       				 							"gradePlayer": function () {
       				 							var grade = (this.dribbling + this.clubLoyalty + this.ballControl + this.speed)/(playerGradeLevel.length - 1);
       				 							return grade;
       				 										 }//closes gradePlayer function (shirt55)
       				 							
       				 							}//closes playerGradeLevel (shirt55)
       		},//closes shirtNumber55
       		
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
       				  				  			 "year1":10,
       				  				  			 "year2":15,
       				  				 			 "year3":11,
       				  				 			 "year4":9},
       				  				  "prolificacy": function () {
									  var goalsLastYears = [21, 14, 25];
									  var totalGoals = 0;
									  var checkProlificacy = function(thisYearGoals, data){
									  
															 for (var i = 0; i < data.length; i++){
    														 totalGoals = totalGoals + data [i]; 

    														 console.log ("Goals scored in Year: " + ( i + 1 ) + ".  Season end prolificacy = " + 
                											 (totalGoals / (i + 1)));
        													 			if (i === 2) {
           													 			console.log("   After this year's season end: Prolificacy = " +
           													 			((totalGoals + thisYearGoals) / (i + 2)));
           													 			};//closes if statement
       								 						 };//closes for loop            
    								 	  };//closes checkProlificacy function (shirt84)
                					 	  return data;
                					      console.log ("Here is a summary of goals he scored in the last few years: " +checkProlificacy(10,goalsLastYears));
									 } //closes prolificacy function  (shirt84)
 									
 
       				 				 }, //closes performanceStats (shirt84)
       				 		"playerGradeLevel" : {
       				 							"dribbling": 2,
       				 							"clubLoyalty": 4,
       				 							"ballControl": 9,
       				 							"speed": 5,
       				 							"gradePlayer": function () {
       				 							var grade = (this.dribbling + this.clubLoyalty + this.ballControl + this.speed)/(playerGradeLevel.length - 1);
       				 							return grade;
       				 										 }//closes gradePlayer function (shirt84)
       				 							
       				 							}//closes playerGradeLevel (shirt84)
       		}//closes shirtNumber84
       		
       	};//closes playerStats
       				  


					
					
		}//closes playerStat property block
};