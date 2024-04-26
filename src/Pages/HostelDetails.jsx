import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const HostelDetails = () => {
    const hostels = useLoaderData();
    const {id} = useParams();
    // console.log(hostels, id)
    const details = hostels.find(detail => detail.id == id);
    console.log(details)
    return (
        <div>
            <h1>hostel details</h1>
            <img src={details.images} alt="not found" />
        </div>
    );
};

export default HostelDetails;