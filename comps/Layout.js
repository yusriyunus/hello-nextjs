import Header from "./Header";

let layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

export default function Layout(Page) {
  return function() {
    return (
      <div style={layoutStyle}>
        <Header />
        <Page />
      </div>
    );
  };
}
