from datetime import timedelta
from pathlib import Path
import os
import dj_database_url
from dotenv import load_dotenv
from decouple import config

BASE_DIR = Path(__file__).resolve().parent.parent.parent

load_dotenv(BASE_DIR / ".env")

SECRET_KEY = config("SECRET_KEY")

DEBUG = os.getenv("DEBUG") == "True"

ALLOWED_HOSTS = [
    host.strip()
    for host in os.getenv(
        "ALLOWED_HOSTS",
        "",
    ).split(",")
    if host.strip()
]
DJANGO_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]

THIRD_PARTY_APPS = [
    "rest_framework",
    "rest_framework_simplejwt.token_blacklist",

    "corsheaders",
    "django_filters",
    "drf_spectacular",
]

LOCAL_APPS = [
    "apps.accounts",
    "apps.resume",
]
INSTALLED_APPS = (
    DJANGO_APPS
    + THIRD_PARTY_APPS
    + LOCAL_APPS
)
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",

    "django.middleware.security.SecurityMiddleware",

    "whitenoise.middleware.WhiteNoiseMiddleware",

    "django.contrib.sessions.middleware.SessionMiddleware",

    "django.middleware.common.CommonMiddleware",

    "django.middleware.csrf.CsrfViewMiddleware",

    "django.contrib.auth.middleware.AuthenticationMiddleware",

    "django.contrib.messages.middleware.MessageMiddleware",

    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]
ROOT_URLCONF = "config.urls"

WSGI_APPLICATION = "config.wsgi.application"

ASGI_APPLICATION = "config.asgi.application"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",

        "DIRS": [
            BASE_DIR / "templates",
        ],

        "APP_DIRS": True,

        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",

                "django.contrib.auth.context_processors.auth",

                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]
DATABASES = {
    "default": dj_database_url.config(
        default=config("DATABASE_URL"),
        conn_max_age=600,
    )
}
STATIC_URL = "/static/"

STATIC_ROOT = BASE_DIR / "staticfiles"

STATICFILES_DIRS = [
    BASE_DIR / "static",
]

MEDIA_URL = "/media/"

MEDIA_ROOT = BASE_DIR / "media"
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "https://ai-interview-pro-eta.vercel.app",
]
CORS_ALLOW_CREDENTIALS = True

# CSRF ke liye ye check kar lein
CSRF_TRUSTED_ORIGINS = [
    "http://localhost:5173",
    "https://ai-interview-pro-eta.vercel.app",
]
REST_FRAMEWORK = {
    "DEFAULT_SCHEMA_CLASS":
        "drf_spectacular.openapi.AutoSchema",

    "DEFAULT_FILTER_BACKENDS": [
        "django_filters.rest_framework.DjangoFilterBackend",
    ],

    "DEFAULT_PERMISSION_CLASSES": (
        "rest_framework.permissions.AllowAny",
    ),
    "EXCEPTION_HANDLER": (
    "apps.core.exceptions.custom_exception_handler"
),
}

SPECTACULAR_SETTINGS = {
    "TITLE": "AI Interview Pro API",
    "DESCRIPTION": (
        "Production-ready AI Resume Analyzer API "
        "built with Django REST Framework."
    ),
    "VERSION": "1.0.0",

    "SERVE_INCLUDE_SCHEMA": False,

    "SWAGGER_UI_SETTINGS": {
        "persistAuthorization": True,
    },

    "COMPONENT_SPLIT_REQUEST": True,

    "SECURITY": [
        {
            "BearerAuth": [],
        },
    ],

    "SECURITY_SCHEMES": {
        "BearerAuth": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT",
            "description": (
                "Enter JWT access token.\n\n"
                "Example:\n"
                "Bearer eyJhbGciOiJIUzI1NiIs..."
            ),
        },
    },
}
STATICFILES_STORAGE = (
    "whitenoise.storage.CompressedManifestStaticFilesStorage"
)
AUTH_USER_MODEL = "accounts.User"

SIMPLE_JWT = {

    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=30),

    "REFRESH_TOKEN_LIFETIME": timedelta(days=7),

    "ROTATE_REFRESH_TOKENS": True,

    "BLACKLIST_AFTER_ROTATION": True,

    "UPDATE_LAST_LOGIN": True,

    "ALGORITHM": "HS256",

    "AUTH_HEADER_TYPES": ("Bearer",),

    "AUTH_TOKEN_CLASSES": (
        "rest_framework_simplejwt.tokens.AccessToken",
    ),

}
GEMINI_API_KEY = config(
    "GEMINI_API_KEY",
    default="",
)

# ==========================================================
# Celery Configuration
# ==========================================================

CELERY_BROKER_URL = config(
    "CELERY_BROKER_URL",
    default="redis://127.0.0.1:6379/0",
)

CELERY_RESULT_BACKEND = config(
    "CELERY_RESULT_BACKEND",
    default=CELERY_BROKER_URL,
)

CELERY_ACCEPT_CONTENT = ["json"]

CELERY_TASK_SERIALIZER = "json"

CELERY_RESULT_SERIALIZER = "json"

CELERY_TIMEZONE = "Asia/Kolkata"

CELERY_ENABLE_UTC = False

CELERY_TASK_TRACK_STARTED = True

CELERY_TASK_TIME_LIMIT = 300

CELERY_TASK_SOFT_TIME_LIMIT = 240