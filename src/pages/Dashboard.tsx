import clsx from 'clsx'
import React from 'react'
import audio from '../assets/svg/audio.svg';
import folder from '../assets/svg/folder.svg';
import save from '../assets/svg/db.svg';
import emotion from '../assets/svg/emotion.svg';


const Dashboard: React.FC = () => {
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
                {
                        logo: save,
                        title: "Save to database",
                        description: "Preserve your transcribed speech in our secure database for safekeeping",
                        btn: "Upload File"
                },
                {
                        logo: emotion,
                        title: "Speech Sentiments",
                        description: "The translated texts also displays the sentiments of the speech",
                },
        ]
        return (
                <div className='p-5 h-screen overflow-y-auto  '>
                        <p className='font-lato text-sm font-medium text-[#A7A8AA] my-1'>Dashboard</p>
                        <p className='font-lato text-2xl font-semibold text-[#108A00] my-1'>Dashboard</p>
                        <div className="text-center w-full my-2">
                                <p className='font-bold text-[72px] font-pop text-[#108A00]'>BONDI AI</p>
                                <p className="text-xl font-pop">Is a free speech-to-text AI for seamless Text outputs and speech
                                        transcriptions, ensuring security and precision in one powerful tool.</p>
                        </div>
                        <div className="flex gap-2">
                                <div className="w-[60%] grid grid-cols-2 gap-5">
                                        {tabs.map((tab, index) => (
                                                <div key={index} className='bg-white flex flex-col items-center rounded-xl p-5'>
                                                        <img src={tab.logo} alt={tab.title} />
                                                        <p className='font-pop text-[17px] font-bold my-2'>{tab.title}</p>
                                                        <p className='text-sm font-pop text-center my-2'>{tab.description}</p>
                                                        {tab.btn && <button className='bg-[#108A00] px-4 py-1.5 text-white text-xs rounded-full'>{tab.btn}</button>}
                                                </div>
                                        ))}
                                </div>
                                <div className='w-[40%]'>
                                        <p className='font-pop text-2xl'>Sentiments</p>
                                        <div>
                                                {sentiments.map((sentiment, i) => {
                                                        return (
                                                                <div className='flex gap-2 items-center'>
                                                                        <div className={clsx("w-5 h-5 rounded-full")} style={{ backgroundColor: sentiment.color }}></div>
                                                                        <p className='text-lg font-pop'>{sentiment.name}</p>
                                                                </div>
                                                        )
                                                })}
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Dashboard