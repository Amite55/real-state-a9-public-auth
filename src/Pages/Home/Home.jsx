import { useEffect, useState } from "react";
import Banner from "./Banner";
import Hotels from "./Hotels";



const Home = () => {
    const [hostelRoom, setHostelRoom] = useState([]);

    const [dataLength, setDataLength] = useState([4])

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
                    hostelRoom.slice(0, dataLength).map(hostelsAll => <Hotels key={hostelsAll.id} hostelsAll={hostelsAll}></Hotels>)
                }
            </div>
                <div className={dataLength === hostelRoom.length ? 'hidden' : 'text-center my-7'}>
                    <button
                    onClick={() => setDataLength(hostelRoom.length)}
                    className="btn py-3 px-16 bg-teal-700"
                    >See All</button>
                </div>
        </div>
    );
};

export default Home;