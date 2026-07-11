import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="border-b border-gray-100/50 bg-white/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
          <img src="/logo.png" alt="CLA Logo" className="w-12 h-12 object-contain" />
          <span className="font-semibold text-xl text-primary tracking-tight">Christian Life Assembly Busanza</span>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate("/progress")} className="text-sm font-medium text-gray-800 hover:text-primary transition-colors">
            Progress
          </button>
          <Button onClick={() => navigate("/contribute")} variant="primary">
            Contribute
          </Button>
        </div>
      </div>
    </nav>
  );
}
