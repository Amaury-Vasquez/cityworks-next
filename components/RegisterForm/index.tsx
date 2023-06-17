"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import styles from "@/styles/components/login.module.scss";
import { Button, TextInput } from "@/components";
import { UserRegister } from "@/interfaces";
import { registerUser } from "@/queries";

const { loginForm, inputGroup, selectInput } = styles;

export const RegisterForm: FC = () => {
  const { handleSubmit, register } = useForm<UserRegister>();

  const onSubmit = async (data: UserRegister) => {
    const response = await registerUser(data);
    console.log("🖨️ ~ onSubmit ~ response:", response);
  };

  return (
    <form className={loginForm} onSubmit={handleSubmit(onSubmit)}>
      <h3>Registrar Usuario</h3>
      <div className={inputGroup}>
        <TextInput
          id="nombre"
          type="text"
          placeholder="Diego"
          label="Nombre"
          {...register("nombre", { required: true })}
        />
        <TextInput
          id="apellido"
          type="text"
          placeholder="Tapia"
          label="Apellido"
          {...register("apellido", { required: true })}
        />
        <TextInput
          id="email"
          type="text"
          placeholder="tapiadiego@gmail.com"
          label="Email"
          {...register("email", { required: true })}
        />
        <TextInput
          id="password"
          type="password"
          placeholder="*******"
          label="Contraseña"
          {...register("password", { required: true })}
        />
        <select
          className={selectInput}
          id="rol"
          {...register("rol", { required: true })}
        >
          <option value="superintendente">Superintendente</option>
          <option value="supervisor">Supervisor</option>
          <option value="residente">Residente</option>
        </select>
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
};
