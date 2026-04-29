// product.js
const products = [
  // ========== لپ‌تاپ‌ها (عکس لپ‌تاپ واقعی) ==========
  {
    id: 1,
    name: "لپ‌تاپ اپل مک‌بوک پرو M3",
    price: 125000000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
    description: "لپ‌تاپ قدرتمند با پردازنده M3، مناسب برنامه‌نویسی و طراحی گرافیک",
    category: "لپ‌تاپ"
  },
  {
    id: 2,
    name: "لپ‌تاپ ایسوس ROG Zephyrus",
    price: 145000000,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop",
    description: "لپ‌تاپ گیمینگ با پردازنده Intel i9 و RTX 4080",
    category: "لپ‌تاپ"
  },
  {
    id: 3,
    name: "لپ‌تاپ لنوو ThinkPad X1",
    price: 98000000,
    image: "https://images.unsplash.com/photo-1629131721726-3f01e2a86c29?w=300&h=300&fit=crop",
    description: "لپ‌تاپ حرفه‌ای مناسب برنامه‌نویسان و توسعه‌دهندگان",
    category: "لپ‌تاپ"
  },

  // ========== موبایل (عکس گوشی واقعی) ==========
  {
    id: 4,
    name: "گوشی آیفون ۱۵ پرو مکس",
    price: 85000000,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=300&h=300&fit=crop",
    description: "پرچمدار اپل با دوربین 48 مگاپیکسل و تراشه A17 Pro",
    category: "موبایل"
  },
  {
    id: 5,
    name: "گوشی سامسونگ گلکسی S24 اولترا",
    price: 72000000,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop",
    description: "دوربین 200 مگاپیکسل، قلم S-Pen و صفحه نمایش 6.8 اینچی",
    category: "موبایل"
  },
  {
    id: 6,
    name: "گوشی شیائومی 14 پرو",
    price: 45000000,
    image: "https://images.unsplash.com/photo-1676123417371-3c6f5d7b4c3b?w=300&h=300&fit=crop",
    description: "دوربین لایکا، پردازنده اسنپدراگون 8 نسل 3",
    category: "موبایل"
  },
  {
    id: 7,
    name: "گوشی پیکسل ۸ پرو",
    price: 62000000,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop",
    description: "بهترین دوربین گوگل با قابلیت‌های هوش مصنوعی",
    category: "موبایل"
  },
  {
    id: 8,
    name: "گوشی وان‌پلاس ۱۲",
    price: 55000000,
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=300&h=300&fit=crop",
    description: "باتری 5400 میلی‌آمپر و شارژ 100 وات",
    category: "موبایل"
  },

  // ========== تبلت (عکس تبلت واقعی) ==========
  {
    id: 9,
    name: "تبلت اپل آیپد پرو 12.9 اینچ",
    price: 78000000,
    image: "https://images.unsplash.com/photo-1544244015-6b8f6d4f5b8a?w=300&h=300&fit=crop",
    description: "با چیپ M2، مناسب طراحی و حرفه‌ای‌ها",
    category: "تبلت"
  },
  {
    id: 10,
    name: "تبلت سامسونگ گلکسی تب S9",
    price: 42000000,
    image: "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=300&h=300&fit=crop",
    description: "با قلم S-Pen و صفحه نمایش 120 هرتز",
    category: "تبلت"
  },
  {
    id: 11,
    name: "تبلت شیائومی پد ۶",
    price: 28000000,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=300&h=300&fit=crop",
    description: "اقتصادی با کیفیت ساخت عالی و صفحه نمایش بزرگ",
    category: "تبلت"
  },

  // ========== ساعت هوشمند (عکس ساعت واقعی) ==========
  {
    id: 12,
    name: "ساعت هوشمند اپل واچ اولترا ۲",
    price: 45000000,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop",
    description: "ساعت مقاوم با باتری 36 ساعته و GPS دقیق",
    category: "ساعت هوشمند"
  },
  {
    id: 13,
    name: "ساعت هوشمند سامسونگ گلکسی واچ ۶",
    price: 18000000,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&h=300&fit=crop",
    description: "صفحه نمایش دایره‌ای، سنسور‌های پیشرفته سلامتی",
    category: "ساعت هوشمند"
  },
  {
    id: 14,
    name: "ساعت هوشمند گارمین فنیکس ۷",
    price: 35000000,
    image: "https://images.unsplash.com/photo-1626203236210-1bff2a5c61b2?w=300&h=300&fit=crop",
    description: "مناسب ورزشکاران حرفه‌ای با باتری 18 روزه",
    category: "ساعت هوشمند"
  },

  // ========== دوربین (عکس دوربین واقعی) ==========
  {
    id: 15,
    name: "دوربین کانن EOS R6",
    price: 125000000,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop",
    description: "دوربین بدون آینه فول فریم با لرزشگیر داخلی",
    category: "دوربین"
  },
  {
    id: 16,
    name: "دوربین سونی A7 IV",
    price: 145000000,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop",
    description: "دوربین حرفه‌ای 33 مگاپیکسل با فیلمبرداری 4K",
    category: "دوربین"
  },
  {
    id: 17,
    name: "دوربین گوپرو هیرو ۱۲",
    price: 28000000,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop",
    description: "دوربین اکشن ضد آب با کیفیت 5.3K",
    category: "دوربین"
  },

  // ========== کیف و کاور ==========
  {
    id: 18,
    name: "کیف لپ‌تاپ سامسونیت",
    price: 5200000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    description: "کیف ضد ضربه مناسب لپ‌تاپ 15.6 اینچ",
    category: "کیف"
  },
  {
    id: 19,
    name: "کاور اصلی آیفون ۱۵ پرو",
    price: 4200000,
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=300&h=300&fit=crop",
    description: "کاور سیلیکونی اپل با مغناطیس مگ‌سیف",
    category: "محافظ"
  },
  {
    id: 20,
    name: "کاور کتابی سامسونگ تب S9",
    price: 3800000,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=300&h=300&fit=crop",
    description: "کاور اصلی سامسونگ با قابلیت جاگذاری قلم",
    category: "محافظ"
  }
];



export default function getproduct(){
    return products
}

export  function getproductById(id){
  return products.find((p)=>p.id==Number(id));
}




