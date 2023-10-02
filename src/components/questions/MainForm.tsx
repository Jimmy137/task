import { useState, useContext, useEffect } from "react";
import {
    Select,
    ConfigProvider,
    Input,
    Checkbox,
    DatePicker,
    Space,
    InputNumber,
    message,
    Button,
    Upload } from 'antd'
import type { UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


import {v4 as uuid} from 'uuid'

import { AddContext } from "../../providers/AddQusetionsContext";
import Choice from "./Choice";
import '../../App.css'

const { TextArea } = Input;

const props: UploadProps = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

const MainForm = ({keyy, setIsAdding}: any) => {
    console.log(keyy)
    const types = [
        "Paragraph" 
        ,"Short answer"
        ,"Yes/No"
        ,"Dropdown"
        ,"Multiple choice"
        ,"Date"
        ,"Number"
        ,"File upload"
        ,"Video question"
        
    ]
    const valueTypes = [
        "Paragraph" 
        ,"ShortAnswer"
        ,"YesNo"
        ,"Dropdown"
        ,"MultipleChoice"
        ,"Date"
        ,"Number"
        ,"FileUpload"
        ,"VideoQuestion"
        
    ]

    const [
        addPersonal, 
        personalQuestions, 
        addProfile, 
        profileQuestions, 
        addCustomized, 
        customizedQuestions
    ] = useContext(AddContext)


    

    const handleKey = (r: any)=> {
        setDChoices([...dChoices, {id: uuid(),isEditig: false, choice: r.current.input.value}])
        r.current.input.value = ''
    }

    const handleKey2 = (r: any)=> {
        setMChoices([...mChoices, {id: uuid(),isEditig: false, choice: r.current.input.value}])
        r.current.input.value = ''
    }

    const submitEdited = (id: any, name: string) => {        
        setDChoices(dChoices.map((choicee: any)=> (
            choicee.id === id ? {...choicee, choice : name, isEditing : false} : choicee
        )))
    }

    const submitEdited2 = (id: any, name: string) => {        
        setMChoices(mChoices.map((choicee: any)=> (
            choicee.id === id ? {...choicee, choice : name, isEditing : false} : choicee
        )))
    }

    const handleDelete = () => {
        setIsAdding(false)
        setQues('')
        setMChoices([])
        setDChoices([])
        setMOther(false)
        setDOther(false)
        setDisq(false)
    }

    const handleSave = () => {
        switch (keyy) {
            case "personal":
                if (type === "MultipleChoice") {
                    addPersonal(
                        type,
                        ques,
                        [...mChoices],
                        1,
                        false,
                        mOther)
                } else if (type === "Dropdown") {
                    addPersonal(
                        type,
                        ques,
                        [...dChoices],
                        1,
                        false,
                        dOther)
                } else if (type === "YesNo") {
                    addPersonal(
                        type,
                        ques,
                        [],
                        0,
                        disq,
                        false)
                } else {
                    addPersonal(
                        type,
                        ques,
                        [],
                        0,
                        false,
                        false)
                }
                
                break;
            case "profile":
                if (type === "MultipleChoice") {
                    addProfile(
                        type,
                        ques,
                        [...mChoices],
                        1,
                        false,
                        mOther)
                } else if (type === "Dropdown") {
                    addProfile(
                        type,
                        ques,
                        [...dChoices],
                        1,
                        false,
                        dOther)
                } else if (type === "YesNo") {
                    addProfile(
                        type,
                        ques,
                        [],
                        0,
                        disq,
                        false)
                } else {
                    addProfile(
                        type,
                        ques,
                        [],
                        0,
                        false,
                        false)
                }
                
                break;
            case "customised":
                if (type === "MultipleChoice") {
                    addCustomized(
                        type,
                        ques,
                        [...mChoices],
                        1,
                        false,
                        mOther)
                } else if (type === "Dropdown") {
                    addCustomized(
                        type,
                        ques,
                        [...dChoices],
                        1,
                        false,
                        dOther)
                } else if (type === "YesNo") {
                    addCustomized(
                        type,
                        ques,
                        [],
                        0,
                        disq,
                        false)
                } else {
                    addCustomized(
                        type,
                        ques,
                        [],
                        0,
                        false,
                        false)
                }
                
                break;
        }
        setIsAdding(false)
        console.log(personalQuestions)
    }

    const setContent = (t:string) => {
        switch(t) {
            case "Paragraph" :
                return
            case "ShortAnswer":
                return
            case "Date":
                return
            case "Number":
                return
            case "YesNo":
                return (
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
                        <Checkbox checked={disq} onChange={()=> setDisq(!disq)}> 
                            <span className='disq'>Disqualify candidates if answer is no.</span>
                        </Checkbox>
                    </ConfigProvider>
                )
            case 'Dropdown':
                return (
                    <div className="field">
                        <div className="label">Choice</div>
                        {   dChoices.length > 0 &&
                            dChoices.map((c, i)=> (
                                <Choice key={`${c} - ${i}`} plus={false} c={c} handleKey={handleKey} isEditing= {true} setEdits = {submitEdited}/>
                            ))
                        }   
                        <Choice plus={true} c={{choice: ''}} handleKey={handleKey} isEditing={false}/>  
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
                            <Checkbox checked={dOther} onChange={()=> setDOther(!dOther)}> 
                                <span className='disq'>Enable “Other” option </span>
                            </Checkbox>
                        </ConfigProvider>  
                    </div>
                )
            case 'MultipleChoice':
                return (
                    <div className="field">
                        <div className="label">Choice</div>
                        {   mChoices.length > 0 &&
                            mChoices.map((c, i)=> (
                                <Choice key={`${c} - ${i}`} plus={false} c={c} handleKey={handleKey2} isEditing= {true} setEdits = {submitEdited2}/>
                            ))
                        }       
                        <Choice plus={true} c={{choice: ''}} handleKey={handleKey2} isEditing={false}/>    
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
                            <Checkbox checked={mOther} onChange={()=> setMOther(!mOther)}> 
                                <span className='disq'>Enable “Other” option </span>
                            </Checkbox>
                        </ConfigProvider>
                    </div>
                )

                case 'FileUpload':
                    return (
                        <div className="field">
                            <Upload {...props}>
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                        </div>
                    )
                case 'VideoQuestion':
                    return (
                        <div className="field">
                            <div className="video">
                                    <ConfigProvider
                                    theme={{
                                    token: {
                                        // Seed Token
                                        colorPrimary: '#9C4DE2',
                                        borderRadius: 5,
                                        size: 3,
                                        fontFamily: 'Poppins',
                                    },
                                    }}
                                >

                                    <TextArea rows={4} placeholder="Description" style={{
                                        width: 540, fontSize: 15
                                    }}/>
                                    <div className="row">
                                        <InputNumber size="large"  min={1} placeholder="Max duration of video"/>
                                        <Select 
                                            showSearch
                                            placeholder="in (sec/min)"
                                            onChange={(v)=> setType(v)}
                                            size="large"
                                            style={{ width: 200}}
                                            options={[
                                                {
                                                    value: 'seconds',
                                                    label: 'Seconds'
                                                },
                                                {
                                                    value: 'minutes',
                                                    label: 'Minutes'
                                                }
                                            ]}/>
                                    </div>
                                    
                                    
                                    </ConfigProvider>
                            </div>
                            
                        </div>
                    )
        }
    }

    const [type, setType] = useState('')
    const [ques, setQues] = useState('')
    const [mChoices, setMChoices] = useState<Array <Object>>([])
    const [dChoices, setDChoices] = useState<Array <Object>>([])
    
    const [mOther, setMOther] = useState(false)
    const [dOther, setDOther] = useState(false) 
    const [disq, setDisq] = useState(false)

    // "Paragraph" 
    //     ,"ShortAnswer"
    //     ,"YesNo"
    //     ,"Dropdown"
    //     ,"MultipleChoice"
    //     ,"Date"
    //     ,"Number"
    //     ,"FileUpload"
    //     ,"VideoQuestion"
    


    return(
        <div className="formContainer formQuestion">
            <div className='formTitle'>
                Questions
            </div>
            
            <div className="fields">
                <div className="field">
                    <div className="label">Type</div>
                    <ConfigProvider
                        theme={{
                        token: {
                            // Seed Token
                            colorPrimary: '#9C4DE2',
                            borderRadius: 2,
                            size: 3,
                            fontFamily: 'Poppins',
                        },
                        }}
                    >
                        <Select 
                            showSearch
                            placeholder="Select a question type"
                            onChange={(v)=> setType(v)}
                            style={{ width: 542, textAlign: "left"}}
                            size="large"
                            options={
                                types.map((t:string, i: number) => (
                                    {
                                        value: valueTypes[i],
                                        label: t
                                    }
                                ))
                        }/>
                        
                    </ConfigProvider>
                    
                </div>
                <div className="field">
                    <div className="label">Question</div>
                    <ConfigProvider
                        theme={{
                        token: {
                            // Seed Token
                            colorPrimary: '#9C4DE2',
                            borderRadius: 2,
                            size: 3,
                            fontFamily: 'Poppins',
                        },
                        }}
                    >
                        <Input size="large" placeholder="Type here" value={ques} onChange={
                            (e) => setQues(e.target.value)
                        }/>
                    </ConfigProvider>
                </div>

                <div className="dinamic">
                        {setContent(type)}
                </div>

                <div className="bottom">
                    <>
                        <div className="add-container delete" onClick={handleDelete}>
                            <div className="plus-sign delete-sign">
                                <div className="vertical" ></div>
                                <div className="horizontal"></div>
                            </div>
                            <div className="add-text">
                                Delete question
                            </div>
                        </div>
                    </>
                    <div className="save">
                        <button onClick={handleSave}>Save</button>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export default MainForm