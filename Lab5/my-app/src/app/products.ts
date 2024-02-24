export interface Product {
  id: number,
  name: string,
  description: string,
  image: string,
  rating: number,
  price: number,
  link: string,
  category: string,
  likes: number
}


export const products = [
  {
    id: 1,
    name: "Смартфон Apple iPhone 13 128Gb Midnight черный",
    description: `технология NFC: Да
    цвет: черный
    тип экрана: OLED, Super Retina XDR
    диагональ: 6.1 дюйм
    размер оперативной памяти: 4 ГБ
    процессор: 6-ядерный Apple A15 Bionic
    объем встроенной памяти: 128.0 ГБ
    емкость аккумулятора: 3095.0 мАч`,
    rating: 5,
    price: 290000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large",
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    category: "phones",
    likes: 0
  },
  {
    id: 2,
    name: "Смартфон Apple iPhone 14 128Gb черный",
    description: `технология NFC: Да
    цвет: черный
    тип экрана: OLED, Super Retina XDR display
    диагональ: 6.1 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 6-ядерный Apple A15 Bionic
    объем встроенной памяти: 128.0 ГБ
    емкость аккумулятора: 3279.0 мАч`,
    rating: 5,
    price: 320000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=preview-large",
    link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000",
    category: "phones",
    likes: 0
  },
  {
    id: 3,
    name: "Смартфон Xiaomi Redmi Note 12 Pro 4G 8 ГБ/256 ГБ серый",
    description: `технология NFC: Да
    цвет: серый
    тип экрана: AMOLED, сенсорный, мультитач
    диагональ: 6.67 дюйм
    размер оперативной памяти: 8 ГБ
    процессор: 8-ядерный Qualcomm Snapdragon 732G
    объем встроенной памяти: 256.0 ГБ
    емкость аккумулятора: 5000.0 мАч`,
    rating: 5,
    price: 120000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h02/ha0/79846423199774.jpg?format=preview-large",
    link: "https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-4g-8-gb-256-gb-seryi-109775102/?c=750000000",
    category: "phones",
    likes: 0
  },
  {
    id: 4,
    name: "Смартфон Apple iPhone 13 Pro Max 1Tb зеленый",
    description: `технология NFC: Да
    цвет: зеленый
    тип экрана: OLED, Super Retina XDR
    диагональ: 6.7 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 6-ядерный Apple A15 Bionic
    объем встроенной памяти: 1024.0 ГБ
    емкость аккумулятора: 4352.0 мАч`,
    rating: 5,
    price: 930000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h9a/h7f/64255254364190.jpg?format=preview-large",
    link: "https://kaspi.kz/shop/p/apple-iphone-13-pro-max-1tb-zelenyi-104079193/?c=750000000",
    category: "phones",
    likes: 0
  },
  {
    id: 5,
    name: "Смартфон Samsung Galaxy Z Fold4 12 ГБ/256 ГБ серый",
    description: `технология NFC: Да
    цвет: серый
    тип экрана: Dynamic AMOLED 2X
    диагональ: 7.6 дюйм
    размер оперативной памяти: 12 ГБ
    процессор: 8-ядерный Qualcomm Snapdragon 8 Gen 1
    объем встроенной памяти: 256.0 ГБ
    емкость аккумулятора: 4400.0 мАч`,
    rating: 5,
    price: 880000,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h5f/he4/64404531085342.jpg?format=preview-large",
    link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000",
    category: "phones",
    likes: 0
  },
  {
    id: 6,
    name: 'Ноутбук Lenovo IdeaPad 3 15IGL05 81WQ00EMRK серый',
    description: `диагональ экрана: 15.6 дюйм
    процессор: Intel Celeron N4020
    видеокарта: Intel UHD Graphics 600
    размер оперативной памяти: 4.0 Гб
    тип жесткого диска: SSD
    общий объем накопителей: 256.0 Гб`,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=preview-large',
    rating: 4.5,
    price: 175780,
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15igl05-81wq00emrk-seryi-102878742/?c=750000000',
    category: 'laptops',
    likes: 0
  },
  {
    id: 7,
    name: 'Ноутбук Apple MacBook Air 13 MGN93 серебристый',
    description: `диагональ экрана: 13.3 дюйм
    процессор: Apple M1
    видеокарта: Apple M1
    размер оперативной памяти: 8.0 Гб
    тип жесткого диска: SSD
    общий объем накопителей: 256.0 Гб`,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=preview-large',
    rating: 5,
    price: 420000,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000',
    category: 'laptops',
    likes: 0
  },
  {
    id: 8,
    name: 'Ноутбук Chuwi HeroBook Pro 14.1 B08316YSKH серебристый',
    description: `диагональ экрана: 14.1 дюйм
    процессор: Intel Celeron N4020
    видеокарта: Intel UHD Graphics 600
    размер оперативной памяти: 8.0 Гб
    тип жесткого диска: SSD
    общий объем накопителей: 256.0 Гб`,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hfd/hed/64321380974622.jpg?format=preview-large',
    rating: 4.5,
    price: 120000,
    link: 'https://kaspi.kz/shop/p/chuwi-herobook-pro-14-1-b08316yskh-serebristyi-101675028/?c=750000000',
    category: 'laptops',
    likes: 0
  },
  {
    id: 9,
    name: 'Ноутбук HP 15s-fq0017ci 9R257EA темно-серый',
    description: `диагональ экрана: 15.6 дюйм
    процессор: Intel Celeron N4120
    видеокарта: Intel UHD Graphics 600
    размер оперативной памяти: 8.0 Гб
    тип жесткого диска: SSD
    общий объем накопителей: 256.0 Гб`,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h4e/84818607276062.jpg?format=preview-large',
    rating: 5,
    price: 150000,
    link: 'https://kaspi.kz/shop/p/hp-15s-fq0017ci-9r257ea-temno-seryi-115752629/?c=750000000',
    category: 'laptops',
    likes: 0
  },
  {
    id: 10,
    name: 'Ноутбук Acer Aspire 3 A315 NX.ADDER.01E серебристый',
    description: `диагональ экрана: 15.6 дюйм
    процессор: Intel Core i5-1135G7
    видеокарта: Intel Iris Xe
    размер оперативной памяти: 16.0 Гб
    тип жесткого диска: SSD
    общий объем накопителей: 512.0 Гб`,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha8/h9b/64384900956190.jpg?format=preview-large',
    rating: 5,
    price: 300000,
    link: 'https://kaspi.kz/shop/p/acer-aspire-3-a315-nx-adder-01e-serebristyi-106485059/?c=750000000',
    category: 'laptops',
    likes: 0
  },
  {
    id: 11,
    name: 'Электрочайник BEREKE BR-810 серый',
    description: `фильтр от накипи: Нет
    тип: электрочайник
    объем: 2.0 л
    мощность: 1500.0 Вт
    материал корпуса: нержавеющая сталь
    цвет: серый`,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=preview-large',
    rating: 4.5,
    price: 1800,
    link: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
    category: 'homeItems',
    likes: 0
  },
  {
    id: 12,
    name: 'Блендер SM-7700 серебристый',
    description: `тип: стационарный
    мощность: 1000.0 Вт
    управление: механическое
    количество скоростей: 3
    измельчитель: Да
    цвет: серебристый`,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h78/he6/81315957440542.png?format=preview-large',
    rating: 4.5,
    price: 10000,
    link: 'https://kaspi.kz/shop/p/sm-7700-serebristyi-110902818/?c=750000000',
    category: 'homeItems',
    likes: 0
  },
  {
    id: 13,
    name: 'Кухонные весы Generic SF-400',
    description: `тип: электронные
    предел взвешивания: 10.0 кг
    точность измерения: 1.0 г
    счетчик калорий: Да
    цвет: белый`,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=preview-large',
    rating: 5,
    price: 900,
    link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
    category: 'homeItems',
    likes: 0
  },
  {
    id: 14,
    name: 'Пылесос Deerma DX700 белый',
    description: `тип: вертикальный
    уборка: сухая
    тип пылесборника: циклонный фильтр
    потребляемая мощность: 600.0 Вт
    источник питания: сеть
    цвет: белый`,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=preview-large',
    rating: 5,
    price: 17000,
    link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
    category: 'homeItems',
    likes: 0
  },
  {
    id: 15,
    name: 'Вафельница Proliss Pro-808 черный',
    description: `материал корпуса: металл/пластик
    тип: вафельница
    количество порций: 2
    антипригарное покрытие: Да
    цвет: черный`,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h49/h36/64432195403806.jpg?format=preview-large',
    rating: 4.5,
    price: 4000,
    link: 'https://kaspi.kz/shop/p/vafel-nitsa-proliss-pro-808-chernyi-105935489/?c=750000000',
    category: 'homeItems',
    likes: 0
  },
  {
    id: 16,
    name: 'MSQ premium 02 диван, обивка текстиль, 80x210x75 см, синий',
    description: `механизм трансформации: еврокнижка
    обивка: текстиль
    высота: 80.0 см
    ширина: 210.0 см
    глубина: 75.0 см
    комплектация: диван
    цвет: синий
    страна: Казахстан`,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdf/h51/64448519307294.jpg?format=preview-large',
    rating: 4.5,
    price: 50000,
    link: 'https://kaspi.kz/shop/p/msq-premium-02-divan-obivka-tekstil-80x210x75-sm-sinii-104375942/?c=750000000',
    category: 'furniture',
    likes: 0
  },
  {
    id: 17,
    name: 'Стул N-12, 81x50x25 см, белый',
    description: `тип: стул
    материал: пластик
    обивка: отсутствует
    жесткость сиденья: высокая
    высота, см: 81.0 см
    ширина, см: 50.0 см
    глубина, см: 25.0 см
    цвет: белый
    страна: Китай`,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/63900105277470.jpg?format=preview-large',
    rating: 5,
    price: 7000,
    link: 'https://kaspi.kz/shop/p/stul-n-12-81x50x25-sm-belyi-100189414/?c=750000000',
    category: 'furniture',
    likes: 0
  },
  {
    id: 18,
    name: 'Письменный стол Арапбек 114x40x140 см stolpis002',
    description: `форма: прямоугольный
    тип: классический
    материал: ЛДСП
    длина, см: 114.0 см
    ширина, см: 40
    высота, см: 140.0 см
    примечание: товар может поставляться в разобранном виде (по поводу сборки уточняйте у продавца)
    цвет: белый
    страна: Казахстан`,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h6f/64379432665118.jpg?format=preview-large',
    rating: 5,
    price: 15000,
    link: 'https://kaspi.kz/shop/p/arapbek-114x40x140-sm-stolpis002-106541589/?c=750000000',
    category: 'furniture',
    likes: 0
  },
  {
    id: 19,
    name: 'Офисное кресло 18604221_Ми-6, черный',
    description: `назначение: офисное кресло
    тип базы: крестовина с колесами
    материал обивки: текстиль
    регулировка: высота сиденья
    цвет: черный
    страна: Китай`,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h0e/85022513496094.jpg?format=preview-large',
    rating: 4,
    price: 15000,
    link: 'https://kaspi.kz/shop/p/ofisnoe-kreslo-18604221-mi-6-chernyi-116243941/?c=750000000',
    category: 'furniture',
    likes: 0
  },
  {
    id: 20,
    name: 'Стеллаж Abuer Стеллаж 8 секций 1020890 ЛДСП, 66 смx29 смx129 см, белый',
    description:`количество полок: 8
    материал: ЛДСП
    ширина: 66.0 см
    глубина: 29.0 см
    высота: 129.0 см
    цвет: белый
    страна: Казахстан`,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h3d/hbf/64919963402270.jpg?format=preview-large',
    rating: 5,
    price: 14000,
    link: 'https://kaspi.kz/shop/p/stellazh-abuer-stellazh-8-sektsii-1020890-ldsp-66-smx29-smx129-sm-belyi-104771353/?c=750000000',
    category: 'furniture',
    likes: 0
  }
]