import Link from "next/link";
import StudentForm from "../components/Studentform";

export default function Page() {
  const today = new Date();
  console.log(today);

  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-4/6 p-8 bg-white shadow-md rounded-lg text-center relative">
        <Link href="/">
          <button className="absolute top-4 left-4 px-4 py-2 bg-gray-200 text-gray-800 border border-gray-400 rounded hover:bg-gray-300 focus:outline-none focus:ring">
            Retour
          </button>
        </Link>

        <h1 className="text-3xl font-bold text-black mb-6">Page candidats</h1>

        <div className="w-full p-6">
          <div className="p-6">
            <StudentForm />
          </div>
        </div>
      </div>
    </div>
  );
}
