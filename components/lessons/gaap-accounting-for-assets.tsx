'use client';


export default function GAAPAccountingForAssets() {
  

  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-4">GAAP – Accounting for Assets</h1>

<h3 className="text-xl font-bold mt-6 mb-3">*Facets of Assets*</h3>

<p className="my-3 leading-relaxed">How much is someone worth? One way to think about it could be to add up assets, or everything a person owns that holds financial value. First, think of everyday items like cash, a car, a computer, and perhaps money stored in a savings or investment account. However, there are some less obvious items to include as well. What if someone loaned a friend $20 and he/she promised to pay it back next Friday? Assuming they can trust this person to pay them back, that $20 should also be included on the list of assets.</p>

<p className="my-3 leading-relaxed">Businesses typically have some similar assets to individuals (cash, equipment, investments, etc.) and some different ones (inventory, manufacturing plants and the like). The difference is that companies are required under GAAP to keep a record of their assets against debt and equity claims on the balance sheet. Assets are the first ingredient in the instrumental accounting equation:</p>

<strong>Assets = Liabilities + Shareholders’ Equity</strong>

<p className="my-3 leading-relaxed">In this article, we will cover several important rules and things to consider on the asset side of the equation.</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Accounts Receivable</h2>

<p className="my-3 leading-relaxed">![calculator](/images/ff7f8f5fbb8a83a6.jpg)</p>

<p className="my-3 leading-relaxed">In today’s business world, it’s becoming increasingly rare that customers pay with cash. This makes sense for convenience’s sake—it’s a whole lot easier to swipe a credit card to pay for food rather than carrying cash around for everything. Then, at the end of the month, one can quickly pay off credit card bills using money earned during that time period. For a business that has numerous and much larger payments, using credit is a necessity.</p>

<p className="my-3 leading-relaxed">When a customer pays for goods or services using cash, the business can immediately record that cash as an asset. If the customer pays on credit, the business cannot record cash that they haven’t received. Instead, they chalk up the transaction to <em>accounts receivable.</em></p>

<p className="my-3 leading-relaxed">Let’s say I run an ice cream shop and do $50,000 in cash sales plus $50,000 in credit sales. The journal entry would go as follows:</p>

<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Account</strong> | <strong>Debit</strong> | <strong>Credit</strong> |</p>
<p className="my-3 leading-relaxed">| Accounts Receivable | $50,000 |  |</p>
<p className="my-3 leading-relaxed">| Cash | $50,000 |  |</p>
<p className="my-3 leading-relaxed">| Sales Revenue |  | $100,000 |</p>

<h3 className="text-xl font-bold mt-6 mb-3">Uncollectible Accounts</h3>

<p className="my-3 leading-relaxed">![pockets](/images/c4d434548ac6f021.jpg)</p>

<p className="my-3 leading-relaxed">The tricky part is that there’s a chance some of these customers don’t come through on their payments. Typically, companies make an assumption that a portion of their accounts receivable will go unpaid and account for this using something called an <em>allowance for doubtful accounts.</em></p>

<p className="my-3 leading-relaxed">It’s up to the business to estimate the portion of accounts receivable that will go unpaid. If I believe that 2% of my ice cream customers will fail to deliver their payments, I’ll take 2% \* $50,000 to get $1,000 going into my allowance for doubtful accounts. The journal entry would be as follows:</p>

<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Account</strong> | <strong>Debit</strong> | <strong>Credit</strong> |</p>
<p className="my-3 leading-relaxed">| Bad Debt Expense | $1,000 |  |</p>
<p className="my-3 leading-relaxed">| Allowance for Doubtful Accounts |  | $1,000 |</p>

<p className="my-3 leading-relaxed">Because allowance for doubtful accounts counts against accounts receivable, we credit it and debit “bad debt expense”, assuming ahead of time that $1,000 of my payments aren’t going to be ultimately coming into my business.</p>

<p className="my-3 leading-relaxed">This first entry is just an estimation. During the year, if I get word that a customer really isn’t going to be able to pay for their $200 purchase (ie if they went bankrupt and aren’t able to pay off any of their credit card bills), I need to do a different journal entry to actually write off the accounts receivable:</p>

<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Account</strong> | <strong>Debit</strong> | <strong>Credit</strong> |</p>
<p className="my-3 leading-relaxed">| Allowance for Doubtful Accounts | $200 |  |</p>
<p className="my-3 leading-relaxed">| Accounts Receivable |  | $200 |</p>

<p className="my-3 leading-relaxed">This would bring our running balance in accounts receivable to $49,800. Throughout the year, the company would write off all of the uncollectible accounts like this that come up, and next year we would need to make a new estimate and entry to replenish the allowance for doubtful accounts.</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Inventory</h2>

<p className="my-3 leading-relaxed">Inventory is the portion of assets that a company is holding to sell to customers—the ice cream itself in my example. Inventory is one of the most important assets to manage in terms of running a company because of the issues it can cause. If a company doesn’t carry enough inventory, it will run out of product to sell to customers and sacrifice valuable revenue. However, holding too much inventory can cost a lot of money in storage expenses. Striking a balance is vital in order to keep a company running smoothly and profitably.</p>

<p className="my-3 leading-relaxed">To achieve this balance, inventory flow must be closely monitored and analyzed. In accounting, there are three basic methods to keep track of inventory flow: FIFO, LIFO, and weighted average—we will discuss how to utilize each method. Say my ice cream business holds the following inventory in the first quarter of 2017:</p>

<p className="my-3 leading-relaxed">|  |  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Date Purchased</strong> | <strong>Units</strong> | <strong>Cost per unit</strong> | <strong>Inventory Value</strong> |</p>
<p className="my-3 leading-relaxed">| 1/1/2017 | 100 | $5.00 | $500 |</p>
<p className="my-3 leading-relaxed">| 2/1/2017 | 200 | $6.00 | $1200 |</p>
<p className="my-3 leading-relaxed">| 3/1/2017 | 150 | $6.50 | $975 |</p>

<strong>Total Inventory Value– $2,675</strong>

<p className="my-3 leading-relaxed">On April 1st, the business sells 200 units of ice cream. How much gets recognized in cost of goods sold? It depends on the method used:</p>

<h3 className="text-xl font-bold mt-6 mb-3">FIFO—First in, first out</h3>

<p className="my-3 leading-relaxed">![FIFO](/images/699db755f5cd51fb.jpg)</p>

<p className="my-3 leading-relaxed">Under FIFO, the first inventory units bought are also the first units recognized as being sold. Whenever a sale is recorded, the cost of goods sold is calculated based upon the cost of the oldest units in our inventory. In this example, we would first use the 100 units purchased in January and then, when that stock runs out, we add another 100 units from February (the second-oldest inventory).</p>

<p className="my-3 leading-relaxed">|  |  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">|  | <strong># Units</strong> | <strong>Cost/Unit</strong> | <strong>Total</strong> |</p>
<p className="my-3 leading-relaxed">| January | 100 | $5 | $500 |</p>
<p className="my-3 leading-relaxed">| February | 100 | $6 | $600 |</p>
<p className="my-3 leading-relaxed">| <strong>Cost of Goods Sold = $1100</strong> |</p>

<p className="my-3 leading-relaxed">Subtract $1100 from the previous inventory balance of $2675 to get the new value of $1575.</p>

<h3 className="text-xl font-bold mt-6 mb-3">LIFO—Last in, first out</h3>

<p className="my-3 leading-relaxed">![LIFO](/images/2b3d867578666b00.jpg)</p>

<p className="my-3 leading-relaxed">LIFO is just the opposite; the newest units of inventory are taken out first. We would use all 150 units that we purchased in March, with the remaining 50 coming from the February batch.</p>

<p className="my-3 leading-relaxed">|  |  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- | --- |</p>
<p className="my-3 leading-relaxed">|  | <strong># Units</strong> | <strong>Cost/Unit</strong> | <strong>Total</strong> |</p>
<p className="my-3 leading-relaxed">| March | 150 | $6.50 | $975 |</p>
<p className="my-3 leading-relaxed">| February | 50 | $6 | $300 |</p>
<p className="my-3 leading-relaxed">| <strong>Cost of Goods Sold = $1275</strong> |</p>

<p className="my-3 leading-relaxed">When we remove the $1275 from our $2675 in inventory, the new balance is $1400. Notice that because ice cream prices were rising, our LIFO cost of goods sold was higher than the FIFO amount.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Weighted Average</h3>

<p className="my-3 leading-relaxed">This method involves a different process. Before doing anything, we have to figure out the weighted average cost of our inventory. This is done by taking the total amount of inventory purchased divided by the total number of units.</p>

<p className="my-3 leading-relaxed">|  |  |  |</p>
<p className="my-3 leading-relaxed">| --- | --- | --- |</p>
<p className="my-3 leading-relaxed">| <strong>Date Purchased</strong> | <strong>Units</strong> | <strong>Cost per unit</strong> |</p>
<p className="my-3 leading-relaxed">| 1/1/2017 | 100 | $5.00 |</p>
<p className="my-3 leading-relaxed">| 2/1/2017 | 200 | $6.00 |</p>
<p className="my-3 leading-relaxed">| 3/1/2017 | 150 | $6.50 |</p>
<p className="my-3 leading-relaxed">| <strong>Total</strong> | <strong>450</strong> | <strong>$            2,675</strong> |</p>
<p className="my-3 leading-relaxed">| <strong>Weighted Average Cost = $2675 / 450 = $5.94</strong> |</p>

<p className="my-3 leading-relaxed">Afterwards, we simply price the units sold at that weighted average cost. 150 units at $5.94 each comes to a $1188 cost of goods sold, which translates to a $1487 balance left in inventory. The weighted average method will always lead to a cost of goods sold between the levels produced by the FIFO and LIFO methods.</p>

<h3 className="text-xl font-bold mt-6 mb-3">Inventory Method Selection</h3>

<p className="my-3 leading-relaxed">How do firms decide which inventory method to use? It depends on both the company and the price trend of the inventory involved. For the purpose of this article, we will assume that prices are increasing. This is normally the case, because of the impacts of inflation.</p>

<p className="my-3 leading-relaxed">The argument for using FIFO in an environment of rising prices is that it better represents the value of goods held in inventory<strong>.</strong>Removing the oldest inventory (which has the lowest cost) leaves product purchased more recently that better matches up with current market value. This translates to being left with a final inventory value that is a more accurate representation. Additionally, applying FIFO will increase net income because it will result in a lower cost of goods sold. This could be favorable for a manager that is under pressure to turn out strong earnings in the short run, or for one that needs a strong number to impress new investors.</p>

<p className="my-3 leading-relaxed">However, many companies in reality use LIFO. Despite not representing an accurate inventory value, the LIFO system has the advantage of lowering current net income and lowering a firm’s tax liability. By essentially overstating cost of goods sold, companies are able to decrease their taxable earnings and save significantly on income tax without any real financial disadvantages. There has been some talk of repealing LIFO as an acceptable accounting method, but for now it is a favorite– especially in inflation-sensitive businesses like oil, copper, and chemicals.</p>

<h2 className="text-2xl font-bold mt-8 mb-4">Transcript (best effort)</h2>

<p className="my-3 leading-relaxed">GAAP – Accounting for Assets</p>
<p className="my-3 leading-relaxed">Facets of Assets</p>
<p className="my-3 leading-relaxed">How much is someone worth? One way to think about it could be to add up assets, or everything a person owns that holds financial value. First, think of everyday items like cash, a car, a computer, and perhaps money stored in a savings or investment account. However, there are some less obvious items to include as well. What if someone loaned a friend $20 and he/she promised to pay it back next Friday? Assuming they can trust this person to pay them back, that $20 should also be included on the list of assets.</p>
<p className="my-3 leading-relaxed">Businesses typically have some similar assets to individuals (cash, equipment, investments, etc.) and some different ones (inventory, manufacturing plants and the like). The difference is that companies are required under GAAP to keep a record of their assets against debt and equity claims on the balance sheet. Assets are the first ingredient in the instrumental accounting equation:</p>
<p className="my-3 leading-relaxed">Assets = Liabilities + Shareholders’ Equity</p>
<p className="my-3 leading-relaxed">In this article, we will cover several important rules and things to consider on the asset side of the equation.</p>
<p className="my-3 leading-relaxed">Accounts Receivable</p>
<p className="my-3 leading-relaxed">In today’s business world, it’s becoming increasingly rare that customers pay with cash. This makes sense for convenience’s sake—it’s a whole lot easier to swipe a credit card to pay for food rather than carrying cash around for everything. Then, at the end of the month, one can quickly pay off credit card bills using money earned during that time period. For a business that has numerous and much larger payments, using credit is a necessity.</p>
<p className="my-3 leading-relaxed">When a customer pays for goods or services using cash, the business can immediately record that cash as an asset. If the customer pays on credit, the business cannot record cash that they haven’t received. Instead, they chalk up the transaction to</p>
<p className="my-3 leading-relaxed">accounts receivable.</p>
<p className="my-3 leading-relaxed">Let’s say I run an ice cream shop and do $50,000 in cash sales plus $50,000 in credit sales. The journal entry would go as follows:</p>
<p className="my-3 leading-relaxed">Account</p>
<p className="my-3 leading-relaxed">Debit</p>
<p className="my-3 leading-relaxed">Credit</p>
<p className="my-3 leading-relaxed">Accounts Receivable</p>
<p className="my-3 leading-relaxed">$50,000</p>
<p className="my-3 leading-relaxed">Cash</p>
<p className="my-3 leading-relaxed">$50,000</p>
<p className="my-3 leading-relaxed">Sales Revenue</p>
<p className="my-3 leading-relaxed">$100,000</p>
<p className="my-3 leading-relaxed">Uncollectible Accounts</p>
<p className="my-3 leading-relaxed">The tricky part is that there’s a chance some of these customers don’t come through on their payments. Typically, companies make an assumption that a portion of their accounts receivable will go unpaid and account for this using something called an</p>
<p className="my-3 leading-relaxed">allowance for doubtful accounts.</p>
<p className="my-3 leading-relaxed">It’s up to the business to estimate the portion of accounts receivable that will go unpaid. If I believe that 2% of my ice cream customers will fail to deliver their payments, I’ll take 2% * $50,000 to get $1,000 going into my allowance for doubtful accounts. The journal entry would be as follows:</p>
<p className="my-3 leading-relaxed">Account</p>
<p className="my-3 leading-relaxed">Debit</p>
<p className="my-3 leading-relaxed">Credit</p>
<p className="my-3 leading-relaxed">Bad Debt Expense</p>
<p className="my-3 leading-relaxed">$1,000</p>
<p className="my-3 leading-relaxed">Allowance for Doubtful Accounts</p>
<p className="my-3 leading-relaxed">$1,000</p>
<p className="my-3 leading-relaxed">Because allowance for doubtful accounts counts against accounts receivable, we credit it and debit “bad debt expense”, assuming ahead of time that $1,000 of my payments aren’t going to be ultimately coming into my business.</p>
<p className="my-3 leading-relaxed">This first entry is just an estimation. During the year, if I get word that a customer really isn’t going to be able to pay for their $200 purchase (ie if they went bankrupt and aren’t able to pay off any of their credit card bills), I need to do a different journal entry to actually write off the accounts receivable:</p>
<p className="my-3 leading-relaxed">Account</p>
<p className="my-3 leading-relaxed">Debit</p>
<p className="my-3 leading-relaxed">Credit</p>
<p className="my-3 leading-relaxed">Allowance for Doubtful Accounts</p>
<p className="my-3 leading-relaxed">$200</p>
<p className="my-3 leading-relaxed">Accounts Receivable</p>
<p className="my-3 leading-relaxed">$200</p>
<p className="my-3 leading-relaxed">This would bring our running balance in accounts receivable to $49,800. Throughout the year, the company would write off all of the uncollectible accounts like this that come up, and next year we would need to make a new estimate and entry to replenish the allowance for doubtful accounts.</p>
<p className="my-3 leading-relaxed">Inventory</p>
<p className="my-3 leading-relaxed">Inventory is the portion of assets that a company is holding to sell to customers—the ice cream itself in my example. Inventory is one of the most important assets to manage in terms of running a company because of the issues it can cause. If a company doesn’t carry enough inventory, it will run out of product to sell to customers and sacrifice valuable revenue. However, holding too much inventory can cost a lot of money in storage expenses. Striking a balance is vital in order to keep a company running smoothly and profitably.</p>
<p className="my-3 leading-relaxed">To achieve this balance, inventory flow must be closely monitored and analyzed. In accounting, there are three basic methods to keep track of inventory flow: FIFO, LIFO, and weighted average—we will discuss how to utilize each method. Say my ice cream business holds the following inventory in the first quarter of 2017:</p>
<p className="my-3 leading-relaxed">Date Purchased</p>
<p className="my-3 leading-relaxed">Units</p>
<p className="my-3 leading-relaxed">Cost per unit</p>
<p className="my-3 leading-relaxed">Inventory Value</p>
<p className="my-3 leading-relaxed">1/1/2017</p>
<p className="my-3 leading-relaxed">100</p>
<p className="my-3 leading-relaxed">$5.00</p>
<p className="my-3 leading-relaxed">$500</p>
<p className="my-3 leading-relaxed">2/1/2017</p>
<p className="my-3 leading-relaxed">200</p>
<p className="my-3 leading-relaxed">$6.00</p>
<p className="my-3 leading-relaxed">$1200</p>
<p className="my-3 leading-relaxed">3/1/2017</p>
<p className="my-3 leading-relaxed">150</p>
<p className="my-3 leading-relaxed">$6.50</p>
<p className="my-3 leading-relaxed">$975</p>
<p className="my-3 leading-relaxed">Total Inventory Value– $2,675</p>
<p className="my-3 leading-relaxed">On April 1</p>
<p className="my-3 leading-relaxed">st</p>
<p className="my-3 leading-relaxed">, the business sells 200 units of ice cream. How much gets recognized in cost of goods sold? It depends on the method used:</p>
<p className="my-3 leading-relaxed">FIFO—First in, first out</p>
<p className="my-3 leading-relaxed">Under FIFO, the first inventory units bought are also the first units recognized as being sold. Whenever a sale is recorded, the cost of goods sold is calculated based upon the cost of the oldest units in our inventory. In this example, we would first use the 100 units purchased in January and then, when that stock runs out, we add another 100 units from February (the second-oldest inventory).</p>
<h1 className="text-3xl font-bold mb-4">Units</h1>
<p className="my-3 leading-relaxed">Cost/Unit</p>
<p className="my-3 leading-relaxed">Total</p>
<p className="my-3 leading-relaxed">January</p>
<p className="my-3 leading-relaxed">100</p>
<p className="my-3 leading-relaxed">$5</p>
<p className="my-3 leading-relaxed">$500</p>
<p className="my-3 leading-relaxed">February</p>
<p className="my-3 leading-relaxed">100</p>
<p className="my-3 leading-relaxed">$6</p>
<p className="my-3 leading-relaxed">$600</p>
<p className="my-3 leading-relaxed">Cost of Goods Sold = $1100</p>
<p className="my-3 leading-relaxed">Subtract $1100 from the previous inventory balance of $2675 to get the new value of $1575.</p>
<p className="my-3 leading-relaxed">LIFO—Last in, first out</p>
<p className="my-3 leading-relaxed">LIFO is just the opposite; the newest units of inventory are taken out first. We would use all 150 units that we purchased in March, with the remaining 50 coming from the February batch.</p>
<h1 className="text-3xl font-bold mb-4">Units</h1>
<p className="my-3 leading-relaxed">Cost/Unit</p>
<p className="my-3 leading-relaxed">Total</p>
<p className="my-3 leading-relaxed">March</p>
<p className="my-3 leading-relaxed">150</p>
<p className="my-3 leading-relaxed">$6.50</p>
<p className="my-3 leading-relaxed">$975</p>
<p className="my-3 leading-relaxed">February</p>
<p className="my-3 leading-relaxed">50</p>
<p className="my-3 leading-relaxed">$6</p>
<p className="my-3 leading-relaxed">$300</p>
<p className="my-3 leading-relaxed">Cost of Goods Sold = $1275</p>
<p className="my-3 leading-relaxed">When we remove the $1275 from our $2675 in inventory, the new balance is $1400. Notice that because ice cream prices were rising, our LIFO cost of goods sold was higher than the FIFO amount.</p>
<p className="my-3 leading-relaxed">Weighted Average</p>
<p className="my-3 leading-relaxed">This method involves a different process. Before doing anything, we have to figure out the weighted average cost of our inventory. This is done by taking the total amount of inventory purchased divided by the total number of units.</p>
<p className="my-3 leading-relaxed">Date Purchased</p>
<p className="my-3 leading-relaxed">Units</p>
<p className="my-3 leading-relaxed">Cost per unit</p>
<p className="my-3 leading-relaxed">1/1/2017</p>
<p className="my-3 leading-relaxed">100</p>
<p className="my-3 leading-relaxed">$5.00</p>
<p className="my-3 leading-relaxed">2/1/2017</p>
<p className="my-3 leading-relaxed">200</p>
<p className="my-3 leading-relaxed">$6.00</p>
<p className="my-3 leading-relaxed">3/1/2017</p>
<p className="my-3 leading-relaxed">150</p>
<p className="my-3 leading-relaxed">$6.50</p>
<p className="my-3 leading-relaxed">Total</p>
<p className="my-3 leading-relaxed">450</p>
<p className="my-3 leading-relaxed">$            2,675</p>
<p className="my-3 leading-relaxed">Weighted Average Cost = $2675 / 450 = $5.94</p>
<p className="my-3 leading-relaxed">Afterwards, we simply price the units sold at that weighted average cost. 150 units at $5.94 each comes to a $1188 cost of goods sold, which translates to a $1487 balance left in inventory. The weighted average method will always lead to a cost of goods sold between the levels produced by the FIFO and LIFO methods.</p>
<p className="my-3 leading-relaxed">Inventory Method Selection</p>
<p className="my-3 leading-relaxed">How do firms decide which inventory method to use? It depends on both the company and the price trend of the inventory involved. For the purpose of this article, we will assume that prices are increasing. This is normally the case, because of the impacts of inflation.</p>
<p className="my-3 leading-relaxed">The argument for using FIFO in an environment of rising prices is that it better represents the value of goods held in inventory</p>
<p className="my-3 leading-relaxed">.</p>
<p className="my-3 leading-relaxed">Removing the oldest inventory (which has the lowest cost) leaves product purchased more recently that better matches up with current market value. This translates to being left with a final inventory value that is a more accurate representation. Additionally, applying FIFO will increase net income because it will result in a lower cost of goods sold. This could be favorable for a manager that is under pressure to turn out strong earnings in the short run, or for one that needs a strong number to impress new investors.</p>
<p className="my-3 leading-relaxed">However, many companies in reality use LIFO. Despite not representing an accurate inventory value, the LIFO system has the advantage of lowering current net income and lowering a firm’s tax liability. By essentially overstating cost of goods sold, companies are able to decrease their taxable earnings and save significantly on income tax without any real financial disadvantages. There has been some talk of repealing LIFO as an acceptable accounting method, but for now it is a favorite– especially in inflation-sensitive businesses like oil, copper, and chemicals.</p>
<p className="my-3 leading-relaxed">Pop Quiz</p>
      
    </article>
  );
}
