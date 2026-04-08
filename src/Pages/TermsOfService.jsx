import React from 'react';
import { Link } from 'react-router';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-6">Last updated: April 8, 2026</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using the Kodawave website and services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of the terms, you may not access the service. These terms apply to all visitors, 
                users, and others who access or use the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kodawave provides web development, design, and digital marketing services. We reserve the right to modify, 
                suspend, or discontinue any aspect of our services at any time without notice.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The availability of our services may be subject to delays, interruptions, or errors. We strive to maintain 
                high availability but do not guarantee uninterrupted service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide accurate and complete information when using our services</li>
                <li>Maintain the security and confidentiality of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Not interfere with or disrupt the integrity or performance of our services</li>
                <li>Not attempt to gain unauthorized access to our systems or networks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The service and its original content, features, and functionality are owned by Kodawave and are protected 
                by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Upon full payment, clients receive a license to use the deliverables created specifically for them. 
                Kodawave retains the right to display completed work in our portfolio unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment terms will be specified in individual project agreements or invoices. Generally:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>A deposit may be required before work begins</li>
                <li>Final payment is due upon project completion and delivery</li>
                <li>Late payments may be subject to additional fees</li>
                <li>All fees are non-refundable unless otherwise stated</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Kodawave, its directors, employees, partners, agents, suppliers, or affiliates be liable 
                for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of 
                or inability to access or use the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, 
                your right to use the services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of Bangladesh, without regard 
                to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not 
                be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
                is material, we will provide at least 30 days' notice prior to any new terms taking effect. By continuing 
                to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-700">Email: hello@kodawave.com</p>
                <p className="text-gray-700">Address: Chanchal Road, Puraton Jashore, Jashore - 7400</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link to="/" className="text-blue-600 hover:text-blue-700 font-semibold">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
