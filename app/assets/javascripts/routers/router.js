TeeFuryClone.Routers.Router = Backbone.Router.extend(
	{
		initialize: function(options){
			this.$rootEl = options.$rootEl;
		},
		routes:{
			"home":"home",
			"gallery":"galleryIndex",
			"admin/shirtsIndex":"adminShirtsIndex",
			"shirt/:id":"showShirt",
			"submit":"submitIndex",
      "shirt/:id/edit":"shirtEdit",
      "cart":"shoppingCart",
      "checkout":"shoppingCheckout",
		},
		home: function(){
      var homeView = new TeeFuryClone.Views.Home();
      TeeFuryClone.Dispatcher.trigger('show_flash_message', "");
      this._navbarHighlight("home");
      this._swapView(homeView);
		},
    shoppingCart: function(){
      var cartView = new TeeFuryClone.Views.Cart();
      TeeFuryClone.Dispatcher.trigger('show_flash_message', "");
      this._navbarHighlight("");
      this._swapView(cartView);
    },
    shoppingCheckout: function(){
      var checkoutView = new TeeFuryClone.Views.Checkout();
      TeeFuryClone.Dispatcher.trigger('show_flash_message', "");
      this._navbarHighlight("");
      this._swapView(checkoutView);
    },
    shirtEdit: function(id){
      var shirt = TeeFuryClone.shirts.get(id);
      var shirtEditView = new TeeFuryClone.Views.ShirtEdit({
        model: shirt
      });
      TeeFuryClone.Dispatcher.trigger('show_flash_message', "");
      this._navbarHighlight("");
      this._swapView(shirtEditView);
    },
		galleryIndex: function(){
			var galleryIndexView = new TeeFuryClone.Views.GalleryIndex({
				collection: TeeFuryClone.shirts
			});
      TeeFuryClone.Dispatcher.trigger('show_flash_message', "");
      this._navbarHighlight("gallery");
			this._swapView(galleryIndexView);
		},
		adminShirtsIndex: function(){
      if (TeeFuryClone.user.get('admin') == false) {
        Backbone.history.navigate("#home", {trigger: true})
        TeeFuryClone.Dispatcher.trigger('show_flash_message', "You are not authorized to visit that page!");
      } else {
  			var adminShirtsView = new TeeFuryClone.Views.AdminShirts({
  				collection: TeeFuryClone.shirts
  			});
        TeeFuryClone.Dispatcher.trigger('show_flash_message', "");
        this._navbarHighlight("admin");
  			this._swapView(adminShirtsView);
      }
		},
		submitIndex: function(){
      var shirt = new TeeFuryClone.Models.Shirt();
      var submitIndexView = new TeeFuryClone.Views.SubmitIndex({
        model: shirt,
        user: TeeFuryClone.user.get('id')
      });
      TeeFuryClone.Dispatcher.trigger('show_flash_message', "");
      this._navbarHighlight("submit");
      this._swapView(submitIndexView);
		},
		showShirt: function(id){
			var shirt = TeeFuryClone.shirts.get(id);
      var comments = new TeeFuryClone.Collections.Comments()
			var showShirtView = new TeeFuryClone.Views.ShirtShow({
				model: shirt
			});
      TeeFuryClone.Dispatcher.trigger('show_flash_message', "");
      this._navbarHighlight("");
			this._swapView(showShirtView);
		},
		_swapView: function(view){
      // this._currentView && this._currentView.remove();
      // this._currentView = view;
      // this.$rootEl.html(view.render().$el);
      //
      var tempView = this._currentView

      if (this._currentView) {
        this._currentView.$el.remove();
      }

      this._currentView = view;
      this.$rootEl.append(view.render().$el);
      view.$el.addClass("page");

      _.delay(function () {
        view.$el.addClass("is-visible");
      }, 20);
      window.scrollTo(0,0 );
		},
    _navbarHighlight: function(button){
      $("#nav-buttons li").each(function(index) { 
        if ($(this).attr('id') == button){
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });
    }
	}
);