import { Card, CardContent, CardHeader, CardTitle } from "../../components/Card";
import { MOCK_STATS, MOCK_CHART_DATA, MOCK_CONTRIBUTIONS } from "../../data";
import { DollarSign, Users, Activity, Clock } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Raised", value: `RWF ${MOCK_STATS.totalRaised.toLocaleString()}`, icon: DollarSign, color: "text-primary", bg: "bg-primary/10" },
    { title: "Today's Contributions", value: `RWF ${MOCK_STATS.todayContributions.toLocaleString()}`, icon: Activity, color: "text-secondary", bg: "bg-secondary/10" },
    { title: "Total Contributors", value: MOCK_STATS.totalContributors.toString(), icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Pending Confirmations", value: MOCK_STATS.pendingConfirmations.toString(), icon: Clock, color: "text-orange-600", bg: "bg-orange-100" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-sm text-gray-500">Real-time metrics for the building campaign.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className={`p-2 rounded-md ${stat.bg}`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="ml-3">
                  <p className="text-xs font-medium text-gray-500">{stat.title}</p>
                  <p className="text-xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Contribution Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={MOCK_CHART_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0B5D3B" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0B5D3B" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} tickFormatter={(val) => `RWF ${val/1000}k`} dx={-10} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => [`RWF ${value.toLocaleString()}`, "Amount"]}
                  />
                  <Area type="monotone" dataKey="amount" stroke="#0B5D3B" strokeWidth={3} fillOpacity={1} fill="url(#colorAmount)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Contributions</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              {MOCK_CONTRIBUTIONS.slice(0, 6).map((cont) => (
                <div key={cont.id} className="p-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div>
                    <p className="text-xs font-medium text-gray-900 font-mono">{cont.contributionCode}</p>
                    <p className="text-[10px] text-gray-500">{cont.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-gray-900">RWF {cont.amount.toLocaleString()}</p>
                    <span className={`inline-flex items-center rounded px-1.5 py-0.5 text-[9px] font-medium ${cont.status === 'Completed' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}>
                      {cont.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
