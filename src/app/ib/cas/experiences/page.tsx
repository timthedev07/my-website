import Experiences from "../../../../legacy/ib/cas/experiences";
import { getAllEntriesW_Preview } from "../../../../lib/ib-cas/experiences-mdx";

export default function ExperiencesPage() {
  return <Experiences rawData={JSON.stringify(getAllEntriesW_Preview())} />;
}
