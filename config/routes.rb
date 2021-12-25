Rails.application.routes.draw do
  root 'characters#index'
  match '/curl_example' => 'characters#curl_get_example', via: :get
  match '/curl_example' => 'characters#curl_post_example', via: :post
  resources :characters
end