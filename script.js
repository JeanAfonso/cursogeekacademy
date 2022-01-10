function gritar() {
    alert("ahhhhhhhhhhh");
}

function perguntar() {
    var resposta = prompt("Qual seu nome?");
    alert("Olá " + resposta);
}

function mudar_texto() {
    var h1 = document.getElementsByTagName("h1");
    if(h1[0].innerText == "Geek University") {
        h1[0].innerText = "Evolua seu lado geek!";
    }else {
    h1[0].innerText = "Geek University";
    }
}

function incrementar() {
    var p1 = document.getElementById("p1");
    p1.innerText = parseInt(p1.innerText) + 1;
}