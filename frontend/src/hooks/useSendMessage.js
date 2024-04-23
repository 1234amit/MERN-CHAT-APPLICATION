import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	// const sendMessage = async (message) => {
	// 	setLoading(true);
	// 	try {

	// 		// file code
	// 		const formData = new FormData();
    //         formData.append("message", message);
    //         if (file) {
    //             formData.append("file", file);
    //         }
	// 		// end file code

	// 		const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
	// 			method: "POST",
    //             body: formData,
	// 			// headers: {
	// 			// 	"Content-Type": "application/json",
					
	// 			// },
	// 			// body: JSON.stringify({ message, formData }),
	// 		});
	// 		const data = await res.json();
	// 		if (data.error) throw new Error(data.error);

	// 		setMessages([...messages, data]);
	// 	} catch (error) {
	// 		toast.error(error.message);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };


	const sendMessage = async (message, file) => {
        setLoading(true);
        try {
            let bodyData;
            if (file) {
                // If a file is present, create a FormData object
                const formData = new FormData();
                formData.append("message", message); // Append the message to FormData
                formData.append("file", file); // Append the file to FormData
                bodyData = formData;
            } else {
                // If no file is present, send the message as JSON
                bodyData = JSON.stringify({ message });
            }

            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": file ? "multipart/form-data" : "application/json", // Set content type based on presence of file
                },
                body: bodyData,
            });

            const data = await res.json();
            if (data.error) throw new Error(data.error);

            setMessages([...messages, data]);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

	return { sendMessage, loading };
};
export default useSendMessage;