TeeFuryClone.Routers.Router = Backbone.Router.extend(
	{
		initialize: function(options){
			this.$rootEl = options.$rootEl;
		},
		routes:{
			"":"TodaysTee",
			"gallery":"galleryIndex",
			"submit":"submitIndex",
			"gallery/:id/":"showShirt"
		},
		TodaysTee: function(){
			//shirt model
		},
		galleryIndex: function(){
			var galleryIndexView = new TeeFuryClone.Views.GalleryIndex();
			this._swapView(galleryIndexView);
		},
		submitIndex: function(){

		},
		showShirt: function(id){

		},
		_swapView: function(view){
			this._currentView && this._currentView.remove();
			this._currentView = view;
			this.$rootEl.html(view.render().$el);
		}
	}
);