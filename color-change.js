$(document).ready(function(){

 function isHexColor(char){
        var hexcolor = true; 
        for (var i = 0; i<char.length; i++){
        // if(isNaN(parseInt(char[i]))){
        
        //     console.log("not a number");
            if(char[i].match(/[a-fA-F0-9]/)){
                console.log("a-f");

            } else {
                hexcolor = false; 

            }
        }
            
        return hexcolor;

    }

document.getElementById("text-1").onkeyup = function getValue() {

        console.log("getValue was called");
        var $input = $("#text-1").val();
        console.log($input);
        console.log($input.length);
        // var $count = ($input.length + 1);
        // console.log($count);

        if($input.length ==6){
            // alert("6 has been reached");
            var char = $input.split("");
            var isColor = isHexColor(char);
            console.log(isColor);
            if(isColor == false){
                alert("not a valid hex color");
            } else {
                $('body').css({"background-color" : "#" + $input});
            console.log($input);
            }

          
            
        } 
    } 





   


})
