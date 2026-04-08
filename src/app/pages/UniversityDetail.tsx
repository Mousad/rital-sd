import { useState } from "react";
// import { Link } from "react-router-dom"; // استخدم Link
import { useParams, Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const majors = [
    {
      title: "الطب ",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الطب.png.webp",
      link: "https://wa.me/+201117740555",
    },
    {
      title: "الهندسة",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الهندسة.png.webp",
       link: "https://wa.me/+201117740555",
    },
   
    {
      title: " السيبراني",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الامن-السيبراني.png.webp",
       link: "https://wa.me/+201117740555",
    },
   
    {
      title: "القانون",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/القانون.png.webp",
          link: "https://wa.me/+201117740555",
    },
    {
      title: "إدارة ",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/ادراة-الاعمال.png.webp",
       link: "https://wa.me/+201117740555",
    },
    {
      title: "Ai",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الذكاء-الاصطناعي.png.webp",
       link: "https://wa.me/+201117740555",
    },
  ];
// بيانات الجامعات
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
    id: 5,
    name: "جامعة النيل",
    location: "مصر - القاهرة",
    image: "https://i.pinimg.com/1200x/4c/59/07/4c5907e689d03e4b3f1ce3cd61a6466b.jpg",
    logo: "https://scu.eg/storage/2023/05/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A7%D9%84%D9%86%D9%8A%D9%84.png",
  },
  {
    id: 6,
    name: "الجامعة الأمريكية",
    location: "القاهرة",
    image: "https://studyinegy.com/wp-content/uploads/2023/07/bi20210310_181252edit-medres-1-420x273.webp",
    logo: "https://www.universitiesegypt.com/ImageHandler.ashx?Id=12734&SS=2f4b759a533e4ad5b1db622ff646146c",
  },

  {
    id: 7,
    name: "جامعة كوتش",
    location: "تركيا",
    image: "https://marifetedu.com/wp-content/uploads/2024/08/koc-uni-2.webp",
    logo: "https://i.pinimg.com/736x/fa/b3/7d/fab37d34099ee218c4407d0ae3481b4d.jpg",
  },
  {
    id: 8,
    name: "جامعة إسطنبول",
    location: "تركيا - إسطنبول",
    image: "https://i.pinimg.com/1200x/aa/9f/5f/aa9f5fde0992e2d2821b37716d870a00.jpg",
    logo: "https://i.pinimg.com/736x/82/d6/df/82d6df286d5c28706daa5ad612b328e7.jpg",
  },

  {
    id: 11,
    name: "جامعة رواندا",
    location: "روندا",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgN2UDWdeRL9HG9ZDSCYe7Ojo97i27sE7Mg&s",
    logo: "https://arua.org/wp-content/uploads/University-of-Rwanda-LOGO-B-_RV.png",
  },

  {
    id: 13,
    name: "جامعة كارنيجي",
    location: "روندا",
    image: "https://ar.uni24k.com/media/CACHE/images/unis/pic_school_15934_building_15e86ac5/2f3eecd73f3d47c4139320a02004d483.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/ar/thumb/d/de/Carnegie_Mellon_University_seal.png/250px-Carnegie_Mellon_University_seal.png",
  },

  {
    id: 14,
    name: "جامعة بكين",
    location: "الصين",
    image: "https://i.pinimg.com/1200x/4b/52/6d/4b526dc7ab9d069f31c46c494703ee86.jpg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrlTwhrRGi7cbSBnpv7VbVgx1e2AtK7kiHzA&s",
  },
  {
    id: 15,
    name: "جامعة تسينغهوا",
    location: "الصين - بكين",
    image: "https://i.pinimg.com/1200x/93/60/b4/9360b43aad028029d98ab2bd562013d8.jpg",
    logo: "https://images.for9a.com/thumb/fit-256-256-100-webp/organization/49344-c60e79The_Logo_of_Tsinghua_Hua_University,_in_1928.png",
  },

  {
    id: 19,
    name: "جامعة مالايا",
    location: "ماليزيا - كوالالمبور",
    image: "https://growtth.net/wp-content/uploads/2024/05/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D9%85%D9%84%D8%A7%D9%8A%D8%A7-UM.webp",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNUHH_0v-i7R-tAKUxmG3bhu_pthsWL-0GFoGZICxm5Rqd8M2WiPPxERXP1d-LF6muz6ZRNzyKPxPsxaI5VIHCmXQ8rWmJdfpmVsv9ZJeL3R0aDfJlU1SaJUnYQI7Ss8G81l5oSRI1iDFuSFH9CpOElNZNrCVbmmoBbMawd9llpyNfCT_387mJwM8M2w/w200-h200/um.gif",
  },

  {
    id: 23,
    name: "جامعة دلهي",
    location: "الهند - دلهي",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Delhiuni.jpg",
    logo: "https://ar.uni24k.com/media/logos/logo_schools_u0b4efa41_bd48c2a7.jpg",
  },

  {
    id: 28,
    name: "جامعة لومونوسوف موسكو",
    location: "روسيا - موسكو",
    image: "https://alkhawarizmi.eg/wp-content/uploads/2024/07/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D9%85%D9%88%D8%B3%D9%83%D9%88.jpg",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hPZ0GhRWbxb6sGI8W4NRbIETaXnc92BSTzYUOxXvcGytKy5f54_k2S1x6UuP6gYHqCY&usqp=CAU",
  },

  {
    id: 30,
    name: "جامعة الملك سعود",
    location: "السعودية - الرياض",
    image: "https://sa.arabisklondon.com/wp-content/uploads/2024/05/%D8%A7%D9%84%D9%85%D9%84%D9%83-jpg-1.webp",
    logo: "https://s3.me-south-1.amazonaws.com/mohammedali.site/logo/1721947630.webp",
  },
];

export default function UniversityDetail() {

  const { id } = useParams();
  const uni = universities.find((u) => u.id === Number(id));

  const [search, setSearch] = useState("");

  const filteredUniversities = universities.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const universitiesPerPage = 6;

  const indexOfLast = currentPage * universitiesPerPage;
  const indexOfFirst = indexOfLast - universitiesPerPage;

  const currentUniversities = filteredUniversities.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(filteredUniversities.length / universitiesPerPage);

  if (!uni) return <p className="text-center py-20 text-red-500">الجامعة غير موجودة</p>;

  return (
    <div className="min-h-screen bg-[#f2f9f5]" id="universities">

    {/* سهم الرجوع */}
      {/* <div className="sticky top-[60px] z-20 px-4 py-2">
        <Link
          to="/"
          className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md text-[#154734]"
        >
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div> */}

      {/* الهيدر */}
      <div className="relative h-96 w-full">
        <img
          src="https://unitededucation.com/_next/image?url=img%2F%D8%AC%D8%A7%D9%85%D8%B9%D8%A7%D8%AA%D9%86%D8%A7-07~1.webp&w=3840&q=75"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-5xl font-bold text-white">{uni.name}</h1>
        </div>
      </div>

      <section className="py-8 bg-[#f2f9f5]">

  <div className="container mx-auto px-4">

    {/* العنوان */}
    <h2 className="text-center text-[#0d2b5e] text-2xl md:text-4xl font-bold mb-8">
      أفضل التخصصات
    </h2>

    {/* الكروت */}
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

      {majors.map((major, index) => (
        <a
          key={index}
          href={major.link || "#"}
          className="bg-white border rounded-lg p-3 flex flex-col items-center text-center hover:shadow-md transition"
        >

          <img
            src={major.img}
            alt={major.title}
            className="w-14 h-14 object-contain mb-2"
          />

          <h3 className="font-bold text-sm mb-1 text-[#0d2b5e]">
            {major.title}
          </h3>

          <p className="text-green-600 text-xs font-semibold">
            سجل الآن
          </p>

        </a>
      ))}

    </div>

  </div>

</section>

      <section className="py-10 bg-[#f2f9f5]">
        <div className="container mx-auto px-4">

          {/* الجامعات */}
          <div className="grid  grid-cols-2  md:grid-cols-3 gap-6">

            {currentUniversities.map((u) => (
              <div
                key={u.id}
                className="bg-white  hover:shadow-xl transition overflow-hidden relative"
              >

                <div className="relative">
                  <img
                    src={u.image}
                    alt={u.name}
                    className="w-full h-44 object-cover "
                  />

                  <img
                    src={u.logo}
                    className="w-20 h-20 rounded-full border-4 border-white absolute -bottom-10 left-1/2 -translate-x-1/2"
                  />
                </div>

                <div className="pt-12 pb-4 text-center">
                  <h3 className="text-xl font-bold text-[#154734]">{u.name}</h3>
                  <p className="text-gray-600">{u.location}</p>
                </div>

              </div>
            ))}

          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-2">

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === i + 1
                    ? "bg-[#154734] text-white"
                    : "bg-white text-[#154734]"
                }`}
              >
                {i + 1}
              </button>
            ))}

          </div>

        </div>
      </section>
       {/* ======= زر واتساب عائم ======= */}
            <a
              href="https://wa.me/+201117740555"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-4 py-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition text-xl"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>


    </div>
  );
}