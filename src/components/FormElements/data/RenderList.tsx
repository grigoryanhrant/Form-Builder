import {myElementList} from "./data";
import {MyElement} from "../Element/MyElement";

export const basicElementsRender = myElementList.basicElements.map(item => {
    return <MyElement key={item.id} icon={item.icon} type={item.type} name={item.name} description={item.description} placeholder={item.description}/>
})
