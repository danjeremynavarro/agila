from django.db import models


class GlAccount(models.Model):
    """
    https://www.accountingcoach.com/debits-and-credits/explanation
    """
    ASSETS = "A"
    LIABILITIES = "L"
    REVENUES = "R"
    EXPENSES = "E"
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

    _account_number = models.IntegerField(primary_key=True)
    _account_name = models.TextField()
    account_code = models.CharField(max_length=4, choices=TYPE, default=NONE)
    account_description = models.TextField()
    is_debit = models.BooleanField()  # If True the normal value is debit
    is_a_parent = models.BooleanField(default=False)  # Use as anchor
    parent = models.BigIntegerField(blank=True)  # Points to another account

    @property
    def account_number(self):
        return self._account_number

    @account_number.setter
    def account_number(self, a):
        self._account_number = a

    @property
    def account_name(self):
        return self.account_name

    @account_name.setter
    def account_name(self, a):
        self._account_name = a

