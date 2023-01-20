import Link from "next/link";
import React from "react";

export function Nav({ }) {
  return <nav> <Link href="/">Home</Link>
    <Link href="/todo">Todos</Link>
  </nav>

}
