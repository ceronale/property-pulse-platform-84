
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.buy': 'Buy',
    'nav.rent': 'Rent',
    'nav.sell': 'Sell',
    'nav.map': 'Map View',
    'nav.search': 'Search',
    'nav.login': 'Log In',
    'nav.signup': 'Sign Up',
    'nav.dashboard': 'Dashboard',
    
    // Hero Section
    'hero.title': 'Find Your Perfect',
    'hero.subtitle': 'Dream Home',
    'hero.description': 'Discover thousands of properties for sale and rent. From luxury homes to affordable apartments, find the perfect place to call home.',
    'hero.searchPlaceholder': 'Enter city, neighborhood, or address...',
    'hero.popularSearches': 'Popular searches:',
    
    // Search Filters
    'filters.propertyType': 'Property Type',
    'filters.priceRange': 'Price Range',
    'filters.bedrooms': 'Bedrooms',
    'filters.bathrooms': 'Bathrooms',
    'filters.applyFilters': 'Apply Filters',
    'filters.clearAll': 'Clear All',
    
    // Featured Properties
    'featured.title': 'Featured Properties',
    'featured.description': 'Discover our hand-picked selection of premium properties in the most desirable locations.',
    'featured.forSale': 'For Sale',
    'featured.forRent': 'For Rent',
    'featured.featured': 'Featured',
    'featured.beds': 'beds',
    'featured.baths': 'baths',
    'featured.sqft': 'sqft',
    'featured.viewDetails': 'View Details',
    'featured.viewAll': 'View All Properties',
    
    // Footer
    'footer.tagline': 'Your trusted partner in finding the perfect property. Connecting buyers, sellers, and renters since 2024.',
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
    
    // Auth Pages
    'auth.welcomeBack': 'Welcome Back',
    'auth.signInAccount': 'Sign in to your account',
    'auth.signIn': 'Sign In',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.forgotPassword': 'Forgot your password?',
    'auth.noAccount': "Don't have an account?",
    'auth.signUpHere': 'Sign up here',
    'auth.createAccount': 'Create Account',
    'auth.joinHunters': 'Join thousands of property hunters',
    'auth.signUp': 'Sign Up',
    'auth.firstName': 'First Name',
    'auth.lastName': 'Last Name',
    'auth.userType': 'I am a',
    'auth.selectRole': 'Select your role',
    'auth.buyer': 'Buyer',
    'auth.seller': 'Seller',
    'auth.both': 'Both Buyer & Seller',
    'auth.createPassword': 'Create a strong password',
    'auth.confirmPassword': 'Confirm your password',
    'auth.createAccountBtn': 'Create Account',
    'auth.hasAccount': 'Already have an account?',
    'auth.signInHere': 'Sign in here',
  },
  es: {
    // Navigation
    'nav.buy': 'Comprar',
    'nav.rent': 'Alquilar',
    'nav.sell': 'Vender',
    'nav.map': 'Vista de Mapa',
    'nav.search': 'Buscar',
    'nav.login': 'Iniciar Sesión',
    'nav.signup': 'Registrarse',
    'nav.dashboard': 'Panel',
    
    // Hero Section
    'hero.title': 'Encuentra Tu',
    'hero.subtitle': 'Casa Perfecta',
    'hero.description': 'Descubre miles de propiedades en venta y alquiler. Desde casas de lujo hasta apartamentos asequibles, encuentra el lugar perfecto para llamar hogar.',
    'hero.searchPlaceholder': 'Ingresa ciudad, barrio o dirección...',
    'hero.popularSearches': 'Búsquedas populares:',
    
    // Search Filters
    'filters.propertyType': 'Tipo de Propiedad',
    'filters.priceRange': 'Rango de Precio',
    'filters.bedrooms': 'Habitaciones',
    'filters.bathrooms': 'Baños',
    'filters.applyFilters': 'Aplicar Filtros',
    'filters.clearAll': 'Limpiar Todo',
    
    // Featured Properties
    'featured.title': 'Propiedades Destacadas',
    'featured.description': 'Descubre nuestra selección cuidadosamente elegida de propiedades premium en las ubicaciones más deseables.',
    'featured.forSale': 'En Venta',
    'featured.forRent': 'En Alquiler',
    'featured.featured': 'Destacado',
    'featured.beds': 'hab',
    'featured.baths': 'baños',
    'featured.sqft': 'm²',
    'featured.viewDetails': 'Ver Detalles',
    'featured.viewAll': 'Ver Todas las Propiedades',
    
    // Footer
    'footer.tagline': 'Tu socio de confianza para encontrar la propiedad perfecta. Conectando compradores, vendedores e inquilinos desde 2024.',
    'footer.forBuyers': 'Para Compradores',
    'footer.browseProperties': 'Explorar Propiedades',
    'footer.mapSearch': 'Búsqueda en Mapa',
    'footer.savedSearches': 'Búsquedas Guardadas',
    'footer.propertyAlerts': 'Alertas de Propiedades',
    'footer.forSellers': 'Para Vendedores',
    'footer.listProperty': 'Listar Tu Propiedad',
    'footer.sellerDashboard': 'Panel del Vendedor',
    'footer.marketAnalysis': 'Análisis de Mercado',
    'footer.pricingTools': 'Herramientas de Precios',
    'footer.support': 'Soporte',
    'footer.helpCenter': 'Centro de Ayuda',
    'footer.contactUs': 'Contáctanos',
    'footer.terms': 'Términos de Servicio',
    'footer.privacy': 'Política de Privacidad',
    'footer.copyright': '© 2024 RealEstate Pro. Todos los derechos reservados.',
    
    // Auth Pages
    'auth.welcomeBack': 'Bienvenido de Nuevo',
    'auth.signInAccount': 'Inicia sesión en tu cuenta',
    'auth.signIn': 'Iniciar Sesión',
    'auth.email': 'Correo Electrónico',
    'auth.password': 'Contraseña',
    'auth.forgotPassword': '¿Olvidaste tu contraseña?',
    'auth.noAccount': '¿No tienes una cuenta?',
    'auth.signUpHere': 'Regístrate aquí',
    'auth.createAccount': 'Crear Cuenta',
    'auth.joinHunters': 'Únete a miles de buscadores de propiedades',
    'auth.signUp': 'Registrarse',
    'auth.firstName': 'Nombre',
    'auth.lastName': 'Apellido',
    'auth.userType': 'Soy un',
    'auth.selectRole': 'Selecciona tu rol',
    'auth.buyer': 'Comprador',
    'auth.seller': 'Vendedor',
    'auth.both': 'Comprador y Vendedor',
    'auth.createPassword': 'Crea una contraseña segura',
    'auth.confirmPassword': 'Confirma tu contraseña',
    'auth.createAccountBtn': 'Crear Cuenta',
    'auth.hasAccount': '¿Ya tienes una cuenta?',
    'auth.signInHere': 'Inicia sesión aquí',
  },
  fr: {
    // Navigation
    'nav.buy': 'Acheter',
    'nav.rent': 'Louer',
    'nav.sell': 'Vendre',
    'nav.map': 'Vue Carte',
    'nav.search': 'Rechercher',
    'nav.login': 'Se Connecter',
    'nav.signup': "S'inscrire",
    'nav.dashboard': 'Tableau de Bord',
    
    // Hero Section
    'hero.title': 'Trouvez Votre',
    'hero.subtitle': 'Maison de Rêve',
    'hero.description': 'Découvrez des milliers de propriétés à vendre et à louer. Des maisons de luxe aux appartements abordables, trouvez l\'endroit parfait pour vous sentir chez vous.',
    'hero.searchPlaceholder': 'Entrez ville, quartier ou adresse...',
    'hero.popularSearches': 'Recherches populaires:',
    
    // Search Filters
    'filters.propertyType': 'Type de Propriété',
    'filters.priceRange': 'Gamme de Prix',
    'filters.bedrooms': 'Chambres',
    'filters.bathrooms': 'Salles de Bain',
    'filters.applyFilters': 'Appliquer les Filtres',
    'filters.clearAll': 'Tout Effacer',
    
    // Featured Properties
    'featured.title': 'Propriétés en Vedette',
    'featured.description': 'Découvrez notre sélection soigneusement choisie de propriétés premium dans les emplacements les plus recherchés.',
    'featured.forSale': 'À Vendre',
    'featured.forRent': 'À Louer',
    'featured.featured': 'En Vedette',
    'featured.beds': 'ch',
    'featured.baths': 'sdb',
    'featured.sqft': 'm²',
    'featured.viewDetails': 'Voir Détails',
    'featured.viewAll': 'Voir Toutes les Propriétés',
    
    // Footer
    'footer.tagline': 'Votre partenaire de confiance pour trouver la propriété parfaite. Connectant acheteurs, vendeurs et locataires depuis 2024.',
    'footer.forBuyers': 'Pour les Acheteurs',
    'footer.browseProperties': 'Parcourir les Propriétés',
    'footer.mapSearch': 'Recherche Carte',
    'footer.savedSearches': 'Recherches Sauvegardées',
    'footer.propertyAlerts': 'Alertes Propriétés',
    'footer.forSellers': 'Pour les Vendeurs',
    'footer.listProperty': 'Lister Votre Propriété',
    'footer.sellerDashboard': 'Tableau de Bord Vendeur',
    'footer.marketAnalysis': 'Analyse de Marché',
    'footer.pricingTools': 'Outils de Prix',
    'footer.support': 'Support',
    'footer.helpCenter': "Centre d'Aide",
    'footer.contactUs': 'Nous Contacter',
    'footer.terms': 'Conditions de Service',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.copyright': '© 2024 RealEstate Pro. Tous droits réservés.',
    
    // Auth Pages
    'auth.welcomeBack': 'Bon Retour',
    'auth.signInAccount': 'Connectez-vous à votre compte',
    'auth.signIn': 'Se Connecter',
    'auth.email': 'Email',
    'auth.password': 'Mot de Passe',
    'auth.forgotPassword': 'Mot de passe oublié?',
    'auth.noAccount': "Vous n'avez pas de compte?",
    'auth.signUpHere': 'Inscrivez-vous ici',
    'auth.createAccount': 'Créer un Compte',
    'auth.joinHunters': 'Rejoignez des milliers de chasseurs de propriétés',
    'auth.signUp': "S'inscrire",
    'auth.firstName': 'Prénom',
    'auth.lastName': 'Nom',
    'auth.userType': 'Je suis un',
    'auth.selectRole': 'Sélectionnez votre rôle',
    'auth.buyer': 'Acheteur',
    'auth.seller': 'Vendeur',
    'auth.both': 'Acheteur et Vendeur',
    'auth.createPassword': 'Créez un mot de passe fort',
    'auth.confirmPassword': 'Confirmez votre mot de passe',
    'auth.createAccountBtn': 'Créer un Compte',
    'auth.hasAccount': 'Vous avez déjà un compte?',
    'auth.signInHere': 'Connectez-vous ici',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
