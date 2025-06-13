
import React from 'react';
import { Map } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <Map className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">RealEstate Pro</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.forBuyers')}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t('footer.browseProperties')}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t('footer.mapSearch')}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t('footer.savedSearches')}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t('footer.propertyAlerts')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.forSellers')}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t('footer.listProperty')}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t('footer.sellerDashboard')}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t('footer.marketAnalysis')}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t('footer.pricingTools')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t('footer.helpCenter')}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t('footer.contactUs')}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t('footer.terms')}</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">{t('footer.privacy')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
