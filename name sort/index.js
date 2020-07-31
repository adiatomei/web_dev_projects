(function() {
	//Core Code
    var listName = ["Paun, Iulian", "Aparaschivei, Gheorghe", "Mina, Daniel", "Saut, Georgiana", "Panten, Iulian", "Cozma, Florin", "Mintea, Cosmina", "Pintea, Suzana","Minculescu Ioan"];
    function showList(nData) {
    	for(var n = 0; n < nData.length; n++){
    	    var list = ("<div class='remove'><tr><td>"+nData[n]+"</td></tr></div>");
    	    $("#Names").append(list);
      }
    }
    showList(listName);
   //Buttons Code
   $(".Lan").click(function() {
   	var codeId = this.getAttribute("class");
   	var asc = listName.sort();
    function showOrderList() {
     	if(codeId === "btn btn-secondary Lan Asc") {
           $(".remove").remove();
           showList(asc);
        }else if(codeId === "btn btn-secondary Lan Desc") {
           $(".remove").remove();
       	   showList(asc.reverse());
     	}else if (codeId === "btn btn-secondary Lan Non") {
     	   $(".remove").remove();
           var newList = [];
           for(var i = listName.length; i > 0; i--) {
             var random = Math.floor(Math.random() * listName.length);
             newList.push(listName[random]);
             listName.splice(random, 1)
             
           }
           
           showList(newList);
           listName = newList;
     	}

     }
     showOrderList();	
   })

    
})()