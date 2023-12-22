"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@mui/material";

const Register = () => {
  const [error, setError] = useState(null);
  
  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/");
    } catch (err:any) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className="mx-auto py-8 max-w-md">
    <h1 className="text-3xl font-semibold mb-4">Create an Account</h1>
    <h2 className="text-gray-600 mb-4">Please sign up to see the dashboard.</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Username"
        required
        className="w-full px-3 py-2 border rounded-lg shadow-sm"
      />
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
        Register
      </Button>
      {error && <div className="text-red-600">Something went wrong!</div>}
    </form>
    <span className="text-gray-400 my-4">- OR -</span>
    <Button href="/login">
     Login with an existing account
    </Button>
   
  </div>
  );
};

export default Register;