json.array! @shirts do |shirt|
  json.(shirt, :id, :name, :artist_id, :submitted)
  json.design_url(shirt.design_img.url(:big))
end