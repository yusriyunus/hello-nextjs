import Link from "next/link";

function Index() {
  return (
    <div>
      <h3>Hello Next js!</h3>
      <Link href="/about" title="About Page">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}

export default Index;
