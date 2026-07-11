/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContributePage from "./pages/ContributePage";
import ReceiptPage from "./pages/ReceiptPage";
import ProgressPage from "./pages/ProgressPage";
import ContactUsPage from "./pages/ContactUsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminMembers from "./pages/admin/AdminMembers";
import AdminContributions from "./pages/admin/AdminContributions";
import AdminReports from "./pages/admin/AdminReports";
import AdminCampaign from "./pages/admin/AdminCampaign";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminLayout from "./components/AdminLayout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="members" element={<AdminMembers />} />
          <Route path="contributions" element={<AdminContributions />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="campaign" element={<AdminCampaign />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}
