export interface Member {
  id: string;
  code: string;
  name: string;
  phone: string;
  status: "Active" | "Inactive";
  lastContributionDate: string;
  totalGiven: number;
}

export interface Contribution {
  id: string;
  receiptNumber: string;
  contributionCode: string; // From the member who gave
  amount: number;
  date: string;
  paymentMethod: "Cash" | "MTN MoMo" | "Airtel Money" | "Bank Transfer";
  status: "Completed" | "Pending";
  reference?: string;
  message?: string;
}

export interface Campaign {
  name: string;
  targetAmount: number;
  currentAmount: number;
  startDate: string;
  endDate: string;
}

export interface DashboardStats {
  totalRaised: number;
  todayContributions: number;
  totalContributors: number;
  pendingConfirmations: number;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}
