import { Quiz } from "@/components/content/quiz";
import type { QuizQuestion } from "@/data/types";

const quizQuestions: QuizQuestion[] = [
  {
    question: "When should you start making a Career Plan?",
    options: [
      "Now",
      "When you finish school",
      "Before applying for your first job",
      "Careers naturally evolve and should not be over-planned",
    ],
    correctIndex: 0,
  },
  {
    question: "Why would you have a separate 'Spending Account'?",
    options: [
      "If you tend to go shopping a lot before checking your budget",
      "If you have poor impulse control and usually spend over-budget",
      "To make it easier to pay off your credit card",
      "To facilitate online shopping",
    ],
    correctIndex: 1,
  },
  {
    question: "What percentage of your income should typically go to housing?",
    options: ["20%", "30%", "40%", "50%"],
    correctIndex: 1,
  },
  {
    question: "What should you keep in your emergency fund?",
    options: [
      "1 month of income",
      "3 to 6 months of income",
      "Your entire annual salary",
      "Only money for unexpected medical costs",
    ],
    correctIndex: 1,
  },
  {
    question:
      "What percentage of income do personal finance experts recommend you save?",
    options: ["5-10%", "10-20%", "20-30%", "Over 50%"],
    correctIndex: 1,
  },
];

export default function StrategyBuildWealthNotDebt() {
  return (
    <article className="prose max-w-none">
      <p>
        Building wealth is a long-term financial goal that provides financial
        security, and sets the stage for a comfortable retirement. Although
        there is no secret formula for becoming wealthy, the process involves
        developing a solid financial plan, sticking to it, and creating a
        sustainable strategy that grows your wealth over time.
      </p>

      <p>
        This typically requires dedication, patience, and discipline and can be
        achieved by incorporating smart saving and investing strategies, and
        making wise financial decisions. You probably already heard about
        budgeting, spending plans, savings strategies, credit cards, and all
        points in between. Now, we'll put everything together to make a plan to
        build lifelong wealth.
      </p>

      <h2>Manage Your Income</h2>

      <p>
        Your saving and spending will always depend on how much income you can
        start with. Your career goals and personal finance goals are the same
        thing, so always start by looking at your career path.
      </p>

      <h3>Making a Career Plan</h3>

      <p>
        Interviewers often ask, "Where do you see yourself in 5 years?" You
        should always have an answer to this question, because it helps build a
        clear roadmap forward.
      </p>

      <p>
        Make a <strong>career plan</strong> by defining your ideal job and
        salary, and set a series of obtainable goals for the next 5 years. Start
        by looking at job postings you want to have in the future for your dream
        job or ideal career. These job postings have all the information you need
        to make an effective career plan:
      </p>

      <ul>
        <li>
          <strong>Experience Requirements</strong>: use these to define the
          stepping stones for jobs between now and then.
        </li>
        <li>
          <strong>Skill/Education Requirements</strong>: see what education or
          training you need to obtain, or skills you need to build, outside your
          day job.
        </li>
        <li>
          <strong>Salary offers</strong>: usually included in job postings, this
          will give you an idea of what kind of lifestyle you are building
          towards. This helps put a cap on the debt you take on today, since it
          gives a good way to see your ability to pay it off in the future.
        </li>
      </ul>

      <p>
        Once you do this for your dream job, rinse and repeat for each of the
        stepping stone jobs you need to meet all the experience and education
        requirements to get there. Before you know it, you will have a
        fully-fleshed out career plan with some specific actions you can take
        today to get there.
      </p>

      <h3>Making a Debt Plan</h3>

      <p>
        Once you have an idea of how your career can evolve, you know how much
        space you have for debt. Student loans are often the first type of debt
        that individuals take on to fulfill the education requirements for their
        career path. Research the different types of loans, compare the interest
        rates, and have a repayment strategy in place before choosing which
        programs or schools you apply to.
      </p>

      <p>
        You can estimate future pay by looking at job offers for entry-level
        positions in your desired field. That way you can budget for how long it
        will take you to pay off your student loans after you graduate and get
        your first job!
      </p>

      <h2>Use Your Spending Plan</h2>

      <p>
        Dedicate twenty minutes every month to review your spending by doing a
        quick account reconciliation to update your spending plan. The key to{" "}
        <strong>financial success</strong> is knowing where your money is, how
        it got there, and where it's going next. No matter how good you are at
        keeping track of numbers in your head; there is no substitute to
        reviewing your actual spending habits in your bank account, or in a
        spreadsheet.
      </p>

      <h2>Your Four Accounts</h2>

      <p>
        There is a secret way to effortlessly build wealth, while barely paying
        attention. Split your income automatically, and keep separate accounts
        for your monthly cash, versus your savings. Most adults with healthy
        finances use four accounts, but it may be more or less depending on your
        personal situation.
      </p>

      <h3>Account One: Checking Account</h3>

      <p>
        A <strong>checking account</strong> is a type of bank account that
        allows the account holder to deposit and withdraw funds frequently and
        provides easy access to your money through various means, such as
        checks, your debit card, ATMs, and online banking.
      </p>

      <p>
        Your paycheck is deposited in this account, and this is the account you
        use for paying all your bills or when out shopping. Setting up automatic
        payments from your checking account to pay for your monthly bills is a
        reliable way of ensuring you never miss a payment.
      </p>

      <h3>Account Two: Savings Account</h3>

      <p>
        A <strong>savings account</strong> is where you can securely store money
        that you don't need immediate access to. This account is linked to your
        checking account. Setting up automatic transfers from your checking
        account to a regular savings account is an effective way to save money.
      </p>

      <p>
        With this approach, the money is transferred automatically from your
        checking account to your savings account every time you receive a
        paycheck. By setting up automatic transfers, you can reach your saving
        goals without even thinking about it. This will help with your{" "}
        <strong>pay-yourself-first</strong> savings strategy, by making sure
        your wealth is always growing effortlessly.
      </p>

      <h3>Account Three: Investing Account</h3>

      <p>
        A <strong>brokerage account</strong> allows individuals to buy and sell
        securities like stocks, bonds, ETFs, and mutual funds through a
        brokerage firm using their savings. There are two types of brokerage
        firms; full-service and online discounted brokerages.{" "}
        <strong>Full-service brokers</strong> offer comprehensive investment
        management services, while <strong>online discounted brokers</strong>{" "}
        offer reduced commission rates and limited investment advice.
      </p>

      <p>
        A certain percentage of your savings should be invested in the markets;
        which will have a higher return than what you'll receive from a normal
        savings account. No matter how you choose to build your investment
        portfolio, investing your savings is the most effective way to help it
        grow.
      </p>

      <h3>Account Four: Emergency Fund</h3>

      <p>
        This is either part of your savings account, or an entirely separate
        bank account set aside for emergencies. Your <strong>emergency fund</strong>{" "}
        should have 3 to 6 months of income in it, ready to be withdrawn in case
        you have a monetary emergency. The purpose of this fund is to make sure
        that you don't steal from yourself by withdrawing from your savings.
      </p>

      <h3>Account Five: Spending Account (Optional)</h3>

      <p>
        If you struggle to control your spending, you may want to have a
        secondary checking account, specifically set aside with your spending
        money. Here's how it works:
      </p>

      <ol>
        <li>
          Use your account reconciliation to determine the approximate amount of
          bills you have each month.
        </li>
        <li>
          Set-up your main checking account to transfer funds to your savings
          account, and to pay all your regular bills automatically.
        </li>
        <li>
          Transfer 80% of the money left over to this new spending account (also
          a checking account).
        </li>
        <li>
          Disable overdraft protection on your spending account to ensure you
          cannot over-draw.
        </li>
        <li>
          Use this account when you go out with friends, buy things online, pay
          for groceries, and any other spending you do throughout the month.
        </li>
      </ol>

      <p>
        Your spending account is the debit card you keep with you. If you're
        using a separate account, leave your normal debit card and credit card
        locked up at home, so you aren't tempted to spend beyond what you
        budgeted.
      </p>

      <h3>Your Credit Card</h3>

      <p>
        A <strong>credit card</strong> is a payment card that is issued by
        financial institutions allowing the cardholder to borrow money in order
        to make purchases or pay for services. However, it is crucial to
        remember that your credit card serves as an extension of your checking
        or spending account and not as extra money. One of the primary functions
        of a credit card is to build your credit score. It's still important to
        avoid spending more than you can pay off immediately with your checking
        or spending account to avoid debt and high-interest payments.
      </p>

      <h2>Budgeting Guidelines</h2>

      <p>
        It's hard to know exactly how much money to allocate to different
        expenses. So, use this as a guideline to help you decide how much you
        spend on each area of your life. These guidelines are based on your net
        (after-tax) income.
      </p>

      <h3>Housing</h3>

      <p>
        Generally, personal finance experts suggest that individuals spend no
        more than 30% of their net income on housing, which includes rent, or
        mortgage payments. This percentage ensures you have enough income to
        cover other essential expenses.
      </p>

      <h3>Savings</h3>

      <p>
        Personal finance experts generally recommend that individuals save at
        least 10-20% of their income each month, which includes contributions to
        retirement savings accounts, emergency funds, and general savings
        accounts. Of these savings, transfer 80% to your investing or brokerage
        account, keeping the rest in your savings account.
      </p>

      <h3>Bills and Groceries</h3>

      <p>
        Miscellaneous bills and groceries will take up another 30% of your
        income, this includes items like electricity, gas, water, transportation,
        your cellphone bill, and internet. This also includes all your insurance
        and car payments.
      </p>

      <h3>Other Spending</h3>

      <p>
        After everything else is spent, you should still have at least another
        20% of income left for anything else you want. Going out with friends,
        saving for holiday gift-giving, and buying yourself something nice
        should all fall into this group.
      </p>

      <h2>Challenge Questions</h2>

      <ol>
        <li>Why is it important to have a career plan in order to build wealth?</li>
        <li>
          How can splitting your income into separate accounts, such as
          checking, savings, investing, and emergency funds, help to build
          long-term wealth?
        </li>
        <li>
          How does regularly reviewing and updating your spending plan help to
          ensure financial success over time?
        </li>
        <li>
          Does earning more money guarantee to build wealth? If so, why? If not,
          why not?
        </li>
      </ol>

      <Quiz questions={quizQuestions} />
    </article>
  );
}
