import { createContext, ReactNode, useContext, useState } from 'react';
import {ProductProps} from "@/pages/product/[id]";

type DataContextType = {
    data: ProductProps[]
    setData: (value: ProductProps[]) => void;
    addProductToCart (value: ProductProps): void;
    handleCartDetails(value: boolean): void;
    showCartDetails:boolean;
};

const DataContext = createContext<DataContextType | undefined>(undefined);



export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<ProductProps[]>([]);
    const [showCartDetails, setShowCartDetails] = useState(false);


    const addProductToCart = (item: ProductProps) => {
        setData((prevData) => [...prevData, item]);
    };

    const handleCartDetails = (state:boolean)=> {
        console.log("handleCartDetails" + state);
        console.log("showCartDetails" + showCartDetails)
        setShowCartDetails(state)
    }

    return (
        <DataContext.Provider value={{ data, setData, addProductToCart,  handleCartDetails, showCartDetails

        }}>
            {children}
        </DataContext.Provider>
    );
};



export const useData = (): DataContextType => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
