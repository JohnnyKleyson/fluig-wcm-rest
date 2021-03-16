/* var dados = [];
var loading = FLUIGC.loading(window);

loading.show();
$.ajax({
    async: true,
    type: "GET",
    contentType: "application/json",
    url: '/api/public/ecm/dataset/search?datasetId=totvsrn_followup_activities',
    success: function (res) {
        if (res && res.content.length > 0){   
            function compare(a,b) {
                if (parseInt(a.diaBase) < parseInt(b.diaBase))
                return -1;
                if ( parseInt(a.diaBase) > parseInt(b.diaBase))
                return 1;
                return 0;
            }            
            dados = res.content.sort(compare);
            console.log(dados)
        } 
    }
    
});

loading.hide();
var fechado = false;
$( function () {
    $('#slotCalendario').on('click', function() {
        renderDias(d.getMonth());
    });

    var d = new Date();
    renderDias(d.getMonth());
    var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    var mesAtual = document.getElementById('mes');
    var datames = d.getMonth();
    mesAtual.innerHTML = `${meses[datames]} ${d.getFullYear()} `;
    
    $('#ant').on('click', function() {
        if (datames >= 1) {
            datames--;
            mesAtual.innerHTML =`${meses[datames]} ${d.getFullYear()} `;
            renderDias(datames);
            
        } else {
            datames = 12;
            datames--;
            mesAtual.innerHTML = `${meses[datames]} ${d.getFullYear()} `;
            renderDias(datames);
            
        }
    });
    $('#prox').on('click', function() {
        if (datames < 11) {
            datames++;
            mesAtual.innerHTML = `${meses[datames]} ${d.getFullYear()} `;
            renderDias(datames);
        } else {
            datames = -1;
            datames++;
            mesAtual.innerHTML = `${meses[datames]} ${d.getFullYear()} `;
            renderDias(datames);
            
        }
    });

})
function renderDias(mes){
    var card_week1 = document.getElementById('calendar__week1');
    while(card_week1.firstChild) {
        card_week1.removeChild(card_week1.firstChild);
    }
    var card_week2 = document.getElementById('calendar__week2');
    while(card_week2.firstChild) {
        card_week2.removeChild(card_week2.firstChild);
    }
    var card_week3 = document.getElementById('calendar__week3');
    while(card_week3.firstChild) {
        card_week3.removeChild(card_week3.firstChild);
    }
    var card_week4 = document.getElementById('calendar__week4');
    while(card_week4.firstChild) {
        card_week4.removeChild(card_week4.firstChild);
    }
    var card_week5 = document.getElementById('calendar__week5');
    while(card_week5.firstChild) {
        card_week5.removeChild(card_week5.firstChild);
    }
    var dia = 1;

    if (mes === 0) {
        for (var  j = 1; j < 6; j ++){
            for ( var i= 0; i < 7; i++){
                var div = document.getElementById(`calendar__week${j}`);
                var dias = document.createElement('div');
                dias.className = 'calendar__day day';
                dias.id = `day${dia}`;
                if (dia > 31) {
                    dias.innerHTML = '';
                    div.appendChild(dias);
                }else {
                    dias.innerHTML = dia;
                    div.appendChild(dias) ;
                    atividades(dados, mes, dia);
                    dia++;
                }
            }
        }
    } else if (mes === 1) {
             
        var d = new Date();
        var year = d.getFullYear();
        bissesto = false;
        if (year%4 == 0 && year!=1900)
        {
              bissesto = true;
        }
        for (var  j = 1; j < 6; j ++){
            for ( var i= 0; i < 7; i++){
                var div = document.getElementById(`calendar__week${j}`);
                var dias = document.createElement('div');
                dias.className = 'calendar__day day';
                dias.id = `day${dia}`;
                if (bissesto){
                    if (dia > 29) {
                        dias.innerHTML = '';
                        div.appendChild(dias);
                    } else {
                        console.log(dados)
                        dias.innerHTML = dia;
                        div.appendChild(dias);
                        atividades(dados, mes, dia);
                        dia++;  
                    }   
                } else {
                    if (dia <= 28) {
                        dias.innerHTML = dia;
                        div.appendChild(dias);
                        atividades(dados, mes, dia);
                        dia++;
                    } 
                }
            }
        }
    } else if (mes === 2) {
        for (var  j = 1; j < 6; j ++){
            for ( var i= 0; i < 7; i++){
                var div = document.getElementById(`calendar__week${j}`);
                var dias = document.createElement('div');
                dias.className = 'calendar__day day';
                dias.id = `day${dia}`;
                if (dia > 31) {
                    dias.innerHTML = '';
                    div.appendChild(dias);
                }else {
                    dias.innerHTML = dia;
                    div.appendChild(dias);
                    atividades(dados, mes, dia); 
                    dia++;
                }
            }
        }
    } else if (mes === 3 ) {
        for (var  j = 1; j < 6; j ++){
            for ( var i= 0; i < 7; i++){
                var div = document.getElementById(`calendar__week${j}`);
                var dias = document.createElement('div');
                dias.className = 'calendar__day day';
                dias.id = `day${dia}`;
                if (dia > 30) {
                    dias.innerHTML = '';
                    div.appendChild(dias);
                }else {
                    dias.innerHTML = dia;
                    div.appendChild(dias);
                    atividades(dados, mes, dia);
                    dia++;
                }
            }
        }
    } else if (mes === 4) {
        for (var  j = 1; j < 6; j ++){
            for ( var i= 0; i < 7; i++){
                var div = document.getElementById(`calendar__week${j}`);
                var dias = document.createElement('div');
                dias.className = 'calendar__day day';
                dias.id =`day${dia}`;
                if (dia > 31) {
                    dias.innerHTML = '';
                    div.appendChild(dias);
                }else {
                    dias.innerHTML = dia;
                    div.appendChild(dias);
                    atividades(dados, mes, dia);
                    dia++;
                }
            }
        }
    } else if (mes === 5) {
        for (var  j = 1; j < 6; j ++){
            for ( var i= 0; i < 7; i++){
                var div = document.getElementById(`calendar__week${j}`);
                var dias = document.createElement('div');
                dias.className = 'calendar__day day';
                dias.id = `day${dia}`;
                if (dia > 30) {
                    dias.innerHTML = '';
                    div.appendChild(dias);
                }else {
                    dias.innerHTML = dia;
                    div.appendChild(dias) ;
                    atividades(dados, mes, dia);
                    dia++;
                }
            }
        }
    } else if (mes === 6) {
        for (var  j = 1; j < 6; j ++){
            for ( var i= 0; i < 7; i++){
                var div = document.getElementById(`calendar__week${j}`);
                var dias = document.createElement('div');
                dias.className = 'calendar__day day';
                dias.id = `day${dia}`;
                if (dia > 31) {
                    dias.innerHTML = '';
                    div.appendChild(dias);
                }else {
                    dias.innerHTML = dia;
                    div.appendChild(dias); 
                    atividades(dados, mes, dia);
                    dia++;
                }
            }
        }
    } else if (mes === 7) {
        for (var  j = 1; j < 6; j ++){
            for ( var i= 0; i < 7; i++){
                var div = document.getElementById(`calendar__week${j}`);
                var dias = document.createElement('div');
                dias.className = 'calendar__day day';
                dias.id = `day${dia}`;
                if (dia > 31) {
                    dias.innerHTML = '';
                    div.appendChild(dias);
                }else {
                    dias.innerHTML = dia;
                    div.appendChild(dias);
                    atividades(dados, mes, dia); 
                    dia++;
                }
            }
        }
    } else if (mes === 8) {
        for (var  j = 1; j < 6; j ++){
            for ( var i= 0; i < 7; i++){
                var div = document.getElementById(`calendar__week${j}`);
                var dias = document.createElement('div');
                dias.className = 'calendar__day day';
                dias.id = `day${dia}`;
                if (dia > 30) {
                    dias.innerHTML = '';
                    div.appendChild(dias);
                }else {
                    dias.innerHTML = dia;
                    div.appendChild(dias);
                    atividades(dados, mes, dia); 
                    dia++;
                }
            }
        }
    } else if (mes === 9) {
        for (var  j = 1; j < 6; j ++){
            for ( var i= 0; i < 7; i++){
                var div = document.getElementById(`calendar__week${j}`);
                var dias = document.createElement('div');
                dias.className = 'calendar__day day';
                dias.id = `day${dia}`;
                if (dia > 31) {
                    dias.innerHTML = '';
                    div.appendChild(dias);
                }else {
                    dias.innerHTML = dia;
                    div.appendChild(dias);
                    atividades(dados, mes, dia); 
                    dia++;
                }
            }
        }
    } else if (mes === 10){
        for (var  j = 1; j < 6; j ++){
            for ( var i= 0; i < 7; i++){
                var div = document.getElementById(`calendar__week${j}`);
                var dias = document.createElement('div');
                dias.className = 'calendar__day day';
                dias.id = `day${dia}`;
                if (dia > 30) {
                    dias.innerHTML = '';
                    div.appendChild(dias);
                }else {
                    dias.innerHTML = dia;
                    div.appendChild(dias);
                    atividades(dados, mes, dia); 
                    dia++;
                }
            }
        }
    } else if (mes === 11) {
        for (var  j = 1; j < 6; j ++){
            for ( var i= 0; i < 7; i++){
                var div = document.getElementById(`calendar__week${j}`);
                var dias = document.createElement('div');
                dias.className = 'calendar__day day';
                dias.id = `day${dia}`;
                if (dia > 31) {
                    dias.innerHTML = '';
                    div.appendChild(dias);
                }else  {
                    dias.innerHTML = dia;
                    div.appendChild(dias);
                    atividades(dados, mes, dia); 
                    dia++;
                }
            }
        }
    }
}


function openNav() {
    if(!fechado){
        document.getElementById("side").classList.remove("hide");
        document.getElementById('title').style.display = 'flex';
        fechado = true;
    }else{
        document.getElementById("side").classList.add("hide");
        document.getElementById('title').style.display = 'none';
        fechado = false;
    }
  }

function atividades(data, mes, dia) {
    var diaria = document.getElementById('diarias');
    var naodiaria = document.getElementById('naoDiarias');
    while(diaria.firstChild) {
        diaria.removeChild(diaria.firstChild);
    }
    while(naodiaria.firstChild) {
        naodiaria.removeChild(naodiaria.firstChild);
    }
    var atvDiaria = document.createElement('h2');
    atvDiaria.innerHTML = "Diárias:";
    diaria.appendChild(atvDiaria);

    var atvNaoDiaria = document.createElement('h2');
    atvNaoDiaria.innerHTML = "Atividades:";
    naodiaria.appendChild(atvNaoDiaria);

    for (const i in data) {
        
        var {
            descricao,
            dataInicio,
            diaBase, 
            periodo, 
        } = data[i];

        const inicio = dataInicio.split('/');
        var mesInicio = parseInt(inicio[1]);
        var dataBase = parseInt(diaBase);



        var spanAtividadesDia = document.createElement('span');
        spanAtividadesDia.className ="spanAtividadesDia";
        spanAtividadesDia.innerHTML = `- ${descricao.toUpperCase()}`;
        
        var spanAtividades = document.createElement('span');
        spanAtividades.className ="spanAtividades";
        spanAtividades.innerHTML = `- ${descricao.toUpperCase()}`;
        
        var remider = document.createElement('span');
        remider.className = "spanAtividades";
        remider.innerHTML  = `${diaBase} - ${descricao.toUpperCase()}`;
        
        if (mes === (mesInicio-1) || periodo === '1'){
            if (periodo === '1' ) {
                diaria.appendChild(spanAtividadesDia);
            } else {
                naodiaria.appendChild(remider);
            }
            if (dia === dataBase || periodo === '1' && dia <= 31){
                var diaAtv = document.getElementById( `day${dia}`);
                diaAtv.appendChild(spanAtividades);
            }
        } 
         

        var sideTitle = document.getElementById('sideTitle');
        if (mes === 0) sideTitle.innerHTML = `Janeiro`;
        else if(mes === 1) sideTitle.innerHTML = `Fevereiro`;
        else if(mes === 2) sideTitle.innerHTML = `Março`;
        else if(mes === 3) sideTitle.innerHTML = `Abril`;
        else if(mes === 4) sideTitle.innerHTML = `Maio`;
        else if(mes === 5) sideTitle.innerHTML = `Junho`;
        else if(mes === 6) sideTitle.innerHTML = `Julho`;
        else if(mes === 7) sideTitle.innerHTML = `Agosto`;
        else if(mes === 8) sideTitle.innerHTML = `Setembro`;
        else if(mes === 9) sideTitle.innerHTML = `Outubro`;
        else if(mes === 10) sideTitle.innerHTML = `Novembro`;
        else if(mes === 11) sideTitle.innerHTML = `Dezembro`;
    };
   
}
   */