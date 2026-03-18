'use client';


export default function CashFlowAnalysis() {
  

  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-4">Cash Flow Analysis</h1>

<p className="my-3 leading-relaxed">Cash flow is a concept in accounting that refers to the spending or receiving of cash by an organization. For a given period, cash flow is calculated by ending cash balance less starting cash balance. It is important not to confuse cash flow with earnings, as cash flow is related to solvency (or how well a business can pay its immediate debts) and not necessarily profitability. For example, a firm may have millions in revenue, but if accounts receivable are not collected, it is not realized as a cash inflow. Good management and financial modeling are crucial to a firm having healthy cash flows and remaining solvent.</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Cash Flow in Financial Statements</h2>

<p className="my-3 leading-relaxed">There are different types of cash flow concepts, used for different purposes. Cash flow items are laid out in the Income Statement and Cash Flow Statements.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Income Statement</h3>

<p className="my-3 leading-relaxed">![](/images/b144124957a6f8c5.png)</p>

<p className="my-3 leading-relaxed">In an income statement, <strong>Operating Cash Flow (OCF)</strong> is similar to <strong>Earnings Before Interest and Taxes (EBIT).</strong> Both show how much cash a business can generate from normal operations. It excludes other major items in an income statement that impact net income (interest and taxes). These items are excluded because they are not operational expenses.</p>

<p className="my-3 leading-relaxed">OCF provides perspective when analyzing a business by stripping away non-operational activities. By only incorporating costs closely associated with the selling of product or services, such as inventory expense, manufacturing expense, or selling expense one can evaluate how potentially profitable a business can be. For example, if the firm has a huge debt load, it may be wiser to focus on something like OCF to determine future profitability instead of looking at current net income. The limitations of OCF is that the number does include non-cash items such as accounts receivable and deprecation.</p>

<p className="my-3 leading-relaxed">|  |</p>
<p className="my-3 leading-relaxed">| --- |</p>
<p className="my-3 leading-relaxed">| Sample Income Statement |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| <strong>Revenue</strong> | 100,000 |</p>
<p className="my-3 leading-relaxed">| Cost of Goods Sold | 25,000 |</p>
<p className="my-3 leading-relaxed">| Gross Profit | 75,000 |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| <strong>Operating Expenses</strong> |  |</p>
<p className="my-3 leading-relaxed">| Advertising | 8,000 |</p>
<p className="my-3 leading-relaxed">| Administrative | 10,000 |</p>
<p className="my-3 leading-relaxed">| Commissions | 10,000 |</p>
<p className="my-3 leading-relaxed">| Rent | 15,000 |</p>
<p className="my-3 leading-relaxed">| Utilities | 5,000 |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| <strong>Operating Cash Flow</strong> | 27,000 |</p>

<h3 className="text-xl font-bold mt-6 mb-3">Cash Flow Statement</h3>

<p className="my-3 leading-relaxed">The Cash Flow Statement digs deeper into incoming and outgoing cash, and when used with the income statement and balance sheet gives a more complete picture of a company.</p>

<p className="my-3 leading-relaxed">There are three main elements to this statement: cash flow from <strong>operations</strong>, from <strong>investing</strong> and from <strong>financing</strong>.</p>

<p className="my-3 leading-relaxed">This statement begins with the last item from the income statement, net income. Each line adds back or subtracts the change in non-cash items that impacted net income. The rule for non-cash items on the income statement is: add if initially subtracted, and subtract if initially added.</p>

<p className="my-3 leading-relaxed">For example, in the cash flow from operations portion, if the change in accounts receivable (ending AR – beginning AR) is positive, it means that net income was positively impacted, but no cash was received. Thus, you subtract the increase. Likewise, if accounts payable increase in the reporting period, you add the increase to net income because it positively impacted cash. Think of the Cash Flow Statement as a mirror of the income statement – including only non-cash items.</p>

<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- |</p>
<p className="my-3 leading-relaxed">| Sample Statement of Cash Flows |  |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| Net Income | 10,000 |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| <strong>Cash Flow from Operating Activities</strong> |  |</p>
<p className="my-3 leading-relaxed">| Add: depreciation expense | 3000 |</p>
<p className="my-3 leading-relaxed">| Increase in accounts receivable | -400 |</p>
<p className="my-3 leading-relaxed">| Increase in inventory | 2000 |</p>
<p className="my-3 leading-relaxed">| Increase in accounts payable | 350 |</p>
<p className="my-3 leading-relaxed">| Cash used in operating activities | 4,950 |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| <strong>Cash Flow from Investing Activities</strong> |  |</p>
<p className="my-3 leading-relaxed">| Capital expenditures | -10,000 |</p>
<p className="my-3 leading-relaxed">| Cash used in investing activities | -10,000 |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| <strong>Cash Flow from Financing Activities</strong> |  |</p>
<p className="my-3 leading-relaxed">| Borrowing of short-term debt | 2500 |</p>
<p className="my-3 leading-relaxed">| Dividends | -450 |</p>
<p className="my-3 leading-relaxed">| Cash used in financing activities | 2050 |</p>
<p className="my-3 leading-relaxed">|  |  |</p>
<p className="my-3 leading-relaxed">| Net change in cash | 7,000 |</p>
<p className="my-3 leading-relaxed">| Beginning cash | 2,000 |</p>
<p className="my-3 leading-relaxed">| <strong>Ending cash</strong> | <strong>9,000</strong> |</p>

<p className="my-3 leading-relaxed">In this sample, we can see that the firm reports a net income of 10,000 but only receives 7,000 in cash for the period. This is why a single financial statement cannot capture the activities or status of a firm. If the case were such that net income was healthy but cash flows were negative, before looking at cash flow from financing (the firm is borrowing to stay solvent), that could potentially raise some red flags or call for a decrease in value due to increased risk.</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Cash Flow and Valuation</h2>

<strong>Free Cash Flow (FCF)</strong> is another important metric, and better yet for determining the value of a firm based on cash flow. FCF is calculated by taking EBIT and subtracting taxes. After that, subtract capital expenditures, add back depreciation (a non-cash item subtracted while getting EBIT), and then lastly add or subtract the change in working capital.

<p className="my-3 leading-relaxed">|  |</p>
<p className="my-3 leading-relaxed">| --- |</p>
<p className="my-3 leading-relaxed">| <strong>EBIT</strong> |</p>
<p className="my-3 leading-relaxed">| Less: Taxes |</p>
<p className="my-3 leading-relaxed">| Less: Capital Expenditures |</p>
<p className="my-3 leading-relaxed">| Plus: Depreciation |</p>
<p className="my-3 leading-relaxed">| +/- Change in Net Working Capital |</p>
<p className="my-3 leading-relaxed">| <strong>Free Cash Flow</strong> |</p>

<p className="my-3 leading-relaxed">Free cash flow is useful because it is the amount of cash that a firm can use to pay dividends, reduce debt, reinvest, or use for acquisitions. In other words, this number shows a more fundamental earning potential for a firm. Unlike net income, free cash flow is not skewed by tax deferments, adjustments or other uncertain factors, such as risk of collecting receivables. Free cash flow is often used in a discounted cash flow analysis to find the net present value of all cash flows which theoretically represents enterprise value (Equity + debt – cash), helping determine the value of equity.</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Cash Flow and Decision Making</h2>

<p className="my-3 leading-relaxed">Cash flow is extensively used in financial decision making. To see how, start by looking at Terminal Value, Net Present Value, Internal Rate of Return, and Payback.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Terminal Value</h3>

<strong>Terminal value</strong> is the present value of all future cash flows beyond the projection period. It can be calculated with the simple Gordon Growth Model:

<p className="my-3 leading-relaxed">CF0= CF1 / (r – g)</p>

<p className="my-3 leading-relaxed">Where <strong>r</strong> is the discount rate, g is the growth rate and <strong>CF1= CF0 \* (1 + g)</strong>. In other words, multiply the last cash flow by (1 + g), and then divide it by the discount rate less the growth rate. This is just like the present value of a perpetuity.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Net Present Value</h3>

<strong>Net present value (NPV)</strong> is a crucial concept in finance. To calculate NPV, you simply sum the present value of all positive and negative cash flows for a given investment. If NPV is positive, that means that an investment is worthwhile, and if it is negative, it is not worthwhile. The NPV incorporates the appropriate discount rate to determine if returns are high enough.

<h3 className="text-xl font-bold mt-6 mb-3">Internal Rate of Return</h3>

<strong>Internal rate of return (IRR)</strong> is a metric closely related to NPV and the discount rate. Internal rate of return is defined as the discount rate required to make NPV equal to 0. For example, in this project if IRR were 10% due to lower cash flows, the NPV would equal 0. IRR must be calculated by trial and error, or with a software program like excel. All else being equal, you want to choose to invest in higher IRR projects, but if deciding between a 20% IRR and 10% IRR project, the 10% one may have a higher NPV due to greater scale, thus being the better investment choice.

<h3 className="text-xl font-bold mt-6 mb-3">Payback</h3>

<strong>Payback</strong> is the simplest metric and is expressed as the number of years required to recoup the initial investment in nominal terms, not accounting for time value of money or financing costs.

<h2 className="text-2xl font-bold mt-8 mb-4">Example: Capital Expenditure</h2>

<p className="my-3 leading-relaxed">In this example, a firm is deciding what to do with an unused plot of land. They do not want to sell it, but they are unsure whether it’s more profitable to rent the land or expand production. For simplicity we are examining this decision over a 5-year projection period.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Option 1 – Invest in New Facility</h3>

<p className="my-3 leading-relaxed">* The firm’s cost of capital is 10%.</p>
<p className="my-3 leading-relaxed">* The facility will cost $1,000,000 to build</p>
<p className="my-3 leading-relaxed">* Yearly expenses of $40,000 increasing by 3% each year.</p>
<p className="my-3 leading-relaxed">* The revenue generated by this facility is $150,000 the first year, increasing by 3% each year</p>

<strong>Breakdown:</strong>

<p className="my-3 leading-relaxed">The current year is 0 and that is when the million-dollar capital expenditure is incurred.  After year 1, cash flows are calculated by subtracting operating expenses from revenue.  These cash flows are multiplied by discount factors: 1 / (1+ discount factor).</p>

<p className="my-3 leading-relaxed">Here the NPV is $209,024, indicating that it is a worthwhile investment, given no other options.  The IRR easily surpasses the discount rate of 10%, indicating a potentially lucrative project.</p>

<p className="my-3 leading-relaxed">|  |  |  |  |  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Invest in New Facility</strong> |  |  |  |  |  |  |</p>
<p className="my-3 leading-relaxed">| Discount Rate – 10% |  |  |  |  |  |  |</p>
<p className="my-3 leading-relaxed">|  |  |  |  |  |  |  |</p>
<p className="my-3 leading-relaxed">| <strong>Year</strong> | 0 | 1 | 2 | 3 | 4 | 5 |</p>
<p className="my-3 leading-relaxed">| Revenue |  | 150,000 | 154,500 | 159,135 | 163,909 | 168,826 |</p>
<p className="my-3 leading-relaxed">| Plant Cost | (1,000,000) |  |  |  |  |  |</p>
<p className="my-3 leading-relaxed">| Operating Expenses |  | 40,000 | 41,200 | 42,436 | 43,709 | 45,020 |</p>
<p className="my-3 leading-relaxed">| Cash Flow | (1,000,000) | 110,000 | 113,300 | 116,699 | 120,200 | 123,806 |</p>
<p className="my-3 leading-relaxed">| Terminal Value |  |  |  |  |  | 1,238,060 |</p>
<p className="my-3 leading-relaxed">|  |  |  |  |  |  |  |</p>
<p className="my-3 leading-relaxed">| Discount Factor |  | 0.91 | 0.83 | 0.75 | 0.68 | 0.62 |</p>
<p className="my-3 leading-relaxed">|  |  |  |  |  |  |  |</p>
<p className="my-3 leading-relaxed">| PV of Cash Flow | (1,000,000) | 100,000 | 93,636 | 87,678 | 82,098 | 76,874 |</p>
<p className="my-3 leading-relaxed">| PV of Terminal Value |  |  |  |  |  | 768,738 |</p>
<p className="my-3 leading-relaxed">| <strong>NPV</strong> |  |  |  |  |  | <strong>209,024</strong> |</p>
<p className="my-3 leading-relaxed">| <strong>IRR</strong> |  |  |  |  |  | <strong>19.25%</strong> |</p>
<p className="my-3 leading-relaxed">| <strong>Payback (years)</strong> |  |  |  |  |  | <strong>6.18</strong> |</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Option 2 – Rent the Land</h2>

<p className="my-3 leading-relaxed">* Discount rate 10%</p>
<p className="my-3 leading-relaxed">* 15,000 cash inflow each year, rising by 3%</p>

<p className="my-3 leading-relaxed">In this scenario, the firm opts to rent the property for 15,000, keeping up with the historical inflation rate of 3%.  Similar, but more simple analysis results in an NPV of $332,709.</p>

<p className="my-3 leading-relaxed">|  |  |  |  |  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Rent the Land</strong> |  |  |  |  |  |  |</p>
<p className="my-3 leading-relaxed">| Discount Rate – 10% |  |  |  |  |  |  |</p>
<p className="my-3 leading-relaxed">|  |  |  |  |  |  |  |</p>
<p className="my-3 leading-relaxed">| <strong>Year</strong> | 0 | 1 | 2 | 3 | 4 | 5 |</p>
<p className="my-3 leading-relaxed">| Revenue | 15,000 | 15,450 | 15,914 | 16,391 | 16,883 | 17,389 |</p>
<p className="my-3 leading-relaxed">| Discount Factor | 1 | 0.91 | 0.83 | 0.75 | 0.68 | 0.62 |</p>
<p className="my-3 leading-relaxed">| PV of Cash Flows | 15,000 | 14,045 | 13,152 | 12,315 | 11,531 | 10,797 |</p>
<p className="my-3 leading-relaxed">| PV Terminal Value | 255868 |  |  |  |  |  |</p>
<p className="my-3 leading-relaxed">|  |  |  |  |  |  |  |</p>
<p className="my-3 leading-relaxed">| <strong>NPV</strong> | <strong>332,709</strong> |  |  |  |  |  |</p>

<h3 className="text-xl font-bold mt-6 mb-3">Final considerations</h3>

<p className="my-3 leading-relaxed">Sometimes it’s difficult to know exactly which cash flows are relevant. Relevant cash flows are characterized by occurring in the future and being <strong>incremental</strong>.</p>

<p className="my-3 leading-relaxed">Incremental cash flows are ones that are incurred by making a decision. Cash flows that occur in the future, but would have been made regardless of the decision are excluded. In this example, items such as <strong>depreciation</strong>, a non-cash expense, and <strong>taxes</strong> (cancel out) are not included because they are irrelevant. Furthermore it’s important not to include the value of the land because it does not represent a cash flow. At one point it was paid for, representing a sunk cost, which is defined by occurring in the past and no longer relevant for future decision making.</p>

<p className="my-3 leading-relaxed">Faced with these two options, the decision makers in the firm should choose to rent the land instead of expanding production. As a general rule, choosing the option with the highest NPV will increase the firms value the greatest.</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Transcript (best effort)</h2>

<p className="my-3 leading-relaxed">Cash Flow Analysis</p>
<p className="my-3 leading-relaxed">Cash flow is a concept in accounting that refers to the spending or receiving of cash by an organization. For a given period, cash flow is calculated by ending cash balance less starting cash balance. It is important not to confuse cash flow with earnings, as cash flow is related to solvency (or how well a business can pay its immediate debts) and not necessarily profitability. For example, a firm may have millions in revenue, but if accounts receivable are not collected, it is not realized as a cash inflow. Good management and financial modeling are crucial to a firm having healthy cash flows and remaining solvent.</p>
<p className="my-3 leading-relaxed">Cash Flow in Financial Statements</p>
<p className="my-3 leading-relaxed">There are different types of cash flow concepts, used for different purposes. Cash flow items are laid out in the Income Statement and Cash Flow Statements.</p>
<p className="my-3 leading-relaxed">Income Statement</p>
<p className="my-3 leading-relaxed">In an income statement,</p>
<p className="my-3 leading-relaxed">Operating Cash Flow (OCF)</p>
<p className="my-3 leading-relaxed">is similar to</p>
<p className="my-3 leading-relaxed">Earnings Before Interest and Taxes (EBIT).</p>
<p className="my-3 leading-relaxed">Both show how much cash a business can generate from normal operations. It excludes other major items in an income statement that impact net income (interest and taxes). These items are excluded because they are not operational expenses.</p>
<p className="my-3 leading-relaxed">OCF provides perspective when analyzing a business by stripping away non-operational activities. By only incorporating costs closely associated with the selling of product or services, such as inventory expense, manufacturing expense, or selling expense one can evaluate how potentially profitable a business can be. For example, if the firm has a huge debt load, it may be wiser to focus on something like OCF to determine future profitability instead of looking at current net income. The limitations of OCF is that the number does include non-cash items such as accounts receivable and deprecation.</p>
<p className="my-3 leading-relaxed">Sample Income Statement</p>
<p className="my-3 leading-relaxed">Revenue</p>
<p className="my-3 leading-relaxed">100,000</p>
<p className="my-3 leading-relaxed">Cost of Goods Sold</p>
<p className="my-3 leading-relaxed">25,000</p>
<p className="my-3 leading-relaxed">Gross Profit</p>
<p className="my-3 leading-relaxed">75,000</p>
<p className="my-3 leading-relaxed">Operating Expenses</p>
<p className="my-3 leading-relaxed">Advertising</p>
<p className="my-3 leading-relaxed">8,000</p>
<p className="my-3 leading-relaxed">Administrative</p>
<p className="my-3 leading-relaxed">10,000</p>
<p className="my-3 leading-relaxed">Commissions</p>
<p className="my-3 leading-relaxed">10,000</p>
<p className="my-3 leading-relaxed">Rent</p>
<p className="my-3 leading-relaxed">15,000</p>
<p className="my-3 leading-relaxed">Utilities</p>
<p className="my-3 leading-relaxed">5,000</p>
<p className="my-3 leading-relaxed">Operating Cash Flow</p>
<p className="my-3 leading-relaxed">27,000</p>
<p className="my-3 leading-relaxed">Cash Flow Statement</p>
<p className="my-3 leading-relaxed">The Cash Flow Statement digs deeper into incoming and outgoing cash, and when used with the income statement and balance sheet gives a more complete picture of a company.</p>
<p className="my-3 leading-relaxed">There are three main elements to this statement: cash flow from</p>
<p className="my-3 leading-relaxed">operations</p>
<p className="my-3 leading-relaxed">, from</p>
<p className="my-3 leading-relaxed">investing</p>
<p className="my-3 leading-relaxed">and from</p>
<p className="my-3 leading-relaxed">financing</p>
<p className="my-3 leading-relaxed">.</p>
<p className="my-3 leading-relaxed">This statement begins with the last item from the income statement, net income. Each line adds back or subtracts the change in non-cash items that impacted net income. The rule for non-cash items on the income statement is: add if initially subtracted, and subtract if initially added.</p>
<p className="my-3 leading-relaxed">For example, in the cash flow from operations portion, if the change in accounts receivable (ending AR – beginning AR) is positive, it means that net income was positively impacted, but no cash was received. Thus, you subtract the increase. Likewise, if accounts payable increase in the reporting period, you add the increase to net income because it positively impacted cash. Think of the Cash Flow Statement as a mirror of the income statement – including only non-cash items.</p>
<p className="my-3 leading-relaxed">Sample Statement of Cash Flows</p>
<p className="my-3 leading-relaxed">Net Income</p>
<p className="my-3 leading-relaxed">10,000</p>
<p className="my-3 leading-relaxed">Cash Flow from Operating Activities</p>
<p className="my-3 leading-relaxed">Add: depreciation expense</p>
<p className="my-3 leading-relaxed">3000</p>
<p className="my-3 leading-relaxed">Increase in accounts receivable</p>
<p className="my-3 leading-relaxed">-400</p>
<p className="my-3 leading-relaxed">Increase in inventory</p>
<p className="my-3 leading-relaxed">2000</p>
<p className="my-3 leading-relaxed">Increase in accounts payable</p>
<p className="my-3 leading-relaxed">350</p>
<p className="my-3 leading-relaxed">Cash used in operating activities</p>
<p className="my-3 leading-relaxed">4,950</p>
<p className="my-3 leading-relaxed">Cash Flow from Investing Activities</p>
<p className="my-3 leading-relaxed">Capital expenditures</p>
<p className="my-3 leading-relaxed">-10,000</p>
<p className="my-3 leading-relaxed">Cash used in investing activities</p>
<p className="my-3 leading-relaxed">-10,000</p>
<p className="my-3 leading-relaxed">Cash Flow from Financing Activities</p>
<p className="my-3 leading-relaxed">Borrowing of short-term debt</p>
<p className="my-3 leading-relaxed">2500</p>
<p className="my-3 leading-relaxed">Dividends</p>
<p className="my-3 leading-relaxed">-450</p>
<p className="my-3 leading-relaxed">Cash used in financing activities</p>
<p className="my-3 leading-relaxed">2050</p>
<p className="my-3 leading-relaxed">Net change in cash</p>
<p className="my-3 leading-relaxed">7,000</p>
<p className="my-3 leading-relaxed">Beginning cash</p>
<p className="my-3 leading-relaxed">2,000</p>
<p className="my-3 leading-relaxed">Ending cash</p>
<p className="my-3 leading-relaxed">9,000</p>
<p className="my-3 leading-relaxed">In this sample, we can see that the firm reports a net income of 10,000 but only receives 7,000 in cash for the period. This is why a single financial statement cannot capture the activities or status of a firm. If the case were such that net income was healthy but cash flows were negative, before looking at cash flow from financing (the firm is borrowing to stay solvent), that could potentially raise some red flags or call for a decrease in value due to increased risk.</p>
<p className="my-3 leading-relaxed">Cash Flow and Valuation</p>
<p className="my-3 leading-relaxed">Free Cash Flow (FCF)</p>
<p className="my-3 leading-relaxed">is another important metric, and better yet for determining the value of a firm based on cash flow. FCF is calculated by taking EBIT and subtracting taxes. After that, subtract capital expenditures, add back depreciation (a non-cash item subtracted while getting EBIT), and then lastly add or subtract the change in working capital.</p>
<p className="my-3 leading-relaxed">EBIT</p>
<p className="my-3 leading-relaxed">Less: Taxes</p>
<p className="my-3 leading-relaxed">Less: Capital Expenditures</p>
<p className="my-3 leading-relaxed">Plus: Depreciation</p>
<p className="my-3 leading-relaxed">+/- Change in Net Working Capital</p>
<p className="my-3 leading-relaxed">Free Cash Flow</p>
<p className="my-3 leading-relaxed">Free cash flow is useful because it is the amount of cash that a firm can use to pay dividends, reduce debt, reinvest, or use for acquisitions. In other words, this number shows a more fundamental earning potential for a firm. Unlike net income, free cash flow is not skewed by tax deferments, adjustments or other uncertain factors, such as risk of collecting receivables. Free cash flow is often used in a discounted cash flow analysis to find the net present value of all cash flows which theoretically represents enterprise value (Equity + debt – cash), helping determine the value of equity.</p>
<p className="my-3 leading-relaxed">Cash Flow and Decision Making</p>
<p className="my-3 leading-relaxed">Cash flow is extensively used in financial decision making. To see how, start by looking at Terminal Value, Net Present Value, Internal Rate of Return, and Payback.</p>
<p className="my-3 leading-relaxed">Terminal Value</p>
<p className="my-3 leading-relaxed">Terminal value</p>
<p className="my-3 leading-relaxed">is the present value of all future cash flows beyond the projection period. It can be calculated with the simple Gordon Growth Model:</p>
<p className="my-3 leading-relaxed">CF</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">= CF</p>
<p className="my-3 leading-relaxed">1</p>
<p className="my-3 leading-relaxed">/ (r – g)</p>
<p className="my-3 leading-relaxed">Where</p>
<p className="my-3 leading-relaxed">r</p>
<p className="my-3 leading-relaxed">is the discount rate, g is the growth rate and</p>
<p className="my-3 leading-relaxed">CF</p>
<p className="my-3 leading-relaxed">1</p>
<p className="my-3 leading-relaxed">= CF</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">* (1 + g)</p>
<p className="my-3 leading-relaxed">. In other words, multiply the last cash flow by (1 + g), and then divide it by the discount rate less the growth rate. This is just like the present value of a perpetuity.</p>
<p className="my-3 leading-relaxed">Net Present Value</p>
<p className="my-3 leading-relaxed">Net present value (NPV)</p>
<p className="my-3 leading-relaxed">is a crucial concept in finance. To calculate NPV, you simply sum the present value of all positive and negative cash flows for a given investment. If NPV is positive, that means that an investment is worthwhile, and if it is negative, it is not worthwhile. The NPV incorporates the appropriate discount rate to determine if returns are high enough.</p>
<p className="my-3 leading-relaxed">Internal Rate of Return</p>
<p className="my-3 leading-relaxed">Internal rate of return (IRR)</p>
<p className="my-3 leading-relaxed">is a metric closely related to NPV and the discount rate. Internal rate of return is defined as the discount rate required to make NPV equal to 0. For example, in this project if IRR were 10% due to lower cash flows, the NPV would equal 0. IRR must be calculated by trial and error, or with a software program like excel. All else being equal, you want to choose to invest in higher IRR projects, but if deciding between a 20% IRR and 10% IRR project, the 10% one may have a higher NPV due to greater scale, thus being the better investment choice.</p>
<p className="my-3 leading-relaxed">Payback</p>
<p className="my-3 leading-relaxed">Payback</p>
<p className="my-3 leading-relaxed">is the simplest metric and is expressed as the number of years required to recoup the initial investment in nominal terms, not accounting for time value of money or financing costs.</p>
<p className="my-3 leading-relaxed">Example: Capital Expenditure</p>
<p className="my-3 leading-relaxed">In this example, a firm is deciding what to do with an unused plot of land. They do not want to sell it, but they are unsure whether it’s more profitable to rent the land or expand production. For simplicity we are examining this decision over a 5-year projection period.</p>
<p className="my-3 leading-relaxed">Option 1 – Invest in New Facility</p>
<p className="my-3 leading-relaxed">The firm’s cost of capital is 10%.</p>
<p className="my-3 leading-relaxed">The facility will cost $1,000,000 to build</p>
<p className="my-3 leading-relaxed">Yearly expenses of $40,000 increasing by 3% each year.</p>
<p className="my-3 leading-relaxed">The revenue generated by this facility is $150,000 the first year, increasing by 3% each year</p>
<p className="my-3 leading-relaxed">Breakdown:</p>
<p className="my-3 leading-relaxed">The current year is 0 and that is when the million-dollar capital expenditure is incurred.  After year 1, cash flows are calculated by subtracting operating expenses from revenue.  These cash flows are multiplied by discount factors: 1 / (1+ discount factor).</p>
<p className="my-3 leading-relaxed">Here the NPV is $209,024, indicating that it is a worthwhile investment, given no other options.  The IRR easily surpasses the discount rate of 10%, indicating a potentially lucrative project.</p>
<p className="my-3 leading-relaxed">Invest in New Facility</p>
<p className="my-3 leading-relaxed">Discount Rate – 10%</p>
<p className="my-3 leading-relaxed">Year</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">1</p>
<p className="my-3 leading-relaxed">2</p>
<p className="my-3 leading-relaxed">3</p>
<p className="my-3 leading-relaxed">4</p>
<p className="my-3 leading-relaxed">5</p>
<p className="my-3 leading-relaxed">Revenue</p>
<p className="my-3 leading-relaxed">150,000</p>
<p className="my-3 leading-relaxed">154,500</p>
<p className="my-3 leading-relaxed">159,135</p>
<p className="my-3 leading-relaxed">163,909</p>
<p className="my-3 leading-relaxed">168,826</p>
<p className="my-3 leading-relaxed">Plant Cost</p>
<p className="my-3 leading-relaxed">(1,000,000)</p>
<p className="my-3 leading-relaxed">Operating Expenses</p>
<p className="my-3 leading-relaxed">40,000</p>
<p className="my-3 leading-relaxed">41,200</p>
<p className="my-3 leading-relaxed">42,436</p>
<p className="my-3 leading-relaxed">43,709</p>
<p className="my-3 leading-relaxed">45,020</p>
<p className="my-3 leading-relaxed">Cash Flow</p>
<p className="my-3 leading-relaxed">(1,000,000)</p>
<p className="my-3 leading-relaxed">110,000</p>
<p className="my-3 leading-relaxed">113,300</p>
<p className="my-3 leading-relaxed">116,699</p>
<p className="my-3 leading-relaxed">120,200</p>
<p className="my-3 leading-relaxed">123,806</p>
<p className="my-3 leading-relaxed">Terminal Value</p>
<p className="my-3 leading-relaxed">1,238,060</p>
<p className="my-3 leading-relaxed">Discount Factor</p>
<p className="my-3 leading-relaxed">0.91</p>
<p className="my-3 leading-relaxed">0.83</p>
<p className="my-3 leading-relaxed">0.75</p>
<p className="my-3 leading-relaxed">0.68</p>
<p className="my-3 leading-relaxed">0.62</p>
<p className="my-3 leading-relaxed">PV of Cash Flow</p>
<p className="my-3 leading-relaxed">(1,000,000)</p>
<p className="my-3 leading-relaxed">100,000</p>
<p className="my-3 leading-relaxed">93,636</p>
<p className="my-3 leading-relaxed">87,678</p>
<p className="my-3 leading-relaxed">82,098</p>
<p className="my-3 leading-relaxed">76,874</p>
<p className="my-3 leading-relaxed">PV of Terminal Value</p>
<p className="my-3 leading-relaxed">768,738</p>
<p className="my-3 leading-relaxed">NPV</p>
<p className="my-3 leading-relaxed">209,024</p>
<p className="my-3 leading-relaxed">IRR</p>
<p className="my-3 leading-relaxed">19.25%</p>
<p className="my-3 leading-relaxed">Payback (years)</p>
<p className="my-3 leading-relaxed">6.18</p>
<p className="my-3 leading-relaxed">Option 2 – Rent the Land</p>
<p className="my-3 leading-relaxed">Discount rate 10%</p>
<p className="my-3 leading-relaxed">15,000 cash inflow each year, rising by 3%</p>
<p className="my-3 leading-relaxed">In this scenario, the firm opts to rent the property for 15,000, keeping up with the historical inflation rate of 3%.  Similar, but more simple analysis results in an NPV of $332,709.</p>
<p className="my-3 leading-relaxed">Rent the Land</p>
<p className="my-3 leading-relaxed">Discount Rate – 10%</p>
<p className="my-3 leading-relaxed">Year</p>
<p className="my-3 leading-relaxed">0</p>
<p className="my-3 leading-relaxed">1</p>
<p className="my-3 leading-relaxed">2</p>
<p className="my-3 leading-relaxed">3</p>
<p className="my-3 leading-relaxed">4</p>
<p className="my-3 leading-relaxed">5</p>
<p className="my-3 leading-relaxed">Revenue</p>
<p className="my-3 leading-relaxed">15,000</p>
<p className="my-3 leading-relaxed">15,450</p>
<p className="my-3 leading-relaxed">15,914</p>
<p className="my-3 leading-relaxed">16,391</p>
<p className="my-3 leading-relaxed">16,883</p>
<p className="my-3 leading-relaxed">17,389</p>
<p className="my-3 leading-relaxed">Discount Factor</p>
<p className="my-3 leading-relaxed">1</p>
<p className="my-3 leading-relaxed">0.91</p>
<p className="my-3 leading-relaxed">0.83</p>
<p className="my-3 leading-relaxed">0.75</p>
<p className="my-3 leading-relaxed">0.68</p>
<p className="my-3 leading-relaxed">0.62</p>
<p className="my-3 leading-relaxed">PV of Cash Flows</p>
<p className="my-3 leading-relaxed">15,000</p>
<p className="my-3 leading-relaxed">14,045</p>
<p className="my-3 leading-relaxed">13,152</p>
<p className="my-3 leading-relaxed">12,315</p>
<p className="my-3 leading-relaxed">11,531</p>
<p className="my-3 leading-relaxed">10,797</p>
<p className="my-3 leading-relaxed">PV Terminal Value</p>
<p className="my-3 leading-relaxed">255868</p>
<p className="my-3 leading-relaxed">NPV</p>
<p className="my-3 leading-relaxed">332,709</p>
<p className="my-3 leading-relaxed">Final considerations</p>
<p className="my-3 leading-relaxed">Sometimes it’s difficult to know exactly which cash flows are relevant. Relevant cash flows are characterized by occurring in the future and being</p>
<p className="my-3 leading-relaxed">incremental</p>
<p className="my-3 leading-relaxed">.</p>
<p className="my-3 leading-relaxed">Incremental cash flows are ones that are incurred by making a decision. Cash flows that occur in the future, but would have been made regardless of the decision are excluded. In this example, items such as</p>
<p className="my-3 leading-relaxed">depreciation</p>
<p className="my-3 leading-relaxed">, a non-cash expense, and</p>
<p className="my-3 leading-relaxed">taxes</p>
<p className="my-3 leading-relaxed">(cancel out) are not included because they are irrelevant. Furthermore it’s important not to include the value of the land because it does not represent a cash flow. At one point it was paid for, representing a sunk cost, which is defined by occurring in the past and no longer relevant for future decision making.</p>
<p className="my-3 leading-relaxed">Faced with these two options, the decision makers in the firm should choose to rent the land instead of expanding production. As a general rule, choosing the option with the highest NPV will increase the firms value the greatest.</p>
<p className="my-3 leading-relaxed">Pop Quiz</p>
      
    </article>
  );
}
