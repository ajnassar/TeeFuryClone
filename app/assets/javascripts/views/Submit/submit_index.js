TeeFuryClone.Views.SubmitIndex = Backbone.View.extend({
  initialize: function(){
    this.listenTo(TeeFuryClone.shirts, "add", this.render)
  },
  events: {
    'click input[type="submit"]': 'submitDesign'
  },
  template: JST['submit/index'],
	render: function(){
    renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
	},
  submitDesign: function (event) {
    event.preventDefault();
    var attrs = $(event.target.form).serializeJSON();
    model = new TeeFuryClone.Models.Shirt();
    model.set(attrs);
    model.collection = TeeFuryClone.shirts;
    TeeFuryClone.shirts.create(model, {
      success: function(){

        Backbone.history.navigate('gallery/'+model.get('id'), { trigger: true })
      }
    });
    // grab data from form
    // create model
    // save model (ajax request)
  }
});