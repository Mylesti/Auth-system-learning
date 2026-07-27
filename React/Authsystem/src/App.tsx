import Background from "./assets/Background.jpg"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {
  return <> 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage />}/>
    </Routes>
  </BrowserRouter>
  </>

}

function Loginpage() {
  return <>
  <div className="w-screen h-screen flex justify-center" style={{ backgroundImage: `url(${Background})` }}>
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
  </div>
  </>
}