import React from "react";
import { motion } from "framer-motion";

const filials = [
  {
    id: 1,
    region: "Ташкент — Центр",
    openedYear: 2021,
    employees: 24,
    phone: "+998 71 200 33 44",
    address: "ул. Алибека, 12, Ташкент",
    medTypes: ["Таблетки", "Инъекции", "Растворы", "Витамины"],
    image:
      "https://i.pinimg.com/736x/2e/f7/90/2ef79091125d638a06cabf94909fe19d.jpg",
    description:
      "Флагманский филиал сети, современный склад и круглосуточная аптека. Принимает заказы онлайн, имеет собственный логистический центр и сервис по доставке.",
    highlight: "Работает 24/7, экспресс-доставка по городу",
  },
  {
    id: 2,
    region: "Самарканд",
    openedYear: 2019,
    employees: 18,
    phone: "+998 66 123 11 22",
    address: "ул. Регистан, 5, Самарканд",
    medTypes: ["Таблетки", "БАДы", "Детские препараты"],
    image:
      "https://i.pinimg.com/1200x/54/b8/ff/54b8ff763d048640f38312a56017f0ef.jpg",
    description:
      "Аптека в историческом центре, ориентирована на клиентов и туристов, большая линейка обезболивающих и средств первой помощи.",
    highlight: "Специализированный ассортимент для путешественников",
  },
  {
    id: 3,
    region: "Бухара",
    openedYear: 2020,
    employees: 12,
    phone: "+998 65 555 44 33",
    address: "ул. Мирзо, 8, Бухара",
    medTypes: ["Таблетки", "Антибиотики", "Мази"],
    image:
      "https://i.pinimg.com/736x/ac/9a/dc/ac9adc864ad0c71dbecc94f40d835338.jpg",
    description:
      "Небольшой уютный филиал с высоким уровнем сервиса, консультирование фармацевта на месте.",
    highlight: "Персональное консультирование",
  },
  {
    id: 4,
    region: "Фергана",
    openedYear: 2022,
    employees: 21,
    phone: "+998 73 321 00 11",
    address: "просп. Восход, 3, Фергана",
    medTypes: ["Инъекции", "Растворы", "Медицинские приборы"],
    image:
      "https://i.pinimg.com/1200x/10/66/d7/1066d72136b712191874bc6365829a8d.jpg",
    description:
      "Крупный филиал с отделением по медицинским приборам и профессиональными фармацевтами.",
    highlight: "Поставка медицинских приборов",
  },
  {
    id: 5,
    region: "Андижан",
    openedYear: 2018,
    employees: 16,
    phone: "+998 74 700 80 90",
    address: "ул. Базар, 14, Андижан",
    medTypes: ["Таблетки", "Витамины", "Детские препараты"],
    image:
      "https://i.pinimg.com/736x/5f/49/6a/5f496a16790b2bf9290a484d07c32529.jpg",
    description:
      "Филиал с семейной ориентацией, большой выбор детских лекарств и витаминов.",
    highlight: "Детская линейка",
  },
  {
    id: 6,
    region: "Наманган",
    openedYear: 2023,
    employees: 22,
    phone: "+998 99 404 30 20",
    address: "пл. Молодежи, 2, Наманган",
    medTypes: ["Таблетки", "Антисептики", "Диетические пасты"],
    image:
      "https://i.pinimg.com/736x/a5/cd/6f/a5cd6f29bff02f46a3432b99fe2c293f.jpg",
    description:
      "Современный филиал с усиленным складским запасом и круглосуточной подачей лекарств.",
    highlight: "Большие запасы",
  },
  {
    id: 7,
    region: "Нукус (Хорезм)",
    openedYear: 2020,
    employees: 11,
    phone: "+998 61 222 33 44",
    address: "ул. Хива, 10, Нукус",
    medTypes: ["Таблетки", "Мази"],
    image:
      "https://i.pinimg.com/736x/e6/cd/a9/e6cda9d9eb93ef44a316582e67a4bada.jpg",
    description:
      "Региональный филиал с надежными поставками и дружелюбным коллективом.",
    highlight: "Быстрые поставки по региону",
  },
  {
    id: 8,
    region: "Хоразм",
    openedYear: 2021,
    employees: 13,
    phone: "+998 91 222 11 00",
    address: "ул. Ургенч, 8, Хоразм",
    medTypes: ["Таблетки", "Инъекции"],
    image:
      "https://i.pinimg.com/736x/52/47/67/524767fe90b519a29896f59b049012bd.jpg",
    description:
      "Аптека с хорошим ассортиментом и вежливым персоналом.",
    highlight: "Удобное местоположение",
  },
  {
    id: 9,
    region: "Кашкадарья",
    openedYear: 2017,
    employees: 15,
    phone: "+998 90 101 20 30",
    address: "ул. Катта Куруг, 3, Кашкадарья",
    medTypes: ["Таблетки", "Антибиотики", "Витамины"],
    image:
      "https://i.pinimg.com/736x/99/c4/0a/99c40aa75634028618f46253339475a2.jpg",
    description:
      "Стабильный филиал, работающий с медицинскими учреждениями области.",
    highlight: "Сотрудничество с клиниками",
  },
  {
    id: 10,
    region: "Сурхандарья",
    openedYear: 2019,
    employees: 17,
    phone: "+998 97 999 44 55",
    address: "ул. Шарк, 22, Сурхандарья",
    medTypes: ["Таблетки", "Растворы"],
    image:
      "https://i.pinimg.com/736x/23/47/51/23475170cd2448e5ecf48074a85fe3ca.jpg",
    description:
      "Филиал, ориентированный на быстрое обслуживание: короткие очереди, цифровой учёт.",
    highlight: "Быстрое обслуживание",
  },
  {
    id: 11,
    region: "Джизак",
    openedYear: 2022,
    employees: 10,
    phone: "+998 93 478 88 99",
    address: "ул. Кўлтепа, 5, Джизак",
    medTypes: ["Таблетки", "Инъекции", "Мази"],
    image:
      "https://i.pinimg.com/736x/17/cf/a9/17cfa97979457d7807e6f6c6f994ae20.jpg",
    description:
      "Новый современный филиал с акцентом на обслуживание и локальные потребности.",
    highlight: "Локальная адаптация ассортимента",
  },
  {
    id: 12,
    region: "Сирдарья",
    openedYear: 2020,
    employees: 9,
    phone: "+998 90 567 67 67",
    address: "ул. Сайхун, 44, Сирдарья",
    medTypes: ["Таблетки", "Витамины"],
    image:
      "https://i.pinimg.com/736x/73/d3/95/73d395d94e42deecd1373277f6af3d2b.jpg",
    description:
      "Небольшой филиал с фокусом на профилактические препараты и витамины.",
    highlight: "Профилактические программы",
  },
];

export default function Branches() {
  return (
    <div className="relative min-h-screen p-6 overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(circle at 10% 20%, rgba(99,102,241,0.14), transparent 10%), radial-gradient(circle at 80% 80%, rgba(14,165,233,0.08), transparent 12%), linear-gradient(180deg, #0f172a 0%, #022c45 60%)",
          }}
        />
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => {
          const size = 60 + Math.floor(Math.random() * 120);
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * 6;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{
                opacity: [0.05, 0.25, 0.05],
                scale: [0.6, 1, 0.6],
                x: [0, (Math.random() - 0.5) * 200, 0],
                y: [0, (Math.random() - 0.5) * 200, 0],
              }}
              transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, delay }}
              style={{
                position: "absolute",
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(99,102,241,0.12))",
                filter: "blur(8px)",
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10">

        <h1 className="
  relative 
  text-4xl md:text-6xl font-extrabold 
  text-white 
  text-center 
  mb-10 
  px-6 py-4
  rounded-2xl
  shadow-[0_10px_30px_rgba(0,0,0,0.35)]
  bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700
  tracking-wide
  overflow-hidden
">
          <span className="relative z-10 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
            Аптечные филиалы по регионам
          </span>

          <span className="
    absolute inset-0 
    rounded-2xl 
    border-4 border-white/20
    pointer-events-none
  "></span>

          <span className="
    absolute inset-0
    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),rgba(0,0,0,0))]
    pointer-events-none
  "></span>
        </h1>

        <p className="text-center text-black max-w-3xl mx-auto mb-10">
          12 филиалов по всем регионам — подробная информация, контакты, фото и карта. Дизайн с плавной анимацией и глубоким синим фоном —
          словно страница из лёгкой фантазии.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filials.map((f) => (
            <motion.article
              key={f.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: f.id * 0.03 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={f.image}
                  alt={f.region}
                  className="w-full h-48 object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute left-4 bottom-4">
                  <div className="inline-flex items-center gap-3 bg-white/10 px-3 py-1 rounded-full backdrop-blur">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <div className="text-white font-semibold">{f.region}</div>
                  </div>
                </div>
              </div>

              <div className="p-5 text-sky-50">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-gray-600">{f.region}</h3>
                    <p className="text-sm text-gray-700 mb-2">
                      Открыт: <strong>{f.openedYear}</strong> · Сотрудников: <strong>{f.employees}</strong>
                    </p>

                    <p className="text-gray-700 text-sm mb-3 line-clamp-3">{f.description}</p>

                    <div className="text-sm text-gray-500 space-y-1">
                      <div><strong>Телефон:</strong> <a className="underline" href={`tel:${f.phone.replace(/\s/g, '')}`}>{f.phone}</a></div>
                      <div><strong>Адрес:</strong> {f.address}</div>
                      <div><strong>Типы медикаментов:</strong> {(f.medTypes || []).join(", ")}</div>
                      <div className="mt-2"><strong className="text-gray-700">Особенность:</strong> <span className="text-gray-700"> {f.highlight}</span></div>
                    </div>
                  </div>

                  <div className="w-32 shrink-0 text-right">
                    <div className="text-sm text-gray-900">ID {f.id}</div>
                    <div className="mt-3">
                      <a
                        className="inline-block bg-white/10 text-gray-500 px-3 py-2 rounded hover:bg-white/20 transition"
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(f.address)}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Открыть на карте
                      </a>
                    </div>
                    <div className="mt-3 text-xs text-gray-500">
                      <div>Год: {f.openedYear}</div>
                      <div>Сотр.: {f.employees}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    className="bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 rounded-lg text-white font-medium shadow hover:scale-105 transition"
                  >
                    Подробнее
                  </button>
                  <a
                    className="text-sm text-gray-500 underline"
                    href={`mailto:info@aptekasite.uz?subject=Вопрос по филиалу ${encodeURIComponent(f.region)}`}
                  >
                    Написать нам
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* footer statistics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl p-6 text-gray-800 shadow-lg border border-white/10">
            <h4 className="text-sm text-gray-800">Кол-во филиалов</h4>
            <div className="text-3xl font-bold">{filials.length}</div>
            <p className="text-gray-800 mt-2">Филиалы во всех ключевых регионах страны</p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 text-gray-800 shadow-lg border border-white/10">
            <h4 className="text-sm text-gray-800">Всего сотрудников</h4>
            <div className="text-3xl font-bold">
              {filials.reduce((s, b) => s + (b.employees || 0), 0)}
            </div>
            <p className="text-gray-800 mt-2">Команда фармацевтов, логистов и менеджеров</p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 text-gray-800 shadow-lg border border-white/10">
            <h4 className="text-sm text-gray-800">Уникальных типов медикаментов</h4>
            <div className="text-3xl font-bold">
              {Array.from(new Set(filials.flatMap((b) => b.medTypes))).length}
            </div>
            <p className="text-gray-800 mt-2">Широкий ассортимент по всем филиалам</p>
          </div>
        </div>
      </div>
    </div>
  );
}
