import LoginForm from "../components/LoginForm";
import Image from "next/image";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import bgImage from "public/BgImage.jpg";
export default function Login() {
  return (
    <>
      <div className="h-full lg:flex items-center">
        <div className="lg:w-5/12 mb-20">
          <LoginForm />
        </div>
        <div className="lg:w-7/12 h-full">
          <div className="text-center font-bold text-5xl">
            <h1>MOON portal</h1>
            <h1>Support Log In</h1>
          </div>
          <Image className="rotate-180" src={bgImage} alt={""}></Image>
        </div>
      </div>
    </>
  );
}
