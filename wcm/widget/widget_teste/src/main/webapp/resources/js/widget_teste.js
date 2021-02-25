var HelloWorld = SuperWidget.extend({
    message: null,

    init: function () {
            var dataset = DatasetFactory.getDataset("colleague", null, null, null);
            return dataset.rowsCount;
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


