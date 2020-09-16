import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import './styles.css';

import warningIcon from '../../assets/images/icons/warning.svg';

export default function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Awesome! You want to give classes" 
                description="The first step is filling this form."
            />
            <main>
                <fieldset>
                    <legend>Your details</legend>
                    <Input name="name" label="Name" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biografy"/>  
                </fieldset>
                <fieldset>
                    <legend>About the Class</legend>
                    <Select 
                        name="subject" 
                        label="Subject"
                        options={[
                            { value: 'Arts', label: 'Arts' },
                            { value: 'Design', label: 'Design' },
                            { value: 'Math', label: 'Math' }
                        ]}
                    />
                    <Input name="price" label="Your Price per Hour" />
                </fieldset>

                <fieldset>
                    <legend>Availability</legend>
                    <button type="button">
                        + Add time
                    </button>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Warning Icon"/>
                    Important! <br />
                    Fill all the fields.
                    </p>
                    <button type="button">
                        Save
                    </button>
                </footer>

            </main>
        </div>
    )
}
