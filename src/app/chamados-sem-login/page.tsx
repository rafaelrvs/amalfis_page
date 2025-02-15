import { Forms } from "../components/Forms";

export default function ChamadosPage() {
  return (
<div className="bg-linear-[25deg, bg-primary-gradient-900 from-10%, bg-primary-gradient-800] w-screen h-screen flex   bg-cover bg-center justify-end items-center p-30" >
      <Forms.Root className="w-[500px] h-[600px] bg-blue-50 backdrop-grayscale-0  flex flex-col  rounded-[25px] text-primary-grey-900 " >
        <Forms.Label>Nome completo</Forms.Label>
        <Forms.Label>Qual setor deseja falar?</Forms.Label>
        <Forms.Label>Motivo</Forms.Label>
        <Forms.Label>Descrição detalhada</Forms.Label>
      </Forms.Root>
    </div>
  );
}
