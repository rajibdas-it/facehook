/* eslint-disable no-extra-boolean-cast */
import React from "react";
import { useForm } from "react-hook-form";
import Field from "../common/Field";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const formSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(formSubmit)}
    >
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          name="email"
          id="email"
          className={`auth-input ${
            !!errors.email ? "border-red-500" : "border-gray-200"
          }`}
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          name="password"
          id="password"
          className={`auth-input ${
            !!errors.password ? "border-red-500" : "border-gray-200"
          }`}
        />
      </Field>
      <Field>
        <button className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90">
          Login
        </button>
      </Field>
    </form>
  );
};

export default LoginForm;
