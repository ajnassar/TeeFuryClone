TeeFuryClone.Views.GalleryIndex = Backbone.View.extend(
	{
		template: JST['gallery/index'],
    events: {
      "click #search-gallery":"searchGallery"
    },
    searchGallery: function(event){
      event.preventDefault();
      console.log("we clicked yo")
      debugger

      var queryTerms = {};

      var queryShirts = new TeeFuryClone.Collections.Shirts();
      var that = this;
      queryShirts.fetchByQuery(queryTerms, {
        success: function () {
          that.collection = queryShirts;
          that.render();
        }
      });
    },
		render: function(){
      var that = this;
      var renderedContent = this.template();
      this.$el.html(renderedContent);
      $(this.$el).attr("id", "main");
      this.collection.forEach(function(thumb, index){
        if ((index+1)%3 === 1){
          var view = new TeeFuryClone.Views.Thumb({ model: thumb, first: true });
        }else{
          var view = new TeeFuryClone.Views.Thumb({ model: thumb, first: false });
        }
        that.$('.gallery-display-thumbs-wrapper').append(view.render().$el);
      });
			return this;
		}
	}
);