import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    function addFavorite(favorite) {
        console.log("add fav was called with",favorite);
        setFavorites([...favorites, favorite])
    }

    function removeFavorite(name) {
        setFavorites.filter((favorite) => favorite.name != favorite)
    }

    return (
        <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite}}>
            { children }
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider