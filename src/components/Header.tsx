
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#1A3A6E] rounded-full flex items-center justify-center text-white font-bold">
                РГПУ
              </div>
              <div className="ml-3 hidden md:block">
                <h1 className="font-montserrat text-lg font-bold text-[#1A3A6E]">РГПУ им. А.И. Герцена</h1>
                <p className="text-xs text-gray-500">Основан в 1797 году</p>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="font-medium text-gray-700 hover:text-[#1A3A6E] transition-colors">
              Об университете
            </a>
            <a href="#faculties" className="font-medium text-gray-700 hover:text-[#1A3A6E] transition-colors">
              Факультеты
            </a>
            <a href="#admission" className="font-medium text-gray-700 hover:text-[#1A3A6E] transition-colors">
              Поступление
            </a>
            <a href="#news" className="font-medium text-gray-700 hover:text-[#1A3A6E] transition-colors">
              Новости
            </a>
            <a href="#contacts" className="font-medium text-gray-700 hover:text-[#1A3A6E] transition-colors">
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:flex">
              <Icon name="Search" className="mr-2 h-4 w-4" />
              Поиск
            </Button>
            <Button className="bg-[#1A3A6E] hover:bg-[#12284e]">
              Личный кабинет
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
