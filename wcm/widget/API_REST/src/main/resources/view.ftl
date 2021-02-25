<div id="HelloWorld_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
     data-params="HelloWorld.instance()">

    <div class="panel panel-default">
        <div class="panel-heading">Lista Diretorios</div>
        <div class="panel-body">
            <div class="col-md-12">
            	<select name="lista_diretorios_${instanceId}" id="lista_diretorios_${instanceId}" class='form-control' data-carregaDiretorio>
                    <option value="">Selecione...</option>
                </select>
            </div>

            <div class="col-md-12">
            	<ul id="relacionar_diretorio_${instanceId}" class="list-group">
                    <li class="list-group-item active">
                        Diretorios Encontrados
                        <span id="badge_diretorios_${instanceId}" class="bagde badge-warning"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
