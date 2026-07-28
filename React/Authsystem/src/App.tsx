import Background from "./assets/Background.jpg"
import MenuIcon from "./assets/menu.svg"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu"

export default function App() {
  return <> 
  <div className="w-screen h-screen flex justify-center" style={{ backgroundImage: `url(${Background})` }}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage />}/>
      <Route path="/vault" element={<Vaultpage />}/>
    </Routes>
  </BrowserRouter>
  </div>
  </>

}

function Loginpage() {
  return <>
    <div className="h-125 w-150 m-auto p-4 rounded-xl shadow-2xl flex justify-center text-[#f3f3f3] flex-col text-center backdrop-blur-sm border border-white">
      <h1 className="text-center text-3xl">Login</h1>
      <div className="mt-10 flex flex-col">
        <div>
          <input className="bg-slate-200 w-85 rounded-md text-black text-xl p-1 text-center hover:bg-slate-300 transition duration-150 focus:bg-slate-200" placeholder="Gebruikersnaam"></input>
        </div>
        <div className="h-5"></div>
        <div>
          <input className="bg-slate-200 w-85 rounded-md text-black text-xl p-1 text-center hover:bg-slate-300 transition duration-150 focus:bg-slate-200" type="password" placeholder="Wachtwoord"></input>
        </div>
        <div className="flex justify-center">
        <p className="mt-1 text-right w-85 hover:text-slate-300 transition duration-150 cursor-pointer underline">Wachtwoord vergeten?</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="font-bold mt-10 bg-[#f3f3f3] w-100 rounded-md text-xl h-10 text-black hover:bg-slate-300 transition duration-150 cursor-pointer">Inloggen</button>
      </div>
      <div className="flex justify-center mt-2">
        <p>Geen account?</p><p className="font-bold ml-2 underline hover:text-slate-300 cursor-pointer">Aanmelden</p>
      </div>
      <div className="mb-auto"></div>
    </div>
  </>
}

function Vaultpage() {

  return <>
  <div className="h-125 w-250 m-auto p-4 rounded-xl shadow-2xl flex justify-center text-[#f3f3f3] flex-col text-center backdrop-blur-sm border border-white">
    <div className="flex justify-center">
    <h1 className="text-2xl fixed">Ingelogd als {"User"}</h1>
    <div className="ml-auto"></div>
    <DropdownMenu>
      <DropdownMenuTrigger><img className="p-2 shadow-2xl rounded-md bg-slate-300/20 hover:bg-slate-400/20 transition duration-150 cursor-pointer" src={MenuIcon} /></DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-300/20 text-[#f3f3f3] backdrop-blur-md border-none">
        <DropdownMenuItem className="cursor-pointer hover:bg-slate-400/20 transition duration-150"><h1>Opslaan</h1></DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer text-red-600 hover:bg-slate-400/20 transition duration-150"><h1>Uitloggen</h1></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
    <div className="mb-auto mt-10">
      <p>Kluis data</p>
    <textarea className="w-200 h-80 bg-white/15 border rounded-md backdrop-blur-2xl p-2 resize-none">bazinga</textarea>
    </div>
  </div>
  </>
}