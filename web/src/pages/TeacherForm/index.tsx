import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import './styles.css';

import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';

export default function TeacherForm() {
    const history = useHistory();

    const [ name, setName ] = useState('');
    const [ avatar, setAvatar ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ bio, setBio ] = useState('');

    const [ subject, setSubject ] = useState('');
    const [ price, setPrice ] = useState('');
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: ''}
    ]);

    function addNewScheduleitem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: ''}
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }
            return scheduleItem;
        });
        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            price: Number(price),
            schedule: scheduleItems
        }).then(() => {
            alert("Success!");
            history.push('/');
        }).catch(() => {
            alert("Error!");
        });
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Awesome! You want to give classes" 
                description="The first step is filling this form."
            />
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Your details</legend>
                        <Input name="name" label="Name" value={name} onChange={(e) => { setName(e.target.value) }} />                        
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => { setAvatar(e.target.value) }} />
                        <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }}/>
                        <Textarea name="bio" label="Biografy" value={bio} onChange={(e) => { setBio(e.target.value) }}/>  
                    </fieldset>
                    <fieldset>
                        <legend>About the Class</legend>
                        <Select 
                            name="subject" 
                            label="Subject"
                            value={subject}
                            onChange={ (e) => {setSubject(e.target.value)} }
                            options={[
                                { value: 'Arts', label: 'Arts' },
                                { value: 'Design', label: 'Design' },
                                { value: 'Math', label: 'Math' }
                            ]}
                        />
                        <Input name="price" label="Your Price per Hour" value={price} onChange={ (e) => {setPrice(e.target.value)} }/>
                    </fieldset>

                    <fieldset>
                        <legend>
                            Availability
                            <button type="button" onClick={addNewScheduleitem}>
                                + Add class time
                            </button>
                        </legend>
                        
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div className="schedule-item" key={scheduleItem.week_day}>
                                <Select 
                                    name="week_day" 
                                    label="Week Day"
                                    value={scheduleItem.week_day}
                                    onChange={e => setScheduleItemValue(index , 'week_day', e.target.value)}
                                    options={[
                                        { value: '0', label: 'Sunday' },
                                        { value: '1', label: 'Monday' },
                                        { value: '2', label: 'Tuesday' },
                                        { value: '3', label: 'Wednesday' },
                                        { value: '4', label: 'Thursday' },
                                        { value: '5', label: 'Friday' },
                                        { value: '6', label: 'Saturday' }
                                    ]}
                                />
                                <Input 
                                    name="from" 
                                    label="From" 
                                    type="time"
                                    value={scheduleItem.from}
                                    onChange={e => setScheduleItemValue(index , 'from', e.target.value)}
                                />
                                <Input 
                                    name="to" 
                                    label="To" 
                                    type="time"
                                    value={scheduleItem.to}
                                    onChange={e => setScheduleItemValue(index , 'to', e.target.value)}
                                />
                            </div>
                            )
                        })}


                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Warning Icon"/>
                        Important! <br />
                        Fill all the fields.
                        </p>
                        <button type="submit">
                            Save
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}
