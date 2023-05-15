import { BackgroundCont, ImagesGroup, Image } from './BackgroundContainer.styled';

export default function ({ response: { hits } }) {
    if (hits.length < 9) {
        return
    }
    const backgroundContainer =
        <BackgroundCont>
            <ImagesGroup>
                <Image height={3.5} width={4} src={hits[0].webformatURL} alt={hits[0].tags} />
                <Image height={3} width={4} src={hits[1].webformatURL} alt={hits[1].tags} />
                <Image height={3.5} width={4} src={hits[2].webformatURL} alt={hits[2].tags} />
            </ImagesGroup>
            <ImagesGroup>
                <Image height={4} width={3} src={hits[3].webformatURL} alt={hits[3].tags} />
                <Image height={4} width={3} src={hits[4].webformatURL} alt={hits[4].tags} />
                <Image height={4} width={3} src={hits[5].webformatURL} alt={hits[5].tags} />
            </ImagesGroup>
            <ImagesGroup>
                <Image height={3.5} width={4} src={hits[6].webformatURL} alt={hits[6].tags} />
                <Image height={3} width={4} src={hits[7].webformatURL} alt={hits[7].tags} />
                <Image height={3.5} width={4} src={hits[8].webformatURL} alt={hits[8].tags} />
            </ImagesGroup>
        </BackgroundCont>;
    return backgroundContainer;
}

