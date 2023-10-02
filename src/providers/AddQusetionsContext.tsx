import { createContext, useState } from "react";

type FunctionOrObject = Function | object[];

type ThreeFunctionsThreeObjectsArray = [
  Function,
  object,
  Function,
  object,
  Function,
  object
];

export const AddContext = createContext<ThreeFunctionsThreeObjectsArray | any>(undefined)


export function AddProvider ({children}: any) {
    
    const [personalQuestions, setPersonalQuestions] = useState<Array <Object>>([])
    const [profileQuestions, setProfileQuestions] = useState<Array <Object>>([])
    const [customizedQuestions, setCustomizedQuestions] = useState<Array <Object>>([])

    const addPersonal:Function = (
         type: string,
         q: string, 
         choices: [],
         maxChoice: Number, 
         disqualify: boolean, 
         other: boolean
         ) => {

        setPersonalQuestions([...personalQuestions, {
            id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            type: type,
            question: q,
            choices: [...choices],
            maxChoice: maxChoice,
            disqualify: disqualify,
            other: other

        }])
    }

    const addProfile = (
        type: string,
        q: string, choices: [],
        maxChoice: Number, 
        disqualify: boolean, 
        other: boolean
        ) => {

       setProfileQuestions([...profileQuestions, {
           id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
           type: type,
           question: q,
           choices: [...choices],
           maxChoice: maxChoice,
           disqualify: disqualify,
           other: other

       }])
   }

   const addCustomized = (
        type: string,
        q: string, choices: [],
        maxChoice: Number, 
        disqualify: boolean, 
        other: boolean
        ) => {

        setCustomizedQuestions([...customizedQuestions, {
            id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            type: type,
            question: q,
            choices: [...choices],
            maxChoice: maxChoice,
            disqualify: disqualify,
            other: other

        }])
    }

    
    return (
        <>
            <AddContext.Provider value={[
                addPersonal,
                personalQuestions, 
                addProfile,
                profileQuestions, 
                addCustomized, 
                customizedQuestions]} 
            >
                {children}
            </AddContext.Provider>
        </>
    )
}

export default AddProvider;