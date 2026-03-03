import {createContext, useState, useEffect, useRef} from 'react';
import {useAuth} from './AuthContext.jsx';
import axios from 'axios';

import {API_BASE_URL} from './AuthContext.jsx';

export const PlayerContext = createContext();



export const PlayerContextProvider = ({children})=>{


    const [songsData,setSongsData] = useState([]);
    const [albumsData,setAlbumsData] = useState([]);
    const [track,setTrack] = useState(songsData[0]);
    const [playStatus,setPlayStatus] = useState(false);
    const [time,setTime]=useState({
        currentTime:{
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    });

    const {user,token, getAuthHeaders} = useAuth();
    

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const play = ()=>{

    }

    const pause = ()=>{

    }

    const playWithId = ()=>{

    }

    const previous = async ()=>{

    }

    const next = async ()=>{

    }

    const seeKSong = async ()=>{

    }

    
    

    const getSongsData = async ()=>{
        try{
            const response = await axios.get(`${API_BASE_URL}/api/songs`,{headers: getAuthHeaders()});
            const songs = response.data.songs || [];
            
            setSongsData(songs);
            if(songs.length>0){
                setTrack(songs[0]);
            }
        }catch(error){
            console.error(error);
            setSongsData([]);
        }
    }

    const getAlbumsData = async ()=>{
        try{
            const response = await axios.get(`${API_BASE_URL}/api/albums`,{headers: getAuthHeaders()});
            const albums = response.data.albums || [];
            setAlbumsData(albums);
        }catch(error){
            console.error(error);
            setAlbumsData([]);
        }
    }

    
    const contextValue={
        getSongsData,
        getAlbumsData,
        songsData,
        albumsData,
        audioRef,seekBar,seekBg,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause,playWithId,previous,next,seeKSong
    }

    useEffect(()=>{
        if(user && token){
            getAlbumsData();
            getSongsData();
        }

    },[user, token]);

    // setup audio event listeners
    useEffect(()=>{
        const audio = audioRef.current;
        if(!audio) return;

        const updateSeekBar =()=>{
            if(seekBar.current && audio.duration){
                const progress = (audio.currentTime / audio.duration)*100;
                seekBar.current.style.width = Math.floor(progress) + "%";
                setTime({
                    currentTime:{
                        second: Math.floor(audio.currentTime %60),
                        minute: Math.floor(audio.currentTime /60)
                    },
                    totalTime:{
                        second: Math.floor(audio.duration %60),
                        minute: Math.floor(audio.duration /60),
                    }
                });
            }
        };
    })


    return(
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    )
}