type TProps = {
  src: string;
  alt: string;
  className: string;
};
export default function Image({ src, alt, className }: TProps) {
  return <img src={src} alt={alt} className={className} />;
}
