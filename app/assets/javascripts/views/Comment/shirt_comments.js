TeeFuryClone.Views.ShirtComment = Backbone.View.extend(
	{
    className: "user-comment-div",
		template: JST['comment/comment'],
		render: function(){
      var renderedContent = this.template({ comment: this.model });
      this.$el.html(renderedContent);
			return this;
		}
	}
);