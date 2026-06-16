import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from ..config import settings


async def send_contact_notification(name: str, email: str, message: str) -> None:
    """
    Sends an email to NOTIFY_EMAIL when a contact form is submitted.
    Silently skips if SMTP credentials are not set in .env.
    """
    if not settings.email_enabled:
        return

    body = (
        f"New contact form submission — AI Pathsala\n\n"
        f"Name:    {name}\n"
        f"Email:   {email}\n"
        f"Message:\n{message}\n\n"
        f"---\nSent from aipathshalaglobal.com contact form."
    )

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"New Contact from {name}"
    msg["From"] = settings.SMTP_USER
    msg["To"] = settings.NOTIFY_EMAIL
    msg.attach(MIMEText(body, "plain"))

    try:
        await aiosmtplib.send(
            msg,
            hostname=settings.SMTP_HOST,
            port=settings.SMTP_PORT,
            username=settings.SMTP_USER,
            password=settings.SMTP_PASS,
            start_tls=True,
        )
    except Exception:
        # Never let email failure break the API response
        pass
