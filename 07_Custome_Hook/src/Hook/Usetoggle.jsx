import { useState } from "react";

function Usetoggle(defaultVal) {

    const [value, setValue] = useState(defaultVal);

    function ToggleValue() {
        setValue(!value);
    }

    function Hide() {
        setValue(false);
    }

    function Show() {
        setValue(true);
    }

    return [value, ToggleValue, Hide, Show];
}

export default Usetoggle;