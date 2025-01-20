"use client";
import React, { useEffect, useState } from 'react';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const sidebar = document.getElementById("sidebar");
        if (isSidebarOpen) {
            sidebar.classList.remove("translate-x-full");
        } else {
            sidebar.classList.add("translate-x-full");
        }
    }, [isSidebarOpen]);

    return (
        <>
            <header className="bg-[#3a61a2] shadow-md">
                <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center space-x-6">
                        <h1 className="text-xl font-bold text-white">Navbar</h1>
                        <div className="text-white">
                            <p className="text-sm ">SP31829 - Raju</p>
                            <p className="text-sm">Coins: 0.00</p>
                        </div>
                    </div>
                    <button
                        id="toggle-sidebar"
                        className="text-white text-3xl focus:outline-none transition-transform duration-300 transform"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? <>&times;</> : <>&#9776;</>}
                    </button>
                </div>
            </header>

            <div
                id="sidebar"
                className="fixed top-16 z-10 right-0 h-[calc(100%-4rem)] w-64 bg-[#3A61A2] text-white transform translate-x-full transition-transform duration-300"
            >
                <div className="flex justify-between items-center px-4 py-3">
                    <h2 className="text-xl font-bold">Menu</h2>
                </div>
                <nav className="mt-4 space-y-2">
                    <div className="relative">
                        <button
                            className="block px-4 py-2 text-gray-100 hover:bg-blue-500 rounded w-full text-left flex justify-between items-center"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            IN PLAY
                            <span className="ml-2">{isDropdownOpen ? '▲' : '▼'}</span>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute left-0 w-full mt-2 bg-[#3a61a2] rounded shadow-lg">
                                <a href="#" className="block px-4 py-2 text-gray-100 hover:bg-blue-500 rounded mb-2">1</a>
                                <a href="#" className="block px-4 py-2 text-gray-100 hover:bg-blue-500 rounded mb-2">2</a>
                                <a href="#" className="block px-4 py-2 text-gray-100 hover:bg-blue-500 rounded mb-2">3</a>
                            </div>
                        )}
                    </div>
                    <a href="#" className="block px-4 py-2 text-gray-100 hover:bg-blue-500 rounded">RULES</a>
                    <a href="#" className="block px-4 py-2 text-gray-100 hover:bg-blue-500 rounded">LEDGER</a>
                    <a href="#" className="block px-4 py-2 text-gray-100 hover:bg-blue-500 rounded">PASSWORD</a>
                </nav>
            </div>
        </>
    );
}
