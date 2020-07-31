(function() {
//Url Information

var url = 'https://api.datamuse.com/words?';
var firstParam = "rel_jjb=";
var additionalParams = '&topics='

$(".generate").click(function() {

// Inputs field

	var Boxword = $("#wordBox").val();
    var Boxtopic = $("#topicWord").val();
    
// Ajax request

    var fullUrl = `${url}${firstParam}${Boxword}${additionalParams}${Boxtopic}`;
	var xhr = new XMLHttpRequest();
	xhr.responseType = "json";
	xhr.onreadystatechange = function() {
		if(xhr.readyState === XMLHttpRequest.DONE) {
			var resp = xhr.response;
			show(resp);
			
		}
	}
	xhr.open("GET", fullUrl, true);
	xhr.send();

  // List function  

	function show(data) {
	var text = $(".text");
	var res = $(".remove");
    res.remove();
    var phrase = ("<div class='remove'><p class='result'>Related words with " + Boxword + " are: </p><il class='list'></ul></div>");
    text.append(phrase);
    for (var i = 0; i < 15; i++) {
		$(".list").append("<li>" + data[i].word + "</li>");
	}
	

  }
});

})()