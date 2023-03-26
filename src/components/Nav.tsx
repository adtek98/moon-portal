import Link from "next/link";

const routes = [
  { name: "HOME", path: "/" },
  { name: "FLEET", path: "/fleet" },
];

export const Nav = () => {
  return (
    <>
      <nav className="mx-auto h-full">
        <ul className="flex  gap-5">
          {routes.map((r) => (
            <li
              key={r.name}
              className="border border-x-0 border-t-0 my-3 border-gray-500 hover:border-white hover:text-white active:text-white "
            >
              <Link href={r.path}>
                <p>{r.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
