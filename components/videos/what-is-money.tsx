import { Quiz } from "@/components/content/quiz";
import type { QuizQuestion } from "@/data/types";

const quizQuestions: QuizQuestion[] = [
  {
    question: "What is bartering?",
    options: [
      "Exchanging items without using money",
      "A type of currency",
      "Buying and selling stocks",
      "A negotiation technique",
    ],
    correctIndex: 0,
  },
  {
    question: "What are the three main functions of money?",
    options: [
      "Earning, saving, and investing",
      "Medium of exchange, unit of account, and store of value",
      "Borrowing, lending, and spending",
      "Budgeting, planning, and forecasting",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which type of stored value card is typically given as a gift and can only be used at one specific store?",
    options: ["Debit card", "Prepaid card", "Gift card", "Credit card"],
    correctIndex: 2,
  },
  {
    question: "What is a key advantage of using debit cards over checks?",
    options: [
      "Debit cards never require any security verification",
      "Electronic transactions are processed instantly",
      "Debit cards cannot be counterfeited",
      "Debit cards have no fees",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Are credit cards considered a form of stored value like debit cards and checks?",
    options: ["Yes, they work the same way", "No, credit cards are a form of credit/loan", "Only if you pay them off immediately", "Only when used for emergencies"],
    correctIndex: 1,
  },
];

export default function WhatIsMoney() {
  return (
    <article className="prose max-w-none">
      <p>
        Many years ago, before the concept of money existed, if an individual
        needed something they couldn't provide for themselves, they would
        exchange something they owned with someone who had it. This was called{" "}
        <strong>bartering</strong>. Every item would be traded for a different
        item. For example, if I needed eggs, I would find a chicken farmer, and
        trade their eggs for something I had, such as milk or cheese.
      </p>

      <p>
        This bartering system worked well for a while, but eventually society
        needed an easier way to keep track of how items were traded, especially
        over long distances. Certain commodities were selected because they were
        scarce and would last longer than fresh produce; such as seashells,
        grains, or precious metals. Eventually, paper money was created as a way
        to simplify exchange even further.
      </p>

      <p>
        Money has value and works as a medium of exchange because we believe it
        has value. And since money has value, we need methods of keeping it
        safe. So, rather than keeping rolls of money under the mattress or
        buried in the backyard, our financial institutions provide a means of
        storing our savings safely, while allowing us access to those funds
        whenever we need to buy something.
      </p>

      <h2>Functions of Money</h2>

      <p>
        Money has three main functions, it works as a <strong>medium of exchange</strong>, a{" "}
        <strong>unit of account</strong>, and a <strong>store of value</strong>.
      </p>

      <h3>Medium of Exchange</h3>

      <p>
        A <strong>medium of exchange</strong> means money acts as a go-between
        for everyone in the economy to help trade goods and services. If you
        were a farmer that grew corn, you might have a hard time trading your
        corn directly with a carpenter who you hired to fix your kitchen
        cabinets. Or the manufacturer of the tractor you use in the fields. The
        tailor who sewed your new winter coat would equally prefer another
        alternative to a wagon full of corn in exchange for their services. If
        the markets allow you (and everyone else) to sell your products for
        money, it means everyone has a common medium of exchange.
      </p>

      <h3>Unit of Account</h3>

      <p>
        A <strong>unit of account</strong> is the next major function of money.
        Everything that can be bought or sold is only as valuable as what
        someone else is willing to pay for it. Money exists to show what the
        exchange rate is between two different goods. If a farmer is deciding
        whether to grow corn or soybeans this year, he will ask himself, which
        one will be more valuable?
      </p>

      <p>
        Because both corn and soybeans are traded with money, he would be able
        to check the current prices for each one and focus on growing more of
        whatever is most valuable.
      </p>

      <h3>Store of Value</h3>

      <p>
        Our farmer just finished his harvest for the year, and has a silo full
        of corn that he can trade. However, he has expenses all year round;
        buying food and clothes, paying his mortgage, and all his other living
        expenses. If he were to trade just a little bit of corn for every
        purchase, the corn would rot away before the year was finished, losing
        all of its value.
      </p>

      <p>
        Instead, selling his corn for money acts as a <strong>store of value</strong>.
        Money does not expire, and he can save it up over long periods of time.
      </p>

      <h2>Types of Stored Value</h2>

      <h3>Checks</h3>

      <p>
        Checks might be the oldest form of stored value. Checks are a special
        document that banks use to transfer money from your account to the
        person or business whose name you write on the check.
      </p>

      <p>Every check includes:</p>

      <ul>
        <li>Your bank routing number: an ID number for your bank.</li>
        <li>Your bank account number: your personal ID number.</li>
        <li>Your check number: every check has an ID number.</li>
      </ul>

      <p>
        When you write a check, you also fill in the name of the person or
        company you are paying, the amount (both in numbers and written out with
        words), and the date. You can also include a memo with a reminder of
        what the payment is for.
      </p>

      <h4>Advantages of Using Checks</h4>

      <ul>
        <li>They are the safest way to send a payment by mail.</li>
        <li>
          Checks are traceable and serve as a perfect financial record to show
          the payment was received.
        </li>
      </ul>

      <h4>Disadvantages of Checks</h4>

      <ul>
        <li>
          Writing checks requires a checkbook, which very few people want to
          carry around.
        </li>
        <li>Check fraud has historically been a major cause for concern.</li>
        <li>
          Checks also take time to clear, requiring you to reconcile your bank
          account constantly.
        </li>
      </ul>

      <h3>Debit Cards</h3>

      <p>
        Debit cards are very similar to checks, and are usually tied to your
        checking account. The biggest difference is that all payments are
        controlled electronically, so transactions are usually processed
        instantly.
      </p>

      <p>
        Instead of your signature, you need a PIN number to verify your identity
        and authenticate the purchase. Debit cards may or may not be used for
        online transactions, depending on your card issuer.
      </p>

      <h4>Advantages of Debit Cards</h4>

      <ul>
        <li>
          Debit cards make financial transactions easier than using checks.
        </li>
        <li>Electronic transaction occurs almost instantly.</li>
        <li>
          The seller knows immediately that the funds were transferred or that
          the transaction was rejected.
        </li>
        <li>A unique PIN number is used to verify the rightful owner.</li>
      </ul>

      <h4>Disadvantages of Debit Cards</h4>

      <ul>
        <li>Debit cards can be counterfeited.</li>
        <li>
          Using a debit card makes it easy to over-spend since you don't see
          the money actually changing hands.
        </li>
        <li>
          This can make it possible to overdraw your account, which typically
          comes with heavy fees from your bank.
        </li>
      </ul>

      <h3>Prepaid Cards</h3>

      <p>
        Prepaid cards are usually issued by a credit card company or bank and
        are often given as gifts. To use a prepaid card, you need to charge it
        by adding funds. Either you can add cash at a kiosk for the card issuer,
        or sometimes online by transferring funds from your bank account.
      </p>

      <h4>Advantages of Prepaid Cards</h4>

      <ul>
        <li>
          Prepaid cards can be a great way for people without a credit card to
          make online transactions.
        </li>
        <li>Generally speaking, prepaid cards work as a more flexible form of cash.</li>
      </ul>

      <h4>Disadvantages of Prepaid Cards</h4>

      <ul>
        <li>
          Like cash, prepaid cards can be easily lost or stolen since they're
          not tied to you.
        </li>
        <li>
          The card issuer usually charges a fee to use the card, and if you
          maintain a balance, they may charge storage fees as well.
        </li>
      </ul>

      <h3>Gift Cards</h3>

      <p>
        Gift Cards are another form of stored value. Many stores and online
        retailers will let you convert cash into a gift card that you can use in
        their store. Gift cards usually have no fees, so they retain their value
        longer than other prepaid cards.
      </p>

      <h4>Advantages of Gift Cards</h4>

      <ul>
        <li>Gift cards are great to give as gifts.</li>
        <li>
          Because they can only be used in one location, they are less prone to
          theft and loss than other stored value cards.
        </li>
      </ul>

      <h4>Disadvantages of Gift Cards</h4>

      <ul>
        <li>
          The card itself can only be used at the place of business identified
          on the card.
        </li>
      </ul>

      <h2>Note about Credit Cards</h2>

      <p>
        Unlike these other items, credit cards are not a form of stored value
        and do not act as money. This is because credit cards are a loan (or a
        form of credit). When you make a purchase using a credit card, no value
        is being transferred from you to the place where you're spending money.
        Instead, you are creating a debt that you must pay back later with
        interest.
      </p>

      <h2>Bitcoins and Other Virtual Currencies</h2>

      <p>
        Bitcoins and virtual currencies have become very popular in the last few
        years, but it's not always easy to tell if they are a form of money in
        and of themselves, or if they are just a stored value of money. Their
        actual definition shifts based on how you, the consumer, uses them.
      </p>

      <p>
        For example, if you convert your dollars into Bitcoin and then visit a
        shop that lists their prices in Bitcoins and accepts Bitcoins as
        payment, your Bitcoin is acting like money. However, if that shop lists
        all their prices in dollars, but they also accept Bitcoin as payment,
        then your Bitcoin is acting as a stored value for dollars.
      </p>

      <h2>Challenge Questions</h2>

      <ol>
        <li>
          As technology continues to evolve in our society, is it possible that
          the way we store our money and pay for transactions will change? What
          do you think that process might look like 15 years from now?
        </li>
        <li>
          What additional security measures do you see happening in the future
          in order to keep scammers from fraudulently stealing people's money?
        </li>
        <li>
          Describe your experience with using the different financial tools you
          learned about in this lesson.
        </li>
      </ol>

      <Quiz questions={quizQuestions} />
    </article>
  );
}
