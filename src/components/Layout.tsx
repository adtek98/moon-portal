import { useRouter } from "next/router";
import { Header } from "./Header";
import { PortalLayout } from "./PortalLayout";

export const Layout = ({ children }) => {
  const router = useRouter();
  console.log(router.pathname);
  if (router.pathname == "/login") {
    return (
      <>
        <main className="h-screen overflow-hidden">
          <Header />
          {children}
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
