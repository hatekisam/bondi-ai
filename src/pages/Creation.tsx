import React, { useState } from 'react'
import audio from '../assets/svg/audio.svg';
import folder from '../assets/svg/folder.svg';
import { useNavigate } from 'react-router-dom';

const Creation: React.FC = () => {
        const tabs = [
                {
                        logo: audio,
                        title: "Audio file",
                        description: "Transform your audio file into text magic",
                        btn: "Upload File"
                },
                {
                        logo: folder,
                        title: "Folder",
                        description: "Transform your audio file into text magic",
                        btn: "Upload File"
                },
        ]
        const [selectedAudioFile, setSelectedAudioFile] = useState<File | null>(null);
        const [selectedFolderFiles, setSelectedFolderFiles] = useState<File[] | null>(null);
        const navigate = useNavigate()
        const handleAudioFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                const file = event.target.files && event.target.files[0];
                setSelectedAudioFile(file);
                navigate("/creation/file/fasdfasdfadfsdfadf")
        };

        const handleFolderFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                const files = event.target.files;
                if (files && files.length > 0) {
                        setSelectedFolderFiles(Array.from(files));
                } else {
                        setSelectedFolderFiles(null);
                }
                navigate("/creation/folder/fasdfasdfasd")
        };
        return (
                <div className='p-5 h-screen overflow-y-auto  '>
                        <p className='font-lato text-sm font-medium text-[#A7A8AA] my-1'>Creation {`>`} </p>
                        <p className='font-lato text-2xl font-semibold text-[#108A00] my-1'>Create</p>
                        <div className="text-center w-full my-2">
                                <p className='font-bold text-[72px] font-pop '>Speech to text</p>
                                <p className="text-xl font-pop">Your free speech-to-text AI for seamless Text outputs and  speech transcriptions, ensuring security and precision in one powerful tool.</p>
                        </div>
                        <div className="w-full flex items-center justify-center gap-2">
                                {tabs.map((tab, index) => (
                                        <div key={index} className='bg-white flex flex-col items-center rounded-xl p-5 w-[30%] h-[100%]'>
                                                <img src={tab.logo} alt={tab.title} />
                                                <p className='font-pop text-[17px] font-bold my-2'>{tab.title}</p>
                                                <p className='text-sm font-pop text-center my-2'>{tab.description}</p>
                                                {/* {tab.btn && <button className='bg-[#108A00] px-4 py-1.5 text-white text-xs rounded-full'>{tab.btn}</button>} */}
                                                {tab.title === "Audio file" ? (
                                                        <label className='bg-[#108A00] px-4 py-1.5 text-white text-xs rounded-full'>
                                                                Upload File
                                                                <input
                                                                        type="file"
                                                                        accept=".mp3, .wav"
                                                                        style={{ display: 'none' }}
                                                                        onChange={handleAudioFileChange}
                                                                />
                                                        </label>
                                                ) : tab.title === "Folder" ? (
                                                        <label className='bg-[#108A00] px-4 py-1.5 text-white text-xs rounded-full'>
                                                                Upload Folder
                                                                <input
                                                                        type="file"
                                                                        accept="application/zip"
                                                                        multiple
                                                                        style={{ display: 'none' }}
                                                                        onChange={handleFolderFilesChange}
                                                                />
                                                        </label>
                                                ) : null}
                                        </div>
                                ))}
                        </div>
                </div>
        )
}

export default Creation