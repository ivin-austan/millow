import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-700">
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Buy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Rent
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Sell
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Home Loans
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Site Map
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4 text-xl text-gray-600">
              <a href="#" className="hover:text-blue-600">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-300" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} Millow Inc. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600">
              Terms
            </a>
            <a href="#" className="hover:text-blue-600">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-600">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
