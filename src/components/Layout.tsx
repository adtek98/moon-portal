import { useRouter } from "next/router";
import { Header } from "./Header";
import PortalLayout from "./PortalLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Montserrat } from "next/font/google";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { PropsWithChildren } from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const Layout = ({ children }: PropsWithChildren) => {
  const { data: session } = useSession();
  const router = useRouter();
  if (router.pathname == "/login") {
    return (
      <main
        className={`h-screen max-h-screen overflow-hidden ${montserrat.variable} font-montserrat`}
      >
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </main>
    );
  }
  if (session && router.pathname != "/login") {
    return (
      <main
        className={`h-screen max-h-screen overflow-hidden ${montserrat.variable} font-montserrat`}
      >
        <Header />
        <PortalLayout>{children}</PortalLayout>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </main>
    );
  }
  return (
    <>
      <div
        className={`text-center p-10 ${montserrat.variable} font-montserrat`}
      >
        <p>Please sign in to visit this page</p>
        <Link href={"/login"}>To Log In page</Link>
      </div>
    </>
  );
};
