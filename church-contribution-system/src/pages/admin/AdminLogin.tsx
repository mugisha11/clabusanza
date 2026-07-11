import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Card, CardContent } from "../../components/Card";
import { Building2, Lock } from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      navigate("/admin/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <img src="/logo.png" alt="CLA Logo" className="w-16 h-16 object-contain mb-4" />
          <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
          <p className="text-gray-500 text-sm mt-1">Authorized personnel only</p>
        </div>

        <Card>
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="space-y-5">
              <Input
                label="Username or Email"
                type="text"
                placeholder="admin@church.org"
                required
              />
              
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                required
              />

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-600">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary mr-2" />
                  Remember me
                </label>
                <button type="button" className="text-primary hover:text-primary-hover font-medium">
                  Forgot password?
                </button>
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Authenticating..." : (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Sign In
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
