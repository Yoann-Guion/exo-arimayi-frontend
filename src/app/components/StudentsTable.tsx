"use client";

import React from "react";
import { Space, Table, Tag } from "antd";

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default function StudentsTable() {
  return (
    <Table<DataType> dataSource={data}>
      <Column title="Nom" dataIndex="firstName" key="firstName" />
      <Column title="Prénom" dataIndex="lastName" key="lastName" />
      <Column title="Âge" dataIndex="age" key="age" />
      <Column title="Date de naissance" dataIndex="birthDate" key="birthdate" />
      <Column title="e-mail" dataIndex="email" key="email" />
      <Column title="Détails" key="action" />
    </Table>
  );
}
