(function () {
   $("#generate").click(function() {
   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   var scharacList = '!,'+'",'+ '#,'+"',"+"],"+'$%&()*+,-./:;<=>?@[^_`{|}~]'.split('');
   var length = $("#length").val();
   var characN = $("#sCharacter").val();
   var numbersN = $("#numbers").val();
   var letterN = length - characN - numbersN;
   var password = [];
   var Nloop = 1
   var randomPass = [];

   
   console.log(randomPass);

   function passwordMake() {
     for(var i=0; i < characN; i++) {
       var one = Math.floor(Math.random() * scharacList.length);
       password.push(scharacList[one]);
       
     }

     for (var i = 0; i < numbersN; i++) {
     	var one = Math.floor(Math.random() * 10);
     	password.push(one);
     }

     for(var i = 0; i < letterN; i++) {
     	var one = Math.floor(Math.random() * alphabet.length)
        password.push(alphabet[one]);
     }
      
     for(var i = 0; i < Nloop; i++) {
     	if(password.length > 0) {
        var one = Math.floor(Math.random() * password.length) 
        randomPass.push(password[one]);
        password.splice(one, 1);
        Nloop += 1;
        }
     }
   
   }
   passwordMake();
   
  function passwordList() {
    $(".removeBox").remove()
    $(".settingBox").append("<p id='result'>Your password is: </p><br><br><p id='pass'>"+randomPass.join("")+"</p>");
    
  }
  passwordList();

    function buttonFuntction() {
  	  $(".settingBox").append("<button id='regenerate'>Reload</button>");
  	  $("#regenerate").click(function() {
  		
        password.length = 0;
  	    randomPass.splice(0,randomPass.length);
  		passwordMake();
  	    $("#pass").replaceWith("<p id='pass'>"+randomPass.join("")+"</p>")
  	})
  }

  buttonFuntction();
   

   })



})()