import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types/User';
import { signInService } from '../services/SignIn/SignInService';
import { checkTokenValidity } from '../utils/checkTokenValidity';

type AuthContextData = {
  user: User | null;
  signIn: (result: any) => Promise<User>;
  singInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {

    let interval: NodeJS.Timeout;
    
    const loadUserData = async () => {
      const isTokenValid = await checkTokenValidity();

      if(isTokenValid){
        const storedUser = await AsyncStorage.getItem('userData');
        if(storedUser){
          setUser(JSON.parse(storedUser));
        }
      } else {
        await AsyncStorage.clear();
        setUser(null)
      }
    };

    loadUserData();

    // Verifica a validade do token a cada 5 minutos (300000 ms)
    interval = setInterval(async () => {
      const isTokenValid = await checkTokenValidity();
      if (!isTokenValid) {
        await AsyncStorage.clear();
        setUser(null);
      }
    }, 300000); // a cada 5 minutos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [])

  const signOut = async () => {
    await AsyncStorage.clear();
    setUser(null);
  }

  const signIn = async (result: any) => {
    const userData: User = {
      id: result.data.user.ad_usuario_id,
      nome: result.data.user.nome,
      email: result.data.user.email,
      ativo: result.data.user.ativo,
      telefone: result.data.user.telefone,
      criado: result.data.user.criado,
      imagemId: result.data.user.imagemid,
      enderecoId: result.data.user.enderecoid,
      roleid: result.data.user.role.roleid,
      role: result.data.user.role.role
    }

    setUser(userData);
    
    await AsyncStorage.setItem('userToken', result.data.token);
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
    
    return userData
  }

  const singInWithGoogle = async () => {
    console.log("EEEEEE")
  }

  return (
    <AuthContext.Provider value={{ user, signIn, singInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext)
}