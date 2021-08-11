import React,{useState} from 'react'
import '../Styles/Form.css'
/*

    form properties:
        labelClass
        inputClass
        selectClass
        btnName:
        elements:[
            {
                type:
                element:
                default://optional if select
            }
        ]
        options:{
            value:
            description:
        }

*/
export function RenderOptions(options){
    return options.map((e)=>{
        return <option value={e.value}>{e.description}</option>
    })
}
export default function Form(props) {
    const [isDisabled, setisDisabled] = useState(false)
    
    function RenderFormElements(){
        return props.elements?.map((e)=>{
            switch (e.element) {
                default:
                case "input":
                    return(<>
                        <label className={props.labelClass??null}>{e.label}</label>
                        <input className={props.inputClass??null} type={e.type} placeholder={e.placeholder}/>
                    </>)    
                    
                case "select":
                    return(
                        <>
                            <label className={props.labelClass??null}>{e.label}</label>
                            <select className={props.selectClass??null} defaultValue={e.default}>
                                {RenderOptions()}
                            </select>
                        </>
                    )
            }
        })
    }
    return (
        <form onSubmit={(e)=>props.Submit(e,setisDisabled)}>
            {RenderFormElements()}
            <button type="submit" disabled={isDisabled}>{props.btnName}</button>
        </form>
    )
}
