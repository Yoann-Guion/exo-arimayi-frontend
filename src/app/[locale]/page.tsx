import { Button } from "antd";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 p-8 bg-white shadow-md rounded-lg text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-black">{t("title")}</h1>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/candidats">
            <Button type="primary" block>
              {t("candidates")}
            </Button>
          </Link>
          <Link href="/recruteurs">
            <Button type="default" block>
              {t("recruiters")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
