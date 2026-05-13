import { useState } from 'react';
import { IdCard, Lock, Ticket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState('');

  const handleCpf = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/citizen');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">
      
      {/* Topo / Logo */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 bg-blue-600 rounded-[20px] flex items-center justify-center mb-2 shadow-lg shadow-blue-200">
          <Ticket className="text-white" size={32} />
        </div>
        <h1 className="text-3xl font-black text-blue-900 tracking-tighter">FilaZero</h1>
      </div>

      {/* Card de Login */}
      <div className="bg-white w-full max-w-[420px] p-10 rounded-[32px] shadow-2xl shadow-slate-200/60 border border-slate-100">
        
        <div className="mb-10 text-left">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Bem-vindo de volta</h2>
          <p className="text-slate-500 text-sm">
            Acesse sua conta para gerenciar seus agendamentos.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">
              CPF
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <IdCard className="h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
              </div>
              <input 
                type="text" 
                value={cpf}
                onChange={(e) => setCpf(handleCpf(e.target.value))}
                placeholder="000.000.000-00" 
                maxLength={14}
                className="block w-full pl-14 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-600 outline-none transition-all" 
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">
              Senha
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
              </div>
              <input 
                type="password"
                placeholder="........" 
                className="block w-full pl-14 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-600 outline-none transition-all" 
                required
              />
            </div>
          </div>

          <div className="text-right">
            <button type="button" className="text-xs font-bold text-blue-600 hover:underline">
              Esqueci minha senha
            </button>
          </div>

          <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-[0.98] transition-all text-center">
            Entrar
          </button>
        </form>

        <div className="relative my-10 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <span className="relative bg-white px-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">ou</span>
        </div>

        <div className="text-center space-y-4">
          <p className="text-xs text-slate-400 font-medium">Ainda não tem uma conta?</p>
          <Link 
            to="/register" 
            className="block w-full bg-slate-100 text-blue-600 py-4 rounded-2xl font-bold text-sm hover:bg-slate-200 transition-all text-center"
          >
            Criar conta gratuita
          </Link>
        </div>
      </div>

      {/* Rodapé Automático */}
      <footer className="mt-12 text-center text-slate-400 space-y-4">
        <p className="text-[13px]">
          © {new Date().getFullYear()} FilaZero. Todos os direitos reservados.
        </p>
        <div className="flex gap-4 justify-center text-xs font-bold">
          <a href="#" className="hover:text-blue-600">Termos de Uso</a>
          <a href="#" className="hover:text-blue-600">Privacidade</a>
          <a href="#" className="hover:text-blue-600">Ajuda</a>
        </div>
      </footer>
    </div>
  );
};