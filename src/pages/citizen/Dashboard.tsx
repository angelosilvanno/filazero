import { useState } from 'react';
import { Link } from 'react-router-dom';

export const CitizenDashboard = () => {
  const [userName] = useState(() => {
    return localStorage.getItem('userName') || 'Cidadão';
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-blue-900 p-8 rounded-b-[40px] text-white">
        <h1 className="text-2xl font-bold">Olá, {userName}</h1>
        <p className="text-blue-200 text-sm">Escolha onde deseja ser atendido hoje.</p>
      </header>

      <main className="p-6 -mt-10 max-w-2xl mx-auto space-y-6">
        <div className="bg-white p-8 rounded-[40px] shadow-xl space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Escolha a Unidade</label>
            <select className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-3xl text-lg appearance-none outline-none focus:border-blue-500">
              <option>Posto de Saúde Central</option>
              <option>Secretaria de Urbanismo</option>
              <option>Clínica da Família Norte</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">O que você precisa?</label>
            <div className="grid grid-cols-1 gap-3">
              {['Consulta Médica', 'Vacinação', 'Retirada de Exames'].map((item) => (
                <button 
                  key={item} 
                  type="button"
                  className="p-5 border-2 border-slate-100 rounded-3xl text-left hover:border-blue-500 hover:bg-blue-50 transition-all font-medium text-slate-700"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <Link 
            to="/status" 
            className="w-full bg-emerald-500 text-white py-6 rounded-3xl font-black text-2xl shadow-xl hover:bg-emerald-600 transition-all text-center block active:scale-95"
          >
            GERAR SENHA DIGITAL
          </Link>
        </div>
      </main>
    </div>
  );
};