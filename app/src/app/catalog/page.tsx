'use server'

import { Suspense } from 'react';
import { fetchPhotos } from '@/services';
import Loading from '@/components/loading';
import CatalogImage from './CatalogImage';
import Error from '@/components/error';

async function CatalogAsync() {
  const { photos, error } = await fetchPhotos();

  if (error) {
    return (
      <Error error={error} />
    );
  }

  return (
    <div className="grid w-fit px-8 md:px-4 mx-auto grid-col-1 md:grid-cols-3 gap-8 justify-stretch">
      {photos.map((image) => (
        <div key={image.id} className="flex flex-col items-center justify-between max-w-sm p-6 border border-gold-300 rounded-lg drop-shadow-xl">
          <p>{image.title}</p>
          <CatalogImage  image={image} />
        </div>
      ))}
    </div>
  )
}

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <CatalogAsync />
    </Suspense>
  )
}
