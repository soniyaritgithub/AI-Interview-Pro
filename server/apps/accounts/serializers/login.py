from django.contrib.auth import authenticate

from rest_framework import serializers


class LoginSerializer(serializers.Serializer):

    email = serializers.EmailField()

    password = serializers.CharField()

    def validate(self, attrs):

        user = authenticate(
            username=attrs["email"],
            password=attrs["password"],
        )

        if user is None:
            raise serializers.ValidationError(
                "Invalid credentials."
            )

        attrs["user"] = user

        return attrs