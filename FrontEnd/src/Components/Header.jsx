import millowlogo from "../assets/Images/millow_logo.jpg";

const Header = () => {
  return (
    <>
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* {millowlogo} */}
            <div className="flex items-center">
              <img src={millowlogo} alt="Zillow" className="h-10 w-auto " />
              <h5 className="text-indigo-900 font-semibold"> Millow</h5>
            </div>
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
              <a href="#" className="hover:text-blue-600 transition">
                Buy
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Rent
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Sell
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Agent Finder
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Home Loans
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition">
                Sign In
              </button>
              <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
                Join
              </button>
              <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none">
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
