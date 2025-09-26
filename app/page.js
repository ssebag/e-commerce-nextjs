import Image from "next/image";
import Hero from './../public/assets/hero.svg'
export default function Home() {
  return (
    <div className="flex items-center  gap-[100px] mb-2">
     <div className="flex flex-col items-start gap-[25px] w-[45%]">
       <h1 className="text-5xl font-bold">Your Best Online Shop Destination!</h1>
       <p className="text-xl">Discovery a world of endless shopping possibilities at our online store. 
       Browse, choose, and order your favorite products from the comfort of your home.</p>
       <button className="bg-yellow-400 p-[20px] rounded-[5px] font-bold 
       hover:bg-yellow-400/75">Shop Now</button>
     </div>
     <div className="w-[45%]">
       <Image
          src={Hero}
          alt="Hexa Shop" 
          className="object-contain h-[450px]"
       />
     </div>
    </div>
  );
}
