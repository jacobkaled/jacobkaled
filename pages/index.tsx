import Nav from "../components/Nav";
import Link from "next/link";
import Store,{storeContext} from "./store";
import Cons from "./cons";
import Test from "./[cars]/[type]";
import styled from "styled-components";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useContext } from "react";
import { useObserver } from "mobx-react-lite";

function IndexPage({ resultProps }) {
  return (
    <Store >
      <Cons starData={resultProps}/>
      <main> 
        <h1>StarWArs API Test on the left side !!!</h1>
      </main>
  <h1>{resultProps.map(star=><li><Link href="/posts/[id]" as={`/posts/${star}`}><a>{star}</a></Link></li>)}</h1>

      <style jsx>{`
        a {
          color: lightSalmon;
        }
        main {
          display: flex;
          background-color: lightGreen;
          align-items: center;
          justify-content: center;
        }
        button {
          margin: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        li { 
        } 
      `}</style>
      
      <main> 
        <h1>Test application for combining Mobx with Next.js</h1>
      </main>
      <button onClick={() => alert("fetching data")}> fetch data </button>
    </Store>
  )
}


const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
`;

export const getStaticProps: GetStaticProps = async () => {
  const results = await fetch("https://swapi.dev/api/people/");
  const data = await results.json();
  const resultProps = data.results.map(star => star.name)
  return { props: {resultProps} };
};


export default IndexPage;
