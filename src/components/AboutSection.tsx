import { Heart, Award, Users, Truck } from "lucide-react";
import storeImg from "@/assets/outside.png";

const features = [
  {
    icon: Heart,
    title: "Со љубов",
    description: "Секој производ го избираме со внимание и грижа за нашите клиенти",
  },
  {
    icon: Award,
    title: "Квалитет",
    description: "Нудиме само проверени брендови и квалитетни материјали",
  },
  {
    icon: Users,
    title: "Семејна атмосфера",
    description: "Љубезен тим секогаш подготвен да ви помогне со изборот",
  },
  {
    icon: Truck,
    title: "Достава",
    description: "Брза достава до вашата адреса низ цела Македонија",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={storeImg}
              alt="Home Sweet Home продавница"
              className="rounded-2xl shadow-xl w-full"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase">
              За нас
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Вашиот дом заслужува најдобро
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Home Sweet Home е продавница за домашни текстили лоцирана во срцето на Кавадарци. 
              Веќе повеќе од 5 години им служиме на нашите клиенти со широк асортиман на квалитетни 
              постелнини, пижами, крпи и други производи за домот.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Нашата мисија е да обезбедиме удобност и квалитет за секое семејство. 
              Веруваме дека добриот сон почнува со добра постелнина, а удобноста дома е 
              основа за среќен живот.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
