import { useState } from 'react';
import { 
  Clock, 
  Users, 
  ArrowLeft, 
  MapPin, 
  BellRing, 
  Info, 
  CheckCircle2, 
  Ticket,
  Smartphone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const QueueStatus = () => {
  const navigate = useNavigate();
  const [notificar, setNotificar] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] flex flex-col font-sans overflow-x-hidden">
      <header className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 p-6 lg:p-8 rounded-b-[40px] shadow-xl text-white relative overflow-hidden shrink-0">
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-20%] left-[-5%] w-48 h-48 bg-blue-400/20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col gap-6 max-w-5xl mx-auto w-full">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/citizen')}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 active:scale-90 backdrop-blur-md rounded-full flex items-center justify-center transition-all border border-white/20"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="bg-emerald-500/20 border border-emerald-400/30 px-4 py-1.5 rounded-full text-[10px] lg:text-xs font-black tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
              Acompanhamento ao vivo
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/15 backdrop-blur-lg rounded-2xl flex items-center justify-center text-white shadow-xl border border-white/10 shrink-0">
              <MapPin size={28} />
            </div>
            <div className="min-w-0">
              <h2 className="font-black text-xl lg:text-2xl leading-tight tracking-tight truncate">Posto de Saúde Central</h2>
              <p className="text-blue-100/70 text-xs lg:text-sm mt-0.5 font-medium truncate">Rua das Flores, 123 • Centro</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6 lg:p-10 -mt-10 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/5 border border-white overflow-hidden flex flex-col">
            <div className="p-8 lg:p-12 text-center border-b border-slate-50 relative flex-1 flex flex-col justify-center">
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Sua Senha Digital</p>
              <div className="relative inline-block">
                 <h3 className="text-7xl lg:text-8xl font-black text-blue-600 tracking-tighter leading-none">A-043</h3>
                 <div className="absolute -right-3 -top-1 w-8 h-8 lg:w-10 lg:h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg animate-bounce">
                   <CheckCircle2 size={18} />
                 </div>
              </div>

              <div className="mt-8 px-6">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
                  <div className="h-full bg-blue-600 w-4/5 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
                </div>
                <div className="flex justify-between mt-3 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                  <span>Aguardando</span>
                  <span className="text-blue-600">Sua Vez</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 divide-x divide-slate-50 bg-slate-50/40 shrink-0">
              <div className="p-6 text-center">
                <Users className="mx-auto text-blue-500 mb-2" size={20} />
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter leading-none mb-1">Pessoas na frente</p>
                <p className="text-2xl font-black text-slate-800 tracking-tighter">04 pessoas</p>
              </div>
              <div className="p-6 text-center">
                <Clock className="mx-auto text-blue-500 mb-2" size={20} />
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter leading-none mb-1">Tempo Médio</p>
                <p className="text-2xl font-black text-slate-800 tracking-tighter">~ 28 min</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 flex flex-col">
            <div className="bg-emerald-50 rounded-[32px] p-6 border-2 border-emerald-100 shadow-sm flex items-center justify-between group shrink-0">
              <div>
                <p className="text-emerald-800 text-[10px] font-black uppercase tracking-widest mb-0.5">Chamando no Balcão</p>
                <p className="text-4xl lg:text-5xl font-black text-emerald-600 tracking-tighter">A-039</p>
              </div>
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-200 group-hover:rotate-12 transition-all">
                <BellRing size={28} className="animate-pulse" />
              </div>
            </div>

            <button 
              onClick={() => setNotificar(!notificar)}
              className={`w-full p-5 rounded-[28px] border-2 transition-all flex items-center gap-5 active:scale-[0.99] shrink-0 ${
                notificar ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-white border-slate-100 text-slate-600 shadow-sm hover:border-blue-100'
              }`}
            >
              <div className={`p-3 rounded-2xl transition-colors ${notificar ? 'bg-white/20' : 'bg-blue-50 text-blue-600'}`}>
                <Smartphone size={24} />
              </div>
              <div className="text-left flex-1 min-w-0">
                <p className="font-black text-sm uppercase tracking-tight leading-none mb-1">Alertas no Celular</p>
                <p className={`text-[11px] font-medium truncate ${notificar ? 'text-blue-100' : 'text-slate-400'}`}>Avisar quando restarem 2 pessoas</p>
              </div>
              <div className={`w-10 h-5.5 rounded-full relative transition-all border shrink-0 ${notificar ? 'bg-emerald-400 border-emerald-300' : 'bg-slate-100 border-slate-200'}`}>
                <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${notificar ? 'right-0.5' : 'left-0.5'}`}></div>
              </div>
            </button>

            <div className="bg-white rounded-[28px] p-6 shadow-sm border border-slate-100 flex items-start gap-4 flex-1">
              <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center shrink-0">
                <Info size={22} />
              </div>
              <div className="min-w-0">
                <p className="font-black text-[11px] text-slate-800 uppercase tracking-widest mb-1.5">Checklist de Documentos</p>
                <div className="grid grid-cols-1 gap-2 mt-3">
                  {['Documento com Foto', 'Cartão do SUS'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 border-2 border-slate-200 rounded shrink-0"></div>
                      <span className="text-[11px] text-slate-500 font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 shrink-0">
               <button 
                onClick={() => navigate('/citizen')}
                className="bg-slate-900 text-white p-4 rounded-[20px] font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
               >
                 <Ticket size={16} /> Nova Senha
               </button>
               <button 
                onClick={() => navigate('/citizen')}
                className="bg-white text-red-500 p-4 rounded-[20px] font-black text-[10px] uppercase tracking-widest border-2 border-red-50 hover:bg-red-50 active:scale-95 transition-all shadow-sm"
               >
                 Cancelar
               </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="p-8 text-center mt-auto">
        <div className="flex items-center justify-center gap-2 opacity-15 grayscale">
          <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
            <Ticket size={12} />
          </div>
          <span className="text-sm font-black text-slate-900 uppercase tracking-tighter">FilaZero</span>
        </div>
      </footer>
    </div>
  );
};