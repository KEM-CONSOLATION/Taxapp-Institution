import { FormProvider, useForm } from "react-hook-form";
import TextInput from "../../Component/TextInput";
import AuthLayout from "../../Layout/AuthLayout";
import { MdOutlineLock } from "react-icons/md";
import Checkbox from "../../Component/Checkbox";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const { watch, handleSubmit, register, setValue } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/dashboard");
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    setValue("rememberMe", e.target.checked);
  };

  useEffect(() => {
    register("rememberMe");
  }, [register]);

  const email = watch("email");
  const password = watch("password");

  const isFormFilled = email && password;

  return (
    <div>
      <AuthLayout>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <div className="text-[#252657] text-center grid gap-[16px]">
                <p className="font-[500] text-[22px]">Sign in</p>
                <p className="font-[400] text-[14px]">
                  Please enter your login details below
                </p>
              </div>
              <div className="mt-[27px] grid gap-[24px]">
                <TextInput name="email" label="Email" type="text" />
                <TextInput name="password" label="Password" type="password" />
                <Checkbox
                  label="Remember me next time"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <button
                  type="submit"
                  className={`text-[18px] w-full py-[14px] px-4 rounded-full flex items-center gap-[16px] justify-center ${
                    isFormFilled
                      ? "bg-[#2EAB8D] hover:bg-[#258d6e] text-[#FFFFFF]"
                      : "bg-[#E1E1E1] cursor-not-allowed text-[#898989]"
                  }`}
                  disabled={!isFormFilled}
                >
                  <MdOutlineLock />
                  <span>Sign In</span>
                </button>
                <p className="text-center font-[400] text-[#7879C5] text-[16px]">
                  Forgot Your Password?
                </p>
              </div>
            </div>
          </form>
        </FormProvider>
      </AuthLayout>
    </div>
  );
};

export default SignIn;
