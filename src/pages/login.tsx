import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 h-[93%]">
        <div className="bg-gray-700 w-full rounded-lg border border-gray-600 md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6">
            <div className="mb-3 ">
              <h1 className="text-2xl font-bold">MOON LOG IN</h1>
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Username
                </label>
                <input
                  type="Username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border rounded bg-gray-50 focus:ring-3 border-gray-600 focus:ring-gray-600 ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="text-gray-300">Remember me</label>
                  </div>
                </div>
              </div>
              <div className="w-full h-10">
                <Link
                  className="w-full h-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-lg text-center bg-gray-200 hover:bg-gray-800 "
                  href={"/"}
                >
                  <p>Sign in</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
