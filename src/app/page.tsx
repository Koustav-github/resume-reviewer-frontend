import Landing from "../../components/Landing";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="h-screen w-screen">
      <Landing />
      <Link href={"/login"}>Login</Link>
      <Link href={"/register"}>Register</Link>
    </div>
    </>
  );
}
