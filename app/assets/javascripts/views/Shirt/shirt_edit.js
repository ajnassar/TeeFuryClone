TeeFuryClone.Views.ShirtEdit = Backbone.View.extend(
	{
		template: JST['shirt/edit'],
		render: function(){
      var renderedContent = this.template();
      this.$el.html(renderedContent);
      return this;
		}
	}
);