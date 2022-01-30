import Link from 'next/link'
import Leftfilter from '../components/Leftfilter'
import Propertybox from '../components/Propertybox';

function Properties() {
    let list = [
        {id:1, name:'khudiramnagar'},
        {id:2, name:'khudiramnagar'},
        {id:3, name:'khudiramnagar'},
        {id:4, name:'khudiramnagar'},
    ]
  return <>
    <div className="tenants-body">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Leftfilter/>
                    </div>
                    <div className="col-md-9">
                        <div className="property-list">
                        {
                            list.map((item)=>
                                <>                                    
                                <Link href={"/propertyno"+item.id} className="propertyLink"><Propertybox id={item.id}/></Link>
                                {/* <Link href={"/propertyno"+item.id}><h1>property no {item.id}</h1></Link> */}
                                </>
                                )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>;
}

export default Properties;
