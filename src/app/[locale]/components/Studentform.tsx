"use client";

import { Form, Input, Button, DatePicker } from "antd";
import { useTranslations } from "next-intl";

export default function StudentForm() {
  const [form] = Form.useForm();
  const t = useTranslations("CandidatesFormAndTable");

  const onFinish = (values: any) => {
    // Convert the date to ISO format
    const formattedValues = {
      ...values,
      birthDate: values.birthDate
        ? values.birthDate.format("YYYY-MM-DD")
        : null,
    };
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6">
      <Form
        form={form}
        name="student-registration"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="firstName"
          label={t("firstName")}
          rules={[{ required: true, message: t("inputRequired") }]}
        >
          <Input placeholder={t("firstNamePlaceholder")} />
        </Form.Item>

        <Form.Item
          name="lastName"
          label={t("lastName")}
          rules={[{ required: true, message: t("inputRequired") }]}
        >
          <Input placeholder={t("lastNamePlaceholder")} />
        </Form.Item>

        <Form.Item
          name="birthDate"
          label={t("birthDate")}
          rules={[{ required: true, message: t("inputRequired") }]}
        >
          <DatePicker
            style={{ width: "100%" }}
            placeholder={t("birthDatePlaceholder")}
          />
        </Form.Item>

        <Form.Item
          name="email"
          label={t("email")}
          rules={[
            { required: true, message: t("inputRequired") },
            { type: "email", message: t("emailValidate") },
          ]}
        >
          <Input placeholder={t("emailPlaceholder")} />
        </Form.Item>

        <Form.Item
          name="major"
          label={t("major")}
          rules={[{ required: true, message: t("inputRequired") }]}
        >
          <Input placeholder={t("majorPlaceholder")} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {t("submitButton")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
