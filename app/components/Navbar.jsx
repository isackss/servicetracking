import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between p-2 border items-center">
        <div className="bg-slate-800 rounded-md text-white p-2 font-bold">
          RQ-Tracking
        </div>
        <ul>
          <li>
            <Link
              className="bg-blue-700 text-white font-bold px-4 py-2 rounded-md"
              href="/ticket/create"
            >
              Create
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
