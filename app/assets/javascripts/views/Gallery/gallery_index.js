TeeFuryClone.Views.GalleryIndex = Backbone.View.extend(
	{
		template: JST['gallery/index'],
		render: function(){
      var that = this;
      var renderedContent = this.template();
      this.$el.html(renderedContent);
      $(this.$el).attr("id", "main");
      this.collection.forEach(function(thumb){
        var view = new TeeFuryClone.Views.Thumb({ model: thumb });
        that.$('.gallery-display-thumbs-wrapper').append(view.render().$el);
      });
			return this;
		}
	}
);