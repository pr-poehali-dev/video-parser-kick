import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Mock data for video cards
  const mockVideos = [
    {
      id: 1,
      title: 'Epic Gaming Stream #1',
      duration: '2:34:12',
      date: '2025-09-18',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop',
      views: '12.5K'
    },
    {
      id: 2,
      title: 'React Development Tutorial',
      duration: '1:45:30',
      date: '2025-09-17',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      views: '8.3K'
    },
    {
      id: 3,
      title: 'Live Coding Session',
      duration: '3:15:22',
      date: '2025-09-16',
      thumbnail: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop',
      views: '15.7K'
    },
    {
      id: 4,
      title: 'Gaming Highlights Compilation',
      duration: '0:45:18',
      date: '2025-09-15',
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop',
      views: '9.2K'
    },
    {
      id: 5,
      title: 'Tech Review Stream',
      duration: '2:12:45',
      date: '2025-09-14',
      thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop',
      views: '11.8K'
    },
    {
      id: 6,
      title: 'Community Q&A Session',
      duration: '1:28:33',
      date: '2025-09-13',
      thumbnail: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=250&fit=crop',
      views: '6.9K'
    }
  ];

  const filteredVideos = mockVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDate = selectedDate ? video.date === selectedDate : true;
    return matchesSearch && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center text-white animate-fade-in">
            <div className="mb-6 animate-float">
              <Icon name="Play" size={64} className="mx-auto text-white/90" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Video Parser
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Находи и смотри видео с kick.com/mellstroy475 легко и быстро
            </p>
            
            {/* Search Section */}
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 animate-scale-in">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <Input
                    type="text"
                    placeholder="Поиск по названию видео..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-14 text-lg bg-white/90 border-0 placeholder:text-gray-500 focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="h-14 bg-white/90 border-0 focus:ring-2 focus:ring-white/50"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-6 justify-center">
                <Button 
                  variant="secondary" 
                  onClick={() => { setSearchQuery(''); setSelectedDate(''); }}
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 transition-all duration-300"
                >
                  <Icon name="RotateCcw" size={16} className="mr-2" />
                  Сбросить
                </Button>
                <Button 
                  className="bg-kick-red hover:bg-kick-red/90 text-white shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Icon name="Search" size={16} className="mr-2" />
                  Найти видео
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Video Grid Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Видео с канала mellstroy475
          </h2>
          <p className="text-gray-600 text-lg">
            Найдено {filteredVideos.length} видео
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {filteredVideos.map((video, index) => (
            <Card 
              key={video.id} 
              className="group overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded-md text-sm font-medium">
                  {video.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" className="bg-kick-red hover:bg-kick-red/90 text-white rounded-full w-16 h-16 p-0 shadow-2xl">
                    <Icon name="Play" size={24} />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900 group-hover:text-kick-red transition-colors duration-300 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    <span>{new Date(video.date).toLocaleDateString('ru-RU')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Eye" size={14} />
                    <span>{video.views} просмотров</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 hover:bg-kick-turquoise hover:text-white border-kick-turquoise text-kick-turquoise transition-all duration-300">
                    <Icon name="Download" size={14} className="mr-1" />
                    Скачать
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 hover:bg-kick-blue hover:text-white border-kick-blue text-kick-blue transition-all duration-300">
                    <Icon name="Share2" size={14} className="mr-1" />
                    Поделиться
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <Icon name="Search" size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Видео не найдены</h3>
            <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-card py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-white/80">Видео в базе</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Обновления</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold mb-2">HD</div>
              <div className="text-white/80">Качество</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;