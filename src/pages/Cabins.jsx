import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [url, setUrl] = useState('')
  useEffect(function(){
    async function FetchData(){
      const data = await getCabins()
      console.log(data)
      console.log(data[0].image)
     setUrl(data[0].image) 
    }
    FetchData()
  })
  console.log(url)
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src={url} alt="" />
    </Row>
  );
}

export default Cabins;
