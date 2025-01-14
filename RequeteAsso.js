function BuildResultAsso(elementID, handicap_asso, dep) {
	
	 //API Associations
	var result_Assos ;
	fetch('https://api.opendata.onisep.fr/api/1.0/dataset/57e1376b0f7fb/search?size=100')
	.then(function(response) {
		response.json()
		.then(function(data) {
			console.log('Request successful asso'); 
			result_Assos=data;

			// Récupérer Assos :
			var nom_asso= new Array;
			var adresse_asso= new Array;
			var cp_asso= new Array;
			var commune_asso= new Array;
			var lien_asso= new Array;
			var text_asso="";
			
			//Récupère le resultat
				for (i = 0; i < result_Assos.results.length; i++){
					if (result_Assos.results[i]["handicap_principal"] == handicap_asso && result_Assos.results[i]["departement"] == dep){
						nom_asso.push(result_Assos.results[i]["nom"]);
					}		
				}	
			
			// Création du tableau 
			if (nom_asso.length > 0){
			titre = document.getElementById("tablo_present_asso");
			titre.removeAttribute("hidden");
			titre = document.getElementById("not_tablo_asso");
			titre.hidden = true;
			tableauHTML = document.getElementById("tab_asso");
			tableauHTML.hidden = false;
			text_asso += "<tr><th>Nom</th><th>Adresse</th><th>Code Postal</th><th>Commune</th><th>Site Web</th></tr>";
			for (i = 0; i < result_Assos.results.length; i++) {
				if (result_Assos.results[i]["departement"] ==dep && result_Assos.results[i]["handicap_principal"] ==handicap_asso) {
					text_asso=text_asso+ "<tr>"+"<td>"+result_Assos.results[i]["nom"]+"</td>" +"<td>"+result_Assos.results[i]["adresse"]+"</td>" +"<td>"+result_Assos.results[i]["cp"]+"</td>" +"<td>"+result_Assos.results[i]["commune"]+"</td>" +"<td>"+ result_Assos.results[i]["lien_site_onisepfr"]+"</td>" +"</tr>";
				}
			};
			var associations = document.getElementById(elementID);
			associations.innerHTML=text_asso;
			}
			else {
			titre = document.getElementById("not_tablo_asso");
			titre.removeAttribute("hidden");
			titre = document.getElementById("tablo_present_asso");
			titre.hidden = true;
			tableauHTML = document.getElementById(elementID);
			tableauHTML.hidden = true;
			text_asso += "<tr><th>Nom</th><th>Adresse</th><th>Code Postal</th><th>Commune</th><th>Site Web</th></tr>";
			tableauHTML.innerHTML=text_asso;	
		}
		var tableauHTML = document.getElementById(elementID);
			tableauHTML.innerHTML=text_asso;		
	})})
}