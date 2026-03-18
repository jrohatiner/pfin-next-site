'use client';


export default function AccountingForLiabilities() {
  

  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-4">Accounting for Liabilities</h1>

<p className="my-3 leading-relaxed">Every firm needs capital to purchase assets like inventory, land, and equipment. They also need cash to help manage expenses such as paying employees. How do companies raise the money they need to run their businesses? The answer is through a mix of liabilities (borrowing money) and equity (selling shares of ownership of the company). Liabilities and equity make up the right-hand side of the fundamental accounting equation:</p>

<strong>Assets = Liabilities + Shareholders’ Equity</strong>

<p className="my-3 leading-relaxed">This article will focus on liabilities and their accounting treatment under GAAP, covering current liabilities and long-term bond issuances.</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Current Liabilities</h2>

<p className="my-3 leading-relaxed">Current liabilities are defined as any liability due within one year. This typically includes accounts payable, accruals, and short-term debt. This is not limited to debt that was originally issued at a term of under a year—long-term debt becomes a current liability as soon as it reaches one year to maturity. It is then referred to as the “current portion” of long-term debt.</p>

<p className="my-3 leading-relaxed">Unlike asset accounts, a debit to a liability account <strong><em>decreases</strong></em> the account instead of increasing it. Likewise, a credit to a liability increases the account. This makes sense from the perspective that the right-hand side of the balance sheet (liabilities and equity) are obligations to the company, and therefore they should receive the opposite treatment as the left-hand side with assets.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Accounts Payable</h3>

<p className="my-3 leading-relaxed">Journal entries for accounts payable are fairly straightforward. There are two main entries that involve the account; the initial credit to accounts payable and later the cash payment that pays off the liability. Say I own a shoe company and have purchased $10,000 worth of inventory using $5,000 in cash and $5,000 of credit. The initial entry would be as follows:</p>

<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Account</strong> | <strong>Debit</strong> | <strong>Credit</strong> |</p>
<p className="my-3 leading-relaxed">| Inventory | $10,000 |  |</p>
<p className="my-3 leading-relaxed">| Cash |  | $5,000 |</p>
<p className="my-3 leading-relaxed">| Accounts Payable |  | $5,000 |</p>

<p className="my-3 leading-relaxed">When we eventually pay the supplier for the $5,000 purchased on credit, the following entry would be applied:</p>

<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Account</strong> | <strong>Debit</strong> | <strong>Credit</strong> |</p>
<p className="my-3 leading-relaxed">| Accounts Payable | $5,000 |  |</p>
<p className="my-3 leading-relaxed">| Cash |  | $5,000 |</p>

<p className="my-3 leading-relaxed">The debit of $5,000 decreases accounts payable back down to zero and we are left with a $0 ending balance in accounts payable (assuming no further purchases on credit).</p>

<h3 className="text-xl font-bold mt-6 mb-3">Interest and Rents Payable</h3>

<p className="my-3 leading-relaxed">Certain other “payable” liabilities, including interest payable and rent payable, have nearly identical journal entries to accounts payable and therefore it serves as a good basic framework. These accounts where an expense has been incurred but not yet paid are known as accruals. Here’s an example: if my shoe business borrowed <strong>$100,000</strong> for one year at an <strong>8%</strong> interest rate on <strong>December 1, 2016</strong>, what amount do we need to “accrue” or recognize as interest expense on December 31, 2016?</p>

<p className="my-3 leading-relaxed">The first step is to calculate what amount of interest is owed for an entire year. This is done by multiplying <strong>$100,000 \<em> 8%</strong> to reach an expense of <strong>$8,000</strong>. However, the matching concept dictates that we recognize expenses as they are incurred, and we have not incurred an entire year’s worth of interest. Instead, the next step is to calculate the fraction of a year that we have been paying interest. In this instance, we take one month (because we have only held the debt during December) divided by the twelve months in an entire year to reach a value of <strong>1/12</strong>. Finally, we take <strong>1/12 \</em> $8,000</strong> to conclude that our accrued amount needs to be <strong>$667</strong>.</p>

<strong>Issuance of Note 12/01/2016</strong>

<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Account</strong> | <strong>Debit</strong> | <strong>Credit</strong> |</p>
<p className="my-3 leading-relaxed">| Cash | $100,000 |  |</p>
<p className="my-3 leading-relaxed">| Note Payable |  | $100,000 |</p>

<strong>Accrual of Interest 12/31/2016</strong>

<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Account</strong> | <strong>Debit</strong> | <strong>Credit</strong> |</p>
<p className="my-3 leading-relaxed">| Interest Expense | $667 |  |</p>
<p className="my-3 leading-relaxed">| Interest Payable |  | $667 |</p>

<p className="my-3 leading-relaxed">The accrual entry will be identical every month from January-October, as the company incurs a month’s worth of interest during each period. If the cash interest is due when the note matures in December of 2017, the following entries would be necessary on November 30, 2017:</p>

<strong>Accrual of Interest 12/31/2016</strong>

<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Account</strong> | <strong>Debit</strong> | <strong>Credit</strong> |</p>
<p className="my-3 leading-relaxed">| Interest Expense | $667 |  |</p>
<p className="my-3 leading-relaxed">| Interest Payable |  | $667 |</p>

<strong>Repayment of Notes and Interest 11/30/2017</strong>

<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Account</strong> | <strong>Debit</strong> | <strong>Credit</strong> |</p>
<p className="my-3 leading-relaxed">| Note Payable | $100,000 |  |</p>
<p className="my-3 leading-relaxed">| Interest Payable | $8,000 |  |</p>
<p className="my-3 leading-relaxed">| Cash |  | $108,000 |</p>

<p className="my-3 leading-relaxed">This accrues our last period of interest before accounting for the cash payment of the note and interest.</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Long-term Debt</h2>

<p className="my-3 leading-relaxed">Often it is more practical for companies to issue debt that does not have to be paid back within a year. Issuances with maturity between one and ten years are commonly referred to as “<strong>notes</strong>” whereas those above ten years are called “<strong>bonds</strong>”.</p>

<p className="my-3 leading-relaxed">When a company issues long-term debt, the party purchasing the debt (the creditor) may not always pay the face value of the bond. If debt is issued at below face value, it is said to be at a “<em>discount</em>”, whereas bonds issued above face value are at a “<em>premium</em>”. Both discount and premium bonds require special accounting treatment—we will look at examples of each.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Discount Bonds</h3>

<p className="my-3 leading-relaxed">Let’s say that on January 1, 2017 the shoe company issues <strong>$50,000</strong> in <strong>8%</strong> 20-year bonds for <strong>$48,000</strong>—discount bonds. The opening journal entry would be as follows:</p>

<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Account</strong> | <strong>Debit</strong> | <strong>Credit</strong> |</p>
<p className="my-3 leading-relaxed">| Cash | $48,000 |  |</p>
<p className="my-3 leading-relaxed">| Discount on Bonds Payable | $2,000 |  |</p>
<p className="my-3 leading-relaxed">| Bonds Payable |  | $50,000 |</p>

<p className="my-3 leading-relaxed">Assuming the shoe company doesn’t default, at the end of 20 years the bonds will trade at par (or equal to face value). Therefore, we need to amortize the discount on bonds payable over the 20-year life of the issuance. Typically, firms do this with semiannual entries to match up with semiannual interest payments on bonds. Using straight-line amortization, our first entry would go like this:</p>

<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Account</strong> | <strong>Debit</strong> | <strong>Credit</strong> |</p>
<p className="my-3 leading-relaxed">| Interest Expense | $2,050 |  |</p>
<p className="my-3 leading-relaxed">| Discount on Bonds Payable |  | $50 |</p>
<p className="my-3 leading-relaxed">| Cash |  | $2,000 |</p>

<p className="my-3 leading-relaxed">Interest payable is calculated by taking the bonds’ face value of <strong>$50,000</strong> times <strong>8%</strong> divided by two (to account for semiannual interest payments). Then, to calculate the amount of discount to amortize, we take <strong>$50,000</strong> face value minus the <strong>$48,000</strong> issuance price to get the total discount amount of <strong>$2,000</strong>. Then, since we need to amortize the discount over 40 payment periods (20 years times two payments per year), we take <strong>$2,000/40</strong> and reach <strong>$50</strong> that needs to be amortized per period. The interest expense account is a plug figure—we add <strong>$2,000 +$50</strong> to get <strong>$2,050</strong>. This entry will be repeated until the entire discount is amortized and the bonds reach maturity.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Premium Bonds</h3>

<p className="my-3 leading-relaxed">Now, what if the same bonds ($50,000 face value, 20 years to maturity, 8% coupon rate) were issued for $54,000? These would be premium bonds, which have slightly different journal entries. The issuance entry would look like this:</p>

<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Account</strong> | <strong>Debit</strong> | <strong>Credit</strong> |</p>
<p className="my-3 leading-relaxed">| Cash | $54,000 |  |</p>
<p className="my-3 leading-relaxed">| Premium on Bonds Payable |  | $4,000 |</p>
<p className="my-3 leading-relaxed">| Bonds Payable |  | $50,000 |</p>

<p className="my-3 leading-relaxed">Notice that the premium is a credit account instead of a debit, and that this time we will have to amortize the premium through debit entries. The amortization entries would be as follows:</p>

<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Account</strong> | <strong>Debit</strong> | <strong>Credit</strong> |</p>
<p className="my-3 leading-relaxed">| Interest Expense | $1,900 |  |</p>
<p className="my-3 leading-relaxed">| Premium on Bonds Payable | $100 |  |</p>
<p className="my-3 leading-relaxed">| Cash |  | $2,000 |</p>

<p className="my-3 leading-relaxed">Interest payable is still <strong>8% \<em> $50,000 \</em>1/2</strong>, and the premium amortized is found by taking the <strong>$4,000</strong> total premium divided by <strong>40</strong> payment periods. We subtract <strong>$100</strong> from <strong>$2,000</strong> to get the interest expense of <strong>$1,900</strong>.</p>

<strong>Implications for Financial Statements</strong>

<p className="my-3 leading-relaxed">The interest expense that gets applied on the income statements is the “<em>interest expense</em>” account from our above entries, <strong>NOT</strong> the cash interest paid. Therefore, premium bonds result in the company paying a greater amount of cash interest relative to the amount that is expensed, whereas discount bonds cause a higher expense than cash paid. This corresponds with the greater amount of cash raised by a premium issuance and the lower amount raised from discount issuances.</p>

<p className="my-3 leading-relaxed">On the balance sheet, long-term liabilities are listed at their carrying value, not face value. This means that for premium bonds, the balance sheet would show the bonds at face value plus any unamortized premium. Discount bonds would be shown at face value minus any unamortized discount.</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Transcript (best effort)</h2>

<p className="my-3 leading-relaxed">Accounting for Liabilities</p>
<p className="my-3 leading-relaxed">Every firm needs capital to purchase assets like inventory, land, and equipment. They also need cash to help manage expenses such as paying employees. How do companies raise the money they need to run their businesses? The answer is through a mix of liabilities (borrowing money) and equity (selling shares of ownership of the company). Liabilities and equity make up the right-hand side of the fundamental accounting equation:</p>
<p className="my-3 leading-relaxed">Assets = Liabilities + Shareholders’ Equity</p>
<p className="my-3 leading-relaxed">This article will focus on liabilities and their accounting treatment under GAAP, covering current liabilities and long-term bond issuances.</p>
<p className="my-3 leading-relaxed">Current Liabilities</p>
<p className="my-3 leading-relaxed">Current liabilities are defined as any liability due within one year. This typically includes accounts payable, accruals, and short-term debt. This is not limited to debt that was originally issued at a term of under a year—long-term debt becomes a current liability as soon as it reaches one year to maturity. It is then referred to as the “current portion” of long-term debt.</p>
<p className="my-3 leading-relaxed">Unlike asset accounts, a debit to a liability account</p>
<p className="my-3 leading-relaxed">decreases</p>
<p className="my-3 leading-relaxed">the account instead of increasing it. Likewise, a credit to a liability increases the account. This makes sense from the perspective that the right-hand side of the balance sheet (liabilities and equity) are obligations to the company, and therefore they should receive the opposite treatment as the left-hand side with assets.</p>
<p className="my-3 leading-relaxed">Accounts Payable</p>
<p className="my-3 leading-relaxed">Journal entries for accounts payable are fairly straightforward. There are two main entries that involve the account; the initial credit to accounts payable and later the cash payment that pays off the liability. Say I own a shoe company and have purchased $10,000 worth of inventory using $5,000 in cash and $5,000 of credit. The initial entry would be as follows:</p>
<p className="my-3 leading-relaxed">Account</p>
<p className="my-3 leading-relaxed">Debit</p>
<p className="my-3 leading-relaxed">Credit</p>
<p className="my-3 leading-relaxed">Inventory</p>
<p className="my-3 leading-relaxed">$10,000</p>
<p className="my-3 leading-relaxed">Cash</p>
<p className="my-3 leading-relaxed">$5,000</p>
<p className="my-3 leading-relaxed">Accounts Payable</p>
<p className="my-3 leading-relaxed">$5,000</p>
<p className="my-3 leading-relaxed">When we eventually pay the supplier for the $5,000 purchased on credit, the following entry would be applied:</p>
<p className="my-3 leading-relaxed">Account</p>
<p className="my-3 leading-relaxed">Debit</p>
<p className="my-3 leading-relaxed">Credit</p>
<p className="my-3 leading-relaxed">Accounts Payable</p>
<p className="my-3 leading-relaxed">$5,000</p>
<p className="my-3 leading-relaxed">Cash</p>
<p className="my-3 leading-relaxed">$5,000</p>
<p className="my-3 leading-relaxed">The debit of $5,000 decreases accounts payable back down to zero and we are left with a $0 ending balance in accounts payable (assuming no further purchases on credit).</p>
<p className="my-3 leading-relaxed">Interest and Rents Payable</p>
<p className="my-3 leading-relaxed">Certain other “payable” liabilities, including interest payable and rent payable, have nearly identical journal entries to accounts payable and therefore it serves as a good basic framework. These accounts where an expense has been incurred but not yet paid are known as accruals. Here’s an example: if my shoe business borrowed</p>
<p className="my-3 leading-relaxed">$100,000</p>
<p className="my-3 leading-relaxed">for one year at an</p>
<p className="my-3 leading-relaxed">8%</p>
<p className="my-3 leading-relaxed">interest rate on</p>
<p className="my-3 leading-relaxed">December 1, 2016</p>
<p className="my-3 leading-relaxed">, what amount do we need to “accrue” or recognize as interest expense on December 31, 2016?</p>
<p className="my-3 leading-relaxed">The first step is to calculate what amount of interest is owed for an entire year. This is done by multiplying</p>
<p className="my-3 leading-relaxed">$100,000</p>
<p className="my-3 leading-relaxed">*</p>
<p className="my-3 leading-relaxed">8%</p>
<p className="my-3 leading-relaxed">to reach an expense of</p>
<p className="my-3 leading-relaxed">$8,000</p>
<p className="my-3 leading-relaxed">. However, the matching concept dictates that we recognize expenses as they are incurred, and we have not incurred an entire year’s worth of interest. Instead, the next step is to calculate the fraction of a year that we have been paying interest. In this instance, we take one month (because we have only held the debt during December) divided by the twelve months in an entire year to reach a value of</p>
<p className="my-3 leading-relaxed">1/12</p>
<p className="my-3 leading-relaxed">. Finally, we take</p>
<p className="my-3 leading-relaxed">1/12 *</p>
<p className="my-3 leading-relaxed">$8,000</p>
<p className="my-3 leading-relaxed">to conclude that our accrued amount needs to be</p>
<p className="my-3 leading-relaxed">$667</p>
<p className="my-3 leading-relaxed">.</p>
<p className="my-3 leading-relaxed">Issuance of Note 12/01/2016</p>
<p className="my-3 leading-relaxed">Account</p>
<p className="my-3 leading-relaxed">Debit</p>
<p className="my-3 leading-relaxed">Credit</p>
<p className="my-3 leading-relaxed">Cash</p>
<p className="my-3 leading-relaxed">$100,000</p>
<p className="my-3 leading-relaxed">Note Payable</p>
<p className="my-3 leading-relaxed">$100,000</p>
<p className="my-3 leading-relaxed">Accrual of Interest 12/31/2016</p>
<p className="my-3 leading-relaxed">Account</p>
<p className="my-3 leading-relaxed">Debit</p>
<p className="my-3 leading-relaxed">Credit</p>
<p className="my-3 leading-relaxed">Interest Expense</p>
<p className="my-3 leading-relaxed">$667</p>
<p className="my-3 leading-relaxed">Interest Payable</p>
<p className="my-3 leading-relaxed">$667</p>
<p className="my-3 leading-relaxed">The accrual entry will be identical every month from January-October, as the company incurs a month’s worth of interest during each period. If the cash interest is due when the note matures in December of 2017, the following entries would be necessary on November 30, 2017:</p>
<p className="my-3 leading-relaxed">Accrual of Interest 12/31/2016</p>
<p className="my-3 leading-relaxed">Account</p>
<p className="my-3 leading-relaxed">Debit</p>
<p className="my-3 leading-relaxed">Credit</p>
<p className="my-3 leading-relaxed">Interest Expense</p>
<p className="my-3 leading-relaxed">$667</p>
<p className="my-3 leading-relaxed">Interest Payable</p>
<p className="my-3 leading-relaxed">$667</p>
<p className="my-3 leading-relaxed">Repayment of Notes and Interest 11/30/2017</p>
<p className="my-3 leading-relaxed">Account</p>
<p className="my-3 leading-relaxed">Debit</p>
<p className="my-3 leading-relaxed">Credit</p>
<p className="my-3 leading-relaxed">Note Payable</p>
<p className="my-3 leading-relaxed">$100,000</p>
<p className="my-3 leading-relaxed">Interest Payable</p>
<p className="my-3 leading-relaxed">$8,000</p>
<p className="my-3 leading-relaxed">Cash</p>
<p className="my-3 leading-relaxed">$108,000</p>
<p className="my-3 leading-relaxed">This accrues our last period of interest before accounting for the cash payment of the note and interest.</p>
<p className="my-3 leading-relaxed">Long-term Debt</p>
<p className="my-3 leading-relaxed">Often it is more practical for companies to issue debt that does not have to be paid back within a year. Issuances with maturity between one and ten years are commonly referred to as “</p>
<p className="my-3 leading-relaxed">notes</p>
<p className="my-3 leading-relaxed">” whereas those above ten years are called “</p>
<p className="my-3 leading-relaxed">bonds</p>
<p className="my-3 leading-relaxed">”.</p>
<p className="my-3 leading-relaxed">When a company issues long-term debt, the party purchasing the debt (the creditor) may not always pay the face value of the bond. If debt is issued at below face value, it is said to be at a “</p>
<p className="my-3 leading-relaxed">discount</p>
<p className="my-3 leading-relaxed">”, whereas bonds issued above face value are at a “</p>
<p className="my-3 leading-relaxed">premium</p>
<p className="my-3 leading-relaxed">”. Both discount and premium bonds require special accounting treatment—we will look at examples of each.</p>
<p className="my-3 leading-relaxed">Discount Bonds</p>
<p className="my-3 leading-relaxed">Let’s say that on January 1, 2017 the shoe company issues</p>
<p className="my-3 leading-relaxed">$50,000</p>
<p className="my-3 leading-relaxed">in</p>
<p className="my-3 leading-relaxed">8%</p>
<p className="my-3 leading-relaxed">20-year bonds for</p>
<p className="my-3 leading-relaxed">$48,000</p>
<p className="my-3 leading-relaxed">—discount bonds. The opening journal entry would be as follows:</p>
<p className="my-3 leading-relaxed">Account</p>
<p className="my-3 leading-relaxed">Debit</p>
<p className="my-3 leading-relaxed">Credit</p>
<p className="my-3 leading-relaxed">Cash</p>
<p className="my-3 leading-relaxed">$48,000</p>
<p className="my-3 leading-relaxed">Discount on Bonds Payable</p>
<p className="my-3 leading-relaxed">$2,000</p>
<p className="my-3 leading-relaxed">Bonds Payable</p>
<p className="my-3 leading-relaxed">$50,000</p>
<p className="my-3 leading-relaxed">Assuming the shoe company doesn’t default, at the end of 20 years the bonds will trade at par (or equal to face value). Therefore, we need to amortize the discount on bonds payable over the 20-year life of the issuance. Typically, firms do this with semiannual entries to match up with semiannual interest payments on bonds. Using straight-line amortization, our first entry would go like this:</p>
<p className="my-3 leading-relaxed">Account</p>
<p className="my-3 leading-relaxed">Debit</p>
<p className="my-3 leading-relaxed">Credit</p>
<p className="my-3 leading-relaxed">Interest Expense</p>
<p className="my-3 leading-relaxed">$2,050</p>
<p className="my-3 leading-relaxed">Discount on Bonds Payable</p>
<p className="my-3 leading-relaxed">$50</p>
<p className="my-3 leading-relaxed">Cash</p>
<p className="my-3 leading-relaxed">$2,000</p>
<p className="my-3 leading-relaxed">Interest payable is calculated by taking the bonds’ face value of</p>
<p className="my-3 leading-relaxed">$50,000</p>
<p className="my-3 leading-relaxed">times</p>
<p className="my-3 leading-relaxed">8%</p>
<p className="my-3 leading-relaxed">divided by two (to account for semiannual interest payments). Then, to calculate the amount of discount to amortize, we take</p>
<p className="my-3 leading-relaxed">$50,000</p>
<p className="my-3 leading-relaxed">face value minus the</p>
<p className="my-3 leading-relaxed">$48,000</p>
<p className="my-3 leading-relaxed">issuance price to get the total discount amount of</p>
<p className="my-3 leading-relaxed">$2,000</p>
<p className="my-3 leading-relaxed">. Then, since we need to amortize the discount over 40 payment periods (20 years times two payments per year), we take</p>
<p className="my-3 leading-relaxed">$2,000</p>
<p className="my-3 leading-relaxed">/40</p>
<p className="my-3 leading-relaxed">and reach</p>
<p className="my-3 leading-relaxed">$50</p>
<p className="my-3 leading-relaxed">that needs to be amortized per period. The interest expense account is a plug figure—we add</p>
<p className="my-3 leading-relaxed">$2,000</p>
<p className="my-3 leading-relaxed">+$50</p>
<p className="my-3 leading-relaxed">to get</p>
<p className="my-3 leading-relaxed">$2,050</p>
<p className="my-3 leading-relaxed">. This entry will be repeated until the entire discount is amortized and the bonds reach maturity.</p>
<p className="my-3 leading-relaxed">Premium Bonds</p>
<p className="my-3 leading-relaxed">Now, what if the same bonds ($50,000 face value, 20 years to maturity, 8% coupon rate) were issued for $54,000? These would be premium bonds, which have slightly different journal entries. The issuance entry would look like this:</p>
<p className="my-3 leading-relaxed">Account</p>
<p className="my-3 leading-relaxed">Debit</p>
<p className="my-3 leading-relaxed">Credit</p>
<p className="my-3 leading-relaxed">Cash</p>
<p className="my-3 leading-relaxed">$54,000</p>
<p className="my-3 leading-relaxed">Premium on Bonds Payable</p>
<p className="my-3 leading-relaxed">$4,000</p>
<p className="my-3 leading-relaxed">Bonds Payable</p>
<p className="my-3 leading-relaxed">$50,000</p>
<p className="my-3 leading-relaxed">Notice that the premium is a credit account instead of a debit, and that this time we will have to amortize the premium through debit entries. The amortization entries would be as follows:</p>
<p className="my-3 leading-relaxed">Account</p>
<p className="my-3 leading-relaxed">Debit</p>
<p className="my-3 leading-relaxed">Credit</p>
<p className="my-3 leading-relaxed">Interest Expense</p>
<p className="my-3 leading-relaxed">$1,900</p>
<p className="my-3 leading-relaxed">Premium on Bonds Payable</p>
<p className="my-3 leading-relaxed">$100</p>
<p className="my-3 leading-relaxed">Cash</p>
<p className="my-3 leading-relaxed">$2,000</p>
<p className="my-3 leading-relaxed">Interest payable is still</p>
<p className="my-3 leading-relaxed">8%</p>
<p className="my-3 leading-relaxed">*</p>
<p className="my-3 leading-relaxed">$50,000</p>
<p className="my-3 leading-relaxed">*1/2</p>
<p className="my-3 leading-relaxed">, and the premium amortized is found by taking the</p>
<p className="my-3 leading-relaxed">$4,000</p>
<p className="my-3 leading-relaxed">total premium divided by</p>
<p className="my-3 leading-relaxed">40</p>
<p className="my-3 leading-relaxed">payment periods. We subtract</p>
<p className="my-3 leading-relaxed">$100</p>
<p className="my-3 leading-relaxed">from</p>
<p className="my-3 leading-relaxed">$2,000</p>
<p className="my-3 leading-relaxed">to get the interest expense of</p>
<p className="my-3 leading-relaxed">$1,900</p>
<p className="my-3 leading-relaxed">.</p>
<p className="my-3 leading-relaxed">Implications for Financial Statements</p>
<p className="my-3 leading-relaxed">The interest expense that gets applied on the income statements is the “</p>
<p className="my-3 leading-relaxed">interest expense</p>
<p className="my-3 leading-relaxed">” account from our above entries,</p>
<p className="my-3 leading-relaxed">NOT</p>
<p className="my-3 leading-relaxed">the cash interest paid. Therefore, premium bonds result in the company paying a greater amount of cash interest relative to the amount that is expensed, whereas discount bonds cause a higher expense than cash paid. This corresponds with the greater amount of cash raised by a premium issuance and the lower amount raised from discount issuances.</p>
<p className="my-3 leading-relaxed">On the balance sheet, long-term liabilities are listed at their carrying value, not face value. This means that for premium bonds, the balance sheet would show the bonds at face value plus any unamortized premium. Discount bonds would be shown at face value minus any unamortized discount.</p>
<p className="my-3 leading-relaxed">Pop Quiz</p>
      
    </article>
  );
}
