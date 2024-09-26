import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center h-screen justify-center">
      <h1 className="mb-4">Sistema de seguimiento de solicitudes</h1>
      <Link
        href="/dashboard"
        className="px-4 py-2 bg-slate-600 rounded-lg text-white"
      >
        Ir al Dashboard
      </Link>
    </div>
  );
}
