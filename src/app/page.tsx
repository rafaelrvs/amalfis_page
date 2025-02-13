import Image from "next/image";
import { Forms } from "./components/Forms";

export default function Home() {
  return (
<div className="w-screen h-screen bg-gray-800 text-white flex items-center justify-start">
  <img className="w-[90vh] mg-left" src="/image/isotipo amalfis branco.svg" alt="logoAmalfis" />
   <Forms.Root  className="bg-white w-7" >
    <Forms.Input type="input" placeholder="teste" className="bg-slate-300"/>

   </Forms.Root>
</div>

  );
}
