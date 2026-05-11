import { useState } from 'react';
import { Ticket } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
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

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate('/citizen'); }}>
          <input 
            type="text" 
            placeholder="Nome Completo" 
            className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all" 
            required
          />
          
          <input 
            type="text" 
            placeholder="CPF" 
            value={cpf}
            onChange={(e) => setCpf(handleCpf(e.target.value))}
            className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all" 
            maxLength={14}
            required
          />
          
          <input 
            type="text" 
            placeholder="Telefone" 
            value={phone}
            onChange={(e) => setPhone(handlePhone(e.target.value))}
            className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all" 
            maxLength={15}
            required
          />
          
          <input 
            type="password" 
            placeholder="Senha" 
            className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 outline-none transition-all" 
            required
          />
          
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-xl text-center shadow-lg hover:bg-blue-700 transition-all active:scale-95"
          >
            Cadastrar
          </button>
        </form>

        <p className="mt-8 text-center text-slate-500">
          Já tem conta? <Link to="/login" className="text-blue-600 font-bold hover:underline">Entrar</Link>
        </p>
      </div>
    </div>
  );
};