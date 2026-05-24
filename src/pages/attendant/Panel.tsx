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
  
  const [adminName] = useState(() => localStorage.getItem('userName') || 'Administrador');
  const [unitName] = useState(() => localStorage.getItem('unitName') || 'Unidade de Saúde Central');
  
  const [tempoDecorrido, setTempoDecorrido] = useState(0);
  const [indiceFila, setIndiceFila] = useState(0);
  const [concluidosHoje, setConcluidosHoje] = useState(30);

  const [listaPacientes] = useState([
    { id: 'A046', nome: 'Fernando Gomez', servico: 'Vacinação' },
    { id: 'A047', nome: 'Beatriz Santos', servico: 'Consulta' },
    { id: 'B015', nome: 'Carlos Eduardo Lima', servico: 'Farmácia' },
    { id: 'A048', nome: 'Maria Silva Pereira', servico: 'Triagem' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => setTempoDecorrido(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const avancarFila = () => {
    if (indiceFila < listaPacientes.length - 1) {
      setIndiceFila(prev => prev + 1);
      setTempoDecorrido(0);
    } else {
      alert("Todos os pacientes da fila foram chamados.");
    }
  };

  const finalizarAtendimento = () => {
    setConcluidosHoje(prev => prev + 1);
    avancarFila();
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
      <header className="bg-white border-b border-slate-100 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Megaphone size={18} />
            </div>
            <span className="text-xl font-black text-blue-900 uppercase">FilaZero</span>
          </div>
          <div className="flex items-center gap-4 border-l border-slate-100 pl-8">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-black uppercase">
              {adminName[0]}
            </div>
            <div>
              <p className="text-sm font-black text-slate-900 leading-none">{adminName}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{unitName}</p>
            </div>
          </div>
        </div>
        <nav className="flex items-center gap-8">
          <div className="flex gap-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">
            <button className="text-blue-600 border-b-2 border-blue-600 pb-1">Painel</button>
            <button className="hover:text-slate-600 transition-colors">Senhas</button>
            <button className="hover:text-slate-600 transition-colors">Relatórios</button>
          </div>
          <button 
            onClick={handleLogout} 
            className="flex items-center gap-2 text-red-500 font-black text-[11px] hover:bg-red-50 px-4 py-2 rounded-xl transition-all uppercase tracking-widest border border-transparent hover:border-red-100 active:scale-95"
          >
            <LogOut size={16} /> Sair
          </button>
        </nav>
      </header>

      <main className="p-8 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-50 flex items-center justify-between">
            <div>
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Chamando Agora</span>
              <h2 className="text-[110px] font-black text-blue-900 leading-none my-2 tracking-tighter">{pacienteAtual.id}</h2>
              <p className="text-4xl font-black text-slate-800 tracking-tight">{pacienteAtual.nome}</p>
              <p className="text-slate-400 flex items-center gap-2 mt-3 font-bold uppercase text-xs tracking-widest">
                <ClipboardCheck size={16} /> {pacienteAtual.servico}
              </p>
            </div>
            <button 
              onClick={avancarFila} 
              className="bg-blue-600 hover:bg-blue-700 text-white w-64 h-64 rounded-[40px] shadow-2xl flex flex-col items-center justify-center gap-4 transition-all hover:scale-105 active:scale-95 group"
            >
              <Megaphone size={56} className="group-hover:rotate-12 transition-transform" />
              <span className="text-xl font-black uppercase text-center leading-tight">Chamar<br/>Próximo</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-50">
              <div className="flex justify-between items-start mb-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tempo de Atendimento</p>
                <Timer size={18} className="text-slate-300" />
              </div>
              <h3 className={`text-6xl font-black mb-8 ${tempoDecorrido > 900 ? 'text-red-500' : 'text-slate-900'}`}>
                {formatarTempo(tempoDecorrido)}
              </h3>
              <div className="space-y-3">
                <button 
                  onClick={finalizarAtendimento} 
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-5 rounded-2xl font-black uppercase text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-100"
                >
                  <CheckCircle2 size={20} /> Finalizar e Liberar
                </button>
                <button 
                  onClick={avancarFila} 
                  className="w-full border-2 border-red-50 text-red-500 py-4 rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-2 hover:bg-red-50 transition-all active:scale-95"
                >
                  <XCircle size={18} /> Registrar Falta
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-50 flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center">
                  <Users size={32} />
                </div>
                <div>
                  <p className="text-4xl font-black text-slate-900 leading-none">{proximosNaLista.length}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Aguardando na Fila</p>
                </div>
              </div>
              <div className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-50 flex items-center gap-6">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center">
                  <ClipboardCheck size={32} />
                </div>
                <div>
                  <p className="text-4xl font-black text-slate-900 leading-none">{concluidosHoje}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Concluídos Hoje</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-50 grid grid-cols-3 text-center items-center">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Ritmo Médio</p>
              <p className="text-2xl font-black text-blue-600">~ 12 min</p>
            </div>
            <div className="w-px h-12 bg-slate-100 mx-auto"></div>
            <div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Star size={18} fill="#fbbf24" className="text-amber-400" />
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Satisfação</p>
              </div>
              <p className="text-2xl font-black text-slate-900">4.8</p>
            </div>
            <div className="w-px h-12 bg-slate-100 mx-auto"></div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Data</p>
              <p className="text-xl font-bold text-slate-900">{new Date().toLocaleDateString('pt-BR')}</p>
            </div>
          </div>
        </div>

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
          <button className="mt-8 flex items-center gap-2 text-blue-600 font-black text-sm mx-auto hover:translate-x-2 transition-all group">
            Ver Fila Completa <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </aside>
      </main>
    </div>
  );
};