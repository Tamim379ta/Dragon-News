import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-neutral">

      <footer className="footer container mx-auto sm:footer-horizontal bg-neutral text-neutral-content p-10">
        
        <nav>
          <h6 className="footer-title text-gray-300">Categories</h6>
          <a className="link link-hover">World News</a>
          <a className="link link-hover">Technology</a>
          <a className="link link-hover">Sports</a>
          <a className="link link-hover">Entertainment</a>
        </nav>

        <nav>
          <h6 className="footer-title text-gray-300">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>

        <nav>
          <h6 className="footer-title text-gray-300">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>

      <footer className="footer container mx-auto  bg-neutral text-neutral-content border-t border-gray-700 px-10 py-4">
        
        <aside className="flex items-center gap-3">
          <div className="text-2xl font-bold">🐉</div>
          <p>
            <span className="font-semibold">The Dragon News</span>
            <br />
            Delivering truth with fire 🔥
          </p>
        </aside>

        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 text-lg">
            <a className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
            <a className="hover:text-sky-400 transition">
              <FaTwitter />
            </a>
            <a className="hover:text-red-500 transition">
              <FaYoutube />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
