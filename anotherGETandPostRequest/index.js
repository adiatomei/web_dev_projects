(function() {
	$(".submit").click(function() {
		const link = "https://api.datamuse.com/words?";
		const querryParam = "rel_rhy";
		const Paramtopic  = '&topics='

		const word = $("#word").val();
		const topic =$("#topic").val();

		const xhr = new XMLHttpRequest();
		xhr.type = "json";
		xhr.onreadystatechange = function() {
			if(xhr.readyState = XMLHttpRequest.DONE) {
				const response = JSON.parse(xhr.response);
				console.log(response);
				show(response);

			}
		} 

		xhr.open("GET", link+querryParam+word+Paramtopic+topic, true);
		xhr.send();
		function show(data) {
		for(var i = 0; i < 5; i++) {
		var obj = ("<p>The "+word+" is "+ data[i].word+"</p>");
		$(".contentBox").append(obj);
	  }
	}
		});

	

})();