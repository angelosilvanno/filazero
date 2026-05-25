import { useState, useEffect } from 'react';
import { 
  Megaphone, 
  CheckCircle2, 
  XCircle, 
  Users, 
  ClipboardCheck, 
  LogOut, 
  ArrowRight, 
  List, 
  FileText,
  Bell,
  Settings,
  Star,
  Timer
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
  const [unitName] = useState(() => localStorage.getItem('unitName') || 'Unidade Central');
  const [abaAtiva, setAbaAtiva] = useState<'painel' | 'senhas' | 'relatorios'>('painel');
  const [fila, setFila] = useState<Paciente[]>([]);
  const [tempoDecorrido, setTempoDecorrido] = useState(0);
  const [concluidosHoje, setConcluidosHoje] = useState(32);

  useEffect(() => {
    const carregarDados = () => {
      let filaSalva = JSON.parse(localStorage.getItem('filaReal') || '[]');
      if (filaSalva.length === 0) {
        filaSalva = [
          { id: 'A043', nome: 'Mariana Ferreira Lima', servico: 'Vacinação', chegada: '08:15' },
          { id: 'B012', nome: 'João Carlos da Silva', servico: 'Consulta', chegada: '12:30' },
          { id: 'A045', nome: 'Beatriz Santos', servico: 'Exames', chegada: '15:02' }
        ];
        localStorage.setItem('filaReal', JSON.stringify(filaSalva));
      }
      setFila(filaSalva);
    };
    carregarDados();
    const interval = setInterval(carregarDados, 3000);
    const timer = setInterval(() => setTempoDecorrido(prev => prev + 1), 1000);
    return () => { clearInterval(interval); clearInterval(timer); };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
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

  const registrarFalta = () => {
    if (fila.length === 0) return;
    const novaFila = fila.slice(1);
    localStorage.setItem('filaReal', JSON.stringify(novaFila));
    setFila(novaFila);
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
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white"><Megaphone size={18} /></div>
            <span className="text-xl font-black text-blue-900 uppercase">FilaZero</span>
          </div>
          <div className="flex items-center gap-4 border-l border-slate-100 pl-8">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-black uppercase text-sm border-2 border-white shadow-sm">{adminName[0]}</div>
            <div>
              <p className="text-sm font-black text-slate-900 leading-none">{adminName}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-tighter">{unitName}</p>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-8">
          <div className="flex gap-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">
            <button onClick={() => setAbaAtiva('painel')} className={`${abaAtiva === 'painel' ? 'text-blue-600 border-b-2 border-blue-600' : ''} pb-1 transition-all`}>Painel</button>
            <button onClick={() => setAbaAtiva('senhas')} className={`${abaAtiva === 'senhas' ? 'text-blue-600 border-b-2 border-blue-600' : ''} pb-1 transition-all`}>Senhas</button>
            <button onClick={() => setAbaAtiva('relatorios')} className={`${abaAtiva === 'relatorios' ? 'text-blue-600 border-b-2 border-blue-600' : ''} pb-1 transition-all`}>Relatórios</button>
          </div>
          <div className="flex items-center gap-3 border-l border-slate-100 pl-8">
            <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"><Bell size={20} /></button>
            <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"><Settings size={20} /></button>
            <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 font-black text-[11px] hover:bg-red-50 px-4 py-2 rounded-xl transition-all uppercase tracking-widest border border-transparent hover:border-red-100 active:scale-95">
              <LogOut size={16} /> Sair
            </button>
          </div>
        </nav>
      </header>

      <main className="p-8 max-w-7xl mx-auto">
        {abaAtiva === 'painel' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-50 flex items-center justify-between transition-all">
                <div className="flex-1">
                  <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em]">Chamando Agora</span>
                  <h2 className="text-7xl font-black text-blue-900 leading-none my-5 tracking-tighter">{pacienteAtual.id}</h2>
                  <p className="text-3xl font-black text-slate-800 truncate pr-4">{pacienteAtual.nome}</p>
                  <p className="text-slate-400 flex items-center gap-2 mt-3 font-bold uppercase text-[10px] tracking-widest"><ClipboardCheck size={14} /> {pacienteAtual.servico}</p>
                </div>
                <button onClick={finalizarAtendimento} className="bg-blue-600 hover:bg-blue-700 text-white w-52 h-52 rounded-[40px] shadow-2xl flex flex-col items-center justify-center gap-4 transition-all hover:scale-105 active:scale-95 group shrink-0">
                  <Megaphone size={44} className="group-hover:rotate-12 transition-transform" />
                  <span className="text-sm font-black uppercase text-center leading-tight tracking-widest">Chamar<br/>Próximo</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-50">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tempo Decorrido</p>
                    <Timer size={18} className="text-slate-300" />
                  </div>
                  <h3 className={`text-6xl font-black mb-8 ${tempoDecorrido > 900 ? 'text-red-500' : 'text-slate-900'}`}>{formatarTempo(tempoDecorrido)}</h3>
                  <div className="flex gap-3">
                    <button onClick={finalizarAtendimento} className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-100">
                      <CheckCircle2 size={18} /> Finalizar
                    </button>
                    <button onClick={registrarFalta} className="flex-1 border-2 border-red-50 text-red-500 py-4 rounded-2xl font-black uppercase text-[10px] flex items-center justify-center gap-2 hover:bg-red-50 transition-all active:scale-95">
                      <XCircle size={18} /> Falta
                    </button>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white rounded-[40px] p-7 shadow-sm border border-slate-50 flex items-center gap-6">
                    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center shadow-inner"><Users size={28} /></div>
                    <div><p className="text-3xl font-black text-slate-900 leading-none">{fila.length}</p><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Aguardando na Fila</p></div>
                  </div>
                  <div className="bg-white rounded-[40px] p-7 shadow-sm border border-slate-50 flex items-center gap-6">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center shadow-inner"><ClipboardCheck size={28} /></div>
                    <div><p className="text-3xl font-black text-slate-900 leading-none">{concluidosHoje}</p><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Concluídos Hoje</p></div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-50 flex justify-between items-center px-12">
                <div className="text-center">
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Ritmo Médio</p>
                   <p className="text-xl font-black text-blue-600">14 min</p>
                </div>
                <div className="h-10 w-px bg-slate-100"></div>
                <div className="text-center">
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Pico de Espera</p>
                   <p className="text-xl font-black text-slate-900">32 min</p>
                </div>
                <div className="h-10 w-px bg-slate-100"></div>
                <div className="text-center">
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Satisfação</p>
                   <div className="flex items-center gap-1.5">
                     <Star size={16} fill="#fbbf24" className="text-amber-400" />
                     <p className="text-xl font-black text-slate-900">4.8/5.0</p>
                   </div>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4 bg-white rounded-[40px] p-8 shadow-sm border border-slate-50 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-black text-slate-900 tracking-tight">Fila Atual</h3>
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-[9px] font-black animate-pulse flex items-center gap-1.5 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span> AO VIVO
                </div>
              </div>
              <div className="space-y-4 flex-1">
                {fila.length > 1 ? fila.slice(1).map((p) => (
                  <div key={p.id} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-3xl transition-all border border-transparent hover:border-slate-100 hover:shadow-sm group cursor-pointer active:scale-95">
                    <div className="w-12 h-10 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center font-black group-hover:bg-white group-hover:text-blue-600 transition-colors">{p.id}</div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-800 text-sm leading-tight">{p.nome}</p>
                      <p className="text-[9px] text-slate-400 font-bold uppercase mt-1 tracking-tighter">{p.servico}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">{p.chegada}</p>
                      <p className="text-[8px] font-black text-slate-300 uppercase mt-0.5">espera</p>
                    </div>
                  </div>
                )) : <p className="text-center text-slate-400 font-bold py-10 text-sm italic">Nenhum próximo paciente.</p>}
              </div>
              <button className="mt-8 flex items-center gap-2 text-blue-600 font-black text-[11px] mx-auto hover:gap-3 transition-all uppercase tracking-widest group">
                Ver Fila Completa <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </aside>
          </div>
        )}

        {abaAtiva === 'senhas' && (
          <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-50 animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-blue-900 mb-8 flex items-center gap-3"><List size={28} /> Gerenciamento de Senhas</h2>
            <div className="overflow-hidden rounded-3xl border border-slate-100">
              <table className="w-full text-left"><thead className="bg-slate-50 text-[10px] font-black uppercase text-slate-400"><tr><th className="p-5">Senha</th><th className="p-5">Paciente</th><th className="p-5">Serviço</th><th className="p-5">Status</th></tr></thead>
                <tbody className="divide-y divide-slate-50">
                  {fila.map((p, i) => (
                    <tr key={p.id} className="text-sm font-bold text-slate-700 hover:bg-slate-50/50 transition-colors">
                      <td className="p-5 text-blue-600">{p.id}</td><td className="p-5">{p.nome}</td><td className="p-5 text-slate-500 font-medium">{p.servico}</td><td className="p-5"><span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${i === 0 ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>{i === 0 ? 'Em Atendimento' : 'Aguardando'}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {abaAtiva === 'relatorios' && (
          <div className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100 text-center py-32 animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-slate-50 rounded-[28px] flex items-center justify-center mx-auto mb-8 shadow-inner"><FileText size={40} className="text-slate-200" /></div>
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Relatórios de Desempenho</h2>
            <p className="text-slate-500 mt-3 max-w-md mx-auto font-medium">As métricas de atendimento estão sendo processadas.</p>
          </div>
        )}
      </main>
    </div>
  );
};