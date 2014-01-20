TeeFuryClone.Routers.Router = Backbone.Router.extend(
	{
		initialize: function(options){
			this.$rootEl = options.$rootEl;
		},
		routes:{
			"":"todaysTee",
			"gallery":"galleryIndex",
			"shirt/:id":"showShirt",
			"submit":"submitIndex",
      "shirt/:id/edit":"shirtEdit"
		},
		todaysTee: function(){
			//shirt model
		},
    shirtEdit: function(id){
      var shirt = TeeFuryClone.shirts.get(id);
      var shirtEditView = new TeeFuryClone.Views.ShirtEdit({
        model: shirt
      });
      this._swapView(shirtEditView);
    },
		galleryIndex: function(){
			var galleryIndexView = new TeeFuryClone.Views.GalleryIndex({
					collection: TeeFuryClone.shirts
				});
			this._swapView(galleryIndexView);
		},
		submitIndex: function(){
      var shirt = new TeeFuryClone.Models.Shirt();
      var submitIndexView = new TeeFuryClone.Views.SubmitIndex({ model: shirt });
      this._swapView(submitIndexView);
		},
		showShirt: function(id){
			var shirt = TeeFuryClone.shirts.get(id);
			var showShirtView = new TeeFuryClone.Views.ShirtShow({
				model: shirt
			});
			this._swapView(showShirtView);
		},
		_swapView: function(view){
			this._currentView && this._currentView.remove();
			this._currentView = view;
			this.$rootEl.html(view.render().$el);
		}
	}
);