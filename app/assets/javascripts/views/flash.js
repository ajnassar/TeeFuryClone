TeeFuryClone.Views.FlashMessage = Backbone.View.extend({
    initialize: function() {
       this.listenTo(TeeFuryClone.Dispatcher, 'show_flash_message', this.render);
    },
    template: JST['flash_message'],
    render: function(msg) {
    	var renderedContent = this.template({ meassage: msg }) + msg;
    	if (msg == "") {
				$('#flash_message').css("display","none");
    	}else {
    		$('#flash_message').css("display","block");
    	}
			$('#flash_message').html(renderedContent);

    }
});
