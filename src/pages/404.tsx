import Link from "next/link";

export default function Custom404() {
    return (
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
        <p>Return to <Link href="/"> Home </Link></p>
        </main>
    )
  }