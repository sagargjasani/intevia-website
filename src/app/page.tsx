import Hero from "../components/pages/index/hero/hero";
import Is1 from "../components/pages/index/is1/is1";
import Is2 from "../components/pages/index/is2/is2";
import Is3 from "../components/pages/index/is3/is3";
import Is4 from "../components/pages/index/is4/is4";
import Is5 from "../components/pages/index/is5/is5";
import Is6 from "../components/pages/index/is6/is6";

import getMedata from "@/components/getMedata";
import Framworks from "@/components/pages/index/Framworks/Framworks";
import ClientLogo from "../components/pages/index/ClientLogo/ClientLogo";
import ClientReview from "../components/pages/index/clientReview/ClientReview";
import Notes from "@/components/pages/index/Note/Notes";

export async function generateMetadata() {
  return getMedata("Candidates");
}

const IndexPage = () => (
  <>
    <Hero />
    {/* <ClientLogo />
    <Framworks /> */}
    <Is1 />
    <Is2 />
    <Is3 />
    <Is4 />
    <Is5 />
    {/* <Is6 /> */}
    {/* <ClientReview /> */}
    <Notes />
  </>
);

export default IndexPage;
