output "hostname" {
  value       = azurerm_static_web_app.website.default_host_name
  description = "Public hostname, without the https scheme."
}

output "deployment_token" {
  value       = azurerm_static_web_app.website.api_key
  description = "Deployment token for the GitHub secret AZURE_STATIC_WEB_APPS_API_TOKEN."
  sensitive   = true
}
