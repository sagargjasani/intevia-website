const getBlogMetadata = ({
  pageTitle,
  pageDescription,
  noindex,
  nofollow,
  canonicalUrl,
  shareImagesCollection,
}: any) => {
  return {
    title: pageTitle || undefined,
    description: pageDescription || undefined,
    canonical: canonicalUrl || "",
    nofollow: nofollow || false,
    noindex: noindex || false,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl || "",
      title: pageTitle || undefined,
      description: pageDescription || undefined,
      images: shareImagesCollection?.items.map((item: any) => ({
        url: item?.url || "",
        width: item?.width || 0,
        height: item?.height || 0,
        alt: item?.description || "",
        type: item?.contentType || "",
      })),
    },
    twitter: {
      site: canonicalUrl,
      cardType: "summary_large_image",
    },
  };
};

export default getBlogMetadata;
