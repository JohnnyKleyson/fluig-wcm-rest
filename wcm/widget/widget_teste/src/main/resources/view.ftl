<div id="HelloWorld_${instanceId}" class=" fluig-style-guide">
    <div class="panel panel-primary">
        <div class="panel-body">
            <div class="row">
                <form role="form" name="form" id="form">
                    <div class="form-group col-md-3">
                        <label for="descricao">Descrição</label>
                        <input  type="text" class="form-control invalid" name="descricao" id="descricao" placeholder="Descrição geral da atividade a ser acompanhada.">
                        <div class="error-hint hidden">Descrição é necessaria.</div>
                    </div>

                    <div class="form-group col-md-3" id="inicio">
                        <label for="dataInicio">Data de Inicio</label>
                        <input type="date" class="form-control" id="dataInicio" placeholder="Data de Inicio da atividade" name="dataInicio">
                    </div>
        
                    <div class="form-group col-md-3" id="base">
                        <label for="diaBase">Dia Base</label>
                        <input type="date" class="form-control" id="diaBase" placeholder="Dia do mês que deve inicar atividade." name="diaBase">
                    </div>

                    <div class="form-group col-md-3" id="limite">
                        <label for="conclusao">Prazo para Conclusão</label>
                        <input type="date" class="form-control" id="conclusao" name="conclusao" class="pass_error">
                    </div>

                    <div class="form-group col-md-6">
                        <label for="instrucoes">Instruções</label>
                        <input type="text" class="form-control" id="instrucoes" placeholder="Campo texto livre para instruções dos procedimentos que deverão ser executados" name="instrucoes">
                    </div>

                    <div class="form-group col-md-4">
                        <label for="processo">Processo</label>
                        <input type="text" class="form-control" id="processo" placeholder="Indique o processo" name="processo">                    
                    </div>

                    <div class="form-group col-md-2">
                        <label for="periodo">periodo</label><br>
                        <select id="periodo" name="periodo" class="form-control">
                            <option value="diario">Diário</option>
                            <option value="mensal">Mensal</option>
                            <option value="bimestral">Bimestral</option>
                            <option value="trimestral">Trimestral</option>
                            <option value="quadrimestral">Quadrimestral</option>
                            <option value="semestral">Semestral</option>
                            <option value="anual">Anual</option>
                        </select><br>   
                    </div>

                    <div class="form-group col-md-3">
                        <label for="responsavelExc">Responsavel (Execução)</label>
                        <input type="text" class="form-control" id="responsavelExc" placeholder="Indique o responsavel pela execução." name="responsavelExc"> 
                    </div>

                    <div class="form-group col-md-3">
                        <label for="responsavelConf">Responsavel (Conferencia)</label>
                        <input type="text" class="form-control" id="responsavelConf" placeholder="Indique o responsável pela conferência." name="responsavelConf">
                    </div>

                    <div class="form-group col-md-3">
                        <label for="responsavelConcl">Responsavel (Conclusão)</label>
                        <input type="text" class="form-control" id="responsavelConcl" placeholder="Indique o responsável pela conclusão." name="responsavelConcl">
                    </div>

                    <div class="form-group col-md-3">
                        <label for="gestor">Gestor</label>
                        <input type="text" class="form-control" id="gestor" placeholder="Gestor responsável pelo acompanhamento da Atividade" name="gestor">
                       
                    </div>
                    <div class='form-group col-md-2'>
                        <button type="submit" class="btn btn-default cadastro" onclick="cadastrar()" id="submit">Cadastrar</button>
                    </div>
                </form>  
            </div>
        </div>
    </div>



    <script>   
        //Validação do Formulario
        /*const form = document.getElementById('form');
        const nameInput = document.querySelector('input[name="descricao"]');

        let isFormValid = false;

        const validateInputs = () => {
            nameInput.nextElementSibling.classList.add("hidden");
            isFormValid = true

            if(!nameInput.value){
            nameInput.nextElementSibling.classList.remove("hidden");
            isFormValid = false
            }
        }
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            validateInputs();
           
        })

        nameInput.addEventListener('input', () => {
            validateInputs();
        })

        if (isFormValid = false){
        success = false;
        FLUIGC.message.alert({
            message: 'Preencha os Campos corretamente',
            title: 'Error',
            label: 'OK'
            });
		}else {*/
            //Salvar dados do cadastro na pasta de fomularios do Fluig "Cadastro_Atividades"
            function cadastrar() {
                data = {
                    documentDescription: "Cadastro_Atividades",
                    version: 1000,
                    parentDocumentId: 111,
                    inheritSecurity: false, 
                    formData: [ 
                        { name: "descricao",  value: $('#descricao').val()},
                        { name: "dataInicio", value: $('#dataInicio').val()}, 
                        { name: "diaBase",    value: $('#diaBase').val()},
                        { name: "conclusao",  value: $('#conclusao').val()},
                        { name: "periodo", value: $('#periodo').val()},
                        { name: "instrucoes", value: $('#instrucoes').val()},
                        { name: "situacao" ,  value: 1},
                        { name: "processo" ,  value: $('#processo').val()},
                        { name: "responsavelExc",value: $('#responsavelExc').val()},
                        { name: "responsavelConf",value: $('#responsavelConf').val()},
                        { name: "responsavelConcl",  value: $('#responsavelConcl').val()},
                        { name: "gestor",  value: $('#gestor').val()}
                    ],
                    permissions: [{ 
                        "securityLevel": 3,
                        "securityVersion": true, 
                        "inheritSecurity": false, 
                        "downloadEnabled": false, 
                        "showContent": true, 
                        "attributionDescription": "user user",
                        "attributionType": 1, 
                        "attributionValue": "user" 
                    }]
                };

            //Api "Cards" do fluig que cria o documento no dataset.
                
                $.ajax({
                    async: true,
                    type: "POST",
                    contentType: "application/json",
                    url: '/api/public/2.0/cards/create',
                    data: JSON.stringify(data),
                    success: function (sucesso) {
                        FLUIGC.message.alert({
                            message: 'Cadastro Realizado com sucesso :)',
                            title: 'Sucesso',
                            label: 'OK'
                        });
                        console.log(sucesso);
                        console.log(data);
                        success = true;
                    },erro: function(){
                        console.log("erro");
                        success = false;
                    }
                });    
            }; 
        
  </script>
</div>

