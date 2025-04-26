import  { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      user_name: userName,
      user_phone: userPhone,
      user_email: userEmail,
      user_address: userAddress,
      title:"Pest Control",
      name:"Pest Control",
      message: message,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    emailjs
      .send(
        'service_cnlusd3', // Your EmailJS Service ID
        'template_lo74vc3', // Your EmailJS Template ID
        templateParams,
        'jr9fqioLswz6tdy46' // Your EmailJS Public Key
      )
      .then(() => {
        alert('Email sent successfully!');
        // Reset the form after sending the email
        setUserName('');
        setUserPhone('');
        setUserEmail('');
        setUserAddress('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send email.');
      });
  };

  return (
    <section id="contact" className="bg-[#e2f2e2] bg-cover bg-center py-12 px-4 text-white" style={{ backgroundImage: "url('/contact-bg.jpg')" }}>
      <div className="bg-[#fafdfa] bg-opacity-60 p-8 rounded-lg max-w-2xl mx-auto text-black">
        <h2 className="text-2xl font-bold mb-6 text-[green]">Contact Us</h2>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="p-2  bg-[white] rounded text-black outline-none border-2 border-[gray]"
          />
          <input
            type="text"
            placeholder="Phone"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            className="p-2 rounded text-black outline-none border-2 border-[gray]"
          />
          <input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="p-2 rounded text-black outline-none border-2 border-[gray]"
          />
          <input
            type="text"
            placeholder="Address"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            className="p-2 rounded text-black outline-none border-2 border-[gray]"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 outline-none border-2 border-[gray] rounded text-black"
            rows={4}
          ></textarea>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-10" /> I'm not a robot
          </div>
          <button type="submit" className="bg-[#458430] text-white px-4 py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
