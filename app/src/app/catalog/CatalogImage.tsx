"use server";

import { Photo } from "@/types";
import Image from "next/image";

const ImageAsync = async ({ alt, src, ...props }: {
  src: string;
  height: number;
  width: number;
  alt: string;
  className: string;
}) => {
  return <Image src={src} alt={alt} {...props} />;
};

export default async function CatalogImage({ image: { url, title } }: { image: Photo }) {
  return (
    <ImageAsync
      src={url}
      width={600}
      height={600}
      alt={title}
      className="rounded-md w-1/2 border-2 border-slate-100"
    />
  )
}