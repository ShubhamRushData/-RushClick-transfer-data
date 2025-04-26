export default function StatsHighlights() {
    return (
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl border p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow">
          {/* Card 1 */}
          <div>
            <img
              src="/man.png"
              alt="Happy Customers"
              className="w-14 h-14 mx-auto mb-3"
            />
            <h3 className="text-lg font-bold">10Lacs+</h3>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </div>
  
          {/* Card 2 */}
          <div>
            <img
              src="/star.png"
              alt="Google Rating"
              className="w-14 h-14 mx-auto mb-3"
            />
            <h3 className="text-lg font-bold">04/05</h3>
            <p className="text-sm text-gray-600">400+ Reviews on Google</p>
          </div>
  
          {/* Card 3 */}
          <div>
            <img
              src="/earth.png"
              alt="Cities"
              className="w-14 h-14 mx-auto mb-3"
            />
            <h3 className="text-lg font-bold">30+ Cities</h3>
            <p className="text-sm text-gray-600">Presence Across India</p>
          </div>
  
          {/* Card 4 */}
          <div>
            <img
              src="/medeal.png"
              alt="Warranty"
              className="w-14 h-14 mx-auto mb-3"
            />
            <h3 className="text-lg font-bold">Warranty Backed Service</h3>
          </div>
        </div>
      </section>
    );
  }
  