"use client";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const LoginWithGoogle = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="py-2 px-4 rounded flex items-center gap-2 "
    >
      <FaGoogle className="text-black dark:text-white" />
      <span className="text-black dark:text-white">SignIn with Google</span>
    </button>
  );
};

export default LoginWithGoogle;
