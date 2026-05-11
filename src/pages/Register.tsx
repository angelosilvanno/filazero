import { Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md p-10 rounded-[40px] shadow-2xl border border-slate-100">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg text-white">
            <Ticket size={32} />
          </div>
          <h2 className="text-3xl font-black text-blue-900">Criar Conta</h2>
          <p className="text-slate-500">Cadastre-se para usar o FilaZero</p>
        </div>

        <form className="space-y-4">
          <input type="text" placeholder="Nome Completo" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none" />
          <input type="text" placeholder="CPF" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none" />
          <input type="tel" placeholder="Telefone" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none" />
          <input type="password" placeholder="Senha" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none" />
          
          <Link to="/login" className="block w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-xl text-center shadow-lg hover:bg-blue-700 transition-all">
            Cadastrar
          </Link>
        </form>

        <p className="mt-8 text-center text-slate-500">
          Já tem conta? <Link to="/login" className="text-blue-600 font-bold hover:underline">Entrar</Link>
        </p>
      </div>
    </div>
  );
};