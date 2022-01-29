const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            results: [],
            categories: [],
            details: [],
            favorite: []
        },
		actions: {
            obtenerResults: (type) => {
                fetch(`https://www.swapi.tech/api/${type}`)
                .then(response => response.json())
                .then(data => setStore({ results:data }))
            },
            getCategories: () => {
                fetch(`https://www.swapi.tech/api/`)
                .then(response => response.json())
                .then(data => setStore({ categories: data }))
            },
            getDetails: (type, uid) => {
                fetch(`https://www.swapi.tech/api/${type}/${uid}`)
                .then(response => response.json())
                .then(data => setStore({ details: data }))
            },
            addFavorite: (name) => {
                const store = getStore()
                setStore( { favorite: [...store.favorite, name] } )
            },
            removeFavorite: (favorites) => {
                setStore( { favorite: favorites } )
            }
        }
	};
};

export default getState;
