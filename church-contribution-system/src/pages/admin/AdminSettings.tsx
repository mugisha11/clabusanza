import { Card, CardContent, CardHeader, CardTitle } from "../../components/Card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
        <p className="text-sm text-gray-500">Configure global application preferences.</p>
      </div>

      <div className="max-w-3xl space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Church Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-[10px] text-gray-400">Logo</span>
                </div>
                <Button variant="outline" size="sm">Upload New Logo</Button>
              </div>
              
              <Input 
                label="Church Name" 
                defaultValue="Christian Life Assembly Busanza"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Email Address" type="email" defaultValue="contact@clarwanda.org" />
                <Input label="Phone Number" defaultValue="+256 800 000000" />
              </div>

              <div className="pt-2">
                <Button>Save Information</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security & Access</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-md">
                <div>
                  <p className="font-medium text-sm text-gray-900">Two-Factor Authentication</p>
                  <p className="text-xs text-gray-500">Require 2FA for all admin accounts</p>
                </div>
                <div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle" id="toggle1" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-gray-300 appearance-none cursor-pointer transition-transform duration-200 ease-in-out checked:translate-x-4 checked:border-primary" />
                  <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-4 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-md">
                <div>
                  <p className="font-medium text-sm text-gray-900">Automated Backups</p>
                  <p className="text-xs text-gray-500">Daily export of contribution records</p>
                </div>
                <div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle" id="toggle2" defaultChecked className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 border-primary appearance-none cursor-pointer transition-transform duration-200 ease-in-out translate-x-4" />
                  <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-4 rounded-full bg-primary cursor-pointer"></label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
