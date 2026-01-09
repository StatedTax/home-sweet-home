import { Phone, MapPin, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-2">
            Контакт
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Посетете нè или контактирајте нè
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ви стоиме на располагање за сите прашања и информации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Адреса</h3>
                <p className="text-muted-foreground text-sm">
                  ул. Илинденска бр.4е<br />
                  Кавадарци, Македонија
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Телефон</h3>
                <a href="tel:071634834" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  071 634 834
                </a>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Е-пошта</h3>
                <a href="mailto:info@homesweethome.mk" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  info@homesweethome.mk
                </a>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Работно време</h3>
                <p className="text-muted-foreground text-sm">
                  Пон - Саб: 09:00 - 20:00<br />
                  Недела: Затворено
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-sm h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.1234567890123!2d22.0123456!3d41.4323456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI1JzU2LjQiTiAyMsKwMDAnNDQuNCJF!5e0!3m2!1smk!2smk!4v1234567890123!5m2!1smk!2smk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Home Sweet Home локација"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
              Испратете ни порака
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Име и презиме</Label>
                  <Input id="name" placeholder="Вашето име" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="07X XXX XXX" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Е-пошта</Label>
                <Input id="email" type="email" placeholder="vashata@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Тема</Label>
                <Input id="subject" placeholder="За што се работи?" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Порака</Label>
                <Textarea 
                  id="message" 
                  placeholder="Напишете ја вашата порака..."
                  rows={5}
                />
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Испрати порака
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
