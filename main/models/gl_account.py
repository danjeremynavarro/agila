from django.db import models
from main.models.record import Record


class GlAccount(models.Model):
    """
    https://www.accountingcoach.com/debits-and-credits/explanation
    """
    ASSETS = "AS"
    LIABILITIES = "LI"
    REVENUES = "RE"
    EXPENSES = "EX"
    EQUITY = "EQ"
    NONE = "N/A"

    TYPE = [
        (ASSETS, "Assets"),
        (LIABILITIES, "Liabilities"),
        (REVENUES, "Revenues"),
        (EXPENSES, "Expenses"),
        (EQUITY, "Equity"),
        (NONE, "None")
    ]

    account_name = models.CharField(max_length=32)
    account_code = models.CharField(primary_key=True, max_length=4, choices=TYPE, default=NONE)
    account_description = models.TextField(blank=True)
    is_a_parent = models.BooleanField(default=False)  # Use as anchor
    parent = models.BigIntegerField(blank=True)  # Points to another account

