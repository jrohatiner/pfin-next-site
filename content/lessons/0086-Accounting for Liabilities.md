# Accounting for Liabilities

Every firm needs capital to purchase assets like inventory, land, and equipment. They also need cash to help manage expenses such as paying employees. How do companies raise the money they need to run their businesses? The answer is through a mix of liabilities (borrowing money) and equity (selling shares of ownership of the company). Liabilities and equity make up the right-hand side of the fundamental accounting equation:

**Assets = Liabilities + Shareholders’ Equity**

This article will focus on liabilities and their accounting treatment under GAAP, covering current liabilities and long-term bond issuances.

## Current Liabilities

Current liabilities are defined as any liability due within one year. This typically includes accounts payable, accruals, and short-term debt. This is not limited to debt that was originally issued at a term of under a year—long-term debt becomes a current liability as soon as it reaches one year to maturity. It is then referred to as the “current portion” of long-term debt.

Unlike asset accounts, a debit to a liability account ***decreases*** the account instead of increasing it. Likewise, a credit to a liability increases the account. This makes sense from the perspective that the right-hand side of the balance sheet (liabilities and equity) are obligations to the company, and therefore they should receive the opposite treatment as the left-hand side with assets.

### Accounts Payable

Journal entries for accounts payable are fairly straightforward. There are two main entries that involve the account; the initial credit to accounts payable and later the cash payment that pays off the liability. Say I own a shoe company and have purchased $10,000 worth of inventory using $5,000 in cash and $5,000 of credit. The initial entry would be as follows:

|  |  |  |
| --- | --- | --- |
| **Account** | **Debit** | **Credit** |
| Inventory | $10,000 |  |
| Cash |  | $5,000 |
| Accounts Payable |  | $5,000 |

When we eventually pay the supplier for the $5,000 purchased on credit, the following entry would be applied:

|  |  |  |
| --- | --- | --- |
| **Account** | **Debit** | **Credit** |
| Accounts Payable | $5,000 |  |
| Cash |  | $5,000 |

The debit of $5,000 decreases accounts payable back down to zero and we are left with a $0 ending balance in accounts payable (assuming no further purchases on credit).

### Interest and Rents Payable

Certain other “payable” liabilities, including interest payable and rent payable, have nearly identical journal entries to accounts payable and therefore it serves as a good basic framework. These accounts where an expense has been incurred but not yet paid are known as accruals. Here’s an example: if my shoe business borrowed **$100,000** for one year at an **8%** interest rate on **December 1, 2016**, what amount do we need to “accrue” or recognize as interest expense on December 31, 2016?

The first step is to calculate what amount of interest is owed for an entire year. This is done by multiplying **$100,000 \* 8%** to reach an expense of **$8,000**. However, the matching concept dictates that we recognize expenses as they are incurred, and we have not incurred an entire year’s worth of interest. Instead, the next step is to calculate the fraction of a year that we have been paying interest. In this instance, we take one month (because we have only held the debt during December) divided by the twelve months in an entire year to reach a value of **1/12**. Finally, we take **1/12 \* $8,000** to conclude that our accrued amount needs to be **$667**.

**Issuance of Note 12/01/2016**

|  |  |  |
| --- | --- | --- |
| **Account** | **Debit** | **Credit** |
| Cash | $100,000 |  |
| Note Payable |  | $100,000 |

**Accrual of Interest 12/31/2016**

|  |  |  |
| --- | --- | --- |
| **Account** | **Debit** | **Credit** |
| Interest Expense | $667 |  |
| Interest Payable |  | $667 |

The accrual entry will be identical every month from January-October, as the company incurs a month’s worth of interest during each period. If the cash interest is due when the note matures in December of 2017, the following entries would be necessary on November 30, 2017:

**Accrual of Interest 12/31/2016**

|  |  |  |
| --- | --- | --- |
| **Account** | **Debit** | **Credit** |
| Interest Expense | $667 |  |
| Interest Payable |  | $667 |

**Repayment of Notes and Interest 11/30/2017**

|  |  |  |
| --- | --- | --- |
| **Account** | **Debit** | **Credit** |
| Note Payable | $100,000 |  |
| Interest Payable | $8,000 |  |
| Cash |  | $108,000 |

This accrues our last period of interest before accounting for the cash payment of the note and interest.

## Long-term Debt

Often it is more practical for companies to issue debt that does not have to be paid back within a year. Issuances with maturity between one and ten years are commonly referred to as “**notes**” whereas those above ten years are called “**bonds**”.

When a company issues long-term debt, the party purchasing the debt (the creditor) may not always pay the face value of the bond. If debt is issued at below face value, it is said to be at a “*discount*”, whereas bonds issued above face value are at a “*premium*”. Both discount and premium bonds require special accounting treatment—we will look at examples of each.

### Discount Bonds

Let’s say that on January 1, 2017 the shoe company issues **$50,000** in **8%** 20-year bonds for **$48,000**—discount bonds. The opening journal entry would be as follows:

|  |  |  |
| --- | --- | --- |
| **Account** | **Debit** | **Credit** |
| Cash | $48,000 |  |
| Discount on Bonds Payable | $2,000 |  |
| Bonds Payable |  | $50,000 |

Assuming the shoe company doesn’t default, at the end of 20 years the bonds will trade at par (or equal to face value). Therefore, we need to amortize the discount on bonds payable over the 20-year life of the issuance. Typically, firms do this with semiannual entries to match up with semiannual interest payments on bonds. Using straight-line amortization, our first entry would go like this:

|  |  |  |
| --- | --- | --- |
| **Account** | **Debit** | **Credit** |
| Interest Expense | $2,050 |  |
| Discount on Bonds Payable |  | $50 |
| Cash |  | $2,000 |

Interest payable is calculated by taking the bonds’ face value of **$50,000** times **8%** divided by two (to account for semiannual interest payments). Then, to calculate the amount of discount to amortize, we take **$50,000** face value minus the **$48,000** issuance price to get the total discount amount of **$2,000**. Then, since we need to amortize the discount over 40 payment periods (20 years times two payments per year), we take **$2,000/40** and reach **$50** that needs to be amortized per period. The interest expense account is a plug figure—we add **$2,000 +$50** to get **$2,050**. This entry will be repeated until the entire discount is amortized and the bonds reach maturity.

### Premium Bonds

Now, what if the same bonds ($50,000 face value, 20 years to maturity, 8% coupon rate) were issued for $54,000? These would be premium bonds, which have slightly different journal entries. The issuance entry would look like this:

|  |  |  |
| --- | --- | --- |
| **Account** | **Debit** | **Credit** |
| Cash | $54,000 |  |
| Premium on Bonds Payable |  | $4,000 |
| Bonds Payable |  | $50,000 |

Notice that the premium is a credit account instead of a debit, and that this time we will have to amortize the premium through debit entries. The amortization entries would be as follows:

|  |  |  |
| --- | --- | --- |
| **Account** | **Debit** | **Credit** |
| Interest Expense | $1,900 |  |
| Premium on Bonds Payable | $100 |  |
| Cash |  | $2,000 |

Interest payable is still **8% \* $50,000 \*1/2**, and the premium amortized is found by taking the **$4,000** total premium divided by **40** payment periods. We subtract **$100** from **$2,000** to get the interest expense of **$1,900**.

**Implications for Financial Statements**

The interest expense that gets applied on the income statements is the “*interest expense*” account from our above entries, **NOT** the cash interest paid. Therefore, premium bonds result in the company paying a greater amount of cash interest relative to the amount that is expensed, whereas discount bonds cause a higher expense than cash paid. This corresponds with the greater amount of cash raised by a premium issuance and the lower amount raised from discount issuances.

On the balance sheet, long-term liabilities are listed at their carrying value, not face value. This means that for premium bonds, the balance sheet would show the bonds at face value plus any unamortized premium. Discount bonds would be shown at face value minus any unamortized discount.

## Pop Quiz

**What is the difference between a short-term and a long-term liability?**

|  |  |
| --- | --- |
|  | Long term liabilities are due in more than 6 months |
|  | Long term liabilities are due in more than 1 year |
|  | Long term liabilities are due in more than 5 years |
|  | Companies can define the threshold for themselves |

**Which type of bond has a higher value on the balance sheet?**

|  |  |
| --- | --- |
|  | Short-term bonds |
|  | Premium bonds |
|  | Discount Bonds |
|  | Junk Bonds |

**Which type of bond will pay more in interest over its life?**

|  |  |
| --- | --- |
|  | Short-term bonds |
|  | Premium bonds |
|  | Discount Bonds |
|  | B and C will pay the same amount |

Submit
Please complete all the questions


---
## Transcript (best effort)

Accounting for Liabilities
Every firm needs capital to purchase assets like inventory, land, and equipment. They also need cash to help manage expenses such as paying employees. How do companies raise the money they need to run their businesses? The answer is through a mix of liabilities (borrowing money) and equity (selling shares of ownership of the company). Liabilities and equity make up the right-hand side of the fundamental accounting equation:
Assets = Liabilities + Shareholders’ Equity
This article will focus on liabilities and their accounting treatment under GAAP, covering current liabilities and long-term bond issuances.
Current Liabilities
Current liabilities are defined as any liability due within one year. This typically includes accounts payable, accruals, and short-term debt. This is not limited to debt that was originally issued at a term of under a year—long-term debt becomes a current liability as soon as it reaches one year to maturity. It is then referred to as the “current portion” of long-term debt.
Unlike asset accounts, a debit to a liability account
decreases
the account instead of increasing it. Likewise, a credit to a liability increases the account. This makes sense from the perspective that the right-hand side of the balance sheet (liabilities and equity) are obligations to the company, and therefore they should receive the opposite treatment as the left-hand side with assets.
Accounts Payable
Journal entries for accounts payable are fairly straightforward. There are two main entries that involve the account; the initial credit to accounts payable and later the cash payment that pays off the liability. Say I own a shoe company and have purchased $10,000 worth of inventory using $5,000 in cash and $5,000 of credit. The initial entry would be as follows:
Account
Debit
Credit
Inventory
$10,000
Cash
$5,000
Accounts Payable
$5,000
When we eventually pay the supplier for the $5,000 purchased on credit, the following entry would be applied:
Account
Debit
Credit
Accounts Payable
$5,000
Cash
$5,000
The debit of $5,000 decreases accounts payable back down to zero and we are left with a $0 ending balance in accounts payable (assuming no further purchases on credit).
Interest and Rents Payable
Certain other “payable” liabilities, including interest payable and rent payable, have nearly identical journal entries to accounts payable and therefore it serves as a good basic framework. These accounts where an expense has been incurred but not yet paid are known as accruals. Here’s an example: if my shoe business borrowed
$100,000
for one year at an
8%
interest rate on
December 1, 2016
, what amount do we need to “accrue” or recognize as interest expense on December 31, 2016?
The first step is to calculate what amount of interest is owed for an entire year. This is done by multiplying
$100,000
*
8%
to reach an expense of
$8,000
. However, the matching concept dictates that we recognize expenses as they are incurred, and we have not incurred an entire year’s worth of interest. Instead, the next step is to calculate the fraction of a year that we have been paying interest. In this instance, we take one month (because we have only held the debt during December) divided by the twelve months in an entire year to reach a value of
1/12
. Finally, we take
1/12 *
$8,000
to conclude that our accrued amount needs to be
$667
.
Issuance of Note 12/01/2016
Account
Debit
Credit
Cash
$100,000
Note Payable
$100,000
Accrual of Interest 12/31/2016
Account
Debit
Credit
Interest Expense
$667
Interest Payable
$667
The accrual entry will be identical every month from January-October, as the company incurs a month’s worth of interest during each period. If the cash interest is due when the note matures in December of 2017, the following entries would be necessary on November 30, 2017:
Accrual of Interest 12/31/2016
Account
Debit
Credit
Interest Expense
$667
Interest Payable
$667
Repayment of Notes and Interest 11/30/2017
Account
Debit
Credit
Note Payable
$100,000
Interest Payable
$8,000
Cash
$108,000
This accrues our last period of interest before accounting for the cash payment of the note and interest.
Long-term Debt
Often it is more practical for companies to issue debt that does not have to be paid back within a year. Issuances with maturity between one and ten years are commonly referred to as “
notes
” whereas those above ten years are called “
bonds
”.
When a company issues long-term debt, the party purchasing the debt (the creditor) may not always pay the face value of the bond. If debt is issued at below face value, it is said to be at a “
discount
”, whereas bonds issued above face value are at a “
premium
”. Both discount and premium bonds require special accounting treatment—we will look at examples of each.
Discount Bonds
Let’s say that on January 1, 2017 the shoe company issues
$50,000
in
8%
20-year bonds for
$48,000
—discount bonds. The opening journal entry would be as follows:
Account
Debit
Credit
Cash
$48,000
Discount on Bonds Payable
$2,000
Bonds Payable
$50,000
Assuming the shoe company doesn’t default, at the end of 20 years the bonds will trade at par (or equal to face value). Therefore, we need to amortize the discount on bonds payable over the 20-year life of the issuance. Typically, firms do this with semiannual entries to match up with semiannual interest payments on bonds. Using straight-line amortization, our first entry would go like this:
Account
Debit
Credit
Interest Expense
$2,050
Discount on Bonds Payable
$50
Cash
$2,000
Interest payable is calculated by taking the bonds’ face value of
$50,000
times
8%
divided by two (to account for semiannual interest payments). Then, to calculate the amount of discount to amortize, we take
$50,000
face value minus the
$48,000
issuance price to get the total discount amount of
$2,000
. Then, since we need to amortize the discount over 40 payment periods (20 years times two payments per year), we take
$2,000
/40
and reach
$50
that needs to be amortized per period. The interest expense account is a plug figure—we add
$2,000
+$50
to get
$2,050
. This entry will be repeated until the entire discount is amortized and the bonds reach maturity.
Premium Bonds
Now, what if the same bonds ($50,000 face value, 20 years to maturity, 8% coupon rate) were issued for $54,000? These would be premium bonds, which have slightly different journal entries. The issuance entry would look like this:
Account
Debit
Credit
Cash
$54,000
Premium on Bonds Payable
$4,000
Bonds Payable
$50,000
Notice that the premium is a credit account instead of a debit, and that this time we will have to amortize the premium through debit entries. The amortization entries would be as follows:
Account
Debit
Credit
Interest Expense
$1,900
Premium on Bonds Payable
$100
Cash
$2,000
Interest payable is still
8%
*
$50,000
*1/2
, and the premium amortized is found by taking the
$4,000
total premium divided by
40
payment periods. We subtract
$100
from
$2,000
to get the interest expense of
$1,900
.
Implications for Financial Statements
The interest expense that gets applied on the income statements is the “
interest expense
” account from our above entries,
NOT
the cash interest paid. Therefore, premium bonds result in the company paying a greater amount of cash interest relative to the amount that is expensed, whereas discount bonds cause a higher expense than cash paid. This corresponds with the greater amount of cash raised by a premium issuance and the lower amount raised from discount issuances.
On the balance sheet, long-term liabilities are listed at their carrying value, not face value. This means that for premium bonds, the balance sheet would show the bonds at face value plus any unamortized premium. Discount bonds would be shown at face value minus any unamortized discount.
Pop Quiz
