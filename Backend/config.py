from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    # Database
    DATABASE_URL: str = "postgresql+asyncpg://postgres:password@localhost:5432/aipathsala"

    # App
    APP_ENV: str  = "development"
    APP_HOST: str = "0.0.0.0"
    APP_PORT: int = 8000

    # CORS
    CORS_ORIGINS: str = "http://localhost:5173"

    @property
    def cors_origins_list(self) -> List[str]:
        return [o.strip() for o in self.CORS_ORIGINS.split(",")]

    # Email
    SMTP_HOST: str    = "smtp.gmail.com"
    SMTP_PORT: int    = 587
    SMTP_USER: str    = ""
    SMTP_PASS: str    = ""
    NOTIFY_EMAIL: str = ""

    @property
    def email_enabled(self) -> bool:
        return bool(self.SMTP_USER and self.SMTP_PASS and self.NOTIFY_EMAIL)


settings = Settings()
