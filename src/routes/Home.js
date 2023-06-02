import React, {useState,useEffect} from "react";
import { CardGrid } from "../components/CardGrid";

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

export function Home(){
    const [data, setData] = useState([]);

    async function fetchPokemon() {
      try {
        const request = await fetch(pokeApi);
        const result = await request.json();
        setData(result.results);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    useEffect(() => {
      fetchPokemon()
    }, []);
  
    return (
        <CardGrid data={data} setData={setData} />
    );
}