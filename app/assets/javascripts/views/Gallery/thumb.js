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
				shirt: this.model,
        date: this.date()
			});
      if (this.first){ this.$el.addClass("first")}
      this.$el.html(renderedContent);
			return this;
		},
    date: function(){
      var updated_at = this.model.get('updated_at');
      var raw_date = new Date(updated_at);
      var year, month, day;
      year = String(raw_date.getFullYear());
      month = String(raw_date.getMonth() + 1);
      if (month.length == 1) {
          month = "0" + month;
      }
      day = String(raw_date.getDate());
      if (day.length == 1) {
          day = "0" + day;
      }
      return year + "-" + month + "-" + day;
    }
	}
);