function openCity(cityName, elmnt) {
    //Esconde todos os elementos com classe de "tabcontent"
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none"
    }

    //Mostra o conteudo da pagina especifica
    document.getElementById(cityName).style.display = "block";
}