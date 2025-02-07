import React from "react";
import { ScrollText } from "lucide-react";

const Terms = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3">
            <ScrollText className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Terms and Conditions
            </h1>
          </div>
          <p className="mt-2 text-gray-600">Last updated: 06/02/2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to DraftAI ("we," "our," or "us"). By installing our
              Chrome extension and using our services, you agree to these Terms
              and Conditions. Please read them carefully before using DraftAI.
            </p>
          </section>

          {/* 2. Definitions */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Definitions
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                "Service" refers to the DraftAI Chrome extension and associated
                website.
              </li>
              <li>"User" refers to any individual who uses our Service.</li>
              <li>
                "Subscription" refers to the paid access to our Service's
                premium features.
              </li>
            </ul>
          </section>

          {/* 3. Service Description */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Service Description
            </h2>
            <p className="text-gray-700 leading-relaxed">
              DraftAI is a Chrome extension designed to enhance LinkedIn
              messaging through AI-powered composition assistance. The Service
              processes your LinkedIn messages to provide contextually relevant
              suggestions and improvements.
            </p>
          </section>

          {/* 4. Privacy and Data Usage */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Privacy and Data Usage
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                4.1. We process only the last 20-30 messages from your LinkedIn
                conversations to provide our Service.
              </p>
              <p>
                4.2. We do not store your messages permanently on our servers.
              </p>
              <p>
                4.3. Message data is only used to generate AI-powered responses
                and is not used for any other purpose.
              </p>
            </div>
          </section>

          {/* 5. Subscription and Payments */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Subscription and Payments
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>5.1. We offer monthly and yearly subscription plans.</p>
              <p>
                5.2. Subscription fees are billed in advance on a monthly or
                yearly basis.
              </p>
              <p>
                5.3. You may cancel your subscription at any time. Cancellation
                will be effective at the end of your current billing period.
              </p>
            </div>
          </section>

          {/* 6. Refund Policy */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Refund Policy
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                6.1. We offer a 7-day refund policy from the date of purchase.
              </p>
              <p>
                6.2. Refund requests must be submitted within 7 days of the
                initial purchase.
              </p>
              <p>
                6.3. Refunds will be processed using the original payment
                method.
              </p>
            </div>
          </section>

          {/* 7. User Obligations */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. User Obligations
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                7.1. You must use the Service in compliance with LinkedIn's
                terms of service.
              </p>
              <p>
                7.2. You agree not to use the Service for any unlawful purpose.
              </p>
              <p>
                7.3. You are responsible for maintaining the confidentiality of
                your account credentials.
              </p>
            </div>
          </section>

          {/* 8. Limitations of Liability */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Limitations of Liability
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>
                8.1. The Service is provided "as is" without any warranties.
              </p>
              <p>
                8.2. We are not responsible for any consequences resulting from
                the use of AI-generated messages.
              </p>
              <p>
                8.3. We are not liable for any technical issues or service
                interruptions.
              </p>
            </div>
          </section>

          {/* 9. Changes to Terms */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. We will
              notify users of any material changes via email or through the
              Service.
            </p>
          </section>

          {/* 10. Contact Information */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              10. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions about these Terms and Conditions, please contact
              us at support@draftai.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
