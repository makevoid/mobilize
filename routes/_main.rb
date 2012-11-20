class Mobilize < Sinatra::Base
  get "/" do
    haml :index
  end
end