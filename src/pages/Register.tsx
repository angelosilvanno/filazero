import { useState } from 'react';
import { Ticket, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');

  const handleCpf = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const handlePhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userName', name.split(' ')[0]);
    navigate('/citizen');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4">
      {/* Logo */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 bg-blue-600 rounded-[20px] flex items-center justify-center mb-2 shadow-lg shadow-blue-200 text-white">
          <Ticket size={32} />
        </div>
        <h1 className="text-3xl font-black text-blue-900 tracking-tighter uppercase">FilaZero</h1>
      </div>

      {/* Card */}
      <div className="bg-white w-full max-w-[540px] p-10 md:p-12 rounded-[40px] shadow-2xl shadow-slate-200/60 border border-slate-50">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Criar Conta</h2>
          <p className="text-slate-500 text-sm">
            Preencha os dados abaixo para começar sua experiência sem filas.
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          {/* Nome */}
          <div className="space-y-2">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">
              Nome Completo
            </label>
            <input 
              type="text" 
              placeholder="Ex: João Silva" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-300" 
              required
            />
          </div>

          {/* CPF */}
          <div className="space-y-2">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">
              CPF
            </label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="000.000.000-00" 
                value={cpf}
                onChange={(e) => setCpf(handleCpf(e.target.value))}
                maxLength={14}
                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-300" 
                required
              />
              {cpf.length === 14 && (
                <CheckCircle2 className="absolute right-4 top-4 text-emerald-500" size={20} />
              )}
            </div>
          </div>

          {/* Telefone */}
          <div className="space-y-2">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">
              Telefone
            </label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="(00) 00000-0000" 
                value={phone}
                onChange={(e) => setPhone(handlePhone(e.target.value))}
                maxLength={15}
                className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-300" 
                required
              />
              {phone.length === 15 && (
                <CheckCircle2 className="absolute right-4 top-4 text-emerald-500" size={20} />
              )}
            </div>
          </div>

          {/* Senha */}
          <div className="space-y-2">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">
              Senha
            </label>
            <div className="relative group">
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full p-4 bg-slate-50 border-2 border-red-100 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none transition-all placeholder:text-slate-300" 
                required
              />
              <AlertCircle className="absolute right-4 top-4 text-red-500" size={20} />
            </div>
            <p className="text-[11px] text-red-500 font-bold flex items-center gap-1 ml-1">
              * A senha deve ter pelo menos 8 caracteres.
            </p>
          </div>

          {/* Confirmar Senha */}
          <div className="space-y-2">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">
              Confirmar Senha
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-300" 
              required
            />
          </div>

          {/* Termos */}
          <div className="flex items-center gap-3 py-2">
            <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-600" required />
            <label className="text-sm text-slate-500 font-medium">
              Li e aceito os <span className="text-blue-600 font-bold cursor-pointer">termos de uso</span> e a <span className="text-blue-600 font-bold cursor-pointer">política de privacidade</span>.
            </label>
          </div>

          {/* Botão */}
          <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            Cadastrar
            <ArrowRight size={20} />
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500 font-medium">
            Já tem conta? <Link to="/login" className="text-blue-600 font-black hover:underline">Entrar agora</Link>
          </p>
        </div>
      </div>
    </div>
  );
};