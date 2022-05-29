let button = document.getElementById("btn");

button.addEventListener("click", function() {
    const gram = parseInt(document.getElementById("grams").value);
    const type = document.getElementById("type").value;

    if(grams === "" || isNaN(gram)){
        // document.getElementById("grams").focus();
        document.getElementById("error").innerHTML = "please provide a valid gram";
        // document.getElementById("output").innerHTML = ""
    }else{
        document.getElementById("error").innerHTML = "";
        switch(type){
            case "Pounds":
                convert_pounds(gram);
                break;
                
                case "Kilograms":
                    convert_Kilograms(gram);
                    break;

                    case "Ounces":
                        convert_Ounces(gram);
                        break;

                        case "Stones":
                            convert_Stones(gram);
                            break;
                            default:
                                alert("Error");
        }
        function convert_pounds(gram){
            let rate = 0.0022;
            pounds = gram * rate;
            document.getElementById("output").innerHTML =
            gram + " gram = " + pounds.toFixed(3) + "pounds.";
        } 

        function convert_Kilograms(gram){
            let rate = 0.001;
            Kilograms = gram * rate;
            document.getElementById("output").innerHTML =
            gram + " gram = " + Kilograms.toFixed(3) + "Kilograms.";
        }

        function convert_Ounces(gram){
            let rate = 0.035274;
            Ounces = gram * rate;
            document.getElementById("output").innerHTML =
            gram + " gram = " + Ounces.toFixed(3) + "Ounces.";
        }

        function convert_Stones(gram){
            let rate = 0.00015747;
            Stones = gram * rate;
            document.getElementById("output").innerHTML =
            gram + " gram = " + Stones.toFixed(3) + "Stones.";
        }
    }
});