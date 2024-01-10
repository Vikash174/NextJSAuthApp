"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className=" text-white text-2xl flex flex-col h-screen items-center justify-center">
      <h1 className="p-2 m-2">Signup</h1>
      <div className="p-2 m-2">
        <input
          className="p-2 rounded-lg"
          id="username"
          type="text"
          value={user.username}
          onChange={(e) =>
            setUser({
              ...user,
              username: e.target.value,
            })
          }
          placeholder="user name"
        />
      </div>
      <div className="p-2 m-2">
        <input
          className="p-2 rounded-lg"
          id="email"
          type="email"
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
          placeholder="user email"
        />
      </div>
      <div className="p-2 m-2">
        <input
          className="p-2 rounded-lg"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
          placeholder="user password"
        />
      </div>
      <div className="p-2 m-2">
        <button className="text-lg border rounded-lg p-2">Sign up here</button>
      </div>

      <Link href={"/login"}>Go to login page </Link>
    </div>
  );
};

export default Signup;
