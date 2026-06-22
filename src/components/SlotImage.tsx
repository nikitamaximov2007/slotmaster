import Image from 'next/image';

export function SlotImage({
  src,
  name,
  priority = false,
}: {
  src: string;
  name: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={`Обложка слота ${name}`}
      fill
      priority={priority}
      sizes="(max-width: 768px) 50vw, 280px"
      className="object-cover"
    />
  );
}
