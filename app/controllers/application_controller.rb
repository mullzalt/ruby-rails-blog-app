class ApplicationController < ActionController::Base
  def not_found
    raise ActionController::RoutingError, 'Not Found'
  rescue StandardError
    render_404
  end

  def render_404
    render file: "#{Rails.root}/public/404", status: :not_found
  end

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[username email password password_confirmation])
  end
end
