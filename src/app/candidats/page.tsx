import StudentForm from "../component/Studentform";

export default function Page() {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-4/6 p-8 bg-white shadow-md rounded-lg text-center">
        <h1 className="text-3xl font-bold text-black mb-6">Page candidats</h1>
        <div className="w-full p-6 border border-gray-300 rounded-lg shadow-lg">
          <StudentForm />
        </div>
      </div>
    </div>
  );
}
