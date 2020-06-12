import React, { useState } from 'react';
import firebase from '../firebase';
import Button from 'react-bootstrap/Button';

const Vote = () => {
    // const [date, setDate] = useState('');
    // const [name, setName] = useState('');
    // const [place, setPlace] = useState('');
    // const [time, setTime] = useState('');
    // const [url, setUrl] = useState('');

    const postDataToFirestore = async (collectionName, postData) => {
        const addedData = await firebase.firestore().collection(collectionName).add(postData);
        return addedData;
    }

    const submitData = async (e) => {
        const parentElem = e.target.parentElement.parentElement;
        const postData = {
            date: parentElem.getElementsByTagName('div')[1].textContent,
            name: parentElem.getElementsByTagName('a')[0].textContent,
            place: parentElem.getElementsByTagName('div')[3].textContent,
            time: parentElem.getElementsByTagName('div')[2].textContent,
            url: parentElem.getElementsByTagName('a')[0].getAttribute('href'),
        }
        const addedData = await postDataToFirestore('liked', postData);

        parentElem.getElementsByTagName('button')[0].textContent = '「いいね」しました';
    }

    return (
        <div className='vote'>
            <Button onClick={submitData} variant='primary'>いいね</Button>
        </div>
    );
}

export default Vote;