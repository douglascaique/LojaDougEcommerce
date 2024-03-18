import { useState } from "react";
import { ProductList } from "./components/ProductList";


function App() {

  return (
    

    <main className="flex flex-col justify-center items-center">
      <header className="flex items-center bg-orange-300 text-2xl justify-around border-b-2 h-24 w-full">
        <img className="flex w-32 mt-4" src="" alt="" />
        <nav>
        <a href="https://www.linkedin.com/in/douglascaique" target="_blank" className="text-lg p-2 rounded hover:bg-orange-200">Linkedin</a>
        <a href="https://github.com/douglascaique" target="_blank" className="text-lg p-2 ml-3 rounded hover:bg-orange-200">GitHub</a>
        </nav>

      </header>
      <div className="p-4 max-w-screen-xl">
        <h2 className="text-4xl font-bold mb-4">Produtos</h2>
        <ProductList />
      </div>
      <footer className="flex w-full p-3 text-slate-500	justify-center text-xs bg-rose-50 border-t-2	border-slate-200">
        <p>Feito por Douglas Caique</p>
      </footer>
    </main>
  );
}

export default App;