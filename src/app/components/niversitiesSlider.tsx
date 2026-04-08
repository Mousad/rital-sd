import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

const majors = [
    {
      title: "الطب ",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الطب.png.webp",
      link: "https://studyinegypt-alkayan.com/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d8%b7%d8%a8-%d9%81%d9%8a-%d9%85%d8%b5%d8%b1/",
    },
    {
      title: "الهندسة",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الهندسة.png.webp",
    },
   
    {
      title: "الأمن السيبراني",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الامن-السيبراني.png.webp",
    },
   
    {
      title: "القانون",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/القانون.png.webp",
      link: "https://studyinegypt-alkayan.com/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d9%82%d8%a7%d9%86%d9%88%d9%86-%d9%81%d9%8a-%d9%85%d8%b5%d8%b1/",
    },
    {
      title: "إدارة الأعمال",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/ادراة-الاعمال.png.webp",
      link: "https://studyinegypt-alkayan.com/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d9%81%d9%8a-%d9%85%d8%b5%d8%b1/",
    },
  
   
  
   
    {
      title: "الذكاء الاصطناعي",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الذكاء-الاصطناعي.png.webp",
    },
  ];
const universities = [
  {
    id: 1,
    name: "جامعة القاهرة",
    location: "مصر - القاهرة",
    image: "https://i.pinimg.com/736x/27/71/57/277157a5755cfab9d6b384ddb66f41d0.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Cairo_University_new_logo.png/330px-Cairo_University_new_logo.png",
  },
  {
    id: 2,
    name: "جامعة عين شمس",
    location: "مصر - القاهرة",
    image: "https://i.pinimg.com/736x/30/24/b9/3024b90dc872c7300a0abe0abef03c02.jpg",
    logo: "https://i.pinimg.com/1200x/f9/45/f5/f945f57c443bf37fb720228401bd605b.jpg",
  },
  {
    id: 3,
    name: "جامعة الزقازيق",
    location: "مصر - الزقازيق",
    image: "https://admin.alkhawarizmi.ae/storage/317/20231227154517.jpg",
    logo: "https://i.pinimg.com/736x/db/4e/ce/db4ece0cc59055d7443a4ccf37e2775a.jpg",
  },
  {
    id: 4,
    name: "جامعة حلوان",
    location: "مصر - القاهرة",
    image: "https://admin.alkhawarizmi-online.com//storage/268/20240101163814.jpeg",
    logo: "https://i.pinimg.com/1200x/4a/41/21/4a4121562d70abd03bfcc835f7ef2804.jpg",
  },
  {
    id: 5,
    name: "جامعة النيل",
    location: "مصر - القاهرة",
    image: "https://i.pinimg.com/1200x/4c/59/07/4c5907e689d03e4b3f1ce3cd61a6466b.jpg",
    logo: "https://scu.eg/storage/2023/05/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A7%D9%84%D9%86%D9%8A%D9%84.png",
  },
  {
    id: 6,
    name: "الجامعة الأمريكية",
    location: " القاهرة",
    image: "https://studyinegy.com/wp-content/uploads/2023/07/bi20210310_181252edit-medres-1-420x273.webp",
    logo: "https://www.universitiesegypt.com/ImageHandler.ashx?Id=12734&SS=2f4b759a533e4ad5b1db622ff646146c",
  },
  {
    id: 7,
    name: "جامعة كوتش",
    location: "تركيا ",
    image: "https://marifetedu.com/wp-content/uploads/2024/08/koc-uni-2.webp",
    logo: "https://i.pinimg.com/736x/fa/b3/7d/fab37d34099ee218c4407d0ae3481b4d.jpg",
  },
  {
    id: 8,
    name: "جامعة إسطنبول",
    location: " إسطنبول",
    image: "https://i.pinimg.com/1200x/aa/9f/5f/aa9f5fde0992e2d2821b37716d870a00.jpg",
    logo: "https://i.pinimg.com/736x/82/d6/df/82d6df286d5c28706daa5ad612b328e7.jpg",
  },
  
 
  {
    id: 11,
    name: "جامعة رواندا",
    location: "روندا ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgN2UDWdeRL9HG9ZDSCYe7Ojo97i27sE7Mg&s",
    logo: "https://arua.org/wp-content/uploads/University-of-Rwanda-LOGO-B-_RV.png",
  },

  {
    id: 13,
    name: "جامعة كارنيجي",
    location: "روندا ",
    image: "https://ar.uni24k.com/media/CACHE/images/unis/pic_school_15934_building_15e86ac5/2f3eecd73f3d47c4139320a02004d483.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/ar/thumb/d/de/Carnegie_Mellon_University_seal.png/250px-Carnegie_Mellon_University_seal.png",
  },
  {
    id: 14,
    name: "جامعة بكين",
    location: "الصين ",
    image: "https://i.pinimg.com/1200x/4b/52/6d/4b526dc7ab9d069f31c46c494703ee86.jpg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlTwhrRGi7cbSBnpv7VbVgx1e2AtK7kiHzA&s",
  },
  {
    id: 15,
    name: "جامعة تسينغهوا",
    location: " بكين",
    image: "https://i.pinimg.com/1200x/93/60/b4/9360b43aad028029d98ab2bd562013d8.jpg",
    logo: "https://images.for9a.com/thumb/fit-256-256-100-webp/organization/49344-c60e79The_Logo_of_Tsinghua_Hua_University,_in_1928.png",
  },
  {
    id: 16,
    name: "جامعة فودان",
    location: " شنغهاي",
    image: "https://i.pinimg.com/736x/c1/87/e7/c187e7d1d383dff5bfe9fa200bce2f5f.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Fudan_University_Logo.svg/330px-Fudan_University_Logo.svg.png",
  },
  {
    id: 17,
    name: "جامعة شنغهاي جياو تونغ",
    location: "الصين - شنغهاي",
    image: "https://i.pinimg.com/736x/bc/d2/2b/bcd22b2f4305241f8f056d51fa9f7241.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/ar/6/65/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%B4%D9%86%D8%BA%D9%87%D8%A7%D9%8A.png",
  },
  {
    id: 18,
    name: "جامعة نانجينغ",
    location: "الصين - نانجينغ",
    image: "https://primeedu.uz/wp-content/uploads/2021/10/Nanjing-University.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/6a/Nanjing_University_Logo.svg",
  },

];

export default function UniversitiesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-10 bg-[#f0f7f3]">
  <div className="container mx-auto px-4">
    {/* سهم الرجوع */}
      
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-[#0d2b5e] mb-4">جامعاتنا</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        اختر جامعتك المفضلة من خلال معرفة مميزات كل جامعة.
      </p>
    </div>

    {/* السلايدر */}
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >

      {universities.map((uni) => (
        <SwiperSlide key={uni.id}>

          {/* الكرت أصبح لينك */}
          <Link to={`/universities/${uni.id}`}>

            <div className="bg-[#f2f9f5] rounded-xl shadow-md overflow-hidden flex flex-col items-center hover:shadow-xl transition">

              <div className="relative w-full">
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-56 object-cover rounded-t-xl"
                />

                <img
                  src={uni.logo}
                  alt={`${uni.name} logo`}
                  className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 -bottom-10 -translate-x-1/2"
                />
              </div>

              <div className="pt-12 pb-6 text-center w-full">
                <h3 className="text-lg font-semibold text-[#0d2b5e]">
                  {uni.name}
                </h3>
                <p className="text-gray-600">{uni.location}</p>
              </div>

            </div>

          </Link>

        </SwiperSlide>
      ))}

    </Swiper>

    {/* الزر الثابت */}
    <div className="flex justify-center mt-8">
      <Link
        to={`/universities/${universities[activeIndex].id}`}
        className="bg-[#154734] text-white px-8 py-3 rounded-full hover:bg-[#0d2b5e] transition"
      >
        المزيد
      </Link>
    </div>

  </div>
</section>
  );
}