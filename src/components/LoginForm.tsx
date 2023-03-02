import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import Users from "../../data/Users";
import { toast } from "react-toastify";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
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
          <RocketLaunchIcon className="w-5 h-5"></RocketLaunchIcon>
        </button>
      </form>
    </div>
  );
}
