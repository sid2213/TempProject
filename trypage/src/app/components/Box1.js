"use client";
import React from 'react'

export default function Box1() {
  return (
    <>
    <div className="container mx-auto px-1 py-6">
        <h1 className="text-sm px-2 p-5  bg-[#3a61a2] text-white">Match Winner - Min : 50.0 | Max : 200000.0</h1>
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-white p-4 text-center bg-gray-300">Runner</th>
              <th className="border border-white p-4 text-center bg-gray-300">Lagai</th>
              <th className="border border-white p-4 text-center bg-gray-300">Khai</th>
              <th className="border border-white p-4 text-center bg-gray-300">Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-white p-3 text-center bg-[#88CA11] text-white">Dubal Capitals</td>
              <td className="border border-white p-3 text-center bg-[#60ACDE] text-white">18.0</td>
              <td className="border border-white p-3 text-center bg-[#F6B770] text-white">20.0</td>
              <td className="border border-white p-3 text-center bg-[#88CA11] text-white">0.0</td>
            </tr>
            <tr>
              <td className="border border-white p-3 text-center bg-white text-black">Dubal Capitals</td>
              <td className="border border-white p-3 text-center bg-white text-black">18.0</td>
              <td className="border border-white p-3 text-center bg-white text-black">20.0</td>
              <td className="border border-white p-3 text-center bg-white text-black">0.0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
