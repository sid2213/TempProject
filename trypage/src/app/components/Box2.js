"use client";
import React from 'react'

export default function Box2() {
    const values = [
        { title: "Total Match Runs", value1: 279, sub1: 1.0, value2: 281, sub2: 1.0, value3: 0.0, suspense: false }, 
        { title: "10 Over DC", value1: 82, value2: 83, sub1: 1.0, sub2: 1.0, value3: 0.0, suspense: false },
        { title: "8 Over DC", value1: 69, value2: 70, sub1: 1.0, sub2: 1.0, value3: 0.0, suspense: false },
        { title: "8.3 Over DC", value1: 73, value2: 74, sub1: 1.0, sub2: 1.0, value3: 0.0, suspense: false },
        { title: "9 Over DC", value1: 77, value2: 78, sub1: 1.0, sub2: 1.0, value3: 0.0, suspense: false },
        { title: "9.3 Over DC", value1: 81, value2: 82, sub1: 1.0, sub2: 1.0, value3: 0.0, suspense: false },
        { title: "10 Over DC", value1: 85, value2: 86, sub1: 1.0, sub2: 1.0, value3: 0.0, suspense: true },
    ]
    return (
        <>
            <div className="container mx-auto px-1 py-6">
                <h1 className="text-sm px-2 p-5  bg-[#3a61a2] text-white">Min : 50.0 | Max : 100000.0</h1>
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-white p-4 text-left bg-gray-300">Session</th>
                            <th className="border border-white p-4 text-center bg-gray-300">No</th>
                            <th className="border border-white p-4 text-center bg-gray-300">Yes</th>
                            <th className="border border-white p-4 text-center bg-gray-300">P</th>
                        </tr>
                    </thead>
                    <tbody>
                        {values.map((items) => {
                            return (
                                <tr>
                                    <td className="border border-white p-2 text-left bg-white text-black">{items.title}</td>
                                    {!items.suspense ? (<>
                                        <td className="border border-white p-2 text-center bg-[#F6B770] text-white">
                                            <div>
                                                <div>{items.value1}</div>
                                                <div >{items.sub1}</div>
                                            </div>
                                        </td>
                                        <td className="border border-white p-2 text-center bg-[#60ACDE] text-white">
                                            <div>
                                                <div>{items.value2}</div>
                                                <div >{items.sub2}</div>
                                            </div>
                                        </td></>) : (
                                        <>
                                            <td className="border border-white p-2 text-center bg-gray-300 text-red-700 font-bold" colSpan="2">
                                                Suspended
                                            </td>
                                        </>
                                    )}
                                    <td className="border border-white p-2 text-center bg-white text-white">{items.value3}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
