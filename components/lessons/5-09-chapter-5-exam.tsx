'use client';

import PopQuiz from '@/components/quiz/PopQuiz';

const chapter5ExamQuestions = [
  {
    id: 1,
    question: 'If you have two stocks, one gaining value and the other losing, what should your first reaction be?',
    options: [
      'Sell the winner to lock in profit, hold the loser until it regains value',
      'Sell the loser and buy more of the winner',
      'Sell the loser and start researching other stocks',
    ],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: 'If your stock falls by 20%, how much gains do you need to break even?',
    options: ['Less than 20%', 'Exactly 20%', 'More than 20%'],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: 'If your stock rises by 50%, how much more gains do you need to double your original investment?',
    options: ['Less than 50%', 'Exactly 50%', 'More than 50%'],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: 'True or False - Investing requires patience with underperforming stocks, investors should not be too quick to sell off immediately',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "If your limit-sell price triggers, but you see the stock's price is still rising, you should....",
    options: [
      'Buy more of this stock',
      'Short sell the stock because it is over-valued',
      'Nothing for at least a few days',
    ],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: "If your stop sell price triggers, but you see the stock's price looks to be in a trough and starting to recover, you should...",
    options: [
      'Buy low - buy the stock back immediately so it returns to your portfolio',
      'Assume it is a temporary recovery and short sell the stock',
      'Nothing for at least a few days',
    ],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: 'When looking back at stock sells done in the heat of the moment, most investors think...',
    options: [
      'They should have sold',
      'They should have held on to the stock longer',
      'About even opinions',
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: 'True or False - Stock investing is all about "Buying What You Know" and "Buy and Hold" strategies - showing loyalty to the stocks you buy usually pays off in the long run.',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: 'True or False - Investing is like gambling - gains and losses often come down to luck.',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: 'Capital Preservation means...',
    options: [
      'The need to grow your original investment',
      'The need to not lose your original investment',
      'The need to not lose your gains',
    ],
    correctAnswer: 1,
  },
  {
    id: 11,
    question: 'Most investment advisors recommend trailing stop orders be set at...',
    options: ['2-3%', '5-7%', '8-10%', '15-20%'],
    correctAnswer: 3,
  },
  {
    id: 12,
    question: 'True or False - Exchange Traded Funds are a good way to diversify a portfolio',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: 'The principle of "Stock Diversification" means...',
    options: [
      'Owning many stocks',
      'Owning multiple stocks in the same sector',
      'Owning stocks across many different sectors',
      'All of the above',
    ],
    correctAnswer: 2,
  },
  {
    id: 14,
    question: 'Which of the following is an example of Sector Diversification?',
    options: [
      'Owning 1 stock in 5 different sectors each',
      'Investing in a sector-based ETF',
      'Owning stocks in multiple industries in the same sector',
      'All of the above',
    ],
    correctAnswer: 0,
  },
  {
    id: 15,
    question: "For a beginner's portfolio, which of the following is probably over-diversified?",
    options: [
      'Owning 30 individual stocks',
      'Owning 10 different sector ETFs, each of which owns hundreds of stocks',
      'Owning 5 index mutual funds that are spread across entire stock indexes',
      'None of the above',
    ],
    correctAnswer: 3,
  },
  {
    id: 16,
    question: 'At what point should you be ready to sell a stock?',
    options: [
      'When it triggers your stop orders',
      'If it is not underperforming, but it is not performing its original role in your portfolio',
      'When other stocks in the same sector are seriously out-performing it',
      'All of the above',
    ],
    correctAnswer: 3,
  },
  {
    id: 17,
    question: 'What is a "Market Top"?',
    options: [
      "When a stock's price starts to reach its short-term peak",
      'When the market as a whole starts to reach its short-term peak',
      'When your returns are "on top" of the overall market returns',
      'When analysts as a whole predict a bubble',
    ],
    correctAnswer: 1,
  },
  {
    id: 18,
    question: 'If volume is slowly increasing as the price goes up, it means...',
    options: [
      'Market sentiment is growing',
      'Market sentiment is falling',
      'It may be a mania',
      'It may be a crash',
    ],
    correctAnswer: 0,
  },
  {
    id: 19,
    question: 'If the volume is suddenly increasing, and price is going up...',
    options: [
      'Market sentiment is growing',
      'Market sentiment is falling',
      'It may be a mania',
      'It may be a crash',
    ],
    correctAnswer: 2,
  },
  {
    id: 20,
    question: 'Which of the following is the best way to stick to an exit strategy?',
    options: [
      'Trailing stop orders',
      'Limit buy orders',
      'Checking your portfolio daily',
      '"Buy and Hold" - do not plan to sell',
    ],
    correctAnswer: 0,
  },
];

export default function Chapter5Exam(): JSX.Element {
  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-4">Chapter 5 Exam</h1>
      <p className="my-3 leading-relaxed">
        Complete the following exam to test your knowledge of Chapter 5 concepts on selling strategies, diversification, and exit strategies.
      </p>

      <div className="not-prose mt-8">
        <PopQuiz
          lessonId="chapter-5-exam"
          questions={chapter5ExamQuestions}
          title="Chapter 5 Exam"
          timePerQuestion={60}
        />
      </div>
    </article>
  );
}
