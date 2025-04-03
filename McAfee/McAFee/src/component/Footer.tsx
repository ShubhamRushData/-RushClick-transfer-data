const Footer = () => {
  return (
    <footer className="bg-[#0f260f] text-white pt-8 ">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-center">
        {/* Company Info */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-indigo-500">MS.CODES</h3>
          <p className="mt-2 text-sm text-gray-400">
            Leading solutions in software development, antivirus activation, and IT services.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <h4 className="font-bold text-lg mb-4 text-indigo-500">Company</h4>
            <ul>
              <li><a href="#" className="text-sm hover:text-indigo-300">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-300">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-300">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-indigo-500">Support</h4>
            <ul>
              <li><a href="#" className="text-sm hover:text-indigo-300">Help Center</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-300">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-300">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-indigo-500">Products</h4>
            <ul>
              <li><a href="#" className="text-sm hover:text-indigo-300">Antivirus</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-300">VPN</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-300">Microsoft Office</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-indigo-500">Contact</h4>
            <ul>
              <li><a href="mailto:support@mscodes.com" className="text-sm hover:text-indigo-300">support@mscodes.com</a></li>
              <li><a href="tel:+1234567890" className="text-sm hover:text-indigo-300">+1 234 567 890</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className=" bg-[#0f260f] py-4 mt-8 text-center">
        <p className="text-sm text-gray-400">&copy; 2025 MS.CODES. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
