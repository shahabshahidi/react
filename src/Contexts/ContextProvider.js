import React, {createContext, useContext, useEffect, useState} from 'react';

const StateContext = createContext();

const initialState = {
    isLogged: true
};

export const ContextProvider = ({id = null, children}) => {


    const [windowDimension, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight
    });
    const [smallSize, setSmallSize] = useState(false);

    const [accountState, setAccountState] = useState(initialState);
    const [user, setUser] = useState({});
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/users?id=${id}`)
                .then(response => response.json())
                .then(user => {
                    setUser(user[0]);
                    setWishlist(user[0].wishlist)
                    //console.log(user[0].wishlist)
                });
        }

    }, []);


    // set screen width start
    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight
        });
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize);

        if (windowDimension.winWidth >= 992) {
            setSmallSize(false);
        } else {
            setSmallSize(true);
        }

        return () => window.removeEventListener('resize', detectSize);
    }, [windowDimension]);

    // set screen width end


    return (
        <StateContext.Provider
            value={{
                accountState,
                user,
                wishlist,
                smallSize
            }}>
            {children}
        </StateContext.Provider>
    )

};

export const useStateContext = () => useContext(StateContext);