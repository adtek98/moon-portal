import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    userName: yup.string().required("Please enter Username"),
    passWord: yup.string().required("Please enter Password"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <>
      <div className="bg-gray-700 border border-gray-500 lg:w-[32rem] mt-48 mx-auto rounded-lg p-10">
        <div className="border-b mb-5">
          <h1 className="text-4xl font-bold">MOON portal</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="h-20 mb-2">
            <label className="text-sm">Username</label>
            <input
              className="text-gray-900 sm:text-sm rounded-lg w-full h-11 px-2"
              {...register("userName")}
            />
            <p className="text-red-800 text-sm">{errors.userName?.message}</p>
          </div>
          <div className="h-24">
            <label className="text-sm">Password</label>
            <input
              type="password"
              className="text-gray-900 sm:text-sm rounded-lg w-full h-11 px-2"
              {...register("passWord")}
            />
            <p className="text-red-800 text-sm">{errors.passWord?.message}</p>
          </div>
          <input
            className="w-full h-11 text-white focus:ring-4 focus:outline-none font-medium rounded-md text-lg text-center bg-gray-600 hover:bg-gray-800"
            type="submit"
          />
        </form>
      </div>
    </>
  );
}
