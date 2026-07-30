import Background from "./assets/Background.jpg"
import MenuIcon from "./assets/menu.svg"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Toaster} from "@/components/ui/sonner"
import { toast } from "sonner";

export default function App() {
  return <> 
  <div className="w-screen h-screen flex justify-center" style={{ backgroundImage: `url(${Background})` }}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage />}/>
      <Route path="/vault" element={<Vaultpage />}/>
      <Route path="/register" element={<Registerpage />} />
    </Routes>
  </BrowserRouter>
  </div>
  </>

}

function Loginpage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  function loginmanager() {
    toast.error("Incorrecte inlog gegevens")
  }
  return <>
  <Toaster position="top-center" theme="light"/>
  <div className="h-125 w-150 m-auto p-4 rounded-xl shadow-2xl justify-center text-[#f3f3f3] text-center backdrop-blur-sm border border-white">
    <div className="w-100 ml-[50%] -translate-x-1/2">
    <form onSubmit={(e) => {
      e.preventDefault();
      loginmanager();}}>
    <FieldGroup>
      <FieldSet>
        <FieldLegend>
          Aanmelden
        </FieldLegend>
      </FieldSet>
      <FieldGroup>
        <Field>
          <FieldLabel>
            Naam
          </FieldLabel>
          <input className="bg-[#f3f3f3] rounded-md text-black text-center" required></input>
        </Field>
        <Field>
          <FieldLabel>
            Wachtwoord
          </FieldLabel>
          <input className="bg-[#f3f3f3] rounded-md text-black text-center" type={showPassword ? "text" : "password"} required></input>
          <div className="flex justify-between">
          <Switch className="bg-[#f3f3f3]" id="show-password-switch" checked={showPassword} onCheckedChange={setShowPassword}/>
          <Label htmlFor="show-password-switch">Laat wachtwoord zien</Label>
          </div>
        </Field>
        <Field>
          <Button type="submit" className="bg-[#f3f3f3] text-black mt-5">Aanmelden</Button>
          <div className="text-xs flex justify-end">
          <a className="mr-1">Nog geen account? </a><a className="font-bold underline cursor-pointer hover:text-slate-300 transition-all duration-100 hover:scale-110" onClick={() => navigate("/register")}>Registreren</a>
          </div>
        </Field>
      </FieldGroup>
    </FieldGroup>
    </form>
    </div>
  </div>
  </>
}

function Vaultpage() {
  const navigate = useNavigate()
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

function Registerpage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  return <>
  <div className="h-125 w-150 m-auto p-4 rounded-xl shadow-2xl justify-center text-[#f3f3f3] text-center backdrop-blur-sm border border-white">
    <div className="w-100 ml-[50%] -translate-x-1/2">
    <form>
    <FieldGroup>
      <FieldSet>
        <FieldLegend>
          Registreren
        </FieldLegend>
      </FieldSet>
      <FieldGroup>
        <Field>
          <FieldLabel>
            Naam
          </FieldLabel>
          <input className="bg-[#f3f3f3] rounded-md text-black text-center" required></input>
        </Field>
        <Field>
          <FieldLabel>
            Wachtwoord
          </FieldLabel>
          <input className="bg-[#f3f3f3] rounded-md text-black text-center" type={showPassword ? "text" : "password"} required></input>
          <div className="flex justify-between">
          <Switch className="bg-[#f3f3f3]" id="show-password-switch" checked={showPassword} onCheckedChange={setShowPassword}/>
          <Label htmlFor="show-password-switch">Laat wachtwoord zien</Label>
          </div>
          <FieldLabel>
            Herhaal wachtwoord
          </FieldLabel>
          <input className="bg-[#f3f3f3] rounded-md text-black text-center" type="password" required></input>
        </Field>
        <Field>
          <Button type="submit" className="bg-[#f3f3f3] text-black mt-5">Aanmaken</Button>
          <div className="text-xs flex justify-end">
          <a className="font-bold underline cursor-pointer hover:text-slate-300 transition-all duration-100 hover:scale-110" onClick={() => navigate("/")}>Aanmelden</a>
          </div>
        </Field>
      </FieldGroup>
    </FieldGroup>
    </form>
    </div>
  </div>
  </>
}