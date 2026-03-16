import { Quiz } from "@/components/content/quiz";
import type { QuizQuestion } from "@/data/types";

const quizQuestions: QuizQuestion[] = [
  {
    question: "What is a credit card?",
    options: [
      "A loan without collateral",
      "A type of debit card",
      "A form of secured credit",
      "A type of prepaid card",
    ],
    correctIndex: 0,
  },
  {
    question:
      "What are some advantages of using credit cards instead of debit cards?",
    options: [
      "Credit cards often offer cash back and other rewards for most purchases.",
      "Credit cards have lower transaction fees than debit cards.",
      "Credit cards are accepted less widely than debit cards.",
      "Credit cards do not have any interest charges.",
    ],
    correctIndex: 0,
  },
  {
    question: "What is a balance transfer?",
    options: [
      "When you move your debt from one credit card to another.",
      "When you take money out of an ATM using your credit card.",
      "When you purchase something using your credit card.",
      "When you pay off your credit card balance in full every month.",
    ],
    correctIndex: 0,
  },
  {
    question: "What is a grace period?",
    options: [
      "The amount of time you have to pay off your balance after you receive your credit card bill.",
      "The amount of time you have to pay off your balance before you are charged interest.",
      "The amount of time you have to pay off your balance before your credit limit is lowered.",
      "Both A and B",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the CARD Act of 2009?",
    options: [
      "A federal law that bans certain types of behavior from credit card companies and gives credit card holders more tools to help keep their credit cards in good standing.",
      "A federal law that requires credit card companies to charge higher interest rates on existing balances.",
      "A federal law that allows credit card companies to charge fees for different methods of payment.",
      "A federal law that allows credit card companies to issue credit cards to people under the age of 21 without a co-signer.",
    ],
    correctIndex: 0,
  },
];

export default function CreditCardsTermsFees() {
  return (
    <article className="prose max-w-none">
      <p>
        <strong>Credit cards</strong> are one of the most common{" "}
        <strong>types of credit</strong> available. Specifically, a{" "}
        <strong>bank credit card</strong> is a form of{" "}
        <strong>revolving credit</strong>. This means you are given a credit
        limit and can borrow and repay funds repeatedly, as long as you stay
        under that limit.
      </p>

      <h2>5 Ways to Use Your Credit Card Responsibly</h2>

      <h2>Credit Cards vs Debit Cards</h2>

      <p>
        Credit cards can be used at the same places you use debit cards.
        However, some businesses, such as rental car agencies and many hotels,
        only take credit cards because they know your credit card works as a
        line of credit.
      </p>

      <h3>Advantages over Debit Cards</h3>
      <ul>
        <li>
          Your debit card may have a transaction limit or transaction fees;
          credit cards typically do not.
        </li>
        <li>
          Credit cards often offer cash back and other rewards for most
          purchases.
        </li>
        <li>
          Credit cards are accepted more widely than debit cards, especially
          while traveling overseas.
        </li>
        <li>
          Using your credit card will build your credit history, which can lower
          your interest rate and increase your credit limit on other loans.
        </li>
        <li>
          You can float credit card purchases, using it as a short-term loan
          before your next paycheck.
        </li>
      </ul>

      <h3>Disadvantages over Debit Cards</h3>
      <ul>
        <li>
          If you miss your grace period, your purchases will be charged
          interest, making them more expensive.
        </li>
        <li>
          Since you do not need to pay the full balance every month, it makes it
          easier to over-spend.
        </li>
        <li>
          If you start to fall behind on payments, it can be very difficult to
          escape credit card debt.
        </li>
        <li>
          Credit card billing cycles are usually 20-25 days instead of one
          month, making it more difficult to schedule payments.
        </li>
      </ul>

      <h2>Credit Balance Types</h2>

      <h3>New Purchases</h3>
      <p>
        New purchases are the things you have bought using your credit card
        during the current billing cycle. You will not be charged interest on
        this balance until the end of your grace period.
      </p>

      <h3>Balance Transfers</h3>
      <p>
        A balance transfer occurs when you move your debt from one credit card
        to another. Sometimes people do this because the interest rate is lower.
      </p>

      <h3>Cash Advances</h3>
      <p>
        Cash advances occur when you take money out of an ATM using your credit
        card. This is the most expensive type of charge because cash advances
        typically do not have a grace period and are charged interest at a
        higher rate.
      </p>

      <h2>How Interest is Calculated</h2>
      <p>
        Different credit cards calculate the interest you owe differently. The
        two most common methods are a daily balance and an average daily
        balance. All methods include knowing the credit card balance, the{" "}
        <strong>Annual Percentage Rate (APR)</strong>, and the length of the
        billing cycle.
      </p>

      <h3>Grace Period</h3>
      <p>
        Every credit card has a grace period, usually about 21 days. If you pay
        off any new purchases during the grace period, you will not be charged
        interest for those purchases.
      </p>

      <h2>Minimum Payments</h2>
      <p>
        As long as you owe money on your credit card, you will have a minimum
        payment every month. Making only the minimum payment each month is the
        longest way to pay off credit card debt and results in the highest
        amount you pay in interest.
      </p>

      <h2>The CARD Act of 2009</h2>
      <p>
        In 2009, the federal government passed the Credit Card Accountability,
        Responsibility, and Disclosure Act of 2009 which bans certain types of
        behavior from credit card companies.
      </p>

      <h3>Challenge Questions</h3>
      <ol>
        <li>What is the difference between credit and debit cards?</li>
        <li>How does a credit card company make its money?</li>
        <li>How can credit cards help or hurt you financially?</li>
        <li>In your own words, explain what the Card Act of 2009 is.</li>
      </ol>

      <Quiz questions={quizQuestions} />
    </article>
  );
}
