# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'securerandom'

#5.times do
    #User.create(
      #name: Faker::Name.unique.name,
      #email: Faker::Internet.unique.email,
      #password: SecureRandom.base64(30)
    #)
#end

Team.create!(name: 'Denver Nuggets',
　　　　　　conference: 'West',
　　　　　　division: 'NORTHWEST', 
　　　　　　founded: '1967年', 
　　　　　　base: 'コロラド州デンバー', 
　　　　　　championship: '0回',
　　　　　　arena: 'Pepsi Center', 
　　　　　　arena_img: open('https://nba-api24.herokuapp.com/public/img/1Nuggets/Pepsi.jpg'),
　　　　　　player1: 'Gary Harris', 
　　　　　　player2: 'Jamal Murray', 
　　　　　　player3: 'Michael Porter Jr', 
　　　　　　player4: 'Paul Millsap', 
　　　　　　player5: 'Nikola Jokic', 
　　　　　　player1_img: open('https://nba-api24.herokuapp.com/public/img/1Nuggets/Harris.jpg'),
　　　　　　player2_img: open('https://nba-api24.herokuapp.com/public/img/1Nuggets/Murray.jpg'),
　　　　　　player3_img: open('https://nba-api24.herokuapp.com/public/img/1Nuggets/Porter.jpg'),
　　　　　　player4_img: open('https://nba-api24.herokuapp.com/public/img/1Nuggets/Millsap.jpg'),
　　　　　　player5_img: open('https://nba-api24.herokuapp.com/public/img/1Nuggets/Jokic.jpg'),
　　　　　　player1_hw: '1.93メートル 95.3キロ',
　　　　　　player1_birth: '1994年9月14日',
　　　　　　player1_start: '2014',
　　　　　　player1_pro: '6',
　　　　　　player2_hw: '1.9メートル 97.5キロ',
　　　　　　player2_birth: '1997年2月23日',
　　　　　　player2_start: '2016',
　　　　　　player2_pro: '4',
　　　　　　player3_hw: '2.08メートル 98.9キロ',
　　　　　　player3_birth: '1998年6月29',
　　　　　　player3_start: '2019',
　　　　　　player3_pro: '1',
　　　　　　player4_hw: '"2.01メートル 116.6キロ',
　　　　　　player4_birth: '1985年2月10日',
　　　　　　player4_start: '2006',
　　　　　　player4_pro: '14',
　　　　　　player5_hw: '2.11メートル 128.8キロ',
　　　　　　player5_start: '1995年2月19日',
　　　　　　player5_birth: '2015',
　　　　　　player5_pro: '5'
)


