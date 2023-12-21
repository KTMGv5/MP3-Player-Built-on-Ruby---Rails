class PlayerController < ApplicationController
  def index
    @mp3_files = Dir.glob("public/mp3/*.mp3").map { |f| File.basename(f) }
  end
end
