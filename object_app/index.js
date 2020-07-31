$(function() {
	$(".submit").on("click", function() {
      let nameUser = $("#name").val();
      let ageUser = $("#age").val();
      let profesionUser = $("#occupation").val();
      let countryUser = $("#country").val();

    function User(name, age, profesion, country) {
       this.name = name;
       this.age = age;
       this.occupation = profesion;
       this.country = country;
       this.changeCountry = function() {
       	this.country = "USA";
       	};
    }

    let forbidenWord = ["fuck", "dick", "ass", "asshole"];
    let forbidenString = forbidenWord.join(" ");
    console.log(forbidenString);
    let User1 = new User(nameUser, ageUser, profesionUser, countryUser);
    User1.changeCountry();

    if(nameUser !== "" && ageUser !== "" && profesionUser !== "" && countryUser !== "" ) {
      if(forbidenWord.indexOf(nameUser.toLowerCase()) < 0 && forbidenWord.indexOf(ageUser.toLowerCase()) < 0 && forbidenWord.indexOf(profesionUser.toLowerCase()) < 0) {
      	if(ageUser > 18) {
      	$(".result").remove();
      	$(".userForm").append('<p class="result"></p>');
        $(".result").append(User1.name+" is "+User1.age+" old. He/She is a "+User1.occupation+" and is from "+User1.country+".");
        

        }else {
        $(".result").remove();
      	$(".userForm").append('<p class="result"></p>');
          $(".result").append("You are not allow to use this website.");	
        }
       }else {
       	$(".result").remove();
      	$(".userForm").append('<p class="result"></p>');
      	$(".result").append("Please use a decent language.");
      }
    }else {
    	$(".result").remove();
      	$(".userForm").append('<p class="result"></p>');
      $(".result").append("Field is empty.");	
    }
  })
})

 
  
