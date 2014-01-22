# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#create 10 users here

Dir.chdir('images')
Dir.foreach('.') { |filename|
  next unless filename.include?('.png')
  shirt_name = /([^-]*).png$/.match(filename)[1]
  shirt = Shirt.new({ :name => shirt_name, :artist_id => 1, :submitted => false, color: "#FFF"  })
  file = File.open("/Users/appacademy/Desktop/TeeFuryClone/images/#{filename}")
  shirt.design_img = file
  shirt.save!
  file.close()
}