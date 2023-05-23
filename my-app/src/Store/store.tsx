import React, { createContext } from 'react';

// const Store = (props:any) => { React.createContext() };    React.ProviderProps<any>.value: any
const Store = React.createContext<any>(undefined);

export default Store;