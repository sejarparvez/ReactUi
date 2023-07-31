import Link from "next/link";
import FaqItem from "./FaqItem";

export default function FaqSupport() {
  return (
    <div>
      <div className="text-gray-500 font-medium">Support</div>
      <div className="flex flex-col">
        <div className="border-b pb-4">
          <FaqItem
            question="Do you offer technical support?"
            answer={
              <div className="flex flex-col gap-4">
                <p>
                  Tailwind UI is a self-serve product, meaning that while we do
                  offer customer support for account management and licensing
                  related concerns, the expectation is that customers have the
                  requisite knowledge of Tailwind CSS, HTML, React, and Vue to
                  use the product successfully.{" "}
                </p>
                <p>
                  Because every project is different and the way independently
                  authored pieces of code interact can be complex and
                  time-consuming to understand,{" "}
                  <span className="font-bold text-black">
                    {" "}
                    we do not offer technical support or consulting.
                  </span>
                </p>
                <p>
                  Tailwind UI customers do get access to a private Discord
                  community where you can ask questions and help others with
                  their questions in return, but we don't offer first-party
                  technical support or consulting here ourselves
                </p>
              </div>
            }
          />
        </div>
        <div>
          <FaqItem
            question="What is your refund policy?"
            answer={
              <div className="flex flex-col gap-4">
                <p>
                  If you're unhappy with your purchase for any reason, email us
                  at{" "}
                  <Link
                    href={"mailto:parvez@yahoo.com"}
                    className="font-bold text-indigo-600"
                  >
                    support@tailwindui.com
                  </Link>{" "}
                  within 30 days and we'll refund you in full, no questions
                  asked.{" "}
                </p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
