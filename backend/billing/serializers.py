from rest_framework import serializers
from billing.models import Billing


class BillingSerializer(serializers.Serializer):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    client_code = models.IntegerField()
    category_product = models.CharField(max_length=256)
    sku_product = models.CharField(max_length=256)
    date = models.DateField()
    quantity = models.IntegerField()
    value_billing = models.DecimalField(decimal_places=2, max_digits=15)

    def create(self, validated_data: dict) -> dict:
        billing = Billing.objects.create(**validated_data)

        billing.save()
        return billing
