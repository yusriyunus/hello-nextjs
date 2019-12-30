import Header from "./Header";

let layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

export default function Layout(props) {
  // return function() {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
      {/* <Page /> */}
    </div>
  );
  // };
}
