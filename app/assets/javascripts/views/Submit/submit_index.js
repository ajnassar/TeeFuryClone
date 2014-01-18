TeeFuryClone.Views.SubmitIndex = Backbone.View.extend({
  tagName: "form",

  initialize: function(){
    this.listenTo(TeeFuryClone.shirts, "add change", this.render)
  },
  events: {
    'click input[type="submit"]': 'submitDesign',
    'change input[type=file]': "encodeFile"
  },
  template: JST['submit/index'],
	render: function(){
    renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
	},
  submitDesign: function (event) {
    var that = this;
    event.preventDefault();
    var attrs = $(event.target.form).serializeJSON();
    this.model.set(attrs);
    this.model.collection = TeeFuryClone.shirts;
    TeeFuryClone.shirts.create(this.model, {
      success: function(){
        Backbone.history.navigate('gallery/'+ that.model.get('id'), { trigger: true });
      }
    });
  },
  encodeFile: function (event) {
    var that = this;
    var file = event.currentTarget.files[0];

    console.log(file);

    var reader = new FileReader();
    reader.onload = function(e) {
        console.log(e.target.result);
        that.model.set({ design_img: e.target.result });
    }
    reader.onerror = function(stuff) {
        console.log("error", stuff)
        console.log (stuff.getMessage())
    }
    reader.readAsDataURL(file);
  }
});