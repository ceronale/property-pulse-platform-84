
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'fr';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Navigation
    'nav.buy': 'Buy',
    'nav.rent': 'Rent', 
    'nav.sell': 'Sell',
    'nav.map': 'Map',
    'nav.search': 'Search',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.dashboard': 'Dashboard',
    
    // Hero
    'hero.title': 'Find Your Dream',
    'hero.subtitle': 'Property Today',
    'hero.description': 'Discover the perfect home with our advanced search filters and interactive map. Browse thousands of properties from trusted sellers.',
    'hero.searchPlaceholder': 'Enter location, property type, or keywords...',
    'hero.popularSearches': 'Popular searches:',
    
    // Featured Properties
    'featured.title': 'Featured Properties',
    'featured.description': 'Handpicked properties that offer the best value and location for your investment.',
    'featured.forSale': 'For Sale',
    'featured.forRent': 'For Rent',
    'featured.featured': 'Featured',
    'featured.beds': 'beds',
    'featured.baths': 'baths',
    'featured.sqft': 'sqft',
    'featured.viewDetails': 'View Details',
    'featured.viewAll': 'View All Properties',
    
    // Map
    'map.title': 'Interactive Property Map',
    'map.description': 'Explore properties on our interactive map. Click on markers to view details.',
    'map.selectProperty': 'Select a property',
    'map.clickMarker': 'Click on a map marker to view property details',
    'map.contact': 'Contact Seller',
    
    // Footer
    'footer.tagline': 'Your trusted partner in finding the perfect property.',
    'footer.forBuyers': 'For Buyers',
    'footer.browseProperties': 'Browse Properties',
    'footer.mapSearch': 'Map Search',
    'footer.savedSearches': 'Saved Searches',
    'footer.propertyAlerts': 'Property Alerts',
    'footer.forSellers': 'For Sellers',
    'footer.listProperty': 'List Your Property',
    'footer.sellerDashboard': 'Seller Dashboard',
    'footer.marketAnalysis': 'Market Analysis',
    'footer.pricingTools': 'Pricing Tools',
    'footer.support': 'Support',
    'footer.helpCenter': 'Help Center',
    'footer.contactUs': 'Contact Us',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2024 RealEstate Pro. All rights reserved.',
    
    // Auth
    'auth.login': 'Login',
    'auth.signup': 'Sign Up',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.confirmPassword': 'Confirm Password',
    'auth.fullName': 'Full Name',
    'auth.rememberMe': 'Remember me',
    'auth.forgotPassword': 'Forgot your password?',
    'auth.noAccount': "Don't have an account?",
    'auth.hasAccount': 'Already have an account?',
    'auth.signupHere': 'Sign up here',
    'auth.loginHere': 'Login here',
  },
  es: {
    // Navigation
    'nav.buy': 'Comprar',
    'nav.rent': 'Alquilar',
    'nav.sell': 'Vender',
    'nav.map': 'Mapa',
    'nav.search': 'Buscar',
    'nav.login': 'Iniciar Sesión',
    'nav.signup': 'Registrarse',
    'nav.dashboard': 'Panel',
    
    // Hero
    'hero.title': 'Encuentra la',
    'hero.subtitle': 'Propiedad de tus Sueños',
    'hero.description': 'Descubre el hogar perfecto con nuestros filtros de búsqueda avanzados y mapa interactivo. Explora miles de propiedades de vendedores confiables.',
    'hero.searchPlaceholder': 'Ingresa ubicación, tipo de propiedad o palabras clave...',
    'hero.popularSearches': 'Búsquedas populares:',
    
    // Featured Properties
    'featured.title': 'Propiedades Destacadas',
    'featured.description': 'Propiedades seleccionadas que ofrecen el mejor valor y ubicación para tu inversión.',
    'featured.forSale': 'En Venta',
    'featured.forRent': 'En Alquiler',
    'featured.featured': 'Destacada',
    'featured.beds': 'hab',
    'featured.baths': 'baños',
    'featured.sqft': 'm²',
    'featured.viewDetails': 'Ver Detalles',
    'featured.viewAll': 'Ver Todas las Propiedades',
    
    // Map
    'map.title': 'Mapa Interactivo de Propiedades',
    'map.description': 'Explora propiedades en nuestro mapa interactivo. Haz clic en los marcadores para ver detalles.',
    'map.selectProperty': 'Selecciona una propiedad',
    'map.clickMarker': 'Haz clic en un marcador del mapa para ver los detalles de la propiedad',
    'map.contact': 'Contactar Vendedor',
    
    // Footer
    'footer.tagline': 'Tu socio de confianza para encontrar la propiedad perfecta.',
    'footer.forBuyers': 'Para Compradores',
    'footer.browseProperties': 'Explorar Propiedades',
    'footer.mapSearch': 'Búsqueda en Mapa',
    'footer.savedSearches': 'Búsquedas Guardadas',
    'footer.propertyAlerts': 'Alertas de Propiedades',
    'footer.forSellers': 'Para Vendedores',
    'footer.listProperty': 'Publicar Propiedad',
    'footer.sellerDashboard': 'Panel del Vendedor',
    'footer.marketAnalysis': 'Análisis de Mercado',
    'footer.pricingTools': 'Herramientas de Precio',
    'footer.support': 'Soporte',
    'footer.helpCenter': 'Centro de Ayuda',
    'footer.contactUs': 'Contáctanos',
    'footer.terms': 'Términos de Servicio',
    'footer.privacy': 'Política de Privacidad',
    'footer.copyright': '© 2024 RealEstate Pro. Todos los derechos reservados.',
    
    // Auth
    'auth.login': 'Iniciar Sesión',
    'auth.signup': 'Registrarse',
    'auth.email': 'Correo Electrónico',
    'auth.password': 'Contraseña',
    'auth.confirmPassword': 'Confirmar Contraseña',
    'auth.fullName': 'Nombre Completo',
    'auth.rememberMe': 'Recordarme',
    'auth.forgotPassword': '¿Olvidaste tu contraseña?',
    'auth.noAccount': '¿No tienes una cuenta?',
    'auth.hasAccount': '¿Ya tienes una cuenta?',
    'auth.signupHere': 'Regístrate aquí',
    'auth.loginHere': 'Inicia sesión aquí',
  },
  fr: {
    // Navigation
    'nav.buy': 'Acheter',
    'nav.rent': 'Louer',
    'nav.sell': 'Vendre',
    'nav.map': 'Carte',
    'nav.search': 'Rechercher',
    'nav.login': 'Connexion',
    'nav.signup': "S'inscrire",
    'nav.dashboard': 'Tableau de bord',
    
    // Hero
    'hero.title': 'Trouvez la Propriété',
    'hero.subtitle': 'de vos Rêves',
    'hero.description': 'Découvrez la maison parfaite avec nos filtres de recherche avancés et notre carte interactive. Parcourez des milliers de propriétés de vendeurs de confiance.',
    'hero.searchPlaceholder': 'Entrez un lieu, type de propriété ou mots-clés...',
    'hero.popularSearches': 'Recherches populaires:',
    
    // Featured Properties
    'featured.title': 'Propriétés en Vedette',
    'featured.description': 'Propriétés sélectionnées qui offrent la meilleure valeur et emplacement pour votre investissement.',
    'featured.forSale': 'À Vendre',
    'featured.forRent': 'À Louer',
    'featured.featured': 'En vedette',
    'featured.beds': 'ch',
    'featured.baths': 'sdb',
    'featured.sqft': 'm²',
    'featured.viewDetails': 'Voir Détails',
    'featured.viewAll': 'Voir Toutes les Propriétés',
    
    // Map
    'map.title': 'Carte Interactive des Propriétés',
    'map.description': 'Explorez les propriétés sur notre carte interactive. Cliquez sur les marqueurs pour voir les détails.',
    'map.selectProperty': 'Sélectionnez une propriété',
    'map.clickMarker': 'Cliquez sur un marqueur de la carte pour voir les détails de la propriété',
    'map.contact': 'Contacter le Vendeur',
    
    // Footer
    'footer.tagline': 'Votre partenaire de confiance pour trouver la propriété parfaite.',
    'footer.forBuyers': 'Pour les Acheteurs',
    'footer.browseProperties': 'Parcourir les Propriétés',
    'footer.mapSearch': 'Recherche sur Carte',
    'footer.savedSearches': 'Recherches Sauvegardées',
    'footer.propertyAlerts': 'Alertes de Propriétés',
    'footer.forSellers': 'Pour les Vendeurs',
    'footer.listProperty': 'Lister une Propriété',
    'footer.sellerDashboard': 'Tableau de bord Vendeur',
    'footer.marketAnalysis': 'Analyse de Marché',
    'footer.pricingTools': 'Outils de Prix',
    'footer.support': 'Support',
    'footer.helpCenter': "Centre d'Aide",
    'footer.contactUs': 'Nous Contacter',
    'footer.terms': 'Conditions de Service',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.copyright': '© 2024 RealEstate Pro. Tous droits réservés.',
    
    // Auth
    'auth.login': 'Connexion',
    'auth.signup': "S'inscrire",
    'auth.email': 'Email',
    'auth.password': 'Mot de passe',
    'auth.confirmPassword': 'Confirmer le mot de passe',
    'auth.fullName': 'Nom complet',
    'auth.rememberMe': 'Se souvenir de moi',
    'auth.forgotPassword': 'Mot de passe oublié?',
    'auth.noAccount': "Vous n'avez pas de compte?",
    'auth.hasAccount': 'Vous avez déjà un compte?',
    'auth.signupHere': 'Inscrivez-vous ici',
    'auth.loginHere': 'Connectez-vous ici',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
