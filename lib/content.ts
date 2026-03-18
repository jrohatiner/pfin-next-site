import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ComponentType } from "react";

const contentDir = path.join(process.cwd(), "content");
const lessonsDir = path.join(contentDir, "lessons");
const videosDir = path.join(contentDir, "videos");

export interface ContentItem {
  slug: string;
  title: string;
  content: string; // Raw content (markdown or HTML)
  filename: string;
  isHtml: boolean; // True if content is HTML, false if markdown
  isTsx?: boolean; // True if this is a TSX component
  Component?: ComponentType; // The TSX component if available
}

// Registry of TSX components - maps slug to component import
// Dynamically builds entries for all converted components
// Components are lazy-loaded on demand for better performance
export const tsxComponentRegistry: Record<"lessons" | "videos", Record<string, { title: string; getComponent: () => Promise<{ default: ComponentType }> }>> = {
  lessons: {
    // Manually converted components (hand-optimized)
    "credit-cards-terms-fees": {
      title: "Credit Cards: Terms and Fees",
      getComponent: () => import("@/components/lessons/credit-cards-terms-fees"),
    },
    "build-wealth-not-debt": {
      title: "A Strategy to Build Wealth, Not Debt",
      getComponent: () => import("@/components/lessons/build-wealth-not-debt"),
    },
    // Auto-generated TSX components (from batch conversion)
    // Add dynamic imports here after batch conversion completes
    "investing-101-chapter-9-vocabulary-quiz": { title: "Investing 101 Chapter 9 Vocabulary Quiz", getComponent: () => import("@/components/lessons/investing-101-chapter-9-vocabulary-quiz") },
    "chapter-9-exam": { title: "9-11 Chapter 9 Exam", getComponent: () => import("@/components/lessons/chapter-9-exam") },
    "blank": { title: "Blank", getComponent: () => import("@/components/lessons/blank") },
    "life-insurance-the-ultimate-safety-net": { title: "Life Insurance The Ultimate Safety Net", getComponent: () => import("@/components/lessons/life-insurance-the-ultimate-safety-net") },
    "investing-101-chapter-1-vocabulary-quiz": { title: "Investing 101 Chapter 1 Vocabulary Quiz", getComponent: () => import("@/components/lessons/investing-101-chapter-1-vocabulary-quiz") },
    "investing-101-chapter-4-vocabulary-quiz": { title: "Investing 101 Chapter 4 Vocabulary Quiz", getComponent: () => import("@/components/lessons/investing-101-chapter-4-vocabulary-quiz") },
    "chapter-4-exam": { title: "4-08 Chapter 4 Exam", getComponent: () => import("@/components/lessons/chapter-4-exam") },
    "investing-101-chapter-7-vocabulary-quiz": { title: "Investing 101 Chapter 7 Vocabulary Quiz", getComponent: () => import("@/components/lessons/investing-101-chapter-7-vocabulary-quiz") },
    "chapter-7-exam": { title: "7-16 Chapter 7 Exam", getComponent: () => import("@/components/lessons/chapter-7-exam") },
    "chapter-5-exam": { title: "5-09 Chapter 5 Exam", getComponent: () => import("@/components/lessons/chapter-5-exam") },
    "rules": { title: "Rules", getComponent: () => import("@/components/lessons/rules") },
    "investing-101-chapter-5-vocabulary-quiz": { title: "Investing 101 Chapter 5 Vocabulary Quiz", getComponent: () => import("@/components/lessons/investing-101-chapter-5-vocabulary-quiz") },
    "chapter-2-exam": { title: "2-12 Chapter 2 Exam", getComponent: () => import("@/components/lessons/chapter-2-exam") },
    "investing-101-chapter-2-vocabulary-quiz": { title: "Investing 101 Chapter 2 Vocabulary Quiz", getComponent: () => import("@/components/lessons/investing-101-chapter-2-vocabulary-quiz") },
    "whats-not-covered-in-renters-insurance": { title: "Whats Not Covered in Renters Insurance", getComponent: () => import("@/components/lessons/whats-not-covered-in-renters-insurance") },
    "calculate-the-true-cost-of-credit-card-debt": { title: "Calculate the True Cost of Credit Card Debt", getComponent: () => import("@/components/lessons/calculate-the-true-cost-of-credit-card-debt") },
    "mortgage-options-for-first-time-homebuyers": { title: "Mortgage Options for First-Time Homebuyers", getComponent: () => import("@/components/lessons/mortgage-options-for-first-time-homebuyers") },
    "sector-and-industry-explorer": { title: "Sector and Industry Explorer", getComponent: () => import("@/components/lessons/sector-and-industry-explorer") },
    "financial-glossary": { title: "Financial Glossary", getComponent: () => import("@/components/lessons/financial-glossary") },
    "the-car-buying-checklist": { title: "The Car Buying Checklist", getComponent: () => import("@/components/lessons/the-car-buying-checklist") },
    "achieve-financial-goals-with-a-spending-plan": { title: "Achieve Financial Goals with a Spending Plan", getComponent: () => import("@/components/lessons/achieve-financial-goals-with-a-spending-plan") },
    "investing-word-of-the-day": { title: "Investing Word of the Day", getComponent: () => import("@/components/lessons/investing-word-of-the-day") },
    "financial-literacy-pre-test": { title: "Financial Literacy Pre-Test", getComponent: () => import("@/components/lessons/financial-literacy-pre-test") },
    "what-your-credit-report-says-about-you": { title: "What Your Credit Report Says About You", getComponent: () => import("@/components/lessons/what-your-credit-report-says-about-you") },
    "model-your-financial-future": { title: "Model Your Financial Future", getComponent: () => import("@/components/lessons/model-your-financial-future") },
    "pay-yourself-first-a-simple-yet-powerful-way-to-build-wealth": { title: "Pay Yourself First A Simple Yet Powerful Way to Build Wealth", getComponent: () => import("@/components/lessons/pay-yourself-first-a-simple-yet-powerful-way-to-build-wealth") },
    "personal-finance-learning-center": { title: "Personal Finance Learning Center", getComponent: () => import("@/components/lessons/personal-finance-learning-center") },
    "why-health-insurance-is-so-expensive": { title: "Why Health Insurance is So Expensive", getComponent: () => import("@/components/lessons/why-health-insurance-is-so-expensive") },
    "get-a-snapshot-of-your-financial-health": { title: "Get a Snapshot of Your Financial Health", getComponent: () => import("@/components/lessons/get-a-snapshot-of-your-financial-health") },
    "car-insurance-how-to-lower-your-rates": { title: "Car Insurance How to Lower Your Rates", getComponent: () => import("@/components/lessons/car-insurance-how-to-lower-your-rates") },
    "proven-techniques-to-stop-overspending": { title: "Proven Techniques to Stop Overspending", getComponent: () => import("@/components/lessons/proven-techniques-to-stop-overspending") },
    "evaluating-big-ticket-purchases": { title: "Evaluating Big-Ticket Purchases", getComponent: () => import("@/components/lessons/evaluating-big-ticket-purchases") },
    "accounting-learning-center": { title: "Accounting Learning Center", getComponent: () => import("@/components/lessons/accounting-learning-center") },
    "stock-screener": { title: "Stock Screener", getComponent: () => import("@/components/lessons/stock-screener") },
    "crack-the-code-to-becoming-a-millionaire": { title: "Crack the Code to Becoming a Millionaire", getComponent: () => import("@/components/lessons/crack-the-code-to-becoming-a-millionaire") },
    "how-to-research-compare-stocks": { title: "How to Research amp Compare Stocks (FT)", getComponent: () => import("@/components/lessons/how-to-research-compare-stocks") },
    "a-beginners-guide-to-borrowing-wisely": { title: "A Beginners Guide to Borrowing Wisely", getComponent: () => import("@/components/lessons/a-beginners-guide-to-borrowing-wisely") },
    "economics-learning-center": { title: "Economics Learning Center", getComponent: () => import("@/components/lessons/economics-learning-center") },
    "what-damage-does-home-insurance-cover": { title: "What Damage Does Home Insurance Cover", getComponent: () => import("@/components/lessons/what-damage-does-home-insurance-cover") },
    "work-versus-study": { title: "Work Versus Study", getComponent: () => import("@/components/lessons/work-versus-study") },
    "watch-how-your-savings-could-grow": { title: "Watch How Your Savings Could Grow (A lesson in compound interest)", getComponent: () => import("@/components/lessons/watch-how-your-savings-could-grow") },
    "break-free-from-money-stress-with-a-budget": { title: "Break Free From Money Stress with a Budget", getComponent: () => import("@/components/lessons/break-free-from-money-stress-with-a-budget") },
    "find-out-your-monthly-home-budget": { title: "Find Out Your Monthly Home Budget", getComponent: () => import("@/components/lessons/find-out-your-monthly-home-budget") },
    "what-is-personal-finance-lab": { title: "What Is Personal Finance Lab", getComponent: () => import("@/components/lessons/what-is-personal-finance-lab") },
    "how-companies-manage-their-human-resources": { title: "How Companies Manage Their Human Resources", getComponent: () => import("@/components/lessons/how-companies-manage-their-human-resources") },
    "make-the-most-of-your-marketing-dollars": { title: "Make The Most of Your Marketing Dollars", getComponent: () => import("@/components/lessons/make-the-most-of-your-marketing-dollars") },
    "do-you-know-why-you-buy-what-you-do": { title: "Do You Know Why You Buy What You Do", getComponent: () => import("@/components/lessons/do-you-know-why-you-buy-what-you-do") },
    "gaap-accounting-for-equity": { title: "GAAP Accounting for Equity", getComponent: () => import("@/components/lessons/gaap-accounting-for-equity") },
    "how-to-plan-for-business-success": { title: "How to Plan for Business Success", getComponent: () => import("@/components/lessons/how-to-plan-for-business-success") },
    "build-your-first-marketing-plan": { title: "Build Your First Marketing Plan", getComponent: () => import("@/components/lessons/build-your-first-marketing-plan") },
    "pricing-strategies": { title: "Pricing Strategies", getComponent: () => import("@/components/lessons/pricing-strategies") },
    "cash-flow-analysis": { title: "Cash Flow Analysis", getComponent: () => import("@/components/lessons/cash-flow-analysis") },
    "gaap-accounting-gains-and-losses": { title: "GAAP Accounting Gains and Losses", getComponent: () => import("@/components/lessons/gaap-accounting-gains-and-losses") },
    "gaap-accounting-for-assets": { title: "GAAP Accounting for Assets", getComponent: () => import("@/components/lessons/gaap-accounting-for-assets") },
    "accounting-for-liabilities": { title: "Accounting for Liabilities", getComponent: () => import("@/components/lessons/accounting-for-liabilities") },
    "leading-vs-directing": { title: "Leading vs Directing", getComponent: () => import("@/components/lessons/leading-vs-directing") },
    "marketing-fundamentals": { title: "Marketing Fundamentals", getComponent: () => import("@/components/lessons/marketing-fundamentals") },
    "the-accounting-cycle": { title: "The Accounting Cycle", getComponent: () => import("@/components/lessons/the-accounting-cycle") },
    "payroll-best-practices": { title: "Payroll Best Practices", getComponent: () => import("@/components/lessons/payroll-best-practices") },
    "how-to-structure-your-business": { title: "How to Structure Your Business", getComponent: () => import("@/components/lessons/how-to-structure-your-business") },
    "gaap-purpose-framework-and-terms": { title: "GAAP Purpose Framework and Terms", getComponent: () => import("@/components/lessons/gaap-purpose-framework-and-terms") },
    "ethical-issues-in-marketing": { title: "Ethical Issues in Marketing", getComponent: () => import("@/components/lessons/ethical-issues-in-marketing") },
    "gaap-accounting-revenue-and-expenses": { title: "GAAP Accounting Revenue and Expenses", getComponent: () => import("@/components/lessons/gaap-accounting-revenue-and-expenses") },
    "operating-ratios": { title: "Operating Ratios", getComponent: () => import("@/components/lessons/operating-ratios") },
    "management-theory": { title: "Management Theory", getComponent: () => import("@/components/lessons/management-theory") },
    "rent-or-buy-which-is-right-for-you": { title: "Rent or Buy Which is Right for You", getComponent: () => import("@/components/lessons/rent-or-buy-which-is-right-for-you") },
    "calculate-your-car-loan-payments": { title: "Calculate Your Car Loan Payments", getComponent: () => import("@/components/lessons/calculate-your-car-loan-payments") },
    "the-6-elements-of-a-binding-contract": { title: "The 6 Elements of a Binding Contract", getComponent: () => import("@/components/lessons/the-6-elements-of-a-binding-contract") },
    "what-to-do-when-you-need-money-fast": { title: "What to Do When You Need Money Fast", getComponent: () => import("@/components/lessons/what-to-do-when-you-need-money-fast") },
    "find-your-best-car-loan-deal": { title: "Find Your Best Car Loan Deal", getComponent: () => import("@/components/lessons/find-your-best-car-loan-deal") },
    "a-guide-to-retiring-in-canada": { title: "A Guide to Retiring in Canada", getComponent: () => import("@/components/lessons/a-guide-to-retiring-in-canada") },
    "how-do-you-stop-impulse-purchases": { title: "How Do You Stop Impulse Purchases", getComponent: () => import("@/components/lessons/how-do-you-stop-impulse-purchases") },
    "sales-tax-who-pays-collects-and-why": { title: "Sales Tax Who Pays Collects and Why", getComponent: () => import("@/components/lessons/sales-tax-who-pays-collects-and-why") },
    "how-borrowers-manage-personal-debt": { title: "How Borrowers Manage Personal Debt", getComponent: () => import("@/components/lessons/how-borrowers-manage-personal-debt") },
    "the-ultimate-employee-guide": { title: "The Ultimate Employee Guide", getComponent: () => import("@/components/lessons/the-ultimate-employee-guide") },
    "how-to-get-past-resume-software": { title: "How to Get Past Resume Software", getComponent: () => import("@/components/lessons/how-to-get-past-resume-software") },
    "automatic-payments-convenience-vs-risk": { title: "Automatic Payments Convenience vs. Risk", getComponent: () => import("@/components/lessons/automatic-payments-convenience-vs-risk") },
    "planning-your-career-path": { title: "Planning Your Career Path", getComponent: () => import("@/components/lessons/planning-your-career-path") },
    "biggest-mistakes-of-job-seekers": { title: "Biggest Mistakes of Job Seekers", getComponent: () => import("@/components/lessons/biggest-mistakes-of-job-seekers") },
    "dont-let-disability-derail-your-finances": { title: "Dont Let Disability Derail Your Finances", getComponent: () => import("@/components/lessons/dont-let-disability-derail-your-finances") },
    "getting-help-with-debt-repayment": { title: "Getting Help With Debt Repayment", getComponent: () => import("@/components/lessons/getting-help-with-debt-repayment") },
    "how-to-negotiate-with-creditors": { title: "How to Negotiate With Creditors", getComponent: () => import("@/components/lessons/how-to-negotiate-with-creditors") },
    "are-internships-worth-it": { title: "Are Internships Worth It", getComponent: () => import("@/components/lessons/are-internships-worth-it") },
    "protect-yourself-as-a-consumer": { title: "Protect Yourself as a Consumer", getComponent: () => import("@/components/lessons/protect-yourself-as-a-consumer") },
    "a-guide-to-effective-charitable-donations": { title: "A Guide to Effective Charitable Donations", getComponent: () => import("@/components/lessons/a-guide-to-effective-charitable-donations") },
    "buy-vs-lease-a-car-calculator": { title: "Buy vs. Lease a Car Calculator", getComponent: () => import("@/components/lessons/buy-vs-lease-a-car-calculator") },
    "how-bankruptcy-ruins-your-credit": { title: "How Bankruptcy Ruins Your Credit", getComponent: () => import("@/components/lessons/how-bankruptcy-ruins-your-credit") },
    "uncovering-hidden-income-taxes-you-owe": { title: "Uncovering Hidden Income Taxes You Owe", getComponent: () => import("@/components/lessons/uncovering-hidden-income-taxes-you-owe") },
    "getting-out-of-debt-debt-snowball-and-debt-avalanche": { title: "Getting Out of Debt Debt Snowball and Debt Avalanche", getComponent: () => import("@/components/lessons/getting-out-of-debt-debt-snowball-and-debt-avalanche") },
    "the-cost-of-raising-a-family": { title: "The Cost of Raising a Family", getComponent: () => import("@/components/lessons/the-cost-of-raising-a-family") },
    "what-is-wealth": { title: "What is Wealth", getComponent: () => import("@/components/lessons/what-is-wealth") },
    "do-you-need-a-tax-professional": { title: "Do You Need a Tax Professional", getComponent: () => import("@/components/lessons/do-you-need-a-tax-professional") },
    "insurance": { title: "Insurance", getComponent: () => import("@/components/lessons/insurance") },
    "student-loan-repayment-calculator": { title: "Student Loan Repayment Calculator", getComponent: () => import("@/components/lessons/student-loan-repayment-calculator") },
    "the-basics-of-filing-taxes-in-canada": { title: "The Basics of Filing Taxes in Canada", getComponent: () => import("@/components/lessons/the-basics-of-filing-taxes-in-canada") },
    "debt-relief-is-consolidation-the-answer": { title: "Debt Relief Is Consolidation the Answer", getComponent: () => import("@/components/lessons/debt-relief-is-consolidation-the-answer") },
    "what-benefits-to-look-for-in-a-job-offer": { title: "What Benefits to Look for in a Job Offer", getComponent: () => import("@/components/lessons/what-benefits-to-look-for-in-a-job-offer") },
    "insurance-basics-everyone-should-know": { title: "Insurance Basics Everyone Should Know", getComponent: () => import("@/components/lessons/insurance-basics-everyone-should-know") },
    "tax-credits-deductions-you-need-to-know": { title: "Tax Credits Deductions You Need to Know", getComponent: () => import("@/components/lessons/tax-credits-deductions-you-need-to-know") },
    "public-financial-assistance-programs": { title: "Public Financial Assistance Programs", getComponent: () => import("@/components/lessons/public-financial-assistance-programs") },
    "income-tax-filing-tips-tricks": { title: "Income Tax Filing Tips Tricks", getComponent: () => import("@/components/lessons/income-tax-filing-tips-tricks") },
    "income-protection-insurance-calculator": { title: "Income Protection Insurance Calculator", getComponent: () => import("@/components/lessons/income-protection-insurance-calculator") },
  },
  videos: {
    // Manually converted components (hand-optimized)
    "magic-of-compound-interest": {
      title: "The Magic of Compound Interest",
      getComponent: () => import("@/components/videos/magic-of-compound-interest"),
    },
    "what-is-money": {
      title: "What is Money?",
      getComponent: () => import("@/components/videos/what-is-money"),
    },
    "can-you-afford-buy-house": {
      title: "Can You Afford To Buy That House?",
      getComponent: () => import("@/components/videos/can-you-afford-buy-house"),
    },
    // Auto-generated TSX components (from batch conversion)
    "personal-finance-learning-center": { title: "Personal Finance Learning Center", getComponent: () => import("@/components/videos/personal-finance-learning-center") },
    "mortgage-options-for-first-time-homebuyers": { title: "Mortgage Options for First-Time Homebuyers", getComponent: () => import("@/components/videos/mortgage-options-for-first-time-homebuyers") },
    "the-car-buying-checklist": { title: "The Car Buying Checklist", getComponent: () => import("@/components/videos/the-car-buying-checklist") },
    "accounting-learning-center": { title: "Accounting Learning Center", getComponent: () => import("@/components/videos/accounting-learning-center") },
    "trading-mutual-funds": { title: "Trading Mutual Funds", getComponent: () => import("@/components/videos/trading-mutual-funds") },
    "credit-cards-terms-fees-and-more": { title: "Credit Cards Terms Fees and More", getComponent: () => import("@/components/videos/credit-cards-terms-fees-and-more") },
    "trading-futures-options": { title: "Trading Futures Options", getComponent: () => import("@/components/videos/trading-futures-options") },
    "understanding-your-quality-of-life": { title: "Understanding Your Quality of Life", getComponent: () => import("@/components/videos/understanding-your-quality-of-life") },
    "understanding-your-credit-score": { title: "Understanding Your Credit Score", getComponent: () => import("@/components/videos/understanding-your-credit-score") },
    "a-strategy-to-build-wealth-not-debt": { title: "A Strategy to Build Wealth Not Debt", getComponent: () => import("@/components/videos/a-strategy-to-build-wealth-not-debt") },
    "what-your-credit-report-says-about-you": { title: "What Your Credit Report Says About You", getComponent: () => import("@/components/videos/what-your-credit-report-says-about-you") },
    "economics-learning-center": { title: "Economics Learning Center", getComponent: () => import("@/components/videos/economics-learning-center") },
    "order-types": { title: "Order Types", getComponent: () => import("@/components/videos/order-types") },
    "investing-word-of-the-day": { title: "Investing Word of the Day", getComponent: () => import("@/components/videos/investing-word-of-the-day") },
    "break-free-from-money-stress-with-a-budget": { title: "Break Free From Money Stress with a Budget", getComponent: () => import("@/components/videos/break-free-from-money-stress-with-a-budget") },
    "achieve-financial-goals-with-a-spending-plan": { title: "Achieve Financial Goals with a Spending Plan", getComponent: () => import("@/components/videos/achieve-financial-goals-with-a-spending-plan") },
    "setting-and-keeping-savings-goals": { title: "Setting And Keeping Savings Goals", getComponent: () => import("@/components/videos/setting-and-keeping-savings-goals") },
    "pay-yourself-first-a-simple-yet-powerful-way-to-build-wealth": { title: "Pay Yourself First A Simple Yet Powerful Way to Build Wealth", getComponent: () => import("@/components/videos/pay-yourself-first-a-simple-yet-powerful-way-to-build-wealth") },
    "trading-futures": { title: "Trading Futures", getComponent: () => import("@/components/videos/trading-futures") },
    "a-beginners-guide-to-borrowing-wisely": { title: "A Beginners Guide to Borrowing Wisely", getComponent: () => import("@/components/videos/a-beginners-guide-to-borrowing-wisely") },
    "trading-bonds": { title: "Trading Bonds", getComponent: () => import("@/components/videos/trading-bonds") },
    "trading-spots": { title: "Trading Spots", getComponent: () => import("@/components/videos/trading-spots") },
    "trading-options": { title: "Trading Options", getComponent: () => import("@/components/videos/trading-options") },
    "trading-stocks": { title: "Trading Stocks", getComponent: () => import("@/components/videos/trading-stocks") },
    "understanding-your-net-worth": { title: "Understanding Your Net Worth", getComponent: () => import("@/components/videos/understanding-your-net-worth") },
    "your-weekend-choice": { title: "Your Weekend Choice", getComponent: () => import("@/components/videos/your-weekend-choice") },
    "why-health-insurance-is-so-expensive": { title: "Why Health Insurance is So Expensive", getComponent: () => import("@/components/videos/why-health-insurance-is-so-expensive") },
    "educate-yourself": { title: "Educate-Yourself", getComponent: () => import("@/components/videos/educate-yourself") },
    "when-to-sell": { title: "When-To-Sell", getComponent: () => import("@/components/videos/when-to-sell") },
    "etftradingtutor": { title: "ETFTradingTutorial", getComponent: () => import("@/components/videos/etftradingtutor") },
    "ordertypes": { title: "OrderTypes", getComponent: () => import("@/components/videos/ordertypes") },
    "siteoverview": { title: "SiteOverview", getComponent: () => import("@/components/videos/siteoverview") },
    "keep-trade-journal": { title: "Keep-Trade-Journal", getComponent: () => import("@/components/videos/keep-trade-journal") },
    "researchtools": { title: "ResearchTools", getComponent: () => import("@/components/videos/researchtools") },
    "educate-yourself-2": { title: "Educate-Yourself", getComponent: () => import("@/components/videos/educate-yourself-2") },
    "learn-different-way": { title: "Learn-Different-Way", getComponent: () => import("@/components/videos/learn-different-way") },
    "efftradingtutor-2": { title: "ETFTradingTutorial", getComponent: () => import("@/components/videos/efftradingtutor-2") },
    "take-emotion-out": { title: "Take-Emotion-Out", getComponent: () => import("@/components/videos/take-emotion-out") },
    "diversify-your-holdings": { title: "Diversify-Your-Holdings", getComponent: () => import("@/components/videos/diversify-your-holdings") },
    "learn-different-way-2": { title: "Learn-Different-Way", getComponent: () => import("@/components/videos/learn-different-way-2") },
    "take-emotion-out-2": { title: "Take-Emotion-Out", getComponent: () => import("@/components/videos/take-emotion-out-2") },
    "siteoverview-2": { title: "SiteOverview", getComponent: () => import("@/components/videos/siteoverview-2") },
    "etfs101": { title: "Etfs101", getComponent: () => import("@/components/videos/etfs101") },
    "trading-cryptos": { title: "Trading Cryptos", getComponent: () => import("@/components/videos/trading-cryptos") },
    "etfs101-2": { title: "Etfs101", getComponent: () => import("@/components/videos/etfs101-2") },
    "diversify-your-holdings-2": { title: "Diversify-Your-Holdings", getComponent: () => import("@/components/videos/diversify-your-holdings-2") },
    "how-to-check-a-businesss-financial-health": { title: "How To Check a Businesss Financial Health", getComponent: () => import("@/components/videos/how-to-check-a-businesss-financial-health") },
    "asset-valuation-how-to-value-an-asset-through-their-financials": { title: "Asset Valuation How to value an asset through their financials", getComponent: () => import("@/components/videos/asset-valuation-how-to-value-an-asset-through-their-financials") },
    "proven-techniques-to-stop-overspending": { title: "Proven Techniques to Stop Overspending", getComponent: () => import("@/components/videos/proven-techniques-to-stop-overspending") },
    "starting-a-business-101": { title: "Starting a Business 101", getComponent: () => import("@/components/videos/starting-a-business-101") },
    "what-is-a-tax-audit": { title: "What is a Tax Audit", getComponent: () => import("@/components/videos/what-is-a-tax-audit") },
    "what-is-bankruptcy": { title: "What Is Bankruptcy", getComponent: () => import("@/components/videos/what-is-bankruptcy") },
    "the-art-of-juggling-many-bills-in-a-pinch": { title: "The Art of Juggling Many Bills in a Pinch", getComponent: () => import("@/components/videos/the-art-of-juggling-many-bills-in-a-pinch") },
    "how-debit-cards-work": { title: "How Debit Cards Work", getComponent: () => import("@/components/videos/how-debit-cards-work") },
    "receipts-what-to-keep-and-why": { title: "Receipts What to Keep and Why", getComponent: () => import("@/components/videos/receipts-what-to-keep-and-why") },
    "how-to-use-debt-to-your-advantage": { title: "How to Use Debt to Your Advantage", getComponent: () => import("@/components/videos/how-to-use-debt-to-your-advantage") },
  },
};

function slugify(filename: string): string {
  return filename
    .replace(/^\d+-/, "") // Remove leading numbers and dash
    .replace(/\.(md|html)$/, "") // Remove .md or .html extension
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with dashes
    .replace(/(^-|-$)/g, ""); // Remove leading/trailing dashes
}

function loadAllFromDir(dir: string): ContentItem[] {
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") || f.endsWith(".html"));
  const items: ContentItem[] = [];
  const slugsSeen = new Set<string>();

  for (const filename of files) {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const isHtml = filename.endsWith(".html");
    const slug = slugify(filename);

    // If we've already seen this slug, prefer HTML over MD
    if (slugsSeen.has(slug)) {
      if (isHtml) {
        // Replace the existing MD entry with HTML
        const existingIndex = items.findIndex((i) => i.slug === slug);
        if (existingIndex !== -1) {
          items.splice(existingIndex, 1);
        }
      } else {
        // Skip this MD file since we already have an entry (possibly HTML)
        continue;
      }
    }
    slugsSeen.add(slug);

    let content: string;
    let title: string;

    if (isHtml) {
      content = fileContent;
      // Extract title from <h1>, <h2>, or <title> tag
      const titleMatch = fileContent.match(/<h[12][^>]*>([^<]+)<\/h[12]>|<title>([^<]+)<\/title>/i);
      title = titleMatch ? (titleMatch[1] || titleMatch[2]).trim() : filename.replace(/\.html$/, "");
    } else {
      const { content: mdContent } = matter(fileContent);
      content = mdContent;
      // Extract title from first ## heading
      const titleMatch = mdContent.match(/^##\s+(.+)$/m);
      title = titleMatch ? titleMatch[1].trim() : filename.replace(/\.md$/, "");
    }

    items.push({ slug, title, content, filename, isHtml });
  }

  // Sort alphabetically by filename first, then by title
  items.sort((a, b) => {
    const fileA = a.filename.toLowerCase();
    const fileB = b.filename.toLowerCase();
    return fileA.localeCompare(fileB, undefined, { numeric: true });
  });

  return items;
}

export function getAllLessons(): ContentItem[] {
  const items = loadAllFromDir(lessonsDir);
  // Remove duplicates by keeping only the first occurrence of each title
  const seenTitles = new Set<string>();
  return items.filter((item) => {
    if (seenTitles.has(item.title)) {
      return false;
    }
    seenTitles.add(item.title);
    return true;
  });
}

export function getAllVideos(): ContentItem[] {
  const items = loadAllFromDir(videosDir);
  // Remove duplicates by keeping only the first occurrence of each title
  const seenTitles = new Set<string>();
  return items.filter((item) => {
    if (seenTitles.has(item.title)) {
      return false;
    }
    seenTitles.add(item.title);
    return true;
  });
}

export function getLessonBySlug(slug: string): ContentItem | null {
  const lessons = loadAllFromDir(lessonsDir);
  return lessons.find((l) => l.slug === slug) ?? null;
}

export function getVideoBySlug(slug: string): ContentItem | null {
  const videos = loadAllFromDir(videosDir);
  return videos.find((v) => v.slug === slug) ?? null;
}

export interface ContentNavInfo {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export function getLessonNavigation(slug: string): ContentNavInfo {
  const lessons = getAllLessons();
  const index = lessons.findIndex((l) => l.slug === slug);
  
  return {
    prev: index > 0 ? { slug: lessons[index - 1].slug, title: lessons[index - 1].title } : null,
    next: index < lessons.length - 1 ? { slug: lessons[index + 1].slug, title: lessons[index + 1].title } : null,
  };
}

export function getVideoNavigation(slug: string): ContentNavInfo {
  const videos = getAllVideos();
  const index = videos.findIndex((v) => v.slug === slug);
  
  return {
    prev: index > 0 ? { slug: videos[index - 1].slug, title: videos[index - 1].title } : null,
    next: index < videos.length - 1 ? { slug: videos[index + 1].slug, title: videos[index + 1].title } : null,
  };
}
