import { Forms } from "../components/Forms";

export default function ChamadosPage() {
  return (
    <div className="bg-linear-[25deg, bg-primary-gradient-900 from-10%, bg-primary-gradient-800] w-screen h-screen flex  gap-1.5 bg-cover bg-center justify-end items-center p-30">
      <Forms.Root className="w-[500px] h-[600px] bg-blue-50 backdrop-grayscale-0  flex flex-col p-5  text-primary-gradient-900 rounded-[25px] text-primary-grey-900 ">
        <Forms.Label htmlFor="Nome">Nome completo</Forms.Label>
        <Forms.Input
          type="input"
          placeholder="Digite seu nome"
          id="Nome"
          className="border primary-gradient-800 h-[45px] p-2 rounded-l-sm  text-gray-700"
        />
        <Forms.Label htmlFor="Email">Email para contato</Forms.Label>
        <Forms.Input
          type="input"
          placeholder="Digite seu Email"
          id="Email"
          className="border primary-gradient-800 h-[45px] p-2 rounded-l-sm  text-gray-700"
        />
        <Forms.Label htmlFor="">Setor que deseja abrir o chamado</Forms.Label>
        <Forms.Select className="border primary-gradient-800 h-[45px] p-2 rounded-l-sm  text-gray-700" >
          <option value="">Selecione uma opção</option>
          <option value="">Desenvolvimento</option>
          <option value="">TI</option>
        </Forms.Select>
        <Forms.Label>Motivo</Forms.Label>
      </Forms.Root>
      <Forms.Root className="w-[500px] h-[600px] bg-blue-50 backdrop-grayscale-0  flex flex-col  text-primary-gradient-900 rounded-[25px] text-primary-grey-900 ">
        <Forms.Label>Descreva detalhadamente seu chamado</Forms.Label>
      </Forms.Root>
    </div>
  );
}
