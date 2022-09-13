//inicio da logica

var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var CriaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    //1500
    var CriaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    //1000
    var CriaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
    //750
    var CriaMosquitoTempo = 750
}


function AjustaTamanhoPalcoJogo() {

    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

AjustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

    tempo -= 1

    if (tempo < 0) {

        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'

    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }



}, 1000)

function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()


        //console.log('elemento selecionado foi: v' + vidas)

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo_.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/imagens/coracao_vazio.png"

            vidas++

        }

    }




    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY



    console.log(posicaoX, posicaoY)


    //criando o elemento HTML

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/imagens/mosca.png'
    mosquito.className = TamanhoAleatorio() + ' ' + LadoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)




}

function TamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function LadoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }
}