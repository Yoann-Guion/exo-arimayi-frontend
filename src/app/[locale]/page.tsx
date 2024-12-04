import { Button } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-96 p-8 bg-white shadow-md rounded-lg text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-black">Projet Frontend</h1>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/candidats">
            <Button type="primary" block>
              Espace candidats
            </Button>
          </Link>
          <Link href="/recruteurs">
            <Button type="default" block>
              Espace recruteurs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
