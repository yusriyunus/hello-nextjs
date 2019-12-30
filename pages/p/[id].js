import { useRouter } from "next/router";
import Layout from "../../comps/Layout";

function Post() {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.id}</h1>
      <p>This is my blog post content.</p>
    </>
  );
}

export default Layout(Post);
