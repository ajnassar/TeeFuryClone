json.array! @shirts do |shirt|
  json.(shirt, :id, :name, :artist_id, :submitted, :color)
  json.design_url_big(shirt.design_img.url(:big))
  json.design_url_small(shirt.design_img.url(:small))
  json.model_url_big(shirt.model_img.url(:big))
  json.model_url_small(shirt.model_img.url(:small))
end