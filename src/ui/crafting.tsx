import React, { useState } from 'react';
import { Hammer, Coins, Package, Skull, Zap, Shield, Car, Users, Target, AlertTriangle } from 'lucide-react';

const MafiaCraftingPage = () => {
  const [playerResources, setPlayerResources] = useState({
    money: 2500,
    iron: 15999,
    wood: 2099999,
    gunpowder: 89999,
    diamond: 3999,
    gold: 5999,
    rubber: 12999
  });

  const [notifications, setNotifications] = useState([]);

  const craftingRecipes = [
    {
      id: 1,
      name: "Basit Tabanca",
      icon: <Zap className="w-6 h-6" />,
      materials: { iron: 5, money: 50 },
      description: "Güvenilir bir başlangıç silahı",
      category: "weapon",
      rarity: "common"
    },
    {
      id: 2,
      name: "Güçlü Tüfek",
      icon: <Target className="w-6 h-6" />,
      materials: { iron: 12, wood: 8, money: 200 },
      description: "Uzak mesafe için ideal",
      category: "weapon",
      rarity: "rare"
    },
    {
      id: 3,
      name: "Bomba",
      icon: <AlertTriangle className="w-6 h-6" />,
      materials: { gunpowder: 10, iron: 3, money: 150 },
      description: "Büyük hasar verir",
      category: "explosive",
      rarity: "epic"
    },
    {
      id: 4,
      name: "Koruyucu Yelek",
      icon: <Shield className="w-6 h-6" />,
      materials: { rubber: 15, iron: 5, money: 300 },
      description: "Mermilere karşı koruma",
      category: "armor",
      rarity: "rare"
    },
    {
      id: 5,
      name: "Kaçış Arabası",
      icon: <Car className="w-6 h-6" />,
      materials: { iron: 20, rubber: 10, money: 1000 },
      description: "Hızlı kaçış için",
      category: "vehicle",
      rarity: "legendary"
    },
    {
      id: 6,
      name: "Altın Tabanca",
      icon: <Zap className="w-6 h-6" />,
      materials: { gold: 8, diamond: 2, money: 500 },
      description: "Prestij ve güç simgesi",
      category: "weapon",
      rarity: "legendary"
    }
  ];

  const addNotification = (message, type = 'success') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  const canCraft = (recipe) => {
    return Object.entries(recipe.materials).every(([material, amount]) => {
      if (material === 'money') {
        return playerResources.money >= amount;
      }
      return playerResources[material] >= amount;
    });
  };

  const craftItem = (recipe) => {
    if (!canCraft(recipe)) {
      addNotification("Yeterli malzeme yok!", 'error');
      return;
    }

    setPlayerResources(prev => {
      const newResources = { ...prev };
      Object.entries(recipe.materials).forEach(([material, amount]) => {
        newResources[material] -= amount;
      });
      return newResources;
    });

    addNotification(`${recipe.name} başarıyla üretildi!`, 'success');
  };

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return 'from-gray-600 to-gray-700 border-gray-500';
      case 'rare': return 'from-blue-600 to-blue-700 border-blue-500';
      case 'epic': return 'from-purple-600 to-purple-700 border-purple-500';
      case 'legendary': return 'from-yellow-600 to-yellow-700 border-yellow-500';
      default: return 'from-gray-600 to-gray-700 border-gray-500';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'weapon': return <Zap className="w-5 h-5" />;
      case 'armor': return <Shield className="w-5 h-5" />;
      case 'vehicle': return <Car className="w-5 h-5" />;
      case 'explosive': return <AlertTriangle className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-black to-gray-900 text-white">
      {/* Notifications */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ${
              notification.type === 'success'
                ? 'bg-green-600 border-l-4 border-green-400'
                : 'bg-red-600 border-l-4 border-red-400'
            }`}
          >
            {notification.message}
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="bg-black bg-opacity-60 border-b border-red-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
                <Hammer className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Karanlık Atölye
                </h1>
                <p className="text-gray-300">Gücünü artır, imparatorluğunu inşa et</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 text-2xl font-bold text-yellow-400">
                <Coins className="w-6 h-6" />
                <span>${playerResources.money.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Resources Panel */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 text-red-400 flex items-center">
                <Package className="w-6 h-6 mr-2" />
                Malzemeler
              </h2>
              <div className="space-y-4">
                {[
                  { key: 'iron', name: 'Demir', color: 'text-gray-400' },
                  { key: 'wood', name: 'Tahta', color: 'text-amber-400' },
                  { key: 'gunpowder', name: 'Barut', color: 'text-red-400' },
                  { key: 'diamond', name: 'Elmas', color: 'text-blue-400' },
                  { key: 'gold', name: 'Altın', color: 'text-yellow-400' },
                  { key: 'rubber', name: 'Kauçuk', color: 'text-green-400' }
                ].map(resource => (
                  <div key={resource.key} className="flex justify-between items-center p-3 bg-black bg-opacity-40 rounded-lg border border-gray-600">
                    <img src={"/assets/iron.png"} className={"w-1/2"}/>
                    <span className={`font-medium ${resource.color}`}>{resource.name}</span>
                    <span className="font-bold text-lg">{playerResources[resource.key]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Crafting Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-red-400 mb-2">Üretim Merkezi</h2>
              <p className="text-gray-400">Güçlü ekipmanlar üret ve rakiplerinin önüne geç</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {craftingRecipes.map(recipe => {
                const affordable = canCraft(recipe);

                return (
                  <div key={recipe.id} className={`relative overflow-hidden rounded-2xl border-2 shadow-2xl transition-all duration-300 hover:scale-105 ${
                    affordable
                      ? `bg-gradient-to-br ${getRarityColor(recipe.rarity)} hover:shadow-red-500/20`
                      : 'bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600 opacity-60'
                  }`}>
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="p-2 bg-black bg-opacity-60 rounded-lg">
                        {getCategoryIcon(recipe.category)}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-black bg-opacity-40 rounded-xl mr-4">
                          {recipe.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{recipe.name}</h3>
                          <p className="text-sm text-gray-300 capitalize">{recipe.rarity}</p>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 text-sm">{recipe.description}</p>

                      {/* Materials Required */}
                      <div className="space-y-3 mb-6">
                        <p className="font-semibold text-red-400 text-sm uppercase tracking-wider">Gerekli Malzemeler:</p>
                        {Object.entries(recipe.materials).map(([material, amount]) => {
                          const hasEnough = material === 'money'
                            ? playerResources.money >= amount
                            : playerResources[material] >= amount;

                          return (
                            <div key={material} className="flex justify-between items-center">
                              <span className="capitalize text-sm">
                                {material === 'money' ? '$' : ''}{material === 'money' ? 'Para' :
                                material === 'iron' ? 'Demir' :
                                  material === 'wood' ? 'Tahta' :
                                    material === 'gunpowder' ? 'Barut' :
                                      material === 'diamond' ? 'Elmas' :
                                        material === 'gold' ? 'Altın' :
                                          material === 'rubber' ? 'Kauçuk' : material}
                              </span>
                              <span className={`font-bold ${hasEnough ? 'text-green-400' : 'text-red-400'}`}>
                                {material === 'money' ? `$${amount}` : amount}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <button
                        onClick={() => craftItem(recipe)}
                        disabled={!affordable}
                        className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-200 ${
                          affordable
                            ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg hover:shadow-red-500/40 transform hover:-translate-y-1'
                            : 'bg-gray-600 cursor-not-allowed text-gray-400'
                        }`}
                      >
                        {affordable ? 'ÜRET' : 'YETERSİZ MALZEME'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 bg-black bg-opacity-80 border-t border-red-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Skull className="w-8 h-8 mr-3 text-red-500" />
              <span className="text-2xl font-bold text-red-400">RESURGENCE</span>
            </div>
            <p className="text-gray-400">Gücün peşinde koş, ama dikkatli ol... Her seçimin sonuçları vardır.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MafiaCraftingPage;
