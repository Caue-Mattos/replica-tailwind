import React from "react";
import { CiMail } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header className="flex justify-around bg-white p-2">
        <img className="w-24" src="https://logos-world.net/wp-content/uploads/2020/10/Yahoo-Logo.png" alt="" />
        <nav className="flex gap-3">
          <CiMail size={30} />
          <CgMenuGridO size={30} />
        </nav>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center">
        <h2 className="mt-4 text-4xl font-bold">Boa tarde!</h2>
        <h4 className="mt-4 text-15px]">12 de setembro · 🎊👩🏻‍💻 Feliz Dia dos Programadores! Vocês transformam ideias em realidade digital. 🧑🏿‍💻🎊</h4>
        <div className="flex w-[770px] ">
          <input className="flex-1 rounded-xl border-[3px] border-gray-400" placeholder="Buscar"></input>
        </div>
        <div className="flex w-[500px] h-[160px] mt-4   border-2 border-gray-400 rounded flex-col">
          <div className="flex flex-1 flex-col items-center">
            <h1 className="font-semibold">Assuntos do momento</h1>
          </div>

          <div className="flex ">
            <div className="flex  h-[150px] w-1/2">
              <ul className="list-disc ml-5">
                <li>crise ambiental no Brasil</li>
                <li>floresta faber castel</li>
                <li>Annita</li>
                <li>Rock and Rio</li>
                <li>Deolane Bezerra</li>
              </ul>
            </div>
            <div className="flex h-[150px] w-1/2">
              <ul className="list-disc ml-5">
                <li>copa do Brasil</li>
                <li>bluesky</li>
                <li>Jon Bon Jovi</li>
                <li>VMA 2024</li>
                <li>Homem Aranha 4</li>
              </ul>
            </div>
          </div>
        </div>
      </main >
      <footer className="flex gap-8 p-2 text-center justify-center">
        <a href="#" className="text-gray-500 font-bold">ajuda</a>
        <a href="#" className="text-gray-500 font-bold">privacidade</a>
        <a href="#" className="text-gray-500 font-bold">termos</a>
        <a href="#" className="text-gray-500 font-bold">painel de privacidade</a>
        <a href="#" className="text-gray-500 font-bold">anunciar</a>
      </footer>
    </div >
  );
}

export default App;
