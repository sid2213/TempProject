"use client";
import React, { useState, useEffect } from 'react';

export default function Box2() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [countdown, setCountdown] = useState(10);

    const values = [
        { title: "Total Match Runs", value1: 279, sub1: 1.0, value2: 281, sub2: 1.0, value3: 0.0, suspense: false },
        { title: "10 Over DC", value1: 82, value2: 83, sub1: 1.0, sub2: 1.0, value3: 0.0, suspense: false },
        { title: "8 Over DC", value1: 69, value2: 70, sub1: 1.0, sub2: 1.0, value3: 0.0, suspense: false },
        { title: "8.3 Over DC", value1: 73, value2: 74, sub1: 1.0, sub2: 1.0, value3: 0.0, suspense: false },
        { title: "9 Over DC", value1: 77, value2: 78, sub1: 1.0, sub2: 1.0, value3: 0.0, suspense: false },
        { title: "9.3 Over DC", value1: 81, value2: 82, sub1: 1.0, sub2: 1.0, value3: 0.0, suspense: false },
        { title: "10 Over DC", value1: 85, value2: 86, sub1: 1.0, sub2: 1.0, value3: 0.0, suspense: true },
    ];

    useEffect(() => {
        let timer;
        if (isModalOpen && countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        } else if (countdown === 0) {
            setIsModalOpen(false);
            setCountdown(10);
        }
        return () => clearInterval(timer);
    }, [isModalOpen, countdown]);

    return (
        <>
            <div className="container mx-auto sm:px-6 lg:px-8 py-6">
                <h1 className="text-sm px-2 p-5 bg-[#3a61a2] text-white">Min : 50.0 | Max : 100000.0</h1>
                <div className="overflow-x-auto">
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
                            {values.map((items, index) => (
                                <tr key={index}>
                                    <td className="border border-white p-2 text-left bg-white text-black">{items.title}</td>
                                    {!items.suspense ? (
                                        <>
                                            <td
                                                className="border border-white p-2 text-center bg-[#F6B770] text-white cursor-pointer"
                                                onClick={() => setIsModalOpen(true)}
                                            >
                                                <div>
                                                    <div>{items.value1}</div>
                                                    <div>{items.sub1}</div>
                                                </div>
                                            </td>
                                            <td
                                                className="border border-white p-2 text-center bg-[#60ACDE] text-white cursor-pointer"
                                                onClick={() => setIsModalOpen(true)}
                                            >
                                                <div>
                                                    <div>{items.value2}</div>
                                                    <div>{items.sub2}</div>
                                                </div>
                                            </td>
                                        </>
                                    ) : (
                                        <td className="border border-white p-2 text-center bg-gray-300 text-red-700 font-bold" colSpan="2">
                                            Suspended
                                        </td>
                                    )}
                                    <td className="border border-white p-2 text-center bg-white text-black">{items.value3}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center sm:items-center items-end  sm:px-0">
                    <div className="bg-white  sm:rounded-lg shadow-lg p-1 w-full max-w-md ">
                        <div className="grid grid-rows-10 gap-0">
                            <div className="bg-[#1EABB6] text-white text-center flex items-center justify-center" style={{ height: '35px' }}>
                                <div className="w-6 h-6 bg-white text-black font-bold border border-black rounded-full flex items-center justify-center">
                                    {countdown}
                                </div>
                            </div>
                            <div className="grid grid-cols-3 border-white border-2 bg-[#E9E8E8] text-center font-bold" style={{ height: '35px' }}>
                                <div className="border-r text-xs border-white border-2 flex items-center justify-center">9th Over Runs Only DC</div>
                                <div className="border-r border-white border-2 flex items-center justify-center">ND</div>
                                <div className="border-r flex border-white border-2 items-center justify-center">7</div>
                            </div>
                            <div className="grid grid-cols-[65%_35%] border-white border-2 bg-[#E9E8E8]" style={{ height: '35px' }}>
                                <input
                                    type="text"
                                    placeholder="Enter coins"
                                    className="w-full text-gray-400 p-1 text-center"
                                />
                                <div className="flex items-center justify-center font-bold">Value</div>
                            </div>
                            <div className="grid grid-cols-5 border-white border-2 bg-[#3A61A2] text-white text-center font-bold" style={{ height: '35px' }}>
                                <div className="border border-white">1000</div>
                                <div className="border border-white">5000</div>
                                <div className="border border-white">10000</div>
                                <div className="border border-white">25000</div>
                                <div className="border border-white">50000</div>
                            </div>
                            <div className="grid grid-cols-5 border-white border-2 bg-[#3A61A2] text-white text-center font-bold" style={{ height: '35px' }}>
                                <div className="border border-white">100000</div>
                                <div className="border border-white">200000</div>
                                <div className="border border-white">500000</div>
                                <div className="border border-white">1000000</div>
                                <div className="border border-white">2500000</div>
                            </div>
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="grid grid-cols-3 border-white border-1 bg-[#6E8FCB] text-white text-center font-bold" style={{ height: '35px' }}>
                                    {i === 0 && [1, 2, 3].map(num => <div className="border border-white pt-1">{num}</div>)}
                                    {i === 1 && [4, 5, 6].map(num => <div className="border border-white pt-1">{num}</div>)}
                                    {i === 2 && [7, 8, 9].map(num => <div className="border border-white pt-1">{num}</div>)}
                                    {i === 3 && ['C', '0', '✕'].map(num => <div className="border border-white pt-1">{num}</div>)}
                                </div>
                            ))}
                            {[...Array(1)].map((_, i) => (
                                <div className="grid grid-cols-2" style={{ height: '35px' }}>
                                <div 
                                    className="border p-1 text-center bg-[#621415] text-white" 
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </div>
                                <div className="border p-1 text-center bg-[#277630] text-white">
                                    Done
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
