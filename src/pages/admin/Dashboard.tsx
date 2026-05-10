export const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-blue-900 mb-10">Dashboard Administrativo</h1>

        {/* Estatísticas Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Atendimentos Hoje', value: '1,284', color: 'text-blue-600' },
            { label: 'Tempo Médio', value: '08m 22s', color: 'text-emerald-600' },
            { label: 'Unidades Ativas', value: '07', color: 'text-purple-600' },
            { label: 'Alertas de Espera', value: '03', color: 'text-red-600' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-8 rounded-[30px] shadow-sm border border-slate-100">
              <p className="text-slate-400 text-xs font-black uppercase mb-2">{stat.label}</p>
              <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Gestão */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-[40px] shadow-lg">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-black text-blue-900">Gerenciar Unidades</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold">+ Nova Unidade</button>
            </div>
            {/* Lista simulada */}
            <div className="space-y-4">
              <div className="p-4 border-2 border-slate-50 rounded-2xl flex justify-between">
                <div>
                  <p className="font-bold">Posto de Saúde Central</p>
                  <p className="text-sm text-slate-400">08:00 - 18:00</p>
                </div>
                <button className="text-blue-600 font-bold">Editar</button>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[40px] shadow-lg">
            <h3 className="text-xl font-black text-blue-900 mb-8">Tipos de Atendimento</h3>
            <div className="flex gap-2">
              <input placeholder="Ex: Exame Laboratorial" className="flex-1 p-4 bg-slate-50 rounded-2xl outline-none border-2 border-transparent focus:border-blue-500" />
              <button className="bg-slate-900 text-white px-6 rounded-2xl font-bold">Adicionar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};