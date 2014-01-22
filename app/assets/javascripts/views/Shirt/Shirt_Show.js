TeeFuryClone.Views.ShirtShow = Backbone.View.extend(
	{
    tagName: "div",
    events:{
      "click #edit_shirt":"edit",
      "click #buy_shirt":"buy",
    },
    className: "show-shirt-main",
		template: JST['shirt/shirt_show'],
		render: function(){
			var renderedContent = this.template({
				shirt: this.model
			});
			this.$el.html(renderedContent);
			return this;
		},
    edit: function(){
      Backbone.history.navigate("#shirt/"+ this.model.get('id') +"/edit", {trigger: true});
    },
    buy: function(){

    }
	}
);