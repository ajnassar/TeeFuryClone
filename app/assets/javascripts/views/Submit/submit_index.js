TeeFuryClone.Views.SubmitIndex = Backbone.View.extend({
  tagName: "form",
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
    var spinnerTarget = $('#spinnerContainer');
    var spinner = new Spinner({
        lines: 13,
       length: 50,
       width: 20,
       radius: 80,
       corners: 1,
       rotate: 0,
       direction: 1,
       color: '#000',
       speed: 1,
       trail: 60,
       shadow: true,
       hwaccel: false,
       className: 'spinner',
       zIndex: 2000000000000000,
       top: 'auto',
       left: 'auto'
    }).spin();
    spinnerTarget.append(spinner.el);
    var that = this;
    event.preventDefault();
    var attrs = $(event.target.form).serializeJSON();
    this.model.set(attrs);
    this.model.collection = TeeFuryClone.shirts;
    TeeFuryClone.shirts.create(this.model, {
      success: function(data){
        spinnerTarget.modal('hide')
        Backbone.history.navigate('shirt/'+ that.model.get('id'), { trigger: true });
      }
    });
    spinnerTarget.modal()
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
  },
});