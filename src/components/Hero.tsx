
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Map } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            {t('hero.title')}
            <span className="text-blue-600 block">{t('hero.subtitle')}</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input 
                  placeholder={t('hero.searchPlaceholder')}
                  className="h-12 text-lg"
                />
              </div>
              <div className="flex gap-2">
                <Button size="lg" className="h-12 px-8">
                  <Search className="w-5 h-5 mr-2" />
                  {t('nav.search')}
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-6">
                  <Map className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-muted-foreground">
            <span>{t('hero.popularSearches')}</span>
            <button className="hover:text-primary transition-colors">New York</button>
            <button className="hover:text-primary transition-colors">Los Angeles</button>
            <button className="hover:text-primary transition-colors">Miami</button>
            <button className="hover:text-primary transition-colors">Chicago</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
