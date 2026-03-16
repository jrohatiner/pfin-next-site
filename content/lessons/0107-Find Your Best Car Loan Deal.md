# Find Your Best Car Loan Deal

You finally made the big decision – you are going to buy a car. You did your research and the test drives – you found 3 cars that you really like, from three different dealerships. You really love them all – but at the end of the day, your final decision will come down to price.

![](/images/6cfea81946f34132.png)

But what price will you focus on? The “sticker” price is one factor – there is some difference between the dealerships:

|  |  |  |  |
| --- | --- | --- | --- |
|  | **Dearer A** | **Dealer B** | **Dealer C** |
| Sticker Price | $9,500 | $10,200 | $11,600 |

At first glance, Dealer C seems a lot more expensive. But you know you cannot afford to buy the entire car up-front; you only have $3,000 in your bank account, so you will need to seek financing. Each of the different dealers offers you a combination of financing terms:

|  | **Dearer A** | **Dealer B** | **Dealer C** |
| --- | --- | --- | --- |
| Minimum Down Payment | 0 | 5% | 10% |
| APR | 15% | 10% | 13% |
| Loan Term | 40 months | 60 months | 50 months |
| Special Promotion | None | $500 Cash Back | No payments for 6 months |

None of the dealers let you pay off the loan early – you’re going to need to make all the payments on each loan to fully pay them off. No payments for 6 months and cash back sound interesting – and so does a lower down payment so you can keep more money in your bank account. But at the end of the day, what matters most to you are two things:

1. What is the total amount you need to pay for each car?
2. What will be your total monthly payments?

You just got home from the last test-drive with all of this material – you sit down on your desk and open your laptop to find out.

### Using Excel or Google Sheets to Find Monthly and Total Payments

We want to compare these loans to get an apples-to-apples comparison of the two metrics we care most about – what will be your total monthly payment, and how much in total will you pay for each car.

### Step 1: Write Down Your Data

First step is to open a new spreadsheet and bring in the key data points: the Sticker Price, APR, and Minimum Down Payment % for each dealer.

|  | Dealer A | Dealer B | Dealer C |
| --- | --- | --- | --- |
| Price | 9500 | 10200 | 11600 |
| APR | 15% | 10% | 13% |
| Loan Term (in months) | 40 | 60 | 50 |
| Minimum Down Payment % | 0% | 5% | 10% |

Notice that we need to keep everything formatted as numbers (don’t put “Months” after the number of months, for example). This will make it easier to do calculations later.

### Step 2: Basic calculations for Dealer A

We see that Dealer B and Dealer C are both offering special loan terms, but Dealer A is straightforward. We can start by calculating the Monthly Payment and Total Payments just for Dealer A.

The first thing to do is find our *monthly* interest rate. All loans are advertised in APR so you can easily compare them at a glance, but does not help us to find our actual monthly payments. To calculate your monthly interest rate, simply divide the APR by 12.

|  | Dealer A |
| --- | --- |
| Price | 9500 |
| APR | 15% |
| Loan Term (in months) | 40 |
| Minimum Down Payment % | 0% |
|  |  |
| Monthly Interest Rate | 0.0125 |

It looks like Dealer A is giving this loan a 1.25% monthly interest rate.

Next, we need to calculate the minimum down payment. This would be the “Sticker Price” times the “Minimum Down Payment %”. Since Dealer A says 0% down payment, that means our minimum down payment is also 0.

|  | Dealer A |
| --- | --- |
| Price | 9500 |
| APR | 15% |
| Loan Term (in months) | 40 |
| Minimum Down Payment % | 0% |
|  |  |
| Monthly Interest Rate | 0.0125 |
| Minimum Down Payment | 0 |

Last, we need to calculate the entire amount we need to finance. This is the Sticker Price minus the Down Payment. Since the down payment is $0, for Dealer A we will be financing the entire amount.

|  | Dealer A |
| --- | --- |
| Price | 9500 |
| APR | 15% |
| Loan Term (in months) | 40 |
| Minimum Down Payment % | 0% |
|  |  |
| Monthly Interest Rate | 0.0125 |
| Minimum Down Payment | 0 |
| Amount to finance | 9500 |

### Step 3: Finding Your Monthly Payment and Total Payment

You can find your monthly payments using a built-in “Payment” function in excel. The formula is

*=PMT(monthly interest rate, number of months, total amount financed)*

The “PMT” function will return a negative number – this is normal. It looks like for Dealer A, we will have a $303.25 monthly payment.

|  | Dealer A |
| --- | --- |
| Price | 9500 |
| APR | 15% |
| Loan Term (in months) | 40 |
| Minimum Down Payment % | 0% |
|  |  |
| Monthly Interest Rate | 0.0125 |
| Minimum Down Payment | 0 |
| Amount to finance | 9500 |
|  |  |
| --- | --- |
| Monthly Payment | ($303.25) |

To calculate the total amount we’re going to pay for this car, we will multiply the monthly payment by the total payments.

We also need to add in our down payment. Since “PMT” came out negative, **subtract** your down payment. This will give us our ***total payment***. Because our down payment at Dealer A was zero, it does not change our total payments.

|  | Dealer A |
| --- | --- |
| Price | 9500 |
| APR | 15% |
| Loan Term (in months) | 40 |
| Minimum Down Payment % | 0% |
|  |  |
| Monthly Interest Rate | 0.0125 |
| Minimum Down Payment | 0 |
| Amount to finance | 9500 |
|  |  |
| Monthly Payment | ($303.25) |
|  |  |
| --- | --- |
| Total Payments | $12,130.14 |

It looks like when we include the financing charges, Dealer A is going to cost $12,130.14 total over the entire course of the loan.

## How to Include Cash Back In Your Calculation

Now that we have our numbers for Dealer A, we want to calculate the same thing for Dealer B. Cash Back is easy to account for – we can include this right at the last step.

For Dealer B, we will follow the exact same steps as Dealer A. The only difference is that we do have a down payment, and so our Amount Financed will be different.

|  | Dealer A | Dealer B |
| --- | --- | --- |
| Price | 9500 | 10200 |
| APR | 15% | 10% |
| Loan Term | 40 | 60 |
| Minimum Down Payment % | 0% | 5% |
|  |  |  |
| Monthly Interest Rate | 0.0125 | 0.008333333 |
| Minimum Down Payment | 0 | 510 |
| Total Amount Finance | 9500 | 9690 |
|  |  |  |
| Monthly Payments | ($303.25) | ($205.88) |
|  |  |  |
| --- | --- | --- |
| Total Payments | ($12,130.14) | ($12,353.03) |

Dealer B’s monthly payment is much lower – both because the APR is lower and because the loan is over 20 more months, so we are paying back less of the loan each month. When we calculate our total payments, we need to also consider the Down Payment we made – add this into our total payments to recognize it was paid.

The last step is to subtract our “Cash Back” from the total payment, since this is money we are getting back. This will give us our Grand Total.

|  | Dealer A | Dealer B |
| --- | --- | --- |
| Price | 9500 | 10200 |
| APR | 15% | 10% |
| Loan Term | 40 | 60 |
| Minimum Down Payment % | 0% | 5% |
|  |  |  |
| Monthly Interest Rate | 0.0125 | 0.008333333 |
| Minimum Down Payment | 0 | 510 |
| Total Amount Finance | 9500 | 9690 |
|  |  |  |
| Monthly Payments | ($303.25) | ($205.88) |
| Total Payments | ($12,130.14) | ($12,353.03) |
| Grand Total | ($12,130.14) | ($12,363.03) |
|  |  |  |
| --- | --- | --- |
| Grand Total | ($12,130.14) | ($12,363.03) |

The “Cash Back” and “Down Payment” ALMOST cancel out, so the grand total is not very different.

All together, it looks like Dealer A is cheaper, but Dealer B has much lower monthly payments. If I need extra breathing room to make sure I can always hit my monthly savings goals, Dealer B might be a smart choice.

## How to Calculate 0 Payments

Dealer C is going to be more complicated to calculate. Our loan term is for 50 months, but they are saying that we do not need to make any payments for the first 6 months.

For you as the buyer, it might sound nice to not need to make payments, but it means that the loan is still gathering interest for those months. This is going to make it harder to find the total amount you are financing, and we cannot just use the PMT function.

### Step 1: Finding Monthly Interest and Down Payment

The first step is the same as before – calculate your monthly interest by dividing APR by 12, and calculate your minimum down payment by multiplying the sticker price by the Minimum Down Payment %. Then subtract the Down Payment from the Sticker Price to find your Total Amount Financed.

|  | Dealer A | Dealer B | Dealer C |
| --- | --- | --- | --- |
| Price | 9500 | 10200 | 11600 |
| APR | 15% | 10% | 13% |
| Loan Term | 40 | 60 | 50 |
| Minimum Down Payment % | 0% | 5% | 10% |
|  |  |  |  |
| Monthly Interest Rate | 0.0125 | 0.008333333 | 0.010833333 |
| Minimum Down Payment | 0 | 510 | 1160 |
|  |  |  |  |
| --- | --- | --- | --- |
| Total Amount Financed | 9500 | 9690 | 10440 |

### Step 2: Adding Interest With No Payments

Now we need to know how much interest is going to pile up in those months were we are not making a payment. You can do this in one single function, but to make it easy to see, we will calculate it out for all 6 months.

Start by putting your Total Amount Financed as “Month 0” in a different part of your spreadsheet.

|  |  |
| --- | --- |
| **Months** | **Balance Due** |
| 0 | $     10,440.00 |

Next, add “Month 1” – and we will add the interest payment for the first month. You can calculate this as:

*New balance = Old Balance x (1 + monthly interest rate)*

|  |  |
| --- | --- |
| **Months** | **Balance Due** |
| 0 | $     10,440.00 |
| 1 | $     10,553.10 |

Repeat this for months 2, 3, 4, 5, and 6. The total amount after month 6 is what we need to use when calculating our actual payments.

|  |  |
| --- | --- |
| **Months** | **Balance Due** |
| 0 | $     10,440.00 |
| 1 | $     10,553.10 |
| 2 | $     10,667.43 |
| 3 | $     10,782.99 |
| 4 | $     10,899.80 |
| 5 | $     11,017.89 |
| 6 | $     11,137.25 |

### Step 3: Calculating Monthly and Total Payments

From here, it works just the same as Dealer B – find the monthly payment with the PMT function.

|  | Dealer A | Dealer B | Dealer C |
| --- | --- | --- | --- |
| Price | 9500 | 10200 | 11600 |
| APR | 15% | 10% | 13% |
| Loan Term | 40 | 60 | 50 |
| Minimum Down Payment % | 0% | 5% | 10% |
|  |  |  |  |
| Monthly Interest Rate | 0.0125 | 0.008333333 | 0.010833333 |
| Minimum Down Payment | 0 | 510 | 1160 |
| Total Amount Finance | 9500 | 9690 | 11137 |
|  |  |  |  |
| Monthly Payments | ($303.25) | ($205.88) | ($289.67) |

The rest of the calculation is the same as Dealer B – calculate the total payments, add back in our down payment to get the total.

|  | Dealer A | Dealer B | Dealer C |
| --- | --- | --- | --- |
| Price | 9500 | 10200 | 11600 |
| APR | 15% | 10% | 13% |
| Loan Term | 40 | 60 | 50 |
| Minimum Down Payment % | 0% | 5% | 10% |
|  |  |  |  |
| Monthly Interest Rate | 0.0125 | 0.008333333 | 0.010833333 |
| Minimum Down Payment | 0 | 510 | 1160 |
| Total Amount Finance | 9500 | 9690 | 11137 |
|  |  |  |  |
| Monthly Payments | ($303.25) | ($205.88) | ($289.67) |
| Total Payments | ($12,130.14) | ($12,353.03) | ($14,483.34) |
| Cash Back | 0 | 500 | 0 |
|  |  |  |  |
| --- | --- | --- | --- |
| Grand Total | ($12,130.14) | ($12,363.03) | ($15,643.34) |

It looks like that “6 months with no payments” added a lot to the total balance! Our monthly payments and total payments will both be much more expensive than the other two dealerships when we put everything together.

## Be Smart With Down Payments

In the case above, we used our minimum down payments with every dealer. Most car dealerships want you to finance as much as possible (they make more money on the interest on the loans than the price of the car they sell – most of the “sticker price” goes to the manufacturer or the previous buyer for used cars), but you can always put as much money down as you want.

Let’s see what happens when we ignore the “Minimum Down Payment %”, and instead put our entire $3,000 down with all 3 dealers.

|  | Dealer A | Dealer B | Dealer C |  | Months | Balance Due |
| --- | --- | --- | --- | --- | --- | --- |
| Price | 9500 | 10200 | 11600 |  | 0 | $        8,600.00 |
| APR | 15% | 10% | 13% |  | 1 | $        8,693.17 |
| Loan Term | 40 | 60 | 50 |  | 2 | $        8,787.34 |
| Minimum Down Payment % | 0% | 5% | 10% |  | 3 | $        8,882.54 |
|  |  |  |  |  | 4 | $        8,978.77 |
| Monthly Interest Rate | 0.0125 | 0.008333333 | 0.010833333 |  | 5 | $        9,076.04 |
| Minimum Down Payment | 3000 | 3000 | 3000 |  | 6 | $        9,174.36 |
| Total Amount Finance | 6500 | 7200 | 9174 |  |  |  |
|  |  |  |  |  |  |  |
| Monthly Payments | ($207.49) | ($152.98) | ($238.61) |  |  |  |
| Total Payments | ($8,299.57) | ($9,178.72) | ($11,930.72) |  |  |  |
| Cash Back | 0 | 500 | 0 |  |  |  |
|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Grand Total | ($11,299.57) | ($11,678.72) | ($14,930.72) |  |  |  |

Our monthly payments drop a lot – but the total amount we need to pay drops by even more!

This difference is the main reason why it is so important to know how to do these comparisons yourself. If you walk into each of these dealerships in the real world, they will be happy to tell you what your monthly payments would be (what we calculated in the first part) – but you will not be able to compare apples-to-apples when considering different levels of down payments, and the total price you pay unless you know how to calculate it yourself.

When we made a bigger down payment, Dealer A is still the cheapest overall by a few hundred dollars, but Dealer B has the lowest monthly payment. If money is very tight and we want to be sure we can always hit our monthly savings goals, we would probably choose Dealer B. If we can afford the monthly payments, Dealer A is the best value overall.

This example looked at buying a car, but you can use the same PMT function in your spreadsheet to compare any loans – credit cards, mortgages, in-store financing, it all works! You can download a copy of this spreadsheet by [clicking here](https://learn.stocktrak.com/wp-content/uploads/2021/04/comparing-loans.xlsx).

## Pop Quiz

**You will need the spreadsheet template for this quiz. Consider three new loans for $500. The first is 10% APR over 6 months, the second is 9% APR over 8 months, the third is 8% APR over 10 months. Which is the cheapest?**

|  |  |
| --- | --- |
|  | First |
|  | Second |
|  | Third |

**You will need to buy a new laptop and textbooks for school, $1500 in total, and are going to apply for a credit card to cover the cost. You can only afford $150/month to put towards payments, and want to have it fully paid off within 1 year. Card A is 19% APR, Card B is 22% APR, and Card C is 25% APR. Which card can you afford?**

|  |  |
| --- | --- |
|  | Card A only |
|  | Cards A and B |
|  | All Cards |
|  | None of the cards |

**In the same scenario as the previous question, there are also some promotions. Card A has no promotion, Card B offers 2% cash back on all purchases, and Card C gives you $300 instantly as a sign-up bonus. Which is the best deal (assume that you can afford the monthly payments for any card)?**

|  |  |
| --- | --- |
|  | Card A |
|  | Card B |
|  | Card C |
|  | Card A and B are equal |

Submit
Please complete all the questions


---
## Transcript (best effort)

Find Your Best Car Loan Deal
You finally made the big decision – you are going to buy a car. You did your research and the test drives – you found 3 cars that you really like, from three different dealerships. You really love them all – but at the end of the day, your final decision will come down to price.
But what price will you focus on? The “sticker” price is one factor – there is some difference between the dealerships:
Dearer A
Dealer B
Dealer C
Sticker Price
$9,500
$10,200
$11,600
At first glance, Dealer C seems a lot more expensive. But you know you cannot afford to buy the entire car up-front; you only have $3,000 in your bank account, so you will need to seek financing. Each of the different dealers offers you a combination of financing terms:
Dearer A
Dealer B
Dealer C
Minimum Down Payment
0
5%
10%
APR
15%
10%
13%
Loan Term
40 months
60 months
50 months
Special Promotion
None
$500 Cash Back
No payments for 6 months
None of the dealers let you pay off the loan early – you’re going to need to make all the payments on each loan to fully pay them off. No payments for 6 months and cash back sound interesting – and so does a lower down payment so you can keep more money in your bank account. But at the end of the day, what matters most to you are two things:
What is the total amount you need to pay for each car?
What will be your total monthly payments?
You just got home from the last test-drive with all of this material – you sit down on your desk and open your laptop to find out.
Using Excel or Google Sheets to Find Monthly and Total Payments
We want to compare these loans to get an apples-to-apples comparison of the two metrics we care most about – what will be your total monthly payment, and how much in total will you pay for each car.
Step 1: Write Down Your Data
First step is to open a new spreadsheet and bring in the key data points: the Sticker Price, APR, and Minimum Down Payment % for each dealer.
Dealer A
Dealer B
Dealer C
Price
9500
10200
11600
APR
15%
10%
13%
Loan Term (in months)
40
60
50
Minimum Down Payment %
0%
5%
10%
Notice that we need to keep everything formatted as numbers (don’t put “Months” after the number of months, for example). This will make it easier to do calculations later.
Step 2: Basic calculations for Dealer A
We see that Dealer B and Dealer C are both offering special loan terms, but Dealer A is straightforward. We can start by calculating the Monthly Payment and Total Payments just for Dealer A.
The first thing to do is find our
monthly
interest rate. All loans are advertised in APR so you can easily compare them at a glance, but does not help us to find our actual monthly payments. To calculate your monthly interest rate, simply divide the APR by 12.
Dealer A
Price
9500
APR
15%
Loan Term (in months)
40
Minimum Down Payment %
0%
Monthly Interest Rate
0.0125
It looks like Dealer A is giving this loan a 1.25% monthly interest rate.
Next, we need to calculate the minimum down payment. This would be the “Sticker Price” times the “Minimum Down Payment %”. Since Dealer A says 0% down payment, that means our minimum down payment is also 0.
Dealer A
Price
9500
APR
15%
Loan Term (in months)
40
Minimum Down Payment %
0%
Monthly Interest Rate
0.0125
Minimum Down Payment
0
Last, we need to calculate the entire amount we need to finance. This is the Sticker Price minus the Down Payment. Since the down payment is $0, for Dealer A we will be financing the entire amount.
Dealer A
Price
9500
APR
15%
Loan Term (in months)
40
Minimum Down Payment %
0%
Monthly Interest Rate
0.0125
Minimum Down Payment
0
Amount to finance
9500
Step 3: Finding Your Monthly Payment and Total Payment
You can find your monthly payments using a built-in “Payment” function in excel. The formula is
=PMT(monthly interest rate, number of months, total amount financed)
The “PMT” function will return a negative number – this is normal. It looks like for Dealer A, we will have a $303.25 monthly payment.
Dealer A
Price
9500
APR
15%
Loan Term (in months)
40
Minimum Down Payment %
0%
Monthly Interest Rate
0.0125
Minimum Down Payment
0
Amount to finance
9500
Monthly Payment
($303.25)
To calculate the total amount we’re going to pay for this car, we will multiply the monthly payment by the total payments.
We also need to add in our down payment. Since “PMT” came out negative,
subtract
your down payment. This will give us our
total payment
. Because our down payment at Dealer A was zero, it does not change our total payments.
Dealer A
Price
9500
APR
15%
Loan Term (in months)
40
Minimum Down Payment %
0%
Monthly Interest Rate
0.0125
Minimum Down Payment
0
Amount to finance
9500
Monthly Payment
($303.25)
Total Payments
$12,130.14
It looks like when we include the financing charges, Dealer A is going to cost $12,130.14 total over the entire course of the loan.
How to Include Cash Back In Your Calculation
Now that we have our numbers for Dealer A, we want to calculate the same thing for Dealer B. Cash Back is easy to account for – we can include this right at the last step.
For Dealer B, we will follow the exact same steps as Dealer A. The only difference is that we do have a down payment, and so our Amount Financed will be different.
Dealer A
Dealer B
Price
9500
10200
APR
15%
10%
Loan Term
40
60
Minimum Down Payment %
0%
5%
Monthly Interest Rate
0.0125
0.008333333
Minimum Down Payment
0
510
Total Amount Finance
9500
9690
Monthly Payments
($303.25)
($205.88)
Total Payments
($12,130.14)
($12,353.03)
Dealer B’s monthly payment is much lower – both because the APR is lower and because the loan is over 20 more months, so we are paying back less of the loan each month. When we calculate our total payments, we need to also consider the Down Payment we made – add this into our total payments to recognize it was paid.
The last step is to subtract our “Cash Back” from the total payment, since this is money we are getting back. This will give us our Grand Total.
Dealer A
Dealer B
Price
9500
10200
APR
15%
10%
Loan Term
40
60
Minimum Down Payment %
0%
5%
Monthly Interest Rate
0.0125
0.008333333
Minimum Down Payment
0
510
Total Amount Finance
9500
9690
Monthly Payments
($303.25)
($205.88)
Total Payments
($12,130.14)
($12,353.03)
Grand Total
($12,130.14)
($12,363.03)
Grand Total
($12,130.14)
($12,363.03)
The “Cash Back” and “Down Payment” ALMOST cancel out, so the grand total is not very different.
All together, it looks like Dealer A is cheaper, but Dealer B has much lower monthly payments. If I need extra breathing room to make sure I can always hit my monthly savings goals, Dealer B might be a smart choice.
How to Calculate 0 Payments
Dealer C is going to be more complicated to calculate. Our loan term is for 50 months, but they are saying that we do not need to make any payments for the first 6 months.
For you as the buyer, it might sound nice to not need to make payments, but it means that the loan is still gathering interest for those months. This is going to make it harder to find the total amount you are financing, and we cannot just use the PMT function.
Step 1: Finding Monthly Interest and Down Payment
The first step is the same as before – calculate your monthly interest by dividing APR by 12, and calculate your minimum down payment by multiplying the sticker price by the Minimum Down Payment %. Then subtract the Down Payment from the Sticker Price to find your Total Amount Financed.
Dealer A
Dealer B
Dealer C
Price
9500
10200
11600
APR
15%
10%
13%
Loan Term
40
60
50
Minimum Down Payment %
0%
5%
10%
Monthly Interest Rate
0.0125
0.008333333
0.010833333
Minimum Down Payment
0
510
1160
Total Amount Financed
9500
9690
10440
Step 2: Adding Interest With No Payments
Now we need to know how much interest is going to pile up in those months were we are not making a payment. You can do this in one single function, but to make it easy to see, we will calculate it out for all 6 months.
Start by putting your Total Amount Financed as “Month 0” in a different part of your spreadsheet.
Months
Balance Due
0
$     10,440.00
Next, add “Month 1” – and we will add the interest payment for the first month. You can calculate this as:
New balance = Old Balance x (1 + monthly interest rate)
Months
Balance Due
0
$     10,440.00
1
$     10,553.10
Repeat this for months 2, 3, 4, 5, and 6. The total amount after month 6 is what we need to use when calculating our actual payments.
Months
Balance Due
0
$     10,440.00
1
$     10,553.10
2
$     10,667.43
3
$     10,782.99
4
$     10,899.80
5
$     11,017.89
6
$     11,137.25
Step 3: Calculating Monthly and Total Payments
From here, it works just the same as Dealer B – find the monthly payment with the PMT function.
Dealer A
Dealer B
Dealer C
Price
9500
10200
11600
APR
15%
10%
13%
Loan Term
40
60
50
Minimum Down Payment %
0%
5%
10%
Monthly Interest Rate
0.0125
0.008333333
0.010833333
Minimum Down Payment
0
510
1160
Total Amount Finance
9500
9690
11137
Monthly Payments
($303.25)
($205.88)
($289.67)
The rest of the calculation is the same as Dealer B – calculate the total payments, add back in our down payment to get the total.
Dealer A
Dealer B
Dealer C
Price
9500
10200
11600
APR
15%
10%
13%
Loan Term
40
60
50
Minimum Down Payment %
0%
5%
10%
Monthly Interest Rate
0.0125
0.008333333
0.010833333
Minimum Down Payment
0
510
1160
Total Amount Finance
9500
9690
11137
Monthly Payments
($303.25)
($205.88)
($289.67)
Total Payments
($12,130.14)
($12,353.03)
($14,483.34)
Cash Back
0
500
0
Grand Total
($12,130.14)
($12,363.03)
($15,643.34)
It looks like that “6 months with no payments” added a lot to the total balance! Our monthly payments and total payments will both be much more expensive than the other two dealerships when we put everything together.
Be Smart With Down Payments
In the case above, we used our minimum down payments with every dealer. Most car dealerships want you to finance as much as possible (they make more money on the interest on the loans than the price of the car they sell – most of the “sticker price” goes to the manufacturer or the previous buyer for used cars), but you can always put as much money down as you want.
Let’s see what happens when we ignore the “Minimum Down Payment %”, and instead put our entire $3,000 down with all 3 dealers.
Dealer A
Dealer B
Dealer C
Months
Balance Due
Price
9500
10200
11600
0
$        8,600.00
APR
15%
10%
13%
1
$        8,693.17
Loan Term
40
60
50
2
$        8,787.34
Minimum Down Payment %
0%
5%
10%
3
$        8,882.54
4
$        8,978.77
Monthly Interest Rate
0.0125
0.008333333
0.010833333
5
$        9,076.04
Minimum Down Payment
3000
3000
3000
6
$        9,174.36
Total Amount Finance
6500
7200
9174
Monthly Payments
($207.49)
($152.98)
($238.61)
Total Payments
($8,299.57)
($9,178.72)
($11,930.72)
Cash Back
0
500
0
Grand Total
($11,299.57)
($11,678.72)
($14,930.72)
Our monthly payments drop a lot – but the total amount we need to pay drops by even more!
This difference is the main reason why it is so important to know how to do these comparisons yourself. If you walk into each of these dealerships in the real world, they will be happy to tell you what your monthly payments would be (what we calculated in the first part) – but you will not be able to compare apples-to-apples when considering different levels of down payments, and the total price you pay unless you know how to calculate it yourself.
When we made a bigger down payment, Dealer A is still the cheapest overall by a few hundred dollars, but Dealer B has the lowest monthly payment. If money is very tight and we want to be sure we can always hit our monthly savings goals, we would probably choose Dealer B. If we can afford the monthly payments, Dealer A is the best value overall.
This example looked at buying a car, but you can use the same PMT function in your spreadsheet to compare any loans – credit cards, mortgages, in-store financing, it all works! You can download a copy of this spreadsheet by
clicking here
.
Pop Quiz
