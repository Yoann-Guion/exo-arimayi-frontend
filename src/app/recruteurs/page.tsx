import Link from "next/link";
import StudentsTable from "../components/StudentsTable";

export default function Page() {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-4/6 p-8 bg-white shadow-md rounded-lg text-center relative">
        <h1 className="text-3xl font-bold text-black mb-6">Page recruteurs</h1>

        <Link href="/">
          <button className="absolute top-4 left-4 px-4 py-2 bg-gray-200 text-gray-800 border border-gray-400 rounded hover:bg-gray-300 focus:outline-none focus:ring">
            Retour
          </button>
        </Link>

        <div className="w-full p-6 ">
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-4/5 lg:w-3/4 mx-auto">
            <StudentsTable />
          </div>
        </div>
      </div>
    </div>
  );
}
