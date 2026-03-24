'use client';

import PopQuiz from '@/components/quiz/PopQuiz';

const chapter4ExamQuestions = [
  {
    id: 1,
    question: 'An investor is getting ready to put their first $1000 in savings to work, but this money is important to reserve as a cushion in case they need it for a real-life emergency. What kind of investment should they focus on?',
    options: [
      'An index ETF',
      'High-growth tech stocks',
      'Stable dividend-paying stocks',
      'Precious Metals',
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: 'Which of the following is the least-risky investment?',
    options: ['Cash', 'Money Market Accounts', 'Healthcare Stocks', 'Index ETFs'],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: 'If you invest $100, and 2 years later have earned $50 in profit, what is your annual return?',
    options: ['0.25', '0.5', '0.75', '1'],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: 'Which of the following options has the least risk?',
    options: [
      'An investment that you expect to rise by 10% or fall by 8%',
      'An investment you expect could rise by 3% or fall by 1%',
      'A savings account that pays 1% interest',
      'All of these have the same risk',
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: 'A well-diversified portfolio should have at least...',
    options: ['3 stocks', '5 stocks', '10 stocks', '20 stocks'],
    correctAnswer: 3,
  },
  {
    id: 6,
    question: 'True or False - A High-Growth portfolio would not include any low-risk stocks, since low risk is always low reward',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: 'True or False - A high Sharpe Ratio always mean a wiser investment',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: 'True or False - A portfolio that had very little variation, but did not perform better than a "risk-free rate", would have a high Sharpe Ratio',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: 'True or False - When comparing two stocks with similar returns, you would prefer the option with the higher Sharpe Ratio',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: 'A "KISS" investor would probably use...',
    options: ['Buy And Hold', 'Buy What You Know', 'Dollar Cost Averaging', 'Money Market Funds'],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: 'True or False - "Buy What You Know" investors will usually investigate most of their stocks using a stock screener',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 1,
  },
  {
    id: 12,
    question: 'A "Buy What You Know" would most likely invest in...',
    options: [
      'The company they work for',
      'A company that owns a store that seems busier than usual',
      'A company they found in a stock screener with great Earnings Per Share',
      'A company they learned about through a detailed investing newsletter',
    ],
    correctAnswer: 1,
  },
  {
    id: 13,
    question: 'Which investor champions "Buy and Hold"?',
    options: ['Warren Buffett', 'Peter Lynch', 'Mark Cuban', 'Elon Musk'],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: 'Which investor champions "Buy What You Know"?',
    options: ['Warren Buffett', 'Peter Lynch', 'Mark Cuban', 'Elon Musk'],
    correctAnswer: 1,
  },
  {
    id: 15,
    question: 'A "Ten-Bagger" refers to a stock that...',
    options: ['Decreases 10%', 'Increases 10%', 'Increases 100%', 'Increases 1000%'],
    correctAnswer: 3,
  },
  {
    id: 16,
    question: 'If you need a stock with specific characteristics, like a high dividend yield, where would you start your search?',
    options: [
      'Looking up companies near me that I know',
      'A stock screener',
      'Investing newsletters that talk about dividends',
      'Investing podcasts talking about current trends',
    ],
    correctAnswer: 1,
  },
  {
    id: 17,
    question: 'Which of the following is a "Closed-Ended Fund"?',
    options: ['An ETF', 'A mutual fund', 'A money market account', 'A Certificate of Deposit'],
    correctAnswer: 0,
  },
  {
    id: 18,
    question: 'Which of the following companies would most likely pay the highest dividend?',
    options: ['A biotech stock', 'An index ETF', 'A healthcare stock', 'A utility stock'],
    correctAnswer: 3,
  },
  {
    id: 19,
    question: 'Which of the following is the broadest category when searching?',
    options: ['Sector', 'Industry', 'Market', 'Company Size'],
    correctAnswer: 2,
  },
  {
    id: 20,
    question: 'True of False - Buying an Index Fund is a good way to diversify your portfolio',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 0,
  },
];

export default function Chapter4Exam(): JSX.Element {
  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-4">Chapter 4 Exam</h1>
      <p className="my-3 leading-relaxed">
        Complete the following exam to test your knowledge of Chapter 4 concepts on portfolio management, investment strategies, and risk assessment.
      </p>

      <div className="not-prose mt-8">
        <PopQuiz
          lessonId="chapter-4-exam"
          questions={chapter4ExamQuestions}
          title="Chapter 4 Exam"
          timePerQuestion={60}
        />
      </div>
    </article>
  );
}
