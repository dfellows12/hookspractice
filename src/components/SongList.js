import React, { useEffect, useState }  from 'react';
import uuid from 'uuid/v1' 
import NewSongForm from './NewSongForm';


const SongList = () => {
    const [songs, setSongs] =  useState([
        { title: 'boop', id: 1 },
        { title: 'boop', id: 2 },
        { title: 'bodoop', id: 3}
    ])

    const [age, setAge] = useState(20);
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid()}])
    }

    useEffect(() => {
        console.log('rerender songs')
    }, [songs])
    useEffect(() => {
        console.log('rerender age')
    }, [setAge])
    return ( 
        <div className={"song-list"}>
            <ul>
                {songs.map(song => {
                return ( <li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={() => {setAge(age + 1)}}>Add one to age: {age}</button>
        </div>
     );
}
 
export default SongList;