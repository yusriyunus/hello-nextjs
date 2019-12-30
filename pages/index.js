import React, { Component } from "react";
import Layout from "../comps/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static async getInitialProps() {
    let res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    let data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
      shows: data.map(function(entry) {
        return entry.show;
      })
    };
  }

  render() {
    return (
      <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
          {this.props.shows.map(function(show) {
            return (
              <li key={show.id}>
                <Link href="/p/[id]" as={`/p/${show.id}`}>
                  <a>{show.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Layout>
    );
  }
}

export default Index;
