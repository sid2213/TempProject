"use client";
import React from 'react'

export default function Marquee() {
    return (
        <>
            <div className="relative w-full mt-6 h-16 overflow-hidden bg-[#6E8FCB] text-white rounded-lg shadow-lg">
                <div className="marquee whitespace-nowrap flex items-center space-x-8 pt-4">
                    <span className="text-lg font-semibold">!! WELCOME TO BSF2020 !!</span>
                </div>
            </div>
        </>
    )
}
