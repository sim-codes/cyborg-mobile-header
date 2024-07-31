'use client';

import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import audioIcon from '@/public/images/audio.svg';
import usersIcon from '@/public/images/users.svg';
import musicIcon from '@/public/images/music.svg';
import pdfIcon from '@/public/images/pdfIcon.svg';
import shareIcon from '@/public/images/share.svg'
import thumbnail from '@/public/images/videothumbnail.svg';
import { LoaderCircle, XCircle, Dot, ChevronDown, Clipboard, Copy, Share } from 'lucide-react';

export default function Page() {
    const [isUploading, setIsUploading] = useState(false);
    const [option, setOption] = useState('summary')
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
        <div className='px-5 py-14 w-full'>
            <div className="space-y-5 md:max-w-4xl md:mx-auto text-center">
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
                        <div className="flex flex-col items-center justify-center md:p-5 gap-2 my-3 w-full md:w-[640px] md:mx-auto">
                            <div className="flex gap-2 md:gap-5 lg::gap-10 items-center bg-[#FAFAFA] w-full rounded-md p-4">
                                <Image src={musicIcon} alt="Music icon" className='w-12 md:w-auto' />
                                { fileInfo &&
                                    <div className="flex justify-between items-center w-full">
                                        <p className="flex flex-col md:gap-2 justify-start text-left text-md md:text-2xl">
                                            <span className="font-bold">{truncateFileName(fileInfo.name)}</span>
                                            <span className="text-[#4B4B4B] font-normal flex items-center">
                                                {fileInfo.size}
                                                <Dot size={40} className='' />
                                            </span>
                                        </p>
                                        <button onClick={() => setFileInfo(null)}>
                                            <XCircle size={24} className='' />
                                        </button>
                                    </div>
                                }
                            </div>
                            <div className="text-[#4B4B4B] self-start my-5">
                                <p className="text-sm md:text-lg">Supported Summary Links:</p>
                                <div className="flex items-center gap-2 text-sm md:text-md">
                                    <Image src={pdfIcon} alt="Music icon" />
                                    <span>PDF Files</span>
                                </div>
                            </div>
                            <button
                                className={`p-3 md:w-[336px] rounded-lg border bg-[#F97316] text-white text-lg font-medium cursor-pointer`}
                            >
                                {isUploading ? (
                                    <div className='flex items-center justify-center gap-2'>
                                        <LoaderCircle size={24} className='animate-spin' />
                                        Summarizing
                                    </div>
                                ) : (<span className="">Regenerate Summary</span>)}
                            </button>
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

            { fileInfo &&
                <div className="space-y-10">
                    <div className="my-2 md:my-10 flex flex-col md:flex-row items-center justify-center gap-5">
                        <Image src={thumbnail} alt="audio icon" />
                        <div className="text-left space-y-2 md:space-y-5 text-md md:text-xl">
                            <h3 className='text-md md:text-2xl font-bold'>{truncateFileName(fileInfo.name)}</h3>
                            <div className="flex md:block justify-between items-start space-y-2 md:space-y-5">
                                <p>Author<span className='block font-bold'>Adi Purdila</span></p>
                                <p>Audio Length<span className='block font-bold'>03 mins 40 secs</span></p>
                            </div>

                            <div className="flex md:block justify-between items-start space-y-2 md:space-y-5">
                                <p>Estimated Read Time<span className='block font-bold'>04mins 30 secs</span></p>
                                <p>File Size<span className='block font-bold'>{fileInfo.size}</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#FAFAFA] p-2 md:p-8 rounded-md text-[#4B4B4B] md:mx-12 flex items-center justify-between">
                        <div className="flex items-center gap-2 bg-[#FDD4B7] p-2 rounded-md w-full md:w-auto justify-between">
                            <button
                            onClick={() => setOption('summary')}
                            className={`px-2 py-1.5 rounded-md w-full
                                ${option === 'summary' ? 'bg-[#F97316] text-white' : 'bg-transparent'}
                                `}
                            >Summary</button>
                            <button
                            onClick={() => setOption('transcript')}
                            className={`px-2 py-1.5 rounded-md w-full
                                ${option === 'transcript' ? 'bg-[#F97316] text-white' : 'bg-transparent'}
                                `}
                            >Transcript</button>
                        </div>

                        <div className="gap-2 items-center hidden md:flex">
                            <div className="text-[#F97316] flex items-center gap-1">
                                <Image src={shareIcon} alt="Share icon" />
                                Share
                            </div>
                            <button className='bg-[#F97316] text-white p-3 rounded-md'>Save Summary</button>
                        </div>
                    </div>

                    <div className='bg-[#FAFAFA] p-2 md:p-8 rounded-md text-[#4B4B4B] md:mx-12'>
                        <div className="flex justify-between items-center">
                            <button className='border border-[#CACACA] rounded-lg p-2 flex items-center my-2'>
                                Translate -EN
                                <ChevronDown size={22} className='' />
                            </button>

                            <Copy size={22} className='' />
                        </div>
                        {
                            option === 'summary' ? (
                                <>
                                    <p className='text-justify my-2 md:my-5'>
                                        This Audio summary dives into the world of sustainable architecture. It emphasizes the importance 
                                        of using recycled materials in construction, even showcasing buildings made from repurposed shipping containers! 
                                        Another interesting concept explored was living green walls, vertical gardens that not only enhance aesthetics but 
                                        also help purify the air. The video packs a punch with valuable information in a short timeframe, making it a great 
                                        resource for anyone interested in learning more about sustainable building practices.<br /><br />
                                        This Audio summary dives into the 
                                        world of sustainable architecture. It emphasizes the importance of using recycled materials in construction, even showcasing 
                                        buildings made from repurposed shipping containers! Another interesting concept explored was living green walls, vertical gardens 
                                        that not only enhance aesthetics but also help purify the air. The video packs a punch with valuable information in a short timeframe, 
                                        making it a great resource for anyone interested in learning more about sustainable building practices. This video summary dives into
                                    </p>
                                    <p className="text-right">1500 words</p>
                                </>
                            ) : (
                                <div>
                                    <div className="space-y-2 md:space-y-5 my-2 md:my-5">
                                        <p className='flex items-center gap-3 text-justify'>
                                            <span className='block'>00:30</span>
                                            Alright, guys, just finished watching this super interesting video on sustainable architecture. 
                                            Let&apos;s break it down! First up, the video highlighted the importance of using recycled materials in construction
                                        </p>
                                        <p className='flex items-center gap-3 text-justify'>
                                            <span className='block'>00:30</span>
                                            Alright, guys, just finished watching this super interesting video on sustainable architecture. 
                                            Let&apos;s break it down! First up, the video highlighted the importance of using recycled materials in construction
                                        </p>
                                        <p className='flex items-center gap-3 text-justify'>
                                            <span className='block'>00:30</span>
                                            Alright, guys, just finished watching this super interesting video on sustainable architecture. 
                                            Let&apos;s break it down! First up, the video highlighted the importance of using recycled materials in construction
                                        </p>
                                        <p className='flex items-center gap-3 text-justify'>
                                            <span className='block'>00:30</span>
                                            Alright, guys, just finished watching this super interesting video on sustainable architecture. 
                                            Let&apos;s break it down! First up, the video highlighted the importance of using recycled materials in construction
                                        </p>
                                        <p className='flex items-center gap-3 text-justify'>
                                            <span className='block'>00:30</span>
                                            Alright, guys, just finished watching this super interesting video on sustainable architecture. 
                                            Let&apos;s break it down! First up, the video highlighted the importance of using recycled materials in construction
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    )
}
