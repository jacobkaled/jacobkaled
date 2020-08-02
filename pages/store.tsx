import React, { createContext, Provider } from "react";
import { useLocalStore } from "mobx-react";
import styled from "styled-components";

export const storeContext = createContext(null);

const Store = ({ children }) => {
  //const tempData = "a test to see how data flow through Mobx and Nextjs";
  const mobxStore = useLocalStore(() => ({
    num: [],
    add: (data) => {
      mobxStore.num.push(data);
    },
    remove: () => {
       mobxStore.num.pop();
    },
    get slength() {
      return mobxStore.num.length;
    },
  }));

  return (
    <storeContext.Provider value={mobxStore}>{children}</storeContext.Provider>
  );
};

const Wrapper = styled.div`
  width: ${(props) => props.idx};
  height: 100px;
  background-color: red;
  position: relative;
`;

export default Store;
