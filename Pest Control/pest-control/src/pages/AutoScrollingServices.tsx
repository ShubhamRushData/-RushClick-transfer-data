// ServiceCards.jsx
import  { useRef, useState, useEffect } from "react";

const services = [
  {
    title: "Bed Bug Exterminator",
    desc:
      "We specialize in fast and effective bed bug removal. Our team uses safe, proven methods to eliminate bed bugs from your home and ensure a peaceful, bite-free sleep.",
    img: "/Bed-Bug.jpg",
  },
  {
    title: "Foam Treatment Services",
    desc:
      "Our Foam Treatment Services are specially designed to reach deep into cracks, walls, and hidden areas where pests like termites and insects hide. This advanced method ensures complete coverage and long-lasting protection for your property. ",
    img: "/Foam-Treatment.jpg",
  },
  {
    title: "Pest Control and Removal",
    desc:
      "We provide reliable pest control and removal services to keep your home or business safe from unwanted pests. From ants and cockroaches to rodents and termites,  Your comfort and safety are our top priorities.",
    img: "/Pest-Control.jpg",
  },
  {
    title: "Mouse Control",
    desc:
      "Got mice in your home or office? We offer fast and effective mouse control services to safely remove them and stop them from coming back. Our team finds entry points, seals them, and uses safe methods to keep your space rodent-free and secure.",
    img: "/mou-3.jpg",
  },
  {
    title: "Termite Exterminator",
    desc:
      "Termites can silently damage your property—don’t wait until it’s too late. Our expert termite extermination service detects and eliminates termites from the source. We use advanced treatment methods to protect your home or business and prevent future infestations.",
    img: "/Termite-Exterminator.webp",
  },
  {
    title: "Bee Services",
    desc:
      "We provide safe and professional bee removal services to protect your home and family. Whether it’s a hive near your roof or bees swarming in your yard, our experts relocate them without harm and ensure your space is safe and bee-free.",
    img: "/Bee-Services.jpg",
  },
  {
    title: "Gopher/Mole Control",
    desc:
      "Gophers and moles can cause serious damage to your lawn and garden. Our control services are designed to safely remove these underground pests and prevent them from returning. We use effective, humane methods to protect your property from digging and destruction.",
    img: "/Gopher-Mole.jpg",
  },
  {
    title: "Attic Restoration",
    desc:
      "After a pest infestation, your attic insulation may be damaged or contaminated. Our attic restoration service includes safe removal of old insulation, thorough cleaning, and installation of fresh, energy-efficient insulation.",
    img: "/Attic-Restoration.jpg",
  },
];

const AutoScrollingServices = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleReadMore = (idx:number) => {
    setExpandedIndex(expandedIndex === idx ? null : (idx as number));
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!scrollContainer) return;
      scrollAmount += 1;
      scrollContainer.scrollLeft = scrollAmount;

      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center py-12 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Pest Control Services
      </h2>
      <div className="flex justify-center">
        <p className="mb-10 max-w-3xl text-sm md:text-base text-gray-600">
          At Casualty Pest Control, we provide comprehensive pest control
          solutions designed to protect your home, office, and commercial
          spaces.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-2 lg:px-4 py-2 scroll-smooth"
      >
        {services.map((service, idx) => {
          const isExpanded = expandedIndex === idx;
          const words = service.desc.split(" ");
          const shortDesc = words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");

          return (
            <div
              key={idx}
              className="w-52 md:w-56 lg:w-80 flex-shrink-0 bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-44 w-full sm:h-48 object-cover"
              />
              <div className="p-2 md:p-4 text-left">
                <h3 className="font-bold text-base sm:text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700">
                  {isExpanded ? service.desc : shortDesc}
                </p>
                {words.length > 30 && (
                  <button
                    onClick={() => toggleReadMore(idx)}
                    className="mt-2 text-green-700 font-medium text-sm"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AutoScrollingServices;