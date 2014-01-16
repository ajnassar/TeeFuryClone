TeeFuryClone.Views.SubmitIndex = Backbone.View.extend(
	{
    template: JST['submit/index'],
		render: function(){
      renderedContent = this.template();
      this.$el.html(renderedContent);
      return this
		}
	}
);