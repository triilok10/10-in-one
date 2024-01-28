{
    function sumNumber() {
        let number1 = parseFloat(document.getElementById("number1").value);
        let number2 = parseFloat(document.getElementById("number2").value);
        let number3 = parseFloat(document.getElementById("number3").value);
        let number4 = parseFloat(document.getElementById("number4").value);
    
        let totalSum = (number1 + number2 + number3 + number4);
        document.getElementById("sumOf").textContent = totalSum;
    }
    function sideSquare() {
        let side = parseFloat(document.getElementById("side1").value);
    
        let areaSquare = (side**2);
    
        document.getElementById("sumSquare").textContent= areaSquare;
        
    }
    // Js code for simple interest
    function simpleInterest() {

        let Principal = parseFloat(document.getElementById("principle1").value);
        let Rate = parseFloat(document.getElementById("rate1").value);
        let Time = parseFloat(document.getElementById("time1").value);
        let totalInterest = (Principal*Rate*Time)/100;
    
    document.getElementById("simAmount").textContent = totalInterest.toFixed(2);
    }
    function myCompound(){
        let principal = parseInt(document.getElementById("principle2").value);
        let rate = parseFloat(document.getElementById("rate2").value);
        let time = parseFloat(document.getElementById("time2").value);

       
        let Amount1 = principal * ((1+rate/100) ** time);
        let compoundInterest = Amount1-principal;
        document.getElementById("compoundAmount").textContent = compoundInterest.toFixed(2);
    }
    function myCSA(){
        let radius = parseFloat(document.getElementById("radi").value);
        let height = parseFloat(document.getElementById("height12").value);

        let totalCSA = (3.14*radius*height);
        document.getElementById("csaCone").textContent = totalCSA.toFixed(2);
    }
    function tsaCone() {
        let radius = parseFloat(document.getElementById("radius1").value);
        let slantheight = parseFloat(document.getElementById("Slantheight1").value);

        let areaTSA = (3.14 * radius *( radius + slantheight));

        document.getElementById("tsaAreaa").textContent = areaTSA.toFixed(2);
    }
    function triangleArea() {

        let base = parseFloat(document.getElementById("basee").value);
        let height = parseFloat(document.getElementById("heightt").value);

        let triArea = (base*height)/2;
        
        document.getElementById("areaa").textContent = triArea.toFixed(2);
    }
    function areaHexagon() {
        let side = parseFloat(document.getElementById("side").value);
        let resulth = (3*(3**(1/2))* (side**2))/2;
        document.getElementById("areaHex").textContent = resulth.toFixed(2);
        
    }
    function areaPgram() {
        let base = parseFloat(document.getElementById("base1p").value);
        let height = parseFloat(document.getElementById("height1p").value);

        let resultp = (base * height );
        document.getElementById("arGram").textContent = resultp;
    }
    function clearDisplay() {
        //Sum of the four numbers
        document.getElementById("sumOf").innerHTML=0;   
         document.getElementById("number1").value = "";
         document.getElementById("number2").value = "";
        document.getElementById("number3").value = "";
        document.getElementById("number4").value = "";
        // square
        document.getElementById("sumSquare").innerHTML=0; 
        document.getElementById("side1").value = "";
        //Simple Interest Calculator
        document.getElementById("simAmount").innerHTML=0;
        document.getElementById("principle1").value = "";
        document.getElementById("rate1").value = "";
        document.getElementById("time1").value = "";
        //Compound Interest Calculator
        document.getElementById("compoundAmount").innerHTML=0;
        document.getElementById("principle2").value = "";
        document.getElementById("rate2").value = "";
        document.getElementById("time2").value = "";
        //Curved Surface Area of the cone
        document.getElementById("csaCone").innerHTML=0;
        document.getElementById("radi").value = "";
        document.getElementById("height12").value = "";
        //Total Surface Area of the Cone
        document.getElementById("tsaAreaa").innerHTML=0;
        document.getElementById("radius1").value = "";
        document.getElementById("Slantheight1").value = "";
        //Area of the Trianglle
        document.getElementById("areaa").innerHTML=0;
        document.getElementById("basee").value = "";
        document.getElementById("heightt").value = "";
        //Area of the Hexagon
        document.getElementById("areaHex").innerHTML=0;
        document.getElementById("side").value = "";
        //Area of the Parellogram
        document.getElementById("arGram").innerHTML=0;
        document.getElementById("basep").value = "";
        document.getElementById("height1p").value = "";
    }
    function myLoad() {
        alert("Welcome to My 10 in 1 Calculator!")
    }
    
    
}