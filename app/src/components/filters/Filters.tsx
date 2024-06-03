import { SORT } from '@/types';
import FiltersProps from './types';
import { ChangeEvent } from 'react';

export default function Filters({
  sort, search, setSort, setSearch,
}: FiltersProps) {
  const onChangeSeach = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const onSortAsc = () => {
    setSort(SORT.ASC);
  }

  const onSortDesc = () => {
    setSort(SORT.DESC);
  }

  const onClearSearch = () => {
    setSearch('');
  }

  return (
    <div className='flex gap-4 md:gap-8 items-center justify-center'>
      <p>Filters</p>
      {sort === SORT.ASC ? (
        <div className="cursor-pointer text-bunting-500 hover:text-bunting-600 border-2 border-bunting-500 hover:border-bunting-600 rounded-lg drop-shadow-xl hover:drop-shadow-2xl p-1" onClick={onSortDesc}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
          </svg>
        </div>
      ) : (
        <div className="cursor-pointer text-bunting-500 hover:text-bunting-600 border-2 border-bunting-500 hover:border-bunting-600 rounded-lg drop-shadow-xl hover:drop-shadow-2xl p-1" onClick={onSortAsc}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
          </svg>
        </div>
      )}
      <div className="relative text-gray-500 focus:blue-500">
        <span className="absolute start-0 bottom-3">
          <svg className="w-4 h-4 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </span>
        <input
          value={search}
          onChange={onChangeSeach}
          id="floating-search"
          placeholder=" "
          className="block pt-2.5 pb-2 ps-6 pe-0 w-full text-sm text-bunting-600 bg-clip-text bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-bunting-600 peer"
        />
        <label htmlFor="floating-search" className="absolute z-2 text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2.5 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-bunting-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Search ...</label>
      </div>
      <div className="cursor-pointer text-bunting-500 hover:text-bunting-600 border-2 border-bunting-500 hover:border-bunting-600 rounded-lg drop-shadow-xl hover:drop-shadow-2xl p-1" onClick={onSortAsc}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={onClearSearch}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
  )
}