import { XMarkIcon, PaperClipIcon, PaperAirplaneIcon, } from "@heroicons/react/24/solid";
import React, { useState } from 'react';
import Dropzone from "react-dropzone";


const MessageFormUI = ({
    setAttachment,
    message,
    handleChange,
    heandleSubmit
}) => {
    const { preview, setPreview } = useState("");

    return <div className='message-form-container'>
        {preview && (
            <div className='message-form-preview'>
                <img
                    alt='message-form-preview'
                    className='message-form-preview-img'
                    src={preview}
                    onLoad={() => URL.revokeObjectURL(preview)}
                />
                <XMarkIcon
                    className="message-form-icon-x"
                    onClick={() => {
                        setPreview("");
                        setAttachment("");
                    }}
                />
            </div>
        )}
        <div className="message-form">
            <div className="message-form-input-container">
                <input
                    className="message-form-input"
                    type="text"
                    value={message}
                    onChange={handleChange}
                    placeholder="Send a message..."
                />
            </div>
            <div className="message-form-icons">
                <Dropzone
                    acceptFiles='.jpg, .jpeg, .png'
                    multiple={false}
                    noClick={true}
                    onDrop={(acceptFiles) => {
                        setAttachment(acceptFiles[0]);
                        setPreview(URL.createObjectURL(acceptFiles[0]))
                    }}
                >
                    {({ getRootProps, getInputProps, open }) => (
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <PaperClipIcon
                                className="message-form-icon-clip"
                                onClick={open}
                            />
                        </div>
                    )}
                </Dropzone>

                <hr className="vertical-line" />
                <PaperAirplaneIcon
                    className="message-form-icon-airplane"
                    onClick={() => {
                        setPreview('');
                        heandleSubmit();
                    }}
                />
            </div>
        </div>
    </div>;
};

export default MessageFormUI;