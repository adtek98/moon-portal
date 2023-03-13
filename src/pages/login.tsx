import LoginForm from "../components/LoginForm";
import Image from "next/image";
import bgImage from "public/moon-portal.png";
export default function Login() {
  return (
    <>
      <div className="h-full lg:bg-[url('/LoginBg.png')] bg-contain bg-repeat-round grid">
        <div className="w-8/12 my-auto lg:flex justify-center">
          <div className="select-none lg:w-2/6 mr-10">
            <Image src={bgImage} alt={""}></Image>

            {/* <div className="text-left font-bold text-6xl px-10 py-5 ">
              <h1 className="mb-2 ">Welcome To</h1>
              <h1>MOON Portal</h1>
            </div> */}
          </div>
          <div className="mt-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
