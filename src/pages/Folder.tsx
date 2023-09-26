import React, { useState } from 'react'
import FolderTree from '../components/FolderTree';
import audio from '../assets/svg/audio.svg';
import folder from '../assets/svg/folder.svg';
import { useNavigate } from 'react-router-dom';
const Folder: React.FC = () => {
        const [selectedFile, setSelectedFile] = useState();
        const sentiments = [
                {
                        color: "#FF0000",
                        name: "Upset"
                }, {
                        color: "#0000FF",
                        name: "Calm"
                },
                {
                        color: "#00FF00",
                        name: "Delighted"
                },
                {
                        color: "#F5F5DC",
                        name: "Neutral"
                },
                {
                        color: "#008000",
                        name: "Satisfied"
                },
                {
                        color: "#FFA500",
                        name: "Frustrated/impatient"
                },
                {
                        color: "#FFFF00",
                        name: "Hopeful"
                },
                {
                        color: "#90EE90",
                        name: "Grateful"
                },
                {
                        color: "#ADD8E6",
                        name: "Light"
                }
        ]
        const [showing, setShowing] = useState<{ id: number, value: boolean } | null>()
        const explorer = {
                name: "Calls from Willy",
                isFolder: true,
                items: [
                        {
                                name: "monday 9 sep",
                                isFolder: true,
                                items: [
                                        {
                                                name: "Morning",
                                                isFolder: true,
                                                items: [
                                                        {
                                                                name: "call1.mp3",
                                                                isFolder: false,
                                                                msgs: [
                                                                        {
                                                                                sentiment: "#FF0000",
                                                                                content: "Hey, how was your weekend? Did you go out and get to enjoy?"
                                                                        },
                                                                        {
                                                                                sentiment: "#0000FF",
                                                                                content: "Hey, how was your weekend? Did you go out and get to enjoy?"
                                                                        },
                                                                        {
                                                                                sentiment: "#008000",
                                                                                content: "Hey, how was your weekend? Did you go out and get to enjoy?"
                                                                        },
                                                                        {
                                                                                sentiment: "#00FF00",
                                                                                content: "Hey, how was your weekend? Did you go out and get to enjoy?"
                                                                        },
                                                                        {
                                                                                sentiment: "#FFFF00",
                                                                                content: "Hey, how was your weekend? Did you go out and get to enjoy?Hey, how was your weekend? Did you go out and get to enjoy?Hey, how was your weekend? Did you go out and get to enjoy?Hey, how was your weekend? Did you go out and get to enjoy?Hey, how was your weekend? Did you go out and get to enjoy?"
                                                                        },
                                                                        {
                                                                                sentiment: "#FFA500",
                                                                                content: "Hey, how was your weekend? Did you go out and get to enjoy?"
                                                                        }
                                                                ]
                                                        }
                                                ]
                                        },
                                        {
                                                name: "call2.mp3",
                                                isFolder: false,
                                                msgs: [
                                                        {
                                                                sentiment: "#FF0000",
                                                                content: "THis is the second calls tfasdfasldfja;sjdkflasdf hiahsdjfljaskdjfhjklhkgljhgkhljhgkfasdf"
                                                        },
                                                        {
                                                                sentiment: "#0000FF",
                                                                content: "THis is the second calls tfasdfasldfja;sjdkflasdf hiahsdjfljaskdjfhjklhkgljhgkhljhgkfasdf"
                                                        },
                                                        {
                                                                sentiment: "#008000",
                                                                content: "THis is the second calls tfasdfasldfja;sjdkflasdf hiahsdjfljaskdjfhjklhkgljhgkhljhgkfasdf"
                                                        },
                                                        {
                                                                sentiment: "#00FF00",
                                                                content: "THis is the second calls tfasdfasldfja;sjdkflasdf hiahsdjfljaskdjfhjklhkgljhgkhljhgkfasdf"
                                                        },
                                                        {
                                                                sentiment: "#FFFF00",
                                                                content: "THis is the second calls tfasdfasldfja;sjdkflasdf hiahsdjfljaskdjfhjklhkgljhgkhljhgkfasdf"
                                                        },
                                                        {
                                                                sentiment: "#FFA500",
                                                                content: "THis is the second calls tfasdfasldfja;sjdkflasdf hiahsdjfljaskdjfhjklhkgljhgkhljhgkfasdf"
                                                        }
                                                ]
                                        }
                                ]
                        },
                        {
                                name: "songs",
                                isFolder: true,
                                items: [
                                        {
                                                name: "Drill",
                                                isFolder: true,
                                                items: [
                                                        {
                                                                name: "Mask-off.mp3",
                                                                isFolder: false,
                                                                msgs: [
                                                                        {
                                                                                sentiment: "#FF0000",
                                                                                content: "Mask OFF Mask OFf MAsk OFF Mask OFF PErcocets Percocets PErcocets "
                                                                        },
                                                                        {
                                                                                sentiment: "#0000FF",
                                                                                content: "Mask OFF Mask OFf MAsk OFF Mask OFF PErcocets Percocets PErcocets "
                                                                        },
                                                                        {
                                                                                sentiment: "#008000",
                                                                                content: "Mask OFF Mask OFf MAsk OFF Mask OFF PErcocets Percocets PErcocets "
                                                                        },
                                                                        {
                                                                                sentiment: "#00FF00",
                                                                                content: "Mask OFF Mask OFf MAsk OFF Mask OFF PErcocets Percocets PErcocets "
                                                                        },
                                                                        {
                                                                                sentiment: "#FFFF00",
                                                                                content: "Mask OFF Mask OFf MAsk OFF Mask OFF PErcocets Percocets PErcocets "
                                                                        },
                                                                        {
                                                                                sentiment: "#FFA500",
                                                                                content: "Mask OFF Mask OFf MAsk OFF Mask OFF PErcocets Percocets PErcocets "
                                                                        }
                                                                ]
                                                        }
                                                ]
                                        },
                                        {
                                                name: "what-do-you-mean.mp3",
                                                isFolder: false,
                                                msgs: [
                                                        {
                                                                sentiment: "#FF0000",
                                                                content: "What do you mean what do yo meaiofkalshdfaklsdhfl asd fasklfja sdfjklsa dfjaksd fasd fasdf asldk "
                                                        },
                                                        {
                                                                sentiment: "#0000FF",
                                                                content: "What do you mean what do yo meaiofkalshdfaklsdhfl asd fasklfja sdfjklsa dfjaksd fasd fasdf asldk "
                                                        },
                                                        {
                                                                sentiment: "#008000",
                                                                content: "What do you mean what do yo meaiofkalshdfaklsdhfl asd fasklfja sdfjklsa dfjaksd fasd fasdf asldk "
                                                        },
                                                        {
                                                                sentiment: "#00FF00",
                                                                content: "What do you mean what do yo meaiofkalshdfaklsdhfl asd fasklfja sdfjklsa dfjaksd fasd fasdf asldk "
                                                        },
                                                        {
                                                                sentiment: "#FFFF00",
                                                                content: "What do you mean what do yo meaiofkalshdfaklsdhfl asd fasklfja sdfjklsa dfjaksd fasd fasdf asldk "
                                                        },
                                                        {
                                                                sentiment: "#FFA500",
                                                                content: "What do you mean what do yo meaiofkalshdfaklsdhfl asd fasklfja sdfjklsa dfjaksd fasd fasdf asldk "
                                                        }
                                                ]
                                        },
                                        {
                                                name: "hello.wav",
                                                isFolder: false,
                                                msgs: [
                                                        {
                                                                sentiment: "#FF0000",
                                                                content: "Lorem Ipsumi Dilor Sit ametadfsfaksdflhaksdfhas ahsodkfljasldf asfjakfjas dfkl;asjdfasjlkfj aslkdjfas dfasdjfklasjd;f asdjfkasjdf asdlkjfas  fasklfja sdf asjdfas fdjaskfj asjkdfjas "
                                                        },
                                                        {
                                                                sentiment: "#0000FF",
                                                                content: "Lorem Ipsumi Dilor Sit ametadfsfaksdflhaksdfhas ahsodkfljasldf asfjakfjas dfkl;asjdfasjlkfj aslkdjfas dfasdjfklasjd;f asdjfkasjdf asdlkjfas  fasklfja sdf asjdfas fdjaskfj asjkdfjas "
                                                        },
                                                        {
                                                                sentiment: "#008000",
                                                                content: "Lorem Ipsumi Dilor Sit ametadfsfaksdflhaksdfhas ahsodkfljasldf asfjakfjas dfkl;asjdfasjlkfj aslkdjfas dfasdjfklasjd;f asdjfkasjdf asdlkjfas  fasklfja sdf asjdfas fdjaskfj asjkdfjas "
                                                        },
                                                        {
                                                                sentiment: "#00FF00",
                                                                content: "Lorem Ipsumi Dilor Sit ametadfsfaksdflhaksdfhas ahsodkfljasldf asfjakfjas dfkl;asjdfasjlkfj aslkdjfas dfasdjfklasjd;f asdjfkasjdf asdlkjfas  fasklfja sdf asjdfas fdjaskfj asjkdfjas "
                                                        },
                                                        {
                                                                sentiment: "#FFFF00",
                                                                content: "Lorem Ipsumi Dilor Sit ametadfsfaksdflhaksdfhas ahsodkfljasldf asfjakfjas dfkl;asjdfasjlkfj aslkdjfas dfasdjfklasjd;f asdjfkasjdf asdlkjfas  fasklfja sdf asjdfas fdjaskfj asjkdfjas "
                                                        },
                                                        {
                                                                sentiment: "#FFA500",
                                                                content: "Lorem Ipsumi Dilor Sit ametadfsfaksdflhaksdfhas ahsodkfljasldf asfjakfjas dfkl;asjdfasjlkfj aslkdjfas dfasdjfklasjd;f asdjfkasjdf asdlkjfas  fasklfja sdf asjdfas fdjaskfj asjkdfjas "
                                                        }
                                                ]
                                        },
                                ]
                        },
                        {
                                name: "inana-song-by-Chriss",
                                isFolder: false,
                                msgs: [
                                        {
                                                sentiment: "#FF0000",
                                                content: "Lorem Ipsumi Dilor Sit ametadfsfaksdflhaksdfhas ahsodkfljasldf asfjakfjas dfkl;asjdfasjlkfj aslkdjfas dfasdjfklasjd;f asdjfkasjdf asdlkjfas  fasklfja sdf asjdfas fdjaskfj asjkdfjas "
                                        },
                                        {
                                                sentiment: "#0000FF",
                                                content: "Lorem Ipsumi Dilor Sit ametadfsfaksdflhaksdfhas ahsodkfljasldf asfjakfjas dfkl;asjdfasjlkfj aslkdjfas dfasdjfklasjd;f asdjfkasjdf asdlkjfas  fasklfja sdf asjdfas fdjaskfj asjkdfjas "
                                        },
                                        {
                                                sentiment: "#008000",
                                                content: "Lorem Ipsumi Dilor Sit ametadfsfaksdflhaksdfhas ahsodkfljasldf asfjakfjas dfkl;asjdfasjlkfj aslkdjfas dfasdjfklasjd;f asdjfkasjdf asdlkjfas  fasklfja sdf asjdfas fdjaskfj asjkdfjas "
                                        },
                                        {
                                                sentiment: "#00FF00",
                                                content: "Lorem Ipsumi Dilor Sit ametadfsfaksdflhaksdfhas ahsodkfljasldf asfjakfjas dfkl;asjdfasjlkfj aslkdjfas dfasdjfklasjd;f asdjfkasjdf asdlkjfas  fasklfja sdf asjdfas fdjaskfj asjkdfjas "
                                        },
                                        {
                                                sentiment: "#FFFF00",
                                                content: "Lorem Ipsumi Dilor Sit ametadfsfaksdflhaksdfhas ahsodkfljasldf asfjakfjas dfkl;asjdfasjlkfj aslkdjfas dfasdjfklasjd;f asdjfkasjdf asdlkjfas  fasklfja sdf asjdfas fdjaskfj asjkdfjas "
                                        },
                                        {
                                                sentiment: "#FFA500",
                                                content: "Lorem Ipsumi Dilor Sit ametadfsfaksdflhaksdfhas ahsodkfljasldf asfjakfjas dfkl;asjdfasjlkfj aslkdjfas dfasdjfklasjd;f asdjfkasjdf asdlkjfas  fasklfja sdf asjdfas fdjaskfj asjkdfjas "
                                        }
                                ]
                        }
                ]
        };
        const handleFileClick = (file: any) => {
                console.log(file)
                setSelectedFile(file);
        };


        const tabs = [
                {
                        logo: folder,
                        title: "Select another folder",
                        description: "Transform your audio file into text magic",
                        btn: "Select Folder"
                }, {
                        logo: audio,
                        title: "Audio file",
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
                        <p className='font-lato text-sm font-medium text-[#A7A8AA] my-1'>Creation {`>`}  Folder</p>
                        <p className='font-lato text-2xl font-semibold text-[#108A00] my-1'>Create</p>
                        <div className="w-full h-[90%] flex gap-5">
                                <div className="w-[40%] bg-white p-5 rounded-lg">
                                        <FolderTree explorer={explorer} selectedFile={selectedFile} onFileClick={handleFileClick} />
                                </div>
                                {selectedFile == null ? (
                                        <div className="w-[60%] flex flex-col items-center gap-5" >
                                                {tabs.map((tab, index) => (
                                                        <div key={index} className='bg-white flex flex-col items-center rounded-xl p-5 w-[50%] h-[100%]'>
                                                                <img src={tab.logo} alt={tab.title} />
                                                                <p className='font-pop text-[17px] font-bold my-2'>{tab.title}</p>
                                                                <p className='text-sm font-pop text-center my-2'>{tab.description}</p>
                                                                {tab.title === "Audio file" ? (
                                                                        <label className='bg-[#108A00] px-4 py-1.5 text-white text-xs rounded-full cursor-pointer'>
                                                                                Upload File
                                                                                <input
                                                                                        type="file"
                                                                                        accept=".mp3, .wav"
                                                                                        style={{ display: 'none' }}
                                                                                        onChange={handleAudioFileChange}
                                                                                />
                                                                        </label>
                                                                ) : tab.title === "Select another folder" ? (
                                                                        <label className='bg-[#108A00] px-4 py-1.5 text-white text-xs rounded-full cursor-pointer'>
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
                                ) : (
                                        <div className="w-[60%] h-full     bg-white rounded-lg p-5 ">
                                                <div className="h-[90%] overflow-y-auto">
                                                        {selectedFile.msgs.map((msg, i) => {
                                                                const show = () => {
                                                                        setShowing({ id: i, value: true })
                                                                }
                                                                const hide = () => {
                                                                        setShowing(null)
                                                                }
                                                                return (
                                                                        <div key={i} className='flex gap-2 items-start my-2'>
                                                                                <div className="relative">
                                                                                        <button onClick={show} className='cursor-pointer'>
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                                                                                        <circle cx="20.5" cy="20.5" r="19.8594" fill="white" stroke={msg.sentiment} stroke-width="1.28125" />
                                                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.6338 24.1675L25.7763 23.8412C25.09 23.7625 24.415 23.9987 23.9313 24.4825L21.8613 26.5525C18.6775 24.9325 16.0675 22.3337 14.4475 19.1387L16.5288 17.0575C17.0125 16.5737 17.2488 15.8987 17.17 15.2125L16.8438 12.3775C16.7088 11.2412 15.7525 10.3862 14.605 10.3862H12.6588C11.3875 10.3862 10.33 11.4437 10.4088 12.715C11.005 22.3225 18.6888 29.995 28.285 30.5912C29.5563 30.67 30.6138 29.6125 30.6138 28.3412V26.395C30.625 25.2587 29.77 24.3025 28.6338 24.1675Z" fill={msg.sentiment} />
                                                                                                </svg>
                                                                                        </button>
                                                                                        {showing?.id == i && showing.value == true && (
                                                                                                <div className="absolute top-[80%] flex gap-2 bg-[#E1E1E1] border-[#108A00] border p-1 rounded-lg" onClick={hide}>
                                                                                                        {sentiments.map((sent, i) => {
                                                                                                                return (
                                                                                                                        <div key={i} className='w-2 h-2 rounded-full cursor-pointer' style={{ backgroundColor: sent.color }}></div>
                                                                                                                )
                                                                                                        })}
                                                                                                </div>
                                                                                        )}
                                                                                </div>
                                                                                <div className='bg-[#E1E1E1] p-2 text-[#4A4B53] font-lato text-sm font-medium rounded-md max-w-[75%]'>
                                                                                        {msg.content}
                                                                                </div>
                                                                        </div>
                                                                )
                                                        })}
                                                </div>
                                                <div className="flex w-full justify-between">
                                                        <div></div>
                                                        <div>
                                                                <button className='flex gap-2 bg-[#108A00] px-4 py-2 rounded-lg text-white text-sm'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                                                                <path d="M8.72414 9.51724C13.5423 9.51724 17.4483 7.38674 17.4483 4.75862C17.4483 2.13051 13.5423 0 8.72414 0C3.90593 0 0 2.13051 0 4.75862C0 7.38674 3.90593 9.51724 8.72414 9.51724Z" fill="white" />
                                                                                <path d="M8.72414 17.4483C4.91724 17.4483 1.74483 16.338 0 14.5931V17.4483C0 20.1449 3.8069 22.2069 8.72414 22.2069C9.43793 22.2069 10.1517 22.1276 10.8655 22.0483C9.67586 20.8587 8.96207 19.1931 8.72414 17.4483Z" fill="white" />
                                                                                <path d="M0 8.24829V11.1035C0 13.8 3.8069 15.8621 8.72414 15.8621C8.72414 15.8621 8.72414 15.8621 8.80345 15.8621C8.96207 13.9586 9.91379 12.2138 11.1828 10.9448C10.3897 11.0242 9.59655 11.1035 8.72414 11.1035C4.91724 11.1035 1.74483 9.99312 0 8.24829Z" fill="white" />
                                                                                <path d="M17.4482 10.3896V17.131L18.4793 16.1C18.7965 15.7827 19.2724 15.7827 19.5896 16.1C19.9069 16.4172 19.9069 16.8931 19.5896 17.2103L17.2103 19.5896C17.131 19.6689 17.0517 19.7482 16.9724 19.7482C16.8931 19.8275 16.7344 19.8275 16.6551 19.8275C16.5758 19.8275 16.4172 19.8275 16.3379 19.7482C16.2586 19.6689 16.1793 19.6689 16.1 19.5896L13.7206 17.2103C13.4034 16.8931 13.4034 16.4172 13.7206 16.1C14.0379 15.7827 14.5138 15.7827 14.831 16.1L15.862 17.131V10.3896C12.7689 10.7862 10.3103 13.4827 10.3103 16.6551C10.3103 20.1448 13.1655 23 16.6551 23C20.1448 23 23 20.1448 23 16.6551C23 13.4034 20.5413 10.7862 17.4482 10.3896Z" fill="white" />
                                                                        </svg>
                                                                        <p>Save to Database</p>
                                                                </button>
                                                        </div>
                                                </div>
                                        </div>
                                )}
                        </div>
                </div>
        )
}

export default Folder