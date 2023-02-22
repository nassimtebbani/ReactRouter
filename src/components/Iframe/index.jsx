import React from "react";

export default function Iframe({ url }) {
  console.log(url);
  return (
    <iframe
      width="560"
      height="315"
      src={url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
