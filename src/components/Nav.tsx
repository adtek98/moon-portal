import Link from "next/link";

const routes = [
  { name: "HOME", path: "/" },
  { name: "FLEET", path: "/fleet" },
  { name: "CREATE UNIT", path: "/newunit" },
];

export const Nav = () => {
  return (
    <>
      <nav className="h-full w-fit lg:w-full mx-auto">
        <ul className="h-[95%]">
          {routes.map((r) => (
            <li>
              <Link href={r.path}>
                <p className="border border-x-0 border-t-0 my-3 border-gray-500 hover:border-white hover:text-white">
                  {r.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="h-[5%]">
          <li className="">
            <Link className="" href="/login">
              <p className="border border-x-0 border-t-0 my-3 border-gray-500 hover:border-white hover:text-white">
                LOG OUT
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
