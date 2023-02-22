import { useRouter } from "next/router";
import { Header } from "./Header";
import PortalLayout from "./PortalLayout";
import { Poppins } from "@next/font/google";

export const Layout = ({ children }) => {
  const router = useRouter();
  if (router.pathname == "/login") {
    return (
      <>
        <main className={`h-screen max-h-screen overflow-hidden font-mono`}>
          <Header />
          <div className="m-auto">{children}</div>
        </main>
      </>
    );
  }
  return (
    <>
      <main className={`h-screen max-h-screen overflow-hidden font-mono`}>
        <Header />
        <PortalLayout>{children}</PortalLayout>
      </main>
    </>
  );
};
