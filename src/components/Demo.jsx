// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800 text-white">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="text-2xl font-bold text-yellow-400">
//               MyBrand
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             <Link
//               to="/"
//               className="hover:text-yellow-400 transition duration-300"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="hover:text-yellow-400 transition duration-300"
//             >
//               About
//             </Link>
//             <Link
//               to="/services"
//               className="hover:text-yellow-400 transition duration-300"
//             >
//               Services
//             </Link>
//             <Link
//               to="/contact"
//               className="hover:text-yellow-400 transition duration-300"
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               type="button"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-gray-200 hover:text-white focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={
//                     isMobileMenuOpen
//                       ? "M6 18L18 6M6 6l12 12"
//                       : "M4 6h16M4 12h16m-7 6h7"
//                   }
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden">
//             <Link
//               to="/"
//               className="block px-4 py-2 text-sm hover:bg-gray-700"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="block px-4 py-2 text-sm hover:bg-gray-700"
//             >
//               About
//             </Link>
//             <Link
//               to="/services"
//               className="block px-4 py-2 text-sm hover:bg-gray-700"
//             >
//               Services
//             </Link>
//             <Link
//               to="/contact"
//               className="block px-4 py-2 text-sm hover:bg-gray-700"
//             >
//               Contact
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [date, setDate] = useState('');
    const [rooms, setRooms] = useState([]);
    const [message, setMessage] = useState('');

    const fetchRooms = async () => {
        try {
            const response = await axios.get('http://localhost:5000/rooms', { params: { date } });
            setRooms(response.data);
        } catch (error) {
            console.error('Error fetching rooms:', error);
        }
    };

    const bookRoom = async (roomNumber) => {
        try {
            const response = await axios.post('http://localhost:5000/book', {
                roomNumber,
                date,
            });
            setMessage(response.data.message);
            fetchRooms();
        } catch (error) {
            setMessage('Failed to book the room.');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <h1 className="text-3xl font-bold my-4">Hotel Booking</h1>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border p-2 rounded mb-4"
            />
            <button
                onClick={fetchRooms}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Search Rooms
            </button>
            <div className="mt-4">
                {rooms.length > 0 ? (
                    rooms.map((room) => (
                        <div
                            key={room.roomNumber}
                            className="bg-white p-4 shadow rounded mb-4 flex justify-between items-center"
                        >
                            <span>Room {room.roomNumber}</span>
                            <button
                                onClick={() => bookRoom(room.roomNumber)}
                                className="bg-green-500 text-white px-4 py-2 rounded"
                            >
                                Book
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No rooms available</p>
                )}
            </div>
            {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
    );
};

export default App;

