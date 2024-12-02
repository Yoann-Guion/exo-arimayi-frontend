"use client";

import React from "react";
import { Form, Input, Button, DatePicker } from "antd";

export default function StudentForm() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // Conversion de la date de naissance en format ISO
    const formattedValues = {
      ...values,
      birthDate: values.birthDate
        ? values.birthDate.format("YYYY-MM-DD")
        : null,
    };
    console.log("Données du formulaire :", formattedValues);
    // Ici, vous pourriez envoyer les données à votre backend
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <Form
        form={form}
        name="student-registration"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="firstName"
          label="Prénom"
          rules={[{ required: true, message: "Veuillez saisir le prénom" }]}
        >
          <Input placeholder="Entrez le prénom" />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Nom"
          rules={[{ required: true, message: "Veuillez saisir le nom" }]}
        >
          <Input placeholder="Entrez le nom" />
        </Form.Item>

        <Form.Item
          name="birthDate"
          label="Date de naissance"
          rules={[
            { required: true, message: "Veuillez sélectionner une date" },
          ]}
        >
          <DatePicker
            style={{ width: "100%" }}
            placeholder="Sélectionnez une date"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Veuillez saisir l'email" },
            { type: "email", message: "Veuillez entrer un email valide" },
          ]}
        >
          <Input placeholder="Entrez l'email" />
        </Form.Item>

        <Form.Item
          name="major"
          label="Filière"
          rules={[{ required: true, message: "Veuillez saisir la filière" }]}
        >
          <Input placeholder="Entrez la filière" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Enregistrer l'étudiant
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
