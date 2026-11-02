require "test_helper"

class DomainsTest < ActionDispatch::IntegrationTest
  test "bureau pages show the under construction page" do
    get "/bureau"
    assert_response :success
    assert_select "h1", "Bureau en travaux"

    get "/bureau/projects/1"
    assert_response :success
    assert_select "h1", "Bureau en travaux"
  end

  test "maison page shows the under construction page" do
    get "/maison"
    assert_response :success
    assert_select "h1", "Maison en travaux"
  end

  test "bureau api is no longer exposed on the atelier domain" do
    assert_raises(ActionController::RoutingError) { get "/api/bureau" }
  end

  test "atelier page stays available" do
    get "/atelier"
    assert_response :success
  end
end
