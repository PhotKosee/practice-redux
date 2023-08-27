import React from "react";
import MyButton from "./MyButton";
import DivPanel from "./DivPanel";

const MainPanel = () => {
    return (
        <div>
            This is the main panel <MyButton />
            <DivPanel />
        </div>
    );
};

export default MainPanel;