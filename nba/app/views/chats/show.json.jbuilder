json.id @chat.id
json.content @chat.content
json.user_id @chat.user_id
json.team_id @chat.team_id
json.created_at @chat.created_at
json.updated_at @chat.updated_at

json.user do
    json.user_id @chat.user.id
    json.name @chat.user.name
    json.icon_img @chat.user.icon_img
end

json.favoiriter @chat.favoriter

    
