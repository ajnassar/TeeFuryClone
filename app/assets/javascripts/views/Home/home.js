TeeFuryClone.Views.Home = Backbone.View.extend(
	{
		template: JST['home/home'],
		render: function(){
    	var renderedContent = this.template();
     	this.$el.html(renderedContent);
			return this;
		
}	}
);