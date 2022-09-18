import {myElementList} from "./data";
import {MyElement} from "../Element/MyElement";

export const contactInfoElementsRender = myElementList.contactInfo.map(item => {
    return (
        <MyElement key={item.id}
                   icon={item.icon}
                   type={item.type}
                   name={item.name}
                   description={item.description}
                   descriptionForInput={item.descriptionForInput}
                   placeholder={item.placeholder}
                   required={item.required}/>
    )
})

export const specialElementsRender = myElementList.special.map(item => {
    return (
        <MyElement
            key={item.id}
            icon={item.icon}
            type={item.type}
            name={item.name}
            description={item.description}
            descriptionForInput={item.descriptionForInput}
            placeholder={item.placeholder}
            required={item.required}/>)
})
