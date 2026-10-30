variable "name" {
  type        = string
  description = "Static Web App name. It is also the hostname prefix and must be globally unique."
  default     = "abc-website"

  validation {
    condition     = can(regex("^[a-z0-9][a-z0-9-]{0,38}[a-z0-9]$", var.name))
    error_message = "Use 2 to 40 lowercase letters, digits, or hyphens, and do not start or end with a hyphen."
  }
}

variable "location" {
  type        = string
  description = "Azure region for the website. East US 2 accepts new Free-plan Static Web Apps. West Europe does not."
  default     = "eastus2"
}
