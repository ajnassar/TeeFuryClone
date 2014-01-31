TeeFuryClone.Views.Home = Backbone.View.extend(
	{
		template: JST['home/home'],
		render: function(){
    	var renderedContent = this.template();
     	this.$el.html(renderedContent);
     	TeeFuryClone.Dispatcher.trigger('show_flash_message', 'Some message');
			return this;
		}
	}
);