function BuildResultAsso(elementID, handicap_asso, dep) {
	
	 //API Associations
	var result_Assos ;
	fetch('https://api.opendata.onisep.fr/api/1.0/dataset/57e1376b0f7fb/search?size=100')
	.then(function(response) {
		response.json()
		.then(function(data) {
			console.log('Request successful'); 
			result_Assos=data;
				
			// Récupérer Assos :
			var nom_asso= new Array;
			var commune_asso= new Array;
			var lien_asso= new Array;
			var text_asso="";
			text_asso = text_asso + "<tr><th>Nom</th><th>Commune</th><th>Site web</th></tr>";
				
			for (i = 0; i < result_Assos.results.length; i++) {
				if (result_Assos.results[i]["departement"] ==dep && result_Assos.results[i]["handicap_principal"] ==handicap_asso) {
					text_asso=text_asso+ "<tr>"+"<td>"+result_Assos.results[i]["nom"]+"</td>" + "<td>"+result_Assos.results[i]["commune"]+"</td>" +"<td>"+result_Assos.results[i]["lien_site_onisepfr"]+"</td>" +"</tr>";
				}
			};
			var associations = document.getElementById(elementID);
			associations.innerHTML=text_asso;			
	})})
}