TeeFuryClone.Views.GalleryIndex = Backbone.View.extend(
	{
		template: JST['gallery/index'],
		render: function(){
			var renderedContent = this.template();
			this.$el.html(renderedContent);
			return this;
		}
	}
);