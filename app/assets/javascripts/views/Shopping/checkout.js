TeeFuryClone.Views.Checkout = Backbone.View.extend(
  {
    template: JST['shopping/checkout'],
    render: function(){
      var renderedContent = this.template();
      this.$el.html(renderedContent);
      return this;
    }
  }
);