<div id="HelloWorld_${instanceId}" class=" fluig-style-guide">
  <div class="row">
    <div class="panel panel-primary">
        <form role="form" name="form">
                <div class="form-group col-md-8">
                    <label for="descricao">Descrição</label>
                    <input  type="text" class="form-control" name="descricao" id="descricao" placeholder="Descrição geral da atividade a ser acompanhada." Required  dataset="dsFormTeste" datasetkey="descricao" datasetvalue="descricao">
                </div>

                <div class="form-group col-md-4">
                    <label for="dataInicio">Data de Inicio</label>
                    <input required type="date" class="form-control" id="dataInicio" placeholder="Data de Inicio da atividade" name="dataInicio">
                </div>
	
                <div class="form-group col-md-3">
                    <label for="periodicidade">Periodicidade</label><br>
                    <select required id="periodicidade" name="periocidade">
                        <option value="diario">Diário</option>
                        <option value="mensal">Mensal</option>
                        <option value="bimestral">Bimestral</option>
                        <option value="trimestral">Trimestral</option>
                        <option value="quadrimestral">Quadrimestral</option>
                        <option value="semestral">Semestral</option>
                        <option value="anual">Anual</option>
                    </select>
                </div>

                <div class="form-group col-md-3">
                    <label for="situacao">Situação</label> <br>
                    <select id="situacao" required>
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                    </select>
                </div>

                <div class="form-group col-md-3">
                    <label for="diaBase">Dia Base</label>
                    <input required type="date" class="form-control" id="diaBase" placeholder="Dia do mês que deve inicar atividade.">
                </div>

                <div class="form-group col-md-3">
                    <label for="dataInicio">Prazo para Conclusão</label>
                    <input required type="date" class="form-control" id="dataInicio">
                </div>

                <div class="form-group col-md-8">
                    <label for="instrucoes">Instruções</label>
                    <input required type="text" class="form-control" id="instrucoes" placeholder="Campo texto livre para instruções dos procedimentos que deverão ser executados">
                </div>

                <div class="form-group col-md-4">
                    <label for="processo">Processo</label>
                    <input required type="text" class="form-control" id="processo" placeholder="Indique o processo">
                </div>
                
                <div class="form-group col-md-3">
                    <label for="responsavelExc">Responsavel (Execução)</label>
                    <input required type="text" class="form-control" id="responsavelExc" placeholder="Indique o responsavel pela execução.">
                </div>

                <div class="form-group col-md-3">
                    <label for="responsavelConf">Responsavel (Conferencia)</label>
                    <input type="text" class="form-control" id="responsavelConf" placeholder="Indique o responsável pela conferência.">
                </div>

                <div class="form-group col-md-3">
                    <label for="responsavelConcl">Responsavel (Conclusão)</label>
                    <input type="text" class="form-control" id="responsavelConcl" placeholder="Indique o responsável pela conclusão.">
                </div>

                <div class="form-group col-md-3">
                    <label for="gestor">Gestor</label>
                    <input required type="text" class="form-control" id="gestor" placeholder="Gestor responsável pelo acompanhamento da Atividade">
                </div>
                <div class='form-group col-md-2'>
                        <button type="submit" class="btn btn-default cadastro">Cadastrar</button>
                </div>
             </form>  
        </div>
    </div>
</div>
