////////////////////////////////////
// Inschrijf avond KVW            //
////////////////////////////////////
Parse.initialize("4pAG568039x8dBBuekW2JvZhZahlImuqWpXHjums", "NlLcCGaYN7QGVzQUScXcRjj26QnVJT6O8iUU1mJH");
    
var bouwgeinDB = Parse.Object.extend("BouwgeinKinderen");
var bouwgeinKind = new bouwgeinDB();
var bouwgeinKDB = Parse.Object.extend("BouwgeinKleuters");
var bouwgeinKleuters = new bouwgeinKDB();
var jeugdlandDB = Parse.Object.extend("JeugdlandKinderen");
var jeugdlandKind = new jeugdlandDB();
var jeugdlandKDB = Parse.Object.extend("JeugdlandKleuters");
var jeugdlandKleuters = new jeugdlandKDB();

var temporaryBank = new Object();

$(document).ready(function(){
	$("#bvoornaam").val(temporaryBank.voornaam);
	
});

$(document).ready(function(){
	$('#bkleuter').on('click', function(){
		if($(this).attr("value")=="bkleuter"){
			$('#bddd').toggle();
			$('#bdddag').toggle();
		}
	});
});

$(document).ready(function(){
	$('#jkleuter').on('click', function(){
		if($(this).attr("value")=="jkleuter"){
			$('#jddd').toggle();
			$('#jdddag').toggle();
		}
	});
});

$(document).ready(function(){
	$("#empty").click(function(){
		window.location.reload();
	})
});

function opslagBouwgein() {
	temporaryBank.kleuter = $("#bkleuter:checked").val();
	temporaryBank.inschrijfnr = $("#binschrijfnr").val();
   	temporaryBank.voornaam = $("#bvoornaam").val();
    temporaryBank.achternaam = $("#bachternaam").val();
 	temporaryBank.geslacht = $("input[name=bsex]:checked").val();
 	temporaryBank.geboortedatum = $("#bdatum").val();
 	temporaryBank.email = $("#bemail").val();
 	temporaryBank.zwemdiploma = $("#bzwemdiploma").val();
 	temporaryBank.medicijnen = $("#bmedicijnen").val();
 	temporaryBank.telefoon = $("#btelefoon").val();
 	temporaryBank.telefoon2 = $("#btelefoon2").val();
 	temporaryBank.huisarts = $("#bhuisarts").val();
 	temporaryBank.bijzonderheden = $("#bbijzonder").val();
}


$(document).ready(function(){
	$("#submitbouwgein").click(function(){
		if($('#bkleuter').is(':checked')){
			var answer1 = confirm("Weet u zeker dat alle gegevens kloppen ?");
			if(answer1) {
				opslagBouwgein();
				bouwgeinKleuters.save(temporaryBank, {
			   		success: function(object) {
			   			alert("Alle gegevens zijn opgeslagen.");
			   			window.location.reload();
						},
		   			error: function(model, error) {
		       			alert("Error");
		   			}
				})
			};
		}
		else {
			var answer1 = confirm("Weet u zeker dat alle gegevens kloppen ?");
			if(answer1) {
				opslagBouwgein();
				temporaryBank.donderdag = $("bddd").val();
				bouwgeinKind.save(temporaryBank, {
			   		success: function(object) {
			   			alert("Alle gegevens zijn opgeslagen.");
			   			window.location.reload();
					},
			   		error: function(model, error) {
			       		alert("Error");
			       	}
				})
			};
		}	
	})
});


$(document).ready(function(){
	$("#submitjeugdland").click(function(){
		if($('#jkleuter').is(':checked')){
			var answer1 = confirm("Weet u zeker dat alle gegevens kloppen ?");
			if(answer1) {
				jeugdlandKleuters.save(temporaryBank, {
			   		success: function(object) {
			   			alert("Alle gegevens zijn opgeslagen.");
			   			temporaryBank.kleuter = $("#jkleuter").val();
			   			temporaryBank.inschrijfnr = $("#jinschrijfnr").val();
			   			temporaryBank.voornaam = $("#jvoornaam").val();
			   			temporaryBank.achternaam = $("#jachternaam").val();
			   			temporaryBank.geslacht = $("input[name=jsex]:checked").val();
			   			
						},
		   			error: function(model, error) {
		       			alert("Error");
		   			}
				})
			};
		}
		else {
			var answer1 = confirm("Weet u zeker dat alle gegevens kloppen ?");
			if(answer1) {
				jeugdlandKleuters.save(temporaryBank, {
			   		success: function(object) {
			   			alert("Alle gegevens zijn opgeslagen.");
			   			temporaryBank.kleuter = $("#jkleuter").val();
			   			temporaryBank.inschrijfnr = $("#jinschrijfnr").val();
			   			temporaryBank.voornaam = $("#jvoornaam").val();
			   			temporaryBank.achternaam = $("#jachternaam").val();
			   			temporaryBank.geslacht = $("input[name=jsex]:checked").val();
			   			
						},
		   			error: function(model, error) {
		       			alert("Error");
		   			}
				})
			};
		}
	})
});

