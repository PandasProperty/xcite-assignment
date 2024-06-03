import ErrorProps from "./types";

export default function Error({ error }: ErrorProps) {
  return (
    <div className="mx-8 p-6 bg-red-500 text-white text-center font-bold border border-gray-200 rounded-lg shadow">
      {error}
    </div>
  );
} 