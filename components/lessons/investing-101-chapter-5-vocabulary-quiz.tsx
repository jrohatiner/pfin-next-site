'use client';

import PopQuiz from '@/components/quiz/PopQuiz';

const chapter5Questions = [
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
    question: 'If your limit-sell price triggers, but you see the stock\'s price is still rising, you should...',
    options: [
      'Buy more of this stock',
      'Short sell the stock because it is over-valued',
      'Nothing for at least a few days',
    ],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: 'Capital Preservation means...',
    options: [
      'The need to grow your original investment',
      'The need to not lose your original investment',
      'The need to not lose your gains',
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: 'Most investment advisors recommend trailing stop orders be set at...',
    options: ['2-3%', '5-7%', '8-10%', '15-20%'],
    correctAnswer: 3,
  },
  {
    id: 8,
    question: 'True or False - Exchange Traded Funds are a good way to diversify a portfolio',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 0,
  },
  {
    id: 9,
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
    id: 10,
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

export default function Investing101Chapter5VocabularyQuiz() {
  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-4">Investing 101 - Chapter 5 Vocabulary Quiz</h1>
      <p className="my-3 leading-relaxed">
        Complete the following vocabulary quiz to test your knowledge of Chapter 5 concepts.
      </p>
      
      <div className="not-prose mt-8">
        <PopQuiz
          lessonId="investing-101-chapter-5"
          questions={chapter5Questions}
          title="Chapter 5 Vocabulary Quiz"
          timePerQuestion={45}
        />
      </div>
    </article>
  );
}
