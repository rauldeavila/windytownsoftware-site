import Image from "next/image";
import GradientText from "./GradientText";

const products = [
  {
    name: "Task Wizard",
    image: "/projects-ss-1.png",
    description: "A retro-inspired task and project manager for macOS and iOS",
    status: "Coming Soon",
  },
  {
    name: "Lightward ✦ 光の方へ",
    image: "/placeholder.svg",
    description: "An immersive adventure game with unique light-based mechanics",
    status: "In Development",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-12">
      <h2 className="text-5xl font-bold mb-12 text-center retro-text">
        <GradientText>More apps & games</GradientText>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {products.map((product) => (
          <div key={product.name} className="retro-card p-6">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={300}
              className="rounded-lg mb-4 w-full h-auto"
            />
            <h3 className="text-2xl font-bold mb-2 retro-text">
              {product.name}
            </h3>
            <p className="text-lg mb-2">{product.description}</p>
            <p className="text-xl font-semibold">{product.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
