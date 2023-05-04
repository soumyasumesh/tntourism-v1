import Banner from "../components/Banner";
import Welcome from "../components/Welcome";
export default function FirstPost({ banner, welcome}) {
 
  return (
  <>
  <Banner data={ banner } />
  <Welcome data={ welcome } />
  </>);
}

/*export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:4000/api/home?lang=english");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}*/

export async function getServerSideProps() {
  const [BannerResponse, WelcomeResponse] = await Promise.all([
   // fetch(`${process.env.APP_DOMAIN}/api/${apiRoute}`), 
    //fetch(`${process.env.APP_DOMAIN}/api/${apiRoute2}`)
    fetch("http://localhost:4000/api/home?lang=english"),
    fetch("http://localhost:4000/api/home?lang=english")

  ]);
  const [banner, welcome] = await Promise.all([
    BannerResponse.json(), 
    WelcomeResponse.json()
  ]);
  return { props: { banner, welcome } };
}
