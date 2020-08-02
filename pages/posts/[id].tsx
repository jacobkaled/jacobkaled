import Router, { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

const Test: React.FC = ({ resultProps }: any) => {
  const router = useRouter();
  //const results = fetch("https://swapi.dev/api/people/").then(data=>data.json()).then(data=> data.results.map(car =>alert(car.name)))

  /*useEffect(()=>{ 
  Router.replace("/cons")

},[]) */
  return (
    <>
      <style jsx>{`
        h2 {
          color: blue;
        }
        h5{ 
          margin:0px;
          padding:0px;
          background-color:lightblue;

        }
      `}</style>
      {router.isFallback ? (
        <h1>loading ... </h1>
      ) : (
        <h1>
        <h5> name   : {resultProps[0].name}</h5>
        <h5> height : {resultProps[0].height}</h5>
        <h5> mass   : {resultProps[0].mass}</h5>
        <h5> hair_color : {resultProps[0].hair_color}</h5>
        <h5> skin_color : {resultProps[0].skin_color}</h5>
        <h5> eye_color : {resultProps[0].eye_color}</h5>
        <h5> birth_year : {resultProps[0].birth_year}</h5>
        <h5> gender : {resultProps[0].gender}</h5>

          <Link href="../index">
            <h2>home</h2>
          </Link>
        </h1>
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  const sresults = await fetch("https://swapi.dev/api/people/");
  const data = await sresults.json();
  const mresultProps = data.results.map(star => ({ params: { id: star.name } }));
  return { paths: mresultProps, fallback: true };
};

export async function getStaticProps({ params }) {
 // console.log(params.id);
  //const test = params.id;
  const sresults = await fetch(`https://swapi.dev/api/people/`);
  const data = await sresults.json();
  const resultProps = data.results.filter(star =>star.name == params.id);
  //const data = fdata.description
  //console.log(data.name);
  // const resultProps = data.filter(car =>{if(car.name === params.id){ return car.description}});
  //const resultProps = params.id ==="BMW"? "this is BMW" : " this is Audi" ;
  //const resultProps =data.results[0].name
  return { props: { resultProps } };
}


export default Test;
