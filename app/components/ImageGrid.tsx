import Image from 'next/image';

export default function ImageGrid() {
  const images = Array.from({ length: 31 }, (_, i) => i + 1); // Creates an array [1, 2, ..., 31]

  return (
    <div className="grid grid-cols-6 gap-1">
      {images.map((imageNumber) => (
        <div key={imageNumber} className="overflow-hidden">
          <Image
            src={`/images/${imageNumber}.png`}
            alt={`Image ${imageNumber}`}
            className="object-cover"
            width={256} // 64 * 4, because next/image uses logical pixels
            height={256} // 64 * 4, because next/image uses logical pixels
            layout="responsive"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}