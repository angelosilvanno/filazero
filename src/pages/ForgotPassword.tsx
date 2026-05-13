import { useState } from 'react';
import { User, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
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
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-[#1e56e3] tracking-tighter uppercase text-center">FilaZero</h1>
      </div>

      <div className="bg-white w-full max-w-[440px] p-10 rounded-[40px] shadow-sm border border-slate-50">
        <div className="text-left mb-8">
          <h2 className="text-[28px] font-bold text-slate-900 mb-3">Recuperar Senha</h2>
          <p className="text-slate-500 leading-relaxed text-[15px]">
            Digite seu CPF para receber instruções de recuperação.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1">
              CPF
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              </div>
              <input 
                type="text" 
                value={cpf}
                onChange={(e) => setCpf(handleCpf(e.target.value))}
                placeholder="000.000.000-00" 
                maxLength={14}
                className="block w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-blue-600 outline-none transition-all" 
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#1e56e3] text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-[0.98] transition-all mt-4"
          >
            Enviar
          </button>
        </form>

        <div className="mt-10 flex justify-center">
          <Link 
            to="/login" 
            className="flex items-center gap-2 text-[#1e56e3] font-bold text-[15px] hover:underline"
          >
            <ArrowLeft size={18} />
            Voltar para login
          </Link>
        </div>
      </div>
    </div>
  );
};