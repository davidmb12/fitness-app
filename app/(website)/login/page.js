"use client";
import LoginWithGoogle from "@/components/Buttons/LoginWithGoogle";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { Card, CardHeader } from "@nextui-org/react";

const LoginPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status]);
  return (
    <div className="h-full flex flex-col justify-center items-center pt-4 ">
      <Card className="flex flex-col p-6 text-center justify-center items-center">
        <CardHeader>Select a login option</CardHeader>
        <LoginWithGoogle />
      </Card>
    </div>
  );
};

export default LoginPage;
