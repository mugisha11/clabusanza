import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Card, CardContent } from "../components/Card";
import { ArrowLeft, Printer, Download, Building2 } from "lucide-react";

export default function ReceiptPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => navigate("/")}
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Home
          </button>
          
          <div className="flex space-x-3">
            <Button variant="outline" size="sm" onClick={() => window.print()}>
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
            <Button variant="primary" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Printable Area */}
        <Card className="print:shadow-none print:border-none print:w-full">
          <CardContent className="p-6 sm:p-8">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="CLA Logo" className="w-10 h-10 object-contain" />
                <div>
                  <h2 className="font-bold text-lg text-gray-900">Christian Life Assembly Busanza</h2>
                  <p className="text-xs text-gray-500">Multipurpose Hall</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Receipt Number</p>
                <p className="font-mono text-sm text-gray-900 font-semibold">REC-10542</p>
              </div>
            </div>

            <div className="border-t border-b border-gray-100 py-6 mb-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Date</span>
                <span className="font-medium text-gray-900">{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Contribution Code</span>
                <span className="font-medium text-gray-900 font-mono bg-gray-50 px-1.5 py-0.5 rounded">CLA-BZ-00562</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Status</span>
                <span className="inline-flex items-center rounded bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                  Completed
                </span>
              </div>
            </div>

            <div className="flex justify-between items-end mb-8">
              <span className="text-base font-medium text-gray-900">Total Amount</span>
              <span className="text-2xl font-bold text-primary">RWF 500,000</span>
            </div>

            <div className="flex items-center justify-center pt-6 border-t border-gray-100">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-md mx-auto mb-3 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-[10px] text-gray-400">QR CODE</span>
                </div>
                <p className="text-xs text-gray-500">Scan to verify receipt authenticity</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
