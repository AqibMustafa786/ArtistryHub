import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import portfolio from "@/config/portfolio.json";

export default function Home() {
  return (
    <main className="min-h-screen pb-32">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-pink-600/10 blur-[120px] rounded-full" />
      </div>

      <Header />

      <section className="max-w-4xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolio.categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              url={category.url}
              iconName={category.icon}
              index={index}
            />
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center pb-8">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {portfolio.branding.name}. All rights reserved.
        </p>
      </footer>


    </main>
  );
}
