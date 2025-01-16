import Image from "next/image";

const products = [
  {
    name: "Contexts",
    image: "/placeholder.svg",
    status: "Coming Soon",
  },
  {
    name: "Lightward ✦ 光の方へ",
    image: "/placeholder.svg",
    status: "In Development",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-12">
      <h2 className="text-5xl font-bold mb-12 text-center retro-text">
        Other cool stuff
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {products.map((product) => (
          <div key={product.name} className="retro-card p-6">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 retro-text">
              {product.name}
            </h3>
            <p className="text-xl">{product.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
