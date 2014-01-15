TeeFuryClone.Routers.Router = Backbone.Router.extend(
	{
		initialize: function(){

		},
		routes:{
			"":"TodaysTee"
			"gallery":"galleryIndex",
			"submit":"submitIndex"
		},
		TodaysTee: function(){

		},
		galleryIndex: function(){

		},
		submitIndex: function(){

		},

		_swapView: function(view){
			this._currentView && this._currentView.remove();
			this._currentView = view;
			this.$rootEl.html(view.render().$el);
		}
	}
);