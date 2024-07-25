import Image from "next/image";
import {Button}from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center mx-auto max-w-2xl">
            <h2 className="font-bold text-base text-indigo-500 leading-7">Your Interactive Document Companion</h2>
            <p className="text-3xl sm:text-5xl font-bold tracking-tight">Transform Your PDFs into Interactive Conversations</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600">Chat with PDF.</span>
              <br/>
              <br/> Upload your document, and our chatbot will answer questions, summarize content, and answer all your Qs. Ideal for everyone, <span className=" text-indigo-600">
              Chat with PDF
              </span>{" "}
              turns static documents into{" "}
              <span className="font-bold">dynamic conversations</span>, 
              enhancing productivity 10x fold effortlessly.
              </p>

          </div>
            <Button asChild className="mt-10 ">
                <Link href='/dashboard'>Get started</Link>
            </Button>
          </div>

          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
              alt="App screenshot"
              src="https://i.imgur.com/VciRSTI.jpeg"
              width={2832}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 Dring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]"/>
            </div>
          </div>
        </div>

        <div>
          <dl>

          </dl>
        </div>
      </div>
    </main>
  );
}
