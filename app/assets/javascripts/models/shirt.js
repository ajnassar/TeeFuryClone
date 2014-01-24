TeeFuryClone.Models.Shirt = Backbone.Model.extend({
  rootUrl: "api/shirts",
  parse: function parse(data){
    data.comments = new TeeFuryClone.Collections.Comments(data.comments, {});
    return data;
  }
});