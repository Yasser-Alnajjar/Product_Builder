type TProps = {
  id: string;
  title: string;
  type?: string;
  name: string;
};
export default function Input({ title, type, name, id }: TProps) {
  return (
    <div className="mb-2">
      <label htmlFor={id} className="capitalize">
        {title}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        className="border w-full rounded-md p-1 text-black outline-indigo-700 shadow-md"
      />
    </div>
  );
}
