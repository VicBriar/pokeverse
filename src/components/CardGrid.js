import React, {useState,useEffect} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { PokemonCard } from './PokemonCard';
import { Search } from './Search';


export function CardGrid ({data, noSearch}) {

    // const [cardGridState, setCardGridState] = useState({data:data, query:""}); 
    const [filtered, setFiltered] = useState([]);
    const [query,setQuery] = useState("");
    console.log("data is: ",data, "filtered is: ",filtered);

    useEffect(filterPokemon,[data,query])

    function filterPokemon(){
        console.log("filtered is: ",filtered,"query is: ",query)
        if(query){
            let result = [];
            data.map((pokemon) => {
            if(pokemon.name.includes(query)){
                result.push(pokemon);
                // setCardGridState({...cardGridState, data: data});
            }
            setFiltered(result);

          });
        }
        else{
            setFiltered(data);
        }
        console.log("query is empty, data is", filtered)
      }
      function handleTyping(value){
        // setCardGridState({...cardGridState, query: value});
        setQuery(value);
      }
return (
<>
    <Container>
        {noSearch ? "" : <Search query={query} handleTyping={handleTyping} />}
        <Row xs={2} md={6} lg={10}>
        {
            filtered.map((pokemon, indx) => {
            return (
                <Col key={indx}>
                <PokemonCard key={indx} pokemon={pokemon} />
                </Col>
            );
            })
        }
        </Row>
    </Container>
</>
)
};