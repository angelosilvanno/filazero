import { useState, useEffect } from 'react';
import { 
  Megaphone, 
  CheckCircle2, 
  XCircle, 
  Users, 
  ClipboardCheck, 
  LogOut, 
  ArrowRight,
  Timer,
  Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AttendantPanel = () => {
  const navigate = useNavigate();
  
  // Inicialização segura para evitar erros de renderização
  const [adminName] = useState(() => localStorage.getItem('userName') || 'Administrador');
  const [unitName] = useState(() => localStorage.getItem('unitName') || 'Unidade de Saúde Central');
  
  const [tempoDecorrido, setTempoDecorrido] = useState(0);
  const [indiceFila, setIndiceFila] = useState(0);

  // Padronização da lista para evitar erro de propriedade inexistente
  const [listaPacientes] = useState([
    { id: 'A043', nome: 'Ângelo Silvano', servico: 'Consulta Clínica Geral' },
    { id: 'A044', nome: 'Maria Silva Pereira', servico: 'Triagem' },
    { id: 'B012', nome: 'Carlos Eduardo Lima', servico: 'Farmácia' },
    { id: 'A045', nome: 'Beatriz Santos', servico: 'Consulta' },
    { id: 'A046', nome: 'Fernando Gomez', servico: 'Vacinação' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTempoDecorrido(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const chamarProximo = () => {
    if (indiceFila < listaPacientes.length - 1) {
      setIndiceFila(prev => prev + 1);
      setTempoDecorrido(0);
    } else {
      alert("Fila finalizada.");
    }
  };

  const formatarTempo = (segundos: number) => {
    const mins = Math.floor(segundos / 60);
    const segs = segundos % 60;
    return `${mins.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
  };

  const pacienteAtual = listaPacientes[indiceFila];
  const proximosNaLista = listaPacientes.slice(indiceFila + 1);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      {/* CABEÇALHO */}
      <header className="bg-white border-b border-slate-100 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Megaphone size={18} />
            </div>
            <span className="text-xl font-black text-blue-900 uppercase">FilaZero</span>
          </div>

          <div className="flex items-center gap-4 border-l border-slate-100 pl-8">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold uppercase">
              {adminName[0]}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">{adminName}</p>
              <p className="text-[11px] text-slate-400 font-bold uppercase">{unitName}</p>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-8">
          <div className="flex gap-6 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <button className="text-blue-600 border-b-2 border-blue-600 pb-1">Painel</button>
            <button className="hover:text-slate-600">Senhas</button>
            <button className="hover:text-slate-600">Relatórios</button>
          </div>
          <button 
            onClick={() => navigate('/login')} 
            className="flex items-center gap-2 text-red-500 font-bold text-sm hover:bg-red-50 px-4 py-2 rounded-xl transition-all uppercase tracking-tighter"
          >
            <LogOut size={18} /> Sair
          </button>
        </nav>
      </header>

      <main className="p-8 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          
          {/* ÁREA DE CHAMADA */}
          <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-50 flex items-center justify-between">
            <div>
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-widest">Chamando Agora</span>
              <h2 className="text-[110px] font-black text-blue-900 leading-none my-2 tracking-tighter">{pacienteAtual.id}</h2>
              <p className="text-3xl font-black text-slate-800">{pacienteAtual.nome}</p>
              <p className="text-slate-400 flex items-center gap-2 mt-2 font-medium">
                <ClipboardCheck size={18} /> {pacienteAtual.servico}
              </p>
            </div>
            
            <button 
              onClick={chamarProximo}
              className="bg-blue-600 hover:bg-blue-700 text-white w-60 h-60 rounded-[40px] shadow-2xl flex flex-col items-center justify-center gap-4 transition-all hover:scale-105 active:scale-95"
            >
              <Megaphone size={48} className="animate-bounce" />
              <span className="text-xl font-black uppercase text-center leading-tight">Chamar<br/>Próximo</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* TEMPO DE ATENDIMENTO */}
            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-50">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Tempo de Atendimento</p>
                  <h3 className={`text-5xl font-black ${tempoDecorrido > 900 ? 'text-red-500' : 'text-slate-900'}`}>
                    {formatarTempo(tempoDecorrido)}
                  </h3>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl text-slate-400">
                  <Timer size={24} />
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all">
                  <CheckCircle2 size={20} /> Finalizar e Liberar
                </button>
                <button className="w-full border-2 border-red-50 text-red-400 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 transition-all">
                  <XCircle size={20} /> Registrar Falta
                </button>
              </div>
            </div>

            {/* STATUS DA FILA */}
            <div className="space-y-6">
              <div className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-50 flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center">
                  <Users size={32} />
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900 leading-none">{proximosNaLista.length}</p>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-1">Aguardando na Fila</p>
                </div>
              </div>
              <div className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-50 flex items-center gap-6">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center">
                  <ClipboardCheck size={32} />
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900 leading-none">{indiceFila + 27}</p>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-1">Concluídos Hoje</p>
                </div>
              </div>
            </div>
          </div>

          {/* MÉTRICAS DE APOIO */}
          <div className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-50 grid grid-cols-3 text-center items-center">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Ritmo Médio</p>
              <p className="text-2xl font-black text-blue-600">~ 12 min</p>
            </div>
            <div className="w-px h-12 bg-slate-100 mx-auto"></div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Satisfação</p>
              <div className="flex items-center justify-center gap-1 text-amber-400">
                <Star size={20} fill="currentColor" />
                <span className="text-2xl font-black text-slate-900">4.8</span>
              </div>
            </div>
            <div className="w-px h-12 bg-slate-100 mx-auto"></div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Data</p>
              <p className="text-xl font-bold text-slate-900">{new Date().toLocaleDateString('pt-BR')}</p>
            </div>
          </div>
        </div>

        {/* LISTA LATERAL */}
        <aside className="lg:col-span-4 bg-white rounded-[40px] p-8 shadow-sm border border-slate-50 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Fila Atual</h3>
            <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-[10px] font-black animate-pulse tracking-widest">AO VIVO</span>
          </div>

          <div className="space-y-4 flex-1">
            {proximosNaLista.length > 0 ? proximosNaLista.map((p) => (
              <div key={p.id} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-3xl transition-all border border-transparent hover:border-slate-100">
                <div className="w-14 h-10 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center font-black">{p.id}</div>
                <div className="flex-1">
                  <p className="font-bold text-slate-800 text-sm leading-tight">{p.nome}</p>
                  <p className="text-[10px] text-blue-600 font-bold mt-1 tracking-widest uppercase">{p.servico}</p>
                </div>
              </div>
            )) : (
              <p className="text-center text-slate-400 font-bold py-10">Não há mais pacientes.</p>
            )}
          </div>

          <button className="mt-8 flex items-center gap-2 text-blue-600 font-black text-sm mx-auto hover:translate-x-2 transition-all">
            Ver Fila Completa <ArrowRight size={18} />
          </button>
        </aside>
      </main>
    </div>
  );
};