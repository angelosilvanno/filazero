import { useState } from 'react';
import { Clock, Users, ArrowLeft, MapPin, Bell, BellRing, Info, CheckCircle2,  Ticket} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const QueueStatus = () => {
  const navigate = useNavigate();
  const [notificar, setNotificar] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <header className="bg-blue-600 p-6 pt-10 rounded-b-[40px] shadow-lg text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="relative z-10 flex flex-col gap-4 max-w-md mx-auto">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/citizen')}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="bg-white/20 px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase">Ao Vivo</div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-inner">
              <MapPin size={24} />
            </div>
            <div>
              <h2 className="font-black text-xl leading-none">Posto de Saúde Central</h2>
              <p className="text-blue-100 text-xs mt-1">Rua das Flores, 123 • Centro</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6 -mt-8 max-w-md mx-auto w-full space-y-6 pb-12">
        <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 border border-white overflow-hidden">
          <div className="p-8 text-center border-b border-slate-50">
            <p className="text-slate-400 text-xs font-black uppercase tracking-[0.2em] mb-2">Sua Senha Digital</p>
            <div className="relative inline-block">
               <h3 className="text-8xl font-black text-blue-600 tracking-tighter">A-043</h3>
               <div className="absolute -right-4 -top-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg">
                 <CheckCircle2 size={16} />
               </div>
            </div>
          </div>

          <div className="grid grid-cols-2 divide-x divide-slate-50 bg-slate-50/50">
            <div className="p-6 text-center">
              <Users className="mx-auto text-blue-500 mb-2" size={20} />
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Na sua frente</p>
              <p className="text-2xl font-black text-slate-800 tracking-tighter">04 pessoas</p>
            </div>
            <div className="p-6 text-center">
              <Clock className="mx-auto text-blue-500 mb-2" size={20} />
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Tempo Estimado</p>
              <p className="text-2xl font-black text-slate-800 tracking-tighter">~ 28 min</p>
            </div>
          </div>

          <div className="p-8">
             <div className="bg-emerald-50 rounded-3xl p-6 border-2 border-emerald-100 flex items-center justify-between animate-pulse">
                <div>
                  <p className="text-emerald-800 text-[10px] font-black uppercase tracking-widest">Chamando Agora</p>
                  <p className="text-4xl font-black text-emerald-600 tracking-tighter">A-039</p>
                </div>
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                  <BellRing size={24} />
                </div>
             </div>
          </div>
        </div>

        <button 
          onClick={() => setNotificar(!notificar)}
          className={`w-full p-6 rounded-[30px] border-2 transition-all flex items-center gap-4 ${
            notificar ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-white border-slate-100 text-slate-600 shadow-sm'
          }`}
        >
          <div className={`p-3 rounded-2xl ${notificar ? 'bg-white/20' : 'bg-blue-50 text-blue-600'}`}>
            <Bell size={24} />
          </div>
          <div className="text-left flex-1">
            <p className="font-black text-sm uppercase tracking-tight">Me avisar por áudio</p>
            <p className={`text-xs ${notificar ? 'text-blue-100' : 'text-slate-400'}`}>Notificar quando restarem 2 pessoas</p>
          </div>
          <div className={`w-12 h-6 rounded-full relative transition-all ${notificar ? 'bg-emerald-400' : 'bg-slate-200'}`}>
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${notificar ? 'right-1' : 'left-1'}`}></div>
          </div>
        </button>

        <div className="bg-white rounded-[30px] p-6 shadow-sm border border-slate-100 flex items-start gap-4">
          <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Info size={20} />
          </div>
          <div>
            <p className="font-bold text-slate-800 text-sm">Dica importante:</p>
            <p className="text-slate-500 text-xs mt-1 leading-relaxed">
              Tenha em mãos seu Documento com Foto e o Cartão do SUS. Isso agiliza seu atendimento ao chegar no balcão.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <button 
            onClick={() => navigate('/citizen')}
            className="bg-slate-900 text-white p-5 rounded-3xl font-bold text-sm shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
           >
             <Ticket size={18} /> Nova Senha
           </button>
           <button 
            onClick={() => navigate('/citizen')}
            className="bg-white text-red-500 p-5 rounded-3xl font-bold text-sm border-2 border-red-50 hover:bg-red-50 active:scale-95 transition-all"
           >
             Cancelar
           </button>
        </div>
      </main>

      <footer className="p-8 text-center">
        <div className="flex items-center justify-center gap-2 opacity-20">
          <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
            <Ticket size={12} />
          </div>
          <span className="text-sm font-black text-slate-900 uppercase tracking-tighter">FilaZero</span>
        </div>
      </footer>
    </div>
  );
};