
<div id="CadastroAtividade_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide">
    <body>
        <div id='CadastroAtividade_${instanceId}'>
        <div id="tabCadastro" class="panel panel-info fluig-style-guide">
                <div class="panel-heading">
                    <strong>Cadastro de atividades periódicas</strong>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-4">
                            <label for="descricao">Descrição:</label>
                            <input id="descricao" type="text" name="descricao" class="form-control" placeholder="Informe a descrição da atividade">
                            <span id="validdescricao" class="invalid" style="display: none;" required>*
                            A descrição precisa ser informada.</span>
                        </div>
                        <div class="col-md-4">
                            <label for="periodicidade">Periodicidade:</label>
                            <select id="periodo" name="periodo" class="form-control">
                                <option value="" selected>Selecione uma opção</option>
                                <option value="1">Diário</option>
                                <option value="2">Mensal</option>
                                <option value="3">Bimestral</option>
                                <option value="4">Trimestral</option>]
                                <option value="5">Quadrimestral</option>
                                <option value="6">Semestral</option>
                                <option value="7">Anual</option>
                            </select> 
                            <span id="validperiodo" class="invalid" style="display: none;" required>* Uma opção 
                            precisa ser selecionada</span>
                        </div>
                        <div id='inicio' class="col-md-2">
                            <label for="dataInicio">Data de início:</label>
                            <input id="dataInicio" type="text" name="dataInicio" class="form-control" placeholder="Data de inicio">
                            <span id="validdataInicio" class="invalid" style="display: none;" required>* Data inválida</span>
                        </div>
                        <div id='base' class="col-md-1">
                            <label for="diaBase">Dia base:</label>
                            <input id="diaBase" type="text" name="diaBase" class="form-control">
                            <span id="validdataLimite" class="invalid" style="display: none;" required>* Data inválida</span>
                        </div>
                        <div id='limite' class="col-md-1">
                            <label for="prazo">Prazo:</label>
                            <input id="prazo" type="text" name="prazo" class="form-control">
                            <span id="validdataLimite" class="invalid" style="display: none;" required>* Data inválida</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <label for="intrucoes">Instruções:</label>
                            <textarea id="intrucoes" type="text" name="instrucoes" class="form-control" ></textarea>
                            <span id="validinstrucoes" class="invalid" style="display: none;" required>*As instruções precisam ser informadas</span> 
                        </div>
                        <div class="col-md-4">
                            <label for="processo">Processo:</label>
                            <input id="processo" type="text" name="processo" class="form-control" placeholder="Informe o processo correnpondente">
                            <span id="validprocesso" class="invalid" style="display: none;" required>* Processo precisa ser informado</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <label for="Responsavel">Responsável pela execução:</label>
                            <input id="responsavel" type="text" name="responsavel" class="form-control" placeholder="Informe o responsável pela execução" >
                            <span id="validresponsavel" class="invalid" style="display: none;" required>* Responsável precisa ser informado</span>
                        </div>
                        <div class="col-md-3">
                            <label for="conferencia">Responsável pela conferência:</label>
                            <input id="conferencia" type="text" name="conferencia" class="form-control" placeholder="Informe o responsavel pela conferência"> 
                            <span id="validconferencia" class="invalid" style="display: none;" required>* Responsável precisa ser informado</span>                   
                        </div>
                        <div class="col-md-3">
                            <label for="conclusao">Responsável pela conclusão:</label>
                            <input id="conclusao" type="text" name="conclusao" class="form-control" placeholder="Informe o responsável pela Conclusão">
                            <span id="validconclusao" class="invalid" style="display: none;" required>* Responsável precisa ser informado</span>
                        </div>
                        <div class="col-md-3">
                        <label for="gestor">Gestor da Atividade:</label>
                            <input id="gestor" type="text" name="gestor" class="form-control" placeholder="Informe o gestor responsável">
                            <span id="validgestor" class="invalid" style="display: none;" required>* Gestor precisa ser informado</span>
                        </div>
                    </div>
                <button type="submit" class="btn btn-success" onclick="salvar()">Cadastrar</button>
                </div>
            </div>
        </body>
    <script> 
        var Datainicio = FLUIGC.calendar('#dataInicio');
    </script>
</div>