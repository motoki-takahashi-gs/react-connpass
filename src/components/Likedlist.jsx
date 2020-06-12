import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const LikedList = props => {
    const [likedEvent, setLikedEvent] = useState(null);

    const getLikedFromFirestore = async () => {
        const likedListArray = await firebase.firestore().collection('liked')
            .orderBy('date').get();
        const likedArray = likedListArray.docs.map(x => {
            return {
                id: x.id,
                data: x.data(),
            }
        })
        setLikedEvent(likedArray);
        return likedArray;
    }

    useEffect(() => {
        const result = getLikedFromFirestore();
    }, [props])

    return (
        <div className='liked'>
            <ul>
                {
                    likedEvent?.map((x, index) =>
                        <li key={index} id={x.id}>
                            <div><a href={x.data.url} target='_blank'>{x.data.name}</a></div>
                            <div>{x.data.date}</div>
                            <div>{x.data.time}</div>
                            <div>{x.data.place}</div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}
export default LikedList;