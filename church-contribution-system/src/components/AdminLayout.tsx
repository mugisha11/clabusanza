import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, CreditCard, FileBarChart, Settings, LogOut, Target } from "lucide-react";
import { cn } from "../lib/utils";

export default function AdminLayout() {
  const navigate = useNavigate();

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Members", href: "/admin/members", icon: Users },
    { name: "Contributions", href: "/admin/contributions", icon: CreditCard },
    { name: "Reports", href: "/admin/reports", icon: FileBarChart },
    { name: "Campaign", href: "/admin/campaign", icon: Target },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-56 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col h-auto md:h-screen sticky top-0">
        <div className="p-4 border-b border-gray-200 flex items-center space-x-2">
          <img src="/logo.png" alt="CLA Logo" className="w-7 h-7 object-contain" />
          <span className="font-semibold text-sm text-gray-900 truncate">Admin Portal</span>
        </div>
        <div className="flex-1 overflow-y-auto py-3 px-2 flex flex-col gap-0.5">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center space-x-2 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )
              }
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
        <div className="p-3 border-t border-gray-200">
          <button
            onClick={() => navigate("/admin/login")}
            className="flex items-center space-x-2 px-2.5 py-1.5 rounded-md text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 w-full transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden">
        <div className="p-4 md:p-6 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
