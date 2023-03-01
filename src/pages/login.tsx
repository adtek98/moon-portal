import LoginForm from "../components/LoginForm";
import Image from "next/image";
import bgImage from "public/LoginBg.png";
export default function Login() {
  return (
    <>
      <div className="h-full lg:bg-[url('/LoginBg.png')] bg-contain bg-repeat-round grid">
        <div className="w-full m-auto lg:flex justify-center">
          <div className="select-none">
            <div className="text-left font-bold text-6xl px-10 py-5 mr-10">
              <h1 className="mb-2 ">Welcome To</h1>
              <h1>MOON Portal</h1>
            </div>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
