TeeFuryClone.Views.ShirtShow = Backbone.View.extend(
	{
    initialize: function(){
      this.commentsShown = true;
    },
    tagName: "div",
    events: {
      "click #edit_shirt":"edit",
      "click #buy_shirt":"buy",
      "click #prev":"prev",
      "click #gallery":"gallery",
      "click #next":"next",
      "click #commentShowHide":"commentShowHide",
      "click #submit-comment":"submitComment"
    },
    className: "show-shirt-main",
		template: JST['shirt/shirt_show'],
		render: function(){
      var that = this;
			var renderedContent = this.template({
				shirt: this.model
			});
      this.$el.html(renderedContent);
      this.model.get('comments').forEach(function(comment, index){
        if ((index+1)%2 === 1){
          var shirtCommentView = new TeeFuryClone.Views.ShirtComment({ model: comment });
        }else{
          var shirtCommentView = new TeeFuryClone.Views.ShirtComment({ model: comment });
        }
        that.$('.shirt-comments').append(shirtCommentView.render().$el);
      });
			return this;
		},
    // submitComment: function(event){
    //   var commentText = $('#comment-body').val()
    //   var comment = new TeeFuryClone.Models.Comment({
    //       user_id: this.model.current_user,
    //       shirt_id: this.model.id,
    //       body: commentText
    //   });
    //   comment.save({});
    //     },
    edit: function(){
      Backbone.history.navigate("#shirt/"+ this.model.get('id') +"/edit", {trigger: true});
    },
    buy: function(){

    },
    prev: function(event){
      var prev_shirt = this.model.collection.at(this.model.collection.indexOf(this.model) - 1)
      if (prev_shirt === undefined){
        prev_shirt = this.model.collection.at(this.model.collection.length - 1)
      }

      Backbone.history.navigate("#shirt/"+ prev_shirt.get('id'), {trigger: true});
    },
    next: function(){
      var next_shirt = this.model.collection.at(this.model.collection.indexOf(this.model) + 1)

      if (next_shirt === undefined){
        next_shirt = this.model.collection.at(0)
      }

      Backbone.history.navigate("#shirt/"+ next_shirt.get('id'), {trigger: true});
    },
    gallery: function(){
      Backbone.history.navigate("#gallery", {trigger: true});
    },
    commentShowHide: function(event){
      $('.shirt-comments').slideToggle('slow');

      this.commentsShown = !this.commentsShown;

      if (this.commentsShown){
        $('#commentShowHide a').text("Hide all comments");
        $('#commentShowHide a').attr("style", "background-image: url(http://www.teefury.com/images/btn-show-open.gif)")
      } else{
        $('#commentShowHide a').text("Show all comments");
        $('#commentShowHide a').attr("style", "background-image: url(http://www.teefury.com/images/btn-show.gif)")
      }
    }
	}
);