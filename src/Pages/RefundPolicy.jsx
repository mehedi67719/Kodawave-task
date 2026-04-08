import React from 'react';
import { Link } from 'react-router';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          <p className="text-gray-600 mb-6">Last updated: April 8, 2026</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                At Kodawave, we strive to ensure complete customer satisfaction. This Refund Policy outlines the terms 
                and conditions under which refunds may be issued for our services. By purchasing our services, you agree 
                to the terms outlined in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Eligibility for Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Refunds may be considered under the following circumstances:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Services have not yet been initiated or commenced</li>
                <li>Material breach of contract by Kodawave</li>
                <li>Failure to deliver agreed-upon services within the specified timeframe</li>
                <li>Duplicate payments or billing errors</li>
                <li>Cancellation within the agreed cancellation period</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Non-Refundable Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">The following are generally non-refundable:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Services that have already been completed and delivered</li>
                <li>Custom work that has been initiated based on client specifications</li>
                <li>Third-party costs incurred on behalf of the client (domain registrations, hosting, licenses, etc.)</li>
                <li>Consultation fees for completed sessions</li>
                <li>Deposits once work has commenced</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Refund Request Process</h2>
              <p className="text-gray-700 leading-relaxed mb-4">To request a refund, please:</p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                <li>Contact us at hello@kodawave.com with your order details</li>
                <li>Provide a clear explanation of the reason for the refund request</li>
                <li>Include any supporting documentation or evidence</li>
                <li>Submit your request within 14 days of the relevant transaction or service date</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Processing Time</h2>
              <p className="text-gray-700 leading-relaxed">
                Refund requests will be reviewed within 5-7 business days. If approved, refunds will be processed 
                within 10-15 business days using the original payment method. Processing times may vary depending 
                on your payment provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Partial Refunds</h2>
              <p className="text-gray-700 leading-relaxed">
                In cases where services have been partially completed, we may issue a partial refund based on:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-4">
                <li>The percentage of work completed</li>
                <li>Resources already allocated and consumed</li>
                <li>Third-party expenses that cannot be recovered</li>
                <li>The terms specified in your project agreement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cancellation Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Clients may cancel their project at any time by providing written notice. Cancellation terms:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Cancellation before work begins: Full refund minus any administrative fees</li>
                <li>Cancellation after work has started: Refund based on work completed and costs incurred</li>
                <li>Cancellation after delivery: No refund applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed">
                If you are not satisfied with our response to your refund request, you may escalate the matter to 
                our management team. We are committed to resolving disputes fairly and promptly. If an agreement 
                cannot be reached, disputes will be resolved through arbitration in accordance with the laws of Bangladesh.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                Kodawave reserves the right to modify this Refund Policy at any time. Changes will be effective 
                immediately upon posting to our website. Your continued use of our services after changes constitutes 
                acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about this Refund Policy or to request a refund, please contact us:
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-700">Email: hello@kodawave.com</p>
                <p className="text-gray-700">Phone: +880 1234-567890</p>
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

export default RefundPolicy;
