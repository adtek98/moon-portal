import { useRouter } from "next/router";
import { Header } from "./Header";
import PortalLayout from "./PortalLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = ({ children }) => {
  const router = useRouter();
  if (router.pathname == "/login") {
    return (
      <>
        <main className={`h-screen max-h-screen overflow-hidden font-sans`}>
          {children}
        </main>
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
      </>
    );
  }
  return (
    <>
      <main className={`h-screen max-h-screen overflow-hidden font-sans`}>
        <Header />
        <PortalLayout>{children}</PortalLayout>
      </main>
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
    </>
  );
};
