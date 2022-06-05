

const Side = Number($(".Side").text);

const side1 = 5;
const side2 = 6;
const side3 = 7;

const myRadius = 4;
const pi = 3.141592653589793238;


$(document).ready(function(){
    $("#Square").on("click",function(diagonal){
        const Diagonal = 9*(Math.sqrt(2));
        $("#Resultbox").text(Diagonal).css("color","green");
        $("#Resultbox").css("font-size","3rem");
        $("#Resultbox").slideToggle();
       })
     
    $(".triangle").on("click",function(Areatriangle){
        const prem = (side1 + side2 + side3)/2 ;
        const areatri = Math.sqrt(prem*(prem-side1)*(prem-side2)*(prem-side3));
        $("#Resultbox2").text(areatri).css("color","green");
        $("#Resultbox2").css("font-size","3rem");
        $("#Resultbox2").slideToggle();
    })
    $("#circumference").on("click",function(circumcircle){
       const circumf = 2*pi*myRadius ;
       $("#circumh4").text(circumf).css("color","green");
       $("#circumh4").css("font-size","3rem");
       $("#circumh4").slideToggle();
    })
    $("#SurfaceArea").on("click",function(surfacecircle){
        const surfs = pi*(myRadius*myRadius); 
        $("#surfaceh4").text(surfs).css("color","green");
        $("#surfaceh4").css("font-size","3rem");
        $("#surfaceh4").slideToggle();
    })
    
})

