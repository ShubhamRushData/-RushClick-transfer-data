export default function CorporatePestControl() {
    return (
      <section className="bg-black text-white py-16 px-6 relative overflow-hidden">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#ff2a00] font-semibold text-sm mb-2">
              Corporate Pest Control
            </p>
            <h2 className="text-4xl font-bold leading-tight">
              We fix things around your house so you don’t have to.
            </h2>
          </div>
          <div>
            <p className="mb-6">
            At  Pest Control (India), we proudly provide a wide range of services, consultancy, and effective pest solutions to serve all our valued customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[red] text-black font-semibold px-6 py-3 rounded hover:bg-[#e27474] transition-all">
                ➔ Request An Estimate
              </button>
              <button className="border border-white px-6 py-3 font-semibold rounded hover:bg-white hover:text-black transition-all">
                Meet Our Experts
              </button>
            </div>
          </div>
        </div>
  
        {/* Services Cards */}
        <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white text-black p-6 rounded shadow">
            <h3 className="text-lg font-bold mb-2">Termite Control</h3>
            <p className="text-sm text-gray-700">
              Termites are sometimes called "white ants", though they are not closely
              related to true ants. Two of the major types of termites are Drywood
              termites and Sub-terranean termites.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded shadow">
            <h3 className="text-lg font-bold mb-2">Rat & Rodent Control</h3>
            <p className="text-sm text-gray-700">
              Rats of either species, especially young ones, can squeeze beneath a door
              with only a 2 cm gap. If the door is made of wood, the rat may gnaw to
              enlarge the gap.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded shadow">
            <h3 className="text-lg font-bold mb-2">Mosquitoes & Flies Control</h3>
            <p className="text-sm text-gray-700">
              Mosquitoes are vectors of numerous diseases such as malaria, yellow
              fever, filariasis, dengue chikungunya. Most female mosquitoes require a
              blood meal before they can produce a batch of eggs.
            </p>
          </div>
        </div>
      </section>
    );
  }
  