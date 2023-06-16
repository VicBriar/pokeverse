import React, { useContext, useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import loadingChimecho from '../../public/loadingChimecho.gif';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../FavoritesProvider';

function PokemonCard({ pokemon }) {
  const {addFavorite, favorites} = useContext(FavoritesContext);
  const defaultPokeData = {
    data: { sprites: { front_default: '' } },
    loading: true,
    favorite: false,
  };
  const [pokeData, setPokeData] = useState(defaultPokeData);
  const { name, url } = pokemon;

  async function getPokemon() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      let favorite = isPokeFav({name,url});
      setPokeData({ data: data, loading: false, favorite });
    } catch (error) {
      console.error(error.message);
    }
  }
  function addPokeToFav () {
    if(isPokeFav({name,url})){
      return;
    }
    return addFavorite({name, url})
  }
  function isPokeFav () {
    let result = false;
    favorites.map((pokemon) => {
      if (pokemon.name === name && pokemon.url === url) {
        result = true;
      }
    });
    return result;
  }

  useEffect(() => {
    getPokemon();
  }, [url,favorites]);

  if (pokeData.loading) {
    return (
      <Card className='mt-4'>
        <Card.Img
          className='d-flex justify-content-center'
          variant='top'
          src={loadingChimecho}
        />
        <Card.Body>
          <Card.Title className='text-center'>loading pokemon..</Card.Title>
          <Card.Text as='div'>
            <h6>Abilities</h6>
            <ul>
              <li>Refresh</li>
              <li>Bide</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className='mt-4'>
      <Card.Img
        className='d-flex justify-content-center'
        variant='top'
        src={pokeData.data.sprites.front_default}
      ></Card.Img>
      <Card.Body>
        <Card.Title className='text-center'>
          <Link to={`/${name}`}>
            {name}
          </Link>
        </Card.Title>
        <Card.Text as='div'>
        <h6>Abilities</h6>
          <ul>
            {pokeData.data.abilities.map((ability, index) => {
              return <li key={index}>
                  {ability.ability.name}
                </li>;
            })}
          </ul>
        </Card.Text>
        <Button
          variant={pokeData.favorite ? "secondary" : "primary"  }
          onClick={() => {addPokeToFav()}} >
          Add to Favorites
        </Button>
      </Card.Body>
    </Card>
  );
}

export { PokemonCard };
