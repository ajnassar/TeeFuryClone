TeeFuryClone.Views.GalleryIndex = Backbone.View.extend(
	{
		template: JST['gallery/index'],
    events: {
      "click #search-gallery":"searchGallery"
    },
    searchGallery: function(event){
      event.preventDefault();
      var queryTerms = {text: $('#gallery-index-search-text').val()};
      var queryShirts = new TeeFuryClone.Collections.Shirts();
      var that = this;
      queryShirts.fetchByQuery(queryTerms, function(newCollection) {
          that.collection = newCollection;
          that.render();
      });
    },
		render: function(){
      var that = this;
      var renderedContent = this.template();
      this.$el.html(renderedContent);
      $(this.$el).attr("id", "main");
      this.collection.where({submitted: true}).forEach(function(thumb, index){
        if ((index+1)%3 === 1){
          var thumbView = new TeeFuryClone.Views.Thumb({ model: thumb, first: true });
        }else{
          var thumbView = new TeeFuryClone.Views.Thumb({ model: thumb, first: false });
        }
        that.$('.gallery-display-thumbs-wrapper').append(thumbView.render().$el);
      });
			return this;
		}
	}
);