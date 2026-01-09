import postelniniImg from "@/assets/dupli-postelnini.jpg";
import pizamiImg from "@/assets/kratki-pizami.jpg";
import bebeImg from "@/assets/bebe-postelnini.jpg";
import kuferiImg from "@/assets/kuferi.jpg";

const categories = [
  {
    name: "Постелнини",
    description: "Единечни, дупли и бебешки постелнини",
    image: postelniniImg,
  },
  {
    name: "Пижами",
    description: "Машки, женски и детски пижами",
    image: pizamiImg,
  },
  {
    name: "Бебешки производи",
    description: "Нежни производи за вашето бебе",
    image: bebeImg,
  },
  {
    name: "Куфери",
    description: "Патнички куфери за целото семејство",
    image: kuferiImg,
  },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-2">
            Истражи
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Нашите категории
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Погледнете ја нашата богата понуда на квалитетни производи за вашиот дом
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#products"
              className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <h3 className="text-xl font-serif font-semibold mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span>Погледни повеќе</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
