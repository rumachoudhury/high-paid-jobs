import Image from "next/image";
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0B2B] text-white py-10 px-6 dark:bg-[#0B0B2B] pl-8 pr-10 ">
      <div
        //   className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-25 items-start  "
        className="flex flex-row justify-between items-center text-center  max-w-7xl mx-auto "
      >
        {/* Logo */}
        <div className="col-span-1">
          <Image
            src="/logo2.webp"
            alt="HighPaidJobs Logo"
            width={128}
            height={40}
          />
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How it works
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-2">
          <h3 className="font-semibold mb-3">Contact Info</h3>
          <p className="text-sm mb-2">highpaidjobs.us@gmail.com</p>
          <p className="text-sm mb-4">WhatsApp: +1 586-665-3331</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-white text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm">
        © 2025 All rights reserved by HighPaidJobs
      </div>
    </footer>
  );
};

export default Footer;
