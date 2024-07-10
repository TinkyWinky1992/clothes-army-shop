import image1 from './item/WhatsApp Image 2024-07-07 at 7.06.39 PM.jpeg'
import image2 from './item/WhatsApp Image 2024-07-07 at 7.06.40 PM (1).jpeg'
import image3 from './item/WhatsApp Image 2024-07-07 at 7.06.40 PM.jpeg'
import image4 from './item/WhatsApp Image 2024-07-07 at 7.06.41 PM (1).jpeg'
import image5 from './item/WhatsApp Image 2024-07-07 at 7.06.41 PM.jpeg'
import image6 from './item/WhatsApp Image 2024-07-07 at 7.06.42 PM (1).jpeg'
import image7 from './item/WhatsApp Image 2024-07-07 at 7.06.42 PM.jpeg'
import image8 from './item/WhatsApp Image 2024-07-07 at 7.06.43 PM (1).jpeg'
import image9 from './item/WhatsApp Image 2024-07-07 at 7.06.43 PM.jpeg'
import image10 from './item/WhatsApp Image 2024-07-07 at 7.06.44 PM.jpeg'
import image11 from './item/WhatsApp Image 2024-07-07 at 7.06.45 PM (1).jpeg'
import image12 from './item/WhatsApp Image 2024-07-07 at 7.06.45 PM.jpeg'
import image13 from './item/WhatsApp Image 2024-07-07 at 7.06.46 PM (1).jpeg'
import image14 from './item/WhatsApp Image 2024-07-07 at 7.06.46 PM.jpeg'
import image15 from './item/WhatsApp Image 2024-07-07 at 7.06.47 PM (1).jpeg'
import image16 from './item/WhatsApp Image 2024-07-07 at 7.06.47 PM.jpeg'
import image17 from './item/WhatsApp Image 2024-07-07 at 7.06.48 PM (1).jpeg'
import image18 from './item/WhatsApp Image 2024-07-07 at 7.06.48 PM.jpeg'

import background from './b.jpg'
import secondbackground from './c.jpg'

export const BackGround = background;
export const SecondBackGround = secondbackground;

export interface ItemListInterface {
    url: string;
    details: string;
    name: string;
      
}
export const ItemList:ItemListInterface[] = [
    {
      url: image1 as string,
      details: 'Details about image 1',
      name: 'Image 1',
    },
    {
      url: image2 as string,
      details: 'Details about image 2',
      name: 'Image 2',
    },
    {
      url: image3 as string,
      details: 'Details about image 3',
      name: 'Image 3',
    },
    {
      url: image4 as string,
      details: 'Details about image 4',
      name: 'Image 4',
    },
    {
      url: image5 as string,
      details: 'Details about image 5',
      name: 'Image 5',
    },
    {
      url: image6 as string,
      details: 'Details about image 6',
      name: 'Image 6',
    },
    {
      url: image7 as string,
      details: 'Details about image 7',
      name: 'Image 7',
    },
    {
      url: image8 as string,
      details: 'Details about image 8',
      name: 'Image 8',
    },
    {
      url: image9 as string,
      details: 'Details about image 9',
      name: 'Image 9',
    },
    {
      url: image10 as string,
      details: 'Details about image 10',
      name: 'Image 10',
    },
    {
      url: image11 as string,
      details: 'Details about image 11',
      name: 'Image 11',
    },
    {
      url: image12 as string,
      details: 'Details about image 12',
      name: 'Image 12',
    },
    {
      url: image13 as string,
      details: 'Details about image 13',
      name: 'Image 13',
    },
    {
      url: image14 as string,
      details: 'Details about image 14',
      name: 'Image 14',
    },
    {
      url: image15 as string,
      details: 'Details about image 15',
      name: 'Image 15',
    },

    {
        url: image16 as string,
        details: 'Details about image 16',
        name: 'Image 16',
    },

    {
        url: image17 as string,
        details: 'Details about image 17',
        name: 'Image 17',
    },

    {
        url: image18 as string,
        details: 'Details about image 18',
        name: 'Image 18',
    }
]