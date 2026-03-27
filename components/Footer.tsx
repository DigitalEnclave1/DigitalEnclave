import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="relative py-12 pt-0 pb-0 mt-0 text-black">
        {/* Connect Section */}
        <div className="block py-10 overflow-hidden text-start bg-gray-50 md:py-12 lg:py-16">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
              {/* Left Section */}
              <div className="w-full mb-8 text-center md:w-2/3 md:text-left md:mb-0">
                <div className="border-l-4 border-[#a46ede] pl-4">
                  <h2 className="text-2xl font-bold leading-tight text-black sm:text-3xl md:text-4xl">
                    Let&apos;s <span className="text-black">connect</span>
                    <span className="text-purple-700"> and turn your vision into reality.</span>
                  </h2>
                </div>
                <p className="mt-4 text-base text-gray-600 sm:text-lg">
                  We are available from 9:00 AM to 6:00 PM, Monday to Friday.
                </p>
              </div>

              {/* Right Section */}
              <div className="flex flex-col items-center md:items-end">
                <p className="text-sm font-semibold tracking-wide text-gray-700">REACH OUT NOW!</p>

                {/* Phone number with WhatsApp link */}
                <a
                  href="https://wa.me/9862973810"
                  className="my-2 text-2xl font-bold text-purple-700 cursor-pointer sm:text-3xl md:text-4xl"
                  target="_blank"
                >
                 +91 9837675160
                </a>

                <a
                  href="/contact"
                  className="bg-purple-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-white hover:text-purple-700 border border-[#a46ede] transition duration-300 font-semibold text-sm sm:text-base"
                >
                  Let's Start Conversation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="container px-4 py-10 mx-auto md:py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Development Services Section */}
            <div className="text-center sm:text-left">
              <h4 className="mb-4 text-xl font-semibold">Development Services</h4>
              <ul>
                <li className="mb-2"><Link href="/services/websitedevelopment" className="text-[#5d605d] hover:text-[#7d2fd0]">Website Development</Link></li>
                <li className="mb-2"><Link href="/services/ui-ux" className="text-[#5d605d] hover:text-[#7d2fd0]">UI/UX</Link></li>
              </ul>
            </div>

            {/* Marketing Services Section */}
            <div className="text-center sm:text-left">
              <h4 className="mb-4 text-xl font-semibold">Marketing Services</h4>
              <ul>
                <li className="mb-2"><Link href="/services/seo" className="text-[#5d605d] hover:text-[#7d2fd0]">Search Engine Optimization (SEO)</Link></li>
                <li className="mb-2"><Link href="/services/social-media-marketing" className="text-[#5d605d] hover:text-[#7d2fd0]">Social Media Marketing (SMM)</Link></li>
                <li className="mb-2"><Link href="/services/graphic-design" className="text-[#5d605d] hover:text-[#7d2fd0]">Graphic Design</Link></li>
                <li className="mb-2"><Link href="/services/digital-marketing" className="text-[#5d605d] hover:text-[#7d2fd0]">Digital Marketing</Link></li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div className="text-center sm:text-left">
              <h4 className="mb-4 text-xl font-semibold">Quick Links</h4>
              <ul>
                <li className="mb-2"><Link href="/aboutus" className="text-[#5d605d] hover:text-[#7d2fd0]">About Us</Link></li>
                <li className="mb-2"><Link href="/aboutus#" className="text-[#5d605d] hover:text-[#7d2fd0]">Services</Link></li>
                <li className="mb-2"><Link href="/contact" className="text-[#5d605d] hover:text-[#7d2fd0]">Contact Us</Link></li>
                <li className="mb-2"><Link href="/blog" className="text-[#5d605d] hover:text-[#7d2fd0]">Blog</Link></li>
                <li className="mb-2"><Link href="/our-work" className="text-[#5d605d] hover:text-[#7d2fd0]">Our Work</Link></li>
              </ul>
            </div>

            {/* Connect With Us Section */}
            <div className="text-center sm:text-left">
              <h4 className="mb-6 text-xl font-semibold">Connect with Us</h4>
              <ul className="space-y-6">
                <li className="flex items-center text-lg text-[#5d605d] justify-center sm:justify-start">
                  <FaPhoneAlt className="mr-4 text-[#7d2fd0] text-2xl" />
                  <a href="tel:+9862973810" className="text-[#5d605d] hover:text-[#7d2fd0] hover:underline">+91 9837675160</a>
                </li>
                <li className="flex items-center text-lg text-[#5d605d] justify-center sm:justify-start">
                <FaEnvelope className="mr-4 text-[#7d2fd0] text-2xl" />
                <a href="mailto:digitalenclave3@gmail.com" className="text-[#5d605d] hover:text-[#7d2fd0] hover:underline">
                  digitalenclave3@gmail.com
                </a>
              </li>
                <li className="flex items-center text-lg text-[#5d605d] justify-center sm:justify-start">
                  <FaMapMarkerAlt className="mr-4 text-[#7d2fd0] text-2xl" /> Noida, India
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Links Section */}
        <div className="border-t border-[#7d2fd0] py-6 text-center text-sm text-black">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Link href="/FAQ" className="hover:text-[#7d2fd0]">FAQ</Link>
              <span className="hidden mx-2 sm:inline">|</span>
              <Link href="/terms" className="hover:text-[#7d2fd0]">Terms & Conditions</Link>
              <span className="hidden mx-2 sm:inline">|</span>
              <Link href="/privacy" className="hover:text-[#7d2fd0]">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
        
      {/* Social Media Section */}
      <div className="bg-[#7d2fd0] py-4 text-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <span className="text-sm text-center text-white sm:text-base md:text-lg md:text-left">© 2025 DigitalEnclave. All Rights Reserved.</span>
            <div className="flex justify-center space-x-4">
              <a href="https://wa.me/9837675160" target="_blank" className="text-xl text-white sm:text-2xl hover:text-gray-200"><FaWhatsapp /></a>
              <a href="#" target="_blank" className="text-xl text-white sm:text-2xl hover:text-gray-200"><FaFacebook /></a>
              <a href="#" target="_blank" className="text-xl text-white sm:text-2xl hover:text-gray-200"><FaInstagram /></a>
              <a href="#" target="_blank" className="text-xl text-white sm:text-2xl hover:text-gray-200"><FaLinkedin /></a>
              <a href="#" target="_blank" className="text-xl text-white sm:text-2xl hover:text-gray-200"><FaTwitter /></a>
              <a href="#" target="_blank" className="text-xl text-white sm:text-2xl hover:text-gray-200"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;