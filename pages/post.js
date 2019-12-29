import { useRouter } from "next/router";
import Layout from "../comps/Layout";

function Page() {
  let router = useRouter();

  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is Blog Post Content!</p>
    </>
  );
}

export default Layout(Page);
