'use client';


export default function StudentLoanRepaymentCalculator() {
  

  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-4">Student Loan Repayment Calculator</h1>

<p className="my-3 leading-relaxed">Figuring out how to pay back student loans can feel overwhelming. The plan you choose affects your monthly budget, the total interest you’ll pay, and how long you’ll be in debt. This calculator is designed to make that choice clearer. It lets you explore different repayment strategies to find the one that best fits your financial future, and even shows you how making extra payments can help you become debt-free faster.</p>

<h2 className="text-2xl font-bold mt-8 mb-4">How to Use the Calculator</h2>

<p className="my-3 leading-relaxed">1. Enter your <strong>Loan Details</strong> (amount, interest rate, and a standard 10-year term to start).</p>
<p className="my-3 leading-relaxed">2. Select a <strong>Repayment Plan</strong> from the dropdown menu. If you choose “Income-Driven,” enter your estimated annual income.</p>
<p className="my-3 leading-relaxed">3. Click <strong>“Calculate Payment”</strong> to see your results in the “Payment Summary” section.</p>
<p className="my-3 leading-relaxed">4. Explore the tabs below to view the <strong>Amortization Schedule</strong>, compare all plans in a single table, and use the <strong>“Extra Payment Calculator”</strong> to see how you can save on interest.</p>

<p className="my-3 leading-relaxed">---</p>

<h2 className="text-2xl font-bold mt-8 mb-4"><strong>Understanding Your Repayment Plan Options</strong></h2>

<p className="my-3 leading-relaxed">Choosing a repayment plan is a trade-off between your monthly payment and the total interest you’ll pay. Here’s a quick guide:</p>

<h3 className="text-xl font-bold mt-6 mb-3">Standard Repayment</h3>

<p className="my-3 leading-relaxed">The default repayment plan for federal student loans, with fixed monthly payments over a 10-year term. This plan results in the lowest total interest paid compared to other plans.</p>

<h3 className="text-xl font-bold mt-6 mb-3">✅ Pros</h3>

<p className="my-3 leading-relaxed">* Pays the loan off the fastest.</p>
<p className="my-3 leading-relaxed">* You pay the least amount of total interest.</p>
<p className="my-3 leading-relaxed">* Simple, consistent, and easy to budget for.</p>

<h3 className="text-xl font-bold mt-6 mb-3">❌ Cons</h3>

<p className="my-3 leading-relaxed">* Has the highest monthly payments</p>
<p className="my-3 leading-relaxed">* Can be difficult to afford on an entry-level salary.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Extended Repayment</h3>

<p className="my-3 leading-relaxed">A plan that allows you to repay your loans over a longer period, typically up to 25 years. This lowers your monthly payment but significantly increases the total interest you will pay.</p>

<h3 className="text-xl font-bold mt-6 mb-3">✅ Pros</h3>

<p className="my-3 leading-relaxed">* Offers a much lower, more manageable monthly payment.</p>
<p className="my-3 leading-relaxed">* More manageable for a tight budget.</p>
<p className="my-3 leading-relaxed">* Frees up monthly cash flow for other goals.</p>

<h3 className="text-xl font-bold mt-6 mb-3">❌ Cons</h3>

<p className="my-3 leading-relaxed">* You will pay <strong>significantly more</strong> in total interest over the life of the loan.</p>
<p className="my-3 leading-relaxed">* You will be in debt for a much longer time.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Graduated Repayment</h3>

<p className="my-3 leading-relaxed">A plan where payments start low and increase every two years. It’s designed for borrowers who expect their income to rise over time, but it can lead to paying more interest than a Standard plan.</p>

<h3 className="text-xl font-bold mt-6 mb-3">✅ Pros</h3>

<p className="my-3 leading-relaxed">* Low initial payments are easier for new graduates.</p>
<p className="my-3 leading-relaxed">* Payments rise to match your expected career growth.</p>

<h3 className="text-xl font-bold mt-6 mb-3">❌ Cons</h3>

<p className="my-3 leading-relaxed">* You will pay more in total interest than the Standard Plan.</p>
<p className="my-3 leading-relaxed">* Later payments can become very high and may be a shock to your budget.</p>
<p className="my-3 leading-relaxed">* In the early years, your low payments may not even cover the accruing interest, causing your loan balance to temporarily increase.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Income-Driven Repayment (IDR)</h3>

<p className="my-3 leading-relaxed">A repayment plan where your monthly payment is calculated as a percentage of your discretionary income. It keeps payments affordable but often extends the loan term and can increase the total interest paid.</p>

<h3 className="text-xl font-bold mt-6 mb-3">✅ Pros</h3>

<p className="my-3 leading-relaxed">* Monthly payments can be very low (even $0) if your income is low.</p>
<p className="my-3 leading-relaxed">* Provides a safety net against job loss or low wages.</p>
<p className="my-3 leading-relaxed">* Offers the possibility of loan forgiveness after 20-25 years.</p>

<h3 className="text-xl font-bold mt-6 mb-3">❌ Cons</h3>

<p className="my-3 leading-relaxed">* You will almost certainly pay much more in total interest.</p>
<p className="my-3 leading-relaxed">* Your loan balance can grow if payments don’t cover interest.</p>
<p className="my-3 leading-relaxed">* The forgiven loan amount may be considered taxable income.</p>

<p className="my-3 leading-relaxed">---</p>

<p className="my-3 leading-relaxed">Calculation completed successfully!</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Loan Details</h2>

<p className="my-3 leading-relaxed">Loan Amount ($) The total principal amount you borrowed for school. This is the starting balance for your loan.</p>

<p className="my-3 leading-relaxed">Annual Interest Rate (%) The percentage of your loan balance you are charged each year for borrowing. A higher rate means a more expensive loan.</p>

<p className="my-3 leading-relaxed">Loan Term (Years) The number of years you have to pay back your loan. A shorter term saves you money on interest but means higher monthly payments.</p>

<p className="my-3 leading-relaxed">Repayment Plan The strategy for repaying your loan. Each plan balances the size of your monthly payment against the total interest you'll pay over time.</p>

<p className="my-3 leading-relaxed">Standard Repayment</p>
<p className="my-3 leading-relaxed">Extended Repayment</p>
<p className="my-3 leading-relaxed">Graduated Repayment</p>
<p className="my-3 leading-relaxed">Income-Driven (Estimate)</p>

<p className="my-3 leading-relaxed">Annual Income ($)</p>

<p className="my-3 leading-relaxed">Calculate Payment</p>


<p className="my-3 leading-relaxed">---</p>

<h3 className="text-xl font-bold mt-6 mb-3">Extra Payment Calculator</h3>

<p className="my-3 leading-relaxed">Additional Monthly Payment ($)</p>

<p className="my-3 leading-relaxed">Calculate Savings</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Payment Summary</h2>

<p className="my-3 leading-relaxed">Monthly Payment</p>

<p className="my-3 leading-relaxed">$326</p>

<p className="my-3 leading-relaxed">Total Interest</p>

<p className="my-3 leading-relaxed">$9,069</p>

<p className="my-3 leading-relaxed">Total Amount</p>

<p className="my-3 leading-relaxed">$39,069</p>

<p className="my-3 leading-relaxed">Payoff Date</p>

<p className="my-3 leading-relaxed">March 2036</p>

<p className="my-3 leading-relaxed">Amortization Schedule A detailed table that breaks down each loan payment, showing how much goes to interest and how much goes to reducing your actual loan balance (principal).</p>

<p className="my-3 leading-relaxed">Plan Comparison</p>

<p className="my-3 leading-relaxed">Interest Savings</p>

<h3 className="text-xl font-bold mt-6 mb-3">Amortization Schedule</h3>

<p className="my-3 leading-relaxed">| Month | Payment | Principal The original amount of money you borrowed for your student loans. | Interest The cost of borrowing money. You pay interest on top of the principal. | Balance The total amount of your original loan that you still owe. The 'principal' portion of each payment directly reduces this balance. |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| 1 | $326 | $188 | $138 | $29,812 |</p>
<p className="my-3 leading-relaxed">| 2 | $326 | $189 | $137 | $29,623 |</p>
<p className="my-3 leading-relaxed">| 3 | $326 | $190 | $136 | $29,433 |</p>
<p className="my-3 leading-relaxed">| 4 | $326 | $191 | $135 | $29,242 |</p>
<p className="my-3 leading-relaxed">| 5 | $326 | $192 | $134 | $29,051 |</p>
<p className="my-3 leading-relaxed">| 6 | $326 | $192 | $133 | $28,859 |</p>
<p className="my-3 leading-relaxed">| 7 | $326 | $193 | $132 | $28,665 |</p>
<p className="my-3 leading-relaxed">| 8 | $326 | $194 | $131 | $28,471 |</p>
<p className="my-3 leading-relaxed">| 9 | $326 | $195 | $130 | $28,276 |</p>
<p className="my-3 leading-relaxed">| 10 | $326 | $196 | $130 | $28,080 |</p>
<p className="my-3 leading-relaxed">| 11 | $326 | $197 | $129 | $27,883 |</p>
<p className="my-3 leading-relaxed">| 12 | $326 | $198 | $128 | $27,685 |</p>
<p className="my-3 leading-relaxed">| 13 | $326 | $199 | $127 | $27,487 |</p>
<p className="my-3 leading-relaxed">| 14 | $326 | $200 | $126 | $27,287 |</p>
<p className="my-3 leading-relaxed">| 15 | $326 | $201 | $125 | $27,086 |</p>
<p className="my-3 leading-relaxed">| 16 | $326 | $201 | $124 | $26,885 |</p>
<p className="my-3 leading-relaxed">| 17 | $326 | $202 | $123 | $26,683 |</p>
<p className="my-3 leading-relaxed">| 18 | $326 | $203 | $122 | $26,479 |</p>
<p className="my-3 leading-relaxed">| 19 | $326 | $204 | $121 | $26,275 |</p>
<p className="my-3 leading-relaxed">| 20 | $326 | $205 | $120 | $26,070 |</p>
<p className="my-3 leading-relaxed">| 21 | $326 | $206 | $119 | $25,864 |</p>
<p className="my-3 leading-relaxed">| 22 | $326 | $207 | $119 | $25,657 |</p>
<p className="my-3 leading-relaxed">| 23 | $326 | $208 | $118 | $25,449 |</p>
<p className="my-3 leading-relaxed">| 24 | $326 | $209 | $117 | $25,240 |</p>
<p className="my-3 leading-relaxed">| 25 | $326 | $210 | $116 | $25,030 |</p>
<p className="my-3 leading-relaxed">| 26 | $326 | $211 | $115 | $24,819 |</p>
<p className="my-3 leading-relaxed">| 27 | $326 | $212 | $114 | $24,607 |</p>
<p className="my-3 leading-relaxed">| 28 | $326 | $213 | $113 | $24,395 |</p>
<p className="my-3 leading-relaxed">| 29 | $326 | $214 | $112 | $24,181 |</p>
<p className="my-3 leading-relaxed">| 30 | $326 | $215 | $111 | $23,966 |</p>
<p className="my-3 leading-relaxed">| 31 | $326 | $216 | $110 | $23,750 |</p>
<p className="my-3 leading-relaxed">| 32 | $326 | $217 | $109 | $23,534 |</p>
<p className="my-3 leading-relaxed">| 33 | $326 | $218 | $108 | $23,316 |</p>
<p className="my-3 leading-relaxed">| 34 | $326 | $219 | $107 | $23,097 |</p>
<p className="my-3 leading-relaxed">| 35 | $326 | $220 | $106 | $22,877 |</p>
<p className="my-3 leading-relaxed">| 36 | $326 | $221 | $105 | $22,657 |</p>
<p className="my-3 leading-relaxed">| 37 | $326 | $222 | $104 | $22,435 |</p>
<p className="my-3 leading-relaxed">| 38 | $326 | $223 | $103 | $22,212 |</p>
<p className="my-3 leading-relaxed">| 39 | $326 | $224 | $102 | $21,989 |</p>
<p className="my-3 leading-relaxed">| 40 | $326 | $225 | $101 | $21,764 |</p>
<p className="my-3 leading-relaxed">| 41 | $326 | $226 | $100 | $21,538 |</p>
<p className="my-3 leading-relaxed">| 42 | $326 | $227 | $99 | $21,311 |</p>
<p className="my-3 leading-relaxed">| 43 | $326 | $228 | $98 | $21,083 |</p>
<p className="my-3 leading-relaxed">| 44 | $326 | $229 | $97 | $20,854 |</p>
<p className="my-3 leading-relaxed">| 45 | $326 | $230 | $96 | $20,624 |</p>
<p className="my-3 leading-relaxed">| 46 | $326 | $231 | $95 | $20,393 |</p>
<p className="my-3 leading-relaxed">| 47 | $326 | $232 | $93 | $20,161 |</p>
<p className="my-3 leading-relaxed">| 48 | $326 | $233 | $92 | $19,928 |</p>
<p className="my-3 leading-relaxed">| 49 | $326 | $234 | $91 | $19,694 |</p>
<p className="my-3 leading-relaxed">| 50 | $326 | $235 | $90 | $19,458 |</p>
<p className="my-3 leading-relaxed">| 51 | $326 | $236 | $89 | $19,222 |</p>
<p className="my-3 leading-relaxed">| 52 | $326 | $237 | $88 | $18,984 |</p>
<p className="my-3 leading-relaxed">| 53 | $326 | $239 | $87 | $18,746 |</p>
<p className="my-3 leading-relaxed">| 54 | $326 | $240 | $86 | $18,506 |</p>
<p className="my-3 leading-relaxed">| 55 | $326 | $241 | $85 | $18,265 |</p>
<p className="my-3 leading-relaxed">| 56 | $326 | $242 | $84 | $18,024 |</p>
<p className="my-3 leading-relaxed">| 57 | $326 | $243 | $83 | $17,781 |</p>
<p className="my-3 leading-relaxed">| 58 | $326 | $244 | $81 | $17,537 |</p>
<p className="my-3 leading-relaxed">| 59 | $326 | $245 | $80 | $17,291 |</p>
<p className="my-3 leading-relaxed">| 60 | $326 | $246 | $79 | $17,045 |</p>
<p className="my-3 leading-relaxed">| ... | | | | |</p>
<p className="my-3 leading-relaxed">| 109 | $326 | $308 | $17 | $3,485 |</p>
<p className="my-3 leading-relaxed">| 110 | $326 | $310 | $16 | $3,175 |</p>
<p className="my-3 leading-relaxed">| 111 | $326 | $311 | $15 | $2,864 |</p>
<p className="my-3 leading-relaxed">| 112 | $326 | $312 | $13 | $2,552 |</p>
<p className="my-3 leading-relaxed">| 113 | $326 | $314 | $12 | $2,238 |</p>
<p className="my-3 leading-relaxed">| 114 | $326 | $315 | $10 | $1,923 |</p>
<p className="my-3 leading-relaxed">| 115 | $326 | $317 | $9 | $1,606 |</p>
<p className="my-3 leading-relaxed">| 116 | $326 | $318 | $7 | $1,288 |</p>
<p className="my-3 leading-relaxed">| 117 | $326 | $320 | $6 | $968 |</p>
<p className="my-3 leading-relaxed">| 118 | $326 | $321 | $4 | $647 |</p>
<p className="my-3 leading-relaxed">| 119 | $326 | $323 | $3 | $324 |</p>
<p className="my-3 leading-relaxed">| 120 | $326 | $324 | $1 | $0 |</p>

<h3 className="text-xl font-bold mt-6 mb-3">Repayment Plan Comparison</h3>

<p className="my-3 leading-relaxed">| Plan Type | Monthly Payment | Total Interest | Total Amount | Time to Payoff |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| Standard | $326 | $9,069 | $39,069 | 10 years |</p>
<p className="my-3 leading-relaxed">| Extended | $184 | $25,268 | $55,268 | 25 years |</p>
<p className="my-3 leading-relaxed">| Graduated | $163 | $9,069 | $39,069 | 10 years |</p>
<p className="my-3 leading-relaxed">| Income-Driven | $326 | $9,069 | $39,069 | 20 years |</p>

<h3 className="text-xl font-bold mt-6 mb-3">Interest Savings Analysis</h3>

<p className="my-3 leading-relaxed">Calculate potential savings by making extra payments or choosing different repayment plans.</p>



<p className="my-3 leading-relaxed">---</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Key Financial Terms</h2>

<p className="my-3 leading-relaxed">* <strong>Amortization:</strong> The schedule of your loan payments, showing the breakdown of how much of each payment goes toward reducing your principal balance and how much is paid in interest.</p>
<p className="my-3 leading-relaxed">* <strong>Interest:</strong> The fee charged by a lender for the use of borrowed money, expressed as an annual percentage rate (APR).</p>
<p className="my-3 leading-relaxed">* <strong>Loan Term:</strong> The length of time scheduled for repaying a loan. A shorter term means higher monthly payments but less total interest, while a longer term means lower monthly payments but more total interest.</p>
<p className="my-3 leading-relaxed">* <strong>Principal:</strong> The original amount of money borrowed, not including any interest charges. Each payment you make reduces your principal balance.</p>

<p className="my-3 leading-relaxed">---</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Student Loan Scenario</h2>

<p className="my-3 leading-relaxed">Maria has just been accepted to ABC University. After scholarships and family contributions, she estimates she will need to borrow a total of <strong>$35,000</strong> in federal student loans to cover all four years of her degree.</p>

<p className="my-3 leading-relaxed">Fast forward four years. Maria has graduated and landed her first job with a starting salary of <strong>$55,000 per year</strong>. Her loan repayment is about to begin.</p>

<strong>Your Task:</strong>  
<p className="my-3 leading-relaxed">Enter Maria’s initial loan details into the calculator to serve as your starting point for all the questions below.</p>

<p className="my-3 leading-relaxed">* <strong>Loan Amount:</strong> <code className="bg-gray-100 px-2 py-1 rounded">$35,000</code></p>
<p className="my-3 leading-relaxed">* <strong>Annual Interest Rate:</strong> <code className="bg-gray-100 px-2 py-1 rounded">5.8%</code></p>
<p className="my-3 leading-relaxed">* <strong>Loan Term:</strong> <code className="bg-gray-100 px-2 py-1 rounded">10 years</code></p>
<p className="my-3 leading-relaxed">* <strong>Repayment Plan:</strong> <code className="bg-gray-100 px-2 py-1 rounded">Standard Repayment</code></p>

<p className="my-3 leading-relaxed">Click <strong>“Calculate Payment”</strong> to see her baseline situation before you begin the questions.</p>

<strong>Based on Maria's initial baseline using the Standard Repayment plan, what is her required Monthly Payment and the Total Interest she will pay over the 10-year term?</strong>

<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">|  | $385 per month and $11,208 in total interest. |</p>
<p className="my-3 leading-relaxed">|  | $385 per month and $46,208 in total interest. |</p>
<p className="my-3 leading-relaxed">|  | $221 per month and $31,374 in total interest. |</p>
<p className="my-3 leading-relaxed">|  | $193 per month and $11,208 in total interest. |</p>

<strong>Maria is worried the monthly payment is too high. How much more in total interest will she pay if she chooses the "Extended Repayment" plan to get the lowest possible monthly payment?</strong>

<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">|  | $164 |</p>
<p className="my-3 leading-relaxed">|  | $20,166 |</p>
<p className="my-3 leading-relaxed">|  | $31,374 |</p>
<p className="my-3 leading-relaxed">|  | $66,374 |</p>

<strong>Switch to the "Amortization Schedule" tab for the initial Standard Plan. Look at how the payments are broken down over time. Which of the following statements is true?</strong>

<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">|  | The total 'Payment' amount changes slightly each month. |</p>
<p className="my-3 leading-relaxed">|  | In the last month, more of your payment goes toward interest than principal. |</p>
<p className="my-3 leading-relaxed">|  | The amount of principal paid with each payment gradually increases over time. |</p>
<p className="my-3 leading-relaxed">|  | The amount of interest paid with each payment stays the same every month. |</p>

<strong>Going back to the baseline scenario, but now Maria will add an additional $100 per month. Use the "Interest Savings" tab to determine what the impact is by making these extra payments?</strong>

<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">|  | Her new monthly payment is now $100. |</p>
<p className="my-3 leading-relaxed">|  | She pays the loan off in 2 years and 7 months. |</p>
<p className="my-3 leading-relaxed">|  | Her total repayment amount is reduced by $43,144. |</p>
<p className="my-3 leading-relaxed">|  | She saves approximately $3,000 in interest and pays the loan off about 2.5 years earlier. |</p>

<strong>Based on the "Repayment Plan Comparison" table, which statement accurately describes the trade-offs between the different repayment plans?</strong>

<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">|  | The "Extended" plan provides the most monthly cash-flow relief but is by far the most expensive option long-term. |</p>
<p className="my-3 leading-relaxed">|  | The "Standard" plan is the most expensive plan overall because it has the highest monthly payment. |</p>
<p className="my-3 leading-relaxed">|  | The "Graduated" plan saves the most money on interest because it has the lowest starting monthly payment. |</p>
<p className="my-3 leading-relaxed">|  | The "Income-Driven" plan is the fastest way to pay off the loan while keeping payments low. |</p>

<p className="my-3 leading-relaxed">Submit</p>
<p className="my-3 leading-relaxed">Please complete all the questions</p>


<p className="my-3 leading-relaxed">---</p>
<h2 className="text-2xl font-bold mt-8 mb-4">Transcript (best effort)</h2>

<p className="my-3 leading-relaxed">Student Loan Repayment Calculator</p>
<p className="my-3 leading-relaxed">Figuring out how to pay back student loans can feel overwhelming. The plan you choose affects your monthly budget, the total interest you’ll pay, and how long you’ll be in debt. This calculator is designed to make that choice clearer. It lets you explore different repayment strategies to find the one that best fits your financial future, and even shows you how making extra payments can help you become debt-free faster.</p>
<p className="my-3 leading-relaxed">How to Use the Calculator</p>
<p className="my-3 leading-relaxed">Enter your</p>
<p className="my-3 leading-relaxed">Loan Details</p>
<p className="my-3 leading-relaxed">(amount, interest rate, and a standard 10-year term to start).</p>
<p className="my-3 leading-relaxed">Select a</p>
<p className="my-3 leading-relaxed">Repayment Plan</p>
<p className="my-3 leading-relaxed">from the dropdown menu. If you choose “Income-Driven,” enter your estimated annual income.</p>
<p className="my-3 leading-relaxed">Click</p>
<p className="my-3 leading-relaxed">“Calculate Payment”</p>
<p className="my-3 leading-relaxed">to see your results in the “Payment Summary” section.</p>
<p className="my-3 leading-relaxed">Explore the tabs below to view the</p>
<p className="my-3 leading-relaxed">Amortization Schedule</p>
<p className="my-3 leading-relaxed">, compare all plans in a single table, and use the</p>
<p className="my-3 leading-relaxed">“Extra Payment Calculator”</p>
<p className="my-3 leading-relaxed">to see how you can save on interest.</p>
<p className="my-3 leading-relaxed">Understanding Your Repayment Plan Options</p>
<p className="my-3 leading-relaxed">Choosing a repayment plan is a trade-off between your monthly payment and the total interest you’ll pay. Here’s a quick guide:</p>
<p className="my-3 leading-relaxed">Standard Repayment</p>
<p className="my-3 leading-relaxed">The default repayment plan for federal student loans, with fixed monthly payments over a 10-year term. This plan results in the lowest total interest paid compared to other plans.</p>
<p className="my-3 leading-relaxed">✅ Pros</p>
<p className="my-3 leading-relaxed">Pays the loan off the fastest.</p>
<p className="my-3 leading-relaxed">You pay the least amount of total interest.</p>
<p className="my-3 leading-relaxed">Simple, consistent, and easy to budget for.</p>
<p className="my-3 leading-relaxed">❌ Cons</p>
<p className="my-3 leading-relaxed">Has the highest monthly payments</p>
<p className="my-3 leading-relaxed">Can be difficult to afford on an entry-level salary.</p>
<p className="my-3 leading-relaxed">Extended Repayment</p>
<p className="my-3 leading-relaxed">A plan that allows you to repay your loans over a longer period, typically up to 25 years. This lowers your monthly payment but significantly increases the total interest you will pay.</p>
<p className="my-3 leading-relaxed">✅ Pros</p>
<p className="my-3 leading-relaxed">Offers a much lower, more manageable monthly payment.</p>
<p className="my-3 leading-relaxed">More manageable for a tight budget.</p>
<p className="my-3 leading-relaxed">Frees up monthly cash flow for other goals.</p>
<p className="my-3 leading-relaxed">❌ Cons</p>
<p className="my-3 leading-relaxed">You will pay</p>
<p className="my-3 leading-relaxed">significantly more</p>
<p className="my-3 leading-relaxed">in total interest over the life of the loan.</p>
<p className="my-3 leading-relaxed">You will be in debt for a much longer time.</p>
<p className="my-3 leading-relaxed">Graduated Repayment</p>
<p className="my-3 leading-relaxed">A plan where payments start low and increase every two years. It’s designed for borrowers who expect their income to rise over time, but it can lead to paying more interest than a Standard plan.</p>
<p className="my-3 leading-relaxed">✅ Pros</p>
<p className="my-3 leading-relaxed">Low initial payments are easier for new graduates.</p>
<p className="my-3 leading-relaxed">Payments rise to match your expected career growth.</p>
<p className="my-3 leading-relaxed">❌ Cons</p>
<p className="my-3 leading-relaxed">You will pay more in total interest than the Standard Plan.</p>
<p className="my-3 leading-relaxed">Later payments can become very high and may be a shock to your budget.</p>
<p className="my-3 leading-relaxed">In the early years, your low payments may not even cover the accruing interest, causing your loan balance to temporarily increase.</p>
<p className="my-3 leading-relaxed">Income-Driven Repayment (IDR)</p>
<p className="my-3 leading-relaxed">A repayment plan where your monthly payment is calculated as a percentage of your discretionary income. It keeps payments affordable but often extends the loan term and can increase the total interest paid.</p>
<p className="my-3 leading-relaxed">✅ Pros</p>
<p className="my-3 leading-relaxed">Monthly payments can be very low (even $0) if your income is low.</p>
<p className="my-3 leading-relaxed">Provides a safety net against job loss or low wages.</p>
<p className="my-3 leading-relaxed">Offers the possibility of loan forgiveness after 20-25 years.</p>
<p className="my-3 leading-relaxed">❌ Cons</p>
<p className="my-3 leading-relaxed">You will almost certainly pay much more in total interest.</p>
<p className="my-3 leading-relaxed">Your loan balance can grow if payments don’t cover interest.</p>
<p className="my-3 leading-relaxed">The forgiven loan amount may be considered taxable income.</p>
<p className="my-3 leading-relaxed">Calculation completed successfully!</p>
<p className="my-3 leading-relaxed">Loan Details</p>
<p className="my-3 leading-relaxed">Loan Amount ($)</p>
<p className="my-3 leading-relaxed">The total principal amount you borrowed for school. This is the starting balance for your loan.</p>
<p className="my-3 leading-relaxed">Annual Interest Rate (%)</p>
<p className="my-3 leading-relaxed">The percentage of your loan balance you are charged each year for borrowing. A higher rate means a more expensive loan.</p>
<p className="my-3 leading-relaxed">Loan Term (Years)</p>
<p className="my-3 leading-relaxed">The number of years you have to pay back your loan. A shorter term saves you money on interest but means higher monthly payments.</p>
<p className="my-3 leading-relaxed">Repayment Plan</p>
<p className="my-3 leading-relaxed">The strategy for repaying your loan. Each plan balances the size of your monthly payment against the total interest you'll pay over time.</p>
<p className="my-3 leading-relaxed">Standard Repayment</p>
<p className="my-3 leading-relaxed">Extended Repayment</p>
<p className="my-3 leading-relaxed">Graduated Repayment</p>
<p className="my-3 leading-relaxed">Income-Driven (Estimate)</p>
<p className="my-3 leading-relaxed">Annual Income ($)</p>
<p className="my-3 leading-relaxed">Calculate Payment</p>
<p className="my-3 leading-relaxed">Extra Payment Calculator</p>
<p className="my-3 leading-relaxed">Additional Monthly Payment ($)</p>
<p className="my-3 leading-relaxed">Calculate Savings</p>
<p className="my-3 leading-relaxed">Payment Summary</p>
<p className="my-3 leading-relaxed">Monthly Payment</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">Total Interest</p>
<p className="my-3 leading-relaxed">$9,069</p>
<p className="my-3 leading-relaxed">Total Amount</p>
<p className="my-3 leading-relaxed">$39,069</p>
<p className="my-3 leading-relaxed">Payoff Date</p>
<p className="my-3 leading-relaxed">March 2036</p>
<p className="my-3 leading-relaxed">Amortization Schedule</p>
<p className="my-3 leading-relaxed">A detailed table that breaks down each loan payment, showing how much goes to interest and how much goes to reducing your actual loan balance (principal).</p>
<p className="my-3 leading-relaxed">Plan Comparison</p>
<p className="my-3 leading-relaxed">Interest Savings</p>
<p className="my-3 leading-relaxed">Amortization Schedule</p>
<p className="my-3 leading-relaxed">Month</p>
<p className="my-3 leading-relaxed">Payment</p>
<p className="my-3 leading-relaxed">Principal</p>
<p className="my-3 leading-relaxed">The original amount of money you borrowed for your student loans.</p>
<p className="my-3 leading-relaxed">Interest</p>
<p className="my-3 leading-relaxed">The cost of borrowing money. You pay interest on top of the principal.</p>
<p className="my-3 leading-relaxed">Balance</p>
<p className="my-3 leading-relaxed">The total amount of your original loan that you still owe. The 'principal' portion of each payment directly reduces this balance.</p>
<p className="my-3 leading-relaxed">1</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$188</p>
<p className="my-3 leading-relaxed">$138</p>
<p className="my-3 leading-relaxed">$29,812</p>
<p className="my-3 leading-relaxed">2</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$189</p>
<p className="my-3 leading-relaxed">$137</p>
<p className="my-3 leading-relaxed">$29,623</p>
<p className="my-3 leading-relaxed">3</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$190</p>
<p className="my-3 leading-relaxed">$136</p>
<p className="my-3 leading-relaxed">$29,433</p>
<p className="my-3 leading-relaxed">4</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$191</p>
<p className="my-3 leading-relaxed">$135</p>
<p className="my-3 leading-relaxed">$29,242</p>
<p className="my-3 leading-relaxed">5</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$192</p>
<p className="my-3 leading-relaxed">$134</p>
<p className="my-3 leading-relaxed">$29,051</p>
<p className="my-3 leading-relaxed">6</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$192</p>
<p className="my-3 leading-relaxed">$133</p>
<p className="my-3 leading-relaxed">$28,859</p>
<p className="my-3 leading-relaxed">7</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$193</p>
<p className="my-3 leading-relaxed">$132</p>
<p className="my-3 leading-relaxed">$28,665</p>
<p className="my-3 leading-relaxed">8</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$194</p>
<p className="my-3 leading-relaxed">$131</p>
<p className="my-3 leading-relaxed">$28,471</p>
<p className="my-3 leading-relaxed">9</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$195</p>
<p className="my-3 leading-relaxed">$130</p>
<p className="my-3 leading-relaxed">$28,276</p>
<p className="my-3 leading-relaxed">10</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$196</p>
<p className="my-3 leading-relaxed">$130</p>
<p className="my-3 leading-relaxed">$28,080</p>
<p className="my-3 leading-relaxed">11</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$197</p>
<p className="my-3 leading-relaxed">$129</p>
<p className="my-3 leading-relaxed">$27,883</p>
<p className="my-3 leading-relaxed">12</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$198</p>
<p className="my-3 leading-relaxed">$128</p>
<p className="my-3 leading-relaxed">$27,685</p>
<p className="my-3 leading-relaxed">13</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$199</p>
<p className="my-3 leading-relaxed">$127</p>
<p className="my-3 leading-relaxed">$27,487</p>
<p className="my-3 leading-relaxed">14</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$200</p>
<p className="my-3 leading-relaxed">$126</p>
<p className="my-3 leading-relaxed">$27,287</p>
<p className="my-3 leading-relaxed">15</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$201</p>
<p className="my-3 leading-relaxed">$125</p>
<p className="my-3 leading-relaxed">$27,086</p>
<p className="my-3 leading-relaxed">16</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$201</p>
<p className="my-3 leading-relaxed">$124</p>
<p className="my-3 leading-relaxed">$26,885</p>
<p className="my-3 leading-relaxed">17</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$202</p>
<p className="my-3 leading-relaxed">$123</p>
<p className="my-3 leading-relaxed">$26,683</p>
<p className="my-3 leading-relaxed">18</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$203</p>
<p className="my-3 leading-relaxed">$122</p>
<p className="my-3 leading-relaxed">$26,479</p>
<p className="my-3 leading-relaxed">19</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$204</p>
<p className="my-3 leading-relaxed">$121</p>
<p className="my-3 leading-relaxed">$26,275</p>
<p className="my-3 leading-relaxed">20</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$205</p>
<p className="my-3 leading-relaxed">$120</p>
<p className="my-3 leading-relaxed">$26,070</p>
<p className="my-3 leading-relaxed">21</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$206</p>
<p className="my-3 leading-relaxed">$119</p>
<p className="my-3 leading-relaxed">$25,864</p>
<p className="my-3 leading-relaxed">22</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$207</p>
<p className="my-3 leading-relaxed">$119</p>
<p className="my-3 leading-relaxed">$25,657</p>
<p className="my-3 leading-relaxed">23</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$208</p>
<p className="my-3 leading-relaxed">$118</p>
<p className="my-3 leading-relaxed">$25,449</p>
<p className="my-3 leading-relaxed">24</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$209</p>
<p className="my-3 leading-relaxed">$117</p>
<p className="my-3 leading-relaxed">$25,240</p>
<p className="my-3 leading-relaxed">25</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$210</p>
<p className="my-3 leading-relaxed">$116</p>
<p className="my-3 leading-relaxed">$25,030</p>
<p className="my-3 leading-relaxed">26</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$211</p>
<p className="my-3 leading-relaxed">$115</p>
<p className="my-3 leading-relaxed">$24,819</p>
<p className="my-3 leading-relaxed">27</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$212</p>
<p className="my-3 leading-relaxed">$114</p>
<p className="my-3 leading-relaxed">$24,607</p>
<p className="my-3 leading-relaxed">28</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$213</p>
<p className="my-3 leading-relaxed">$113</p>
<p className="my-3 leading-relaxed">$24,395</p>
<p className="my-3 leading-relaxed">29</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$214</p>
<p className="my-3 leading-relaxed">$112</p>
<p className="my-3 leading-relaxed">$24,181</p>
<p className="my-3 leading-relaxed">30</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$215</p>
<p className="my-3 leading-relaxed">$111</p>
<p className="my-3 leading-relaxed">$23,966</p>
<p className="my-3 leading-relaxed">31</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$216</p>
<p className="my-3 leading-relaxed">$110</p>
<p className="my-3 leading-relaxed">$23,750</p>
<p className="my-3 leading-relaxed">32</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$217</p>
<p className="my-3 leading-relaxed">$109</p>
<p className="my-3 leading-relaxed">$23,534</p>
<p className="my-3 leading-relaxed">33</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$218</p>
<p className="my-3 leading-relaxed">$108</p>
<p className="my-3 leading-relaxed">$23,316</p>
<p className="my-3 leading-relaxed">34</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$219</p>
<p className="my-3 leading-relaxed">$107</p>
<p className="my-3 leading-relaxed">$23,097</p>
<p className="my-3 leading-relaxed">35</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$220</p>
<p className="my-3 leading-relaxed">$106</p>
<p className="my-3 leading-relaxed">$22,877</p>
<p className="my-3 leading-relaxed">36</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$221</p>
<p className="my-3 leading-relaxed">$105</p>
<p className="my-3 leading-relaxed">$22,657</p>
<p className="my-3 leading-relaxed">37</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$222</p>
<p className="my-3 leading-relaxed">$104</p>
<p className="my-3 leading-relaxed">$22,435</p>
<p className="my-3 leading-relaxed">38</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$223</p>
<p className="my-3 leading-relaxed">$103</p>
<p className="my-3 leading-relaxed">$22,212</p>
<p className="my-3 leading-relaxed">39</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$224</p>
<p className="my-3 leading-relaxed">$102</p>
<p className="my-3 leading-relaxed">$21,989</p>
<p className="my-3 leading-relaxed">40</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$225</p>
<p className="my-3 leading-relaxed">$101</p>
<p className="my-3 leading-relaxed">$21,764</p>
<p className="my-3 leading-relaxed">41</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$226</p>
<p className="my-3 leading-relaxed">$100</p>
<p className="my-3 leading-relaxed">$21,538</p>
<p className="my-3 leading-relaxed">42</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$227</p>
<p className="my-3 leading-relaxed">$99</p>
<p className="my-3 leading-relaxed">$21,311</p>
<p className="my-3 leading-relaxed">43</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$228</p>
<p className="my-3 leading-relaxed">$98</p>
<p className="my-3 leading-relaxed">$21,083</p>
<p className="my-3 leading-relaxed">44</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$229</p>
<p className="my-3 leading-relaxed">$97</p>
<p className="my-3 leading-relaxed">$20,854</p>
<p className="my-3 leading-relaxed">45</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$230</p>
<p className="my-3 leading-relaxed">$96</p>
<p className="my-3 leading-relaxed">$20,624</p>
<p className="my-3 leading-relaxed">46</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$231</p>
<p className="my-3 leading-relaxed">$95</p>
<p className="my-3 leading-relaxed">$20,393</p>
<p className="my-3 leading-relaxed">47</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$232</p>
<p className="my-3 leading-relaxed">$93</p>
<p className="my-3 leading-relaxed">$20,161</p>
<p className="my-3 leading-relaxed">48</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$233</p>
<p className="my-3 leading-relaxed">$92</p>
<p className="my-3 leading-relaxed">$19,928</p>
<p className="my-3 leading-relaxed">49</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$234</p>
<p className="my-3 leading-relaxed">$91</p>
<p className="my-3 leading-relaxed">$19,694</p>
<p className="my-3 leading-relaxed">50</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$235</p>
<p className="my-3 leading-relaxed">$90</p>
<p className="my-3 leading-relaxed">$19,458</p>
<p className="my-3 leading-relaxed">51</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$236</p>
<p className="my-3 leading-relaxed">$89</p>
<p className="my-3 leading-relaxed">$19,222</p>
<p className="my-3 leading-relaxed">52</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$237</p>
<p className="my-3 leading-relaxed">$88</p>
<p className="my-3 leading-relaxed">$18,984</p>
<p className="my-3 leading-relaxed">53</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$239</p>
<p className="my-3 leading-relaxed">$87</p>
<p className="my-3 leading-relaxed">$18,746</p>
<p className="my-3 leading-relaxed">54</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$240</p>
<p className="my-3 leading-relaxed">$86</p>
<p className="my-3 leading-relaxed">$18,506</p>
<p className="my-3 leading-relaxed">55</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$241</p>
<p className="my-3 leading-relaxed">$85</p>
<p className="my-3 leading-relaxed">$18,265</p>
<p className="my-3 leading-relaxed">56</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$242</p>
<p className="my-3 leading-relaxed">$84</p>
<p className="my-3 leading-relaxed">$18,024</p>
<p className="my-3 leading-relaxed">57</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$243</p>
<p className="my-3 leading-relaxed">$83</p>
<p className="my-3 leading-relaxed">$17,781</p>
<p className="my-3 leading-relaxed">58</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$244</p>
<p className="my-3 leading-relaxed">$81</p>
<p className="my-3 leading-relaxed">$17,537</p>
<p className="my-3 leading-relaxed">59</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$245</p>
<p className="my-3 leading-relaxed">$80</p>
<p className="my-3 leading-relaxed">$17,291</p>
<p className="my-3 leading-relaxed">60</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$246</p>
<p className="my-3 leading-relaxed">$79</p>
<p className="my-3 leading-relaxed">$17,045</p>
<p className="my-3 leading-relaxed">...</p>
<p className="my-3 leading-relaxed">109</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$308</p>
<p className="my-3 leading-relaxed">$17</p>
<p className="my-3 leading-relaxed">$3,485</p>
<p className="my-3 leading-relaxed">110</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$310</p>
<p className="my-3 leading-relaxed">$16</p>
<p className="my-3 leading-relaxed">$3,175</p>
<p className="my-3 leading-relaxed">111</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$311</p>
<p className="my-3 leading-relaxed">$15</p>
<p className="my-3 leading-relaxed">$2,864</p>
<p className="my-3 leading-relaxed">112</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$312</p>
<p className="my-3 leading-relaxed">$13</p>
<p className="my-3 leading-relaxed">$2,552</p>
<p className="my-3 leading-relaxed">113</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$314</p>
<p className="my-3 leading-relaxed">$12</p>
<p className="my-3 leading-relaxed">$2,238</p>
<p className="my-3 leading-relaxed">114</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$315</p>
<p className="my-3 leading-relaxed">$10</p>
<p className="my-3 leading-relaxed">$1,923</p>
<p className="my-3 leading-relaxed">115</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$317</p>
<p className="my-3 leading-relaxed">$9</p>
<p className="my-3 leading-relaxed">$1,606</p>
<p className="my-3 leading-relaxed">116</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$318</p>
<p className="my-3 leading-relaxed">$7</p>
<p className="my-3 leading-relaxed">$1,288</p>
<p className="my-3 leading-relaxed">117</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$320</p>
<p className="my-3 leading-relaxed">$6</p>
<p className="my-3 leading-relaxed">$968</p>
<p className="my-3 leading-relaxed">118</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$321</p>
<p className="my-3 leading-relaxed">$4</p>
<p className="my-3 leading-relaxed">$647</p>
<p className="my-3 leading-relaxed">119</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$323</p>
<p className="my-3 leading-relaxed">$3</p>
<p className="my-3 leading-relaxed">$324</p>
<p className="my-3 leading-relaxed">120</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$324</p>
<p className="my-3 leading-relaxed">$1</p>
<p className="my-3 leading-relaxed">$0</p>
<p className="my-3 leading-relaxed">Repayment Plan Comparison</p>
<p className="my-3 leading-relaxed">Plan Type</p>
<p className="my-3 leading-relaxed">Monthly Payment</p>
<p className="my-3 leading-relaxed">Total Interest</p>
<p className="my-3 leading-relaxed">Total Amount</p>
<p className="my-3 leading-relaxed">Time to Payoff</p>
<p className="my-3 leading-relaxed">Standard</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$9,069</p>
<p className="my-3 leading-relaxed">$39,069</p>
<p className="my-3 leading-relaxed">10 years</p>
<p className="my-3 leading-relaxed">Extended</p>
<p className="my-3 leading-relaxed">$184</p>
<p className="my-3 leading-relaxed">$25,268</p>
<p className="my-3 leading-relaxed">$55,268</p>
<p className="my-3 leading-relaxed">25 years</p>
<p className="my-3 leading-relaxed">Graduated</p>
<p className="my-3 leading-relaxed">$163</p>
<p className="my-3 leading-relaxed">$9,069</p>
<p className="my-3 leading-relaxed">$39,069</p>
<p className="my-3 leading-relaxed">10 years</p>
<p className="my-3 leading-relaxed">Income-Driven</p>
<p className="my-3 leading-relaxed">$326</p>
<p className="my-3 leading-relaxed">$9,069</p>
<p className="my-3 leading-relaxed">$39,069</p>
<p className="my-3 leading-relaxed">20 years</p>
<p className="my-3 leading-relaxed">Interest Savings Analysis</p>
<p className="my-3 leading-relaxed">Calculate potential savings by making extra payments or choosing different repayment plans.</p>
<p className="my-3 leading-relaxed">Key Financial Terms</p>
<p className="my-3 leading-relaxed">Amortization:</p>
<p className="my-3 leading-relaxed">The schedule of your loan payments, showing the breakdown of how much of each payment goes toward reducing your principal balance and how much is paid in interest.</p>
<p className="my-3 leading-relaxed">Interest:</p>
<p className="my-3 leading-relaxed">The fee charged by a lender for the use of borrowed money, expressed as an annual percentage rate (APR).</p>
<p className="my-3 leading-relaxed">Loan Term:</p>
<p className="my-3 leading-relaxed">The length of time scheduled for repaying a loan. A shorter term means higher monthly payments but less total interest, while a longer term means lower monthly payments but more total interest.</p>
<p className="my-3 leading-relaxed">Principal:</p>
<p className="my-3 leading-relaxed">The original amount of money borrowed, not including any interest charges. Each payment you make reduces your principal balance.</p>
<p className="my-3 leading-relaxed">Student Loan Scenario</p>
<p className="my-3 leading-relaxed">Maria has just been accepted to ABC University. After scholarships and family contributions, she estimates she will need to borrow a total of</p>
<p className="my-3 leading-relaxed">$35,000</p>
<p className="my-3 leading-relaxed">in federal student loans to cover all four years of her degree.</p>
<p className="my-3 leading-relaxed">Fast forward four years. Maria has graduated and landed her first job with a starting salary of</p>
<p className="my-3 leading-relaxed">$55,000 per year</p>
<p className="my-3 leading-relaxed">. Her loan repayment is about to begin.</p>
<p className="my-3 leading-relaxed">Your Task:</p>
<p className="my-3 leading-relaxed">Enter Maria’s initial loan details into the calculator to serve as your starting point for all the questions below.</p>
<p className="my-3 leading-relaxed">Loan Amount:</p>
<p className="my-3 leading-relaxed">$35,000</p>
<p className="my-3 leading-relaxed">Annual Interest Rate:</p>
<p className="my-3 leading-relaxed">5.8%</p>
<p className="my-3 leading-relaxed">Loan Term:</p>
<p className="my-3 leading-relaxed">10 years</p>
<p className="my-3 leading-relaxed">Repayment Plan:</p>
<p className="my-3 leading-relaxed">Standard Repayment</p>
<p className="my-3 leading-relaxed">Click</p>
<p className="my-3 leading-relaxed">“Calculate Payment”</p>
<p className="my-3 leading-relaxed">to see her baseline situation before you begin the questions.</p>
      
    </article>
  );
}
