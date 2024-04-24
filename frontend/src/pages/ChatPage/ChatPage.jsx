import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "./../../components/sidebar/sidebar";

const Home = () => {
    return (
        // <div className='flex sm:h-[450px] md:h-[550px] mt-16 mx-auto rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mx-auto max-w-6xl'>
        //     <Sidebar />
        //     <MessageContainer />
        // </div>
        <div className='flex flex-col sm:flex-row sm:h-[450px] md:h-[550px] mt-16 mx-auto rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mx-auto max-w-6xl'>
            <Sidebar className="sm:w-2/3" /> {/* Sidebar takes 1/3 of the width on small screens */}
            <MessageContainer className="sm:w-2/3" /> {/* MessageContainer takes 2/3 of the width on small screens */}
        </div>
    );
};
export default Home;