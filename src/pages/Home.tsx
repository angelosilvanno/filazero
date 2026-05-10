import { 
  Users, 
  Smartphone, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  Ticket, 
  BellRing 
} from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* --- HEADER / NAVBAR --- */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Ticket className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold text-blue-900 tracking-tight">FilaZero</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600">Como Funciona</a>
          <a href="#" className="hover:text-blue-600">Unidades</a>
          <a href="#" className="hover:text-blue-600">Suporte</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-colors">
          Entrar
        </button>
      </nav>

      {/* --- HERO SECTION (A parte de cima do vídeo) --- */}
      <section className="bg-blue-900 text-white pt-16 pb-32 px-6 rounded-b-[40px] md:rounded-b-[80px] text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            FilaZero
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Chega de esperar. Entre na fila pelo celular e acompanhe sua vez em tempo real, de onde você estiver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-5 rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition-transform">
              Entrar na fila
            </button>
            <button className="bg-blue-800/50 border-2 border-blue-400 text-white px-8 py-5 rounded-2xl font-bold text-xl hover:bg-blue-800 transition-colors">
              Já tenho conta
            </button>
          </div>
        </div>
      </section>

      {/* --- COMO FUNCIONA (Melhorado com base no vídeo) --- */}
      <section className="-mt-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">1. Escolha a unidade</h3>
            <p className="text-slate-500">Encontre o posto de saúde ou órgão público mais próximo.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <Ticket size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">2. Senha Digital</h3>
            <p className="text-slate-500">Retire sua senha virtual sem precisar estar no local fisicamente.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <BellRing size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">3. Seja Avisado</h3>
            <p className="text-slate-500">Receba uma notificação quando chegar a sua vez de ser atendido.</p>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO "EXPERIÊNCIA PREMIUM" (A parte que você pediu para melhorar) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-blue-900 mb-4">Experiência Premium</h2>
          <p className="text-slate-500 text-lg">Por que escolher o FilaZero para o seu dia a dia?</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-blue-600 transition-all duration-300">
            <Users className="text-blue-600 group-hover:text-white mb-6" size={40} />
            <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">Sem aglomeração</h4>
            <p className="text-slate-500 group-hover:text-blue-100 transition-colors">
              Aguarde sua vez no café, no carro ou em casa. O espaço é seu.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-blue-600 transition-all duration-300">
            <Clock className="text-blue-600 group-hover:text-white mb-6" size={40} />
            <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">Tempo Real</h4>
            <p className="text-slate-500 group-hover:text-blue-100 transition-colors">
              Visualize exatamente quantas pessoas estão na sua frente no momento.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-blue-600 transition-all duration-300">
            <CheckCircle2 className="text-blue-600 group-hover:text-white mb-6" size={40} />
            <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">100% Gratuito</h4>
            <p className="text-slate-500 group-hover:text-blue-100 transition-colors">
              Sem taxas para o cidadão. Um serviço público feito para você.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group p-8 rounded-3xl bg-slate-50 hover:bg-blue-600 transition-all duration-300">
            <Smartphone className="text-blue-600 group-hover:text-white mb-6" size={40} />
            <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">Fácil de usar</h4>
            <p className="text-slate-500 group-hover:text-blue-100 transition-colors">
              Interface pensada para todas as idades, com botões grandes e claros.
            </p>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO FINAL CTA (Chamada para ação) --- */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-4xl mx-auto bg-blue-900 rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full -ml-12 -mb-12"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
            Pronto para digitalizar sua espera?
          </h2>
          <p className="text-blue-200 text-lg mb-10 relative z-10">
            Centenas de estabelecimentos já utilizam o FilaZero para oferecer um atendimento superior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-lg transition-colors">
              Começar agora
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-colors">
              Saiba mais
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <Ticket className="text-white" size={18} />
            </div>
            <span className="text-xl font-bold text-blue-900">FilaZero</span>
          </div>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} FilaZero. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-blue-600">Privacidade</a>
            <a href="#" className="hover:text-blue-600">Termos</a>
            <a href="#" className="hover:text-blue-600">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
};