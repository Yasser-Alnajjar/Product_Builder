type TProps = {
  message: string;
};

export default function ErrorMessage({ message }: TProps) {
  return (
    message && (
      <p className="text-red-600 font-medium text-sm mt-1">{message}</p>
    )
  );
}
