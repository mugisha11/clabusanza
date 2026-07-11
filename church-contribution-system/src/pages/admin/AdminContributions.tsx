import { useState } from "react";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { MOCK_CONTRIBUTIONS } from "../../data";
import { Search, Download, Filter } from "lucide-react";

export default function AdminContributions() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">All Contributions</h1>
          <p className="text-sm text-gray-500">View and manage all private contribution records.</p>
        </div>
        <Button size="sm" variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export CSV
        </Button>
      </div>

      <Card>
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Search by receipt or code..." 
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" className="sm:w-auto w-full">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Receipt</th>
                <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Code</th>
                <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Method</th>
                <th className="px-4 py-2.5 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_CONTRIBUTIONS.map((cont) => (
                <tr key={cont.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 py-2 whitespace-nowrap text-xs font-medium text-gray-900">{cont.receiptNumber}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs font-mono text-gray-500">{cont.contributionCode}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs font-bold text-gray-900">RWF {cont.amount.toLocaleString()}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500">{cont.date}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-xs text-gray-500">{cont.paymentMethod}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`inline-flex items-center rounded px-2 py-0.5 text-[10px] font-medium ${cont.status === 'Completed' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}>
                      {cont.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Showing 1 to 20 of 145 entries</span>
          <div className="flex space-x-1">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
