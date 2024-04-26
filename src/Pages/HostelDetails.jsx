
import { Link, useLoaderData, useParams } from 'react-router-dom';

const HostelDetails = () => {
    const hostels = useLoaderData();
    const { id } = useParams();
    // console.log(hostels, id)
    const details = hostels.find(detail => detail.id == id);
    console.log(details)
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={details.images} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{details.segment_name}</h2>
                <p>{details.description}</p>
                <div className="card-actions justify-end">
                   <Link to="/">
                   <button className="btn btn-primary">Go Back</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default HostelDetails;