import { FaLocationDot } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FaForward } from "react-icons/fa";


const Hotels = ({hostelsAll}) => {
   const {id, images, estate_title, location, price, description} = hostelsAll;

    console.log(hostelsAll.images)
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={images} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>
                <div className="flex justify-around">
                <p className="flex items-center"><FaLocationDot /> {location}</p>
                <p>Price: {price}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/hostelDetails/${id}`}>
                    <button className="btn btn-primary">View Property <FaForward /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hotels;


Hotels.propTypes ={
    hostelsAll: PropTypes.object,
}