(function() {
	$(".action").click(function() {
		//URL
		var keyId ="190713242fa94030bd5f2e6d59c2b6f1";
		var url="https://api.rebrandly.com/v1/links";
		
		//Inputs
		var inputField= $(".inp").val();
		console.log(inputField);
		var result= $('.result');
		//POST Request
		var data = JSON.stringify({destination: inputField});
        var xhr = new XMLHttpRequest();
        xhr.responseType="json";
        xhr.onreadystatechange = function() {
        	if(xhr.readyState === XMLHttpRequest.DONE) {
        		var response = xhr.response;
        		console.log(response);
        		rend(response);
        	}
        }
        xhr.open("POST", url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.setRequestHeader('apikey', keyId);
        xhr.send(data);


        function rend(info) {
        	$(".remove").remove();
            var content = ('<p class="remove">The short URL is: ' +info.shortUrl+'.</p>');
            result.append(content);
        }
	})
})();