import clsx from 'clsx';
import React, { useState } from 'react'
import Modal from 'react-modal';
import audio from "../assets/svg/audio.svg"
const Database: React.FC = () => {
        const [showing, setShowing] = useState<{ id: number, value: boolean } | null>()
        const files = [
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
        const [selectedFile, setSelectedFile] = useState<any>(files[0]);
        const [modalIsOpen, setIsOpen] = React.useState(false);

        function openModal() {
                setIsOpen(true);
        }
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

        function afterOpenModal() {
        }

        function closeModal() {
                setIsOpen(false);
        }
        const customStyles = {
                content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                },
        };
        return (
                <div className='p-5 h-screen overflow-y-auto font-pop  '>
                        <Modal
                                isOpen={modalIsOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                        >

                                <div className="flex flex-col items-center justify-center">
                                        <img src={audio} alt="" className='my-5' />
                                        <p className='font-medium font-pop text-base text-center'>Are you sure you
                                                want to delete this audio?</p>
                                        <div className="flex justify-between my-4 gap-5">
                                                <button className='border-2 border-green-500 px-10 py-1.5 rounded-full ' onClick={closeModal}>Yes</button>
                                                <button className='border-2 border-red-500 px-10 py-1.5 rounded-full ' onClick={closeModal}>No</button>
                                        </div>
                                </div>
                        </Modal>
                        <p className='font-lato text-sm font-medium text-[#A7A8AA] my-1'>Database </p>
                        <p className='font-lato text-2xl font-semibold text-[#108A00] my-1'>Database</p>
                        <div className="flex gap-5 h-[90%] p-5">
                                <div className="w-[40%] bg-white p-5 rounded-lg">
                                        {files.map((file, i) => {
                                                return (
                                                        <div key={i} onClick={() => setSelectedFile(file)} className='flex  justify-between items-center px-4 py-2 cursor-pointer'>
                                                                <div className="flex gap-2">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
                                                                                <path d="M12.5 2H4.1C3.54305 2 3.0089 2.22125 2.61508 2.61508C2.22125 3.0089 2 3.54305 2 4.1V20.9C2 21.457 2.22125 21.9911 2.61508 22.3849C3.0089 22.7787 3.54305 23 4.1 23H16.7C17.257 23 17.7911 22.7787 18.1849 22.3849C18.5787 21.9911 18.8 21.457 18.8 20.9V8.3L12.5 2Z" stroke="#737581" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" />
                                                                                <path d="M8.60985 15.2713H6.20001V11.8287H8.60985" stroke="#737581" stroke-width="0.688525" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                                <path d="M8.60983 11.8287L12.0525 9.35004V17.75L8.60983 15.2713" stroke="#737581" stroke-width="0.688525" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                                <path d="M14.2557 15.6157C14.8066 15.0993 15.1508 14.3764 15.1508 13.5502C15.1508 12.7239 14.8066 12.001 14.2557 11.4846" stroke="#737581" stroke-width="0.688525" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                                <path d="M13.4295 14.4452C13.6705 14.2042 13.8426 13.8944 13.8426 13.5501C13.8426 13.2059 13.7049 12.8616 13.4295 12.6551" stroke="#737581" stroke-width="0.688525" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                        </svg>
                                                                        <p className={clsx(selectedFile?.name === file.name ? "text-[#108A00] " : "text-[#52575C]", "font-bold")}>{file.name}</p>
                                                                </div>
                                                                <button onClick={openModal}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                                                                <path d="M5.91853 11.1694C6.09516 11.1694 6.26459 11.0994 6.38972 10.9747C6.51486 10.8501 6.58548 10.6809 6.58615 10.5043V5.16835C6.58615 4.99129 6.51581 4.82147 6.39061 4.69627C6.2654 4.57107 6.09559 4.50073 5.91853 4.50073C5.74147 4.50073 5.57166 4.57107 5.44646 4.69627C5.32125 4.82147 5.25092 4.99129 5.25092 5.16835V10.5043C5.25158 10.6809 5.32221 10.8501 5.44734 10.9747C5.57247 11.0994 5.7419 11.1694 5.91853 11.1694Z" fill="#E70000" />
                                                                                <path d="M9.91914 11.1694C10.0958 11.1694 10.2652 11.0994 10.3903 10.9747C10.5155 10.8501 10.5861 10.6809 10.5868 10.5043V5.16835C10.5868 4.99129 10.5164 4.82147 10.3912 4.69627C10.266 4.57107 10.0962 4.50073 9.91914 4.50073C9.74208 4.50073 9.57227 4.57107 9.44707 4.69627C9.32186 4.82147 9.25153 4.99129 9.25153 5.16835V10.5043C9.25219 10.6809 9.32282 10.8501 9.44795 10.9747C9.57308 11.0994 9.74251 11.1694 9.91914 11.1694Z" fill="#E70000" />
                                                                                <path d="M15.3351 1.33273H12.0021V0.66762C12.0024 0.579855 11.9854 0.492892 11.9519 0.411744C11.9185 0.330596 11.8693 0.256867 11.8073 0.194808C11.7452 0.132748 11.6715 0.0835843 11.5903 0.0501506C11.5092 0.0167169 11.4222 -0.000325851 11.3345 4.71825e-06H4.66831C4.58054 -0.000325851 4.49358 0.0167169 4.41243 0.0501506C4.33128 0.0835843 4.25755 0.132748 4.19549 0.194808C4.13343 0.256867 4.08427 0.330596 4.05084 0.411744C4.0174 0.492892 4.00036 0.579855 4.00069 0.66762V1.33273H0.667615C0.490553 1.33273 0.320742 1.40307 0.19554 1.52827C0.0703378 1.65348 0 1.82329 0 2.00035C0 2.17741 0.0703378 2.34722 0.19554 2.47243C0.320742 2.59763 0.490553 2.66797 0.667615 2.66797H2.00035V12.6697C2.00035 13.2002 2.2111 13.709 2.58623 14.0842C2.96137 14.4593 3.47017 14.67 4.00069 14.67H12.0021C12.5326 14.67 13.0414 14.4593 13.4165 14.0842C13.7917 13.709 14.0024 13.2002 14.0024 12.6697V2.66797H15.3351C15.5122 2.66797 15.682 2.59763 15.8072 2.47243C15.9324 2.34722 16.0028 2.17741 16.0028 2.00035C16.0028 1.82329 15.9324 1.65348 15.8072 1.52827C15.682 1.40307 15.5122 1.33273 15.3351 1.33273ZM12.6697 12.6697C12.669 12.8463 12.5984 13.0155 12.4733 13.1402C12.3481 13.2648 12.1787 13.3348 12.0021 13.3348H4.00069C3.82406 13.3348 3.65463 13.2648 3.5295 13.1402C3.40437 13.0155 3.33374 12.8463 3.33308 12.6697V2.66797H12.6697V12.6697Z" fill="#E70000" />
                                                                        </svg>
                                                                </button>
                                                        </div>
                                                )
                                        })}
                                </div>
                                <div className="w-[60%] h-full     bg-white rounded-lg p-5 ">
                                        {selectedFile.msgs?.map((msg: any, i: any) => {
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
                                                                        {showing?.id == i && showing?.value == true && (
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
                        </div>
                </div>
        )
}

export default Database