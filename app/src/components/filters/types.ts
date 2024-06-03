import { SORT } from "@/types";

export default interface FiltersProps {
  sort: SORT;
  search: string;
  setSort: (sort: SORT) => void;
  setSearch: (search: string) => void;
}
