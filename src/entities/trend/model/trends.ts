export interface Hotel {
  id: number;
  name: string;
  country: string;
  status: 'Active' | 'Planned' | 'Development';
  occupancy: string;
  match: number;
}

export interface Trend {
  id: number;
  title: string;
  description: string;
  implementation: string;
  impact: string;
  icon: string;
  mainImage: string;
}

export const futureHotels: Hotel[] = [
  { id: 1, name: "Nova Horizon Shanghai", country: "Китай", status: "Active", occupancy: "94%", match: 99 },
  { id: 2, name: "Nova Horizon Dubai", country: "ОАЭ", status: "Active", occupancy: "88%", match: 95 },
  { id: 3, name: "Nova Horizon Antalya", country: "Турция", status: "Active", occupancy: "91%", match: 92 },
  { id: 4, name: "Nova Horizon Tokyo", country: "Япония", status: "Planned", occupancy: "0%", match: 97 }
];

export const trends: Trend[] = [
  {
    id: 1, title: "Нейро-Среда",
    description: "Адаптивное пространство под ваше состояние.",
    implementation: "Система NovaOS использует массив датчиков для анализа уровня кортизола и мелатонина гостя. В зависимости от биоритмов, номер автоматически меняет спектр освещения, плотность воздуха и частоту фоновых звуков.",
    impact: "Luxury: Отель знает, что вы хотите, до того как вы об этом подумали.",
    icon: "Sparkles", mainImage: "/tech-1.webp"
  },
  {
    id: 2, title: "Квантовый Консьерж",
    description: "Персональный ИИ-ассистент без задержек.",
    implementation: "Ваш номер оснащен вычислительным узлом, подключенным к квантовому облаку. ИИ-консьерж способен мгновенно бронировать билеты и переводить вашу речь на любой язык мира в реальном времени.",
    impact: "Сервис: Граница между физическим и цифровым миром стерта.",
    icon: "View", mainImage: "/tech-2.webp"
  },
  {
    id: 3, title: "Биометрический Слой",
    description: "Бесшовный доступ без ключей и девайсов.",
    implementation: "Многофакторная авторизация по рисунку вен ладони и сетчатке глаза. Доступ в номер и оплата любых услуг происходят мгновенно без участия персонала.",
    impact: "Безопасность: Ваши биометрические данные — единственный ключ к пространству.",
    icon: "ShieldCheck", mainImage: "/tech-4.webp"
  },
  {
    id: 4, title: "Молекулярный Сервис",
    description: "Роботизированная логистика и кухня.",
    implementation: "Внутренняя вакуумная система доставки и парк сервисных роботов обеспечивают выполнение заказа в течение 3-х минут. Кухня использует технологии 3D-печати нутриентами.",
    impact: "Экономика: Оптимизация ресурсов и персонализация питания.",
    icon: "Zap", mainImage: "/tech-7.webp"
  },
  {
    id: 5, title: "IoT Экосистема",
    description: "Matter-протоколы для тотального контроля.",
    implementation: "Все элементы номера (от прозрачности окон до плотности подушек) управляются через единую шину данных NovaOS.",
    impact: "Комфорт: Полный контроль среды через любую поверхность.",
    icon: "Smartphone", mainImage: "/tech-5.webp"
  },
  {
    id: 6, title: "WebXR Визуализация",
    description: "Цифровой двойник отеля в браузере.",
    implementation: "Рендеринг высокополигональных 3D-сцен отеля с поддержкой WebXR API для виртуального посещения до заезда.",
    impact: "Опыт: Погружение в пространство из любой точки мира.",
    icon: "View", mainImage: "/tech-8.webp"
  },
  {
    id: 7, title: "Квантовая Защита",
    description: "Абсолютная безопасность данных.",
    implementation: "Применение постквантовых криптографических алгоритмов для защиты личных предпочтений и транзакций гостя.",
    impact: "Приватность: Ваши данные защищены технологиями будущего.",
    icon: "ShieldCheck", mainImage: "/tech-1.webp"
  },
  {
    id: 8, title: "Нейро-Интерфейс",
    description: "Управление силой мысли.",
    implementation: "Экспериментальная поддержка BCI-устройств. Система считывает эмоциональный фон и подбирает свет и музыку.",
    impact: "Luxury: Максимальная синергия человека и технологий.",
    icon: "Sparkles", mainImage: "/tech-6.webp"
  }
];
