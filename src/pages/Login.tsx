
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Map, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="absolute top-4 right-4">
          <LanguageSelector />
        </div>
        
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Map className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-primary">RealEstate Pro</span>
          </Link>
          <h1 className="text-2xl font-bold text-primary">{t('auth.welcomeBack')}</h1>
          <p className="text-muted-foreground">{t('auth.signInAccount')}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">{t('auth.signIn')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t('auth.email')}</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">{t('auth.password')}</Label>
              <Input
                id="password"
                type="password"
                placeholder={t('auth.password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <Button className="w-full">
              <User className="w-4 h-4 mr-2" />
              {t('auth.signIn')}
            </Button>
            
            <div className="text-center">
              <a href="#" className="text-sm text-primary hover:underline">
                {t('auth.forgotPassword')}
              </a>
            </div>
            
            <Separator />
            
            <div className="text-center text-sm text-muted-foreground">
              {t('auth.noAccount')}{' '}
              <Link to="/signup" className="text-primary hover:underline">
                {t('auth.signUpHere')}
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
