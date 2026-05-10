import { Ticket } from 'lucide-react';

export const Login = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-10 rounded-[40px] shadow-2xl border border-slate-100">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <Ticket className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-black text-blue-900">Bem-vindo de volta</h2>
          <p className="text-slate-500">Acesse para gerenciar sua fila</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Seu CPF</label>
            <input type="text" placeholder="000.000.000-00" className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-blue-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Sua Senha</label>
            <input type="password" placeholder="••••••••" className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:border-blue-500 outline-none transition-all" />
          </div>
          <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-blue-700 active:scale-95 transition-all">
            Entrar
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500">Ainda não tem conta?</p>
          <button className="text-blue-600 font-bold mt-2 hover:underline">Criar minha conta gratuita</button>
        </div>
      </div>
    </div>
  );
};