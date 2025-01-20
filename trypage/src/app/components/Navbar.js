"use client";
import React, { useEffect } from 'react'

export default function Navbar() {
    useEffect(() => {
        const sidebar = document.getElementById("sidebar");
        const openSidebar = document.getElementById("open-sidebar");
        const closeSidebar = document.getElementById("close-sidebar");

        openSidebar.addEventListener("click", () => {
            sidebar.classList.remove("translate-x-full");
        });

        closeSidebar.addEventListener("click", () => {
            sidebar.classList.add("translate-x-full");
        });
    }, [])
    return (
        <>
            <>
                <header class="bg-white shadow-md">
                    <div class="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
                        <h1 class="text-xl font-bold text-gray-800">Navbar</h1>
                        <button id="open-sidebar" class="text-blue-600 text-2xl focus:outline-none">
                            &#9776;
                        </button>
                    </div>
                </header>
                <div id="sidebar" class="fixed top-16 right-0 h-[calc(100%-4rem)] w-64 bg-blue-600 text-white transform translate-x-full transition-transform duration-300">
                    <div class="flex justify-between items-center px-4 py-3">
                        <h2 class="text-xl font-bold">Menu</h2>
                        <button id="close-sidebar" class="text-white text-2xl focus:outline-none">
                            &times;
                        </button>
                    </div>
                    <nav class="mt-4 space-y-2">
                        <a href="#" class="block px-4 py-2 text-gray-100 hover:bg-blue-500 rounded">Home</a>
                        <a href="#" class="block px-4 py-2 text-gray-100 hover:bg-blue-500 rounded">About</a>
                        <a href="#" class="block px-4 py-2 text-gray-100 hover:bg-blue-500 rounded">Services</a>
                        <a href="#" class="block px-4 py-2 text-gray-100 hover:bg-blue-500 rounded">Contact</a>
                    </nav>
                </div>
                <main class="p-4">
                    <h2 class="text-2xl font-bold mb-4">Welcome</h2>
                    <p class="text-gray-600">This is an example of a right-aligned sidebar navigation menu with a fixed navbar.</p>
                </main>
            </>
        </>
    )
}
