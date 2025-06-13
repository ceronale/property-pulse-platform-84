
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const FeaturedProperties = () => {
  const { t } = useLanguage();

  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      price: "$850,000",
      location: "Beverly Hills, CA",
      beds: 4,
      baths: 3,
      sqft: "2,500",
      image: "/placeholder.svg",
      status: "For Sale",
      featured: true
    },
    {
      id: 2,
      title: "Downtown Apartment",
      price: "$3,200/month",
      location: "Manhattan, NY",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      image: "/placeholder.svg",
      status: "For Rent",
      featured: false
    },
    {
      id: 3,
      title: "Family Suburban Home",
      price: "$650,000",
      location: "Austin, TX",
      beds: 3,
      baths: 2,
      sqft: "1,800",
      image: "/placeholder.svg",
      status: "For Sale",
      featured: true
    },
    {
      id: 4,
      title: "Waterfront Condo",
      price: "$1,200,000",
      location: "Miami, FL",
      beds: 3,
      baths: 3,
      sqft: "2,100",
      image: "/placeholder.svg",
      status: "For Sale",
      featured: false
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('featured.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('featured.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge variant={property.status === 'For Sale' ? 'default' : 'secondary'}>
                    {property.status === 'For Sale' ? t('featured.forSale') : t('featured.forRent')}
                  </Badge>
                  {property.featured && (
                    <Badge variant="destructive">{t('featured.featured')}</Badge>
                  )}
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-1">{property.title}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{property.price}</p>
                <p className="text-muted-foreground text-sm mb-3">{property.location}</p>
                
                <div className="flex justify-between text-sm text-muted-foreground mb-4">
                  <span>{property.beds} {t('featured.beds')}</span>
                  <span>{property.baths} {t('featured.baths')}</span>
                  <span>{property.sqft} {t('featured.sqft')}</span>
                </div>
                
                <Button className="w-full" variant="outline">{t('featured.viewDetails')}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">{t('featured.viewAll')}</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
