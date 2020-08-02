import React, { useContext, useEffect } from "react";
import { storeContext } from "./store";
import { useObserver } from "mobx-react";

interface temp {
  starData: Array<String | number>;
}

interface storeData {
  add: (String) => any;
  remove: () => any;
  slength: number;
  num: Array<string>;
}

const Cons: React.FC<temp> = ({ starData }: temp) => {
  const mobxConsumer = useContext<storeData>(storeContext);
 
  interface T{
   num:number
  }
const test= (test:any):String=>{ return "hi"}


  useEffect(() => {
    starData.map((data) => mobxConsumer.add(data));
  }, []);

 const x:String ="hi there"
 const name= x as String ;

  return useObserver(() => (
    <>
      <style jsx>
        {`
          li {
            display: flex;
            color: blue;
            background-color: lightGrey;
            margin: 5px;
          }
          h1 {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 25px;
            align-text: center;
          }
          h5 {
            color: red;
            font-size: 12px;
          }
        `}
      </style>

      <h1> The Mobx global store contains {mobxConsumer.slength} items </h1>

      <h1>
        {mobxConsumer.num.map((data) => (
          <li>
            {data}
            <h5
              onClick={() => {
                mobxConsumer.remove();
                // alert(data)
              }}
            >
              delete
            </h5>
          </li>
        ))}
      </h1>
    </>
  ));
};

export default Cons;
