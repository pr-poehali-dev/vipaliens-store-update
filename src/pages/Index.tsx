import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  const [showAbout, setShowAbout] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [showArticle, setShowArticle] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  
  const [heroBanner, setHeroBanner] = useState({
    enabled: true,
    title: "ЭКСКЛЮЗИВНАЯ КОЛЛЕКЦИЯ VIP",
    subtitle: "Уникальные товары для истинных ценителей роскоши",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&h=600&fit=crop"
  });

  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Новая статья",
      description: "Эксклюзивная коллекция премиум товаров",
      content: "Полное описание статьи с деталями о продукте...",
      mainImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      videoEmbeds: ["<iframe width='560' height='315' src='https://rutube.ru/play/embed/...' frameborder='0' allowfullscreen></iframe>"]
    },
    {
      id: 2,
      title: "Премиум товары",
      description: "Лучшие предложения для VIP клиентов",
      content: "Детальное описание премиум товаров...",
      mainImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop",
      videoEmbeds: []
    }
  ]);

  const openArticle = (article: any) => {
    setSelectedArticle(article);
    setShowArticle(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b-2 border-[#D4AF37] bg-[#1a1a1a]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Icon name="Crown" className="text-[#D4AF37]" size={40} />
              <div>
                <h1 className="text-3xl font-bold text-[#D4AF37]">VIP ЭКСКЛЮЗИВ</h1>
                <p className="text-gray-400">Элитные товары премиум класса</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button 
                onClick={() => navigate('/admin')}
                variant="outline"
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
              >
                <Icon name="Settings" className="mr-2" size={18} />
                Админка
              </Button>
              <Button 
                onClick={() => setShowAbout(true)}
                className="bg-[#D4AF37] hover:bg-[#C4A037] text-black font-bold"
              >
                О нас
              </Button>
              <Button 
                onClick={() => setShowContacts(true)}
                className="bg-[#D4AF37] hover:bg-[#C4A037] text-black font-bold"
              >
                Контакты
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      {heroBanner.enabled && (
        <div 
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner.image})` }}
        >
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center px-4">
              <h2 className="text-5xl font-bold text-[#D4AF37] mb-4 animate-fade-in">
                {heroBanner.title}
              </h2>
              <p className="text-xl text-white mb-6 animate-fade-in">
                {heroBanner.subtitle}
              </p>
              <Button className="bg-[#D4AF37] hover:bg-[#C4A037] text-black font-bold text-lg px-8 py-6">
                Смотреть каталог
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Card 
              key={article.id} 
              className="bg-[#1a1a1a] border-[#D4AF37] cursor-pointer hover:scale-105 transition-transform"
              onClick={() => openArticle(article)}
            >
              <img 
                src={article.mainImage} 
                alt={article.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="text-[#D4AF37]">{article.title}</CardTitle>
                <CardDescription className="text-gray-300">{article.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-[#D4AF37] bg-[#1a1a1a] mt-12">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>© 2024 VIP ЭКСКЛЮЗИВ. Все права защищены.</p>
        </div>
      </footer>

      {/* About Dialog */}
      <Dialog open={showAbout} onOpenChange={setShowAbout}>
        <DialogContent className="bg-[#1a1a1a] border-[#D4AF37] text-white">
          <DialogHeader>
            <DialogTitle className="text-[#D4AF37] text-2xl">О нас</DialogTitle>
            <DialogDescription className="text-gray-300">
              VIP ЭКСКЛЮЗИВ - это уникальная платформа для коллекционеров и ценителей премиальных товаров.
              Мы специализируемся на предоставлении эксклюзивных товаров высочайшего качества.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <img 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=400&fit=crop"
              alt="About"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Contacts Dialog */}
      <Dialog open={showContacts} onOpenChange={setShowContacts}>
        <DialogContent className="bg-[#1a1a1a] border-[#D4AF37] text-white">
          <DialogHeader>
            <DialogTitle className="text-[#D4AF37] text-2xl">Контакты</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="flex items-center gap-3">
              <Icon name="Phone" className="text-[#D4AF37]" />
              <div>
                <p className="font-bold text-[#D4AF37]">Телефон:</p>
                <p>+7 (900) 123-45-67</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Mail" className="text-[#D4AF37]" />
              <div>
                <p className="font-bold text-[#D4AF37]">Email:</p>
                <p>info@vip-exclusive.ru</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="MapPin" className="text-[#D4AF37]" />
              <div>
                <p className="font-bold text-[#D4AF37]">Адрес:</p>
                <p>Москва, Кутузовский проспект, 12</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Article Dialog */}
      <Dialog open={showArticle} onOpenChange={setShowArticle}>
        <DialogContent className="bg-[#1a1a1a] border-[#D4AF37] text-white max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-[#D4AF37] text-2xl">{selectedArticle?.title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <img 
              src={selectedArticle?.mainImage}
              alt={selectedArticle?.title}
              className="w-full h-96 object-cover rounded-lg"
            />
            <p className="text-gray-300">{selectedArticle?.content}</p>
            
            {/* Video Embeds */}
            {selectedArticle?.videoEmbeds?.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-[#D4AF37] font-bold text-lg">Видео:</h3>
                {selectedArticle.videoEmbeds.map((embed: string, index: number) => (
                  <div 
                    key={index} 
                    className="aspect-video bg-black rounded-lg flex items-center justify-center border border-[#D4AF37]"
                  >
                    <p className="text-gray-400">Видео будет здесь (RuTube, VK, YouTube)</p>
                  </div>
                ))}
              </div>
            )}
            
            <Button 
              onClick={() => setShowContacts(true)}
              className="w-full bg-[#D4AF37] hover:bg-[#C4A037] text-black font-bold"
            >
              Связаться с нами
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;