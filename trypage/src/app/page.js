"use client";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Leaderboard from "./components/Leaderboard";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Marquee />
      <Leaderboard/>
      <Box1/>
      <Box2/>
    </>
  );
}
