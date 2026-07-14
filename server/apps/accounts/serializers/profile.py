from rest_framework import serializers
from apps.accounts.models import User


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = User

        fields = (
            "id",
            "username",
            "email",
            "role",
            "is_active",
            "date_joined",
        )

        read_only_fields = fields