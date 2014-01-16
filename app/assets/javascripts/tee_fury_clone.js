window.TeeFuryClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		TeeFuryClone.shirts = new TeeFuryClone.Collections.Shirts();
		TeeFuryClone.shirts.fetch({success: function () {
			new TeeFuryClone.Routers.Router({$rootEl: $('#content')});
			Backbone.history.start();

		}});
  }
};

$(document).ready(function(){
  TeeFuryClone.initialize();
});
