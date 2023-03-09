"use client";
import React from "react";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  return (
    <div style={{ top: `50%`, left: `50%`, position: "fixed" }}>
      <Link href="/profile">PROFILE</Link>
    </div>
  );
};

export default page;
