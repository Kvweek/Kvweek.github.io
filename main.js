////////////////////////////////////
// Inschrijf avond KVW            //
////////////////////////////////////
Parse.initialize("4pAG568039x8dBBuekW2JvZhZahlImuqWpXHjums", "NlLcCGaYN7QGVzQUScXcRjj26QnVJT6O8iUU1mJH");
    
var inschrijfDb = Parse.Object.extend("inschrijfDb");
var data = new inschrijfDb();
var bank = new Object();

$(document).ready(function(){
	bank = new Object();
	
});

$(document).ready(function(){
	$("#submit").on('click', function(){
		data.save(bank, {
		   	success: function(object) {
		   		alert("Succes");
		  	},
	   		error: function(model, error) {
	       		alert("Error");
	   		}
		})
	})
});
