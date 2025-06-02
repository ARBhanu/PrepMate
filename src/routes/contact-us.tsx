import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Github,
  MessageCircle,
} from "lucide-react";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      {/* Contact Info */}
      <div className="space-y-4 mb-8">
        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin size={20} className="text-gray-600 mt-1" />
          <p>BH-7, NIT Jalandhar, Punjab, India</p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <Mail size={20} className="text-gray-600" />
          <a href="mailto:amitk.it.21@nitj.ac.in" className="hover:underline text-blue-600">
            amitk.it.21@nitj.ac.in
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <Phone size={20} className="text-gray-600" />
          <a href="tel:+919636480399" className="hover:underline text-blue-600">
            +91 9636480399
          </a>
        </div>

        {/* Social Media */}
        <div className="flex gap-4 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/amit-kumar-070b3a231/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/ARBhanu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            <Github size={24} />
          </a>
          <a
            href="https://wa.me/919636480399"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-500"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Your email"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded p-2"
            rows={4}
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
