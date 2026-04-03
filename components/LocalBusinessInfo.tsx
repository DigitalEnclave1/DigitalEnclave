// components/LocalBusinessInfo.tsx
import React from 'react';
import { MapPin, Phone } from 'lucide-react';

interface LocalBusinessInfoProps {
  phone: string;
  address: string;
}

const LocalBusinessInfo: React.FC<LocalBusinessInfoProps> = ({ phone, address }) => {
  return (
    <div className="w-full bg-white py-3 border-t border-gray-100" id="contact-info" aria-label="Business Contact Information">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
          <div className="flex items-center mb-2 md:mb-0">
            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
            <span itemProp="address">{address}</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-blue-600" />
            <a href={`tel:${phone}`} className="hover:text-blue-600 transition-colors" itemProp="telephone">
              {phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalBusinessInfo;