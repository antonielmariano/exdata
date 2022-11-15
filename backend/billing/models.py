from django.db import models
import uuid


class Billing(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    client_code = models.IntegerField()
    category_product = models.CharField(max_length=256)
    sku_product = models.CharField(max_length=256)
    date = models.DateField()
    quantity = models.IntegerField()
    value_billing = models.DecimalField(10, 2)
    
