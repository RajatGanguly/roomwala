import { useEffect , useState } from "react";
import Link from 'next/link'
import Leftfilter from '../components/Leftfilter'
import Propertybox from '../components/Propertybox';

const Properties = () => {

const [data, setData] = useState([]);
const [filterOn, setFilterOn] = useState(false);
const [filterval, setFilterval] = useState(null);
    
    function sendFilter(filterObj){
        setFilterOn(true)
        setFilterval(filterObj)
    }

    useEffect(() => {
        console.log('useeffect called...')
       const fetchData = async () => {
         const res = await fetch(
        `http://localhost/projects/roomwala/test_properties_api.php`);
         var data_res = await res.json();
         setData(data_res);
        };
        var data_filtered = data
        //   FILTER OPERATION
        
        if(filterOn==true){
            fetchData();
            console.log('val: ',filterval)
            
            if(filterval.sex==1){
                
                data_filtered = data.filter( filterval => filterval.sex == "1")
                setData(data_filtered)
                console.log('filtered: ', data)
            }
            if(filterval.sex==-1){
                
                console.log(data)
                data_filtered = data.filter( filterval => filterval.sex == "-1")
                setData(data_filtered)
                console.log('filtered', data)
            }
        
        }


    }, [filterval])


    
        
    

  return( <>
    <div className="tenants-body">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Leftfilter getObj={sendFilter}/>
                    </div>
                    <div className="col-md-9">
                        <div className="property-list">                            
                        {
                            data.map((res)=>                            
                                <>                                    
                                    <Link href={"/propertyno"+res.id} target="_blank" className="propertyLink"><Propertybox id={res.id} locality={res.locality} price={res.price} person={res.persons} bhk={res.bhk} sex={res.sex} verified={res.verified}/></Link>
                                </>
                                )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>);
}

export default Properties;
