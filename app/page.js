import Image from "next/image";
import Link from "next/link";
import shorten from "./shorten/page";


export default function Home() {
  return (
    <main className=" bg-purple-100 ">
      <section className="grid grid-cols-2 h-50vh">
        <div className=" flex flex-col gap-4 justify-center  ">
          <p className=" text-3xl font-bold text-center ">The Best URL Shortner in the Market</p>
          <p className=" mx-4 text-center">We are the most straightforward URL shortner in the World.</p>

          <div className="flex gap-3 justify-center items-end text-white">
                    <Link href="/shorten"><button className=" flex p-3 py-1 font-bold shadow-lg rounded-lg bg-purple-700 ">Try Now</button></Link>
                    <Link href="/git"><button className=" flex p-3 py-1 font-bold shadow-lg rounded-lg bg-purple-700 ">GitHub</button></Link>
                </div>
        </div>

        <div className="flex justify-start">
          <Image alt="an image of a vector" src={"/vector.png"} width = {500} height={500} />
        </div>
      </section>
    </main> 
    );
}
