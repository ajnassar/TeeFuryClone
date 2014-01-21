TeeFuryClone.Views.Thumb = Backbone.View.extend(
	{
    TagName: "div",
    className: "gallery-thumb-wrapper",
		template: JST['gallery/thumb'],
    initialize: function(){
      this.first = arguments[0]['first'];
    },
		render: function(){
			var renderedContent = this.template({
				shirt: this.model
			});
      if (this.first){ this.$el.addClass("first")}
      this.$el.html(renderedContent);
			return this;
		}
	}
);