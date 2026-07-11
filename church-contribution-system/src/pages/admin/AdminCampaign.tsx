import { Card, CardContent, CardHeader, CardTitle } from "../../components/Card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { MOCK_CAMPAIGN } from "../../data";

export default function AdminCampaign() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Campaign Management</h1>
        <p className="text-sm text-gray-500">Update the core details of the building campaign.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input 
                  label="Campaign Name" 
                  defaultValue={MOCK_CAMPAIGN.name}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    label="Target Amount (RWF)" 
                    type="number"
                    defaultValue={MOCK_CAMPAIGN.targetAmount}
                  />
                  <Input 
                    label="Current Amount (RWF)" 
                    type="number"
                    defaultValue={MOCK_CAMPAIGN.currentAmount}
                    disabled
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    label="Start Date" 
                    type="date"
                    defaultValue={MOCK_CAMPAIGN.startDate}
                  />
                  <Input 
                    label="End Date" 
                    type="date"
                    defaultValue={MOCK_CAMPAIGN.endDate}
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span className="text-gray-500">Progress</span>
                    <span className="text-primary">{((MOCK_CAMPAIGN.currentAmount / MOCK_CAMPAIGN.targetAmount) * 100).toFixed(1)}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(MOCK_CAMPAIGN.currentAmount / MOCK_CAMPAIGN.targetAmount) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                  <p className="text-sm text-green-800 font-medium text-center">Campaign is currently ACTIVE</p>
                </div>
                <Button variant="outline" className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
                  Pause Campaign
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
