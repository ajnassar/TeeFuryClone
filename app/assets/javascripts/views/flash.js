TeeFuryClone.Views.FlashMessage = Backbone.View.extend({
    initialize: function() {
       TeeFuryClone.Dispatcher.bind('show_flash_message', this.render);
    },
    template: JST['flash_message'],
    render: function(msg) {
    	alert(msg);
    	debugger
			var renderedContent = template({ message: msg});
			this.$el.append(renderedContent);
			return this;
    }
});
