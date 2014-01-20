TeeFuryClone.Views.GalleryIndex = Backbone.View.extend(
	{
		template: JST['gallery/index'],
		render: function(){
		  // var renderedContent = this.template({
  //       shirts: this.collection
  //     });
  var that = this;
      var content = this.template();
      this.$el.html(content);
      $(this.$el).attr("id", "main");
      this.collection.forEach(function(thumb){
        var view = new TeeFuryClone.Views.Thumb({ model: thumb });
        that.$('.gallery-display-thumbs-wrapper').append(view.render().$el);
      });
			return this;
		}
	}
);