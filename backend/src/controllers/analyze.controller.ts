import { Request, Response } from "express";
import { calculateInvestment, InvestmentParams, InvestmentResult } from "../utils/calculations";

interface AnalyzeRequestBody {
  purchasePrice: number;
  monthlyRent: number;
  downPaymentRate: number;
  interestRate: number;
  expenses: number;
}

export const analyzeProperty = async (
  req: Request<{}, {}, AnalyzeRequestBody>,
  res: Response
) => {
  const { purchasePrice, monthlyRent, downPaymentRate, interestRate, expenses } = req.body;

  const params: InvestmentParams = {
    purchasePrice,
    monthlyRent,
    downPaymentRate,
    interestRate,
    termYears: 30,
    expenses
  };

  const result: InvestmentResult = calculateInvestment(params);

  res.json(result);
};
