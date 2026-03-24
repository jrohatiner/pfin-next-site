import type { ComponentType } from "react";

export interface ContentItem {
  slug: string;
  title: string;
  getComponent: () => Promise<{ default: ComponentType }>;
}

// Helper to convert slug to title
function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// ============================================================================
// LESSONS REGISTRY - All lesson TSX components
// ============================================================================
export const lessonsRegistry: Record<string, ContentItem> = {
  "work-versus-study": { slug: "work-versus-study", title: "Work Versus Study", getComponent: () => import("@/components/lessons/work-versus-study") },
  "why-health-insurance-is-so-expensive": { slug: "why-health-insurance-is-so-expensive", title: "Why Health Insurance is So Expensive", getComponent: () => import("@/components/lessons/why-health-insurance-is-so-expensive") },
  "whats-not-covered-in-renters-insurance": { slug: "whats-not-covered-in-renters-insurance", title: "What's Not Covered in Renters Insurance", getComponent: () => import("@/components/lessons/whats-not-covered-in-renters-insurance") },
  "what-your-credit-report-says-about-you": { slug: "what-your-credit-report-says-about-you", title: "What Your Credit Report Says About You", getComponent: () => import("@/components/lessons/what-your-credit-report-says-about-you") },
  "what-to-do-when-you-need-money-fast": { slug: "what-to-do-when-you-need-money-fast", title: "What to Do When You Need Money Fast", getComponent: () => import("@/components/lessons/what-to-do-when-you-need-money-fast") },
  "what-is-wealth": { slug: "what-is-wealth", title: "What is Wealth", getComponent: () => import("@/components/lessons/what-is-wealth") },
  "what-is-personal-finance-lab": { slug: "what-is-personal-finance-lab", title: "What Is Personal Finance Lab", getComponent: () => import("@/components/lessons/what-is-personal-finance-lab") },
  "what-damage-does-home-insurance-cover": { slug: "what-damage-does-home-insurance-cover", title: "What Damage Does Home Insurance Cover", getComponent: () => import("@/components/lessons/what-damage-does-home-insurance-cover") },
  "what-benefits-to-look-for-in-a-job-offer": { slug: "what-benefits-to-look-for-in-a-job-offer", title: "What Benefits to Look for in a Job Offer", getComponent: () => import("@/components/lessons/what-benefits-to-look-for-in-a-job-offer") },
  "watch-how-your-savings-could-grow-a-lesson-in-compound-interest": { slug: "watch-how-your-savings-could-grow-a-lesson-in-compound-interest", title: "Watch How Your Savings Could Grow", getComponent: () => import("@/components/lessons/watch-how-your-savings-could-grow-a-lesson-in-compound-interest") },
  "uncovering-hidden-income-taxes-you-owe": { slug: "uncovering-hidden-income-taxes-you-owe", title: "Uncovering Hidden Income Taxes You Owe", getComponent: () => import("@/components/lessons/uncovering-hidden-income-taxes-you-owe") },
  "the-ultimate-employee-guide": { slug: "the-ultimate-employee-guide", title: "The Ultimate Employee Guide", getComponent: () => import("@/components/lessons/the-ultimate-employee-guide") },
  "the-cost-of-raising-a-family": { slug: "the-cost-of-raising-a-family", title: "The Cost of Raising a Family", getComponent: () => import("@/components/lessons/the-cost-of-raising-a-family") },
  "the-car-buying-checklist": { slug: "the-car-buying-checklist", title: "The Car Buying Checklist", getComponent: () => import("@/components/lessons/the-car-buying-checklist") },
  "the-basics-of-filing-taxes-in-canada": { slug: "the-basics-of-filing-taxes-in-canada", title: "The Basics of Filing Taxes in Canada", getComponent: () => import("@/components/lessons/the-basics-of-filing-taxes-in-canada") },
  "the-accounting-cycle": { slug: "the-accounting-cycle", title: "The Accounting Cycle", getComponent: () => import("@/components/lessons/the-accounting-cycle") },
  "the-6-elements-of-a-binding-contract": { slug: "the-6-elements-of-a-binding-contract", title: "The 6 Elements of a Binding Contract", getComponent: () => import("@/components/lessons/the-6-elements-of-a-binding-contract") },
  "tax-credits-deductions-you-need-to-know": { slug: "tax-credits-deductions-you-need-to-know", title: "Tax Credits & Deductions You Need to Know", getComponent: () => import("@/components/lessons/tax-credits-deductions-you-need-to-know") },
  "student-loan-repayment-calculator": { slug: "student-loan-repayment-calculator", title: "Student Loan Repayment Calculator", getComponent: () => import("@/components/lessons/student-loan-repayment-calculator") },
  "stock-screener": { slug: "stock-screener", title: "Stock Screener", getComponent: () => import("@/components/lessons/stock-screener") },
  "sector-and-industry-explorer": { slug: "sector-and-industry-explorer", title: "Sector and Industry Explorer", getComponent: () => import("@/components/lessons/sector-and-industry-explorer") },
  "sales-tax-who-pays-collects-and-why": { slug: "sales-tax-who-pays-collects-and-why", title: "Sales Tax: Who Pays, Collects, and Why", getComponent: () => import("@/components/lessons/sales-tax-who-pays-collects-and-why") },
  "rent-or-buy-which-is-right-for-you": { slug: "rent-or-buy-which-is-right-for-you", title: "Rent or Buy: Which is Right for You", getComponent: () => import("@/components/lessons/rent-or-buy-which-is-right-for-you") },
  "public-financial-assistance-programs": { slug: "public-financial-assistance-programs", title: "Public Financial Assistance Programs", getComponent: () => import("@/components/lessons/public-financial-assistance-programs") },
  "proven-techniques-to-stop-overspending": { slug: "proven-techniques-to-stop-overspending", title: "Proven Techniques to Stop Overspending", getComponent: () => import("@/components/lessons/proven-techniques-to-stop-overspending") },
  "protect-yourself-as-a-consumer": { slug: "protect-yourself-as-a-consumer", title: "Protect Yourself as a Consumer", getComponent: () => import("@/components/lessons/protect-yourself-as-a-consumer") },
  "pricing-strategies": { slug: "pricing-strategies", title: "Pricing Strategies", getComponent: () => import("@/components/lessons/pricing-strategies") },
  "planning-your-career-path": { slug: "planning-your-career-path", title: "Planning Your Career Path", getComponent: () => import("@/components/lessons/planning-your-career-path") },
  "personal-finance-learning-center": { slug: "personal-finance-learning-center", title: "Personal Finance Learning Center", getComponent: () => import("@/components/lessons/personal-finance-learning-center") },
  "economics-learning-center": { slug: "economics-learning-center", title: "Economics Learning Center", getComponent: () => import("@/components/lessons/economics-learning-center") },
  "payroll-best-practices": { slug: "payroll-best-practices", title: "Payroll Best Practices", getComponent: () => import("@/components/lessons/payroll-best-practices") },
  "dont-let-disability-derail-your-finances": { slug: "dont-let-disability-derail-your-finances", title: "Don't Let Disability Derail Your Finances", getComponent: () => import("@/components/lessons/dont-let-disability-derail-your-finances") },
  "pay-yourself-first-a-simple-yet-powerful-way-to-build-wealth": { slug: "pay-yourself-first-a-simple-yet-powerful-way-to-build-wealth", title: "Pay Yourself First", getComponent: () => import("@/components/lessons/pay-yourself-first-a-simple-yet-powerful-way-to-build-wealth") },
  "do-you-need-a-tax-professional": { slug: "do-you-need-a-tax-professional", title: "Do You Need a Tax Professional", getComponent: () => import("@/components/lessons/do-you-need-a-tax-professional") },
  "operating-ratios": { slug: "operating-ratios", title: "Operating Ratios", getComponent: () => import("@/components/lessons/operating-ratios") },
  "do-you-know-why-you-buy-what-you-do": { slug: "do-you-know-why-you-buy-what-you-do", title: "Do You Know Why You Buy What You Do", getComponent: () => import("@/components/lessons/do-you-know-why-you-buy-what-you-do") },
  "mortgage-options-for-first-time-homebuyers": { slug: "mortgage-options-for-first-time-homebuyers", title: "Mortgage Options for First-Time Homebuyers", getComponent: () => import("@/components/lessons/mortgage-options-for-first-time-homebuyers") },
  "debt-relief-is-consolidation-the-answer": { slug: "debt-relief-is-consolidation-the-answer", title: "Debt Relief: Is Consolidation the Answer", getComponent: () => import("@/components/lessons/debt-relief-is-consolidation-the-answer") },
  "model-your-financial-future": { slug: "model-your-financial-future", title: "Model Your Financial Future", getComponent: () => import("@/components/lessons/model-your-financial-future") },
  "credit-cards-terms-fees": { slug: "credit-cards-terms-fees", title: "Credit Cards: Terms & Fees", getComponent: () => import("@/components/lessons/credit-cards-terms-fees") },
  "marketing-fundamentals": { slug: "marketing-fundamentals", title: "Marketing Fundamentals", getComponent: () => import("@/components/lessons/marketing-fundamentals") },
  "credit-cards-terms-fees-and-more": { slug: "credit-cards-terms-fees-and-more", title: "Credit Cards: Terms, Fees, and More", getComponent: () => import("@/components/lessons/credit-cards-terms-fees-and-more") },
  "management-theory": { slug: "management-theory", title: "Management Theory", getComponent: () => import("@/components/lessons/management-theory") },
  "crack-the-code-to-becoming-a-millionaire": { slug: "crack-the-code-to-becoming-a-millionaire", title: "Crack the Code to Becoming a Millionaire", getComponent: () => import("@/components/lessons/crack-the-code-to-becoming-a-millionaire") },
  "make-the-most-of-your-marketing-dollars": { slug: "make-the-most-of-your-marketing-dollars", title: "Make The Most of Your Marketing Dollars", getComponent: () => import("@/components/lessons/make-the-most-of-your-marketing-dollars") },
  "cash-flow-analysis": { slug: "cash-flow-analysis", title: "Cash Flow Analysis", getComponent: () => import("@/components/lessons/cash-flow-analysis") },
  "life-insurance-the-ultimate-safety-net": { slug: "life-insurance-the-ultimate-safety-net", title: "Life Insurance: The Ultimate Safety Net", getComponent: () => import("@/components/lessons/life-insurance-the-ultimate-safety-net") },
  "car-insurance-how-to-lower-your-rates": { slug: "car-insurance-how-to-lower-your-rates", title: "Car Insurance: How to Lower Your Rates", getComponent: () => import("@/components/lessons/car-insurance-how-to-lower-your-rates") },
  "leading-vs-directing": { slug: "leading-vs-directing", title: "Leading vs Directing", getComponent: () => import("@/components/lessons/leading-vs-directing") },
  "calculate-your-car-loan-payments": { slug: "calculate-your-car-loan-payments", title: "Calculate Your Car Loan Payments", getComponent: () => import("@/components/lessons/calculate-your-car-loan-payments") },
  "investing-word-of-the-day": { slug: "investing-word-of-the-day", title: "Investing Word of the Day", getComponent: () => import("@/components/lessons/investing-word-of-the-day") },
  "calculate-the-true-cost-of-credit-card-debt": { slug: "calculate-the-true-cost-of-credit-card-debt", title: "Calculate the True Cost of Credit Card Debt", getComponent: () => import("@/components/lessons/calculate-the-true-cost-of-credit-card-debt") },
  "investing-101-chapter-9-vocabulary-quiz": { slug: "investing-101-chapter-9-vocabulary-quiz", title: "Investing 101 – Chapter 9 Vocabulary Quiz", getComponent: () => import("@/components/lessons/investing-101-chapter-9-vocabulary-quiz") },
  "buy-vs-lease-a-car-calculator": { slug: "buy-vs-lease-a-car-calculator", title: "Buy vs. Lease a Car Calculator", getComponent: () => import("@/components/lessons/buy-vs-lease-a-car-calculator") },
  "investing-101-chapter-7-vocabulary-quiz": { slug: "investing-101-chapter-7-vocabulary-quiz", title: "Investing 101 – Chapter 7 Vocabulary Quiz", getComponent: () => import("@/components/lessons/investing-101-chapter-7-vocabulary-quiz") },
  "build-your-first-marketing-plan": { slug: "build-your-first-marketing-plan", title: "Build Your First Marketing Plan", getComponent: () => import("@/components/lessons/build-your-first-marketing-plan") },
  "investing-101-chapter-5-vocabulary-quiz": { slug: "investing-101-chapter-5-vocabulary-quiz", title: "Investing 101 – Chapter 5 Vocabulary Quiz", getComponent: () => import("@/components/lessons/investing-101-chapter-5-vocabulary-quiz") },
  "build-wealth-not-debt": { slug: "build-wealth-not-debt", title: "Build Wealth, Not Debt", getComponent: () => import("@/components/lessons/build-wealth-not-debt") },
  "investing-101-chapter-4-vocabulary-quiz": { slug: "investing-101-chapter-4-vocabulary-quiz", title: "Investing 101 – Chapter 4 Vocabulary Quiz", getComponent: () => import("@/components/lessons/investing-101-chapter-4-vocabulary-quiz") },
  "break-free-from-money-stress-with-a-budget": { slug: "break-free-from-money-stress-with-a-budget", title: "Break Free From Money Stress with a Budget", getComponent: () => import("@/components/lessons/break-free-from-money-stress-with-a-budget") },
  "investing-101-chapter-2-vocabulary-quiz": { slug: "investing-101-chapter-2-vocabulary-quiz", title: "Investing 101 – Chapter 2 Vocabulary Quiz", getComponent: () => import("@/components/lessons/investing-101-chapter-2-vocabulary-quiz") },
  "investing-101-chapter-1-vocabulary-quiz": { slug: "investing-101-chapter-1-vocabulary-quiz", title: "Investing 101 – Chapter 1 Vocabulary Quiz", getComponent: () => import("@/components/lessons/investing-101-chapter-1-vocabulary-quiz") },
  "biggest-mistakes-of-job-seekers": { slug: "biggest-mistakes-of-job-seekers", title: "Biggest Mistakes of Job Seekers", getComponent: () => import("@/components/lessons/biggest-mistakes-of-job-seekers") },
  "insurance": { slug: "insurance", title: "Insurance", getComponent: () => import("@/components/lessons/insurance") },
  "automatic-payments-convenience-vs-risk": { slug: "automatic-payments-convenience-vs-risk", title: "Automatic Payments: Convenience vs. Risk", getComponent: () => import("@/components/lessons/automatic-payments-convenience-vs-risk") },
  "are-internships-worth-it": { slug: "are-internships-worth-it", title: "Are Internships Worth It", getComponent: () => import("@/components/lessons/are-internships-worth-it") },
  "insurance-basics-everyone-should-know": { slug: "insurance-basics-everyone-should-know", title: "Insurance Basics Everyone Should Know", getComponent: () => import("@/components/lessons/insurance-basics-everyone-should-know") },
  "achieve-financial-goals-with-a-spending-plan": { slug: "achieve-financial-goals-with-a-spending-plan", title: "Achieve Financial Goals with a Spending Plan", getComponent: () => import("@/components/lessons/achieve-financial-goals-with-a-spending-plan") },
  "accounting-learning-center": { slug: "accounting-learning-center", title: "Accounting Learning Center", getComponent: () => import("@/components/lessons/accounting-learning-center") },
  "income-tax-filing-tips-tricks": { slug: "income-tax-filing-tips-tricks", title: "Income Tax Filing Tips & Tricks", getComponent: () => import("@/components/lessons/income-tax-filing-tips-tricks") },
  "income-protection-insurance-calculator": { slug: "income-protection-insurance-calculator", title: "Income Protection Insurance Calculator", getComponent: () => import("@/components/lessons/income-protection-insurance-calculator") },
  "accounting-for-liabilities": { slug: "accounting-for-liabilities", title: "Accounting for Liabilities", getComponent: () => import("@/components/lessons/accounting-for-liabilities") },
  "how-to-structure-your-business": { slug: "how-to-structure-your-business", title: "How to Structure Your Business", getComponent: () => import("@/components/lessons/how-to-structure-your-business") },
  "a-strategy-to-build-wealth-not-debt": { slug: "a-strategy-to-build-wealth-not-debt", title: "A Strategy to Build Wealth, Not Debt", getComponent: () => import("@/components/lessons/a-strategy-to-build-wealth-not-debt") },
  "how-to-research-amp-compare-stocks-ft": { slug: "how-to-research-amp-compare-stocks-ft", title: "How to Research & Compare Stocks", getComponent: () => import("@/components/lessons/how-to-research-amp-compare-stocks-ft") },
  "a-guide-to-retiring-in-canada": { slug: "a-guide-to-retiring-in-canada", title: "A Guide to Retiring in Canada", getComponent: () => import("@/components/lessons/a-guide-to-retiring-in-canada") },
  "a-guide-to-effective-charitable-donations": { slug: "a-guide-to-effective-charitable-donations", title: "A Guide to Effective Charitable Donations", getComponent: () => import("@/components/lessons/a-guide-to-effective-charitable-donations") },
  "how-to-plan-for-business-success": { slug: "how-to-plan-for-business-success", title: "How to Plan for Business Success", getComponent: () => import("@/components/lessons/how-to-plan-for-business-success") },
  "a-beginners-guide-to-borrowing-wisely": { slug: "a-beginners-guide-to-borrowing-wisely", title: "A Beginner's Guide to Borrowing Wisely", getComponent: () => import("@/components/lessons/a-beginners-guide-to-borrowing-wisely") },
  "how-to-negotiate-with-creditors": { slug: "how-to-negotiate-with-creditors", title: "How to Negotiate With Creditors", getComponent: () => import("@/components/lessons/how-to-negotiate-with-creditors") },
  "chapter-9-exam": { slug: "chapter-9-exam", title: "Chapter 9 Exam", getComponent: () => import("@/components/lessons/9-11-chapter-9-exam") },
  "how-to-get-past-resume-software": { slug: "how-to-get-past-resume-software", title: "How to Get Past Resume Software", getComponent: () => import("@/components/lessons/how-to-get-past-resume-software") },
  "chapter-7-exam": { slug: "chapter-7-exam", title: "Chapter 7 Exam", getComponent: () => import("@/components/lessons/7-16-chapter-7-exam") },
  "chapter-5-exam": { slug: "chapter-5-exam", title: "Chapter 5 Exam", getComponent: () => import("@/components/lessons/5-09-chapter-5-exam") },
  "how-do-you-stop-impulse-purchases": { slug: "how-do-you-stop-impulse-purchases", title: "How Do You Stop Impulse Purchases", getComponent: () => import("@/components/lessons/how-do-you-stop-impulse-purchases") },
  "chapter-4-exam": { slug: "chapter-4-exam", title: "Chapter 4 Exam", getComponent: () => import("@/components/lessons/4-08-chapter-4-exam") },
  "how-companies-manage-their-human-resources": { slug: "how-companies-manage-their-human-resources", title: "How Companies Manage Their Human Resources", getComponent: () => import("@/components/lessons/how-companies-manage-their-human-resources") },
  "chapter-2-exam": { slug: "chapter-2-exam", title: "Chapter 2 Exam", getComponent: () => import("@/components/lessons/2-12-chapter-2-exam") },
  "gaap-accounting-for-equity": { slug: "gaap-accounting-for-equity", title: "GAAP – Accounting for Equity", getComponent: () => import("@/components/lessons/gaap-accounting-for-equity") },
  "how-borrowers-manage-personal-debt": { slug: "how-borrowers-manage-personal-debt", title: "How Borrowers Manage Personal Debt", getComponent: () => import("@/components/lessons/how-borrowers-manage-personal-debt") },
  "gaap-accounting-for-assets": { slug: "gaap-accounting-for-assets", title: "GAAP – Accounting for Assets", getComponent: () => import("@/components/lessons/gaap-accounting-for-assets") },
  "how-bankruptcy-ruins-your-credit": { slug: "how-bankruptcy-ruins-your-credit", title: "How Bankruptcy Ruins Your Credit", getComponent: () => import("@/components/lessons/how-bankruptcy-ruins-your-credit") },
  "getting-out-of-debt-debt-snowball-and-debt-avalanche": { slug: "getting-out-of-debt-debt-snowball-and-debt-avalanche", title: "Getting Out of Debt: Debt Snowball and Debt Avalanche", getComponent: () => import("@/components/lessons/getting-out-of-debt-debt-snowball-and-debt-avalanche") },
  "find-your-best-car-loan-deal": { slug: "find-your-best-car-loan-deal", title: "Find Your Best Car Loan Deal", getComponent: () => import("@/components/lessons/find-your-best-car-loan-deal") },
  "find-out-your-monthly-home-budget": { slug: "find-out-your-monthly-home-budget", title: "Find Out Your Monthly Home Budget", getComponent: () => import("@/components/lessons/find-out-your-monthly-home-budget") },
  "getting-help-with-debt-repayment": { slug: "getting-help-with-debt-repayment", title: "Getting Help With Debt Repayment", getComponent: () => import("@/components/lessons/getting-help-with-debt-repayment") },
  "financial-literacy-pre-test": { slug: "financial-literacy-pre-test", title: "Financial Literacy Pre-Test", getComponent: () => import("@/components/lessons/financial-literacy-pre-test") },
  "get-a-snapshot-of-your-financial-health": { slug: "get-a-snapshot-of-your-financial-health", title: "Get a Snapshot of Your Financial Health", getComponent: () => import("@/components/lessons/get-a-snapshot-of-your-financial-health") },
  "financial-glossary": { slug: "financial-glossary", title: "Financial Glossary", getComponent: () => import("@/components/lessons/financial-glossary") },
  "gaap-purpose-framework-and-terms": { slug: "gaap-purpose-framework-and-terms", title: "GAAP – Purpose, Framework, and Terms", getComponent: () => import("@/components/lessons/gaap-purpose-framework-and-terms") },
  "evaluating-big-ticket-purchases": { slug: "evaluating-big-ticket-purchases", title: "Evaluating Big-Ticket Purchases", getComponent: () => import("@/components/lessons/evaluating-big-ticket-purchases") },
  "gaap-accounting-revenue-and-expenses": { slug: "gaap-accounting-revenue-and-expenses", title: "GAAP – Accounting Revenue and Expenses", getComponent: () => import("@/components/lessons/gaap-accounting-revenue-and-expenses") },
  "ethical-issues-in-marketing": { slug: "ethical-issues-in-marketing", title: "Ethical Issues in Marketing", getComponent: () => import("@/components/lessons/ethical-issues-in-marketing") },
  "gaap-accounting-gains-and-losses": { slug: "gaap-accounting-gains-and-losses", title: "GAAP – Accounting Gains and Losses", getComponent: () => import("@/components/lessons/gaap-accounting-gains-and-losses") },
};

// ============================================================================
// VIDEOS REGISTRY - All video TSX components
// ============================================================================
export const videosRegistry: Record<string, ContentItem> = {
  "your-weekend-choice": { slug: "your-weekend-choice", title: "Your Weekend Choice", getComponent: () => import("@/components/videos/your-weekend-choice") },
  "why-health-insurance-is-so-expensive": { slug: "why-health-insurance-is-so-expensive", title: "Why Health Insurance is So Expensive", getComponent: () => import("@/components/videos/why-health-insurance-is-so-expensive") },
  "when-to-sell": { slug: "when-to-sell", title: "When to Sell", getComponent: () => import("@/components/videos/when-to-sell") },
  "what-your-credit-report-says-about-you": { slug: "what-your-credit-report-says-about-you", title: "What Your Credit Report Says About You", getComponent: () => import("@/components/videos/what-your-credit-report-says-about-you") },
  "what-is-money": { slug: "what-is-money", title: "What is Money?", getComponent: () => import("@/components/videos/what-is-money") },
  "what-is-bankruptcy": { slug: "what-is-bankruptcy", title: "What Is Bankruptcy", getComponent: () => import("@/components/videos/what-is-bankruptcy") },
  "what-is-a-tax-audit": { slug: "what-is-a-tax-audit", title: "What is a Tax Audit", getComponent: () => import("@/components/videos/what-is-a-tax-audit") },
  "understanding-your-quality-of-life": { slug: "understanding-your-quality-of-life", title: "Understanding Your Quality of Life", getComponent: () => import("@/components/videos/understanding-your-quality-of-life") },
  "understanding-your-net-worth": { slug: "understanding-your-net-worth", title: "Understanding Your Net Worth", getComponent: () => import("@/components/videos/understanding-your-net-worth") },
  "understanding-your-credit-score": { slug: "understanding-your-credit-score", title: "Understanding Your Credit Score", getComponent: () => import("@/components/videos/understanding-your-credit-score") },
  "trading-stocks": { slug: "trading-stocks", title: "Trading Stocks", getComponent: () => import("@/components/videos/trading-stocks") },
  "trading-spots": { slug: "trading-spots", title: "Trading Spots", getComponent: () => import("@/components/videos/trading-spots") },
  "trading-options": { slug: "trading-options", title: "Trading Options", getComponent: () => import("@/components/videos/trading-options") },
  "trading-mutual-funds": { slug: "trading-mutual-funds", title: "Trading Mutual Funds", getComponent: () => import("@/components/videos/trading-mutual-funds") },
  "trading-futures": { slug: "trading-futures", title: "Trading Futures", getComponent: () => import("@/components/videos/trading-futures") },
  "trading-futures-options": { slug: "trading-futures-options", title: "Trading Futures Options", getComponent: () => import("@/components/videos/trading-futures-options") },
  "trading-cryptos": { slug: "trading-cryptos", title: "Trading Cryptos", getComponent: () => import("@/components/videos/trading-cryptos") },
  "trading-bonds": { slug: "trading-bonds", title: "Trading Bonds", getComponent: () => import("@/components/videos/trading-bonds") },
  "the-magic-of-compound-interest": { slug: "the-magic-of-compound-interest", title: "The Magic of Compound Interest", getComponent: () => import("@/components/videos/the-magic-of-compound-interest") },
  "magic-of-compound-interest": { slug: "magic-of-compound-interest", title: "The Magic of Compound Interest", getComponent: () => import("@/components/videos/magic-of-compound-interest") },
  "the-car-buying-checklist": { slug: "the-car-buying-checklist", title: "The Car Buying Checklist", getComponent: () => import("@/components/videos/the-car-buying-checklist") },
  "the-art-of-juggling-many-bills-in-a-pinch": { slug: "the-art-of-juggling-many-bills-in-a-pinch", title: "The Art of Juggling Many Bills in a Pinch", getComponent: () => import("@/components/videos/the-art-of-juggling-many-bills-in-a-pinch") },
  "take-emotion-out": { slug: "take-emotion-out", title: "Take Emotion Out", getComponent: () => import("@/components/videos/take-emotion-out") },
  "starting-a-business-101": { slug: "starting-a-business-101", title: "Starting a Business 101", getComponent: () => import("@/components/videos/starting-a-business-101") },
  "siteoverview": { slug: "siteoverview", title: "Site Overview", getComponent: () => import("@/components/videos/siteoverview") },
  "setting-and-keeping-savings-goals": { slug: "setting-and-keeping-savings-goals", title: "Setting And Keeping Savings Goals", getComponent: () => import("@/components/videos/setting-and-keeping-savings-goals") },
  "researchtools": { slug: "researchtools", title: "Research Tools", getComponent: () => import("@/components/videos/researchtools") },
  "receipts-what-to-keep-and-why": { slug: "receipts-what-to-keep-and-why", title: "Receipts: What to Keep and Why", getComponent: () => import("@/components/videos/receipts-what-to-keep-and-why") },
  "proven-techniques-to-stop-overspending": { slug: "proven-techniques-to-stop-overspending", title: "Proven Techniques to Stop Overspending", getComponent: () => import("@/components/videos/proven-techniques-to-stop-overspending") },
  "personal-finance-learning-center": { slug: "personal-finance-learning-center", title: "Personal Finance Learning Center", getComponent: () => import("@/components/videos/personal-finance-learning-center") },
  "pay-yourself-first-a-simple-yet-powerful-way-to-build-wealth": { slug: "pay-yourself-first-a-simple-yet-powerful-way-to-build-wealth", title: "Pay Yourself First", getComponent: () => import("@/components/videos/pay-yourself-first-a-simple-yet-powerful-way-to-build-wealth") },
  "ordertypes": { slug: "ordertypes", title: "Order Types", getComponent: () => import("@/components/videos/ordertypes") },
  "order-types": { slug: "order-types", title: "Order Types", getComponent: () => import("@/components/videos/order-types") },
  "mortgage-options-for-first-time-homebuyers": { slug: "mortgage-options-for-first-time-homebuyers", title: "Mortgage Options for First-Time Homebuyers", getComponent: () => import("@/components/videos/mortgage-options-for-first-time-homebuyers") },
  "learn-different-way": { slug: "learn-different-way", title: "Learn a Different Way", getComponent: () => import("@/components/videos/learn-different-way") },
  "keep-trade-journal": { slug: "keep-trade-journal", title: "Keep a Trade Journal", getComponent: () => import("@/components/videos/keep-trade-journal") },
  "investing-word-of-the-day": { slug: "investing-word-of-the-day", title: "Investing Word of the Day", getComponent: () => import("@/components/videos/investing-word-of-the-day") },
  "how-to-use-debt-to-your-advantage": { slug: "how-to-use-debt-to-your-advantage", title: "How to Use Debt to Your Advantage", getComponent: () => import("@/components/videos/how-to-use-debt-to-your-advantage") },
  "how-to-check-a-businesss-financial-health": { slug: "how-to-check-a-businesss-financial-health", title: "How To Check a Business's Financial Health", getComponent: () => import("@/components/videos/how-to-check-a-businesss-financial-health") },
  "how-debit-cards-work": { slug: "how-debit-cards-work", title: "How Debit Cards Work", getComponent: () => import("@/components/videos/how-debit-cards-work") },
  "etftradingtutorial": { slug: "etftradingtutorial", title: "ETF Trading Tutorial", getComponent: () => import("@/components/videos/etftradingtutorial") },
  "etfs101": { slug: "etfs101", title: "ETFs 101", getComponent: () => import("@/components/videos/etfs101") },
  "educate-yourself": { slug: "educate-yourself", title: "Educate Yourself", getComponent: () => import("@/components/videos/educate-yourself") },
  "economics-learning-center": { slug: "economics-learning-center", title: "Economics Learning Center", getComponent: () => import("@/components/videos/economics-learning-center") },
  "diversify-your-holdings": { slug: "diversify-your-holdings", title: "Diversify Your Holdings", getComponent: () => import("@/components/videos/diversify-your-holdings") },
  "break-free-from-money-stress-with-a-budget": { slug: "break-free-from-money-stress-with-a-budget", title: "Break Free From Money Stress with a Budget", getComponent: () => import("@/components/videos/break-free-from-money-stress-with-a-budget") },
  "credit-cards-terms-fees-and-more": { slug: "credit-cards-terms-fees-and-more", title: "Credit Cards: Terms, Fees, and More", getComponent: () => import("@/components/videos/credit-cards-terms-fees-and-more") },
  "asset-valuation-how-to-value-an-asset-through-their-financials": { slug: "asset-valuation-how-to-value-an-asset-through-their-financials", title: "Asset Valuation", getComponent: () => import("@/components/videos/asset-valuation-how-to-value-an-asset-through-their-financials") },
  "can-you-afford-to-buy-that-house": { slug: "can-you-afford-to-buy-that-house", title: "Can You Afford To Buy That House?", getComponent: () => import("@/components/videos/can-you-afford-to-buy-that-house") },
  "can-you-afford-buy-house": { slug: "can-you-afford-buy-house", title: "Can You Afford To Buy That House?", getComponent: () => import("@/components/videos/can-you-afford-buy-house") },
  "achieve-financial-goals-with-a-spending-plan": { slug: "achieve-financial-goals-with-a-spending-plan", title: "Achieve Financial Goals with a Spending Plan", getComponent: () => import("@/components/videos/achieve-financial-goals-with-a-spending-plan") },
  "accounting-learning-center": { slug: "accounting-learning-center", title: "Accounting Learning Center", getComponent: () => import("@/components/videos/accounting-learning-center") },
  "a-strategy-to-build-wealth-not-debt": { slug: "a-strategy-to-build-wealth-not-debt", title: "A Strategy to Build Wealth, Not Debt", getComponent: () => import("@/components/videos/a-strategy-to-build-wealth-not-debt") },
  "a-beginners-guide-to-borrowing-wisely": { slug: "a-beginners-guide-to-borrowing-wisely", title: "A Beginner's Guide to Borrowing Wisely", getComponent: () => import("@/components/videos/a-beginners-guide-to-borrowing-wisely") },
};

// ============================================================================
// PUBLIC API FUNCTIONS
// ============================================================================

export function getAllLessons(): ContentItem[] {
  return Object.values(lessonsRegistry).sort((a, b) => a.title.localeCompare(b.title));
}

export function getAllVideos(): ContentItem[] {
  return Object.values(videosRegistry).sort((a, b) => a.title.localeCompare(b.title));
}

export function getLessonBySlug(slug: string): ContentItem | null {
  return lessonsRegistry[slug] ?? null;
}

export function getVideoBySlug(slug: string): ContentItem | null {
  return videosRegistry[slug] ?? null;
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
