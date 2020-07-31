(function() {
	var listEmployee = [{firstName: 'Ionescu', lastName: 'Raluca', salary: 12000}, 
	                    {firstName: 'Georgescu', lastName: 'Filip', salary: 1400},
	                    {firstName: 'Dumitrescu', lastName: 'Constantin', salary: 12000},
	                    {firstName: 'Iliescu', lastName: 'Ioan', salary: 1800},
	                    {firstName: 'Musatescu', lastName: 'Teodora', salary: 1100},
	                    {firstName: 'Pintilie', lastName: 'Emanuel', salary: 2000},
	                    {firstName: 'Tandareanu', lastName: 'Dumitru', salary: 10000},
	                    {firstName: 'Pintilie', lastName: 'Cosmin', salary: 30000}];
	function list() {
		for(var i = 0; i < listEmployee.length; i++) {
			var obj = ('<tbody class="color remove"><tr><th scope="row">'+(i+1)+'</th><td>'+listEmployee[i].firstName+'</td><td>'+listEmployee[i].lastName+'</td><td>'+listEmployee[i].salary+'</td></tr></tbody>');
			$('.boxTable').append(obj);
		}
	}
    list();
    
	$(".buton").click(function() {
		idClass = this.getAttribute("class")
		if(idClass === "btn btn-secondary buton firstNB") {
			$(".remove").remove();
			listEmployee.sort(function(a,b) {
				var fnameA = a.firstName.toUpperCase();
				var fnameB = b.firstName.toUpperCase();
				if (fnameA < fnameB) {
					return -1;
				} 
                if (fnameA > fnameB) {
                	return 1;
                }
                return 0;
			})
			list();
			
		}else if(idClass === "btn btn-secondary buton lastNB"){
			listEmployee.sort(function(a,b) {
				$(".remove").remove();
				var lnameA = a.lastName.toUpperCase();
				var lnameB = b.lastName.toUpperCase();
				if (lnameA < lnameB) {
					return -1;
				} 
                if (lnameA > lnameB) {
                	return 1;
                }
                return 0;
			})
			list();

		}else if(idClass === "btn btn-secondary buton salaryB"){
            $(".remove").remove();
            listEmployee.sort(function (a, b) {
                return a.salary - b.salary;
            })
            list();
		}
	})



})();