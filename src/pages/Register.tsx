import { useState } from 'react';
import { Ticket, AlertCircle, CheckCircle2, ArrowRight, User, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('cidadão');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
    if (password.length >= 8 && password === confirmPassword) {
      const usuariosExistentes = JSON.parse(localStorage.getItem('usuariosCadastrados') || '[]');
      
      const novoUsuario = {
        name,
        cpf,
        phone,
        userType,
        password
      };

      usuariosExistentes.push(novoUsuario);
      localStorage.setItem('usuariosCadastrados', JSON.stringify(usuariosExistentes));
      
      localStorage.setItem('userName', name);
      localStorage.setItem('userRole', userType);
      
      navigate('/login');
    }
  };

  const isPasswordInvalid = password.length > 0 && password.length < 8;

  return (
    <div className="h-screen bg-white flex flex-col lg:flex-row overflow-hidden">
      <div className="hidden lg:flex flex-col items-center justify-center bg-blue-900 px-8 lg:w-[35%] xl:w-[30%] text-white relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-48 h-48 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-[24px] flex items-center justify-center mb-6 shadow-2xl border border-white/20">
            <Ticket size={40} className="text-white" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter uppercase mb-3">FilaZero</h1>
          <p className="text-blue-100 text-sm max-w-xs leading-relaxed opacity-80">
            Sua experiência de atendimento redefinida com praticidade e respeito ao seu tempo.
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 lg:bg-white overflow-y-auto py-6 px-6">
        <div className="w-full max-w-[480px]">
          <div className="mb-6 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-1">Criar Conta</h2>
            <p className="text-slate-500 text-sm">Comece sua experiência sem filas.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nome Completo</label>
              <input 
                type="text" 
                placeholder="Ex: João Silva" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 bg-slate-100/50 lg:bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium text-sm" 
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">CPF</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="000.000.000-00" 
                    value={cpf}
                    onChange={(e) => setCpf(handleCpf(e.target.value))}
                    maxLength={14}
                    className="w-full p-3 bg-slate-100/50 lg:bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium text-sm" 
                    required
                  />
                  {cpf.length === 14 && <CheckCircle2 className="absolute right-3 top-3 text-emerald-500" size={16} />}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Telefone</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="(00) 00000-0000" 
                    value={phone}
                    onChange={(e) => setPhone(handlePhone(e.target.value))}
                    maxLength={15}
                    className="w-full p-3 bg-slate-100/50 lg:bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 font-medium text-sm" 
                    required
                  />
                  {phone.length === 15 && <CheckCircle2 className="absolute right-3 top-3 text-emerald-500" size={16} />}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tipo de Perfil</label>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  type="button"
                  onClick={() => setUserType('cidadão')}
                  className={`flex items-center justify-center p-3 rounded-xl border-2 transition-all gap-2 ${
                    userType === 'cidadão' 
                    ? 'border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600' 
                    : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-blue-200'
                  }`}
                >
                  <User size={16} />
                  <span className="text-[10px] font-bold uppercase">Paciente</span>
                </button>
                <button 
                  type="button"
                  onClick={() => setUserType('admin')}
                  className={`flex items-center justify-center p-3 rounded-xl border-2 transition-all gap-2 ${
                    userType === 'admin' 
                    ? 'border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600' 
                    : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-blue-200'
                  }`}
                >
                  <ShieldCheck size={16} />
                  <span className="text-[10px] font-bold uppercase">Admin</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Senha</label>
                <div className="relative">
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full p-3 bg-slate-100/50 lg:bg-slate-50 border-2 rounded-xl focus:ring-2 outline-none transition-all text-sm ${
                      isPasswordInvalid ? 'border-red-100 focus:ring-red-500' : 'border-transparent focus:ring-blue-600'
                    }`} 
                    required
                  />
                  {isPasswordInvalid && <AlertCircle className="absolute right-3 top-3 text-red-500" size={16} />}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Confirmar</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 bg-slate-100/50 lg:bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all text-sm" 
                  required
                />
              </div>
            </div>

            <div className="flex items-center gap-2 py-1">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600 cursor-pointer" required />
              <label className="text-[11px] text-slate-500 font-medium">
                Li e aceito os  <span className="text-blue-600 font-bold cursor-pointer">termos de uso</span> e a <span className="text-blue-600 font-bold cursor-pointer">privacidade</span>.
              </label>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Cadastrar
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500 font-medium">
              Já tem conta? <Link to="/login" className="text-blue-600 font-black hover:underline">Entrar agora</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};