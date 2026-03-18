import { Quiz } from "@/components/content/quiz";
import type { QuizQuestion } from "@/data/types";

const quizQuestions: QuizQuestion[] = [
  {
    question: "What does the 'Rule of 28' refer to?",
    options: [
      "You should spend 28% of income on groceries",
      "Front-end ratio - housing costs should not exceed 28% of income",
      "You should save 28% of your income monthly",
      "Mortgage terms are typically 28 years",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the Back-End Ratio Rule?",
    options: [
      "Housing costs should not exceed 28% of income",
      "Total debt payments should not exceed 36% of monthly income",
      "You should have a 36-month emergency fund",
      "Only 36% of your home can be mortgaged",
    ],
    correctIndex: 1,
  },
  {
    question: "What is PMI (Private Mortgage Insurance)?",
    options: [
      "Insurance that protects you if you lose your job",
      "Insurance that protects the bank if you default on your loan",
      "A type of home warranty",
      "Property maintenance insurance",
    ],
    correctIndex: 1,
  },
  {
    question:
      "What is amortization in the context of a mortgage loan?",
    options: [
      "The process of paying off a loan with equal payments over time",
      "The difference between home price and down payment",
      "The annual increase in home value",
      "The fee charged by the lender",
    ],
    correctIndex: 0,
  },
  {
    question:
      "What is a Home Equity Loan?",
    options: [
      "A loan to help you buy a home",
      "A second mortgage that lets you borrow against the equity you've built",
      "A type of credit card",
      "Insurance for your home equity",
    ],
    correctIndex: 1,
  },
];

export default function CanYouAffordToBuyThatHouse() {
  return (
    <article className="prose max-w-none">
      <p>
        Buying a home – a long-time cornerstone of personal finance. Buying a
        home is a huge milestone in anyone's financial life, but the math behind
        the transaction can be daunting. In fact, for the average consumer, the
        purchase of their home is an entirely unique type of financial
        investment – where just a few thousand dollars can easily add up to 10
        times that amount in extra costs or savings.
      </p>

      <p>
        This lesson is designed to help understand the math behind what will
        likely be the biggest transaction in your life!
      </p>

      <h2>Mortgage Application Ratios</h2>

      <p>
        Before you can take out a mortgage, there is a lengthy application
        process through a bank, credit union, or mortgage loan originator. The
        application process often takes weeks to complete, as you will be asking
        a financial institution to let you borrow likely several times your
        annual earnings – they want to make sure they are going to get paid back.
      </p>

      <p>
        When you apply for a mortgage loan, your lender is primarily making two
        decisions: if they are going to lend you money at all, and what interest
        rate (or other restrictions) will apply to your loan.
      </p>

      <h3>Affordability Ratios</h3>

      <p>
        The first test a bank will make is to assume that you take out the
        mortgage loan – are you actually able to afford it? This is decided with
        ratios – the "28/36 Rule".
      </p>

      <h4>Front-End Ratio – Rule of 28</h4>

      <p>
        The first affordability ratio is called the "Front-End Ratio". This
        refers to how much of your income is going to be spent on housing costs
        alone. This means not just the payment made to your mortgage loan, but
        also any homeowner's insurance costs, property taxes, homeowner's
        association fees, and private mortgage insurance (PMI). It does NOT
        include other "variable" costs of owning a home (like utilities,
        maintenance, and repair fees).
      </p>

      <p>
        <strong>Front End Ratio</strong> = Monthly Housing Costs / Monthly Gross
        Income
      </p>

      <p>
        The "Rule of 28" says that banks typically will not agree to grant a
        mortgage that has a front-end ratio of greater than 28% – if your
        housing costs alone are greater than 28%, you are seen as too risky to
        lend.
      </p>

      <h4>Back-End Ratio – Rule of 36</h4>

      <p>
        If you pass the Rule of 28 tests, banks will then calculate your
        "Back-End Ratio". The back-end ratio adds in any other debt payments you
        have to get a new ratio of your total monthly debt payments vs your total
        monthly income.
      </p>

      <p>
        <strong>Back End Ratio</strong> = (Monthly Housing Costs + All Other Debt
        Payments) / Monthly Gross Income
      </p>

      <p>
        The Back-End Ratio is very closely related to your{" "}
        <strong>Debt-to-Income Ratio</strong>, and is sometimes used
        interchangeably. The only difference is that your Debt to Income Ratio
        does not include the "extra" housing costs (like insurance, PMI, property
        taxes, etc.).
      </p>

      <p>
        Lenders are looking for a Back-End Ratio of less than 36% (the Rule of
        36) – if your total debt payments is greater than 36% of your monthly
        income, you would have a very hard time getting approved for a loan.
      </p>

      <h2>Importance of Your Down Payment</h2>

      <p>
        Your down payment is the single most important consideration in your
        ability to get – and maintain – a mortgage.
      </p>

      <p>
        Your down payment refers to how much cash you have today that you can put
        towards your purchase (meaning home price, plus all closing costs
        associated with taking out the mortgage). Banks like big down payments –
        it shows you are financially responsible to save up a large amount of
        cash yourself, and it means they have less risk in the loan if you fall
        behind your payments and fail to repay yourself.
      </p>

      <p>
        Financial institutions generally prefer borrowers who can put 20% (or
        more) money into their down payment. But it also has a huge financial
        impact.
      </p>

      <h3>Down Payment – Big or Small?</h3>

      <p>
        Consider Eric, who is buying a $300,000 home. He has $70,000 in cash
        available that he has saved up over the last few years to put towards
        his down payment, and the bank is offering him a 5% interest rate on a
        30 year mortgage.
      </p>

      <p>
        If he chooses to put down exactly 20% ($60,000) so he can keep the extra
        $10,000 in his emergency fund, this will make his monthly payment just
        over $1,400 per month. At the end of the 30 years, he will have paid
        $180,900 in total interest.
      </p>

      <p>
        However, he could increase his down payment to $70,000. In this case, his
        monthly payment drops to $1,344, and at the end of the 30 years, he will
        have paid a total of $173,367 in interest.
      </p>

      <h3>Bank Risk and PMI</h3>

      <p>
        A down payment of 20% is a key consideration for the financial
        institution issuing the loan. This is because if you fail to make your
        mortgage payments, the bank is forced to <strong>foreclose</strong> on
        your property.
      </p>

      <p>
        This means you get forced out/evicted from your home, and the bank puts
        it up for a quick sale to whoever is willing to pay for it in order to
        recoup their money.
      </p>

      <h4>Private Mortgage Insurance</h4>

      <p>
        This does not mean that it is impossible to get a mortgage if you do not
        have enough money for a 20% down payment – it just means that there are
        extra hoops you need to jump through. The biggest extra consideration is
        called Private Mortgage Insurance, or PMI.
      </p>

      <p>
        PMI is an insurance policy that protects the bank – not you – in case you
        default on your loan. It pays back the bank any difference between the
        quick-sale price and how much they are still owed on the loan. The PMI
        payments are typically added to your monthly mortgage payment (making your
        monthly payments even more expensive).
      </p>

      <p>
        Once you have built up 20% of <strong>equity</strong> in your home
        (either through your regular monthly payments, or extra payments), you
        will no longer be required to pay PMI.
      </p>

      <h2>Equity and Amortization</h2>

      <p>
        The equity in your home is effectively how much of your home you "own",
        versus how much is still borrowed. When you first make your home
        purchase, your equity exactly equals your down payment – so if you put a
        20% down payment on a $300,000 home, you have exactly $60,000 in equity
        as soon as you close on the sale.
      </p>

      <p>
        Every time you make your monthly mortgage payment, you are paying off a
        bit of your loan – so your equity goes up. However, even though all of
        your mortgage payments are equal, the equity they build does not. This is
        because your mortgage is an <strong>amortized loan</strong> (or a loan of
        exactly equal payments).
      </p>

      <p>
        Amortized loans are balanced so that early in the loan, most of your
        payments go towards the total interest owed for the entire lifetime of
        the loan. At the end of the loan, most of the interest is paid off, so
        most of the payment's value goes straight to your equity.
      </p>

      <p>
        This means for the first few years of your loan, you are building very
        little equity (unless you make extra payments on the side).
      </p>

      <h2>Sales and Refinancing</h2>

      <p>
        How much equity you have built directly impacts how much cash you get
        when selling your home. When you sell your home (if your mortgage has not
        been paid off yet), your profit comes from this formula:
      </p>

      <p>
        <strong>Take-Away Cash = Sale Price – Initial Loan Amount + Your Equity</strong>
      </p>

      <p>
        In our example with Eric, let's say that he sells his home after 5 years,
        for $310,000. His initial loan amount was $240,000, and he originally
        had a $60,000 down payment. After 5 years of making his regular monthly
        payments, he has built an additional $27,407 in equity, bringing his
        total equity to $87,407.
      </p>

      <p>
        <strong>Take-Away Cash</strong> = $310,000 – $240,000 + $87,407 ={" "}
        <strong>$157,407</strong>
      </p>

      <h3>Home Equity Loans and Refinancing</h3>

      <p>
        If instead of selling his home, Eric also has the option to take a
        second mortgage, or a <strong>home equity loan</strong>. What this means
        is he has the option to borrow against the equity he has built up in his
        home – with the catch that he still needs to maintain 20% equity unless
        he wants to pay PMI.
      </p>

      <p>
        This means that the bank will calculate your new percentage equity in the
        value of the home. They do this by comparing against the original
        purchase price and how much equity you have built up, then find that as a
        percentage of the new home price.
      </p>

      <p>
        Original Home Price = $300,000<br />
        Current Equity = $87,407<br />
        Equity Percentage = $87,407 / $300,000 = 29%<br />
        New Home Price = $310,000<br />
        <strong>Potential Equity Value</strong> = $310,000 × 29% = $90,321
      </p>

      <p>
        From here, the financial institution will still require that you maintain
        20% equity (at the new price).
      </p>

      <p>
        <strong>Potential Minimum Equity</strong> = $310,000 × 20% = $62,000
      </p>

      <p>
        Since the equity you would have when refinancing is greater than this, it
        opens the possibility of taking out a second mortgage against this
        equity. This is called a Home Equity Loan.
      </p>

      <p>
        <strong>Maximum Home Equity Loan amount</strong> = $90,321 – $62,000 =
        $28,321
      </p>

      <h4>Refinancing</h4>

      <p>
        Instead of taking out a home equity loan, Eric may also want to
        restructure his original loan so his monthly payments are lower. It may
        be that interest rates fell since he originally took his first loan, or
        he may want to put in even more cash to have more equity to start with
        (or both). In either case, this is known as <strong>refinancing</strong>.
      </p>

      <p>
        Refinancing may or may not consider the current market value of the home,
        but it basically works like taking an entire fresh mortgage from the
        start – but with a new interest rate and new down payment. Refinancing is
        very common whenever the prevailing interest rates go down.
      </p>

      <Quiz questions={quizQuestions} />
    </article>
  );
}
