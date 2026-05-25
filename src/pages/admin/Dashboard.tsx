import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ChevronDown, Check, LogOut } from 'lucide-react';

export const CitizenDashboard = () => {
  const navigate = useNavigate();
  const [userName] = useState(() => localStorage.getItem('userName') || 'Cidadão');
  const [servicoSelecionado, setServicoSelecionado] = useState<string | null>(null);
  const servicos = ['Consulta Médica', 'Vacinação', 'Retirada de Exames'];

  const handleGerarSenha = () => {
    if (!servicoSelecionado) return;
    const filaAtual = JSON.parse(localStorage.getItem('filaReal') || '[]');
    const novaSenha = {
      id: `A${Math.floor(Math.random() * 900) + 100}`,
      nome: userName,
      servico: servicoSelecionado,
      chegada: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
    filaAtual.push(novaSenha);
    localStorage.setItem('filaReal', JSON.stringify(filaAtual));
    localStorage.setItem('minhaSenha', JSON.stringify(novaSenha));
    navigate('/status');
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-x-hidden">
      <header className="bg-blue-900 p-8 pt-12 rounded-b-[40px] text-white shadow-lg relative shrink-0">
        <div className="flex justify-between items-start max-w-2xl mx-auto w-full">
          <div>
            <h1 className="text-2xl font-bold">Olá, {userName}</h1>
            <p className="text-blue-200 text-sm">Escolha onde deseja ser atendido hoje.</p>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-xs font-bold transition-all uppercase border border-white/10 active:scale-95">
            <LogOut size={16} /> Sair
          </button>
        </div>
      </header>

      <main className="p-6 -mt-10 max-w-2xl mx-auto w-full space-y-6">
        <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-50 space-y-8">
          <div className="space-y-3">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Escolha a Unidade</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-blue-600"><MapPin size={20} /></div>
              <select className="w-full p-5 pl-14 bg-slate-50 border-none rounded-3xl text-lg font-medium text-slate-700 appearance-none outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                <option>Posto de Saúde Central</option>
                <option>Secretaria de Urbanismo</option>
                <option>Clínica da Família Norte</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none text-slate-400"><ChevronDown size={20} /></div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">O que você precisa?</label>
            <div className="grid grid-cols-1 gap-3">
              {servicos.map((item) => (
                <button 
                  key={item} 
                  type="button"
                  onClick={() => setServicoSelecionado(item)}
                  className={`p-5 border-2 rounded-3xl text-left flex items-center justify-between transition-all font-bold ${
                    servicoSelecionado === item 
                    ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md ring-1 ring-blue-600' 
                    : 'border-slate-100 text-slate-600 hover:border-blue-200 hover:bg-slate-50'
                  }`}
                >
                  {item}
                  {servicoSelecionado === item && <Check size={20} className="text-blue-600" />}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={handleGerarSenha}
            className={`w-full py-6 rounded-3xl font-black text-2xl shadow-xl transition-all text-center block active:scale-95 ${
              servicoSelecionado 
              ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-200' 
              : 'bg-slate-100 text-slate-300 cursor-not-allowed'
            }`}
          >
            GERAR SENHA DIGITAL
          </button>
        </div>
      </main>
    </div>
  );
};