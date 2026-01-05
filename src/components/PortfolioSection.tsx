import Link from "next/link";
import Image from "next/image";
import { Lock } from "lucide-react";

type Item = {
  title: string;
  slug: string;
  image: string;
  protected?: boolean;
};

export default function PortfolioSection({
  title,
  description,
  subtitle,
  basePath,
  items,
}: {
  title: string;
  description: string;
  subtitle?: string;
  basePath: string;
  items: Item[];
}) {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold">{title}</h2>
          {subtitle && (
            <p className="mb-2 text-sm text-cyan-400">{subtitle}</p>
          )}
          <p className="mx-auto max-w-3xl text-gray-400 text-lg">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const href = item.protected
              ? `${basePath}/classified/access?next=${item.slug}`
              : `${basePath}/${item.slug}`;

            return (
              <Link
                key={item.slug}
                href={href}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-white/10 bg-white/5
                  backdrop-blur-md
                  transition-all
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
                "
              >
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/21 transition" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">
                    View project details →
                  </p>
                </div>

                {/* Lock icon */}
                {item.protected && (
                  <div className="absolute top-4 right-4 text-cyan-400">
                    <Lock size={18} />
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
