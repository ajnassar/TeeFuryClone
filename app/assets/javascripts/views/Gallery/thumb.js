TeeFuryClone.Views.Thumb = Backbone.View.extend(
	{
		template: JST['gallery/thumb'],
		render: function(){
			var renderedContent = this.template({
				shirt: this.model
			});
      this.$el.html(renderedContent);
			return this;
		}
	}
);