TeeFuryClone.Collections.Comments = Backbone.Collection.extend(
	{
		url: "comments",
		model: TeeFuryClone.Models.Comment,
    comparator: function(val1, val2){
      if (val1.get('updated_at') > val2.get('updated_at')){
        return -1
      } else if (val1.get('updated_at') < val2.get('updated_at')){
        return 1;
      } else {
        return 0;
      }
    }
	}
);