"use client"
import Image from "next/image";
import { Forms } from "./components/Forms";
import modifyRouter from "./utilits/function/globalFunction";
import { useUser } from "./Context/useContext";




export default function Home() {
  const { chamadosAtivos,setChamadoAtivo } = useUser();


  
  return (
  

<div className="overflow-hidden h-screen bg-primary-grey-900 flex items-center  justify-end p-5 bg-linear-to-r/srgb from-primary-gradient-900 to-primary-gradient-800" >
  <img className="w-[130vh] m-[-300px] opacity-[40%] fixed  left-1 -rotate-2  " src="/image/isotipo amalfis branco.svg" alt="logoAmalfis" />


    <p className="fixed flex flex-col left-10 font-poppins text-[1rem] ">
      <span className="text-[2.5rem]">Time Amalfis</span>
      Você é uma peça fundamental para Amalfis
      </p>

   <Forms.Root className={"animate-fade-leftAnimation  bg-slate-200  w-[450px] h-[500px] p-8 rounded-2xl flex  flex-col gap-5 m-[100px] shadow-lg"} >
    <img src="/image/logo.svg" alt="logi"  className="h-18 mt-1.5"/>
    <Forms.Label className={'text-primary-gradient-900 '} htmlFor={"E-mail"}>E-mail</Forms.Label>
    <Forms.Input type="input" placeholder="Digite seu email" id="E-mail" className="border primary-gradient-800 h-[45px] p-2 rounded-[5px] text-gray-700"/>
    <Forms.Label className={'text-primary-gradient-900 '}  htmlFor={"Senha"}>Senha</Forms.Label>
    <Forms.Input type="input" placeholder="Digite sua senha" id="Senha" className="border primary-gradient- h-[45px] p-2 rounded-[5px] text-gray-700" />
    <Forms.Input type="button" value={"Entrar"} className={"w-[400px] self-center bg-blue-600 p-2 rounded-[5px] scale-95 hover:scale-97 duration-300 ease-out "}  />
    <div className="flex justify-between">
      <Forms.Paragrafo className="text-black  text-center text-blue-700 cursor-pointer scale-95 hover:scale-97 duration-300 ease-out " 
      >Esqueci a senha</Forms.Paragrafo>
    <Forms.Paragrafo className="text-black  text-center text-blue-700 cursor-pointer scale-95 hover:scale-97 duration-300 ease-out" 
    onClick={()=>{ modifyRouter("chamados-sem-login")}}>Abrir um chamado</Forms.Paragrafo>
    </div>
   </Forms.Root>
</div>
   

  );
}
