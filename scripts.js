 //variaveis sao 'caixas' onde guardo dados dentro dela
 
let chave = "0508f857511c453777564d41b4bfe576"

function colocaNaTela(dados){

   console.log(dados)
   document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
   document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
   document.querySelector(".nuvens").innerHTML = dados.weather[0].description
   document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
   document.querySelector(".umidade").innerHTML = "Umidade do ar: " + dados.main.humidity + "%"
}

async function buscarCidade(cidade){
   let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave
    + "&lang=pt_br" + "&units=metric")
   .then(resposta => resposta.json())

   colocaNaTela(dados)

}

 function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value //.value pouxa o dado que foi digitado no input

    buscarCidade(cidade)
 }



