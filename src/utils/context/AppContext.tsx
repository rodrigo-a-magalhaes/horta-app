import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../services/api";

interface AppProviderProps {
  children: ReactNode;
}

export interface ProducerProps {
  id: number;
  thumb: string;
  name: string;
  description: string;
  category: string;
}

export interface ProductProps {
  id: number;
  ref_id: number;
  thumb: string;
  name: string;
  description: string;
  price: string;
}

interface AppContextData {
  producers: ProducerProps[],
  producer: ProducerProps,
  products: ProductProps[],
  setProducer: (producer: ProducerProps) => void,

}

export const AppContext = createContext({} as AppContextData);
export function AppProvider({ children }: AppProviderProps) {

  const [producers, setProducers] = useState<ProducerProps[]>([]);
  const [producer, setProducer] = useState<ProducerProps>({} as ProducerProps);

  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    api.get<ProducerProps[]>('producers').then(response => {
      setProducers(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<ProductProps[]>(`product/?ref_id=${producer.id}`)
      .then(Response => {
        setProducts(Response.data);
      });
  }, [producer]);

  return (
    <AppContext.Provider value={{
      producers,
      producer,
      products,
      setProducer
    }}>
      {children}
    </AppContext.Provider>
  )
}

