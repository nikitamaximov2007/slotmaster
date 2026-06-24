import Image from 'next/image';

export function SlotImage({
  src,
  name,
  priority = false,
  sizes = '(max-width: 768px) 50vw, 280px',
}: {
  src: string;
  name: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <>
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        className="scale-110 object-cover opacity-70 blur-xl brightness-[0.58] saturate-[1.18]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.08),transparent_42%),linear-gradient(180deg,rgba(5,7,15,0.08)_0%,rgba(5,7,15,0.26)_100%)]" />
      <Image
        src={src}
        alt={`Обложка слота ${name}`}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain p-2 drop-shadow-[0_16px_30px_rgba(0,0,0,0.42)]"
      />
    </>
  );
}
