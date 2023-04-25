import Image from "next/image";
import bgImage from "public/moon-portal.png";
import logo from "public/moon-portal.png";

import { useRouter } from "next/router";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import Loading from "../components/Loading";
import Link from "next/link";
export default function Login() {
  const { data: session, status: loading } = useSession();
  const router = useRouter();

  console.log(loading == "loading");

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  if (loading == "loading") {
    return <Loading />;
  }
  return (
    <>
      <div className="h-full lg:bg-[url('/LoginBg.png')] bg-contain bg-repeat-round grid ">
        {/* lg:bg-[url('/LoginBg.png')] */}
        <div className="w-full items-center flex justify-center">
          <div className="lg:w-[28rem] md:w-[32rem] text-center">
            <Image src={logo} alt={""} className="w-48 mx-auto mb-10"></Image>
            <p className="mb-5">
              Log in with your Moon Portal account to continue
            </p>
            <button
              className="m-auto flex gap-2 items-center align-middle justify-center w-9/12 h-14 text-white focus:ring-4 focus:outline-none font-medium rounded-sm text-lg text-center bg-gray-600 hover:bg-gray-800"
              onClick={() =>
                signIn("auth0", {
                  callbackUrl: `${window.location.origin}/`,
                })
              }
            >
              <p>Log In</p>
              <RocketLaunchIcon className="w-5 h-5"></RocketLaunchIcon>
            </button>
            <p className="text-sm font-light">Dont have an account yet?</p>
            <Link
              href={"#"}
              className="text-sm font-light underline underline-offset-2"
            >
              Click here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
