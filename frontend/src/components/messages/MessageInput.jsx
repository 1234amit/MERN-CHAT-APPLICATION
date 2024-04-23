import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useRef, useState } from "react";
import InputEmoji from "react-input-emoji";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();
    const [text, setText] = useState("");
    const [newMessage, setNewMessage] = useState("");
    const fileRef = useRef();

    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }

    function handleOnEnter(text) {
        console.log("enter", text);
    }

    const [img, setImg] = useState({
        file: null,
        url: "",
    });

    function selectFile() {
        fileRef.current.click();
    }

    // function fileSlected(e) {
    //     console.log(e.target.files);
    //     const file = e.target.files[0];
    //     if (!file) return
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    // }
    function fileSelected(e) {
        console.log(e.target.files);
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            setImg({
                file: file,
                url: event.target.result, // Data URL
            });
        };
        reader.readAsDataURL(file);
    }


    const [file, setFile] = useState(null);


    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // Combine text message and emoji message
    //     const combinedMessage = message + newMessage;
    //     // Ensure message field is present
    //     await sendMessage(combinedMessage, file);
    //     setMessage("");
    //     setNewMessage(""); // Clear emoji message after sending
    //     setFile(null);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const combinedMessage = message + newMessage;
        await sendMessage(combinedMessage, img.file);
        setMessage("");
        setNewMessage("");
        setFile(null);
        setImg({ file: null, url: "" }); // Clear selected file
    };




    return (
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <input
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5  bg-white text-white'
                    placeholder='Send a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                {/* image shareing */}
                <div className='absolute right-[70px] bottom-[6px] flex items-center'>
                    <div className="icons">
                        <label htmlFor="file">
                            <img src="./img.png" alt="" style={{ height: '30px', width: '30px', cursor: 'pointer', color: 'black', backgroundColor: 'black' }} />
                        </label>
                        <input
                            type="file"
                            id="file"
                            ref={fileRef}
                            style={{ display: "none" }}
                            // onChange={handleFileChange}
                            onClick={selectFile}
                            onChange={fileSelected}
                        />
                    </div>
                </div>

                {/* emoji section start here */}
                {/* <div className="absolute right-[100px] bottom-[-5px] flex items-center border-gray-600 text-white" style={{ width: 'calc(100% - 80px)', color: 'white' }}>
                    <InputEmoji
                        value={newMessage}
                        onChange={handleChange}
                        cleanOnEnter
                        onEnter={handleOnEnter}
                        placeholder="Type a message"
                        className='border text-sm w-full rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white !important'
                        style={{ backgroundColor: 'gray', color: 'white' }}
                    />
                </div> */}

                <div className="absolute right-[100px] bottom-[-5px] flex items-center" style={{ width: 'calc(100% - 86px)' }}>
                    <InputEmoji
                        value={newMessage}
                        onChange={handleChange}
                        cleanOnEnter
                        onEnter={handleOnEnter}
                        placeholder="Type a message"
                        className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white !important'
                        style={{ color: 'white', width: '70%' }}
                    />
                </div>
                {/* emoji section end here */}


                {/* end image shareing */}
                <button type='submit' className='absolute right-[30px] bottom-[14px] flex items-center'>
                    {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
                </button>
            </div>
        </form >
    );
};
export default MessageInput;