"use client";
import GoogleOneTap from "@/components/GoogleOneTap";

// TODO:
// connect t supabase for storing notes
// make Oauth to authorize people who leave notes + setup NextAuth
// make home screen ui showing all notes
// add ui for authentication and creating a note
// promote MVP and leave links to my github

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      {/* <button onClick={handleClick}>Auth</button> */}
      <GoogleOneTap />
      <p>Say hello</p>
    </div>
  );
}
