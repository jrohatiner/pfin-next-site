'use client';

import PopQuiz from '@/components/quiz/PopQuiz';

const chapter2ExamQuestions = [
  {
    id: 1,
    question: 'If you currently own a stock, the ____ is the price you would be willing to sell it for',
    options: ['Bid', 'Ask', 'Equilibrium', 'IPO'],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: 'What is "Total Demand"?',
    options: [
      'The total quantity that buyers would be willing to buy at a specific price',
      'The total quantity sellers would be willing to sell at a given price',
      'The price where supply equals demand',
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: 'An "Efficient Equilibrium" requires...',
    options: [
      'Buyers and sellers have full information on bids and asks',
      'More sellers than buyers',
      'More buyers than sellers',
      'Quantity to be higher than zero',
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: 'As the price goes up, the supply...',
    options: ['Increases', 'Decreases', 'Depends on the Demand'],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: 'A stock exchange...',
    options: [
      'Sets the rules for trading and what information companies need to share with investors',
      'Are usually run by the government to enforce trading laws',
      'Is a place where regular investors gather to buy and sell stock',
      'Takes deposits from investors to allow them to buy stock',
    ],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: 'Which of the following would NOT be in the master order book?',
    options: [
      'The names of individual investors who are buying stock',
      'All current "bid" prices',
      'All current "ask" prices',
      'The most recent prices of trades',
    ],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: 'If you live in the United States, how could you buy Nintendo stock?',
    options: ['Over-The-Counter', 'NYSE', 'CBOE', 'CME'],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: '"Wall Street" got its name because...',
    options: [
      'It was built next to a wall',
      'James Wall, the founder of the stock exchange',
      'Because it acted as a "wall" between rich investors and poor workers',
    ],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "Today's New York Stock Exchange began as a place where investors traded...",
    options: ['Revolutionary war bonds', 'Civil war bonds', 'Railroad stocks', 'Tulips'],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: 'Which of the following buildings has never been on Wall Street?',
    options: [
      'New York City Hall',
      'Capital of the United States',
      'New York Stock Exchange',
      'Supreme Court',
    ],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: 'Which industry fueled the first massive boom of stock trading in New York?',
    options: ['Telecommunications (Telegraph)', 'Coal mining', 'Textiles', 'Railroads'],
    correctAnswer: 3,
  },
  {
    id: 12,
    question: 'The largest US options exchange is in which city?',
    options: ['New York', 'Boston', 'Chicago', 'Los Angeles'],
    correctAnswer: 2,
  },
  {
    id: 13,
    question: 'A "Private" company....',
    options: [
      'Is not listed on a stock exchange',
      'Does not have any stock',
      'Are always small and trying to grow',
      'All of the above',
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: 'After shares are sold in an IPO, how much money does the original company get when stocks are traded on a secondary market?',
    options: [
      "Over 75% of the stock's value",
      "About 50% of the stock's value",
      "Around 5% of the stock's value",
      'Nothing',
    ],
    correctAnswer: 3,
  },
  {
    id: 15,
    question: 'Why do companies go public?',
    options: [
      'To raise cash by selling stock',
      'To raise their profile and show they are a "big deal"',
      'To make their founders rich and easier for them to "cash out"',
      'So they are less dependent on big banks',
    ],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: 'The business cycle refers to...',
    options: [
      'How a single business is profitable some times of the year, and struggles other times of the year',
      'An economic phenomenon when the markets as a whole expand and contract',
      'A cycle of bull and bear markets caused by bubbles',
      'Are not something you can control, so not worth worrying about',
    ],
    correctAnswer: 1,
  },
  {
    id: 17,
    question: "Which is not one of the four stages of a stock's cycle?",
    options: ['Accumulation', 'Markup', 'Selloff', 'Markdown'],
    correctAnswer: 2,
  },
  {
    id: 18,
    question: 'A "Trough" in the business cycle refers to...',
    options: [
      'The low point before it starts increasing',
      'The high point before it starts falling',
      'The period of growth',
      'The period of contraction',
    ],
    correctAnswer: 0,
  },
  {
    id: 19,
    question: 'A "Bull Market" is...',
    options: [
      'A period of uninterrupted increases in stock prices',
      "A period of long growth in a single stock's price",
      'A period of general investor optimism that prices will increase',
    ],
    correctAnswer: 2,
  },
  {
    id: 20,
    question: 'If an analyst is "Bearish", they are signaling...',
    options: [
      'They think a recession will start soon',
      'We are near a market trough',
      'A single stock is probably overvalued',
      'We are heading for a crash',
    ],
    correctAnswer: 2,
  },
  {
    id: 21,
    question: 'An index ETF will be the safest choice during...',
    options: ['A bull market', 'A bear market'],
    correctAnswer: 1,
  },
  {
    id: 22,
    question: 'How does a brokerage act as a custodian?',
    options: [
      'Helping you make trades by sending them to the stock market',
      'Cleaning up after your mess after you make a big loss',
      'By loaning money to investors to get leverage',
      'By holding your stocks and keeping records',
    ],
    correctAnswer: 3,
  },
  {
    id: 23,
    question: 'The first true "Discount Brokerage" was...',
    options: ['Charles Schwab', 'Robinhood', 'Merrill Lynch', 'Warren Buffett'],
    correctAnswer: 0,
  },
  {
    id: 24,
    question: 'Balancing risk and reward, which security type has been the strongest over the last 100 years?',
    options: ['Stocks', 'Bonds', 'Precious Metals', 'Real Estate'],
    correctAnswer: 0,
  },
  {
    id: 25,
    question: 'True or False - Stock investing always has the highest returns of any investment type',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 1,
  },
  {
    id: 26,
    question: 'True or False - Professionally-managed mutual funds usually out-perform the stock market as a whole',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 1,
  },
  {
    id: 27,
    question: 'True or False - The S&P 500 has had a positive return every year for the last 100 years',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 1,
  },
  {
    id: 28,
    question: 'What is one advantage of stocks over cryptocurrencies?',
    options: [
      'More transparency in research, because stock exchanges require disclosure of a lot of information',
      'Easier to predict price movements',
      'The prices tend to be more stable and less likely to spike or crash',
      'All of the above',
    ],
    correctAnswer: 0,
  },
  {
    id: 29,
    question: 'Which of the following is a service offered by most discount brokers?',
    options: [
      'Research tools',
      'Mutual fund advice',
      'A licensed broker you can call',
      'Percentage commissions on stock trades',
    ],
    correctAnswer: 0,
  },
  {
    id: 30,
    question: 'Trading "On Margin" refers to...',
    options: [
      'Trading stocks over-the-counter',
      'Borrowing money from your broker to invest',
      'Trading a very small amount',
      'Trading in a brokerage account',
    ],
    correctAnswer: 1,
  },
];

export default function Chapter2Exam(): JSX.Element {
  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-4">Chapter 2 Exam</h1>
      <p className="my-3 leading-relaxed">
        Complete the following exam to test your knowledge of Chapter 2 concepts on stock markets, exchanges, and trading fundamentals.
      </p>

      <div className="not-prose mt-8">
        <PopQuiz
          lessonId="chapter-2-exam"
          questions={chapter2ExamQuestions}
          title="Chapter 2 Exam"
          timePerQuestion={60}
        />
      </div>
    </article>
  );
}
