import { useRouter } from "next/router";
import { Header } from "./Header";
import PortalLayout from "./PortalLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const Layout = ({ children }) => {
  const router = useRouter();
  if (router.pathname == "/login") {
    return (
      <>
        <main
          className={`h-screen max-h-screen overflow-hidden ${inter.variable} font-inter`}
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
      </>
    );
  }
  return (
    <>
      <main
        className={`h-screen max-h-screen overflow-hidden ${inter.variable} font-inter`}
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
    </>
  );
};
