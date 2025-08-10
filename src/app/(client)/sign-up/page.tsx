"use client";

import Button from "@/components/common/button/Button";
import InputBar from "@/components/common/input/InputBar";
import { createUser, isLoginIdDuplicate } from "@/lib/client/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

type SignUpFormValues = {
  loginId: string;
  inputPassword: string;
  nickname: string;
  passwordCheck: string;
};

const SignUp = () => {
  const {
    control,
    watch,
    handleSubmit,
    setError,
    getValues,
    clearErrors,
    formState: { isDirty, isValid, errors },
  } = useForm<SignUpFormValues>({
    defaultValues: {
      loginId: "",
      nickname: "",
      inputPassword: "",
      passwordCheck: "",
    },
  });

  const router = useRouter();

  const loginId = watch("loginId");
  const nickname = watch("nickname");

  const handleSignUp = async (data: SignUpFormValues) => {
    if (!isDuplicateChecked) {
      setError("loginId", {
        type: "manual",
        message: "아이디 중복 체크를 해주세요.",
      });
      return;
    }
    if (getValues("inputPassword") !== getValues("passwordCheck")) {
      setError("passwordCheck", {
        type: "manual",
        message: "비밀번호가 일치하지 않습니다.",
      });
      return;
    }

    try {
      await createUser({
        loginId: data.loginId,
        inputPassword: data.inputPassword,
        nickname: data.nickname,
      });
      alert("회원가입 성공");
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false);

  return (
    <div className="flex flex-col flex-1 justify-center items-center h-screen gap-[32px] p-[16px]">
      <p className="text-[24px] font-bold">회원가입</p>
      <form
        onSubmit={handleSubmit(handleSignUp)}
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
                    onChange={(value: string) => {
                      field.onChange(value);
                      setIsDuplicateChecked(false);
                    }}
                    placeholder="아이디를 입력해주세요."
                  />
                  <Button
                    activated={loginId.length <= 20 && loginId.length > 0}
                    text="중복 체크"
                    onClick={async () => {
                      const isDuplicated = await isLoginIdDuplicate({
                        loginId: field.value,
                      });
                      clearErrors(["loginId"]);
                      if (isDuplicated) {
                        setError("loginId", {
                          type: "manual",
                          message: "이미 존재하는 아이디입니다.",
                        });
                      }
                      setIsDuplicateChecked(!isDuplicated);
                    }}
                  />
                </div>
              )}
            />
            <div className="h-[12px]">
              <p className="text-green">
                {isDuplicateChecked &&
                  !errors.loginId &&
                  "사용 가능한 아이디입니다."}
              </p>
              <p className="text-red">
                {errors.loginId ? errors.loginId.message : null}
              </p>
              <p className="text-red">
                {loginId.length > 20 ? "아이디는 20자 이내입니다." : null}
              </p>
            </div>
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
                  onChange={(value: string) => {
                    field.onChange(value);
                    clearErrors(["passwordCheck"]);
                  }}
                  placeholder="비밀번호를 입력해주세요."
                />
              )}
            />
            <div className="h-[12px]" />
          </div>
          <div className="flex flex-col gap-[4px]">
            <label>비밀번호 확인</label>
            <Controller
              defaultValue=""
              name="passwordCheck"
              rules={{ required: true }}
              control={control}
              render={({ field }) => (
                <InputBar
                  type="password"
                  inputText={field.value}
                  onChange={(value: string) => {
                    field.onChange(value);
                    clearErrors(["passwordCheck"]);
                  }}
                  placeholder="비밀번호를 입력해주세요."
                />
              )}
            />
            <div className="h-[12px]">
              {errors.passwordCheck ? (
                <p className="text-red">{errors.passwordCheck.message}</p>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <label>닉네임</label>
            <Controller
              defaultValue=""
              name="nickname"
              rules={{ required: true, maxLength: 12 }}
              control={control}
              render={({ field }) => (
                <InputBar
                  inputText={field.value}
                  onChange={field.onChange}
                  placeholder="닉네임를 입력해주세요."
                />
              )}
            />
            <div className="h-[12px]">
              <p className="text-red">
                {nickname.length > 12 ? "닉네임은 12자 이내입니다." : null}
              </p>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          text="회원가입"
          activated={
            isDirty && isValid && loginId.length < 20 && nickname.length < 20
          }
        />
      </form>
    </div>
  );
};
export default SignUp;
