"use client";

import { IStudent } from "@/app/@types/student";
import { useAppSelector } from "@/store/hooks";
import { Button, Card } from "antd";
import { Link } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Page() {
  const params = useParams<{ id: string }>();
  const { students } = useAppSelector((state) => state.studentsReducer);
  const student = students.find((student) => student.id === Number(params.id));
  const t = useTranslations("CandidatesFormAndTable");

  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-4/6 p-8 bg-white shadow-md rounded-lg text-center relative">
        <Link href="/recruteurs">
          <Button className="absolute top-4 left-4 px-4 py-2 bg-gray-200 text-gray-800 border border-gray-400 rounded hover:bg-gray-300 focus:outline-none focus:ring">
            Retour
          </Button>
        </Link>

        {student ? (
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-black mb-6">
              {student.firstName} {student.lastName}
            </h1>

            <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-700">
                    {t("major")}
                  </span>
                  <span className="text-gray-900">{student.major}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-700">
                    {t("email")}
                  </span>
                  <span className="text-blue-600">{student.email}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold text-gray-700">
                    {t("birthDate")}
                  </span>
                  <span className="text-gray-900">
                    {new Date(student.birthDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black mb-6">
              {t("candidateNotFound")}
            </h1>
            <p className="text-gray-600">{t("candidateNotFoundMessage")} </p>
          </div>
        )}
      </div>
    </div>
  );
}
