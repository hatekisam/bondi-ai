import React, { useState } from "react";
interface MSG {
        sentiment: string;
        content: string;
}

interface ExplorerItem {
        name: string;
        items?: ExplorerItem[];
        isFolder: boolean;
        msgs?: MSG[]
}

interface FolderProps {
        explorer: ExplorerItem;
        selectedFile: any;
        onFileClick: (file: any) => void;
}

const FolderTree: React.FC<FolderProps> = ({ explorer, selectedFile, onFileClick }) => {
        const [expand, setExpand] = useState(false);

        return (
                <div>
                        <div className="flex gap-2 items-center ">
                                {explorer.isFolder ?
                                        (
                                                <button onClick={() => setExpand(!expand)} className="cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="29" viewBox="0 0 39 29" fill="none" className="w-5 h-5">
                                                                <path d="M30.8125 3.625H16.3125L12.6875 0H3.625C1.63125 0 0 1.63125 0 3.625V25.375C0 27.3687 1.63125 29 3.625 29H31.7188C33.2594 29 34.4375 27.8219 34.4375 26.2812V7.25C34.4375 5.25625 32.8063 3.625 30.8125 3.625Z" fill="#737581" />
                                                                <path d="M34.6188 9.0625H10.2406C8.51875 9.0625 6.97812 10.3312 6.70625 12.0531L3.625 29H32.3531C34.075 29 35.6156 27.7313 35.8875 26.0094L38.1531 13.3219C38.6062 11.1469 36.8844 9.0625 34.6188 9.0625Z" fill="#E1E1E1" />
                                                        </svg>
                                                </button>
                                        ) : (
                                                <div className="cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
                                                                <path d="M12.5 2H4.1C3.54305 2 3.0089 2.22125 2.61508 2.61508C2.22125 3.0089 2 3.54305 2 4.1V20.9C2 21.457 2.22125 21.9911 2.61508 22.3849C3.0089 22.7787 3.54305 23 4.1 23H16.7C17.257 23 17.7911 22.7787 18.1849 22.3849C18.5787 21.9911 18.8 21.457 18.8 20.9V8.3L12.5 2Z" stroke="#737581" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8.60979 15.2713H6.19995V11.8287H8.60979" stroke="#737581" stroke-width="0.688525" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8.60986 11.8287L12.0525 9.35004V17.75L8.60986 15.2713" stroke="#737581" stroke-width="0.688525" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M14.2556 15.6157C14.8064 15.0993 15.1507 14.3764 15.1507 13.5502C15.1507 12.7239 14.8064 12.001 14.2556 11.4846" stroke="#737581" stroke-width="0.688525" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M13.4294 14.4452C13.6704 14.2043 13.8426 13.8944 13.8426 13.5502C13.8426 13.2059 13.7049 12.8616 13.4294 12.6551" stroke="#737581" stroke-width="0.688525" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                </div>
                                        )}
                                {explorer.isFolder ? (
                                        <span onClick={() => setExpand(!expand)} className="cursor-pointer">{explorer.name}</span>
                                ) : (
                                        <span onClick={() => onFileClick(explorer)} className="cursor-pointer" >{explorer.name}</span>
                                )}
                        </div>
                        <div style={{ display: expand ? "block" : "none", paddingLeft: 15 }}>
                                {explorer.items?.map((explore) => (
                                        <FolderTree key={explore.name} explorer={explore} selectedFile={selectedFile} onFileClick={onFileClick} />
                                ))}
                        </div>
                </div>
        );
};

export default FolderTree;
