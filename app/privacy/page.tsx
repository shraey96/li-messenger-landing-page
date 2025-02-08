import React from "react";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="mt-2 text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At DraftAI, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, and protect your information when
              you use our Chrome extension and website. By using DraftAI, you
              agree to the collection and use of information in accordance with
              this policy.
            </p>
          </section>

          {/* Information Collection */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Information Collection
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  2.1. Message Data
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    We temporarily process the last 20-30 messages from your
                    LinkedIn conversations.
                  </li>
                  <li>
                    Message data is used solely for generating AI-powered
                    responses.
                  </li>
                  <li>We do not store any message content on our servers.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  2.2. Account Information
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Email address for account management</li>
                  <li>Subscription and billing information</li>
                  <li>Usage statistics to improve our service</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Use of Information */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Use of Information
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>We use your information to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Provide and improve our AI-powered message composition service
                </li>
                <li>Process your subscription and payments</li>
                <li>Send important service updates and announcements</li>
                <li>Analyze and improve our service performance</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Data Security
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                4.1. We implement industry-standard security measures to protect
                your information.
              </p>
              <p>
                4.2. Message data is processed in real-time and is not stored.
              </p>
              <p>
                4.3. All data transmissions between our extension and servers
                are encrypted.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Data Retention
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                5.1. Message data is only retained temporarily during
                processing.
              </p>
              <p>
                5.2. Account information is retained as long as you maintain an
                active account.
              </p>
              <p>
                5.3. You can request deletion of your account data at any time.
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Third-Party Services
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                6.1. We use secure payment processors for handling
                subscriptions.
              </p>
              <p>6.2. Our extension integrates with LinkedIn's platform.</p>
              <p>
                6.3. We do not share your data with third parties for marketing
                purposes.
              </p>
            </div>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Your Rights
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Changes to Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Contact Us
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Email: support@draftai.io</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
