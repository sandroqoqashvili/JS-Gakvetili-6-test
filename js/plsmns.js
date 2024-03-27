function plsmns () {
    let number = document.getElementById("answer").innerHTML;
    console.log(number);
    
    if (number > 0) {
        document.getElementById("answer").innerHTML = '-'+number;
    }
   else{
        document.getElementById("answer").innerHTML = number;
        let pirvelisimbolo = number.slice(0,1);
        console.log(pirvelisimbolo);
        let darcheniliricxvi = number.slice(1, number.length);
        console.log(darcheniliricxvi);
    }
}