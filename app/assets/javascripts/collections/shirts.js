TeeFuryClone.Collections.Shirts = Backbone.Collection.extend(
	{

		url: "api/shirts",
		model: TeeFuryClone.Models.Shirt,
    fetchByQuery: function(queryTerms, callback){
      var that = this;
      $.ajax({
        type : 'GET',
        url : "api/shirts/custom",
        dataType : 'json',
        data: queryTerms,
        success: function(data) {
          var newQueryShirts = new TeeFuryClone.Collections.Shirts(data);
          that = newQueryShirts;
          callback(that);
        }
    });
    }
	}
);