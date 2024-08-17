import { createGlobalStyle } from "styled-components";
import {cores} from "
"
export const cores = {
    primaria:'red',
    secundaria:'blue',
    padrao:'black'
}

const EstiloGlobal = createGlobalStyle`
    *{ 
        font-family: sans-serif;
        color: ${cores.primaria}
    }
`

export default EstiloGlobal