"use client";

import { IStudent } from "@/app/@types/student";
import { Card } from "antd";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const student = {
    id: 1,
    firstName: "Martin",
    lastName: "Dubois",
    birthDate: "2002-03-15",
    email: "martin.dubois@ecole.fr",
    major: "Informatique",
  };
  console.log(params);

  <Card
    title={`${student.firstName} ${student.lastName}`}
    bordered={false}
    style={{ width: 300, backgroundColor: "#f0f" }}
  >
    <p>Filière : {student.major}</p>
    <p>Email : {student.email}</p>
    <p>Date de naissance : {student.birthDate}</p>
  </Card>;
}
