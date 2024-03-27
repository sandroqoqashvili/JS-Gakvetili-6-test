function operator(op){
    console.log(op.innerHTML);
    let gamosaxuleba = document.getElementById("answer").innerHTML;
    console.log(gamosaxuleba);

    let bolo = gamosaxuleba[gamosaxuleba.length -1];
    let boloindex = gamosaxuleba.length -1;
    console.log(bolo);

    if (bolo == '%' || bolo == '×' || bolo == '÷' || bolo == '−' || bolo == '+') {
        let ricxvi = gamosaxuleba.slice(0,bolo);
        let operatori = gamosaxuleba.slice(boloindex, boloindex+1)
    }
    gamosaxuleba += op.innerHTML;

    document.getElementById("answer").innerHTML = gamosaxuleba;

}