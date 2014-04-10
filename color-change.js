$(document).ready(function(){

 function isHexColor(char){
        var hexcolor = true; 
        for (var i = 0; i<char.length; i++){
        
            if(char[i].match(/[a-fA-F0-9]/)){
                console.log("a-f");

            } else {
                hexcolor = false; 
            }
        }
        console.log(hexcolor);
        return hexcolor;

    }

document.getElementById("text-1").onkeyup = function getValue() {

        console.log("getValue was called");
        var $input = $("#text-1").val();
        var char;
        var isColor;
    
        if($input.length == 6 ){
            char = $input.split("");
            isColor = isHexColor(char);
            console.log(isColor);
            if((isColor == false) && !($("#error").length)){
                $('.container').append(
                    $('<p>')
                    .attr('id', 'error')
                    .text("please enter a valid hex color")
                    );
            } else if (isColor == true){
                $('body').css({"background-color" : "#" + $input});
            console.log($input);
            }
        } else {
            $("#error").remove();
        }
    } 
})
