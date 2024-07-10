import logo from './LogoCompany.png';
import image_png1 from './itempng/im1.png'
import image_png2 from './itempng/im2.png'
import image_png3 from './itempng/im3.png'
import image_png4 from './itempng/im4.png'
import image_png5 from './itempng/im5.png'
import image_png6 from './itempng/im6.png'
import image_png7 from './itempng/im7.png'
import image_png8 from './itempng/im8.png'

interface ImageItem {
    url: string;
    details: string;
    name: string;
}
export const ImagePngList: (string | undefined)[] = [
    image_png1 as string,
    image_png2 as string,
    image_png3 as string,
    image_png4 as string,
    image_png5 as string,
    image_png6 as string,
    image_png7 as string,
    image_png8 as string,
  ];
export const logoImg = logo;
