TeeFuryClone.Views.ShirtComment = Backbone.View.extend(
	{
		template: JST['comment/comment'],
		render: function(){
      var renderedContent = this.template();// { model: comment }
      this.$el.html(renderedContent);
			return this;
		}
	}
);