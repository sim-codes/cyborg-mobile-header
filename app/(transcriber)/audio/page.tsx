'use client';

import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import audioIcon from '@/public/images/audio.svg';
import usersIcon from '@/public/images/users.svg';
import musicIcon from '@/public/images/music.svg';

export default function Page() {
    const [isUploading, setIsUploading] = useState(false);
    const [fileInfo, setFileInfo] = useState<{ name: string; size: string } | null>(null);

    const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setIsUploading(true);
            setFileInfo({
                name: file.name,
                size: formatFileSize(file.size)
            });

            // Simulating file upload
            await new Promise(resolve => setTimeout(resolve, 2000));

            setIsUploading(false);
        }
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const truncateFileName = (name: string, maxLength: number = 20): string => {
        if (name.length <= maxLength) return name;
        return name.slice(0, maxLength - 3) + '...';
    };

    return (
        <div className='px-5 py-14 text-center space-y-5 md:max-w-4xl md:mx-auto'>
            <p className="text-3xl md:text-6xl font-bold">Transform your Audio into Text <span className="text-[#F97316]">with Ease!</span></p>
            <div className="text-xs space-y-2 md:space-y-5">
                <span className="block text-[#4B4B4B] md:text-lg font-medium">Accurate Transcriptions and Summaries at Your Fingertips</span>
                <div className="flex items-center justify-center gap-2">
                    <Image src={usersIcon} alt="users icon" />
                    <span className="block">Loved by 12,000 users</span>
                </div>
            </div>

            

            {
                fileInfo !== null ? (
                    <div className="flex flex-col items-center justify-center p-5 gap-2 my-3 md:min-w-[410px] md:mx-auto">
                        <div className="flex">
                            <Image src={musicIcon} alt="Music icon" />
                            { fileInfo &&
                                <p className="mt-2 flex flex-col justify-start">
                                    <span className="text-2xl font-bold">{truncateFileName(fileInfo.name)}</span>
                                    <span className="">({fileInfo.size})</span>
                                </p>
                            }
                        </div>
                        <input
                            type="file"
                            accept="audio/*,video/*"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="audioUpload"
                        />
                        <label
                            htmlFor="audioUpload"
                            className={`p-3 rounded-lg border ${isUploading ? 'bg-[#F97316] text-white' : 'border-[#F97316] text-[#F97316]'} text-2xl font-medium cursor-pointer`}
                        >
                            {isUploading ? 'Summarizing' : 'Choose File'}
                        </label>
                        
                    </div>
                ) : (
                    <div className="border-2 border-dashed border-[#CACACA] rounded-lg flex flex-col items-center justify-center p-5 gap-2 my-3 md:w-[410px] md:mx-auto">
                        <Image src={audioIcon} alt="audio icon" />
                        <span className="block text-2xl font-medium">Upload Audio file</span>
                        <span className="block text-[#CACACA]">(MP4, AVI, MOV, MKv, WMV)</span>
                        <input
                            type="file"
                            accept="audio/*,video/*"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="audioUpload"
                        />
                        <label
                            htmlFor="audioUpload"
                            className={`p-3 rounded-lg border border-[#F97316] text-[#F97316] text-2xl font-medium cursor-pointer`}
                        >
                            Choose File
                        </label>
                    </div>
                )
            }
        </div>
    )
}
