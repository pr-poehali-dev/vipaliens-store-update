import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const Admin = () => {
  const navigate = useNavigate();
  const [heroBanner, setHeroBanner] = useState({
    enabled: true,
    title: "ЭКСКЛЮЗИВНАЯ КОЛЛЕКЦИЯ VIP",
    subtitle: "Уникальные товары для истинных ценителей роскоши",
    buttonText: "Смотреть каталог",
    image: ""
  });

  const [mainBackground, setMainBackground] = useState({
    type: "color",
    color: "#000000",
    image: "",
    opacity: 100
  });

  const [videoEmbeds, setVideoEmbeds] = useState("");

  const handleSave = () => {
    toast.success("Настройки успешно сохранены!");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#D4AF37]">Панель управления</h1>
          <Button 
            onClick={() => navigate('/')}
            className="bg-[#D4AF37] hover:bg-[#C4A037] text-black"
          >
            <Icon name="Eye" className="mr-2" size={20} />
            Просмотр сайта
          </Button>
        </div>

        <Tabs defaultValue="banner" className="w-full">
          <TabsList className="bg-[#1a1a1a] border border-[#D4AF37] mb-6">
            <TabsTrigger value="banner" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black">
              Баннер Hero
            </TabsTrigger>
            <TabsTrigger value="background" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black">
              Фон главной
            </TabsTrigger>
            <TabsTrigger value="articles" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black">
              Статьи
            </TabsTrigger>
            <TabsTrigger value="video" className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black">
              Видео
            </TabsTrigger>
          </TabsList>

          {/* Hero Banner Settings */}
          <TabsContent value="banner">
            <Card className="bg-[#1a1a1a] border-[#D4AF37]">
              <CardHeader>
                <CardTitle className="text-[#D4AF37]">Настройки баннера Hero</CardTitle>
                <CardDescription className="text-gray-400">
                  Баннер отображается между хедером и статьями
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label className="text-white">Включить баннер</Label>
                  <Switch 
                    checked={heroBanner.enabled}
                    onCheckedChange={(checked) => setHeroBanner({...heroBanner, enabled: checked})}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[#D4AF37]">Заголовок</Label>
                  <Input 
                    value={heroBanner.title}
                    onChange={(e) => setHeroBanner({...heroBanner, title: e.target.value})}
                    className="bg-black border-[#D4AF37] text-white"
                    placeholder="Введите заголовок"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[#D4AF37]">Подзаголовок</Label>
                  <Input 
                    value={heroBanner.subtitle}
                    onChange={(e) => setHeroBanner({...heroBanner, subtitle: e.target.value})}
                    className="bg-black border-[#D4AF37] text-white"
                    placeholder="Введите подзаголовок"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[#D4AF37]">Текст кнопки</Label>
                  <Input 
                    value={heroBanner.buttonText}
                    onChange={(e) => setHeroBanner({...heroBanner, buttonText: e.target.value})}
                    className="bg-black border-[#D4AF37] text-white"
                    placeholder="Текст кнопки"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[#D4AF37]">Изображение баннера</Label>
                  <Input 
                    type="file"
                    accept="image/*"
                    className="bg-black border-[#D4AF37] text-white"
                  />
                  <p className="text-sm text-gray-400">Рекомендуемый размер: 1920x600px</p>
                </div>

                <Button 
                  onClick={handleSave}
                  className="w-full bg-[#D4AF37] hover:bg-[#C4A037] text-black font-bold"
                >
                  Сохранить баннер
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Background Settings */}
          <TabsContent value="background">
            <Card className="bg-[#1a1a1a] border-[#D4AF37]">
              <CardHeader>
                <CardTitle className="text-[#D4AF37]">Фон главной страницы</CardTitle>
                <CardDescription className="text-gray-400">
                  Выберите цвет или изображение для фона
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-[#D4AF37]">Тип фона</Label>
                  <div className="flex gap-4">
                    <Button
                      variant={mainBackground.type === "color" ? "default" : "outline"}
                      onClick={() => setMainBackground({...mainBackground, type: "color"})}
                      className={mainBackground.type === "color" ? "bg-[#D4AF37] text-black" : "border-[#D4AF37] text-white"}
                    >
                      Цвет
                    </Button>
                    <Button
                      variant={mainBackground.type === "image" ? "default" : "outline"}
                      onClick={() => setMainBackground({...mainBackground, type: "image"})}
                      className={mainBackground.type === "image" ? "bg-[#D4AF37] text-black" : "border-[#D4AF37] text-white"}
                    >
                      Изображение
                    </Button>
                  </div>
                </div>

                {mainBackground.type === "color" ? (
                  <div className="space-y-2">
                    <Label className="text-[#D4AF37]">Цвет фона</Label>
                    <div className="flex gap-2">
                      <Input 
                        type="color"
                        value={mainBackground.color}
                        onChange={(e) => setMainBackground({...mainBackground, color: e.target.value})}
                        className="w-20 h-12 bg-black border-[#D4AF37]"
                      />
                      <Input 
                        value={mainBackground.color}
                        onChange={(e) => setMainBackground({...mainBackground, color: e.target.value})}
                        className="bg-black border-[#D4AF37] text-white"
                        placeholder="#000000"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label className="text-[#D4AF37]">Фоновое изображение</Label>
                    <Input 
                      type="file"
                      accept="image/*"
                      className="bg-black border-[#D4AF37] text-white"
                    />
                    <p className="text-sm text-gray-400">Рекомендуемый размер: 1920x1080px</p>
                  </div>
                )}

                <div className="space-y-2">
                  <Label className="text-[#D4AF37]">Прозрачность наложения: {mainBackground.opacity}%</Label>
                  <Input 
                    type="range"
                    min="0"
                    max="100"
                    value={mainBackground.opacity}
                    onChange={(e) => setMainBackground({...mainBackground, opacity: parseInt(e.target.value)})}
                    className="bg-black border-[#D4AF37]"
                  />
                </div>

                <Button 
                  onClick={handleSave}
                  className="w-full bg-[#D4AF37] hover:bg-[#C4A037] text-black font-bold"
                >
                  Сохранить фон
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Articles Management */}
          <TabsContent value="articles">
            <Card className="bg-[#1a1a1a] border-[#D4AF37]">
              <CardHeader>
                <CardTitle className="text-[#D4AF37]">Управление статьями</CardTitle>
                <CardDescription className="text-gray-400">
                  Добавляйте и редактируйте статьи
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-[#D4AF37]">Название статьи</Label>
                  <Input 
                    className="bg-black border-[#D4AF37] text-white"
                    placeholder="Введите название"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[#D4AF37]">Краткое описание</Label>
                  <Textarea 
                    className="bg-black border-[#D4AF37] text-white"
                    placeholder="Краткое описание для карточки"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[#D4AF37]">Полный текст</Label>
                  <Textarea 
                    className="bg-black border-[#D4AF37] text-white"
                    placeholder="Полное описание статьи"
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[#D4AF37]">Главное изображение</Label>
                  <Input 
                    type="file"
                    accept="image/*"
                    className="bg-black border-[#D4AF37] text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[#D4AF37]">Дополнительные изображения</Label>
                  <Input 
                    type="file"
                    accept="image/*"
                    multiple
                    className="bg-black border-[#D4AF37] text-white"
                  />
                </div>

                <Button 
                  onClick={handleSave}
                  className="w-full bg-[#D4AF37] hover:bg-[#C4A037] text-black font-bold"
                >
                  <Icon name="Plus" className="mr-2" size={20} />
                  Добавить статью
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Video Embeds */}
          <TabsContent value="video">
            <Card className="bg-[#1a1a1a] border-[#D4AF37]">
              <CardHeader>
                <CardTitle className="text-[#D4AF37]">Встраивание видео</CardTitle>
                <CardDescription className="text-gray-400">
                  Добавляйте видео из RuTube, VK, YouTube и других платформ
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-[#D4AF37]">Embed-коды видео (по одному на строку)</Label>
                  <Textarea 
                    value={videoEmbeds}
                    onChange={(e) => setVideoEmbeds(e.target.value)}
                    className="bg-black border-[#D4AF37] text-white font-mono text-sm"
                    placeholder="<iframe width='560' height='315' src='https://rutube.ru/play/embed/...' frameborder='0' allowfullscreen></iframe>"
                    rows={8}
                  />
                </div>

                <div className="bg-black/50 border border-[#D4AF37] rounded-lg p-4 space-y-2">
                  <p className="text-[#D4AF37] font-bold">Примеры embed-кодов:</p>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p>• RuTube: &lt;iframe src="https://rutube.ru/play/embed/..."&gt;&lt;/iframe&gt;</p>
                    <p>• VK: &lt;iframe src="https://vk.com/video_ext.php?..."&gt;&lt;/iframe&gt;</p>
                    <p>• YouTube: &lt;iframe src="https://www.youtube.com/embed/..."&gt;&lt;/iframe&gt;</p>
                  </div>
                </div>

                <Button 
                  onClick={handleSave}
                  className="w-full bg-[#D4AF37] hover:bg-[#C4A037] text-black font-bold"
                >
                  Сохранить видео
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;