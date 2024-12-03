"use client";

import React from "react";
import { Space, Table, Tag } from "antd";

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  // birthDate: Date;
}

const data: DataType[] = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: "Nom",
    dataIndex: "firstName",
    key: "firstName",
    className: "text-gray-700 font-medium",
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
    className: "text-gray-600",
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
      <Table<DataType> dataSource={data}>
        <Column title="Nom" dataIndex="firstName" key="firstName" />
        <Column title="Prénom" dataIndex="lastName" key="lastName" />
        <Column title="Âge" dataIndex="age" key="age" />
        <Column
          title="Date de naissance"
          dataIndex="birthDate"
          key="birthdate"
        />
        <Column title="e-mail" dataIndex="email" key="email" />
        <Column title="Détails" key="action" />
      </Table>
    </div>
  );
}
