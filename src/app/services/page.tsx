import Chero from "@/components/chero";
import getMedata from "@/components/getMedata";
import Is2 from "@/components/pages/index/is2/is2";
import S1 from "@/components/pages/services/s1/s1";

export async function generateMetadata() {
  return getMedata("Candidates");
}
const Clients = () => (
  <>
    <Chero heroTitle="Services" />
    <S1 />
    <Is2 />
  </>
);

export default Clients;
