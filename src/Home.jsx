import {useEffect, useState} from 'react'
import axios from "axios"


const Home = () => {


  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(()=>{


    const fetchData = async () => {
     try{

      const response = await axios.get(
        `https://randomuser.me/api/?results=5&&page=${pageNumber}`
      );

      console.log(response.data.results);

      setData(data => [...data, ...response.data.results]);

     }catch(error){

      console.log(error)

     }

    }


    fetchData();

  }, [pageNumber])





  return (
    <>
      <button onClick={() => setPageNumber(pageNumber + 1)}>More</button>
      <div>
        {data.map((element, index) => {
          return <div key={index}>{element.name.first}</div>;
        })}
      </div>
    </>
  );
}

export default Home