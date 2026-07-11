import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                Welcome to Christian Life Assembly Busanza ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contribute to the Multipurpose Hall project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="mb-2">We collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Make a contribution</li>
                <li>Register as a member</li>
                <li>Contact us or send us a message</li>
                <li>Sign up for updates</li>
              </ul>
              <p className="mt-4">This information may include your name, phone number, email address, contribution history, and payment details (processed securely by our payment partners).</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-2">We use the information we collect or receive to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process your contributions and send receipts</li>
                <li>Communicate with you about the Multipurpose Hall project</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Maintain our membership and contribution records</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Sharing Your Information</h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. We may share your information only with trusted service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services. These third parties are bound by strict confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us using the information provided on our Contact Us page.
              </p>
            </section>
            
            <div className="pt-8 border-t border-gray-100 text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
