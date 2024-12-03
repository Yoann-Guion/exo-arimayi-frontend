"use client";

import React, { useEffect } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { IStudent } from "../@types/student";
import { thunkFetchStudents } from "@/store/ThunkFetchStudents";

const columns: ColumnsType<IStudent> = [
  {
    title: "Nom",
    dataIndex: "firstName",
    key: "firstName",
    className: "text-gray-700 font-medium w-1/4 min-width-40",
  },
  {
    title: "Prénom",
    dataIndex: "lastName",
    key: "lastName",
    className: "text-gray-700 font-medium",
  },
  {
    title: "Âge",
    dataIndex: "age",
    key: "age",
    className: "text-center",
  },
  {
    title: "Date de naissance",
    dataIndex: "birthDate",
    key: "birthdate",
    className: "overflow-clip",
    render: (birthDate: Date | string | undefined) => {
      if (!birthDate) return "Non indiquée";

      // Convertir en objet Date si ce n'est pas déjà le cas
      const dateObj =
        birthDate instanceof Date ? birthDate : new Date(birthDate);

      // Formater la date avec toLocaleDateString et des options personnalisées
      return dateObj.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    },
  },
  {
    title: "E-mail",
    dataIndex: "email",
    key: "email",
    className: "text-blue-600",
  },
  {
    title: "Détails",
    key: "action",
    render: (_, record) => (
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
        onClick={() => handleDetails(record)}
      >
        Voir
      </button>
    ),
  },
];

const handleDetails = (record: IStudent) => {
  console.log("Détails de l'étudiant :", record);
};

export default function StudentsTable() {
  const dispatch = useAppDispatch();
  const { students } = useAppSelector((state) => state.studentsReducer);

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
