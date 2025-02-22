import { createContext, useRef } from "react";

export const RefContext = createContext({});

// export const FilterProvider = ({ children }) => {
//     const [ref, setRef] = useState(null);

//     return (
//         <RefContext.Provider value={ref}>
//             {children}
//         </RefContext.Provider>
//     )
// }