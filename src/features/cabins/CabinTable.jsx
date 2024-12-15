import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
 
function CabinTable() {
  const {isLoading, data:cabins} = useCabins()
  const [searchParams] = useSearchParams()

  const filterValue = searchParams.get('discount') || 'all'
  let filteredCabins = cabins
 
  if(cabins){
    if(filterValue === 'no-discount') filteredCabins = cabins.filter(cabin => cabin.discount === 0)
    if(filterValue === 'with-discount') filteredCabins = cabins.filter(cabin => cabin.discount > 0)
  }

  const sortBy = searchParams.get('sortBy') || 'startDate-asc'
  const [field,direction] = sortBy.split('-')
  const modifier = direction === 'asc' ? 1 : -1
  let sortedCabins = filteredCabins
  if(filteredCabins?.length > 0){
    console.log(filteredCabins)
    if(typeof filteredCabins[0][field] === 'string'){
      sortedCabins = filteredCabins.slice().sort((a, b) => a[field].localeCompare(b[field])* modifier) 
      console.log(sortedCabins)
    } else if(typeof filteredCabins[0][field] === 'number'){
      sortedCabins = filteredCabins.slice().sort((a, b) => (a[field]-b[field])* modifier) 
    }
  }


  if(isLoading) return <Spinner/>
  return (
    <>
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr' role='table'>
        <Table.Header role='row'>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body data={sortedCabins} render={cabin=> <CabinRow cabin={cabin} key={cabin.id}/>}/>
      </Table>
    </Menus>
    </>
  );
}

export default  CabinTable;
// (cabin=> <CabinRow cabin={cabin} key={cabin.id}/>