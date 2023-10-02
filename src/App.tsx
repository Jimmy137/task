import './App.css';
import {useEffect, useState, useContext} from 'react'
import {Switch, Checkbox, ConfigProvider } from 'antd';

import { AddContext } from './providers/AddQusetionsContext';
import MainForm from './components/questions/MainForm';


const AddQuestionDiv = ({onClick}: any) => {
    return (
        <div className="add-container" onClick={onClick}>
            <div className="plus-sign" style={{width: 23.79, height: 28}}>
                <div className="vertical" ></div>
                <div className="horizontal"></div>
            </div>
            <div className="add-text">
                Add a question
            </div>
        </div>
        
    )
}


const JustText = (props: {name: string}) => {
  return (
    <div className='field'>
        <div className='title'>{props.name}</div>
        <div className="line23" ></div>
    </div>
    
  )
}

const InpText = (props : {name: string, idx: number, onChange: Function}) => {

    const [state, setState] = useState({internalUse: false, show: true})
    const [anotherState, setAnotherState] = useState({mandatory: true, show: true})

    useEffect(()=>{
        switch (props.idx) {
            case 0:
                props.onChange((prevState: any) => (
                    {...prevState, phoneNumber: state}
                ))
                break;
            case 1:
                props.onChange((prevState: any) => (
                    {...prevState, nationality: state}
                ))
                break;
            case 2:
                props.onChange((prevState: any) => (
                    {...prevState, currentResidence: state}
                ))
                break;
            case 3:
                props.onChange((prevState: any) => (
                    {...prevState, idNumber: state}
                ))
                break;
            case 4:
                props.onChange((prevState: any) => (
                    {...prevState, dateOfBirth: state}
                ))
                break;
            case 5:
                props.onChange((prevState: any) => (
                    {...prevState, gender: state}
                ))
                break;
            
        }
    },[state])

    useEffect(()=>{
        switch (props.idx) {
            case 6:
                props.onChange((prevState: any) => (
                    {...prevState, education: anotherState}
                ))
                break;
            case 7:
                props.onChange((prevState: any) => (
                    {...prevState, experience: anotherState}
                ))
                break;
            case 8:
                props.onChange((prevState: any) => (
                    {...prevState, resume: anotherState}
                ))
                break;
        }
    }, [anotherState])
    return (
        <div className='field'>
            
            <div className="content">
                
                <div className='title'>
                    {props.name}
                    {props.name === 'Phone' && 
                        <span className='small'>  (without dial code)</span>
                    }
                </div>
                
                <div className="form-inputs">
                    <ConfigProvider
                        theme={{
                        token: {
                            // Seed Token
                            colorPrimary: '#00b96b',
                            borderRadius: 2,
                            size: 3,
                            fontFamily: 'Poppins',
                        },
                        }}
                    >
                        {props.idx > 5 ? 
                            <>
                                <Checkbox 
                                    checked={anotherState.mandatory} 
                                    onChange={()=> setAnotherState({...anotherState, mandatory: !anotherState.mandatory})}
                                >
                                    <span className='internal'>
                                        Mandatory
                                    </span>
                                </Checkbox>
                                <Switch checked={!anotherState.show} onChange={()=> setAnotherState({...anotherState, show: !anotherState.show})}/>
                                <span className='hide'>Hide</span>
                            </>
                            :
                            <>
                                <Checkbox 
                                    checked={state.internalUse} 
                                    onChange={()=> setState({...state, internalUse: !state.internalUse})}
                                >
                                    <span className='internal'>
                                        Internal
                                    </span>
                                </Checkbox>
                                <Switch checked={!state.show} onChange={()=> setState({...state, show: !state.show})}/>
                                <span className='hide'>Hide</span>
                            </>
                        
                        }

                    </ConfigProvider>

                </div>
                
                
            </div>
            {(props.name !== 'Gender' && props.name !== 'Resume') && <div className="line23" ></div>}
           
        </div>
    )
}



function App() {
    
    const att = {
        firstName: {
            internalUse: false,
            show: true
        },
        lastName: {
            internalUse: false,
            show: true
        },
        emailId: {
            internalUse: false,
            show: true
        },
        phoneNumber: {
            internalUse: false,
            show: true
        },
        nationality: {
            internalUse: false,
            show: true
        },
        currentResidence: {
            internalUse: false,
            show: true
        },
        idNumber: {
            internalUse: false,
            show: true
        },
        dateOfBirth: {
            internalUse: false,
            show: true
        },
        gender: {
            internalUse: false,
            show: true
        }
    }

    const profileObj = {
        education: {
            mandatory: true,
            show: true
        },
        experience: {
            mandatory: true,
            show: true
        },
        resume: {
            mandatory: true,
            show: true
        }
    }
    const [personalInformation, setPersonalInformation] = useState(att)
    const [profile, setProfile] = useState(profileObj)

    const [isAddingPersonal, setIsAddingPersonal] = useState(false)
    const [isAddingProfile, setIsAddingProfile] = useState(false)
    const [isAddingCustomized, setIsAddingCustomized] = useState(false)

    const [
        addPersonal, 
        personalQuestions, 
        addProfile, 
        profileQuestions, 
        addCustomized, 
        customizedQuestions
    ] = useContext(AddContext)

    const justText = ['First Name', 'Last Name', 'Email']
    // In the figma design 'Email' field has a typo, it's represented as 'Emai'
    const inpText = ['Phone', 'Nationality', 'Current Residence', 'ID Number', 'Date of Birth', 'Gender']  
    const inpText2 = ['Education', 'Experience', 'Resume']  

    useEffect(()=>{
        console.log(personalInformation)
    },[personalInformation])

    useEffect(()=>{
        console.log(profile)
    },[profile])
    return (
        <div className="App">

            <div className="formContainer">
                <div className='formTitle'>
                    Upload cover image
                </div>
                <div className="upload-content">
                    <div className="upload-wrapper">
                        <label htmlFor="file-upload" className="custom-file-upload">
                            <input id="file-upload" type="file"/>
                        </label>
                        <div className='upload-label'>Upload cover image</div>
                        <div className='upload-msg'>16:9 ratio is recommended. Max image size 1mb</div>
                    </div>
                </div>
                
            </div>

            <div className='formContainer'>
                <div className='formTitle'>
                    Personal Information
                </div>
                <div className="fields">
                    
                    {justText.map((item:string):any => <JustText name={item} />)}
                    {inpText.map((item:string, i:number):any => 
                    
                    <InpText 
                        name={item} 
                        idx={i} 
                        onChange={setPersonalInformation}
                    />)}                
                    
                </div>
                <div className="fields">
                
                    {personalQuestions.map(
                        (q: any) => (
                            <div className="question">
                                <div className="name">
                                    {q.question}
                                </div>
                                
                                <small>{q.type}</small>
                                
                            </div>
                        )
                    )}
                    <div className="line23" ></div>
                </div>
                <AddQuestionDiv onClick={()=> setIsAddingPersonal(true)}/>
            </div>

            { isAddingPersonal && <MainForm keyy='personal' setIsAdding = {setIsAddingPersonal}/>}

            <div className='formContainer'>
                <div className='formTitle'>
                    Profile
                </div>
                <div className="fields">
                    {inpText2.map((item:string, i:number):any => 
                    
                        <InpText 
                            name={item} 
                            idx={i+6} 
                            onChange={setProfile}
                        />)
                    }                
                    
                </div>
                <div className="fields">
                
                    {profileQuestions.map(
                        (q: any) => (
                            <div className="question">
                                <div className="name">
                                    {q.question}
                                </div>
                                
                                <small>{q.type}</small>
                                
                            </div>
                        )
                    )}
                    <div className="line23" ></div>
                </div>
                <AddQuestionDiv onClick={()=> setIsAddingProfile(true)}/>
            </div>
            { isAddingProfile && <MainForm keyy='profile' setIsAdding = {setIsAddingProfile}/>}


            <div className='formContainer'>
                <div className='formTitle'>
                    Additional Questions
                </div>
                <div className="fields">
                
                    {customizedQuestions.map(
                        (q: any) => (
                            <div className="question">
                                <div className="name">
                                    {q.question}
                                </div>
                                
                                <small>{q.type}</small>
                                
                            </div>
                        )
                    )}
                    <div className="line23" ></div>
                </div>
                
                <AddQuestionDiv onClick={()=> setIsAddingCustomized(true)}/>
                
            </div>
            
            { isAddingCustomized && <MainForm keyy='customised' setIsAdding = {setIsAddingCustomized}/>}
        </div>
    );
    }
    interface Data {
    "data": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "applicationForm",
        "attributes": {
            "coverImage": "http://example.com",
            "personalInformation": {
                "firstName": {
                    "internalUse": false,
                    "show": true
                },
                "lastName": {
                    "internalUse": false,
                    "show": true
                },
                "emailId": {
                    "internalUse": false,
                    "show": true
                },
                "phoneNumber": {
                    "internalUse": false,
                    "show": true
                },
                "nationality": {
                    "internalUse": false,
                    "show": true
                },
                "currentResidence": {
                    "internalUse": false,
                    "show": true
                },
                "idNumber": {
                    "internalUse": false,
                    "show": true
                },
                "dateOfBirth": {
                    "internalUse": false,
                    "show": true
                },
                "gender": {
                    "internalUse": false,
                    "show": true
                },
                "personalQuestions": [
                    {
                        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                        "type": "Paragraph",
                        "question": "string",
                        "choices": [
                            "string"
                        ],
                        "maxChoice": 0,
                        "disqualify": false,
                        "other": false
                    }
                ]
            },
            "profile": {
                "education": {
                    "mandatory": true,
                    "show": true
                },
                "experience": {
                    "mandatory": true,
                    "show": true
                },
                "resume": {
                    "mandatory": true,
                    "show": true
                },
                "profileQuestions": [
                    {
                        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                        "type": "Paragraph",
                        "question": "string",
                        "choices": [
                            "string"
                        ],
                        "maxChoice": 0,
                        "disqualify": false,
                        "other": false
                    }
                ]
            },
            "customisedQuestions": [
                {
                    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
                    "type": "Paragraph",
                    "question": "string",
                    "choices": [
                        "string"
                    ],
                    "maxChoice": 0,
                    "disqualify": false,
                    "other": false
                }
            ]
        }
}
}
export default App;
