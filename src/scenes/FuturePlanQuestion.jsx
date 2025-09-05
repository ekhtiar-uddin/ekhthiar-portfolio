import { Minus, Plus } from "lucide-react";
import { useState } from "react";
const faqs = [
  {
    id: "faq1",
    question: "What plan should I get if I’m managing a team?",
    answer:
      "The best plan for team management is the Business plan. It includes all the features you need when managing a team, such as Team Management & Tools, Team Tracking, Team Calendar, and Messaging to simplify collaboration and property operations across your team.",
  },
  {
    id: "faq2",
    question: "What plan works best for me?",
    answer:
      "Depending on your business requirements, you can subscribe to the plan that contains the features you need. The Growth plan is ideal for landlords with small and medium-sized portfolios, while property managers overseeing larger operations will find the Business plan most helpful for managing properties efficiently.",
  },
  {
    id: "faq3",
    question: "Why do you need property management software?",
    answer:
      "RentMode simplifies administrative, marketing, and operational tasks for property managers who oversee multiple rental properties. It allows you to post property listings, advertise rentals, sign lease agreements online with e-signatures, receive rent payments via credit card, debit card, or ACH, and manage and resolve maintenance requests from tenants easily, speeding up the leasing process to keep your properties occupied with quality tenants. RentMode equips property managers with everything needed to launch, operate, communicate with tenants, and grow your rental business from a single organized platform.",
  },
  {
    id: "faq4",
    question: "Who can use rental property management software?",
    answer:
      "Property management software like RentMode can be used by landlords, property managers, tenants, owners, and service professionals. It helps landlords and managers collect rent online, manage maintenance requests, track accounting, sign lease agreements, communicate with tenants, and advertise vacancies. Tenants can search for rentals, pay rent, sign leases, and request maintenance online. Owners can track property data and transactions easily, while service professionals can manage maintenance tasks, receive payments, and interact with clients through the platform.",
  },
  {
    id: "faq5",
    question: "Property management software solves many problems?",
    answer:
      "Property management software solves many problems, making a property manager's daily routines more manageable and streamlined. Here are just a few issues that property management software solves",
  },
];

const FuturePlanQuestion = ({ projectTitle, futurePlans }) => {
  const [currentId, setCurrentId] = useState(null);

  const handleVisibility = (itemId) => {
    if (itemId === currentId) {
      setCurrentId(null);
    } else {
      setCurrentId(itemId);
    }
  };

  return (
    <div className="mb-20 mt-12 ">
      <h1 className="text-3xl text-d2 font-semibold text-primary-800">
        Future Plan of {projectTitle}
      </h1>

      <section className="w-full">
        {futurePlans?.map((item) => (
          <div
            onClick={() => handleVisibility(item?.id)}
            key={item?.id}
            className="border-b border-b3"
          >
            <div className="cursor-pointer flex justify-between items-center py-2">
              <h1 className="pb-5 mt-4 font-bold text-xl text-black font-Ovo">
                {item?.question}
              </h1>
              <div className="text-d2 hover:scale-110 transition-transform duration-200">
                {item?.id === currentId ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </div>
            </div>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ${
                item?.id === currentId ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-d2 text-left pb-5 font-Poppins leading-relaxed">
                  {item?.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FuturePlanQuestion;
