
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

// Import fonts in the index.html file
// <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Noto+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">

const faculties = [
  {
    id: 1,
    name: 'Институт педагогики',
    description: 'Подготовка педагогов для различных образовательных учреждений',
    programs: 15,
    icon: 'BookOpen'
  },
  {
    id: 2,
    name: 'Институт психологии',
    description: 'Подготовка психологов, психотерапевтов и исследователей',
    programs: 12,
    icon: 'Brain'
  },
  {
    id: 3,
    name: 'Филологический факультет',
    description: 'Изучение языков, литературы и лингвистики',
    programs: 18,
    icon: 'Book'
  },
  {
    id: 4,
    name: 'Факультет математики',
    description: 'Подготовка специалистов в области математики и информатики',
    programs: 10,
    icon: 'Calculator'
  },
  {
    id: 5,
    name: 'Факультет музыки',
    description: 'Обучение музыкальному образованию и искусству',
    programs: 8,
    icon: 'Music'
  },
  {
    id: 6,
    name: 'Институт физической культуры и спорта',
    description: 'Подготовка специалистов в области физической культуры',
    programs: 9,
    icon: 'Dumbbell'
  }
];

const news = [
  {
    id: 1,
    title: 'Международная научная конференция в РГПУ',
    date: '15 мая 2025',
    category: 'Наука',
    excerpt: 'Ученые из 15 стран обсудили актуальные вопросы современного образования.'
  },
  {
    id: 2,
    title: 'Открытие нового учебного корпуса',
    date: '10 мая 2025',
    category: 'Инфраструктура',
    excerpt: 'Современный корпус с лабораториями и учебными аудиториями открыт для студентов.'
  },
  {
    id: 3,
    title: 'Студенты РГПУ победители всероссийской олимпиады',
    date: '5 мая 2025',
    category: 'Достижения',
    excerpt: 'Команда университета заняла первое место в престижном соревновании.'
  }
];

const Index = () => {
  return (
    <div className="font-['Noto_Sans',sans-serif] antialiased">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#1A3A6E] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-center bg-cover opacity-20"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Российский государственный педагогический университет им. А.И. Герцена
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Один из старейших педагогических вузов России, основанный в 1797 году. Традиции качественного образования и инновационный подход к обучению.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-[#1A3A6E] hover:bg-gray-200">
                Поступить в РГПУ
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-montserrat text-3xl font-bold mb-4 text-[#1A3A6E]">Об университете</h2>
            <p className="text-lg text-gray-600">
              РГПУ им. А.И. Герцена — это современный научно-образовательный центр, 
              где сочетаются традиции классического образования и инновационные подходы к обучению.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#1A3A6E]/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="History" className="h-6 w-6 text-[#1A3A6E]" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-[#1A3A6E]">История</h3>
              <p className="text-gray-600">
                Основан в 1797 году как Воспитательный дом. За свою историю университет воспитал тысячи специалистов в области педагогики.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#1A3A6E]/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Award" className="h-6 w-6 text-[#1A3A6E]" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-[#1A3A6E]">Достижения</h3>
              <p className="text-gray-600">
                Входит в топ лучших педагогических вузов России. Известен своими научными школами и инновационными образовательными программами.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="w-12 h-12 bg-[#1A3A6E]/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="Target" className="h-6 w-6 text-[#1A3A6E]" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3 text-[#1A3A6E]">Миссия</h3>
              <p className="text-gray-600">
                Подготовка высококвалифицированных педагогов, способных внести вклад в развитие образования и науки России.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="font-montserrat text-2xl font-bold mb-4 text-[#1A3A6E]">
                  Наш университет в цифрах
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-4xl font-bold text-[#D4AF37]">20+</p>
                    <p className="text-gray-600">факультетов и институтов</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#D4AF37]">300+</p>
                    <p className="text-gray-600">образовательных программ</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#D4AF37]">15 000+</p>
                    <p className="text-gray-600">студентов</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#D4AF37]">1500+</p>
                    <p className="text-gray-600">преподавателей</p>
                  </div>
                </div>
              </div>
              <div className="h-64 md:h-auto bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-center bg-cover"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Faculties Section */}
      <section className="py-16 bg-gray-50" id="faculties">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-montserrat text-3xl font-bold mb-4 text-[#1A3A6E]">Факультеты и институты</h2>
            <p className="text-lg text-gray-600">
              РГПУ им. А.И. Герцена предлагает широкий спектр образовательных программ на различных факультетах и в институтах.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculties.map((faculty) => (
              <Card key={faculty.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#1A3A6E] rounded-lg flex items-center justify-center mb-4">
                    <Icon name={faculty.icon} className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-montserrat text-xl font-bold mb-2 text-[#1A3A6E]">{faculty.name}</h3>
                  <p className="text-gray-600 mb-4">{faculty.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="bg-[#1A3A6E]/5">
                      {faculty.programs} программ
                    </Badge>
                    <a href="#" className="text-[#1A3A6E] font-medium hover:underline flex items-center">
                      Подробнее
                      <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-[#1A3A6E] hover:bg-[#12284e]">
              Все факультеты и программы
            </Button>
          </div>
        </div>
      </section>
      
      {/* Admission Section */}
      <section className="py-16 bg-white" id="admission">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-montserrat text-3xl font-bold mb-4 text-[#1A3A6E]">Поступление в РГПУ</h2>
            <p className="text-lg text-gray-600">
              Информация для абитуриентов о поступлении, вступительных испытаниях и необходимых документах.
            </p>
          </div>
          
          <div className="bg-[#1A3A6E] rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <h3 className="font-montserrat text-2xl font-bold mb-6">Стань студентом РГПУ им. А.И. Герцена</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" className="h-6 w-6 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                    <p>Более 300 программ бакалавриата, магистратуры и аспирантуры</p>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" className="h-6 w-6 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                    <p>Бюджетные места по большинству направлений подготовки</p>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" className="h-6 w-6 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                    <p>Общежития для иногородних студентов</p>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" className="h-6 w-6 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                    <p>Стипендиальные программы и гранты</p>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Button className="bg-white text-[#1A3A6E] hover:bg-gray-200">
                    Приемная комиссия
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-center bg-cover"></div>
                <div className="absolute inset-0 bg-[#1A3A6E]/30"></div>
                <div className="relative h-full flex flex-col justify-center items-center p-8 text-white text-center">
                  <h4 className="font-montserrat text-xl font-bold mb-4">Сроки приема документов</h4>
                  <div className="bg-[#1A3A6E]/80 p-4 rounded-lg w-full max-w-xs">
                    <p className="font-medium mb-2">Бакалавриат и специалитет</p>
                    <p className="text-gray-200">20 июня - 25 июля 2025</p>
                  </div>
                  <div className="bg-[#1A3A6E]/80 p-4 rounded-lg w-full max-w-xs mt-4">
                    <p className="font-medium mb-2">Магистратура</p>
                    <p className="text-gray-200">20 июня - 10 августа 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section className="py-16 bg-gray-50" id="news">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-montserrat text-3xl font-bold text-[#1A3A6E]">Новости университета</h2>
            <a href="#" className="text-[#1A3A6E] font-medium hover:underline flex items-center">
              Все новости
              <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <Badge className="bg-[#1A3A6E]">{item.category}</Badge>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="font-montserrat text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <a href="#" className="text-[#1A3A6E] font-medium hover:underline flex items-center">
                    Читать далее
                    <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Campus Life Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-montserrat text-3xl font-bold mb-4 text-[#1A3A6E]">Студенческая жизнь</h2>
            <p className="text-lg text-gray-600">
              РГПУ им. А.И. Герцена — это не только учеба, но и насыщенная студенческая жизнь.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative group overflow-hidden rounded-lg">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-montserrat text-lg font-bold">Научные сообщества</h3>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-montserrat text-lg font-bold">Спортивные секции</h3>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-montserrat text-lg font-bold">Творческие коллективы</h3>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-montserrat text-lg font-bold">Волонтерское движение</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-[#1A3A6E] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat text-3xl font-bold mb-6">Стань частью нашего университета</h2>
            <p className="text-xl mb-8 text-gray-200">
              РГПУ им. А.И. Герцена открывает двери для талантливых и целеустремленных студентов, 
              готовых получить качественное образование и стать востребованными специалистами.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#1A3A6E] hover:bg-gray-200">
                <Icon name="GraduationCap" className="mr-2 h-5 w-5" />
                Подать документы
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="Calendar" className="mr-2 h-5 w-5" />
                День открытых дверей
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
