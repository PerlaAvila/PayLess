Rails.application.routes.draw do
  root 'static_pages#home'

  get 'static_pages/promociones'

  get 'static_pages/autos'

  get 'static_pages/locaciones'

  get 'static_pages/paylessclub'
end