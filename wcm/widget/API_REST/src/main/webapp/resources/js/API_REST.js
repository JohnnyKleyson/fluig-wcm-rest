var HelloWorld = SuperWidget.extend({
    message: null,

    init: function () {
        var _this = this ;
        var _jsonreturn = null;
        
        $.ajax({
            async:false,
            type:"GET",
            dataType:"json",
            url:"/api/public/ecm/dataset/availableDatasets",
            success: function(retorno){
                _jsonreturn = retorno;

                console.log(_jsonreturn);
               

                  $.each(_jsonreturn.content, function (k,v) {
                    $("#lista_diretorios_" +_this.instanceId).append("<option value="+ v.datasetId +">"+v.datasetId + "</option>");
                });  
            }
        });
    },

    bindings: {
        local: {
            'carregaDiretorio': ['change_fnCarrega']
        }
    },

    
    fnCarrega: function() {
        var _this = this;
        var _jsonreturn = null;

        $.ajax({
            async:false,
            type:"GET",
            dataType:"json",
            url:"/api/public/ecm/dataset/availableDatasets",
            success: function(retorno){
                _jsonreturn = retorno;

                //Remove os appends sempre que um novo diretorio for selecionado.
              $(".diretorios").remove();

              var registros = _jsonreturn.content.length;
              $("#bagde_diretorios_" + _this.instanceId).text(registros);

              $.each(_jsonreturn.content, function (k,v) {
                $("#relacionar_diretorios_" +_this.instanceId).append("<li class='list-group-item diretorios'>" + v.datasetId + "</li>");
            });
            }
        });
    }

});