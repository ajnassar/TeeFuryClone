window.TeeFuryClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    TeeFuryClone.Dispatcher = _.extend({}, Backbone.Events);
    TeeFuryClone.flash_message = new TeeFuryClone.Views.FlashMessage();
		TeeFuryClone.shirts = new TeeFuryClone.Collections.Shirts();
		TeeFuryClone.username = $('#current_username').text();
    TeeFuryClone.shirts.fetch({ success: function () {
			new TeeFuryClone.Routers.Router({$rootEl: $('#content')});
			Backbone.history.start();

      if (Backbone.history.fragment === ""){
        Backbone.history.navigate("#home", {trigger: true})
      }
		}});
  }
};

$(document).ready(function(){
  TeeFuryClone.initialize();
});
