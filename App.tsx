
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Leaf, 
  Flame, 
  Clock, 
  Utensils, 
  ChevronDown, 
  Star, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Search,
  Play,
  XCircle,
  TrendingUp,
  BrainCircuit,
  Crown,
  Lock,
  Smartphone,
  Trophy,
  Gift,
  Check,
  ShoppingBag,
  HeartPulse,
  Apple,
  Sun,
  Moon,
  ZapIcon,
  Award,
  Beef,
  Layers,
  Sparkle,
  ArrowDown
} from 'lucide-react';
import { generateCustomSalad } from './services/geminiService';
import { SaladRecipe, Testimonial, FAQItem } from './types';

// --- Configuration ---
const KIRVANO_CHECKOUT_URL = "https://pay.kirvano.com/seu-link-aqui"; 
const WHATSAPP_GREEN = "bg-[#25D366]";
const WHATSAPP_GREEN_HOVER = "hover:bg-[#128C7E]";

// --- Shared Components ---

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-center md:justify-between">
      <div className="flex items-center gap-2">
        <Leaf className="text-[#25D366] w-6 h-6" />
        <span className="font-bold text-xl tracking-tight">SALADAS<span className="text-[#25D366]">80</span></span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#beneficios" className="hover:text-[#25D366] transition">Benefícios</a>
        <a href="#como-funciona" className="hover:text-[#25D366] transition">Como funciona</a>
        <a href="#garantia" className="hover:text-[#25D366] transition">Garantia</a>
        <a href="#oferta" className="hover:text-[#25D366] transition">Oferta</a>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="py-12 bg-slate-50 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Leaf className="text-[#25D366] w-5 h-5" />
        <span className="font-bold text-lg">SALADAS<span className="text-[#25D366]">80</span></span>
      </div>
      <p className="text-slate-500 text-sm max-w-md mx-auto mb-8">
        Os resultados podem variar de pessoa para pessoa. Este produto não substitui o aconselhamento médico profissional.
      </p>
      <div className="flex justify-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
        <a href="#" className="hover:text-[#25D366]">Termos de Uso</a>
        <a href="#" className="hover:text-[#25D366]">Privacidade</a>
        <a href="#" className="hover:text-[#25D366]">Contato</a>
      </div>
      <div className="mt-8 pt-8 border-t border-slate-200 text-slate-400 text-xs">
        © 2026 Saladas80. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

// --- Landing Page View ---

const LandingPage = ({ onCheckout }: { onCheckout: () => void }) => {
  return (
    <div className="animate-fade-in-up">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 overflow-hidden bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-[#128C7E] text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              O MÉTODO #1 PARA SECAR EM 2026
            </div>
            {/* Headline Increased in Size and Weight */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-black leading-tight mb-8">
              Descubra como <span className="text-[#25D366]">emagrecer</span> comendo o que você ama.
            </h1>
            <div className="mb-8 space-y-4">
              <p className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
                TRANSFORME SUA ALIMENTAÇÃO E ESTILO DE VIDA! 
              </p>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                É simples e fácil de fazer, e você pode começar ainda hoje por apenas <span className="text-[#25D366] font-black italic">R$ 4,99</span>. 
                Tenha em mãos 80 receitas de saladas gourmet que desincham seu corpo e aceleram seu metabolismo naturalmente.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={onCheckout}
                className={`flex items-center justify-center gap-3 ${WHATSAPP_GREEN} ${WHATSAPP_GREEN_HOVER} text-white px-8 py-5 rounded-2xl text-xl font-black transition-all transform hover:scale-105 shadow-xl shadow-green-200 uppercase tracking-tighter italic`}
              >
                QUERO MELHORAR MINHA ALIMENTAÇÃO <ArrowRight className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-slate-500 mt-6 md:mt-0">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i+10}/64/64`} className="w-10 h-10 rounded-full border-2 border-white shadow-md" alt="user" />
                ))}
              </div>
              <p className="text-center sm:text-left leading-tight md:leading-normal">
                <strong className="text-slate-900 font-extrabold">+15.400</strong> pessoas transformaram seus <br className="xs:hidden" /> corpos mês passado
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-200/40 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-[2.5rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 object-cover aspect-[4/5] md:aspect-square"
              alt="Salada Gourmet"
            />
          </div>
        </div>
      </section>

      {/* UM POUCO DO QUE VOCÊ TERÁ ACESSO... */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-black uppercase tracking-tighter text-slate-900 leading-none mb-10">
              UM POUCO DO QUE <span className="text-[#25D366]">VOCÊ TERÁ ACESSO...</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 px-2">
              <div className="overflow-hidden rounded-3xl shadow-lg transform hover:scale-105 transition duration-500 aspect-square">
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=500" alt="Salada Fit" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-lg transform hover:scale-105 transition duration-500 aspect-square">
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500" alt="Salada Almoço" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-lg transform hover:scale-105 transition duration-500 aspect-square">
                <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=500" alt="Salada Frutas" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-lg transform hover:scale-105 transition duration-500 aspect-square">
                <img src="https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80&w=500" alt="Bruschettas" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
              <AccessItem icon={ShoppingBag} text="Lista de compras com ingredientes econômicos" />
              <AccessItem icon={Flame} text="Saladas FIT" />
              <AccessItem icon={Sun} text="Saladas para ALMOÇO" />
              <AccessItem icon={Moon} text="Saladas para JANTA" />
              <AccessItem icon={Apple} text="Saladas com FRUTAS" />
              <AccessItem icon={HeartPulse} text="Saladas MEDICINAIS" />
              <AccessItem icon={ZapIcon} text="Saladas para INICIANTES" />
              <AccessItem icon={Award} text="Saladas PREMIUM" />
              <AccessItem icon={Beef} text="Saladas com CARNES" />
              <AccessItem icon={Layers} text="Saladas MISTAS" />
              <AccessItem icon={Sparkle} text="Saladas CROCANTES" />
              <AccessItem icon={Utensils} text="Bruschettas" />
            </div>

            <div className="mt-12">
              <p className="text-2xl font-black text-[#25D366] italic animate-pulse">E MUITO MAIS...</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: PRESENTES EXCLUSIVOS */}
      <section id="bonus" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-black uppercase tracking-tighter text-slate-900 leading-none">
              PRESENTES EXCLUSIVOS <br className="sm:hidden" />
              <span className="text-[#25D366]">PARA VOCÊ HOJE!</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <BonusCard 
              title="Cardápios Semanais"
              image="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600"
              description="Planejamento pronto para otimizar sua rotina e garantir os melhores resultados."
              oldPrice="R$ 97,00"
            />
            <BonusCard 
              title="Pratos Criativos"
              image="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600"
              description="Aprenda técnicas de empratamento para criar pratos saudáveis e irresistíveis."
              oldPrice="R$ 77,00"
            />
            <BonusCard 
              title="Área de Membros VIP"
              image="https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=600"
              description="Acesso exclusivo ao nosso portal com atualizações e materiais extras."
              oldPrice="R$ 47,00"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="beneficios" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif mb-16">Por que escolher o Saladas80?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <FeatureCard icon={Leaf} title="100% Saudável" description="Ingredientes selecionados para nutrir seu corpo de forma inteligente." />
            <FeatureCard icon={Flame} title="Efeito Termogênico" description="Estratégicas que ajudam a queimar gordura abdominal naturalmente." />
            <FeatureCard icon={Clock} title="Preparo em 10 min" description="Praticidade total para quem tem uma rotina corrida e cansativa." />
            <FeatureCard icon={Utensils} title="Variedade Premium" description="80 opções gourmet exclusivas que você nunca viu antes." />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Como funciona o método?</h2>
            <p className="text-slate-600 text-lg">Simples, prático e 100% digital.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", icon: Smartphone, title: "Acesso Imediato", desc: "Após o pagamento, você recebe o acesso instantâneo no seu e-mail." },
              { step: "02", icon: BrainCircuit, title: "Escolha sua Receita", desc: "Navegue pelas 80 opções e escolha a que mais combina com seu dia." },
              { step: "03", icon: Trophy, title: "Resultados Reais", desc: "Siga o plano e sinta seu corpo desinchar logo nos primeiros dias." }
            ].map((item, i) => (
              <div key={i} className="text-center group bg-white p-8 rounded-[2.5rem] transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl hover:shadow-green-100 border border-transparent hover:border-green-100">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative group-hover:bg-green-50 transition-colors border border-green-100">
                  <span className={`absolute -top-2 -right-2 ${WHATSAPP_GREEN} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md`}>{item.step}</span>
                  <item.icon className="text-[#25D366] w-8 h-8 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Warranty Section */}
      <section id="garantia" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className={`absolute top-0 left-0 w-full h-1 ${WHATSAPP_GREEN}`} />
            <ShieldCheck className="w-16 h-16 md:w-20 md:h-20 text-[#25D366] mx-auto mb-8 animate-bounce" />
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Risco Zero para Você!</h2>
            <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Você tem <strong>7 dias de garantia incondicional</strong>. Se por qualquer motivo você não gostar das receitas ou achar que não é para você, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
            <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <Lock className="w-4 h-4" /> Segurança Total
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="oferta" className="py-20 md:py-32 bg-slate-50 scroll-mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-200/20 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/10 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-24 px-2">
            <span className="text-[#128C7E] font-black uppercase tracking-widest text-sm md:text-base mb-4 block">Oferta Exclusiva</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">Escolha o seu nível de <br/><span className="text-[#25D366]">transformação</span></h2>
            <p className="text-slate-600 italic text-xl md:text-2xl max-w-2xl mx-auto">Garanta seu acesso agora com descontos de até 90%. O cronômetro já começou!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
            {/* PLANO BÁSICO */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-14 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-2">
              <div className="mb-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Utensils className="text-slate-400 w-8 h-8" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-800 uppercase tracking-tighter">Plano Essencial</h3>
                </div>
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-8">O pontapé inicial para quem quer resultados rápidos sem complicações.</p>
                <div className="h-px bg-slate-100 w-full" />
              </div>
              
              <ul className="space-y-6 mb-12 flex-grow">
                {[
                  "80 Receitas de Saladas Gourmet",
                  "Guia de Higienização de Alimentos",
                  "Lista de Substituição de Ingredientes",
                  "Área de Membros Padrão",
                  "Acesso Vitalício via PDF",
                  "Suporte Via E-mail"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-600 group-hover:text-slate-900 transition-colors">
                    <Check className="text-[#25D366] w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-lg md:text-xl font-bold">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="mb-8">
                  <span className="text-slate-400 line-through block text-lg md:text-xl mb-2">De R$ 47,00</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-800 text-2xl font-bold">R$</span>
                    <span className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none">4,99</span>
                    <span className="text-slate-500 text-lg ml-2 font-bold uppercase tracking-tight">pagamento único</span>
                  </div>
                </div>
                <button 
                  onClick={onCheckout}
                  className={`w-full ${WHATSAPP_GREEN} ${WHATSAPP_GREEN_HOVER} text-white py-6 md:py-8 rounded-3xl font-black text-xl md:text-2xl lg:text-3xl shadow-xl shadow-green-100 transition-all active:scale-95 flex items-center justify-center gap-3 uppercase tracking-tighter`}
                >
                  LIBERAR OFERTA BÁSICA
                </button>
              </div>
            </div>

            {/* PLANO PREMIUM TRANSITION CTA */}
            <div className="lg:hidden mt-8 mb-4 text-center">
               <p className="text-lg font-bold text-slate-700 leading-tight">
                 Mas antes de comprar... <br/> temos uma oferta <span className="text-[#25D366] underline">AINDA MAIS vantajosa</span> para você! Veja logo abaixo ⬇️
               </p>
            </div>

            {/* PLANO PREMIUM */}
            <div className="bg-white rounded-[3rem] p-8 md:p-14 border-4 border-[#25D366] shadow-2xl relative overflow-hidden flex flex-col group">
              <div className={`absolute top-0 right-0 ${WHATSAPP_GREEN} text-white px-6 md:px-10 py-3 rounded-bl-3xl font-black text-[10px] md:text-sm uppercase tracking-[0.2em] shadow-lg flex items-center gap-2 z-20`}>
                <Crown className="w-4 h-4 fill-white" /> Recomendado
              </div>
              
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-400/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="mb-10 relative z-10 pt-4 md:pt-0">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center border border-green-100 flex-shrink-0">
                    <Zap className="text-[#25D366] w-8 h-8 fill-[#25D366]/20" />
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#128C7E] uppercase tracking-tighter italic leading-tight">Premium Completo</h3>
                </div>
                <p className="text-slate-600 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 font-medium">A experiência definitiva para quem busca transformação total.</p>
                <div className="h-px bg-green-100 w-full" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-14 relative z-10">
                <div className="col-span-full mb-2">
                  <span className="text-xs md:text-sm font-black uppercase text-green-600 tracking-widest flex items-center gap-3">
                    <Gift className="w-4 h-4" /> Bônus Exclusivos:
                  </span>
                </div>
                {[
                  "80 Receitas Saladas Premium",
                  "Cardápio SEMANAL Completo",
                  "Planos Especiais (Restrições)",
                  "Especial Saúde Digestiva",
                  "Plano por Objetivos Focados",
                  "Domine a Montagem Gourmet",
                  "Molhos e Temperos Premium",
                  "Atualização Mensal Grátis",
                  "Área de Membros VIP",
                  "Acesso Vitalício Garantido",
                  "Suporte Prioritário VIP"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="text-[#25D366] w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg font-black leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto relative z-10">
                <div className="bg-green-50 rounded-[2.5rem] p-8 md:p-12 mb-8 border border-green-100 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
                  <div className="text-center lg:text-left">
                    <span className="text-slate-400 line-through block text-lg md:text-xl mb-2">De R$ 139,90</span>
                    <div className="flex items-baseline justify-center lg:justify-start gap-2">
                      <span className="text-green-600 text-2xl md:text-3xl font-bold italic">R$</span>
                      <span className="text-6xl md:text-8xl lg:text-9xl font-black text-[#128C7E] tracking-tighter italic leading-none">13,99</span>
                    </div>
                  </div>
                  <div className="text-center lg:text-right flex flex-col items-center lg:items-end">
                    <div className="bg-green-600 text-white px-5 py-2 rounded-xl text-xs md:text-sm font-black uppercase mb-3 inline-block shadow-md">Economia de 90%</div>
                    <span className="text-slate-500 text-sm md:text-base lg:text-lg uppercase font-bold tracking-widest block">Pagamento Único</span>
                  </div>
                </div>

                <button 
                  onClick={onCheckout}
                  className={`w-full ${WHATSAPP_GREEN} ${WHATSAPP_GREEN_HOVER} text-white py-8 md:py-10 rounded-[2.5rem] font-black text-2xl md:text-3xl lg:text-4xl shadow-2xl shadow-green-300 transition-all transform hover:scale-[1.03] active:scale-95 flex flex-col items-center justify-center gap-1 overflow-hidden relative group uppercase tracking-tighter italic animate-pulse-custom`}
                >
                  <span className="relative z-10 flex items-center gap-4 px-4 text-center">QUERO MELHORAR MINHA ALIMENTAÇÃO <ArrowRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-3 transition-transform hidden sm:block" /></span>
                  <span className="text-sm md:text-base opacity-90 font-bold uppercase tracking-[0.3em] mt-2 relative z-10">Vagas Limitadas para Hoje</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-24 text-center px-4">
            {/* PAYMENT LOGOS */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-12">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6 md:h-8 object-contain" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-8 md:h-12 object-contain" alt="Mastercard" />
              <img src="https://logospng.org/download/pix/logo-pix-icone-512.png" className="h-8 md:h-12 object-contain" alt="PIX" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" className="h-8 md:h-12 object-contain" alt="American Express" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6 md:h-8 object-contain" alt="PayPal" />
            </div>
            <p className="text-slate-500 text-sm md:text-lg font-black uppercase tracking-[0.3em] flex flex-col sm:flex-row items-center justify-center gap-3">
              <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[#25D366]" /> Ambiente de pagamento 100% seguro e criptografado
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  );
};

// --- NEW COMPONENT: Upsell Page ---
const UpsellPage = () => (
  <div className="pt-32 pb-20 min-h-screen bg-slate-50 flex items-center justify-center">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl border-4 border-[#25D366] animate-fade-in-up relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-[#25D366]" />
        <Sparkles className="w-16 h-16 text-[#25D366] mx-auto mb-8 animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight uppercase font-black italic">
          ESPERE! <br/>
          <span className="text-[#25D366]">OFERTA ÚNICA</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-700 mb-10 leading-relaxed font-medium">
          Multiplique seus resultados! Adicione o nosso <span className="text-[#25D366] font-black">Protocolo de Sucos Detox 2026</span> ao seu pedido agora por apenas mais <span className="bg-green-100 px-2 py-1 rounded text-green-800 font-black">R$ 9,90</span>.
        </p>
        <button 
          onClick={() => window.location.href = KIRVANO_CHECKOUT_URL}
          className={`${WHATSAPP_GREEN} ${WHATSAPP_GREEN_HOVER} text-white w-full py-8 rounded-3xl font-black text-2xl md:text-3xl shadow-2xl shadow-green-200 transition-all transform hover:scale-[1.03] active:scale-95 uppercase tracking-tighter mb-8 italic`}
        >
          SIM! QUERO ACELERAR MEUS RESULTADOS
        </button>
        <button 
          onClick={() => window.location.href = KIRVANO_CHECKOUT_URL}
          className="text-slate-400 font-bold hover:text-slate-600 transition underline text-lg"
        >
          Não, obrigado. Quero apenas o meu guia de saladas.
        </button>
      </div>
    </div>
  </div>
);

// --- Helpers ---

const BonusCard = ({ title, image, description, oldPrice }: { title: string, image: string, description: string, oldPrice: string }) => (
  <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-lg flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <div className="bg-[#25D366] py-4 px-6">
      <h3 className="text-white font-black text-lg uppercase tracking-wider text-center">{title}</h3>
    </div>
    <div className="aspect-video overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
    </div>
    <div className="p-8 flex-grow flex flex-col items-center text-center">
      <p className="text-slate-600 font-medium text-lg mb-8 flex-grow">{description}</p>
      <div className="mt-auto">
        <span className="text-slate-400 line-through block text-xl mb-2 font-bold">DE {oldPrice}</span>
        <div className="bg-[#FF4D00] text-white font-black text-4xl px-8 py-3 rounded-2xl italic tracking-tighter shadow-lg transform -rotate-3 border-4 border-white inline-block">
          GRÁTIS
        </div>
      </div>
    </div>
  </div>
);

const AccessItem = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#25D366] transition-all group">
    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#25D366] transition-colors">
      <Icon className="text-[#25D366] group-hover:text-white w-6 h-6 transition-colors" />
    </div>
    <span className="font-bold text-slate-700 md:text-lg leading-tight group-hover:text-slate-900">{text}</span>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:border-[#25D366] transition shadow-sm hover:shadow-2xl group">
    <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#25D366] transition-colors shadow-sm">
      <Icon className="text-[#25D366] group-hover:text-white w-9 h-9 transition-colors" />
    </div>
    <h3 className="text-2xl md:text-3xl font-black mb-5 tracking-tight text-slate-800">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-medium">{description}</p>
  </div>
);

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    { id: 1, name: "Mariana Silva", role: "Perdeu 8kg em 1 mês", content: "Eu achava que salada era só alface e tomate. Com esse guia, descobri sabores incríveis que me saciam.", image: "https://picsum.photos/seed/user1/100/100" },
    { id: 2, name: "Roberto Lima", role: "Atleta Amador", content: "As receitas são super rápidas de fazer. Ideal para quem tem o dia corrido e não quer fugir da dieta.", image: "https://picsum.photos/seed/user2/100/100" },
    { id: 3, name: "Cláudia Diniz", role: "Mãe de 2", content: "Até meus filhos começaram a comer salada! As apresentações são lindas e o sabor é nota dez.", image: "https://picsum.photos/seed/user3/100/100" },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-serif mb-20 leading-tight">Quem provou, <span className="text-[#25D366]">aprovou</span></h2>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-50 p-10 md:p-14 rounded-[3rem] relative hover:shadow-xl transition-all group">
              <div className="flex gap-1 text-orange-400 mb-10 group-hover:scale-105 transition-transform">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
              <p className="text-slate-700 text-xl md:text-2xl mb-12 italic font-bold leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-6">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
                <div>
                  <h4 className="font-black text-xl md:text-2xl text-slate-800">{t.name}</h4>
                  <p className="text-sm md:text-base text-[#25D366] font-black uppercase tracking-[0.15em]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs: FAQItem[] = [
    { question: "O guia é físico ou digital?", answer: "O guia é 100% digital em formato PDF de alta qualidade cinematográfica, que você pode acessar de qualquer celular, tablet or computador instantaneamente após a compra." },
    { question: "Como funciona a garantia?", answer: "Oferecemos 7 dias de garantia incondicional absoluta. Se não gostar de qualquer detalhe, basta nos enviar um e-mail e devolvemos cada centavo sem questionar." },
    { question: "Por que um valor tão baixo?", answer: "Acreditamos que uma alimentação saudável é um direito, não um luxo. Nosso objetivo é transformar o maior número de vidas possível, e um preço acessível garante que o valor nunca seja um obstáculo para quem deseja começar essa jornada de bem-estar." },
    { question: "Preciso de ingredientes caros?", answer: "De jeito nenhum! O foco são ingredientes simples, acessíveis e extremamente poderosos que você encontra em qualquer supermercado de bairro ou feira local sem gastar muito." }
  ];
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif text-center mb-20 leading-tight">Perguntas <span className="text-[#25D366]">Frequentes</span></h2>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-2 border-slate-50 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-8 md:p-12 text-left hover:bg-slate-50 transition-colors">
                <span className="font-black text-xl md:text-3xl text-slate-800 pr-10 leading-snug">{faq.question}</span>
                <ChevronDown className={`w-8 h-8 flex-shrink-0 text-[#25D366] transition-transform duration-500 ${openIndex === i ? 'rotate-180 scale-125' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="p-8 md:p-12 pt-0 text-xl md:text-2xl text-slate-600 bg-slate-50/20 leading-relaxed font-medium animate-fade-in-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App Entry ---

export default function App() {
  const [view, setView] = useState<'landing' | 'upsell'>('landing');

  const handleRedirectToCheckout = () => {
    window.location.href = KIRVANO_CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen selection:bg-green-200 selection:text-green-900 overflow-x-hidden">
      {view === 'landing' ? (
        <LandingPage onCheckout={handleRedirectToCheckout} />
      ) : (
        <UpsellPage />
      )}
      
      {/* Floating CTA for Mobile */}
      {view === 'landing' && (
        <div className="fixed bottom-8 left-4 right-4 z-40 md:hidden">
          <button 
            onClick={handleRedirectToCheckout}
            className={`${WHATSAPP_GREEN} ${WHATSAPP_GREEN_HOVER} text-white w-full py-6 rounded-3xl font-black text-xl text-center shadow-[0_20px_50px_rgba(37,211,102,0.4)] flex items-center justify-center gap-3 active:scale-95 transition-all uppercase tracking-tighter animate-pulse-custom`}
          >
            QUERO MELHORAR MINHA ALIMENTAÇÃO <ArrowRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </div>
  );
}
