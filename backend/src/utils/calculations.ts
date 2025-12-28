export interface InvestmentParams {
  purchasePrice: number;
  monthlyRent: number;
  downPaymentRate: number;
  interestRate: number;
  termYears: number;
  expenses: number;
}

export interface InvestmentResult {
  downPayment: number;
  loanAmount: number;
  monthlyMortgage: number;
  cashFlow: number;
  annualROI: number;
}

export function calculateInvestment(params: InvestmentParams): InvestmentResult {
  const { purchasePrice, monthlyRent, downPaymentRate, interestRate, termYears, expenses } = params;

  const downPayment = purchasePrice * downPaymentRate;
  const loanAmount = purchasePrice - downPayment;

  const monthlyInterest = interestRate / 12;
  const totalPayments = termYears * 12;
  const monthlyMortgage =
    (loanAmount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -totalPayments));

  const cashFlow = monthlyRent - monthlyMortgage - expenses;

  const annualROI = ((cashFlow * 12) / downPayment) * 100;

  return { downPayment, loanAmount, monthlyMortgage, cashFlow, annualROI };
}
