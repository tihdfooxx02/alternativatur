import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Calendar, Users, Phone, Mail, Globe, Plane, Award, Shield, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import heroBackground from '@/assets/hero-background.jpg';


const MainSite = () => {
  const trips = [
    {
      id: 1,
      title: "Paris & Londres",
      description: "7 dias explorando duas capitais europeias",
      price: "R$ 4.999",
      duration: "7 dias",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=300&fit=crop",
      rating: 4.9,
      participants: 12
    },
    {
      id: 2,
      title: "Costa do Descobrimento",
      description: "Aventura pelas praias paradisíacas da Bahia",
      price: "R$ 1.899",
      duration: "5 dias",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      rating: 4.8,
      participants: 8
    },
    {
      id: 3,
      title: "Machu Picchu Clássico",
      description: "Trilha inesquecível até a cidade perdida dos Incas",
      price: "R$ 2.799",
      duration: "6 dias",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400&h=300&fit=crop",
      rating: 5.0,
      participants: 6
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      location: "São Paulo, SP",
      rating: 5,
      comment: "Experiência incrível! A Alternativa Turismo superou todas as expectativas. Organização perfeita e guias excepcionais.",
      trip: "Paris & Londres"
    },
    {
      id: 2,
      name: "João Santos",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      comment: "Viagem dos sonhos! Cada detalhe foi pensado com carinho. Já estou planejando a próxima aventura.",
      trip: "Costa do Descobrimento"
    },
    {
      id: 3,
      name: "Ana Costa",
      location: "Belo Horizonte, MG",
      rating: 5,
      comment: "Machu Picchu foi mágico! Guias experientes e paisagens de tirar o fôlego. Recomendo a todos!",
      trip: "Machu Picchu Clássico"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 sky-gradient opacity-60" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 hero-text">
            Alternativa Turismo
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Descubra destinos incríveis e viva experiências inesquecíveis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => {
                const element = document.getElementById('viagens');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Plane className="mr-2 h-5 w-5" />
              Explorar Viagens
            </Button>
            <Button 
              variant="glass" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Phone className="mr-2 h-5 w-5" />
              Falar Conosco
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Segurança Garantida</h3>
              <p className="text-muted-foreground">Viaje com tranquilidade com nossos seguros e protocolos de segurança</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experiência Premium</h3>
              <p className="text-muted-foreground">Mais de 12 anos criando experiências inesquecíveis para nossos clientes</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte 24/7</h3>
              <p className="text-muted-foreground">Atendimento disponível a qualquer hora durante sua viagem</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Viagens Programadas */}
      <section id="viagens" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
              Viagens Programadas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha seu próximo destino entre nossas viagens cuidadosamente planejadas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 ocean-gradient text-white">
                      {trip.duration}
                    </Badge>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-white text-sm font-semibold">{trip.rating}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{trip.title}</CardTitle>
                    <CardDescription>{trip.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold hero-text">{trip.price}</span>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        <span className="text-sm">{trip.participants} pessoas</span>
                      </div>
                    </div>
                    <Button variant="hero" className="w-full">
                      <Calendar className="mr-2 h-4 w-4" />
                      Reservar Agora
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section id="historia" className="py-20 px-4 sky-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Nossa História
              </h2>
              <div className="text-white/90 text-lg leading-relaxed space-y-4">
                <p>
                  Fundada em 2010, a <strong>Alternativa Turismo</strong> nasceu do sonho de conectar pessoas 
                  a experiências autênticas ao redor do mundo. Começamos como uma pequena agência local 
                  e hoje somos referência em viagens personalizadas.
                </p>
                <p>
                  Nossa paixão é transformar sonhos em realidade, criando memórias que duram para sempre. 
                  Com mais de 500 viagens realizadas e milhares de clientes satisfeitos, continuamos 
                  inovando para oferecer as melhores experiências de viagem.
                </p>
                <p>
                  Acreditamos que viajar é mais do que visitar lugares - é sobre descobrir culturas, 
                  fazer conexões e expandir horizontes. Cada viagem é uma nova oportunidade de crescimento 
                  e descoberta.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-white/80">Viagens Realizadas</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">12</div>
                  <div className="text-white/80">Anos de Experiência</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-white/80">Satisfação</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop"
                alt="Nossa equipe em uma aventura"
                className="rounded-2xl shadow-glow w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">
              Depoimentos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja o que nossos clientes dizem sobre suas experiências conosco
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-soft hover:shadow-glow transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {testimonial.location}
                        </CardDescription>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {testimonial.trip}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">
                      "{testimonial.comment}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 px-4 nature-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Pronto para sua próxima aventura?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Entre em contato conosco e descubra como podemos tornar seus sonhos de viagem realidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg" className="text-lg px-8 py-6">
                <Phone className="mr-2 h-5 w-5" />
                (11) 9999-8888
              </Button>
              <Button variant="glass" size="lg" className="text-lg px-8 py-6">
                <Mail className="mr-2 h-5 w-5" />
                contato@alternativa.com
              </Button>
<Button
  variant="glass"
  size="lg"
  className="text-lg px-8 py-6"
  onClick={() => window.open("https://wa.me/551697411667", "_blank")}
>
  WhatsApp
</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Alternativa Turismo</h3>
              <p className="text-primary-foreground/80">
                Sua próxima aventura começa aqui. Conectando pessoas a experiências inesquecíveis desde 2010.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Destinos Populares</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Europa</li>
                <li>América do Sul</li>
                <li>Brasil</li>
                <li>Ásia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Viagens em Grupo</li>
                <li>Viagens Personalizadas</li>
                <li>Lua de Mel</li>
                <li>Turismo Corporativo</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (11) 9999-8888
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  contato@alternativa.com
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Alternativa Turismo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainSite;