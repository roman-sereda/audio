class Audio < ActiveRecord::Base

  mount_uploader :uri , AudioUploader

end
