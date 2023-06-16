import React, {useState,useEffect, useContext} from "react";
import { CardGrid } from "../components/CardGrid";
import { FavoritesContext } from "../../FavoritesProvider";

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

export function Favorites(){
    const {favorites} = useContext(FavoritesContext)
    console.log("favorites are",favorites)
  
    return (
        <CardGrid data={favorites} noSearch={true}/>
    );
}