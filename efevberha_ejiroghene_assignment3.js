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
		// my method procedure for surplusPlayers (obj1)
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
		// my properties for surplusPlayers object (obj1)
		var performanceStats;
		var prolificacy = checkProlificacy;
		playerStats = {
	   				"shirtNumber": 49,
	   				"name": "Sunday Mba",
	  				"position": "midfielder",
	  				"age": 24,
	  				"height": "1.94m",
	   				"isPlayerInjured": false,
       				"performanceStats": {
       				  				  "assistsLastYears":{
       				  				  			 "year1":6,
       				  				  			 "year2":11,
       				  				 			 "year3":9,
       				  				 			 "year4":3},
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
    								 	  };//closes checkProlificacy function
                					 	  return data;
                					      console.log ("Here is a summary of goals he scored in the last few years: " +checkProlificacy(3,goalsLastYears));
									 } //closes prolificacy function  
 									
 
       				 				 } //closes performanceStats
       				};//closes playerStats
       				  


					
					
		}
};