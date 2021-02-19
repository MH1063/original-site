# Name（リポジトリ/プロジェクト）
 
NBA-API AND Rails-API  
 
NBA(アメリカプロバスケットボール)の選手情報、rails-APIの基本的な機能を実装したwebAPI

# Demo
 
[![Image from Gyazo](https://i.gyazo.com/0f6bb2a48fb4beaf26087d5de62bd876.jpg)](https://gyazo.com/0f6bb2a48fb4beaf26087d5de62bd876)
 
# Function
 
・ユーザーCRUD機能  

・token認証 

・チャット GET POST DELETE機能 
 
・follow, unfollow機能 

・favorite, unfavorite機能 

・NBA選手情報のマスターデータベース化 

・画像  GET UPDATE機能 
 
# Requirement

* Ruby 2.5.3
* Rails 5.2.4.4
 
# Comment
 
  注力した機能・点  
  * curlコマンド, Insomniaを利用したAPIのデータの確認  
  * gem'carrierwave','mini_magick'を使用した画像の保存機能  
  * gem 'seed_dump'を使用した開発データを本番データへの移行  
  * 中間テーブルを利用したそれぞれのModelの関係構築  
  * jbuilderを使用したデータのjson化

# TestAccount 

・Email test30@gmail.com

・password 5tgb6yhn
 
# HarokuURL 

https://nba-api24.herokuapp.com 

https://nba-view24.herokuapp.com 

* APIの為、こちらの https://nba-view24.herokuapp.com からAPIにアクセスしている。
