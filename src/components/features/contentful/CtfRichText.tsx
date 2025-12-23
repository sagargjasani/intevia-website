import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { ArticleImage } from "../article";

export const EmbeddedEntry = (entry: any) => {
  if (entry?.image?.url) {
    return <ArticleImage image={entry} />;
  }

  return null;
};

export const contentfulBaseRichTextOptions = ({ links }: any): Options => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const entry = links?.entries?.block?.find(
        (item: any) => item?.sys?.id === node.data.target.sys.id
      );
      if (!entry) return null;

      return <EmbeddedEntry {...entry} />;
    },
  },
});

export const CtfRichText = ({ json, links }: any) => {
  const baseOptions = contentfulBaseRichTextOptions({ links, json });

  return (
    <article className="prose prose-sm max-w-none">
      {documentToReactComponents(json, baseOptions)}
    </article>
  );
};
