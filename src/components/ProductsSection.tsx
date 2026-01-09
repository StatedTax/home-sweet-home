import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Import product images
import dadapizami from "@/assets/dadapizami.png";
import dadapizami2 from "@/assets/dadapizami2.png";
import kitty from "@/assets/kitty.png";
import life from "@/assets/life.png";
import krpicki from "@/assets/krpicki.png";
import majmun from "@/assets/majmun.png";
import edinecni from "@/assets/edinecni-postelnini.jpg";
import maski from "@/assets/maski-pizami.jpg";

const products = [
  {
    id: 1,
    name: "Топли зимски пижами",
    category: "Пижами",
    image: dadapizami,
    badge: "Ново",
  },
  {
    id: 2,
    name: "Женски пижами со принт",
    category: "Пижами",
    image: dadapizami2,
    badge: "Популарно",
  },
  {
    id: 3,
    name: "Hello Kitty постелнина",
    category: "Детски постелнини",
    image: kitty,
    badge: null,
  },
  {
    id: 4,
    name: "Life is Sweet пижами",
    category: "Пижами",
    image: life,
    badge: "Ново",
  },
  {
    id: 5,
    name: "Бамбус крпи сет",
    category: "Крпи и пешкири",
    image: krpicki,
    badge: null,
  },
  {
    id: 6,
    name: "Детска постелнина со мајмунче",
    category: "Бебешки производи",
    image: majmun,
    badge: null,
  },
  {
    id: 7,
    name: "Единечна постелнина каро",
    category: "Постелнини",
    image: edinecni,
    badge: "Нова колекција",
  },
  {
    id: 8,
    name: "Машки летни пижами",
    category: "Пижами",
    image: maski,
    badge: "Нова колекција",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-2">
            Понуда
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Популарни производи
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Откријте ги нашите најпопуларни производи избрани специјално за вас
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                )}
              </div>
              
              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <h3 className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <a 
              href="https://www.facebook.com/HomeSweetHomeMk" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Видете ја целата понуда на Facebook
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
