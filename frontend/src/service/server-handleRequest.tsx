import axios from "axios";
import { ItemInterface } from "./server-utils";

export const getItem = async (): Promise<ItemInterface[]> => {
    try {
      const response = await axios.get<ItemInterface[]>('http://localhost:5000/items/getItem');
      return response.data;
    } catch (error) {
      console.log(error);
      return []; // return an empty array instead of null
    }
  };

/*
export const getItem = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/items/getItem`);
      const items = response.data;
      const images = items.map((item: { id: number; name: string; image: Buffer; mimetype: any; }) => {
        return {
          id: item.id,
          name: item.name,
          image: `data:${item.mimetype};base64,${item.image.toString('base64')}`,
        };
      });
      return images;
    } catch (error) {
      console.log(error);
      return null;
    }
}

*/