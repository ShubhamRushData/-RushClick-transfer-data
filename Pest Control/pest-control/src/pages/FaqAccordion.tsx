import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of pests do you treat?",
    answer:
      "We offer comprehensive pest control services for a wide range of common household pests, including (but not limited to) cockroaches, ants, termites, mosquitoes, rodents (mice and rats), spiders, bed bugs, and wasps.",
  },
  {
    question: "How safe is your pest control treatment for my family and pets?",
    answer: " your family’s and pets' safety is our top priority. We use only eco-friendly, non-toxic, and pet-safe treatments that effectively eliminate pests without harming your loved ones. Our team is trained to apply products precisely where they’re needed, ensuring minimal exposure while delivering maximum results. We carefully select treatments that are safe for children and pets, allowing you to rest easy knowing your home is protected. Additionally, we offer advice on any precautions to take, ensuring a safe environment for everyone.",
  },
  {
    question: "What happens during a pest control treatment?",
    answer: "During a pest control treatment, our team will first inspect your property to identify the pests and the best approach to treat them. Once we understand the situation, we'll apply safe, effective treatments in targeted areas. The process usually takes a few hours, depending on the severity of the infestation. After the treatment, we'll provide you with guidelines on what to do and how to maintain a pest-free environment. Our goal is to ensure your home is pest-free while keeping your family and pets safe.",
  },
  {
    question: "What cleaning services do you offer?",
    answer: "we offer comprehensive cleaning services that go hand-in-hand with our pest control treatments. Our services include:Post-treatment cleaning – Thorough cleaning after pest removal to ensure your home is fresh and safe.Attic cleaning – Removal of debris, old insulation, and pest droppings, followed by sanitization.Decontamination – Disinfecting areas affected by pests, such as kitchens or bathrooms.General pest-related cleaning – Cleaning areas like crawl spaces or attics to eliminate pest residues and prevent future infestations.Our goal is to provide a complete pest-free experience, ensuring your home is not only pest-free but also clean and sanitized.",
  },
  {
    question: "How long will the cleaning service take?",
    answer: "The duration of our cleaning service depends on the size of your property and the extent of the cleaning required. Typically, our cleaning services take between 1 to 3 hours. For larger areas or more intensive cleaning, such as attic restoration or post-treatment deep cleaning, it may take a little longer. We always aim to complete the service as efficiently as possible while ensuring the highest standards of cleanliness and safety.",
  },
  {
    question: "Do your pest control services come with any warranties?",
    answer: "Yes, our pest control services come with a satisfaction guarantee. We stand by the effectiveness of our treatments, and if pests return within the warranty period, we will re-treat your property at no extra cost. The duration of the warranty varies depending on the service and the type of pest, but we ensure that you are fully protected and satisfied with the results.",
  },
  {
    question: "Are you a certified company?",
    answer: "Yes, Capital Pest Control (India) is a fully certified and licensed pest control company. Our technicians are trained, experienced, and follow industry standards to ensure safe, effective, and eco-friendly pest control solutions. We are committed to maintaining the highest levels of professionalism and customer satisfaction.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Top <span className="text-[green]">FAQ's</span>
      </h2>
      <div className="max-w-4xl mx-auto rounded-md shadow-md overflow-hidden">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggle(index)}
              className={`w-full text-left px-6 py-4 flex justify-between items-center transition-all ${
                openIndex === index ? "bg-blue-100" : "bg-white hover:bg-gray-50"
              }`}
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-700" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-700" />
              )}
            </button>
            {openIndex === index && faq.answer && (
              <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
