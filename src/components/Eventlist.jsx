import React, { useState, useEffect } from 'react';
import Vote from './Vote';

const Eventlist = props => {

    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setEventData(response));
    }, [props]);

    console.log(eventData);

    return (
        <div className='main'>
            <ul>
                {
                    eventData === null
                        ? <p>now loading...</p>
                        : eventData.data.events.map((x, index) =>
                            new Date().toISOString() > x.started_at
                                ? ""
                                : <li key={index}>
                                    <div>
                                        <a href={x.event_url} target="_blank">{x.title}</a>
                                    </div>
                                    <div>開催日：{x.started_at.split('T')[0].replace(/-/g, '/')}</div>
                                    <div>時間：{
                                        x.started_at.split('T')[1].split('+')[0].slice(0, 5)
                                    } 〜 {
                                            x.ended_at.split('T')[1].split('+')[0].slice(0, 5)
                                        }</div>
                                    <div>場所：{
                                        x.address === ''
                                            ? 'オンライン'
                                            : x.address
                                    }</div>
                                    <div>定員：{
                                        x.limit === null
                                            ? '制限無し'
                                            : x.limit + '人'
                                    }</div>
                                    <div>参加者数：{x.accepted}人</div>
                                    {
                                        x.waiting > 0
                                            ? <div>キャンセル待ち数：{x.waiting}人</div>
                                            : <div></div>
                                    }
                                    <Vote />
                                </li>
                        )
                }
            </ul>
        </div>
    );
}

export default Eventlist;