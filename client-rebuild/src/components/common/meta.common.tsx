import { FC } from "react";
import Head from "next/head";

type Props = { title?: string; content?: string };

const MetaTag: FC<Props> = ({
  title = "Shalom Plaques - High Quality Woodwork with Locally Selected Wood",
  content = "Shalom Plaques produces high quality woodcraft made from locally selected woods. Exporting Indonesian woodwork to over 23 countries all around the world while providing jobs and training to less fortunate individuals.",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <link rel="icon" href="icons/favicon.png" />
    </Head>
  );
};

export default MetaTag;
