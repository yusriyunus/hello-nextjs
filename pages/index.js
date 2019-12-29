import Layout from "../comps/Layout";
import Link from "next/link";

function PostLink({ title }) {
  return (
    <li>
      <Link href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
}

function Index() {
  return (
    <>
      <h3>Hello Next-js!</h3>
      <ul>
        <PostLink title="Set clear career path" />
        <PostLink title="Never skip practice" />
        <PostLink title="Stay motivated" />
      </ul>
    </>
  );
}

export default Layout(Index);
