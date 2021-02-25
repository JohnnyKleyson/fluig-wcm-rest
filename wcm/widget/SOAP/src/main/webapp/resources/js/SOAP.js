var HelloWorld = SuperWidget.extend({
    message: null,

    init: function () {
        //code
    },

    bindings: {
        local: {
            'create': ['click_cria_pasta']
        }
    },

    cria_pasta: function () {
    
        var nome = $('#Desc_pasta_'+this.instanceId).val();

        $.ajax({
            url: '/SOAP/resources/js/xml/ECMFolderService_createSimpleFolder.xml',
            async: false,
            type:"GET",
            datatype: "xml",
            success: function(xml) {
                _xml = $(xml)
            }
        });

        _xml.find("companyId").text(WCMAPI.tenantCode);
        _xml.find("username").text("teste.wcm");
        _xml.find("password").text("123.wcm");
        _xml.find("parentDocumentId").text("2");
        _xml.find("publisherId").text("teste.wcm");
        _xml.find("documentDescription").text(nome);

        WCMAPI.Create({
            url: '/webdesk/ECMFolderService?wsdl',
            contentType: "text/xml",
            dataType: "xml",
            data: _xml[0],
            success: function(data){
               console.log(data);
               FLUIGGC.toast({
                   title:'aviso',
                   message:'Pasta Criada',
                   type:'success'
               })
            }
        });
    }
});