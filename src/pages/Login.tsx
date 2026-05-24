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
    const userRole = localStorage.getItem('userRole');

    if (userRole === 'admin') {
      navigate('/attendant');
    } else {
      navigate('/citizen');
    }
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col lg:flex-row overflow-hidden font-sans">
      <div className="hidden lg:flex flex-col items-center justify-center bg-blue-900 px-8 lg:w-[32%] xl:w-[28%] text-white relative h-full">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-48 h-48 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-[24px] flex items-center justify-center mb-6 shadow-2xl border border-white/20">
            <Ticket size={40} className="text-white" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter uppercase mb-3 text-white">FilaZero</h1>
          <p className="text-blue-100 text-sm max-w-xs leading-relaxed opacity-80">
            Sua experiência de atendimento redefinida com praticidade e respeito ao seu tempo.
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 lg:bg-white overflow-y-auto py-8 px-6 h-full">
        <div className="flex flex-col items-center mb-6 lg:hidden">
          <div className="w-14 h-14 bg-blue-600 rounded-[18px] flex items-center justify-center mb-2 shadow-lg">
            <Ticket className="text-white" size={28} />
          </div>
          <h1 className="text-2xl font-black text-blue-900 tracking-tighter uppercase">FilaZero</h1>
        </div>

        <div className="w-full max-w-[400px]">
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-1">Bem-vindo de volta</h2>
            <p className="text-slate-500 text-sm">
              Acesse sua conta para gerenciar seus agendamentos.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                CPF
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <IdCard className="h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                </div>
                <input 
                  type="text" 
                  value={cpf}
                  onChange={(e) => setCpf(handleCpf(e.target.value))}
                  placeholder="000.000.000-00" 
                  maxLength={14}
                  className="block w-full pl-12 pr-4 py-3.5 bg-slate-100/50 lg:bg-slate-50 border-none rounded-xl text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium text-sm" 
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                Senha
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                </div>
                <input 
                  type="password"
                  placeholder="••••••••" 
                  className="block w-full pl-12 pr-4 py-3.5 bg-slate-100/50 lg:bg-slate-50 border-none rounded-xl text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-600 outline-none transition-all text-sm" 
                  required
                />
              </div>
            </div>

            <div className="text-right">
              <Link to="/forgot-password" title="Esqueci minha senha" className="text-[11px] font-bold text-blue-600 hover:underline">
                Esqueci minha senha
              </Link>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-[0.98] transition-all text-center">
              Entrar
            </button>
          </form>

          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <span className="relative bg-slate-50 lg:bg-white px-3 text-[10px] font-black text-slate-300 uppercase tracking-widest">ou</span>
          </div>

          <div className="text-center space-y-4">
            <p className="text-[11px] text-slate-400 font-medium tracking-wide">Ainda não tem uma conta?</p>
            <Link 
              to="/register" 
              className="block w-full bg-slate-100 text-blue-600 py-3.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all text-center"
            >
              Criar conta gratuita
            </Link>
          </div>
        </div>

        <footer className="mt-10 text-center text-slate-400 space-y-3">
          <p className="text-[11px] font-medium">
            © {new Date().getFullYear()} FilaZero. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 justify-center text-[9px] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600">Termos</a>
            <a href="#" className="hover:text-blue-600">Privacidade</a>
            <a href="#" className="hover:text-blue-600">Ajuda</a>
          </div>
        </footer>
      </div>
    </div>
  );
};