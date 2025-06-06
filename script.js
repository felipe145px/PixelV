//selecionando elementos html
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById ("icone-x")

function  abreFechaMenu(){

    //se o menu esta fechado ele vai executar alguma coisa
if(menu.classList.contains("menu-fechado")){
    // abrir menu
menu.classList.remove("menu-fechado")
//Mostrar icone x
iconeX.style.display = "inline"
// esconder icone barras
iconeBarras.style.display ="none"
}
else{
    //fechar o menu
    menu.classList.add("menu-fechado")
    //esconder o icone x
    iconeX.style.display = "none"
    //mostrar icone barra
    iconeBarras.style.display = "inline"
}

}

onresize = () => {
    menu.classList.remove("menu-fechado")

    //mostra o icone x
    iconeX.style.display = "inline"
    // esconda o icone barras
    iconeBarras.style.display = "none"
}