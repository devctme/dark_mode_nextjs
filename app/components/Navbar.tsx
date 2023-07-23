"use client";
import DarkToggle from "./DarkToggle";

export default function Navbar() {
  return (
    <header className="bg-slate-400 p-3 ">
      <nav className="flex items-center justify-center">
        <DarkToggle />
      </nav>
    </header>
  );
}
