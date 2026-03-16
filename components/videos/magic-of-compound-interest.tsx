import { YouTubeEmbed } from "@/components/content/youtube-embed";
import { Quiz } from "@/components/content/quiz";
import type { QuizQuestion } from "@/data/types";

const quizQuestions: QuizQuestion[] = [
  {
    question: "What type of interest is paid by a Bond?",
    options: ["Simple Interest", "Compound Interest"],
    correctIndex: 0,
  },
  {
    question:
      "What shape is the graph of the value of an investment with compound interest?",
    options: [
      "Horizontal line",
      "Diagonal line",
      "Line curving upward",
      "Line curving downward",
    ],
    correctIndex: 2,
  },
  {
    question:
      "Which type of compounding would provide the highest total return at the end of the investment period?",
    options: [
      "Compounding Annually",
      "Compounding Quarterly",
      "Compounding Monthly",
      "Compounding Daily",
    ],
    correctIndex: 3,
  },
];

export default function MagicOfCompoundInterest() {
  return (
    <article className="prose max-w-none">
      <p>
        Compound Interest is one of the most important concepts in the modern
        world, and a cornerstone of the financial system in every economy. The
        concept of Compound Interest is surprisingly simple, but incredibly
        powerful!
      </p>

      <YouTubeEmbed
        videoId="rri9dQg7O_g"
        title="The Magic of Compound Interest"
      />

      <h2>Simple Interest</h2>
      <p>
        Before we talk about the power of Compound Interest, we first need to
        understand Simple Interest.
      </p>
      <p>
        In the financial world, Simple Interest is the payoff from a loan. For
        example, if your friend asks to borrow $100 and promises to pay back
        $110 in return a year from now, you would make a profit of $10 by
        loaning the money. The Interest is the rate of return, or how much
        profit you made as a percentage of the original investment. In investing
        terms, the original $100 you invested is called the Principal.
      </p>

      <p>
        <strong>Interest = (Pay back - Principal) / Principal</strong>
      </p>

      <p>In the example above, the Interest Earned is 10%.</p>
      <p>
        <code>(110 - 100) / 100 = 10%</code>
      </p>

      <h3>Simple Interest and Bonds</h3>
      <p>
        Bond investing works by simple interest. Bonds typically cost $1,000,
        and they each have an interest rate and an expiration date (typically 30
        years from when it is issued).
      </p>

      <h2>Simple Interest vs Compound Interest</h2>
      <p>
        Simple interest is just that - simple. Compound interest is a bit more
        complicated on the surface. With compound interest, instead of simply
        paying out the interest payment at the end of the loan, the pay back
        amount gets re-invested.
      </p>

      <h2>The Rule of 72</h2>
      <p>
        The <strong>Rule of 72</strong> is a simple way to estimate how long it
        will take for your investment to double with compound interest. You just
        divide 72 by the annual interest rate (in percentage form) - this tells
        you exactly how long it will take for the original investment to double!
      </p>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Interest Rate</th>
            <th className="border border-gray-300 p-2">Time To Double</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">1%</td>
            <td className="border border-gray-300 p-2">72 Years</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">2%</td>
            <td className="border border-gray-300 p-2">36 Years</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">5%</td>
            <td className="border border-gray-300 p-2">14.4 Years</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">10%</td>
            <td className="border border-gray-300 p-2">7.2 Years</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">20%</td>
            <td className="border border-gray-300 p-2">3.6 Years</td>
          </tr>
        </tbody>
      </table>

      <h2>Compounding Frequency</h2>
      <p>
        There is one last consideration with Compound Interest that can make
        things a bit more complicated - Compounding Frequency.
      </p>
      <p>
        A savings account pays out interest monthly - even though it uses a 5%
        annual interest rate. This means that your bank will actually pay out 5%
        / 12 interest every month (or about 0.42%).
      </p>

      <h3>Compound Interest Formula</h3>
      <p>
        Thanks to the power of Exponents, we can calculate the final balance for
        a compound interest investment without manually calculating every year.
        The formula is:
      </p>
      <p className="text-center text-lg">
        <strong>A = P(1 + r/n)^(nt)</strong>
      </p>
      <p>Where:</p>
      <ul>
        <li>A is the final balance</li>
        <li>P is the starting principal</li>
        <li>r is the interest rate (normally annual interest rate)</li>
        <li>n is the number of periods that the investment compounds</li>
        <li>t is the number of time periods we are measuring</li>
      </ul>

      <Quiz questions={quizQuestions} />
    </article>
  );
}
