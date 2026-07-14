from rest_framework.permissions import BasePermission


class IsCandidate(BasePermission):
    message = "Only candidates can access this resource."

    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and request.user.role == "candidate"
        )


class IsRecruiter(BasePermission):
    message = "Only recruiters can access this resource."

    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and request.user.role == "recruiter"
        )


class IsAdmin(BasePermission):
    message = "Only admins can access this resource."

    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and request.user.role == "admin"
        )