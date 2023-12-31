"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@mui/material";
import {useRouter} from "next/navigation";
const Login = () => {
  const [error, setError] = useState(null);
  const router=useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const result = await signIn('credentials', { email, password, redirect: false });

    if (result?.error) {
      // Handle error if signIn failed
      console.error('Sign-in error:', result.error);
    } else {
      // Redirect to the home page on successful sign-in
      router.push('/');
    }
  }
  const signInWithGoogle=()=>{
    signIn('google');
  }

  return (
    <div className="mx-auto py-8 max-w-md">
    <h2 className="text-gray-600 mb-4">Please sign in to see the dashboard.</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Email"
        required
        className="w-full px-3 py-2 border rounded-lg shadow-sm"
      />
      <input
        type="password"
        placeholder="Password"
        required
        className="w-full px-3 py-2 border rounded-lg shadow-sm"
      />
      <Button type="submit">
        Log In
      </Button>
      {error && <div className="text-red-600">Something went wrong!</div>}
    </form>
    <Button onClick={signInWithGoogle}>
     Login with an google
    </Button>
   
  </div>
  );
};

export default Login;