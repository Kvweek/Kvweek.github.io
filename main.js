////////////////////////////////////
// Inschrijf avond KVW            //
////////////////////////////////////
Parse.initialize("4pAG568039x8dBBuekW2JvZhZahlImuqWpXHjums", "NlLcCGaYN7QGVzQUScXcRjj26QnVJT6O8iUU1mJH");
    
var bouwgeinDB = Parse.Object.extend("BouwgeinKinderen");
var bouwgeinKind = new bouwgeinDB();
var jeugdlandDB = Parse.Object.extend("JeugdlandKinderen");
var jeugdlandKind = new jeugdlandDB();

var temporaryBank = new Object();

$(document).ready(function(){
	temporaryBank = new Object();
});

$(document).ready(function(){
	$("#submit").click(function(){
		var answer1 = confirm("Wilt u nog meer kinderen inschrijven ? Zo ja, dan worden de basis gegevens gekopieërd. (e-mail, telefoon, etc)");
		
		if(answer1){
			var answer2 = confirm("Weet u zeker dat alle gegevens kloppen ?");
			
			if(answer2) {
				bouwgeinKind.save(temporaryBank, {
			   		success: function(object) {
			   			alert("Alle gegevens zijn opgeslagen, U kunt nu verder gaan.");
			   			temporaryBank.geslacht = $("input[name=sex]:checked").val();
					},
		   			error: function(model, error) {
		       			alert("Error");
		   			}
				})
			};
		}
		
		else {
			var answer2 = confirm("Weet u zeker dat alle gegevens kloppen ?");
			
			if(answer2) {
				bouwgeinKind.save(temporaryBank, {
			   		success: function(object) {
			   			alert("Alle gegevens zijn opgeslagen, bedankt.");
			   			temporaryBank.geslacht = $("input[name=sex]:checked").val();
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
