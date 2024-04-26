import { useEffect, useState } from "react";
import Banner from "./Banner";
import Hotels from "./Hotels";



const Home = () => {
    const [hostelRoom, setHostelRoom] = useState([]);

    useEffect(() => {
        fetch('hostelData.json')
            .then(res => res.json())
            .then(data => setHostelRoom(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-2 gap-6">
                {
                    hostelRoom.map(hostelsAll => <Hotels key={hostelsAll.id} hostelsAll={hostelsAll}></Hotels>)
                }
            </div>

        </div>
    );
};

export default Home;