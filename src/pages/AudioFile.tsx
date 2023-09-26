import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import audio from '../assets/svg/audio.svg';
import save from '../assets/svg/db.svg';

const AudioFile: React.FC = () => {
        const { id } = useParams()
        const file = {
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
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
                const delay = 5000;
                const timeoutId = setTimeout(() => {
                        setIsLoading(false);
                }, delay);
                return () => clearTimeout(timeoutId);
        }, []);
        const tabs = [
                {
                        logo: save,
                        title: "Save to database",
                        description: "Preserve your transcribed speech in our secure database for safekeeping",
                        btn: "Save to database"
                }, {
                        logo: audio,
                        title: "Select another file",
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
        };
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
        return (
                <div className='p-5 h-screen overflow-y-auto  '>
                        <p className='font-lato text-sm font-medium text-[#A7A8AA] my-1'>Creation {`>`}  File</p>
                        <p className='font-lato text-2xl font-semibold text-[#108A00] my-1'>Create</p>
                        {isLoading ? (
                                <div className="w-full h-[70%] flex flex-col gap-2 items-center justify-center">
                                        <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="256" height="257" viewBox="0 0 256 257" fill="none">
                                                        <g opacity="0.3">
                                                                <path d="M255.96 128.218C255.96 128.218 255.96 127.536 255.96 126.144C255.96 124.751 255.96 122.737 255.664 120.218C255.144 112.45 253.925 104.745 252.02 97.1968C250.643 91.7395 248.89 86.3838 246.776 81.1678C244.302 74.9436 241.329 68.9292 237.887 63.1833C229.476 49.1685 218.476 36.8815 205.474 26.9773C189.679 15.0028 171.305 6.88594 151.816 3.27455C135.295 0.220654 118.337 0.421934 101.892 3.86711C96.1131 5.11126 90.422 6.73448 84.856 8.7262C61.1381 17.3448 40.514 32.8129 25.5991 53.1689C21.7128 58.4607 18.2456 64.0479 15.2291 69.8794C13.6588 72.8422 12.2662 75.8051 10.9329 78.7679C9.59963 81.7308 8.44415 84.9603 7.43678 88.1601C3.14374 101.131 0.943491 114.703 0.918566 128.366C0.964552 135.232 1.51913 142.085 2.57775 148.869C3.65403 155.559 5.27916 162.149 7.43678 168.572C8.44415 171.772 9.71815 174.883 10.9329 177.964C12.1477 181.045 13.6291 184.068 15.1994 186.853C18.2218 192.697 21.6991 198.294 25.5991 203.593C40.5344 223.928 61.1518 239.391 84.856 248.035C90.4277 249.994 96.1179 251.597 101.892 252.835C118.341 256.237 135.291 256.438 151.816 253.428C171.299 249.798 189.669 241.683 205.474 229.725C218.476 219.821 229.476 207.534 237.887 193.519C244.202 182.927 248.961 171.482 252.02 159.535C253.925 151.977 255.145 144.262 255.664 136.484C255.901 133.818 255.872 131.773 255.96 130.41C256.049 129.047 255.96 128.336 255.96 128.336V130.41C255.96 131.773 255.96 133.818 255.753 136.484C254.977 149.902 252.045 163.108 247.072 175.594C244.612 181.843 241.639 187.879 238.183 193.638C229.782 207.744 218.772 220.122 205.74 230.11C189.892 242.208 171.437 250.436 151.846 254.139C135.228 257.201 118.175 257.019 101.626 253.606C95.806 252.356 90.0752 250.722 84.4708 248.717C60.6184 240.062 39.8715 224.523 24.8583 204.067C20.9283 198.745 17.4308 193.118 14.3995 187.238C12.7996 184.275 11.4367 181.312 10.0738 178.171C8.71084 175.031 7.55533 171.92 6.54796 168.69C4.37668 162.219 2.74161 155.579 1.65928 148.839C0.579932 141.978 0.025176 135.045 0 128.099C0.00557444 114.345 2.21633 100.681 6.54796 87.6268C7.58496 84.3973 8.85893 81.2863 10.1033 78.1457C11.3477 75.0051 12.8292 72.0126 14.3995 69.0794C29.2495 40.5471 54.2493 18.6128 84.4708 7.6003C90.0758 5.60432 95.8066 3.98109 101.626 2.74123C107.286 1.56835 113.016 0.766681 118.781 0.341333C129.827 -0.466443 140.931 0.160974 151.816 2.20792C161.982 4.08827 171.874 7.22324 181.267 11.5409C189.949 15.4963 198.158 20.4159 205.74 26.207C218.776 36.2373 229.786 48.6549 238.183 62.7982C241.64 68.5671 244.613 74.6122 247.072 80.8715C249.165 86.1097 250.898 91.485 252.257 96.9598C254.142 104.537 255.313 112.274 255.753 120.07C255.96 122.737 255.901 124.781 255.96 125.996V128.218Z" fill="#108A00" />
                                                        </g>
                                                        <path d="M239.784 125.462C239.784 125.462 239.784 124.87 239.784 123.685C239.784 122.5 239.784 120.722 239.517 118.44C239.082 111.731 238.031 105.076 236.376 98.5597C230.199 74.4189 216.04 53.0762 196.2 37.9991C174.863 21.7781 148.322 13.936 121.596 15.9555C116.615 16.2851 111.665 16.9683 106.781 17.9999C101.756 19.0729 96.8066 20.4784 91.967 22.2071C71.5492 29.6562 53.7886 42.9741 40.9172 60.4871C37.5664 65.0467 34.5937 69.8725 32.0287 74.9162C29.3414 80.0099 27.0913 85.3226 25.303 90.7971C17.8027 113.299 17.8027 137.626 25.303 160.128C27.0995 165.595 29.339 170.906 31.999 176.009C34.5825 181.042 37.5544 185.866 40.8876 190.438C53.7509 207.965 71.5132 221.295 91.9375 228.747C96.7776 230.466 101.727 231.862 106.752 232.925C120.931 235.903 135.557 236.074 149.802 233.429C166.614 230.29 182.461 223.269 196.082 212.926C215.937 197.863 230.1 176.515 236.258 152.365C237.912 145.848 238.963 139.193 239.398 132.484C239.635 130.203 239.576 128.425 239.665 127.24C239.754 126.055 239.665 125.462 239.665 125.462C239.665 125.462 239.665 127.892 239.487 132.514C239.126 139.239 238.134 145.915 236.524 152.454C230.455 176.733 216.308 198.225 196.407 213.4C182.745 223.869 166.81 230.974 149.891 234.14C140.49 235.912 130.9 236.46 121.359 235.769C111.239 235.056 101.268 232.942 91.7301 229.488C71.1413 222.01 53.2248 208.609 40.2357 190.971C36.8959 186.362 33.9239 181.498 31.3472 176.423C28.628 171.296 26.3578 165.943 24.5622 160.424C17.0161 137.747 17.0161 113.237 24.5622 90.56C26.3707 85.0363 28.6404 79.6744 31.3472 74.531C33.968 69.4588 36.9898 64.604 40.3838 60.0131C53.3561 42.3709 71.2646 28.9679 91.8485 21.496C96.6935 19.7845 101.641 18.3793 106.663 17.2888C111.547 16.2646 116.497 15.5815 121.477 15.2444C131.007 14.5287 140.59 15.0666 149.98 16.8444C166.904 20.0205 182.847 27.1243 196.526 37.5843C207.764 46.2082 217.265 56.8853 224.525 69.0497C229.978 78.2868 234.06 88.2672 236.643 98.6782C238.255 105.227 239.247 111.913 239.606 118.648C239.843 123.062 239.784 125.462 239.784 125.462Z" fill="#108A00" />
                                                        <path d="M128.202 218.97C178.323 218.97 218.955 178.339 218.955 128.218C218.955 78.0969 178.323 37.4658 128.202 37.4658C78.0815 37.4658 37.4504 78.0969 37.4504 128.218C37.4504 178.339 78.0815 218.97 128.202 218.97Z" fill="#108A00" />
                                                        <path d="M128.41 100.663H127.758C121.311 100.663 116.085 105.89 116.085 112.337V127.062C116.085 133.509 121.311 138.736 127.758 138.736H128.41C134.857 138.736 140.084 133.509 140.084 127.062V112.337C140.084 105.89 134.857 100.663 128.41 100.663Z" fill="#FAFAFA" />
                                                        <path d="M128.054 146.025C123.339 146.025 118.818 144.152 115.484 140.818C112.15 137.484 110.277 132.962 110.277 128.247C110.277 128.027 110.365 127.816 110.52 127.661C110.676 127.505 110.887 127.418 111.107 127.418C111.324 127.425 111.531 127.515 111.685 127.669C111.839 127.823 111.929 128.03 111.936 128.247C111.944 132.491 113.631 136.559 116.629 139.563C119.627 142.566 123.692 144.261 127.936 144.276C130.066 144.373 132.194 144.025 134.183 143.254C136.171 142.483 137.977 141.305 139.485 139.797C140.994 138.289 142.171 136.483 142.942 134.494C143.713 132.506 144.062 130.378 143.965 128.247C143.965 128.027 144.052 127.816 144.208 127.661C144.363 127.505 144.574 127.418 144.794 127.418C145.014 127.418 145.225 127.505 145.381 127.661C145.536 127.816 145.624 128.027 145.624 128.247C145.745 130.596 145.375 132.945 144.538 135.143C143.701 137.34 142.415 139.34 140.761 141.012C139.108 142.685 137.124 143.995 134.936 144.858C132.748 145.721 130.404 146.118 128.054 146.025Z" fill="#FAFAFA" />
                                                        <path d="M128.884 145.195H127.225V153.876H128.884V145.195Z" fill="white" />
                                                        <path d="M138.543 154.321H117.595C117.399 154.284 117.221 154.179 117.093 154.025C116.965 153.87 116.895 153.676 116.895 153.476C116.895 153.276 116.965 153.082 117.093 152.928C117.221 152.773 117.399 152.669 117.595 152.632H138.543C138.74 152.669 138.917 152.773 139.045 152.928C139.173 153.082 139.243 153.276 139.243 153.476C139.243 153.676 139.173 153.87 139.045 154.025C138.917 154.179 138.74 154.284 138.543 154.321Z" fill="white" />
                                                        <path d="M110.514 107.596C110.514 107.833 109.151 107.389 107.551 106.737C105.951 106.085 104.826 105.493 104.914 105.256C105.003 105.019 106.337 105.256 107.877 105.937C109.418 106.619 110.781 107.389 110.514 107.596Z" fill="white" />
                                                        <path d="M117.27 98.6486C117.062 98.6486 115.996 97.6412 114.84 96.0709C113.685 94.5006 112.914 93.108 113.122 93.108C113.329 93.108 114.396 94.1154 115.551 95.6857C116.707 97.256 117.477 98.5004 117.27 98.6486Z" fill="white" />
                                                        <path d="M128.114 95.4191C127.876 95.4191 127.699 93.9673 127.728 92.1303C127.758 90.2933 127.965 88.8416 128.202 88.8416C128.602 89.8889 128.734 91.0191 128.588 92.1303C128.558 93.9377 128.38 95.3895 128.114 95.4191Z" fill="white" />
                                                        <path d="M142.069 93.0783C142.246 93.0783 141.743 94.4412 140.765 95.7449C139.787 97.0486 138.721 97.8781 138.543 97.73C138.365 97.5819 139.106 96.4856 140.054 95.2116C141.002 93.9376 141.832 92.9302 142.069 93.0783Z" fill="white" />
                                                        <path d="M151.402 104.397C151.402 104.604 150.424 105.463 148.913 106.322C147.402 107.182 146.128 107.685 145.95 107.478C145.772 107.27 146.928 106.411 148.439 105.552C149.95 104.693 151.283 104.189 151.402 104.397Z" fill="white" />
                                                </svg>
                                        </div>
                                        <div className="boxContainer my-3">
                                                <div className="box box1"></div>
                                                <div className="box box2"></div>
                                                <div className="box box3"></div>
                                                <div className="box box4"></div>
                                                <div className="box box5"></div>
                                                <div className="box box6"></div>
                                                <div className="box box7"></div>
                                                <div className="box box8"></div>
                                                <div className="box box9"></div>
                                                <div className="box box10"></div>
                                                <div className="box box11"></div>
                                                <div className="box box12"></div>
                                                <div className="box box13"></div>
                                                <div className="box box14"></div>
                                                <div className="box box15"></div>
                                                <div className="box box16"></div>
                                                <div className="box box17"></div>
                                                <div className="box box18"></div>
                                                <div className="box box19"></div>
                                                <div className="box box20"></div>
                                        </div>
                                        <p className="text-xl font-pop my-3">Please be patient as Your audio is being converted to text</p>
                                </div>
                        ) : (
                                <div className='p-5 flex gap-5 items-center h-[92%] '>
                                        <div className="w-[60%] h-full   overflow-y-auto bg-white rounded-lg p-5">
                                                {file.msgs.map((msg, i) => {
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
                                        <div className="w-[40%]  h-full flex flex-col gap-5 rounded-lg items-center ">
                                                {tabs.map((tab, index) => (
                                                        <div key={index} className='bg-white flex flex-col items-center rounded-xl p-5 w-[70%]  h-[100%]'>
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
                                                                ) : (<button className='bg-[#108A00] px-4 py-1.5 text-white text-xs rounded-full'>{tab.btn}</button>
                                                                )}
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        )}
                </div>
        )
}

export default AudioFile