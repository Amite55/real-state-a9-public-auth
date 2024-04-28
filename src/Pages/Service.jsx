
import { NavLink } from 'react-router-dom';

const Service = () => {
    return (
        <div>
            <NavLink></NavLink>
            <div>
                <div className='w-full h-20 bg-teal-700'></div>
                <h1 className='text-4xl font-mono divider my-6 text-center'>Services we provide</h1>
                <div className='text-center'>
                <label className='text-2xl text-left'>To students:</label>
                <ul className='mx-10'>
                    <li>We provide a fully furnished accommodation that is clean, friendly and safe.</li>
                    <li>To ensure our dedicated service to you, we focus our management to only in Melbourne, Victoria area</li>
                    <li>All our properties are chosen to ensure that it is well located to the major Universities and Colleges like Melbourne Uni, RMIT, Monash, Swinburne, Deakin, William Angliss, Victoria University, Cambridge, and all other colleges in and around the City, Hawthorn, Caulfield, and Burwood.</li>
                    <li>For those who prefer a homely environment with family ambience, we can also extend our offer to Hunter House in Glen Waverley which is a stone throw to Syndal train station which is convenient to the city and other education providers.</li>
                    <li>All our accommodation are specially identified to ensure the convenience of students. It is always within walking distance to your university/college, shops, transport, shopping and eating areas.</li>
                    <li>15 years experience in the service of local and international students accommodation</li>
                    <li>In association with various International Student Counseling Provider that extends at least 20 branches in various Asian countries, we may be near your home to provide pre departure and other advises</li>
                    <li>Because of our experience in management of student accommodation and experience in student counseling and advisory for student academic needs, we are able to identify the Right accommodation for International students who may be new to the country</li>
                    <li>We are able to provide the right advise to students in their needs and requirements either for accommodation and also provide them the right channel to seek appropriate advise for their academic needs</li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Service;