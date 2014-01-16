TeeFuryClone.Views.GalleryIndex = Backbone.View.extend(
	{
		template: JST['gallery/index'],
		render: function(){
			var renderedContent = this.template({
				shirts: this.collection
			});
			this.$el.html(renderedContent);
			return this;
		}
	}
);