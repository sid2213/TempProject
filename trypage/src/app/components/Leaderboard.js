"use client";
import React from 'react';

export default function Leaderboard() {
    return (
        <div className="h-[200px] w-full flex pt-2.5">
            <div className="w-4/5 bg-[#3A61A2] flex flex-col">
                {/* First row */}
                <div className="flex-1 border-b border-white/30 flex items-center justify-start px-2.5 text-white whitespace-nowrap overflow-hidden text-ellipsis">
                    Desert Viper - 139/10(19.5)
                </div>
                
                {/* Second row */}
                <div className="flex-1 border-b border-white/30 flex items-center justify-start px-2.5 text-white whitespace-nowrap overflow-hidden text-ellipsis">
                    Dubai Capitals -68/3(7.4) Ovs
                </div>
                
                {/* Third row */}
                <div className="flex-1 border-b border-white/30 flex items-center justify-between px-2.5 text-white whitespace-nowrap overflow-hidden text-ellipsis">
                    <span>CRR :- 9.19</span>
                    <span>RRR:- 5.71</span>
                </div>
                
                {/* Fourth row */}
                <div className="flex-1 border-b border-white/30 flex items-center justify-start px-2.5 text-white whitespace-nowrap overflow-hidden text-ellipsis">
                    Dubai Capitals Needs 72 Runs in 74 Balls
                </div>
                
                {/* Fifth row */}
                <div className="h-[25%] flex flex-col items-start px-2.5 text-white whitespace-nowrap overflow-hidden text-ellipsis">
                    <div className="flex items-center justify-start h-full">
                        <span>Last 6 Balls</span>
                        {/* Circles container */}
                        <div className="flex justify-start ml-2 items-center">
                            {[...Array(6)].map((_, index) => (
                                <div
                                    key={index}
                                    className="w-[22px] h-[22px] rounded-full bg-[#197C8A] bg-opacity-70 flex items-center justify-center mr-[7px]"
                                >
                                    <span className="text-white text-sm">
                                        {index === 0 || index === 1 || index === 2 ? '0' : index === 3 ? '1' : '-'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Vertical divider */}
            <div className="w-[5px] bg-white/30"></div>

            {/* Score section */}
            <div className="w-1/5 bg-[#3A61A2] flex items-center justify-center">
                <span className="text-6xl text-white">1</span>
            </div>
        </div>
    );
}