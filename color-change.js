    
function getValue() {
        var $input = $("#text-1").val();
        console.log($input.length);
        // var $count = ($input.length + 1);
        // console.log($count);
        
        if($input.length ==6){
            // alert("6 has been reached");
            var char = $input.split("");
            for (var i = 0; i<char.length; i++){
                if(isNaN(parseInt(char[i]))){
                    console.log("not a number");
                    if(char[i].match(/[a-fA-F]/)){
                        console.log("a-f");
                    } else {
                        alert("please enter a valid hexcolor"); 
                    }
                }
            }
            $('body').css({"background-color" : "#" + $input});
            console.log($input);
        } 
    } 
// $(document).ready(function (){
//     console.log("ready");
//     function getValue() {
//         var $input = $("#text-1").val();
//         if($input.length==6){
//             $('body').css({"background-color" : "#" + $input});
//         }
//     }

//     // $("#text-1").keypress(getValue());

// });

// var char = $input.split("");

// for (var i = 0; i<char.length; i++){
//     if(isNAN(parseInt(char[i]))){
//         console.log("not a number");
//     }
// }