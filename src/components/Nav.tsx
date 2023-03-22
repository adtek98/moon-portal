import Link from "next/link";

const routes = [
  { name: "HOME", path: "/" },
  { name: "FLEET", path: "/fleet" },
];

export const Nav = () => {
  return (
    <>
      <nav className="h-full w-fit lg:w-full mx-auto">
        <ul className="h-[95%]">
          {routes.map((r) => (
            <li
              key={r.name}
              className="border border-x-0 border-t-0 my-3 border-gray-500 hover:border-white hover:text-white active:text-white"
            >
              <Link href={r.path}>
                <p>{r.name}</p>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="h-[5%]">
          <li className="border border-x-0 border-t-0 my-3 border-gray-500 hover:border-white hover:text-white">
            <Link href="/login">
              <p>LOG OUT</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
