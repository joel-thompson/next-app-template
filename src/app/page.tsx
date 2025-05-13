import React from "react";
import { Counter } from "@/components/Counter";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Hello World</h1>
      <Counter />
    </div>
  );
}
