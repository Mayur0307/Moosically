var TOKEN = "48dd53ad1bf14e16afd24b29117f3e57"

// This method is going to be used to send all the requests
function make_request(method, url, data, callback){
	$.ajax({
		async: true, 
		crossDomain: true, 
		url: url, 
		method: method, 
		headers: {
			token: TOKEN
		}, 
		data: data
	}).done(function (response) {
		callback(response)
	});
}

make_request("POST", "https://api.luxand.cloud/photo/emotions", {"photo": "https://dashboard.luxand.cloud/img/angelina-and-brad.jpg"}, function(response){
	console.log(response)
})