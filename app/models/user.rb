class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
         
  mount_uploader :thumbnail, UserThumbnailUploader
  
  validates :name, presence: true
  validates :agreement, presence: true, acceptance: {accept: true}
end
