'use client';

import PopQuiz from '@/components/quiz/PopQuiz';

const chapter7ExamQuestions = [
  {
    id: 1,
    question: "True or False - A breakout occurs when a stock's price moves up quickly above a former support line?",
    options: ['True', 'False'],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: 'True or False - Technical Analysis is for day trading?',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: 'What do all stock charts have in common?',
    options: [
      'Price is on the vertical axis and time is on the horizontal axis',
      'Time is on the vertical axis and price is on the horizontal axis',
      'Price is on the vertical axis and trading volume is on the horizontal axis',
      'The data is always based on opening prices',
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: 'What does OHLC stand for?',
    options: [
      'Open High Liquidity Close',
      'Opportunity High Low Chart',
      'Open High Low Close',
      'Opportunity High Liquidity Cost',
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: 'What does time horizon mean?',
    options: [
      'The y-axis in all technical analysis charts',
      'The period one expects to hold an investment until they need the money back',
      'A retirement investment strategy',
      'The duration that investors are actively trading their assets',
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: 'How do you recognize the Cup with Handle pattern?',
    options: [
      'There is a deep V-shape to the cup',
      'The handle tends to rise abruptly',
      'The cup always precedes the handle',
      'Investors buy at the bottom of the cup formation',
    ],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: 'What does the Cup with Handle pattern show?',
    options: [
      'A continuation of a more "bearish" market sentiment',
      'A continuation of a more "bullish" market sentiment',
      'The lowest amount a seller would be willing to take for a share of a security.',
      'The highest amount a buyer would be willing to pay for a share of a security.',
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: 'Which of the following is not a chart style introduced in this course?',
    options: ['Mountain Chart', 'Renko Chart', 'Volume Chart', 'Candlestick Chart'],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: 'What does the upright formation of the Head and Shoulders indicate?',
    options: [
      'The Left Shoulder',
      'The Neckline',
      'Prices will rise after the formation is complete',
      'Prices will fall after the formation is complete',
    ],
    correctAnswer: 3,
  },
  {
    id: 10,
    question: 'When reading a stock chart, what is plotted along the horizontal axis?',
    options: ['Time', 'Price', 'Volume', 'Investor Sentiment'],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: 'True or False - Is it better to buy at the resistance level?',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 1,
  },
  {
    id: 12,
    question: 'True or False - Is it better to sell at the support level?',
    options: ['TRUE', 'FALSE'],
    correctAnswer: 1,
  },
  {
    id: 13,
    question: 'A Double Bottom looks like what?',
    options: ['A "W" Shape', 'An "M" Shape', 'Head with Shoulders pattern', 'B and C'],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: 'What does the logarithmic scale help show you?',
    options: [
      'A better visual of how the price will change over the next day',
      'A better visual of how the price will change over the next month',
      'A better visual of the percentage change in trading volume',
      'A better visual of the percentage change in the stock price',
    ],
    correctAnswer: 3,
  },
  {
    id: 15,
    question: 'What are Wedges and Flags in a stock chart?',
    options: [
      'A triangular shape formed by the intersection of two trendlines',
      'A price below the current market price',
      'A technical analysis tool to measure the highs and lows of a security price relative to previous trade data',
      'A measure of risk versus reward',
    ],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: 'What does the upside-down formation of the Head and Shoulders indicate?',
    options: [
      'A resistance line and support line have switched',
      'The change of market sentiment from bearish to bullish',
      'Left Shoulder, Head, Right Shoulder, Neckline',
      'The buyers are starting to lose power',
    ],
    correctAnswer: 1,
  },
  {
    id: 17,
    question: 'In a Candlestick chart, which part has the most emphasis?',
    options: ['High', 'Open', 'Close', 'Low'],
    correctAnswer: 2,
  },
  {
    id: 18,
    question: 'What does a Double Top indicate?',
    options: [
      'A new price floor',
      'The longer the duration of the trading range',
      'A market bottom',
      'A market top',
    ],
    correctAnswer: 3,
  },
  {
    id: 19,
    question: 'What will a Flag on a stock chart indicate?',
    options: [
      'Identifying a "relative" high or low price over a specific period',
      'The relative strength or weakness of a security you are considering putting into or removing from your portfolio',
      'After prices consolidate in a down trend, there will be a breakout point where they start to rise',
      'A bearish signal occurs when prices break below the lower trendline.',
    ],
    correctAnswer: 2,
  },
  {
    id: 20,
    question: 'What does the Morning Star formation indicate?',
    options: [
      'A bearish reversal pattern',
      'A bullish reversal pattern',
      'A bullish pattern',
      'A bearish pattern',
    ],
    correctAnswer: 1,
  },
  {
    id: 21,
    question: 'What do Fibonacci ratios often display?',
    options: [
      'The points at which a market price reverses its current position or trend',
      'How much a company is earning compared to the price of the stock',
      'It indicates that the stock hit a bottom market price',
      'An indication that the bulls are losing interest in the stock',
    ],
    correctAnswer: 0,
  },
  {
    id: 22,
    question: 'What is the MACD used for?',
    options: [
      'To have your profits and losses cancel out, a 0% return.',
      'To take advantage of price differences in at least two different markets',
      'To track the emotions of traders',
      'To show trends following the characteristics of this centered oscillator',
    ],
    correctAnswer: 3,
  },
  {
    id: 23,
    question: 'What do the Bollinger Bands measure?',
    options: ['The growth of the S&P 500', 'Investor Sentiment', 'Volatility', 'The rate of inflation'],
    correctAnswer: 2,
  },
  {
    id: 24,
    question: 'What is a moving average?',
    options: [
      'A line on a chart that smoothes out the recent price history over a certain period',
      'A line on a chart that smoothes out the recent price history over the last month',
      'A line on a chart that smoothes out the price predictions over a certain period',
      'A line on a chart that smoothes out the price predictions over the last month',
    ],
    correctAnswer: 0,
  },
  {
    id: 25,
    question: 'What is the Relative Strength Index (RSI) used for?',
    options: [
      'To identifying when an asset is oversold or overbought',
      'It indicates the direction and strength of a price movement',
      "To smooth out returns so it's easier to understand when comparing alternative investments",
      'To determine the spread of a data set when compared to the mean value',
    ],
    correctAnswer: 0,
  },
  {
    id: 26,
    question: 'What does it mean when the RSI rises above 50?',
    options: [
      'The average gains are higher than average losses',
      'The average gains are lower than average losses',
      'There are a lot of sellers at this point',
      'Prices will retrace back down to a prior support level',
    ],
    correctAnswer: 0,
  },
  {
    id: 27,
    question: 'What does MACD stand for?',
    options: [
      'Market Average Connection/Deflection',
      'Market Average Confluence/Disparity',
      'Moving Average Conflict/Discrepancy',
      'Moving Average Convergence/Divergence',
    ],
    correctAnswer: 3,
  },
  {
    id: 28,
    question: 'Which candle formation occurs when the open and close are at the high of the day?',
    options: ['Spinning Top', 'Hammer', 'Dragon Doji', 'Doji'],
    correctAnswer: 2,
  },
  {
    id: 29,
    question: "What happens when a stock's price breaks through a resistance line?",
    options: [
      'The price reaches a new low',
      'The price reaches a new high',
      'The price retraces back down',
      'The price retraces back up',
    ],
    correctAnswer: 1,
  },
  {
    id: 30,
    question: "What happens when a stock's price breaks through a support line?",
    options: [
      'The price reaches a new low',
      'The price reaches a new high',
      'The price retraces back down',
      'The price retraces back up',
    ],
    correctAnswer: 0,
  },
];

export default function Chapter7Exam(): JSX.Element {
  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-4">Chapter 7 Exam</h1>
      <p className="my-3 leading-relaxed">
        Complete the following exam to test your knowledge of Chapter 7 concepts on technical analysis, chart patterns, and indicators.
      </p>

      <div className="not-prose mt-8">
        <PopQuiz
          lessonId="chapter-7-exam"
          questions={chapter7ExamQuestions}
          title="Chapter 7 Exam"
          timePerQuestion={60}
        />
      </div>
    </article>
  );
}
