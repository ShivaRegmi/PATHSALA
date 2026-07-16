from ..core.email import send_contact_notification

# Re-export so routes can import from services, keeping the layer consistent.
__all__ = ["send_contact_notification"]
