import { ImgList, ImgItem, Img } from './ImagesList.styled'

export default function ImagesList({ response: { hits } }) {
    const imagesList =
        <ImgList>
            {hits.map(img => <ImgItem key={img.id}><Img src={img.webformatURL} alt={img.tags} /></ImgItem>)}
        </ImgList>
    return imagesList;
}