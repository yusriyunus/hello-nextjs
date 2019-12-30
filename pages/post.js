import { useRouter } from "next/router";
import Layout from "../comps/Layout";

function Page() {
  let router = useRouter();

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is Blog Post Content!</p>
    </Layout>
  );
}

export default Page;
