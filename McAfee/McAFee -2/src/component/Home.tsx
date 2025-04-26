
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate();
  
  // Dashboard options with optional values
  const dashboardOptions = [
    { name: "Dashboard", link: "#" },
    { name: "Windows", link: "#", optional: true ,  url: () => navigate("/window") },
    { name: "Microsoft Office", link: "#", optional: true ,  url: () => navigate("/office") },
    { name: "Servers", link: "#", optional: false ,  url: () => navigate("/office")  },
    { name: "Other Products", link: "#", optional: false ,  url: () => navigate("/window") },
    { name: "Settings", link: "#", optional: true ,  url: () => navigate("/window") }
  ];

  const recentPost = [
    { name: "OFFICE", link: "#", description:"How to Troubleshoot MS Office Crashes on Windows", img:"/office1.webp",  url: () => navigate("/office") },
    { name: "OFFICE", link: "#", optional: true, description:"Top Free Alternatives to Microsoft Office for Windows", img:"/office2.jpg",  url: () => navigate("/office") },
    { name: "WINDOWS", link: "#", optional: true, description:"How to Keep Your PC Running Smoothly", img:"/windows1.webp", url: () => navigate("/window") },
    { name: "OFFICE", link: "#", optional: false, description:"How to Set Up Microsoft Office 365 on Your Windows PC", img:"/office3.webp",  url: () => navigate("/office") },
    { name: "WINDOWS", link: "#", optional: false, description:"How to Install Microsoft Office on Windows for the First Time", img:"/window2.jpg", url: () => navigate("/window") },
    { name: "WINDOWS", link: "#", optional: true, description:"How to Optimize Windows for Better Performance", img:"/window3.webp",  url: () => navigate("/window") }
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen flex">
        {/* Left Sidebar (Hidden on mobile) */}
        <div className={`w-64 bg-[#95857e] text-[black] p-4 space-y-6 hidden md:block transition-all`}>
          <div className="font-bold text-xl">System Protection</div>
          <div>
            {dashboardOptions.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block py-2 hover:text-[white] px-2 hover:bg-[#533b33dc]"
                onClick={item.url} // Add toggleDropdown here
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>


        

        {/* Main Content Area */}
        <div className="flex-1   bg-[#f6fdf8] flex flex-col md:flex-row">
          {/* Menu Icon (Only visible on mobile) */}
          <div className="md:hidden bg-[#54351c]   flex justify-between items-center p-4">
           

              <p className="text-[white]"> A Beginner’s Guide</p>
            {/* </div> */}
          </div>

         

          {/* Main Article Section */}
          <div className="max-w-2xl p-6 mx-auto md:w-2/3 flex-1">
            <h1 className="text-3xl font-bold mb-4 text-blue-800">Top 5 Antivirus Software for 2025: Which One Should You Choose?</h1>
            <p className="text-gray-700">
            In today's digital age, cybersecurity threats are increasing daily. Whether you’re a casual user, a business professional, or a gamer, protecting your system from malware, ransomware, and phishing attacks is crucial. Choosing the right antivirus can make all the difference.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2 text-blue-800">Is Windows Defender Enough? A Guide to Choosing the Right Antivirus</h2>
            <p className="text-gray-700">
            With built-in security features and real-time protection, Windows Defender (now called Microsoft Defender Antivirus) has improved significantly in recent years. But is it enough to protect your device against modern cyber threats? Or do you need a third-party antivirus for better security?
            </p>
             <img className="md:w-lg rounded-md  w-sm  " src="/windows-features1.png" alt="" />
            <h2 className="text-xl font-semibold mt-4 mb-2 text-blue-800">How to Remove Viruses from Your PC Without Antivirus?</h2>
            <p className="text-gray-700">
            Viruses and malware can slow down your PC, steal your data, and even damage your system. While antivirus software is the easiest way to remove threats, you can still clean your PC manually without using any antivirus. Here’s how!
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2 text-blue-800">Antivirus Myths You Should Stop Believing</h2>
            <p className="text-gray-700">
            Antivirus myths can lead to security risks. Many believe that safe browsing alone prevents infections, but malware can still find its way in. Macs are often thought to be virus-proof, but they are still vulnerable. Free antivirus software is not useless; some offer solid protection, though premium versions provide better security. The idea that antivirus slows down a PC is outdated, as modern software is optimized for performance. Installing an antivirus doesn’t mean lifelong protection—it must be updated regularly to combat new threats.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2 text-blue-800">How Hackers Bypass Antivirus and What You Can Do About It</h2>
            <p className="text-gray-700">
            Hackers bypass antivirus software using advanced techniques. They use obfuscation to hide malicious code, making it undetectable. Encryption helps them disguise malware, while polymorphic viruses change their code frequently to avoid detection. Zero-day exploits target unknown vulnerabilities before security updates are released. Fileless malware operates in memory instead of traditional files, making it harder to trace. Hackers also use social engineering, tricking users into downloading infected files or clicking malicious links.
            </p>
            <img className="md:w-lg rounded-md  w-sm  " src="/money-backup.png" alt="" />

            <h2 className="text-xl font-semibold mt-4 mb-2 text-blue-800">Why Antivirus Alone Won’t Protect You: Cybersecurity Tips for 2025</h2>
            <p className="text-gray-700">
            Antivirus software is essential but not enough to keep you fully protected. Modern cyber threats go beyond traditional viruses, using phishing attacks, ransomware, and zero-day exploits to bypass security defenses. Hackers also target weak passwords, outdated software, and unprotected networks.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2 text-blue-800">The Dangers of Using Cracked Antivirus Software</h2>
            <p className="text-gray-700">
            Using cracked antivirus software can seem like an easy way to avoid paying for a legitimate license, but it comes with significant risks. Cracked software is often tampered with, meaning it can contain malware, ransomware, or spyware designed to steal personal information, log keystrokes, or damage your system.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2 text-blue-800">Phishing Attacks & Antivirus: Can Your Software Protect You?</h2>
            <p className="text-gray-700">
            Phishing attacks are a common form of cybercrime where attackers trick individuals into revealing sensitive information, such as passwords, credit card numbers, or personal details, by masquerading as trustworthy entities. While antivirus software can help detect and block certain types of malicious websites or files, it is not fully equipped to protect against phishing attacks.
            </p>
          </div>

          {/* Right Sidebar: Recent Posts */}
          <aside className="w-full md:w-1/3 mt-6 md:mt-0">
            <div className="p-6 bg-[#95857e] shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4 text-white">Recent Posts</h2>
              <ul className="space-y-4">
                {recentPost.map((items, index) => (
                  <li key={index} className="border-b pb-4 flex items-center space-x-3">
                    <img src={items.img} alt="Post Thumbnail" className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h3 className="text-[#cdc6c6] text-sm">{items.name}</h3>
                      <p className="font-bold hover:underline text-[#dce9dd] "   onClick={items.url} content="office1">{items.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Footer */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
