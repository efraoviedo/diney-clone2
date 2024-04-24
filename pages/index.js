import { gql, GraphQLClient } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import logodisney from "../public/logodisney.png";
import startawarslogo from "../public/startawarslogo.jpeg";
import nationalGlogo from "../public/nationalGlogo.png";
import marvellogo from "../public/marvellogo.png";
import pixarimages from "../public/pixarimages.png";

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    Headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });

  const videosQuery = gql`
    query {
      videos {
        createdAt
        id
        title
        description
        seen
        slug
        tags
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;

  const accountQuery = gql`
    query {
      account(where: { id: "cld6bvmn40qhn09lofvpn3dxz" }) {
        username
        avatar {
          url
        }
      }
    }
  `;

  const data = await graphQLClient.request(videosQuery);
  const videos = data.videos;
  const accountData = await graphQLClient.request(accountQuery);
  const account = accountData.account;

  return {
    props: {
      videos,
      account,
    },
  };
};

const Home = ({ videos, account }) => {
  const randomVideo = (videos) => {
    return videos[Math.floor(Math.random() * videos.length)];
  };

  const filterVideos = (videos, genre) => {
    return videos.filter((video) => video.tags.includes(genre));
  };

  const unSeenVideos = (videos) => {
    return videos.filter((video) => video.seen == false || video.seen == null);
  };

  console.log(
    "not seen:",
    videos.filter((video) => video.seen == false || video.seen == null)
  );

  return (
    <>
      <NavBar account={account} />
      <div className="app">
        <div className="main-video">
          <img
            src={randomVideo(videos).thumbnail.url}
            alt={randomVideo(videos).title}
          />
        </div>

        <div className="video-feed">
          <Link href="#disney">
            <div className="franchise" id="disney">
              <Image src={logodisney} width={198} height={77} />
            </div>
          </Link>
          <Link href="#pixar">
            <div className="franchise" id="pixar">
              <Image src={pixarimages} width={199} height={79} />
            </div>
          </Link>
          <Link href="#star-wars">
            <div className="franchise" id="star-wars">
              <Image src={startawarslogo} width={199} height={79} />
            </div>
          </Link>
          <Link href="#nat-geo">
            <div className="franchise" id="nat-geo">
              <Image src={nationalGlogo} width={199} height={79} />
            </div>
          </Link>
          <Link href="#marvel">
            <div className="franchise" id="marvel">
              <Image src={marvellogo} width={198} height={77} />
            </div>
          </Link>
          </div> 
          <Section genre={'Recommended for you'} videos={unSeenVideos(videos)}/>
                <Section genre={'Family'} videos={filterVideos(videos, 'family')}/>
                <Section genre={'Thriller'} videos={filterVideos(videos, 'thriller')}/>
                <Section genre={'Classic'} videos={filterVideos(videos, 'classic')}/>   
        <Section
          id="pixar"
          genre={"Pixar"}
          videos={filterVideos(videos, "pixar")}
        />
        <Section
          id="marvel"
          genre={"Marvel"}
          videos={filterVideos(videos, "marvel")}
        />
        <Section
          id="nat-geo"
          genre={"National Geographic"}
          videos={filterVideos(videos, "national-geographic")}
        />
        <Section
          id="disney"
          genre={"Disney"}
          videos={filterVideos(videos, "disney")}
        />
        <Section
          id="star-wars"
          genre={"Star Wars"}
          videos={filterVideos(videos, "star-wars")}
        />
      </div>
    </>
  );
};

export default Home
