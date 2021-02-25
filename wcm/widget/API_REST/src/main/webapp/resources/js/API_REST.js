var HelloWorld = SuperWidget.extend({
    message: null,

    init: function () {
        var _this = this ;
        var _jsonreturn = null;
        
        $.ajax({
            async:false,
            type:"GET",
            dataType:"json",
            url:"/api/public/ecm/document/listDocument/0",
            success: function(retorno){
                _jsonreturn = retorno;

                $.each(_jsonreturn.content, function (k,v) {
                    $("#lista_diretorios_" +_this.instanceId).append("<option value="+ v.id +">"+v.description + "</option>");
                });
            }
        });
    },

    bindings: {
        local: {
            'show-message': ['click_showMessage']
        }
    },

    showMessage: function () {
        $div = $('#helloMessage_' + this.instanceId);
        $message = $('<div>').addClass('message').append(this.message);
        $div.append($message);
    }
});