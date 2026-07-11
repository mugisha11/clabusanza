import { Card, CardContent, CardHeader, CardTitle } from "../../components/Card";
import { Button } from "../../components/Button";
import { FileText, Download, Calendar, BarChart2 } from "lucide-react";

export default function AdminReports() {
  const reports = [
    { title: "Daily Summary", description: "Contributions received today, broken down by payment method.", icon: Calendar },
    { title: "Weekly Report", description: "Comprehensive view of the past 7 days of campaign activity.", icon: BarChart2 },
    { title: "Monthly Statement", description: "Aggregated monthly totals for accounting purposes.", icon: FileText },
    { title: "Campaign Overview", description: "Full campaign metrics from start to current date.", icon: BarChart2 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Reports & Exports</h1>
        <p className="text-sm text-gray-500">Generate and download financial reports.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start">
                <div className="p-2 bg-gray-50 rounded-md">
                  <report.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="ml-3 flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{report.title}</h3>
                  <p className="text-xs text-gray-500 mb-3">{report.description}</p>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Excel
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Custom Date Range</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <label className="block text-xs font-medium text-gray-700 mb-1">Start Date</label>
              <input type="date" className="flex h-8 w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            </div>
            <div className="flex-1 w-full">
              <label className="block text-xs font-medium text-gray-700 mb-1">End Date</label>
              <input type="date" className="flex h-8 w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            </div>
            <Button className="w-full sm:w-auto h-8 text-sm px-3">
              Generate Report
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
