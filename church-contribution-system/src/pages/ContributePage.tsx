import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Card, CardContent } from "../components/Card";
import { ArrowLeft, CheckCircle2, FileText, Printer, Download } from "lucide-react";

export default function ContributePage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2); // Success state
    }, 1500);
  };

  if (step === 2) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-10 pb-10">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-8">
              Your contribution has been received securely. May God bless you abundantly.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-8 text-left space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Receipt Number</span>
                <span className="font-medium text-gray-900">REC-10542</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Contribution ID</span>
                <span className="font-medium text-gray-900">TXN-8A9F2B</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button onClick={() => navigate("/receipt")} className="w-full" variant="primary">
                <FileText className="w-4 h-4 mr-2" />
                View Full Receipt
              </Button>
              <Button onClick={() => navigate("/")} className="w-full" variant="outline">
                Return Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col py-12 px-4 sm:px-6">
      <div className="max-w-xl mx-auto w-full">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Home
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Make a Contribution</h1>
          <p className="text-gray-600">Your contribution is entirely private and secure.</p>
        </div>

        <Card>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="code"
                label="Member Contribution Code"
                placeholder="e.g. CLA-BZ-00562"
                required
              />
              
              <div className="space-y-1">
                <label className="block text-xs font-medium text-gray-700">Amount (RWF)</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">RWF</span>
                  <input
                    type="number"
                    className="flex h-8 w-full rounded-md border border-gray-300 bg-white px-2 py-1 pl-12 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    placeholder="0"
                    required
                    min="1000"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-medium text-gray-700">Payment Method</label>
                <select className="flex h-8 w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow">
                  <option value="momo">MTN Mobile Money</option>
                  <option value="airtel">Airtel Money</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="cash">Cash (Physical Drop-off)</option>
                </select>
              </div>

              <Input
                id="ref"
                label="Transaction Reference (Optional)"
                placeholder="e.g. TXN123456"
              />

              <div className="space-y-1">
                <label htmlFor="message" className="block text-xs font-medium text-gray-700">Message (Optional)</label>
                <textarea
                  id="message"
                  rows={3}
                  className="flex w-full rounded-md border border-gray-300 bg-white px-2 py-1 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none"
                  placeholder="Any message to accompany your contribution..."
                />
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full" size="md" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Complete Contribution"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
