import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

export function PokeDetails(){
    const [pokemon, setPokemon] = useState({data:{},loading:true});
    const params = useParams()
    
    async function fetchPokemon(){
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
            const data = await response.json();
            setPokemon({data:data,loading:false});
        }catch(error){
            console.error(error.message)
        }
    }

    useEffect(()=>{
        fetchPokemon();
        },
        []
    )
    console.log(pokemon.data)
    return(
        pokemon.loading ?
        <p>thinking...</p>
        :
        <Card className="mb-3 w-25">
            <Card.Img
                src={pokemon.data.sprites.front_shiny}
                variant="top"
                className='d-flex justify-content-center'
            />
            <Card.Body>
                <Card.Title className="text-center">{params.name}</Card.Title>
                <Card.Text as='div'>
                    <h5>Abilities</h5>
                    <ul>
                        {pokemon.data.abilities.map((ability,i) => {
                            return(<li key={i}>{ability.ability.name}</li>)
                        })}
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
/*height: {pokemon.height}
weight: {pokemon.weight}
abilities: iterate over pokemon.abilities, and for each ability render the ability.ability.name
types: iterate over pokemon.types and for each type render the type.type.name
stats: iterate over pokemon.stats and for each stat render the stat.stat.name and stat.base_stat*/
        );
}