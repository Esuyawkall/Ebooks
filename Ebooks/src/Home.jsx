import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from './assets/home.jpeg';
import Card from './Card.jsx';

export default function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative w-screen overflow-hidden h-screen">
        <div
          className="absolute top-0 bottom-0 right-0 bg-no-repeat bg-right opacity-60 z-0 w-1/2"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div className="w-screen h-screen z-10 relative">
          <div className="flex justify-between items-center w-full flex-row pr-10 pl-5 py-3 mb-4 shadow-lg">
            <div>
              <p className="text-3xl font-medium">Welcome Back! [Name]</p>
            </div>
            <div className="flex items-center space-x-4" ref={menuRef}>
              <button
                className="bg-[#546F9D] rounded-3xl px-4 py-1 text-xl text-white cursor-pointer"
                onClick={() => navigate('/ReadingList')}
              >
                My Reading List
              </button>

              <div className="relative">
                <button
                  className="cursor-pointer bg-white mt-2"
                  onClick={() => setMenuOpen((open) => !open)}
                  aria-haspopup="true"
                  aria-expanded={menuOpen}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  </svg>
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <ul className="py-1 text-sm text-gray-700">
                      <li>
                        <Link
                          to="/Profile"
                          className="block px-4 py-2 hover:bg-gray-100 rounded-xl"
                          onClick={() => setMenuOpen(false)}
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Settings"
                          className="block px-4 py-2 hover:bg-gray-100 rounded-xl"
                          onClick={() => setMenuOpen(false)}
                        >
                          Settings
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Login"
                          className="block px-4 py-2 hover:bg-gray-100 rounded-xl"
                          onClick={() => setMenuOpen(false)}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <input
              type="text"
              className="w-1/3 h-12 border border-gray-400 px-8 py-1 placeholder:text-sm rounded-3xl"
              placeholder="Search books..."
            />
          </div>

          <div className="w-1/2 ml-10 mt-10">
            <div className="grid grid-cols-4 gap 4 gap-y-10">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>

            <div className="w-1/2 h-10 my-5 border flex items-center justify-center rounded-full bg-[#546F9D] text-white">
              Reccomended for you
            </div>

            <div className="grid grid-cols-4 gap 4 gap-y-10">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
