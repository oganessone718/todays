"use client";

import Button from "@/components/common/button/Button";
import InputBar from "@/components/common/input/InputBar";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

type SignInFormValues = {
  loginId: string;
  inputPassword: string;
};

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<SignInFormValues>({
    defaultValues: {
      loginId: "",
      inputPassword: "",
    },
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const router = useRouter();

  const handleSignIn = async (data: SignInFormValues) => {
    const res = await signIn("credentials", {
      redirect: false,
      loginId: data.loginId,
      password: data.inputPassword,
      callbackUrl,
    });

    if (res?.error) {
      alert(res.error);
      return;
    }

    if (res?.ok) {
      window.location.href = callbackUrl;
    }
  };

  return (
    <div className="flex flex-col flex-1 justify-center items-center h-screen gap-[32px] p-[16px]">
      <p className="text-[24px] font-bold">로그인</p>
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="flex flex-col gap-[32px]"
      >
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            <label>아이디</label>
            <Controller
              name="loginId"
              defaultValue=""
              control={control}
              rules={{ required: true, maxLength: 20 }}
              render={({ field }) => (
                <div className="flex flex-row gap-[4px]">
                  <InputBar
                    inputText={field.value}
                    onChange={field.onChange}
                    placeholder="아이디를 입력해주세요."
                  />
                </div>
              )}
            />
            <div className="h-[12px]" />
          </div>
          <div className="flex flex-col gap-[4px]">
            <label>비밀번호</label>
            <Controller
              defaultValue=""
              name="inputPassword"
              rules={{ required: true }}
              control={control}
              render={({ field }) => (
                <InputBar
                  type="password"
                  inputText={field.value}
                  onChange={field.onChange}
                  placeholder="비밀번호를 입력해주세요."
                />
              )}
            />
            <div className="h-[12px]" />
          </div>
        </div>
        <Button type="submit" text="로그인" activated={isDirty && isValid} />
      </form>{" "}
      <div className="text-[14px] flex flex-row gap-[8px] justify-end items-center;">
        <p className="">아직 계정이 없다면 </p>
        <p
          className="text-primary-500 font-bold text-[16px] cursor-pointer"
          onClick={() => {
            router.push("/sign-up");
          }}
        >
          회원 가입
        </p>
      </div>
    </div>
  );
};
export default SignUp;
