export interface Product {
  id: number,
  name: string,
  description: string,
  image: string,
  rating: number,
  price: number,
  link: string,
  category: string
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
    category: "phones"
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
    category: "phones"
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
    category: "phones"
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
    category: "phones"
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
    category: "phones"
  }
]