json.array! @shirts do |shirt|
  json.(shirt, :id, :name, :artist_id, :submitted)
  json.design_url_big(shirt.design_img.url(:big))
  json.design_url_small(shirt.design_img.url(:small))
end