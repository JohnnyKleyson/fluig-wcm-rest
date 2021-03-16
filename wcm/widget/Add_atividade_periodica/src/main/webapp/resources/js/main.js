var usuarios = [];
var processos = [];
var processosId = [];
var success = true;
$(document).ready(function () {
    $('#periodo').on('change', function(){
        var periodo = $('#periodo').val();
        if(periodo === '1'){
            document.getElementById('inicio').style.display = 'none';
            document.getElementById('base').style.display = 'none';
            document.getElementById('limite').style.display = 'none';
        } else {
            document.getElementById('inicio').style.display = 'block';
            document.getElementById('base').style.display = 'block';
            document.getElementById('limite').style.display = 'block';
        }

    })

// Consulta Api collegue do fluig 
const data = {
        name: 'colleague',
    };
$.ajax({
    async: true,
    type: "POST",
    contentType: "application/json",
    url: '/api/public/ecm/dataset/datasets',
    data: JSON.stringify(data),
    success: function (res) {
        for (const colleague of res.content.values) {
            usuarios.push(colleague.colleagueName);
            }
            $("#gestor").autocomplete({
                source: usuarios   
            });
            $("#responsavel").autocomplete({
                source: usuarios   
            });     
            $("#conferencia").autocomplete({
                source: usuarios   
            });  
            $("#conclusao").autocomplete({
                source: usuarios   
            });   
        }
    }); 

 //Consulta Api WorkflowRest do fluig
$.ajax({
    async: true,
    type: "GET",
    contentType: "application/json",
    url: '/api/public/2.0/workflows/listProcess',
    success: function (response) {
        processosId = response.content;
        for (const i of response.content) {
            processos.push(i.processDescription);
            }
            $("#processo").autocomplete({
                source: processos   
            });      
        }
    })

});

function  salvar() {
    var processoDescription = $('#processo').val();
    var processId = null;
    for(id in processosId) {
        if(processosId[id].processDescription == processoDescription){
            processId = processosId[id].processId;

        }
    }

    var incremento = 0;
    var periodo = $('#periodo').val();
    if (periodo === '2'){
        repetir = 12;  
        incremento = 1;     
    } else if (periodo === '3') {
        repetir = 6;
        incremento = 2;
    } else if (periodo === '4') {
        repetir = 4; 
        incremento = 3;
    } else if (periodo === '5') {
        repetir = 3;
        incremento = 4;
    }else if (periodo === '6') {
        repetir = 2;
        incremento = 6;
    } else {
        repetir = 1;
    }
    if (!validaCampos()){
        success = false;
        FLUIGC.toast({
			title: '',
			message: "Preencha corretamente os campos do cadastro de atividades.",
			type: 'danger'
		});
    } else {
        success = true;
        var datainicio =  $('#dataInicio').val();
        var dataSplit = datainicio.split('/');
        var dia = parseInt(dataSplit[0]);
        var mes = parseInt(dataSplit[1]);

        for(var i = 0 ; i < repetir ; i++){
            var novaData = null;
            if (mes < 10){
                novaData = `${dia}/0${mes}`;
                 mes = mes + incremento;
                console.log(novaData);
               
            } else {
                if( mes > 12) {
                    mes = mes - 12;
                    novaData = `${dia}/${mes}`;

                }
                var novaData = `${dia}/${mes}`;
                mes = mes + incremento;
                console.log(novaData)
            }

            data = { 
                documentDescription: "Formulario_Calendario",
                version: 1000,
                parentDocumentId: 50,
                inheritSecurity: false, 
                formData: [ 
                    { name: "descricao",  value: $('#descricao').val()},
                    { name: "datainicio", value: novaData},
                    { name: "diaBase",    value: $('#diaBase').val()},
                    { name: "prazo",      value: $('#prazo').val()},
                    { name: "periodo",    value: $('#periodo').val()},
                    { name: "instrucoes", value: $('#intrucoes').val()},
                    { name: "situacao" ,  value: 1},
                    { name: "processo" ,  value: processId},
                    { name: "responsavel",value: $('#responsavel').val()},
                    { name: "conferencia",value: $('#conferencia').val()},
                    { name: "conclusao",  value: $('#conclusao').val()},
                    { name: "gestor",     value: $('#gestor').val()}
                ],
                permissions: [ 
                    { 
                        "securityLevel": 3,
                        "securityVersion": true, 
                        "inheritSecurity": false, 
                        "downloadEnabled": false, 
                        "showContent": true, 
                        "attributionDescription": "user user",
                        "attributionType": 1, 
                        "attributionValue": "user" 
                    } 
                ] 
            }
            $.ajax({
                async: true,
                type: "POST",
                contentType: "application/json",
                url: '/api/public/2.0/cards/create',
                data: JSON.stringify(data),
                success: function () {
                    console.log(data);
                    success = true;
                    var inputsAtividades = document.getElementById('tabCadastro').getElementsByTagName('input');
                    var selectAtividades = document.getElementById('tabCadastro').getElementsByTagName('select');
                    var textAreaAtividades = document.getElementById('tabCadastro').getElementsByTagName('textarea');
                    var fields = [...inputsAtividades, ...selectAtividades, ...textAreaAtividades];
                    for (const field of fields) {
                        field.value = '';
                    }
                },
                erro: function( ) {
                    console.log("erro");
                    success = false;
                }
            })      
        }
    }
    success == true ?  
        FLUIGC.toast({
            title: 'Atividade cadastrada: ',
            message: 'Atividade cadastrada com sucesso',
            type: 'success'
        }) :    FLUIGC.toast({
            title: 'Atividade não cadastrada',
            message: 'Erro o Cadastrar atividade',
            type: 'danger'
        });
    
}

function validaCampos() {
    let validaPasso = true;
    var inputsAtividades = document.getElementById('tabCadastro').getElementsByTagName('input');
    var selectAtividades = document.getElementById('tabCadastro').getElementsByTagName('select');
    var textAreaAtividades = document.getElementById('tabCadastro').getElementsByTagName('textarea');
    var fields = [...inputsAtividades, ...selectAtividades, ...textAreaAtividades];
    console.log(fields)
    var periodoDiario = $('#periodo').val();
    if (periodoDiario === '1'){
         fields.splice(1, 3);
    }
    console.log(fields)
    for (const field of fields) { 
        if (field.value === '' && field.value != '1') {
            $('#valid' + field.name).show();
            validaPasso = false;
        } else {
            $('#valid' + field.name).hide();
        }
    }
    return validaPasso;
}
