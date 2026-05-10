import { Clock, Users } from 'lucide-react';

export const QueueStatus = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl overflow-hidden">
        {/* Header da Senha */}
        <div className="bg-blue-600 p-12 text-center text-white">
          <p className="text-blue-100 uppercase tracking-widest font-bold mb-2">Sua Senha</p>
          <h2 className="text-8xl font-black">A-043</h2>
        </div>

        <div className="p-10 space-y-8">
          <div className="flex justify-between">
            <div className="text-center flex-1 border-r border-slate-100">
              <Users className="mx-auto text-blue-600 mb-2" />
              <p className="text-slate-400 text-xs uppercase font-bold">Posição</p>
              <p className="text-2xl font-black text-blue-900">4º Lugar</p>
            </div>
            <div className="text-center flex-1">
              <Clock className="mx-auto text-blue-600 mb-2" />
              <p className="text-slate-400 text-xs uppercase font-bold">Espera Estimada</p>
              <p className="text-2xl font-black text-blue-900">~ 28 min</p>
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded-3xl border-2 border-emerald-100 text-center animate-pulse">
            <p className="text-emerald-800 font-bold">CHAMANDO AGORA</p>
            <p className="text-4xl font-black text-emerald-600">A-039</p>
          </div>

          <button className="w-full py-4 text-red-500 font-bold hover:bg-red-50 rounded-2xl transition-all">
            Cancelar Senha
          </button>
        </div>
      </div>
    </div>
  );
};