TeeFuryClone.Views.GalleryIndex = Backbone.View.extend(
	{
		template: JST['gallery/index'],
		render: function(){
      debugger;
			var renderedContent = this.template({
				shirts: this.collection
			});

      this.$el.html(renderedContent);
      $(this.$el).attr("id", "main");
			return this;
		}
	}
);