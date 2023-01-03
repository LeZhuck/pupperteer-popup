import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "@fontsource/poppins";

export default function Home() {

  async function myalert (){
    alert("Hello World")
  }

  return (
    <div className="bg-slate-900 h-screen w-screen font-sans">
  <div className="flex justify-center items-center justify-items-center h-full text-white">
    <div>
    <h1 className="text-2xl">Sujet de Stage Pupperteer</h1>
    <div className="flex justify-center items-center justify-items-center w-full mt-8">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate-bounce" onClick={myalert}> Click me </button>
    </div>
    <div className="flex justify-center items-center justify-items-center w-full mt-8">
      You can also test on theses websites : 
    </div>
    <div className="flex justify-center items-center justify-items-center w-full mt-8">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate-bounce"><a href = "https://demoqa.com/alerts"> Site 1</a> </button>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded animate-bounce ml-5"> <a href = "https://www.xul.fr/ecmascript/dialogues.php">Site 2 </a> </button>
    </div>
    </div>
  </div>
  </div>

  )
}
