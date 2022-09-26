import { useContext, createContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children, value }) => {
    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => useContext(SearchContext);
