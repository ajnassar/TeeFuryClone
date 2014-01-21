TeeFuryClone.Views.Cart = Backbone.View.extend(
  {
    template: JST['shopping/cart'],
    render: function(){
      var renderedContent = this.template();
      this.$el.html(renderedContent);
      return this;
    }
  }
);