import Link from "next/link";
import StudentForm from "../components/Studentform";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("CandidatesPage");
  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl px-4 py-8 sm:px-8 bg-white shadow-md rounded-lg text-center relative">
        <Link href="/" className="absolute top-4 left-4">
          <button className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-200 text-gray-800 border border-gray-400 rounded hover:bg-gray-300 focus:outline-none focus:ring text-sm sm:text-base">
            {t("backButton")}
          </button>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6">
          {t("title")}
        </h1>
        <div className="w-full">
          <StudentForm />
        </div>
      </div>
    </div>
  );
}
