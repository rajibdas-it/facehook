import { useForm } from "react-hook-form";
import axios from "axios";
import Field from "../common/Field";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[30px]"
    >
      <Field label="First Name" error={errors.firstName}>
        <input
          {...register("firstName", {
            required: "First Name is required",
            minLength: {
              value: 3,
              message: "Name cannot be aleast 3 characters",
            },
          })}
          type="text"
          name="firstName"
          id="firstName"
          className={`auth-input ${
            !!errors.firstName ? "border-red-500" : "border-gray-500"
          }`}
        />
      </Field>
      <Field label="Last Name" error={errors.lastName}>
        <input
          {...register("lastName", {
            required: "Last Name is required",
            minLength: { value: 3, message: "Atleast 3 character" },
          })}
          type="text"
          name="lastName"
          id="lastName"
          className={`auth-input ${
            !!errors.lastName ? "border-red-500" : "border-gray-500"
          }`}
        />
      </Field>
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
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be atleast 8 charcter",
            },
          })}
          type="password"
          name="password"
          id="password"
          className={`auth-input ${
            !!errors.password ? "border-red-500" : "border-gray-500"
          }`}
        />
      </Field>
      <Field label="Confrim Password" error={errors.confrimPassword}>
        <input
          {...register("confrimPassword", {
            required: "Confrim Password is required",
            minLength: {
              value: 8,
              message: "Password should be atleast 8 charcter",
            },
          })}
          type="password"
          name="confrimPassword"
          id="confrimPassword"
          className={`auth-input ${
            !!errors.confrimPassword ? "border-red-500" : "border-gray-500"
          }`}
        />
      </Field>

      <button
        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
