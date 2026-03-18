'use client';


export default function FindYourBestCarLoanDeal() {
  

  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-4">Find Your Best Car Loan Deal</h1>

<p className="my-3 leading-relaxed">You finally made the big decision – you are going to buy a car. You did your research and the test drives – you found 3 cars that you really like, from three different dealerships. You really love them all – but at the end of the day, your final decision will come down to price.</p>

<p className="my-3 leading-relaxed">![](/images/6cfea81946f34132.png)</p>

<p className="my-3 leading-relaxed">But what price will you focus on? The “sticker” price is one factor – there is some difference between the dealerships:</p>

<p className="my-3 leading-relaxed">|  |  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">|  | <strong>Dearer A</strong> | <strong>Dealer B</strong> | <strong>Dealer C</strong> |</p>
<p className="my-3 leading-relaxed">| Sticker Price | $9,500 | $10,200 | $11,600 |</p>

<p className="my-3 leading-relaxed">At first glance, Dealer C seems a lot more expensive. But you know you cannot afford to buy the entire car up-front; you only have $3,000 in your bank account, so you will need to seek financing. Each of the different dealers offers you a combination of financing terms:</p>

<p className="my-3 leading-relaxed">|  | <strong>Dearer A</strong> | <strong>Dealer B</strong> | <strong>Dealer C</strong> |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment | 0 | 5% | 10% |</p>
<p className="my-3 leading-relaxed">| APR | 15% | 10% | 13% |</p>
<p className="my-3 leading-relaxed">| Loan Term | 40 months | 60 months | 50 months |</p>
<p className="my-3 leading-relaxed">| Special Promotion | None | $500 Cash Back | No payments for 6 months |</p>

<p className="my-3 leading-relaxed">None of the dealers let you pay off the loan early – you’re going to need to make all the payments on each loan to fully pay them off. No payments for 6 months and cash back sound interesting – and so does a lower down payment so you can keep more money in your bank account. But at the end of the day, what matters most to you are two things:</p>

<p className="my-3 leading-relaxed">1. What is the total amount you need to pay for each car?</p>
<p className="my-3 leading-relaxed">2. What will be your total monthly payments?</p>

<p className="my-3 leading-relaxed">You just got home from the last test-drive with all of this material – you sit down on your desk and open your laptop to find out.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Using Excel or Google Sheets to Find Monthly and Total Payments</h3>

<p className="my-3 leading-relaxed">We want to compare these loans to get an apples-to-apples comparison of the two metrics we care most about – what will be your total monthly payment, and how much in total will you pay for each car.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Step 1: Write Down Your Data</h3>

<p className="my-3 leading-relaxed">First step is to open a new spreadsheet and bring in the key data points: the Sticker Price, APR, and Minimum Down Payment % for each dealer.</p>

<p className="my-3 leading-relaxed">|  | Dealer A | Dealer B | Dealer C |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| Price | 9500 | 10200 | 11600 |</p>
<p className="my-3 leading-relaxed">| APR | 15% | 10% | 13% |</p>
<p className="my-3 leading-relaxed">| Loan Term (in months) | 40 | 60 | 50 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment % | 0% | 5% | 10% |</p>

<p className="my-3 leading-relaxed">Notice that we need to keep everything formatted as numbers (don’t put “Months” after the number of months, for example). This will make it easier to do calculations later.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Step 2: Basic calculations for Dealer A</h3>

<p className="my-3 leading-relaxed">We see that Dealer B and Dealer C are both offering special loan terms, but Dealer A is straightforward. We can start by calculating the Monthly Payment and Total Payments just for Dealer A.</p>

<p className="my-3 leading-relaxed">The first thing to do is find our <em>monthly</em> interest rate. All loans are advertised in APR so you can easily compare them at a glance, but does not help us to find our actual monthly payments. To calculate your monthly interest rate, simply divide the APR by 12.</p>

<p className="my-3 leading-relaxed">|  | Dealer A |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">| Price | 9500 |</p>
<p className="my-3 leading-relaxed">| APR | 15% |</p>
<p className="my-3 leading-relaxed">| Loan Term (in months) | 40 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment % | 0% |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Interest Rate | 0.0125 |</p>

<p className="my-3 leading-relaxed">It looks like Dealer A is giving this loan a 1.25% monthly interest rate.</p>

<p className="my-3 leading-relaxed">Next, we need to calculate the minimum down payment. This would be the “Sticker Price” times the “Minimum Down Payment %”. Since Dealer A says 0% down payment, that means our minimum down payment is also 0.</p>

<p className="my-3 leading-relaxed">|  | Dealer A |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">| Price | 9500 |</p>
<p className="my-3 leading-relaxed">| APR | 15% |</p>
<p className="my-3 leading-relaxed">| Loan Term (in months) | 40 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment % | 0% |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Interest Rate | 0.0125 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment | 0 |</p>

<p className="my-3 leading-relaxed">Last, we need to calculate the entire amount we need to finance. This is the Sticker Price minus the Down Payment. Since the down payment is $0, for Dealer A we will be financing the entire amount.</p>

<p className="my-3 leading-relaxed">|  | Dealer A |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">| Price | 9500 |</p>
<p className="my-3 leading-relaxed">| APR | 15% |</p>
<p className="my-3 leading-relaxed">| Loan Term (in months) | 40 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment % | 0% |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Interest Rate | 0.0125 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment | 0 |</p>
<p className="my-3 leading-relaxed">| Amount to finance | 9500 |</p>

<h3 className="text-xl font-bold mt-6 mb-3">Step 3: Finding Your Monthly Payment and Total Payment</h3>

<p className="my-3 leading-relaxed">You can find your monthly payments using a built-in “Payment” function in excel. The formula is</p>

<em>=PMT(monthly interest rate, number of months, total amount financed)</em>

<p className="my-3 leading-relaxed">The “PMT” function will return a negative number – this is normal. It looks like for Dealer A, we will have a $303.25 monthly payment.</p>

<p className="my-3 leading-relaxed">|  | Dealer A |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">| Price | 9500 |</p>
<p className="my-3 leading-relaxed">| APR | 15% |</p>
<p className="my-3 leading-relaxed">| Loan Term (in months) | 40 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment % | 0% |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Interest Rate | 0.0125 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment | 0 |</p>
<p className="my-3 leading-relaxed">| Amount to finance | 9500 |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">| Monthly Payment | ($303.25) |</p>

<p className="my-3 leading-relaxed">To calculate the total amount we’re going to pay for this car, we will multiply the monthly payment by the total payments.</p>

<p className="my-3 leading-relaxed">We also need to add in our down payment. Since “PMT” came out negative, <strong>subtract</strong> your down payment. This will give us our <strong><em>total payment</strong></em>. Because our down payment at Dealer A was zero, it does not change our total payments.</p>

<p className="my-3 leading-relaxed">|  | Dealer A |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">| Price | 9500 |</p>
<p className="my-3 leading-relaxed">| APR | 15% |</p>
<p className="my-3 leading-relaxed">| Loan Term (in months) | 40 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment % | 0% |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Interest Rate | 0.0125 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment | 0 |</p>
<p className="my-3 leading-relaxed">| Amount to finance | 9500 |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Payment | ($303.25) |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">| Total Payments | $12,130.14 |</p>

<p className="my-3 leading-relaxed">It looks like when we include the financing charges, Dealer A is going to cost $12,130.14 total over the entire course of the loan.</p>

<h2 className="text-2xl font-bold mt-8 mb-4">How to Include Cash Back In Your Calculation</h2>

<p className="my-3 leading-relaxed">Now that we have our numbers for Dealer A, we want to calculate the same thing for Dealer B. Cash Back is easy to account for – we can include this right at the last step.</p>

<p className="my-3 leading-relaxed">For Dealer B, we will follow the exact same steps as Dealer A. The only difference is that we do have a down payment, and so our Amount Financed will be different.</p>

<p className="my-3 leading-relaxed">|  | Dealer A | Dealer B |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| Price | 9500 | 10200 |</p>
<p className="my-3 leading-relaxed">| APR | 15% | 10% |</p>
<p className="my-3 leading-relaxed">| Loan Term | 40 | 60 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment % | 0% | 5% |</p>
<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Interest Rate | 0.0125 | 0.008333333 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment | 0 | 510 |</p>
<p className="my-3 leading-relaxed">| Total Amount Finance | 9500 | 9690 |</p>
<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Payments | ($303.25) | ($205.88) |</p>
<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| Total Payments | ($12,130.14) | ($12,353.03) |</p>

<p className="my-3 leading-relaxed">Dealer B’s monthly payment is much lower – both because the APR is lower and because the loan is over 20 more months, so we are paying back less of the loan each month. When we calculate our total payments, we need to also consider the Down Payment we made – add this into our total payments to recognize it was paid.</p>

<p className="my-3 leading-relaxed">The last step is to subtract our “Cash Back” from the total payment, since this is money we are getting back. This will give us our Grand Total.</p>

<p className="my-3 leading-relaxed">|  | Dealer A | Dealer B |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| Price | 9500 | 10200 |</p>
<p className="my-3 leading-relaxed">| APR | 15% | 10% |</p>
<p className="my-3 leading-relaxed">| Loan Term | 40 | 60 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment % | 0% | 5% |</p>
<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Interest Rate | 0.0125 | 0.008333333 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment | 0 | 510 |</p>
<p className="my-3 leading-relaxed">| Total Amount Finance | 9500 | 9690 |</p>
<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Payments | ($303.25) | ($205.88) |</p>
<p className="my-3 leading-relaxed">| Total Payments | ($12,130.14) | ($12,353.03) |</p>
<p className="my-3 leading-relaxed">| Grand Total | ($12,130.14) | ($12,363.03) |</p>
<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| Grand Total | ($12,130.14) | ($12,363.03) |</p>

<p className="my-3 leading-relaxed">The “Cash Back” and “Down Payment” ALMOST cancel out, so the grand total is not very different.</p>

<p className="my-3 leading-relaxed">All together, it looks like Dealer A is cheaper, but Dealer B has much lower monthly payments. If I need extra breathing room to make sure I can always hit my monthly savings goals, Dealer B might be a smart choice.</p>

<h2 className="text-2xl font-bold mt-8 mb-4">How to Calculate 0 Payments</h2>

<p className="my-3 leading-relaxed">Dealer C is going to be more complicated to calculate. Our loan term is for 50 months, but they are saying that we do not need to make any payments for the first 6 months.</p>

<p className="my-3 leading-relaxed">For you as the buyer, it might sound nice to not need to make payments, but it means that the loan is still gathering interest for those months. This is going to make it harder to find the total amount you are financing, and we cannot just use the PMT function.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Step 1: Finding Monthly Interest and Down Payment</h3>

<p className="my-3 leading-relaxed">The first step is the same as before – calculate your monthly interest by dividing APR by 12, and calculate your minimum down payment by multiplying the sticker price by the Minimum Down Payment %. Then subtract the Down Payment from the Sticker Price to find your Total Amount Financed.</p>

<p className="my-3 leading-relaxed">|  | Dealer A | Dealer B | Dealer C |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| Price | 9500 | 10200 | 11600 |</p>
<p className="my-3 leading-relaxed">| APR | 15% | 10% | 13% |</p>
<p className="my-3 leading-relaxed">| Loan Term | 40 | 60 | 50 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment % | 0% | 5% | 10% |</p>
<p className="my-3 leading-relaxed">|  |  |  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Interest Rate | 0.0125 | 0.008333333 | 0.010833333 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment | 0 | 510 | 1160 |</p>
<p className="my-3 leading-relaxed">|  |  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| Total Amount Financed | 9500 | 9690 | 10440 |</p>

<h3 className="text-xl font-bold mt-6 mb-3">Step 2: Adding Interest With No Payments</h3>

<p className="my-3 leading-relaxed">Now we need to know how much interest is going to pile up in those months were we are not making a payment. You can do this in one single function, but to make it easy to see, we will calculate it out for all 6 months.</p>

<p className="my-3 leading-relaxed">Start by putting your Total Amount Financed as “Month 0” in a different part of your spreadsheet.</p>

<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Months</strong> | <strong>Balance Due</strong> |</p>
<p className="my-3 leading-relaxed">| 0 | $     10,440.00 |</p>

<p className="my-3 leading-relaxed">Next, add “Month 1” – and we will add the interest payment for the first month. You can calculate this as:</p>

<em>New balance = Old Balance x (1 + monthly interest rate)</em>

<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Months</strong> | <strong>Balance Due</strong> |</p>
<p className="my-3 leading-relaxed">| 0 | $     10,440.00 |</p>
<p className="my-3 leading-relaxed">| 1 | $     10,553.10 |</p>

<p className="my-3 leading-relaxed">Repeat this for months 2, 3, 4, 5, and 6. The total amount after month 6 is what we need to use when calculating our actual payments.</p>

<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Months</strong> | <strong>Balance Due</strong> |</p>
<p className="my-3 leading-relaxed">| 0 | $     10,440.00 |</p>
<p className="my-3 leading-relaxed">| 1 | $     10,553.10 |</p>
<p className="my-3 leading-relaxed">| 2 | $     10,667.43 |</p>
<p className="my-3 leading-relaxed">| 3 | $     10,782.99 |</p>
<p className="my-3 leading-relaxed">| 4 | $     10,899.80 |</p>
<p className="my-3 leading-relaxed">| 5 | $     11,017.89 |</p>
<p className="my-3 leading-relaxed">| 6 | $     11,137.25 |</p>

<h3 className="text-xl font-bold mt-6 mb-3">Step 3: Calculating Monthly and Total Payments</h3>

<p className="my-3 leading-relaxed">From here, it works just the same as Dealer B – find the monthly payment with the PMT function.</p>

<p className="my-3 leading-relaxed">|  | Dealer A | Dealer B | Dealer C |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| Price | 9500 | 10200 | 11600 |</p>
<p className="my-3 leading-relaxed">| APR | 15% | 10% | 13% |</p>
<p className="my-3 leading-relaxed">| Loan Term | 40 | 60 | 50 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment % | 0% | 5% | 10% |</p>
<p className="my-3 leading-relaxed">|  |  |  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Interest Rate | 0.0125 | 0.008333333 | 0.010833333 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment | 0 | 510 | 1160 |</p>
<p className="my-3 leading-relaxed">| Total Amount Finance | 9500 | 9690 | 11137 |</p>
<p className="my-3 leading-relaxed">|  |  |  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Payments | ($303.25) | ($205.88) | ($289.67) |</p>

<p className="my-3 leading-relaxed">The rest of the calculation is the same as Dealer B – calculate the total payments, add back in our down payment to get the total.</p>

<p className="my-3 leading-relaxed">|  | Dealer A | Dealer B | Dealer C |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| Price | 9500 | 10200 | 11600 |</p>
<p className="my-3 leading-relaxed">| APR | 15% | 10% | 13% |</p>
<p className="my-3 leading-relaxed">| Loan Term | 40 | 60 | 50 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment % | 0% | 5% | 10% |</p>
<p className="my-3 leading-relaxed">|  |  |  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Interest Rate | 0.0125 | 0.008333333 | 0.010833333 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment | 0 | 510 | 1160 |</p>
<p className="my-3 leading-relaxed">| Total Amount Finance | 9500 | 9690 | 11137 |</p>
<p className="my-3 leading-relaxed">|  |  |  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Payments | ($303.25) | ($205.88) | ($289.67) |</p>
<p className="my-3 leading-relaxed">| Total Payments | ($12,130.14) | ($12,353.03) | ($14,483.34) |</p>
<p className="my-3 leading-relaxed">| Cash Back | 0 | 500 | 0 |</p>
<p className="my-3 leading-relaxed">|  |  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| Grand Total | ($12,130.14) | ($12,363.03) | ($15,643.34) |</p>

<p className="my-3 leading-relaxed">It looks like that “6 months with no payments” added a lot to the total balance! Our monthly payments and total payments will both be much more expensive than the other two dealerships when we put everything together.</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Be Smart With Down Payments</h2>

<p className="my-3 leading-relaxed">In the case above, we used our minimum down payments with every dealer. Most car dealerships want you to finance as much as possible (they make more money on the interest on the loans than the price of the car they sell – most of the “sticker price” goes to the manufacturer or the previous buyer for used cars), but you can always put as much money down as you want.</p>

<p className="my-3 leading-relaxed">Let’s see what happens when we ignore the “Minimum Down Payment %”, and instead put our entire $3,000 down with all 3 dealers.</p>

<p className="my-3 leading-relaxed">|  | Dealer A | Dealer B | Dealer C |  | Months | Balance Due |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| Price | 9500 | 10200 | 11600 |  | 0 | $        8,600.00 |</p>
<p className="my-3 leading-relaxed">| APR | 15% | 10% | 13% |  | 1 | $        8,693.17 |</p>
<p className="my-3 leading-relaxed">| Loan Term | 40 | 60 | 50 |  | 2 | $        8,787.34 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment % | 0% | 5% | 10% |  | 3 | $        8,882.54 |</p>
<p className="my-3 leading-relaxed">|  |  |  |  |  | 4 | $        8,978.77 |</p>
<p className="my-3 leading-relaxed">| Monthly Interest Rate | 0.0125 | 0.008333333 | 0.010833333 |  | 5 | $        9,076.04 |</p>
<p className="my-3 leading-relaxed">| Minimum Down Payment | 3000 | 3000 | 3000 |  | 6 | $        9,174.36 |</p>
<p className="my-3 leading-relaxed">| Total Amount Finance | 6500 | 7200 | 9174 |  |  |  |</p>
<p className="my-3 leading-relaxed">|  |  |  |  |  |  |  |</p>
<p className="my-3 leading-relaxed">| Monthly Payments | ($207.49) | ($152.98) | ($238.61) |  |  |  |</p>
<p className="my-3 leading-relaxed">| Total Payments | ($8,299.57) | ($9,178.72) | ($11,930.72) |  |  |  |</p>
<p className="my-3 leading-relaxed">| Cash Back | 0 | 500 | 0 |  |  |  |</p>
<p className="my-3 leading-relaxed">|  |  |  |  |  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| Grand Total | ($11,299.57) | ($11,678.72) | ($14,930.72) |  |  |  |</p>

<p className="my-3 leading-relaxed">Our monthly payments drop a lot – but the total amount we need to pay drops by even more!</p>

<p className="my-3 leading-relaxed">This difference is the main reason why it is so important to know how to do these comparisons yourself. If you walk into each of these dealerships in the real world, they will be happy to tell you what your monthly payments would be (what we calculated in the first part) – but you will not be able to compare apples-to-apples when considering different levels of down payments, and the total price you pay unless you know how to calculate it yourself.</p>

<p className="my-3 leading-relaxed">When we made a bigger down payment, Dealer A is still the cheapest overall by a few hundred dollars, but Dealer B has the lowest monthly payment. If money is very tight and we want to be sure we can always hit our monthly savings goals, we would probably choose Dealer B. If we can afford the monthly payments, Dealer A is the best value overall.</p>

<p className="my-3 leading-relaxed">This example looked at buying a car, but you can use the same PMT function in your spreadsheet to compare any loans – credit cards, mortgages, in-store financing, it all works! You can download a copy of this spreadsheet by [clicking here](https://learn.stocktrak.com/wp-content/uploads/2021/04/comparing-loans.xlsx).</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Transcript (best effort)</h2>

<p className="my-3 leading-relaxed">Find Your Best Car Loan Deal</p>
<p className="my-3 leading-relaxed">You finally made the big decision – you are going to buy a car. You did your research and the test drives – you found 3 cars that you really like, from three different dealerships. You really love them all – but at the end of the day, your final decision will come down to price.</p>
<p className="my-3 leading-relaxed">But what price will you focus on? The “sticker” price is one factor – there is some difference between the dealerships:</p>
<p className="my-3 leading-relaxed">Dearer A</p>
<p className="my-3 leading-relaxed">Dealer B</p>
<p className="my-3 leading-relaxed">Dealer C</p>
<p className="my-3 leading-relaxed">Sticker Price</p>
<p className="my-3 leading-relaxed">$9,500</p>
<p className="my-3 leading-relaxed">$10,200</p>
<p className="my-3 leading-relaxed">$11,600</p>
<p className="my-3 leading-relaxed">At first glance, Dealer C seems a lot more expensive. But you know you cannot afford to buy the entire car up-front; you only have $3,000 in your bank account, so you will need to seek financing. Each of the different dealers offers you a combination of financing terms:</p>
<p className="my-3 leading-relaxed">Dearer A</p>
<p className="my-3 leading-relaxed">Dealer B</p>
<p className="my-3 leading-relaxed">Dealer C</p>
<p className="my-3 leading-relaxed">Minimum Down Payment</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">5%</p>
<p className="my-3 leading-relaxed">10%</p>
<p className="my-3 leading-relaxed">APR</p>
<p className="my-3 leading-relaxed">15%</p>
<p className="my-3 leading-relaxed">10%</p>
<p className="my-3 leading-relaxed">13%</p>
<p className="my-3 leading-relaxed">Loan Term</p>
<p className="my-3 leading-relaxed">40 months</p>
<p className="my-3 leading-relaxed">60 months</p>
<p className="my-3 leading-relaxed">50 months</p>
<p className="my-3 leading-relaxed">Special Promotion</p>
<p className="my-3 leading-relaxed">None</p>
<p className="my-3 leading-relaxed">$500 Cash Back</p>
<p className="my-3 leading-relaxed">No payments for 6 months</p>
<p className="my-3 leading-relaxed">None of the dealers let you pay off the loan early – you’re going to need to make all the payments on each loan to fully pay them off. No payments for 6 months and cash back sound interesting – and so does a lower down payment so you can keep more money in your bank account. But at the end of the day, what matters most to you are two things:</p>
<p className="my-3 leading-relaxed">What is the total amount you need to pay for each car?</p>
<p className="my-3 leading-relaxed">What will be your total monthly payments?</p>
<p className="my-3 leading-relaxed">You just got home from the last test-drive with all of this material – you sit down on your desk and open your laptop to find out.</p>
<p className="my-3 leading-relaxed">Using Excel or Google Sheets to Find Monthly and Total Payments</p>
<p className="my-3 leading-relaxed">We want to compare these loans to get an apples-to-apples comparison of the two metrics we care most about – what will be your total monthly payment, and how much in total will you pay for each car.</p>
<p className="my-3 leading-relaxed">Step 1: Write Down Your Data</p>
<p className="my-3 leading-relaxed">First step is to open a new spreadsheet and bring in the key data points: the Sticker Price, APR, and Minimum Down Payment % for each dealer.</p>
<p className="my-3 leading-relaxed">Dealer A</p>
<p className="my-3 leading-relaxed">Dealer B</p>
<p className="my-3 leading-relaxed">Dealer C</p>
<p className="my-3 leading-relaxed">Price</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">10200</p>
<p className="my-3 leading-relaxed">11600</p>
<p className="my-3 leading-relaxed">APR</p>
<p className="my-3 leading-relaxed">15%</p>
<p className="my-3 leading-relaxed">10%</p>
<p className="my-3 leading-relaxed">13%</p>
<p className="my-3 leading-relaxed">Loan Term (in months)</p>
<p className="my-3 leading-relaxed">40</p>
<p className="my-3 leading-relaxed">60</p>
<p className="my-3 leading-relaxed">50</p>
<p className="my-3 leading-relaxed">Minimum Down Payment %</p>
<p className="my-3 leading-relaxed">0%</p>
<p className="my-3 leading-relaxed">5%</p>
<p className="my-3 leading-relaxed">10%</p>
<p className="my-3 leading-relaxed">Notice that we need to keep everything formatted as numbers (don’t put “Months” after the number of months, for example). This will make it easier to do calculations later.</p>
<p className="my-3 leading-relaxed">Step 2: Basic calculations for Dealer A</p>
<p className="my-3 leading-relaxed">We see that Dealer B and Dealer C are both offering special loan terms, but Dealer A is straightforward. We can start by calculating the Monthly Payment and Total Payments just for Dealer A.</p>
<p className="my-3 leading-relaxed">The first thing to do is find our</p>
<p className="my-3 leading-relaxed">monthly</p>
<p className="my-3 leading-relaxed">interest rate. All loans are advertised in APR so you can easily compare them at a glance, but does not help us to find our actual monthly payments. To calculate your monthly interest rate, simply divide the APR by 12.</p>
<p className="my-3 leading-relaxed">Dealer A</p>
<p className="my-3 leading-relaxed">Price</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">APR</p>
<p className="my-3 leading-relaxed">15%</p>
<p className="my-3 leading-relaxed">Loan Term (in months)</p>
<p className="my-3 leading-relaxed">40</p>
<p className="my-3 leading-relaxed">Minimum Down Payment %</p>
<p className="my-3 leading-relaxed">0%</p>
<p className="my-3 leading-relaxed">Monthly Interest Rate</p>
<p className="my-3 leading-relaxed">0.0125</p>
<p className="my-3 leading-relaxed">It looks like Dealer A is giving this loan a 1.25% monthly interest rate.</p>
<p className="my-3 leading-relaxed">Next, we need to calculate the minimum down payment. This would be the “Sticker Price” times the “Minimum Down Payment %”. Since Dealer A says 0% down payment, that means our minimum down payment is also 0.</p>
<p className="my-3 leading-relaxed">Dealer A</p>
<p className="my-3 leading-relaxed">Price</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">APR</p>
<p className="my-3 leading-relaxed">15%</p>
<p className="my-3 leading-relaxed">Loan Term (in months)</p>
<p className="my-3 leading-relaxed">40</p>
<p className="my-3 leading-relaxed">Minimum Down Payment %</p>
<p className="my-3 leading-relaxed">0%</p>
<p className="my-3 leading-relaxed">Monthly Interest Rate</p>
<p className="my-3 leading-relaxed">0.0125</p>
<p className="my-3 leading-relaxed">Minimum Down Payment</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">Last, we need to calculate the entire amount we need to finance. This is the Sticker Price minus the Down Payment. Since the down payment is $0, for Dealer A we will be financing the entire amount.</p>
<p className="my-3 leading-relaxed">Dealer A</p>
<p className="my-3 leading-relaxed">Price</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">APR</p>
<p className="my-3 leading-relaxed">15%</p>
<p className="my-3 leading-relaxed">Loan Term (in months)</p>
<p className="my-3 leading-relaxed">40</p>
<p className="my-3 leading-relaxed">Minimum Down Payment %</p>
<p className="my-3 leading-relaxed">0%</p>
<p className="my-3 leading-relaxed">Monthly Interest Rate</p>
<p className="my-3 leading-relaxed">0.0125</p>
<p className="my-3 leading-relaxed">Minimum Down Payment</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">Amount to finance</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">Step 3: Finding Your Monthly Payment and Total Payment</p>
<p className="my-3 leading-relaxed">You can find your monthly payments using a built-in “Payment” function in excel. The formula is</p>
<p className="my-3 leading-relaxed">=PMT(monthly interest rate, number of months, total amount financed)</p>
<p className="my-3 leading-relaxed">The “PMT” function will return a negative number – this is normal. It looks like for Dealer A, we will have a $303.25 monthly payment.</p>
<p className="my-3 leading-relaxed">Dealer A</p>
<p className="my-3 leading-relaxed">Price</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">APR</p>
<p className="my-3 leading-relaxed">15%</p>
<p className="my-3 leading-relaxed">Loan Term (in months)</p>
<p className="my-3 leading-relaxed">40</p>
<p className="my-3 leading-relaxed">Minimum Down Payment %</p>
<p className="my-3 leading-relaxed">0%</p>
<p className="my-3 leading-relaxed">Monthly Interest Rate</p>
<p className="my-3 leading-relaxed">0.0125</p>
<p className="my-3 leading-relaxed">Minimum Down Payment</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">Amount to finance</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">Monthly Payment</p>
<p className="my-3 leading-relaxed">($303.25)</p>
<p className="my-3 leading-relaxed">To calculate the total amount we’re going to pay for this car, we will multiply the monthly payment by the total payments.</p>
<p className="my-3 leading-relaxed">We also need to add in our down payment. Since “PMT” came out negative,</p>
<p className="my-3 leading-relaxed">subtract</p>
<p className="my-3 leading-relaxed">your down payment. This will give us our</p>
<p className="my-3 leading-relaxed">total payment</p>
<p className="my-3 leading-relaxed">. Because our down payment at Dealer A was zero, it does not change our total payments.</p>
<p className="my-3 leading-relaxed">Dealer A</p>
<p className="my-3 leading-relaxed">Price</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">APR</p>
<p className="my-3 leading-relaxed">15%</p>
<p className="my-3 leading-relaxed">Loan Term (in months)</p>
<p className="my-3 leading-relaxed">40</p>
<p className="my-3 leading-relaxed">Minimum Down Payment %</p>
<p className="my-3 leading-relaxed">0%</p>
<p className="my-3 leading-relaxed">Monthly Interest Rate</p>
<p className="my-3 leading-relaxed">0.0125</p>
<p className="my-3 leading-relaxed">Minimum Down Payment</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">Amount to finance</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">Monthly Payment</p>
<p className="my-3 leading-relaxed">($303.25)</p>
<p className="my-3 leading-relaxed">Total Payments</p>
<p className="my-3 leading-relaxed">$12,130.14</p>
<p className="my-3 leading-relaxed">It looks like when we include the financing charges, Dealer A is going to cost $12,130.14 total over the entire course of the loan.</p>
<p className="my-3 leading-relaxed">How to Include Cash Back In Your Calculation</p>
<p className="my-3 leading-relaxed">Now that we have our numbers for Dealer A, we want to calculate the same thing for Dealer B. Cash Back is easy to account for – we can include this right at the last step.</p>
<p className="my-3 leading-relaxed">For Dealer B, we will follow the exact same steps as Dealer A. The only difference is that we do have a down payment, and so our Amount Financed will be different.</p>
<p className="my-3 leading-relaxed">Dealer A</p>
<p className="my-3 leading-relaxed">Dealer B</p>
<p className="my-3 leading-relaxed">Price</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">10200</p>
<p className="my-3 leading-relaxed">APR</p>
<p className="my-3 leading-relaxed">15%</p>
<p className="my-3 leading-relaxed">10%</p>
<p className="my-3 leading-relaxed">Loan Term</p>
<p className="my-3 leading-relaxed">40</p>
<p className="my-3 leading-relaxed">60</p>
<p className="my-3 leading-relaxed">Minimum Down Payment %</p>
<p className="my-3 leading-relaxed">0%</p>
<p className="my-3 leading-relaxed">5%</p>
<p className="my-3 leading-relaxed">Monthly Interest Rate</p>
<p className="my-3 leading-relaxed">0.0125</p>
<p className="my-3 leading-relaxed">0.008333333</p>
<p className="my-3 leading-relaxed">Minimum Down Payment</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">510</p>
<p className="my-3 leading-relaxed">Total Amount Finance</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">9690</p>
<p className="my-3 leading-relaxed">Monthly Payments</p>
<p className="my-3 leading-relaxed">($303.25)</p>
<p className="my-3 leading-relaxed">($205.88)</p>
<p className="my-3 leading-relaxed">Total Payments</p>
<p className="my-3 leading-relaxed">($12,130.14)</p>
<p className="my-3 leading-relaxed">($12,353.03)</p>
<p className="my-3 leading-relaxed">Dealer B’s monthly payment is much lower – both because the APR is lower and because the loan is over 20 more months, so we are paying back less of the loan each month. When we calculate our total payments, we need to also consider the Down Payment we made – add this into our total payments to recognize it was paid.</p>
<p className="my-3 leading-relaxed">The last step is to subtract our “Cash Back” from the total payment, since this is money we are getting back. This will give us our Grand Total.</p>
<p className="my-3 leading-relaxed">Dealer A</p>
<p className="my-3 leading-relaxed">Dealer B</p>
<p className="my-3 leading-relaxed">Price</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">10200</p>
<p className="my-3 leading-relaxed">APR</p>
<p className="my-3 leading-relaxed">15%</p>
<p className="my-3 leading-relaxed">10%</p>
<p className="my-3 leading-relaxed">Loan Term</p>
<p className="my-3 leading-relaxed">40</p>
<p className="my-3 leading-relaxed">60</p>
<p className="my-3 leading-relaxed">Minimum Down Payment %</p>
<p className="my-3 leading-relaxed">0%</p>
<p className="my-3 leading-relaxed">5%</p>
<p className="my-3 leading-relaxed">Monthly Interest Rate</p>
<p className="my-3 leading-relaxed">0.0125</p>
<p className="my-3 leading-relaxed">0.008333333</p>
<p className="my-3 leading-relaxed">Minimum Down Payment</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">510</p>
<p className="my-3 leading-relaxed">Total Amount Finance</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">9690</p>
<p className="my-3 leading-relaxed">Monthly Payments</p>
<p className="my-3 leading-relaxed">($303.25)</p>
<p className="my-3 leading-relaxed">($205.88)</p>
<p className="my-3 leading-relaxed">Total Payments</p>
<p className="my-3 leading-relaxed">($12,130.14)</p>
<p className="my-3 leading-relaxed">($12,353.03)</p>
<p className="my-3 leading-relaxed">Grand Total</p>
<p className="my-3 leading-relaxed">($12,130.14)</p>
<p className="my-3 leading-relaxed">($12,363.03)</p>
<p className="my-3 leading-relaxed">Grand Total</p>
<p className="my-3 leading-relaxed">($12,130.14)</p>
<p className="my-3 leading-relaxed">($12,363.03)</p>
<p className="my-3 leading-relaxed">The “Cash Back” and “Down Payment” ALMOST cancel out, so the grand total is not very different.</p>
<p className="my-3 leading-relaxed">All together, it looks like Dealer A is cheaper, but Dealer B has much lower monthly payments. If I need extra breathing room to make sure I can always hit my monthly savings goals, Dealer B might be a smart choice.</p>
<p className="my-3 leading-relaxed">How to Calculate 0 Payments</p>
<p className="my-3 leading-relaxed">Dealer C is going to be more complicated to calculate. Our loan term is for 50 months, but they are saying that we do not need to make any payments for the first 6 months.</p>
<p className="my-3 leading-relaxed">For you as the buyer, it might sound nice to not need to make payments, but it means that the loan is still gathering interest for those months. This is going to make it harder to find the total amount you are financing, and we cannot just use the PMT function.</p>
<p className="my-3 leading-relaxed">Step 1: Finding Monthly Interest and Down Payment</p>
<p className="my-3 leading-relaxed">The first step is the same as before – calculate your monthly interest by dividing APR by 12, and calculate your minimum down payment by multiplying the sticker price by the Minimum Down Payment %. Then subtract the Down Payment from the Sticker Price to find your Total Amount Financed.</p>
<p className="my-3 leading-relaxed">Dealer A</p>
<p className="my-3 leading-relaxed">Dealer B</p>
<p className="my-3 leading-relaxed">Dealer C</p>
<p className="my-3 leading-relaxed">Price</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">10200</p>
<p className="my-3 leading-relaxed">11600</p>
<p className="my-3 leading-relaxed">APR</p>
<p className="my-3 leading-relaxed">15%</p>
<p className="my-3 leading-relaxed">10%</p>
<p className="my-3 leading-relaxed">13%</p>
<p className="my-3 leading-relaxed">Loan Term</p>
<p className="my-3 leading-relaxed">40</p>
<p className="my-3 leading-relaxed">60</p>
<p className="my-3 leading-relaxed">50</p>
<p className="my-3 leading-relaxed">Minimum Down Payment %</p>
<p className="my-3 leading-relaxed">0%</p>
<p className="my-3 leading-relaxed">5%</p>
<p className="my-3 leading-relaxed">10%</p>
<p className="my-3 leading-relaxed">Monthly Interest Rate</p>
<p className="my-3 leading-relaxed">0.0125</p>
<p className="my-3 leading-relaxed">0.008333333</p>
<p className="my-3 leading-relaxed">0.010833333</p>
<p className="my-3 leading-relaxed">Minimum Down Payment</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">510</p>
<p className="my-3 leading-relaxed">1160</p>
<p className="my-3 leading-relaxed">Total Amount Financed</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">9690</p>
<p className="my-3 leading-relaxed">10440</p>
<p className="my-3 leading-relaxed">Step 2: Adding Interest With No Payments</p>
<p className="my-3 leading-relaxed">Now we need to know how much interest is going to pile up in those months were we are not making a payment. You can do this in one single function, but to make it easy to see, we will calculate it out for all 6 months.</p>
<p className="my-3 leading-relaxed">Start by putting your Total Amount Financed as “Month 0” in a different part of your spreadsheet.</p>
<p className="my-3 leading-relaxed">Months</p>
<p className="my-3 leading-relaxed">Balance Due</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">$     10,440.00</p>
<p className="my-3 leading-relaxed">Next, add “Month 1” – and we will add the interest payment for the first month. You can calculate this as:</p>
<p className="my-3 leading-relaxed">New balance = Old Balance x (1 + monthly interest rate)</p>
<p className="my-3 leading-relaxed">Months</p>
<p className="my-3 leading-relaxed">Balance Due</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">$     10,440.00</p>
<p className="my-3 leading-relaxed">1</p>
<p className="my-3 leading-relaxed">$     10,553.10</p>
<p className="my-3 leading-relaxed">Repeat this for months 2, 3, 4, 5, and 6. The total amount after month 6 is what we need to use when calculating our actual payments.</p>
<p className="my-3 leading-relaxed">Months</p>
<p className="my-3 leading-relaxed">Balance Due</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">$     10,440.00</p>
<p className="my-3 leading-relaxed">1</p>
<p className="my-3 leading-relaxed">$     10,553.10</p>
<p className="my-3 leading-relaxed">2</p>
<p className="my-3 leading-relaxed">$     10,667.43</p>
<p className="my-3 leading-relaxed">3</p>
<p className="my-3 leading-relaxed">$     10,782.99</p>
<p className="my-3 leading-relaxed">4</p>
<p className="my-3 leading-relaxed">$     10,899.80</p>
<p className="my-3 leading-relaxed">5</p>
<p className="my-3 leading-relaxed">$     11,017.89</p>
<p className="my-3 leading-relaxed">6</p>
<p className="my-3 leading-relaxed">$     11,137.25</p>
<p className="my-3 leading-relaxed">Step 3: Calculating Monthly and Total Payments</p>
<p className="my-3 leading-relaxed">From here, it works just the same as Dealer B – find the monthly payment with the PMT function.</p>
<p className="my-3 leading-relaxed">Dealer A</p>
<p className="my-3 leading-relaxed">Dealer B</p>
<p className="my-3 leading-relaxed">Dealer C</p>
<p className="my-3 leading-relaxed">Price</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">10200</p>
<p className="my-3 leading-relaxed">11600</p>
<p className="my-3 leading-relaxed">APR</p>
<p className="my-3 leading-relaxed">15%</p>
<p className="my-3 leading-relaxed">10%</p>
<p className="my-3 leading-relaxed">13%</p>
<p className="my-3 leading-relaxed">Loan Term</p>
<p className="my-3 leading-relaxed">40</p>
<p className="my-3 leading-relaxed">60</p>
<p className="my-3 leading-relaxed">50</p>
<p className="my-3 leading-relaxed">Minimum Down Payment %</p>
<p className="my-3 leading-relaxed">0%</p>
<p className="my-3 leading-relaxed">5%</p>
<p className="my-3 leading-relaxed">10%</p>
<p className="my-3 leading-relaxed">Monthly Interest Rate</p>
<p className="my-3 leading-relaxed">0.0125</p>
<p className="my-3 leading-relaxed">0.008333333</p>
<p className="my-3 leading-relaxed">0.010833333</p>
<p className="my-3 leading-relaxed">Minimum Down Payment</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">510</p>
<p className="my-3 leading-relaxed">1160</p>
<p className="my-3 leading-relaxed">Total Amount Finance</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">9690</p>
<p className="my-3 leading-relaxed">11137</p>
<p className="my-3 leading-relaxed">Monthly Payments</p>
<p className="my-3 leading-relaxed">($303.25)</p>
<p className="my-3 leading-relaxed">($205.88)</p>
<p className="my-3 leading-relaxed">($289.67)</p>
<p className="my-3 leading-relaxed">The rest of the calculation is the same as Dealer B – calculate the total payments, add back in our down payment to get the total.</p>
<p className="my-3 leading-relaxed">Dealer A</p>
<p className="my-3 leading-relaxed">Dealer B</p>
<p className="my-3 leading-relaxed">Dealer C</p>
<p className="my-3 leading-relaxed">Price</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">10200</p>
<p className="my-3 leading-relaxed">11600</p>
<p className="my-3 leading-relaxed">APR</p>
<p className="my-3 leading-relaxed">15%</p>
<p className="my-3 leading-relaxed">10%</p>
<p className="my-3 leading-relaxed">13%</p>
<p className="my-3 leading-relaxed">Loan Term</p>
<p className="my-3 leading-relaxed">40</p>
<p className="my-3 leading-relaxed">60</p>
<p className="my-3 leading-relaxed">50</p>
<p className="my-3 leading-relaxed">Minimum Down Payment %</p>
<p className="my-3 leading-relaxed">0%</p>
<p className="my-3 leading-relaxed">5%</p>
<p className="my-3 leading-relaxed">10%</p>
<p className="my-3 leading-relaxed">Monthly Interest Rate</p>
<p className="my-3 leading-relaxed">0.0125</p>
<p className="my-3 leading-relaxed">0.008333333</p>
<p className="my-3 leading-relaxed">0.010833333</p>
<p className="my-3 leading-relaxed">Minimum Down Payment</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">510</p>
<p className="my-3 leading-relaxed">1160</p>
<p className="my-3 leading-relaxed">Total Amount Finance</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">9690</p>
<p className="my-3 leading-relaxed">11137</p>
<p className="my-3 leading-relaxed">Monthly Payments</p>
<p className="my-3 leading-relaxed">($303.25)</p>
<p className="my-3 leading-relaxed">($205.88)</p>
<p className="my-3 leading-relaxed">($289.67)</p>
<p className="my-3 leading-relaxed">Total Payments</p>
<p className="my-3 leading-relaxed">($12,130.14)</p>
<p className="my-3 leading-relaxed">($12,353.03)</p>
<p className="my-3 leading-relaxed">($14,483.34)</p>
<p className="my-3 leading-relaxed">Cash Back</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">500</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">Grand Total</p>
<p className="my-3 leading-relaxed">($12,130.14)</p>
<p className="my-3 leading-relaxed">($12,363.03)</p>
<p className="my-3 leading-relaxed">($15,643.34)</p>
<p className="my-3 leading-relaxed">It looks like that “6 months with no payments” added a lot to the total balance! Our monthly payments and total payments will both be much more expensive than the other two dealerships when we put everything together.</p>
<p className="my-3 leading-relaxed">Be Smart With Down Payments</p>
<p className="my-3 leading-relaxed">In the case above, we used our minimum down payments with every dealer. Most car dealerships want you to finance as much as possible (they make more money on the interest on the loans than the price of the car they sell – most of the “sticker price” goes to the manufacturer or the previous buyer for used cars), but you can always put as much money down as you want.</p>
<p className="my-3 leading-relaxed">Let’s see what happens when we ignore the “Minimum Down Payment %”, and instead put our entire $3,000 down with all 3 dealers.</p>
<p className="my-3 leading-relaxed">Dealer A</p>
<p className="my-3 leading-relaxed">Dealer B</p>
<p className="my-3 leading-relaxed">Dealer C</p>
<p className="my-3 leading-relaxed">Months</p>
<p className="my-3 leading-relaxed">Balance Due</p>
<p className="my-3 leading-relaxed">Price</p>
<p className="my-3 leading-relaxed">9500</p>
<p className="my-3 leading-relaxed">10200</p>
<p className="my-3 leading-relaxed">11600</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">$        8,600.00</p>
<p className="my-3 leading-relaxed">APR</p>
<p className="my-3 leading-relaxed">15%</p>
<p className="my-3 leading-relaxed">10%</p>
<p className="my-3 leading-relaxed">13%</p>
<p className="my-3 leading-relaxed">1</p>
<p className="my-3 leading-relaxed">$        8,693.17</p>
<p className="my-3 leading-relaxed">Loan Term</p>
<p className="my-3 leading-relaxed">40</p>
<p className="my-3 leading-relaxed">60</p>
<p className="my-3 leading-relaxed">50</p>
<p className="my-3 leading-relaxed">2</p>
<p className="my-3 leading-relaxed">$        8,787.34</p>
<p className="my-3 leading-relaxed">Minimum Down Payment %</p>
<p className="my-3 leading-relaxed">0%</p>
<p className="my-3 leading-relaxed">5%</p>
<p className="my-3 leading-relaxed">10%</p>
<p className="my-3 leading-relaxed">3</p>
<p className="my-3 leading-relaxed">$        8,882.54</p>
<p className="my-3 leading-relaxed">4</p>
<p className="my-3 leading-relaxed">$        8,978.77</p>
<p className="my-3 leading-relaxed">Monthly Interest Rate</p>
<p className="my-3 leading-relaxed">0.0125</p>
<p className="my-3 leading-relaxed">0.008333333</p>
<p className="my-3 leading-relaxed">0.010833333</p>
<p className="my-3 leading-relaxed">5</p>
<p className="my-3 leading-relaxed">$        9,076.04</p>
<p className="my-3 leading-relaxed">Minimum Down Payment</p>
<p className="my-3 leading-relaxed">3000</p>
<p className="my-3 leading-relaxed">3000</p>
<p className="my-3 leading-relaxed">3000</p>
<p className="my-3 leading-relaxed">6</p>
<p className="my-3 leading-relaxed">$        9,174.36</p>
<p className="my-3 leading-relaxed">Total Amount Finance</p>
<p className="my-3 leading-relaxed">6500</p>
<p className="my-3 leading-relaxed">7200</p>
<p className="my-3 leading-relaxed">9174</p>
<p className="my-3 leading-relaxed">Monthly Payments</p>
<p className="my-3 leading-relaxed">($207.49)</p>
<p className="my-3 leading-relaxed">($152.98)</p>
<p className="my-3 leading-relaxed">($238.61)</p>
<p className="my-3 leading-relaxed">Total Payments</p>
<p className="my-3 leading-relaxed">($8,299.57)</p>
<p className="my-3 leading-relaxed">($9,178.72)</p>
<p className="my-3 leading-relaxed">($11,930.72)</p>
<p className="my-3 leading-relaxed">Cash Back</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">500</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">Grand Total</p>
<p className="my-3 leading-relaxed">($11,299.57)</p>
<p className="my-3 leading-relaxed">($11,678.72)</p>
<p className="my-3 leading-relaxed">($14,930.72)</p>
<p className="my-3 leading-relaxed">Our monthly payments drop a lot – but the total amount we need to pay drops by even more!</p>
<p className="my-3 leading-relaxed">This difference is the main reason why it is so important to know how to do these comparisons yourself. If you walk into each of these dealerships in the real world, they will be happy to tell you what your monthly payments would be (what we calculated in the first part) – but you will not be able to compare apples-to-apples when considering different levels of down payments, and the total price you pay unless you know how to calculate it yourself.</p>
<p className="my-3 leading-relaxed">When we made a bigger down payment, Dealer A is still the cheapest overall by a few hundred dollars, but Dealer B has the lowest monthly payment. If money is very tight and we want to be sure we can always hit our monthly savings goals, we would probably choose Dealer B. If we can afford the monthly payments, Dealer A is the best value overall.</p>
<p className="my-3 leading-relaxed">This example looked at buying a car, but you can use the same PMT function in your spreadsheet to compare any loans – credit cards, mortgages, in-store financing, it all works! You can download a copy of this spreadsheet by</p>
<p className="my-3 leading-relaxed">clicking here</p>
<p className="my-3 leading-relaxed">.</p>
<p className="my-3 leading-relaxed">Pop Quiz</p>
      
    </article>
  );
}
