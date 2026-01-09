import { Star, Quote } from "lucide-react";
import covek1 from "@/assets/covek1.jpg";
import covek2 from "@/assets/covek2.jpg";
import covek3 from "@/assets/covek3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Марија Петрова",
    role: "Редовен клиент",
    image: covek1,
    content: "Одлично качество на постелнините! Секогаш кога ми треба нешто ново за домот, прво доаѓам тука. Персоналот е љубезен и секогаш ми помага да најдам совршен производ.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ана Николова",
    role: "Редовен клиент",
    image: covek2,
    content: "Ги сакам пижамите што ги купив! Многу се удобни и квалитетни. Децата исто така обожаваат сè што го избираме од оваа продавница. Препорачувам на сите!",
    rating: 5,
  },
  {
    id: 3,
    name: "Елена Димитрова",
    role: "Нов клиент",
    image: covek3,
    content: "Прв пат бев во продавницата и останав воодушевена. Широк избор на производи на одлични цени. Дефинитивно ќе се враќам повторно!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-2">
            Искуства
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Што велат нашите клиенти
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Прочитајте ги впечатоците од нашите задоволни клиенти
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
