import Input from "@/components/input/Input";
import { useForm } from "react-hook-form";
import { SignupForm } from "../types";
import Button from "@/components/button/Button";
import { useLogin } from "../api/login";

const SignupForm = () => {
  const { register, handleSubmit, formState } = useForm<SignupForm>();
  const { submit, isLoading } = useLogin();

  const onSubmit = (data: SignupForm) => {
    submit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" flex flex-col gap-3 items-center">
        <Input
          placeholder="メールアドレス"
          type="email"
          {...register("email", { required: "この項目は必須です" })}
          error={formState.errors["email"]}
        />
        <Input
          placeholder="パスワード"
          type="password"
          {...register("password", { required: "この項目は必須です" })}
          error={formState.errors["password"]}
        />
        <Input
          placeholder="ユーザーネーム"
          type="text"
          {...register("name", { required: "この項目は必須です" })}
          error={formState.errors["name"]}
        />
        <Button size="lg" isLoading={isLoading}>
          サインアップ
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
