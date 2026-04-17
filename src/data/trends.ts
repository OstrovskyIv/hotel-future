export interface Trend {
  id: number;
  title: string;
  description: string;
  implementation: string;
  drivers: string[];
  consequences: string[];
  impact: string;
  icon: string;
  mainImage: string;
  x: number;
  y: number;
}

export const futureHotels = [
  { id: 1, name: "Nova Horizon Antalya", country: "Турция", status: "Активен", match: 98 },
  { id: 2, name: "Nova Horizon Gagra", country: "Абхазия", status: "Активен", match: 92 },
  { id: 3, name: "Nova Horizon Sharm", country: "Египет", status: "Скоро", match: 89 },
  { id: 4, name: "Nova Horizon Dubai", country: "ОАЭ", status: "Проектирование", match: 95 }
];

export const trends: Trend[] = [
  {
    id: 1, title: "ИИ-Персонализация",
    description: "Интерфейс, который адаптируется под ваши желания.",
    implementation: "Использование нейросетей для динамической генерации UI компонентов. Фронтенд анализирует предпочтения гостя через API и перестраивает блоки страницы в реальном времени.",
    drivers: ["LLM модели", "Edge AI"], consequences: ["Лояльность +40%"], impact: "Бизнес: Индивидуальный подход к каждому гостю.",
    icon: "Sparkles", mainImage: "/1.jpg", x: 10, y: 10
  },
  {
    id: 2, title: "WebXR Консьерж",
    description: "Погружение в отель до заезда.",
    implementation: "Реализовано на Three.js. Рендеринг 3D-сцен отеля в браузере с поддержкой VR-шлемов и мобильных устройств через WebXR API.",
    drivers: ["WebXR", "GPU ускорение"], consequences: ["VR-туры"], impact: "Общество: Виртуальное посещение локаций.",
    icon: "View", mainImage: "/2.jpg", x: 40, y: 10
  },
  {
    id: 3, title: "IoT Экосистема",
    description: "Управление номером через телефон.",
    implementation: "Интеграция по протоколам MQTT и Matter. PWA-приложение связывается с устройствами в номере через защищенный шлюз и Web Bluetooth.",
    drivers: ["Matter", "Bluetooth LE"], consequences: ["Автоматизация"], impact: "Сервис: Полный контроль среды.",
    icon: "Smartphone", mainImage: "/3.jpg", x: 70, y: 10
  },
  {
    id: 4, title: "Web3 Контракты",
    description: "Прямое бронирование без посредников.",
    implementation: "Смарт-контракты в сети Polygon. Оплата и подтверждение происходят мгновенно без участия банковских шлюзов.",
    drivers: ["Blockchain", "Solidity"], consequences: ["Цены -15%"], impact: "Экономика: Децентрализация рынка.",
    icon: "ShieldCheck", mainImage: "/4.jpg", x: 10, y: 60
  },
  {
    id: 5, title: "Квантовая защита",
    description: "Абсолютная безопасность данных.",
    implementation: "Применение постквантовых криптографических алгоритмов для защиты персональных данных и платежей гостя.",
    drivers: ["Quantum Tech", "PQC"], consequences: ["Безопасность"], impact: "Банки: Защита от взлома будущего.",
    icon: "ShieldCheck", mainImage: "/hotel.png", x: 40, y: 60
  },
  {
    id: 6, title: "Робо-доставка",
    description: "Автономные курьеры в отеле.",
    implementation: "Синхронизация фронтенда с ROS (Robot Operating System). Заказ из браузера передается напрямую внутреннему роботу-доставщику.",
    drivers: ["Robotics", "WebSockets"], consequences: ["Доставка 24/7"], impact: "Логистика: Оптимизация персонала.",
    icon: "Smartphone", mainImage: "/3.jpg", x: 70, y: 60
  },
  {
    id: 7, title: "Биометрический вход",
    description: "Забудьте про ключи.",
    implementation: "Распознавание лиц через браузерные API. Мгновенная авторизация и открытие дверей по биометрии.",
    drivers: ["FaceID", "Neural Links"], consequences: ["Без ключей"], impact: "Комфорт: Мгновенный чекин.",
    icon: "Sparkles", mainImage: "/1.jpg", x: 25, y: 35
  },
  {
    id: 8, title: "Нейро-Интерфейс",
    description: "Управление отелем силой мысли.",
    implementation: "Экспериментальная поддержка BCI-устройств. Система считывает уровень стресса и подбирает музыку и свет в номере.",
    drivers: ["Neuralink", "BCI"], consequences: ["Новый опыт"], impact: "Luxury: Предел цифрового комфорта.",
    icon: "View", mainImage: "/2.jpg", x: 55, y: 35
  }
];
