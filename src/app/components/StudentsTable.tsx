"use client";

import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

const { Column } = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  birthDate: string;
  email: string;
}

const data: DataType[] = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    birthDate: "2003-04-18",
    email: "plop@gmail.com",
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    birthDate: "2003-04-18",
    email: "plop@gmail.com",
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    birthDate: "2003-04-18",
    email: "plop@gmail.com",
  },
];

const columns: ColumnsType<DataType> = [
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
    render: () => (
      <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors">
        Voir
      </button>
    ),
  },
];

export default function StudentsTable() {
  return (
    <div>
      <Table<DataType>
        columns={columns}
        dataSource={data}
        pagination={{
          showSizeChanger: false,
          showQuickJumper: true,
        }}
      />
    </div>
  );
}
