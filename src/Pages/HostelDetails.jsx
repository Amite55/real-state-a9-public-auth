
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaBackward } from "react-icons/fa6";
const HostelDetails = () => {
    const hostels = useLoaderData();
    const { id } = useParams();
    // console.log(hostels, id)
    const details = hostels.find(detail => detail.id == id);
    const { estate_title, images, segment_name, description, price, status, area, location, facilities} = details;


    return (
        <div className="max-w-2xl mx-auto my-4">
            <div className='p-4 my-4 shadow-sm shadow-gray-400'>
                <figure><img className='rounded-md my-3' src={images} alt="Movie" /></figure>
            </div>

            <div className="">
                <h2 className="text-xl font-bold">{estate_title}</h2>
                <small>{description}</small>
                
                <div className='divider'></div>
               <div className='flex justify-around'>
               <p className='hover:underline'>Status: {status}</p>
                <p className='hover:underline'>Area: {area}</p>
                <p className='hover:underline'>Segment Name: {segment_name}</p>
               </div>
               <div className='divider'></div>

               <div className='flex justify-around p-3'>
                <p>Extra Facilities:</p>
                {
                    facilities.map(fec => <p key={fec} className=' border rounded-full  px-3'> {fec}</p>)
                }
               </div>
               <div className='divider'></div>
               <div className='flex justify-around'>
                    <p>price: {price}</p>
                    <p>Area: {location}</p>
               </div>


                <div className="card-actions justify-center my-7">
                    <Link to="/">
                        <button className="btn btn-primary btn-md"><FaBackward /> Go Back</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HostelDetails;