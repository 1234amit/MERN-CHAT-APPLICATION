import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from './../../utils/extractTime';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";

    const shakeClass = message.shouldShake ? "shake" : "";

    return (
        // <div className={`flex flex-col chat ${chatClassName}`}>
        //     <div className="flex items-center mb-2">
        //         <div>
        //             <img src={profilePic} alt="User A" className="w-8 h-8 rounded-full mr-2" />
        //         </div>
        //         <div className="bg-blue-500 text-white p-2 rounded-lg w-[250px]">
        //             <p>{message.message}</p>
        //         </div>
        //         <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
        //     </div>
        // </div>
        <div className={`flex flex-col chat ${chatClassName}`}>
            <div className="flex items-center mb-2">
                {!fromMe && (
                    <div>
                        <img src={selectedConversation?.profilePic} alt="User A" className="w-8 h-8 rounded-full mr-2" />
                    </div>
                )}
                <div className={`p-2 rounded-lg max-w-[250px] ${bubbleBgColor}`}>
                    <p>{message.message}</p>
                </div>
                <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
                {fromMe && (
                    <div>
                        <img src={authUser.profilePic} alt="User A" className="w-8 h-8 rounded-full ml-2" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Message