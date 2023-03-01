import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import Users from "../../data/Users";
import { toast } from "react-toastify";
const schema = yup
  .object({
    userName: yup.string().required("Please enter Username"),
    passWord: yup.string().required("Please enter Password"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    const user = Users.user.find(
      (user) =>
        user.username === data.userName && user.password === data.passWord
    );
    if (user != null) {
      toast.success("Login was successfull, Welcome!");
      router.push("/");
      return;
    }
    toast.error("Username or password does not match, please try again");
  };
  return (
    <div className="lg:w-[28rem] md:w-[32rem] px-10 py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="h-20 mb-2">
          <label className="text-sm">Username</label>
          <input
            className="text-gray-900 sm:text-sm rounded-sm w-full h-11 px-2 bg-gray-300"
            {...register("userName")}
          />
          <p className="text-red-800 text-sm">{errors.userName?.message}</p>
        </div>
        <div className="h-24">
          <label className="text-sm">Password</label>
          <input
            type="password"
            className="text-gray-900 sm:text-sm rounded-sm w-full h-11 px-2 bg-gray-300"
            {...register("passWord")}
          />
          <p className="text-red-800 text-sm">{errors.passWord?.message}</p>
        </div>
        <button
          className="mx-auto flex items-center align-middle justify-center gap-2 w-9/12 h-11 text-white focus:ring-4 focus:outline-none font-medium rounded-sm text-lg text-center bg-gray-600 hover:bg-gray-800"
          type="submit"
        >
          <p>Log In</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
              clipRule="evenodd"
            />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
