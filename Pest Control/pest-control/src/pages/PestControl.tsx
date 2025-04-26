// import React from 'react';

const PestControlCards = () => {
  const services = [
    {
      title: 'General pest control',
      img: '/ganral1-pest.jpg',
      desc: 'General pest control involves addressing common pests such as ants, cockroaches, rodents, termites, mosquitoes, and other insects that may invade residential.',
    },
    {
      title: 'Termite pest control',
      img: '/Termite-pest.webp',
      desc: 'Termite pest control focuses on detecting and eliminating these pests before they cause irreversible damage. We utilize advanced treatment methods, including liquid.',
    },
    {
      title: 'Ant pest control',
      img: '/Ant-pest.jpg',
      desc: 'Using insecticide sprays around entry points (windows, doors, cracks) prevents ants from entering. For outdoor control, sprays can be applied around the perimeter of the house.',
    },
  ];

  return (
    <section id="service" className="py-10 px-4 md:px-20 bg-white">
      <h2 className="text-3xl text-[green] md:text-4xl font-bold text-center mb-10">
      Professional Pest Safety

      </h2>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[green] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <a
                href="#"
                className="bg-[#20a319] text-white px-5 py-2 rounded-md text-sm hover:bg-[#014f7a] transition"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PestControlCards;
