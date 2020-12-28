class CardSerializer

  include Rails.application.routes.url_helpers

  include FastJsonapi::ObjectSerializer
  attributes :rank, :suite, :front


end
