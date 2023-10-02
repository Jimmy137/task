import { useState, useRef } from "react";
import { Input, ConfigProvider} from 'antd'
import menu from '../../unorderedList.svg'

const Choice = ({plus, c, handleKey, isEditing, setEdits}: any) => {
    const [choice, setChoice] = useState(c.choice)
    const ref = useRef(null)

    const handle2 = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            if (isEditing) {
                setEdits(c.id, choice)
            }
        } 
        
    }
    return (
        <div className="choice-input" >
            <img src={menu} alt="menu" />
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
                <Input placeholder="Type here" ref={ref} value={choice} onKeyDown={handle2} onChange={(e) => setChoice((e.target as HTMLInputElement).value)}/>
            </ConfigProvider>
                    
                
        {plus && 
            <div className="add-container add-choice" onClick={() => handleKey(ref)}>
                <div className="plus-sign choice" >
                    <div className="vertical" ></div>
                    <div className="horizontal"></div>
                </div>
            </div>
        }   
        

        </div>
        
    )

}

export default Choice;