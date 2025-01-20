import React from 'react'

export default function Box1() {
  return (
    <>
    <div class="container mx-auto px-1 py-6">
        <h1 class="text-2xl font-bold text-center  bg-[#3a61a2] text-white">Title Header</h1>
        <table class="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th class="border border-white p-4 text-center bg-gray-300">Runner</th>
              <th class="border border-white p-4 text-center bg-gray-300">Lagai</th>
              <th class="border border-white p-4 text-center bg-gray-300">Khai</th>
              <th class="border border-white p-4 text-center bg-gray-300">Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-white p-3 text-center bg-[#88CA11] text-white">Dubal Capitals</td>
              <td class="border border-white p-3 text-center bg-[#60ACDE] text-white">18.0</td>
              <td class="border border-white p-3 text-center bg-[#F6B770] text-white">20.0</td>
              <td class="border border-white p-3 text-center bg-[#88CA11] text-white">0.0</td>
            </tr>
            <tr>
              <td class="border border-white p-3 text-center bg-white text-black">Dubal Capitals</td>
              <td class="border border-white p-3 text-center bg-white text-black">18.0</td>
              <td class="border border-white p-3 text-center bg-white text-black">20.0</td>
              <td class="border border-white p-3 text-center bg-white text-black">0.0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
