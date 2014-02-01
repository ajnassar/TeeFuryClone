TeeFuryClone.Views.FlashMessage = Backbone.View.extend({
    initialize: function() {
       this.listenTo(TeeFuryClone.Dispatcher, 'show_flash_message', this.render);
    },
    render: function(msg) {
    	if (msg == "") {
				$('#flash_message').css("display","none");
    	}else {
    		$('#flash_message').css("display","block");
    	}
			$('#flash_message').text(msg);
    }
});
