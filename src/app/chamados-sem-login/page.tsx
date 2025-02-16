"use client";
import { redirect } from "next/navigation";
import { Forms } from "../components/Forms";
import { setor } from "../utilits/dataOption";
import { useEffect, useState } from "react";
import modifyRouter from "../utilits/function/globalFunction";

export default function ChamadosPage() {
  const setores = Object.keys(setor.setores) as Array<
    keyof typeof setor.setores
  >;
  const [valueSetor, setValueSetor] = useState<keyof typeof setor.setores | "">(
    ""
  );
  const [motivoSetor, setMotivoSetor] = useState<string[]>([]);
  const [selectedMotivo, setSelectedMotivo] = useState("");
  useEffect(() => {
    if (valueSetor) {
      // Aqui assumimos que setor.setores[valueSetor] possui uma propriedade 'motivo' que é um array de strings
      setMotivoSetor(setor.setores[valueSetor].motivo);
    } else {
      setMotivoSetor([]);
    }
  }, [valueSetor]);

  function handleSetorChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setValueSetor(e.target.value as keyof typeof setor.setores);
  }
  function handleMotivoChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedMotivo(e.target.value);
  }
  
 
  

  return (
<div className="bg-gradient-to-r overflow-hidden from-primary-gradient-900 to-primary-gradient-800 w-screen h-screen flex gap-1.5  bg-center justify-center items-center">

      <img
        className="w-[130vh] m-[-300px] opacity-[40%] fixed  left-1 -rotate-2  "
        src="/image/isotipo amalfis branco.svg"
        alt="logoAmalfis"
      />

      <Forms.Root className="w-[450px] gap-2 h-[500px] backdrop-blur-sm animate-fade-leftAnimation   bg-blue-50/80 backdrop-grayscale-0 flex flex-col p-5 text-primary-gradient-900 rounded-[5px] text-primary-grey-900">
        <h1 className="text-[2rem] text-center pb-2">Abrir chamado</h1>
        <Forms.Label htmlFor="Nome">Nome completo</Forms.Label>
        <Forms.Input
          type="input"
          placeholder="Digite seu nome"
          id="Nome"
          className="border primary-gradient-800 h-[45px] p-2 rounded-[5px] text-gray-700"
        />
        <Forms.Label htmlFor="Email">Email para contato</Forms.Label>
        <Forms.Input
          type="input"
          placeholder="Digite seu Email"
          id="Email"
          className="border primary-gradient-800 h-[45px] p-2 rounded-[5px] text-gray-700"
        />
        <Forms.Label htmlFor="setor">
          Setor que deseja abrir o chamado
        </Forms.Label>
        <Forms.Select
          id="setor"
          className="border primary-gradient-800 h-[45px] p-2 rounded-[5px] text-gray-700"
          onChange={handleSetorChange}
        >
          <option value="">Selecione um valor</option>
          {setores.map((setorNome) => (
            <option key={setorNome} value={setorNome}>
              {setorNome}
            </option>
          ))}
        </Forms.Select>
        <Forms.Label htmlFor="motivo">Motivo</Forms.Label>
        <Forms.Select
          id="motivo"
          className="border primary-gradient-800 h-[45px] p-2 rounded-[5px] text-gray-700"
          onChange={handleMotivoChange}
          value={selectedMotivo}
        >
          <option value="">Selecione um motivo</option>
          {motivoSetor.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Forms.Select>
        <Forms.Input type="button" value={"voltar"}   onClick={()=>{modifyRouter("/")}} className="rounded-[5px]  text-white   bg-red-500 p-2 rounded-l-sm scale-95 hover:scale-97 duration-300 ease-out"  />
      </Forms.Root>
      <Forms.Root className="  w-[450px] gap-2  h-[500px] p-10 backdrop-blur-sm animate-fade-leftAnimation2  bg-blue-50/80 backdrop-grayscale-0 flex flex-col text-primary-gradient-900 rounded-[5px] text-primary-grey-900">
        <Forms.Label className="flex  text-[1.2rem] pb-5 ">
          Descreva detalhadamente seu chamado
        </Forms.Label>
        <Forms.TextArea
          placeholder="Descreva detalhadamente"
          className="border primary-gradient-800 h-[300px] p-2 rounded-l-sm text-gray-700"
        />
        <Forms.Input type="button" value={"Enviar"} className="rounded-[5px] text-white  bg-blue-600 p-2 rounded-l-sm scale-95 hover:scale-97 duration-300 ease-out" />
      </Forms.Root>
    </div>
  );
}
