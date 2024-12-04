"use client";

import React, { useEffect } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { IStudent } from "../../@types/student";
import { thunkFetchStudents } from "@/store/ThunkFetchStudents";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function StudentsTable() {
  const dispatch = useAppDispatch();
  const { students } = useAppSelector((state) => state.studentsReducer);
  const t = useTranslations("CandidatesFormAndTable");

  const columns: ColumnsType<IStudent> = [
    {
      title: t("lastName"),
      dataIndex: "lastName",
      key: "lastname",
      className: "text-gray-700 font-medium",
    },
    {
      title: t("firstName"),
      dataIndex: "firstName",
      key: "firstname",
      className: "text-gray-700 font-medium",
    },
    {
      // todo : calculer l'age a partir de la date de naissance
      title: t("age"),
      dataIndex: "age",
      key: "age",
      className: "text-center",
    },
    {
      title: t("birthDate"),
      dataIndex: "birthDate",
      key: "birthdate",
      className: "overflow-clip",
      render: (birthDate: Date | string | undefined) => {
        if (!birthDate) return "Non indiquée";

        // Convert the birth date to a Date object
        const dateObj =
          birthDate instanceof Date ? birthDate : new Date(birthDate);

        // Format the date as a string
        return dateObj.toLocaleDateString();
      },
    },
    {
      title: t("email"),
      dataIndex: "email",
      key: "email",
      className: "text-blue-600",
    },
    {
      title: t("details"),
      key: "action",
      render: (_, record) => (
        <Link href={`/recruteurs/${record.id}`}>
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors">
            {t("detailsButton")}
          </button>
        </Link>
      ),
    },
  ];

  useEffect(() => {
    dispatch(thunkFetchStudents());
  }, []);

  return (
    <div>
      <Table
        columns={columns}
        dataSource={students}
        rowKey="id"
        pagination={{
          showSizeChanger: false,
          showQuickJumper: true,
        }}
      />
    </div>
  );
}
