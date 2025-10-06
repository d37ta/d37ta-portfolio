import React from "react";
import "./index.css";


export default function D37TAPortfolioLayout() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-sky-200 via-purple-200 to-gray-100 text-gray-800">
      <div className="mx-auto max-w-6xl p-6 md:p-10 space-y-12">

        <div className="bg-gradient-to-b from-sky-200 via-purple-200 to-gray-100 text-gray-800 min-h-screen p-10 space-y-12">
          {/* Cover */}
          <section className="text-center py-20">
            <h1 className="text-6xl font-light tracking-widest">D37TA</h1>
            <p className="text-lg mt-4 italic text-gray-600">THE BEAUTY OF DIGITAL TRANSFORMATION</p>
            <div className="mt-10 w-20 h-20 mx-auto bg-gradient-to-r from-sky-400 to-purple-400 rounded-full blur-lg opacity-70" />
          </section>

          {/* About */}
          <section className="grid grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-2">About Sig L.</h2>
              <p>Digital artist exploring the pulse between light and data.<br />Tools: Illustrator / After Effects / Figma / Procreate</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">About D37TA</h2>
              <ul className="list-disc ml-6">
                <li>Δ = Transformation</li>
                <li>37 = Pulse</li>
                <li>TA = Transient Aesthetics</li>
              </ul>
            </div>
          </section>

          {/* Key Art */}
          <section className="text-center py-10">
            <h2 className="text-3xl mb-6 font-semibold">Key Art — Light Reborn</h2>
            <div className="w-full h-96 bg-gradient-to-tr from-blue-200 to-purple-300 rounded-2xl flex items-center justify-center text-white text-2xl">
              Artwork Placeholder
            </div>
            <p className="mt-4 text-gray-600 italic">“A digital rebirth through the spectrum of data.”</p>
          </section>

          {/* Visual Identity */}
          <section className="grid grid-cols-2 gap-10 py-10">
            <div>
              <h3 className="text-xl font-semibold mb-3">Logo System</h3>
              <div className="space-y-4">
                <div className="text-4xl">Δ</div>
                <div className="text-2xl tracking-widest">D37TA</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Color & Typography</h3>
              <div className="flex gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-sky-300" />
                <div className="w-10 h-10 rounded-full bg-yellow-100" />
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div className="w-10 h-10 rounded-full bg-gray-900" />
              </div>
              <p className="text-gray-600">Font: Space Grotesk / Pretendard / Aeonik</p>
            </div>
          </section>

          {/* Poster */}
          <section className="text-center py-10">
            <h2 className="text-3xl mb-6 font-semibold">Poster Design — Metamorphosis in Motion</h2>
            <div className="w-full h-96 bg-gradient-to-r from-purple-400 to-sky-400 rounded-2xl flex items-center justify-center text-white text-2xl">
              Poster Mockup
            </div>
          </section>

          {/* UI/UX */}
          <section className="py-10">
            <h2 className="text-3xl mb-6 font-semibold text-center">UI/UX Concept — NFT Gallery</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center text-gray-500">Home</div>
              <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center text-gray-500">Gallery</div>
              <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center text-gray-500">Artwork Detail</div>
            </div>
          </section>

          {/* Infographic */}
          <section className="py-10 text-center">
            <h2 className="text-3xl mb-6 font-semibold">Infographic — Flow of Transformation</h2>
            <div className="flex justify-center items-center space-x-4 text-gray-700">
              <span>Concept</span>
              <span>→</span>
              <span>Creation</span>
              <span>→</span>
              <span>Motion</span>
              <span>→</span>
              <span>Mint</span>
              <span>→</span>
              <span>Exhibition</span>
            </div>
          </section>

          {/* Closing */}
          <footer className="text-center py-20 border-t border-gray-300 mt-10">
            <div className="text-5xl mb-4">Δ</div>
            <p className="text-lg italic">“Transformation is not an act — it’s a pulse.”</p>
            <p className="mt-4 text-sm text-gray-500">© 2025 Sig L. | D37TA Portfolio</p>
          </footer>
        </div>
      </div>
    </div>

  );
}

