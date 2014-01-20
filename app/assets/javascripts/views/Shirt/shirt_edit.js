TeeFuryClone.Views.ShirtEdit = Backbone.View.extend(
	{
		template: JST['shirt/edit'],
    initialize: function(){
      this.listenTo(TeeFuryClone.shirts, "sync", this.render)
    },
    events: {
      'click input[type="submit"]': 'update',
      'change input[type=file]#design': "encodeDesignFile",
      'change input[type=file]#model': "encodeModelFile"
    },
		render: function(){
      var renderedContent = this.template({ shirt: this.model });
      this.$el.html(renderedContent);
      return this;
		},
    update: function(){
      var that = this;
      event.preventDefault();
      var attrs = $(event.target.form).serializeJSON();
      if (!attrs["design"]["submitted"]){
        attrs["design"]["submitted"] = false
      }else{
        attrs["design"]["submitted"] = true
      }
      this.model.set(attrs);
      this.model.collection = TeeFuryClone.shirts;
      this.model.save();
    },
    encodeDesignFile: function (event) {
      var that = this;
      var file = event.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
          that.model.set({ design_img: e.target.result });
      }
      reader.onerror = function(stuff) {
          console.log("error", stuff)
          console.log (stuff.getMessage())
      }
      reader.readAsDataURL(file);
    },
    encodeModelFile: function (event) {
      var that = this;
      var file = event.currentTarget.files[0];

      var reader = new FileReader();
      reader.onload = function(e) {
          that.model.set({ model_img: e.target.result });
      }
      reader.onerror = function(stuff) {
          console.log("error", stuff)
          console.log (stuff.getMessage())
      }
      reader.readAsDataURL(file);
    }

});