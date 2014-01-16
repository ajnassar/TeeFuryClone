TeeFuryClone.Views.ShirtShow = Backbone.View.extend(
	{
		template: JST['shirt/shirt_show'],
		render: function(){
			var renderedContent = this.template({
				shirt: this.model
			});
			this.$el.html(renderedContent);
			return this;
		}
	}
);