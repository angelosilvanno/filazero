import { useState } from 'react';
import { LayoutDashboard, MapPin, Users, ClipboardList, BarChart3,  Settings, LogOut, Bell, Search, Filter, ArrowUpRight, MoreVertical, ChevronRight} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const [adminName] = useState(() => localStorage.getItem('userName') || 'Administrador');

  const handleLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  const estatisticas = [
    { label: 'Total de Atendimentos', valor: '1.284', icon: ClipboardList, trend: '+12%', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Tempo Médio de Espera', valor: '12 min', icon: BarChart3, trend: 'Meta: 15m', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Unidades Ativas', valor: '08', icon: MapPin, trend: '12 Totais', color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Pessoas na Fila Agora', valor: '42', icon: Users, trend: 'Live', color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const atendimentosRecentes = [
    { senha: 'A-204', cidadao: 'João Paulo Magalhães', unidade: 'Unidade Centro', servico: 'Emissão de RG', horario: '14:20', status: 'CHAMADO', corStatus: 'bg-blue-100 text-blue-600' },
    { senha: 'B-012', id: 'M-102', cidadao: 'Maria Clara Souza', unidade: 'Unidade Norte', servico: 'Consulta IPTU', horario: '14:15', status: 'EM ESPERA', corStatus: 'bg-amber-100 text-amber-600' },
    { senha: 'A-203', cidadao: 'Carlos Eduardo Lima', unidade: 'Unidade Centro', servico: 'Emissão de RG', horario: '14:02', status: 'CONCLUÍDO', corStatus: 'bg-emerald-100 text-emerald-600' },
    { senha: 'P-005', cidadao: 'Ana Beatriz Oliveira', unidade: 'Unidade Sul', servico: 'Preferencial', horario: '13:58', status: 'CONCLUÍDO', corStatus: 'bg-emerald-100 text-emerald-600' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans">
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col shrink-0 sticky top-0 h-screen">
        <div className="p-8 flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black">F</div>
          <span className="text-xl font-black text-blue-900 uppercase tracking-tighter">FilaZero <span className="text-[10px] bg-slate-100 text-slate-400 px-1.5 py-0.5 rounded ml-1">ADMIN</span></span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {[
            { label: 'Dashboard', icon: LayoutDashboard, active: true },
            { label: 'Unidades', icon: MapPin },
            { label: 'Atendimentos', icon: ClipboardList },
            { label: 'Relatórios', icon: BarChart3 },
            { label: 'Usuários', icon: Users },
          ].map((item) => (
            <button key={item.label} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${item.active ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}>
              <item.icon size={20} /> {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-50 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-slate-400 hover:bg-slate-50 transition-all"><Settings size={20} /> Configurações</button>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-red-400 hover:bg-red-50 transition-all"><LogOut size={20} /> Sair</button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 z-40">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            <input type="text" placeholder="Buscar por cidadão, senha ou unidade..." className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-400 hover:bg-slate-50 rounded-full transition-all">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
              <div className="text-right">
                <p className="text-sm font-black text-slate-900 leading-none">{adminName}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Super Admin</p>
              </div>
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 font-bold border border-slate-200">
                {adminName[0]}
              </div>
            </div>
          </div>
        </header>

        <main className="p-8 space-y-8 overflow-y-auto">
          <div>
            <h1 className="text-2xl font-black text-blue-900 tracking-tight">Dashboard Administrativo</h1>
            <p className="text-slate-400 text-sm font-medium">Bem-vindo de volta, {adminName.split(' ')[0]}. Aqui está o resumo de hoje.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {estatisticas.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-50 hover:shadow-md transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 ${stat.bg} ${stat.color} rounded-2xl group-hover:scale-110 transition-transform`}>
                    <stat.icon size={24} />
                  </div>
                  <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${stat.trend.includes('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                    {stat.trend}
                  </span>
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <p className={`text-3xl font-black ${stat.color} mt-1`}>{stat.valor}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-[40px] p-8 shadow-sm border border-slate-50">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-black text-blue-900 uppercase tracking-tight">Volume de Atendimentos</h3>
                <select className="bg-slate-50 border-none text-xs font-bold rounded-lg px-3 py-1.5 outline-none focus:ring-1 focus:ring-blue-600 transition-all">
                  <option>últimos 7 dias</option>
                  <option>últimos 30 dias</option>
                </select>
              </div>
              <div className="h-64 w-full flex items-end justify-between px-4 gap-4">
                {[40, 70, 45, 90, 65, 80, 30].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                    <div className="w-full bg-slate-50 rounded-t-xl relative overflow-hidden h-full flex items-end">
                      <div 
                        className={`w-full bg-blue-600 rounded-t-xl transition-all duration-1000 group-hover:bg-blue-400`} 
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-black text-slate-300 uppercase">{['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][i]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-50">
              <h3 className="text-lg font-black text-blue-900 uppercase tracking-tight mb-6">Status das Unidades</h3>
              <div className="space-y-4">
                {[
                  { nome: 'Unidade Centro', fila: 12, status: 'Aberto', cor: 'text-emerald-500', bg: 'bg-emerald-50' },
                  { nome: 'Unidade Norte', fila: 28, status: 'Aberto', cor: 'text-emerald-500', bg: 'bg-emerald-50' },
                  { nome: 'Unidade Sul', fila: 0, status: 'Fechado', cor: 'text-slate-400', bg: 'bg-slate-100' },
                ].map((unidade) => (
                  <div key={unidade.nome} className="p-4 border border-slate-50 rounded-3xl hover:bg-slate-50 transition-all group">
                    <div className="flex items-center justify-between">
                       <p className="font-black text-slate-800 text-sm">{unidade.nome}</p>
                       <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md ${unidade.bg} ${unidade.cor}`}>● {unidade.status}</span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-[10px] font-bold text-slate-400">Fila: <span className="text-slate-900">{unidade.fila} pessoas</span></p>
                      <ChevronRight size={14} className="text-slate-300 group-hover:text-blue-600 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 text-blue-600 font-black text-[11px] uppercase tracking-widest hover:underline">Ver todas as unidades</button>
            </div>
          </div>

          <div className="bg-white rounded-[40px] shadow-sm border border-slate-50 overflow-hidden mb-12">
            <div className="p-8 border-b border-slate-50 flex items-center justify-between">
              <h3 className="text-lg font-black text-blue-900 uppercase tracking-tight">Últimos Atendimentos</h3>
              <div className="flex gap-2">
                <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg transition-all"><Filter size={18} /></button>
                <button className="bg-slate-900 text-white px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-slate-800 transition-all">Exportar <ArrowUpRight size={14} /></button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50/50 text-[10px] font-black uppercase text-slate-400">
                  <tr>
                    <th className="px-8 py-5">Senha</th>
                    <th className="px-8 py-5">Cidadão</th>
                    <th className="px-8 py-5">Unidade</th>
                    <th className="px-8 py-5">Serviço</th>
                    <th className="px-8 py-5">Horário</th>
                    <th className="px-8 py-5">Status</th>
                    <th className="px-8 py-5"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {atendimentosRecentes.map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-5 font-black text-blue-600">{item.senha}</td>
                      <td className="px-8 py-5 font-bold text-slate-700">{item.cidadao}</td>
                      <td className="px-8 py-5 text-slate-500 text-sm font-medium">{item.unidade}</td>
                      <td className="px-8 py-5 text-slate-500 text-sm font-medium">{item.servico}</td>
                      <td className="px-8 py-5 text-slate-400 font-bold text-xs">{item.horario}</td>
                      <td className="px-8 py-5">
                        <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-tighter ${item.corStatus}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button className="p-2 text-slate-300 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-all"><MoreVertical size={18} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50/30 border-t border-slate-50 flex items-center justify-between">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Mostrando 1-4 de 28 atendimentos</p>
              <div className="flex gap-2">
                {[1, 2, 3].map(n => (
                  <button key={n} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black transition-all ${n === 1 ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'bg-white text-slate-400 border border-slate-100 hover:bg-slate-50'}`}>{n}</button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};