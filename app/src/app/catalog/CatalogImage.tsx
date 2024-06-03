'use server';

import { Photo } from '@/types';
import Image from 'next/image';

export default async function CatalogImage({ image: { url, title } }: { image: Photo }) {
  return (
    <Image
      src={url}
      width={600}
      height={600}
      alt={title}
      className="rounded-md w-1/2 border-2 border-slate-100"
    />
  )
}