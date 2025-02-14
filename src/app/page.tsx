import Image from "next/image";
import { Forms } from "./components/Forms";


export default function Home() {
  return (
<div className="w-screen h-screen bg-slate-800  text-white flex items-center justify-between p-5" >
  <img className="w-[120vh] m-[-300px] opacity-[50%]" src="/image/isotipo amalfis branco.svg" alt="logoAmalfis"  />

   <Forms.Root className={"bg-slate-200 w-[450px] h-[450px] p-[15px] rounded-[5px]  flex justify-center  flex-col gap-3 m-[100px]"} >
    <Forms.Label className={'tex'} htmlFor={"E-mail"}>E-mail</Forms.Label>
    <Forms.Input type="input" placeholder="E-mail" id="E-mail" className="bg-slate-300 h-[35px] p-2"/>
    <Forms.Label className={'text-black'} htmlFor={"Senha"}>Senha</Forms.Label>
    <Forms.Input type="input" placeholder="Senha" id="Senha" className="bg-slate-300 h-[35px] p-2"/>
    <Forms.Input type="button" value={"Entrar"} className={"bg-blue-600"}  />
    <Forms.Paragrafo className="text-black  text-center text-blue-700">Abrir um chamado</Forms.Paragrafo>
   </Forms.Root>
</div>

  );
}
