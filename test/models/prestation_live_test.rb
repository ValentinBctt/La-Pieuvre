require "test_helper"

class PrestationLiveTest < ActiveSupport::TestCase
  test "administrate can resolve the resource class from the pluralized name" do
    assert_equal PrestationLive, PrestationLife
  end
end
