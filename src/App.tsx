import {GlobalStyles} from "@global/styles/globalstyles.styled";
import {DefaultContainer} from "@components/common/container/container.styled";
import {Playground} from "./pages/Playground/Playground";
import {useDrop} from "react-dnd";

export const App = () => {

    const [, dropZone] = useDrop(() => ({accept: 'element',}));
    const [, dropZoneTwo] = useDrop(() => ({accept: 'dropped_element',}));

    return (
        <div ref={dropZone}>
            <GlobalStyles/>
            <div ref={dropZoneTwo}>
                <DefaultContainer ref={dropZoneTwo}>
                    <Playground/>
                </DefaultContainer>
            </div>
        </div>
    );
};
