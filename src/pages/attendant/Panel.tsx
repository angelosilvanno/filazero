import { useState, useEffect } from 'react';
import { 
  Megaphone,Users, ClipboardCheck, 
  LogOut, ArrowRight, List, FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Paciente {
  id: string;
  nome: string;
  servico: string;
  chegada?: string;
}

export const AttendantPanel = () => {
  const navigate = useNavigate();
  const [adminName] = useState(() => localStorage.getItem('userName') || 'Administrador');
  const [abaAtiva, setAbaAtiva] = useState<'painel' | 'senhas' | 'relatorios'>('painel');
  const [fila, setFila] = useState<Paciente[]>([]);
  const [tempoDecorrido, setTempoDecorrido] = useState(0);
  const [concluidosHoje, setConcluidosHoje] = useState(32);

  useEffect(() => {
    const carregarDados = () => {
      const filaSalva = JSON.parse(localStorage.getItem('filaReal') || '[]');
      setFila(filaSalva);
    };
    carregarDados();
    const interval = setInterval(carregarDados, 3000);
    const timer = setInterval(() => setTempoDecorrido(prev => prev + 1), 1000);
    return () => { 
      clearInterval(interval); 
      clearInterval(timer); 
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const finalizarAtendimento = () => {
    if (fila.length === 0) return;
    const novaFila = fila.slice(1);
    localStorage.setItem('filaReal', JSON.stringify(novaFila));
    setFila(novaFila);
    setConcluidosHoje(prev => prev + 1);
    setTempoDecorrido(0);
  };

  const formatarTempo = (segundos: number) => {
    const mins = Math.floor(segundos / 60);
    const segs = segundos % 60;
    return `${mins.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
  };

  const pacienteAtual = fila[0] || { id: '---', nome: 'Fila Vazia', servico: 'Aguardando pacientes' };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-x-hidden">
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
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-tighter">Unidade Central</p>
            </div>
          </div>
        </div>
        <nav className="flex items-center gap-8">
          <div className="flex gap-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">
            <button onClick={() => setAbaAtiva('painel')} className={`${abaAtiva === 'painel' ? 'text-blue-600 border-b-2 border-blue-600' : ''} pb-1 transition-all`}>Painel</button>
            <button onClick={() => setAbaAtiva('senhas')} className={`${abaAtiva === 'senhas' ? 'text-blue-600 border-b-2 border-blue-600' : ''} pb-1 transition-all`}>Senhas</button>
            <button onClick={() => setAbaAtiva('relatorios')} className={`${abaAtiva === 'relatorios' ? 'text-blue-600 border-b-2 border-blue-600' : ''} pb-1 transition-all`}>Relatórios</button>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 font-black text-[11px] hover:bg-red-50 px-4 py-2 rounded-xl transition-all uppercase tracking-widest border border-transparent hover:border-red-100 active:scale-95">
            <LogOut size={16} /> Sair
          </button>
        </nav>
      </header>

      <main className="p-8 max-w-7xl mx-auto">
        {abaAtiva === 'painel' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-50 flex items-center justify-between">
                <div className="flex-1">
                  <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Em Atendimento</span>
                  <h2 className="text-6xl font-black text-blue-900 leading-none my-4 tracking-tighter">{pacienteAtual.id}</h2>
                  <p className="text-3xl font-black text-slate-800 truncate pr-4">{pacienteAtual.nome}</p>
                  <p className="text-slate-400 flex items-center gap-2 mt-3 font-bold uppercase text-xs tracking-widest"><ClipboardCheck size={16} /> {pacienteAtual.servico}</p>
                </div>
                <button onClick={finalizarAtendimento} className="bg-blue-600 hover:bg-blue-700 text-white w-48 h-42 rounded-[40px] shadow-2xl flex flex-col items-center justify-center gap-4 transition-all hover:scale-105 active:scale-95 group shrink-0 py-10 px-10">
                  <Megaphone size={32} className="group-hover:rotate-12 transition-transform" />
                  <span className="text-sm font-black uppercase text-center leading-tight">Chamar Próximo</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-50">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Tempo Decorrido</p>
                  <h3 className={`text-5xl font-black mb-8 ${tempoDecorrido > 900 ? 'text-red-500' : 'text-slate-900'}`}>{formatarTempo(tempoDecorrido)}</h3>
                  <div className="flex gap-3">
                    <button onClick={finalizarAtendimento} className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-100">Finalizar</button>
                    <button onClick={finalizarAtendimento} className="flex-1 border-2 border-red-50 text-red-500 py-4 rounded-2xl font-black uppercase text-[10px] flex items-center justify-center gap-2 hover:bg-red-50 transition-all active:scale-95 text-center">Falta</button>
                  </div>
                </div>
                <div className="space-y-6 flex flex-col justify-center">
                  <div className="bg-white rounded-[40px] p-6 shadow-sm border border-slate-50 flex items-center gap-6">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center"><Users size={24} /></div>
                    <div><p className="text-2xl font-black text-slate-900 leading-none">{fila.length}</p><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Na Fila</p></div>
                  </div>
                  <div className="bg-white rounded-[40px] p-6 shadow-sm border border-slate-50 flex items-center gap-6">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center"><ClipboardCheck size={24} /></div>
                    <div><p className="text-2xl font-black text-slate-900 leading-none">{concluidosHoje}</p><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Concluídos</p></div>
                  </div>
                </div>
              </div>
            </div>
            <aside className="lg:col-span-4 bg-white rounded-[40px] p-8 shadow-sm border border-slate-50 flex flex-col">
              <h3 className="text-xl font-black text-slate-900 tracking-tight mb-8">Fila Atual</h3>
              <div className="space-y-4 flex-1">
                {fila.length > 1 ? fila.slice(1).map((p) => (
                  <div key={p.id} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-3xl transition-all border border-transparent hover:border-slate-100">
                    <div className="w-12 h-10 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center font-black">{p.id}</div>
                    <div className="flex-1"><p className="font-bold text-slate-800 text-sm leading-tight">{p.nome}</p><p className="text-[10px] text-blue-600 font-bold uppercase mt-1 tracking-tighter">{p.servico}</p></div>
                  </div>
                )) : <p className="text-center text-slate-400 font-bold py-10 text-sm italic">Nenhum próximo paciente.</p>}
              </div>
              <button className="mt-8 flex items-center justify-center gap-2 text-blue-600 font-black text-xs hover:translate-x-1 transition-all group uppercase tracking-widest">
                Ver Fila Completa <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </aside>
          </div>
        )}

        {abaAtiva === 'senhas' && (
          <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100 animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-blue-900 mb-8 flex items-center gap-3"><List size={28} /> Gerenciamento de Senhas</h2>
            <div className="overflow-hidden rounded-3xl border border-slate-100">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] font-black uppercase text-slate-400">
                  <tr><th className="p-5">Senha</th><th className="p-5">Paciente</th><th className="p-5">Serviço</th><th className="p-5">Status</th></tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {fila.map((p, i) => (
                    <tr key={p.id} className="text-sm font-bold text-slate-700 hover:bg-slate-50/50 transition-colors">
                      <td className="p-5 text-blue-600">{p.id}</td>
                      <td className="p-5">{p.nome}</td>
                      <td className="p-5 text-slate-500 font-medium">{p.servico}</td>
                      <td className="p-5">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${i === 0 ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>
                          {i === 0 ? 'Em Atendimento' : 'Aguardando'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {abaAtiva === 'relatorios' && (
          <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100 text-center py-32 animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-slate-50 rounded-[28px] flex items-center justify-center mx-auto mb-8 shadow-inner">
              <FileText size={40} className="text-slate-200" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Relatórios de Desempenho</h2>
            <p className="text-slate-500 mt-3 max-w-md mx-auto font-medium">As métricas de atendimento estão sendo processadas.</p>
          </div>
        )}
      </main>
    </div>
  );
};