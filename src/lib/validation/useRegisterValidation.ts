import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface IRegisterForm {
  email: string;
  fullname: string;
  password: string;
}

const useRegisterValidation = () => {
  const initialValue: IRegisterForm = {
    email: "",
    fullname: "",
    password: "",
  };

  const schema = yup.object().shape({
    email: yup.string().email().required("Tolong masukkan email"),
    fullname: yup.string().required("Kolom fullname tidak boleh kosong"),
    password: yup
      .string()
      .required("tolong isi emailnya cok")
      .min(8, "Password must be at least 8 characters"),
  });

  return useForm<IRegisterForm>({
    defaultValues: initialValue,
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });
};

export default useRegisterValidation;
