
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-[#1A3A6E] text-white pt-12 pb-6" id="contacts">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4">РГПУ им. А.И. Герцена</h3>
            <p className="mb-4 text-gray-300">
              Российский государственный педагогический университет имени А.И. Герцена — один из ведущих педагогических вузов России.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">
                <Icon name="Telegram" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Icon name="MapPin" className="mr-2 h-5 w-5 text-[#D4AF37]" />
                191186, Санкт-Петербург, наб. реки Мойки, д.48
              </p>
              <p className="flex items-center">
                <Icon name="Phone" className="mr-2 h-5 w-5 text-[#D4AF37]" />
                +7 (812) 312-44-92
              </p>
              <p className="flex items-center">
                <Icon name="Mail" className="mr-2 h-5 w-5 text-[#D4AF37]" />
                mail@herzen.spb.ru
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat text-xl font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Расписание занятий</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Электронная библиотека</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Вакансии</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Научные журналы</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Карта университета</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2025 РГПУ им. А.И. Герцена. Все права защищены.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия использования</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
