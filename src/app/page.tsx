import Image from "next/image";
import { Forms } from "./components/Forms";







export default function Home() {
  return (
<div className="w-screen h-screen bg-primary-grey-900 flex items-center  justify-end p-5 bg-linear-to-r/srgb from-primary-gradient-900 to-primary-gradient-800" >
  <img className="w-[130vh] m-[-300px] opacity-[40%] fixed left-1 -rotate-2  " src="/image/isotipo amalfis branco.svg" alt="logoAmalfis" />


    <p className="fixed flex flex-col left-10 font-poppins text-[1rem] ">
      <span className="text-[2.5rem]">Time Amalfis</span>
      Você é uma peça fundamental para Amalfis
      </p>

   <Forms.Root className={"bg-slate-200  w-[450px] h-[500px] p-8 rounded-2xl flex  flex-col gap-5 m-[100px] shadow-lg"} >
    <img src="/image/logo.svg" alt="logi"  className="h-18 mt-1.5"/>
    <Forms.Label className={'text-primary-gradient-900 '} htmlFor={"E-mail"}>E-mail</Forms.Label>
    <Forms.Input type="input" placeholder="Digite seu email" id="E-mail" className="bg-slate-300 h-[35px] p-2 rounded-l-sm  text-gray-700"/>
    <Forms.Label className={'text-primary-gradient-900 '}  htmlFor={"Senha"}>Senha</Forms.Label>
    <Forms.Input type="input" placeholder="Digite sua senha" id="Senha" className="bg-slate-300 h-[35px] p-2 rounded-l-sm  text-gray-700" />
    <Forms.Input type="button" value={"Entrar"} className={"bg-blue-600 p-2 rounded-l-sm"}  />
    <Forms.Paragrafo className="text-black  text-center text-blue-700 cursor-pointer">Abrir um chamado</Forms.Paragrafo>
   </Forms.Root>
</div>

  );
}
