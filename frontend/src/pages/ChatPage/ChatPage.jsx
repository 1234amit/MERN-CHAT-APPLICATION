import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "./../../components/sidebar/sidebar";

const Home = () => {
    return (
        <div className='flex sm:h-[450px] md:h-[550px] mt-16 mx-auto rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mx-auto max-w-6xl'>
            <Sidebar />
            <MessageContainer />
        </div>
    );
};
export default Home;