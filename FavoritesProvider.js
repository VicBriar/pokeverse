import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    function addFavorite(favorite) {
        setFavorties([...favorites, favorite])
    }

    function removeFavorite(name) {
        setFavorites.filter((favorite) => name != favorite)
    }

    return (
        <FavoritesContext.Provider value={{favorites, addFavorite, removeFavorite}}>
            { children }
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider