resource "azurerm_resource_group" "website" {
  name     = "rg-${var.name}"
  location = var.location
}

resource "azurerm_static_web_app" "website" {
  name                = var.name
  resource_group_name = azurerm_resource_group.website.name
  location            = azurerm_resource_group.website.location
  sku_tier            = "Free"
  sku_size            = "Free"

  # Do not set a repository token. That makes Azure add its own workflow.
  # A deploy with the API key records the repository afterwards. Ignore that drift.
  preview_environments_enabled = false

  lifecycle {
    ignore_changes = [
      repository_branch,
      repository_url,
    ]
  }
}
