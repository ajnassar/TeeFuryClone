TeeFuryClone.Routers.Router = Backbone.Router.extend(
	{
		initialize: function(){

		},
		routes:{
			"":"TodaysTee"
			"gallery":"galleryIndex",
			"submit":"submitIndex",
			"gallery/:id/":"showShirt"
		},
		TodaysTee: function(){
			//shirt model
		},
		galleryIndex: function(){
			//collection of shirts
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