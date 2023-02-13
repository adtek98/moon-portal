import { useRouter } from "next/router";
import { Header } from "./Header";
import { PortalLayout } from "./PortalLayout";

export const Layout = ({ children }) => {
  const router = useRouter();
  if (router.pathname == "/login") {
    return (
      <>
        <main className="h-screen overflow-hidden">
          <Header />
          <div className="h-[93%]">{children}</div>
        </main>
      </>
    );
  }
  return (
    <>
      <main className="h-screen overflow-hidden">
        <Header />
        <PortalLayout>{children}</PortalLayout>
      </main>
    </>
  );
};
