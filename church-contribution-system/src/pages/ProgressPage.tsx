import { useNavigate } from "react-router-dom";
import { ArrowLeft, Flag, Target, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { MOCK_CAMPAIGN } from "../data";

export default function ProgressPage() {
  const navigate = useNavigate();
  const progress = (MOCK_CAMPAIGN.currentAmount / MOCK_CAMPAIGN.targetAmount) * 100;
  const remaining = MOCK_CAMPAIGN.targetAmount - MOCK_CAMPAIGN.currentAmount;

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Home
        </button>

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Campaign Progress</h1>
          <p className="text-gray-600">Track our journey to building the multipurpose hall. All data here is aggregated and anonymous.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-1">Target Goal</p>
              <h3 className="text-2xl font-bold text-gray-900">RWF {MOCK_CAMPAIGN.targetAmount.toLocaleString()}</h3>
            </CardContent>
          </Card>
          
          <Card className="border-primary/20 shadow-[0_0_15px_-3px_rgba(11,93,59,0.1)]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-1">Total Raised</p>
              <h3 className="text-2xl font-bold text-primary">RWF {MOCK_CAMPAIGN.currentAmount.toLocaleString()}</h3>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Flag className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-1">Remaining</p>
              <h3 className="text-2xl font-bold text-gray-900">RWF {remaining.toLocaleString()}</h3>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative pt-4 pb-8">
              <div className="flex justify-between items-end mb-4">
                <span className="text-3xl font-bold text-primary">{progress.toFixed(1)}%</span>
              </div>
              <div className="h-6 w-full bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Construction Timeline */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Milestones</h2>
          <div className="relative pl-6 border-l-2 border-gray-200 space-y-8">
            {[
              { title: "Foundation Complete", date: "Oct 15, 2023", active: true },
              { title: "Walls & Structure", date: "In Progress", active: false },
              { title: "Roofing", date: "Upcoming", active: false },
            ].map((milestone, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-[31px] w-4 h-4 rounded-full border-2 border-white ${milestone.active ? 'bg-primary' : 'bg-gray-300'}`}></div>
                <h4 className={`text-lg font-semibold ${milestone.active ? 'text-gray-900' : 'text-gray-500'}`}>{milestone.title}</h4>
                <p className="text-sm text-gray-500">{milestone.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
