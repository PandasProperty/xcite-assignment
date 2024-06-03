import { User } from "@/types";

export default interface CardProps {
  user: User;
  onDelete: (id: number) => void;
}
