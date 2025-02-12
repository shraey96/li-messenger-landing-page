import React from "react";
import { MessageSquare, Mail, Clock, CheckCircle2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          </div>
          <p className="mt-2 text-gray-600">
            We're here to help and value your feedback
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              We'd love to hear from you! If you have any questions, feedback,
              or need assistance with DraftAI, please don't hesitate to reach
              out.
            </p>
          </section>

          {/* How to Contact Us */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              How to Contact Us
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-indigo-600/10 flex items-center justify-center flex-shrink-0">
                  <div className="gradient-bg rounded-xl p-2 text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-700">
                    <a
                      href="mailto:support@draftai.io"
                      className="text-blue-600 hover:underline"
                    >
                      support@draftai.io
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-indigo-600/10 flex items-center justify-center flex-shrink-0">
                  <div className="gradient-bg rounded-xl p-2 text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technical Support</h3>
                  <p className="text-gray-700">
                    For technical support, troubleshooting, or refunds, please
                    include:
                  </p>
                  <ul className="list-disc ml-5 mt-2 text-gray-700">
                    <li>Detailed description of your issue</li>
                    <li>Your operating system</li>
                    <li>Browser version</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-indigo-600/10 flex items-center justify-center flex-shrink-0">
                  <div className="gradient-bg rounded-xl p-2 text-white">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Feedback</h3>
                  <p className="text-gray-700">
                    We welcome your thoughts on how we can improve DraftAI! Feel
                    free to share any suggestions or feature requests.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-indigo-600/10 flex items-center justify-center flex-shrink-0">
                  <div className="gradient-bg rounded-xl p-2 text-white">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-gray-700">
                    We appreciate your feedback and will make every effort to
                    respond to all inquiries within 48 hours.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Thank You */}
          <section className="pt-4">
            <p className="text-gray-700 leading-relaxed">
              Thank you for supporting DraftAI, and we look forward to hearing
              from you!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
