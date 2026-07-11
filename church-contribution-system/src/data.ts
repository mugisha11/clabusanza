import { Member, Contribution, Campaign, DashboardStats, ContactMessage, ContactInfo } from "./types";
import { subDays, format } from "date-fns";

export const MOCK_CAMPAIGN: Campaign = {
  name: "Christian Life Assembly Busanza Multipurpose Hall",
  targetAmount: 5000000,
  currentAmount: 3250450,
  startDate: "2023-01-01",
  endDate: "2024-12-31",
};

export const MOCK_STATS: DashboardStats = {
  totalRaised: 3250450,
  todayContributions: 12500,
  totalContributors: 458,
  pendingConfirmations: 12,
};

export const MOCK_MEMBERS: Member[] = [
  { id: "1", code: "CLA-BZ-001", name: "John Doe", phone: "+256 700 000001", status: "Active", lastContributionDate: "2023-10-15", totalGiven: 50000 },
  { id: "2", code: "CLA-BZ-002", name: "Jane Smith", phone: "+256 772 000002", status: "Active", lastContributionDate: "2023-10-18", totalGiven: 120000 },
  { id: "3", code: "CLA-BZ-003", name: "Peter K.", phone: "+256 750 000003", status: "Inactive", lastContributionDate: "2023-05-12", totalGiven: 10000 },
];

export const MOCK_CONTRIBUTIONS: Contribution[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `cont-${i}`,
  receiptNumber: `REC-${10000 + i}`,
  contributionCode: `CLA-BZ-00${(i % 5) + 1}`,
  amount: Math.floor(Math.random() * 50000) + 5000,
  date: format(subDays(new Date(), Math.floor(Math.random() * 30)), 'yyyy-MM-dd HH:mm'),
  paymentMethod: ["Cash", "MTN MoMo", "Airtel Money", "Bank Transfer"][Math.floor(Math.random() * 4)] as any,
  status: Math.random() > 0.8 ? "Pending" : "Completed",
  reference: `TXN-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
}));

export const MOCK_CHART_DATA = [
  { name: "Jan", amount: 120000 },
  { name: "Feb", amount: 150000 },
  { name: "Mar", amount: 200000 },
  { name: "Apr", amount: 180000 },
  { name: "May", amount: 220000 },
  { name: "Jun", amount: 250000 },
  { name: "Jul", amount: 210000 },
  { name: "Aug", amount: 280000 },
  { name: "Sep", amount: 310000 },
  { name: "Oct", amount: 340000 },
];

export const MOCK_CONTACT_INFO = {
  address: "Busanza, Kicukiro, Kigali, Rwanda",
  phone: "+250 788 000 000",
  email: "info@clabusanza.org",
  workingHours: "Mon-Fri: 8:00 AM - 5:00 PM",
};

export const MOCK_CONTACT_MESSAGES: ContactMessage[] = [];
