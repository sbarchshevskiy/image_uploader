if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_rails_project", domain: "https://rails-project.com"
else
  Rails.application.config.session_store :cookie_store, key: "_authentication_app"
end