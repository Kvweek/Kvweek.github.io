////////////////////////////////////
// Inschrijf avond KVW            //
////////////////////////////////////
Parse.initialize("4pAG568039x8dBBuekW2JvZhZahlImuqWpXHjums", "NlLcCGaYN7QGVzQUScXcRjj26QnVJT6O8iUU1mJH");
    
var inschrijfDb = Parse.Object.extend("inschrijfDb");
var data = new inschrijfDb();
var temporaryBank = new Object();

$(document).ready(function(){
	temporaryBank = new Object();
});

$(document).ready(function(){
	$("#submit").on('click', function(){
		var answer1 = confirm("Wilt u nog meer kinderen inschrijven ? 
			Zo ja, dan worden de basis gegevens gekopieërd. (e-mail, telefoon, etc)");
		if(answer1){
			var answer2 = confirm("Weet u zeker dat alle gegevens kloppen ?");
			if(antwoord) {
				data.save(temporaryBank, {
			   		success: function(object) {
			   			alert("Alle gegevens zijn opgeslagen, bedankt.");
					},
		   			error: function(model, error) {
		       			alert("Error");
		   			}
				})
			};
		}
		else {
			var answer2 = confirm("Weet u zeker dat alle gegevens kloppen ?");
			if(antwoord) {
				data.save(temporaryBank, {
			   		success: function(object) {
			   			alert("Alle gegevens zijn opgeslagen, bedankt.");
			   			window.location.reload(true);
					},
		   			error: function(model, error) {
		       			alert("Error");
		   			}
				})
			};
		}
	})
});
