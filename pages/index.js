import Layout from "../comps/Layout";
import Link from "next/link";

function PostLink({ id }) {
  return (
    <li>
      <Link href="/p/[id]" as={`/p/${id}`}>
        <a>{id}</a>
      </Link>
    </li>
  );
}

function Index() {
  return (
    <>
      <h3>Hello Next-js!</h3>
      <ul>
        <PostLink id="Set clear career path" />
        <PostLink id="Never skip practice" />
        <PostLink id="Stay motivated" />
      </ul>
    </>
  );
}

export default Layout(Index);
