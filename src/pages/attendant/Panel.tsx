export const AttendantPanel = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black text-blue-900 tracking-tight">Painel de Chamada</h1>
          <div className="flex gap-4">
            <div className="bg-white px-6 py-2 rounded-full shadow-sm font-bold text-blue-600 border border-blue-100">
              Posto de Saúde Central
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card Principal de Ação */}
          <div className="lg:col-span-2 bg-white rounded-[40px] shadow-xl p-10 border-t-8 border-blue-600">
            <p className="text-slate-400 uppercase font-black text-sm mb-4">Em atendimento agora</p>
            <div className="flex items-center justify-between">
              <span className="text-9xl font-black text-blue-900">A-042</span>
              <button className="bg-blue-600 text-white px-10 py-10 rounded-full font-black text-2xl shadow-xl hover:scale-105 transition-all">
                CHAMAR <br/> PRÓXIMO
              </button>
            </div>
            <div className="mt-10 pt-10 border-t border-slate-100 flex gap-4">
              <button className="flex-1 bg-slate-100 py-4 rounded-2xl font-bold text-slate-600">Pular (Não compareceu)</button>
              <button className="flex-1 bg-emerald-100 py-4 rounded-2xl font-bold text-emerald-700">Finalizar Atendimento</button>
            </div>
          </div>

          {/* Lista da Fila Lateral */}
          <div className="bg-white rounded-[40px] shadow-xl p-8">
            <h3 className="font-black text-blue-900 mb-6 uppercase text-sm tracking-widest">Próximos na Fila</h3>
            <div className="space-y-4">
              {['A-043', 'A-044', 'B-012', 'A-045'].map((senha, idx) => (
                <div key={senha} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                  <span className="font-black text-xl text-blue-900">{senha}</span>
                  <span className="text-xs font-bold text-slate-400">{idx + 1}º da fila</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};