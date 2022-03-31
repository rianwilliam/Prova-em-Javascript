
q1certo_a = false
q1errado_b = false
q1errado_c = false
q1errado_d = false

q2errado_a = false
q2errado_b = false
q2certo_c = false
q2errado_d = false

q3errado_a = false
q3errado_b = false
q3certo_c = false
q3errado_d = false

q4certo_a = false
q4errado_b = false
q4errado_c = false
q4errado_d = false

pontos = 0


//questao1//
function q1oa() {
    q1certo_a = true;
    q1errado_b = false
    q1errado_c = false
    q1errado_d= false;
}
function q1ob() {
    q1errado_b = true;
    q1certo_a = false;
    q1errado_c = false;
    q1errado_d = false;
}
function q1oc() {
    q1errado_c = true;
    q1certo_a = false;
     q1errado_b = false;
      q1errado_d = false;
}
function q1od() {
    q1errado_d = true;
    q1certo_a = false;
    q1errado_b = false;
    q1errado_c = false;
}

//questao2//
function q2oa() {
    q2errado_a = true;
    q2errado_b = false;
    q2certo_c = false;
    q2errado_d = false;
}
function q2ob() {
    q2errado_b = true;
    q2errado_a = false;
    q2certo_c = false;
    q2errado_d = false;
}
function q2oc() {
    q2certo_c = true;
    q2errado_a = false;
    q2errado_b = false;
    q2errado_d = false
}
function q2od() {
    q2errado_d = true;
    q2errado_a = false;
    q2errado_b = false;
    q2certo_c = false;
}

//questao3//
function q3oa() {
    q3errado_a = true;
    q3errado_b = false;
    q3certo_c = false;
    q3errado_d = false;
}
function q3ob() {
    q3errado_b = true;
    q3errado_a = false;
    q3certo_c = false;
    q3errado_d = false;
}
function q3oc() {
    q3certo_c = true;
    q3errado_a = false;
    q3errado_b = false;
    q3errado_d = false
}
function q3od() {
    q3errado_d = true;
    q3errado_a = false;
    q3errado_b = false;
    q3certo_c = false;
}

//questao4//

function q4oa() {
    q4certo_a = true;
    q4errado_b = false;
    q4errado_c = false;
    q4errado_d = false
}
function q4ob() {
    q4errado_b = true;
    q4certo_a = false;
    q4errado_c = false;
    q4errado_d = false;
}
function q4oc() {
    q4errado_c = true;
    q4certo_a = false;
    q4errado_b = false;
    q4errado_d = false;
}
function q4od() {
    q4errado_d = true;
    q4certo_a = false;
    q4errado_b = false;
    q4errado_c = false;
}

function pontuacao() {    
    if(pontos >= 7) {
        document.getElementById('passou').style.visibility = 'visible';
        document.getElementById('passou').innerHTML = 'Você Passou' + ' ' + pontos + "/10"
    }
    else document.getElementById('reprovou').style.visibility = 'visible';
    document.getElementById('reprovou').innerHTML = 'Você Reprovou' + ' ' + pontos + "/10"
}

function corpontuacao() {
    if (pontos >= 7) {
        document.getElementById('passou').style.color = '#00FF00'
    }
    else document.getElementById('reprovou').style.color = 'red'
}

document.getElementById('refazer').style.visibility = 'hidden';
document.getElementById('enviar').style.visibility = 'visible';
document.getElementById('passou').style.visibility = 'hidden';
document.getElementById('reprovou').style.visibility = 'hidden';


function refazer() {
    location.reload()
}

function enviar() {
    document.getElementById('enviar').innerHTML;
    //questao1//
    if (q1certo_a == true) {
        document.getElementById('verdeq1').style.color  = "#00FF00";
        pontos += 3;
    }
    if (q1errado_b == true) {
        document.getElementById('vermelhoq1b').style.color = "red";
    }
    if (q1errado_c == true) {
        document.getElementById('vermelhoq1c').style.color = 'red';
    }
    if (q1errado_d == true) {
        document.getElementById('vermelhoq1d').style.color = 'red';
    }
    //questao2//
    if (q2errado_a == true) {
        document.getElementById('vermelhoq2a').style.color = 'red';
    }
    if (q2errado_b == true) {
        document.getElementById('vermelhoq2b').style.color = 'red';
    }
    if (q2certo_c == true) {
        document.getElementById('verdeq2').style.color = '#00FF00';
        pontos += 3;
    }
    if (q2errado_d == true) {
        document.getElementById('vermelhoq2d').style.color = 'red';
    }
    //questao3//
    if (q3errado_a == true) {
        document.getElementById('vermelhoq3a').style.color = 'red';
    }
    if (q3errado_b == true) {
        document.getElementById('vermelhoq3b').style.color = 'red';
    }
    if (q3certo_c == true) {
        document.getElementById('verdeq3').style.color = '#00FF00';
        pontos += 2;
    }
    if (q3errado_d == true) {
        document.getElementById('vermelhoq3d').style.color = 'red';
    }
    //questao4//
    if (q4certo_a == true) {
        document.getElementById('verdeq4').style.color = '#00FF00';
        pontos += 2;
    }
    if (q4errado_b == true) {
        document.getElementById('vermelhoq4b').style.color = 'red';
    }
    if (q4errado_c == true) {
        document.getElementById('vermelhoq4c').style.color = 'red';
    }
    if (q4errado_d == true) {
        document.getElementById('vermelhoq4d').style.color = 'red';
    }

    document.querySelector(".desabilitar1").disabled = true
    document.querySelector(".desabilitar2").disabled = true
    document.querySelector(".desabilitar3").disabled = true
    document.querySelector(".desabilitar4").disabled = true
    document.querySelector(".desabilitar5").disabled = true
    document.querySelector(".desabilitar6").disabled = true
    document.querySelector(".desabilitar7").disabled = true
    document.querySelector(".desabilitar8").disabled = true
    document.querySelector(".desabilitar9").disabled = true
    document.querySelector(".desabilitar10").disabled = true
    document.querySelector(".desabilitar11").disabled = true
    document.querySelector(".desabilitar12").disabled = true
    document.querySelector(".desabilitar13").disabled = true
    document.querySelector(".desabilitar14").disabled = true
    document.querySelector(".desabilitar15").disabled = true
    document.querySelector(".desabilitar16").disabled = true
    
    document.getElementById('refazer').style.visibility = 'visible'
    document.getElementById('enviar').style.visibility = 'hidden'
    
    pontuacao()
    corpontuacao()
}
