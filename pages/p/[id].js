import React, { Component } from "react";
import { useRouter } from "next/router";
import Layout from "../../comps/Layout";
import fetch from "isomorphic-unfetch";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static async getInitialProps(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);
    return { show };
  }

  render() {
    return (
      <Layout>
        <h1>{this.props.show.name}</h1>
        <p>{this.props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
        <img src={this.props.show.image.medium} />
      </Layout>
    );
  }
}

export default Post;
