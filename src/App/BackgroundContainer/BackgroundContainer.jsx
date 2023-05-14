import { BackgroundCont, ImagesGroup, Image } from './BackgroundContainer.styled';

export default function ({ response: { hits } }) {
    console.log(hits)
    const backgroundContainer =
        <BackgroundCont>
            <ImagesGroup>
                <Image height={3.5} width={4} src={hits[0].largeImageURL} alt={hits[0].tags} />
                <Image height={3} width={4} src={hits[1].largeImageURL} alt={hits[1].tags} />
                <Image height={3.5} width={4} src={hits[2].largeImageURL} alt={hits[2].tags} />
            </ImagesGroup>
            <ImagesGroup>
                <Image height={4} width={3} src={hits[3].largeImageURL} alt={hits[3].tags} />
                <Image height={4} width={3} src={hits[4].largeImageURL} alt={hits[4].tags} />
                <Image height={4} width={3} src={hits[5].largeImageURL} alt={hits[5].tags} />
            </ImagesGroup>
            <ImagesGroup>
                <Image height={3.5} width={4} src={hits[6].largeImageURL} alt={hits[6].tags} />
                <Image height={3} width={4} src={hits[7].largeImageURL} alt={hits[7].tags} />
                <Image height={3.5} width={4} src={hits[8].largeImageURL} alt={hits[8].tags} />
            </ImagesGroup>
        </BackgroundCont>;
    return backgroundContainer;
}

