export interface Place {
    id: string;
    name_tr: string;
    name_en: string;
    description_tr: string;
    description_en: string;
    image_url: string;
    lat: number;
    lng: number;
}

export const places: Place[] = [
    {
        id: "camlik-milli-parki",
        name_tr: "Çamlık Milli Parkı",
        name_en: "Çamlık National Park",
        description_tr: "Türkiye'nin ilk milli parkı olan Yozgat Çamlığı Milli Parkı, çam ormanlarıyla kaplı dinlendirici bir doğa harikasıdır. Piknik alanları, yürüyüş parkurları ve eşsiz doğa manzaralarıyla Yozgat'ın oksijen deposudur.",
        description_en: "Yozgat Çamlık National Park, Turkey's first national park, is a relaxing natural wonder covered with pine forests. It is the oxygen tank of Yozgat with its picnic areas, walking trails and unique nature views.",
        image_url: "https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20180425145455640_Yozgat-Camlik-Milli-Parki.JPG?format=jpg&quality=50",
        lat: 39.8051,
        lng: 34.8197
    },
    {
        id: "capanoglu-camii",
        name_tr: "Çapanoğlu Camii",
        name_en: "Çapanoğlu Mosque",
        description_tr: "Yozgat'ın simge yapılarından biri olan Büyük Cami veya Çapanoğlu Camii, Osmanlı dönemi mimarisinin Anadolu'daki en güzel örneklerinden biridir.",
        description_en: "The Grand Mosque or Çapanoğlu Mosque, one of the iconic structures of Yozgat, is one of the most beautiful examples of Ottoman period architecture in Anatolia.",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/%C3%87apano%C4%9Flu_Mosque-_2014-02-11_14-18.JPG",
        lat: 39.8192,
        lng: 34.8055
    },
    {
        id: "saat-kulesi",
        name_tr: "Saat Kulesi",
        name_en: "Clock Tower",
        description_tr: "Yozgat şehir merkezinde bulunan tarihi saat kulesi, kesme taştan inşa edilmiş olup şehrin buluşma noktalarından biridir.",
        description_en: "The historical clock tower located in the city center of Yozgat is built of cut stone and is one of the meeting points of the city.",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Yozgat_Clock_Tower_3997.jpg/960px-Yozgat_Clock_Tower_3997.jpg",
        lat: 39.8183,
        lng: 34.8052
    },
    {
        id: "yozgat-lisesi",
        name_tr: "Yozgat Lisesi",
        name_en: "Yozgat High School",
        description_tr: "Tarihi ve köklü geçmişiyle Yozgat'ın eğitim alanındaki çınarıdır. Mimari yapısı görülmeye değerdir.",
        description_en: "With its historical and deep-rooted past, it is the sycamore of Yozgat in the field of education. Its architectural structure is worth seeing.",
        image_url: "https://yozgatlisesi.meb.k12.tr/meb_iys_dosyalar/66/01/174415/dosyalar/2021_04/09144400_yozgat_lisesi.jpg",
        lat: 39.8210,
        lng: 34.8090
    },
    {
        id: "hayri-inal-konagi",
        name_tr: "Hayri İnal Konağı",
        name_en: "Hayri İnal Mansion",
        description_tr: "Geleneksel Yozgat sivil mimarisinin en güzel örneklerinden biri olan bu konakta eski Yozgat yaşantısının izlerini bulabilirsiniz.",
        description_en: "You can find the traces of old Yozgat life in this mansion, which is one of the most beautiful examples of traditional Yozgat civil architecture.",
        image_url: "https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20180425145719875_Hayri-Inal-Kanagi.JPG?format=jpg&quality=50",
        lat: 39.8175,
        lng: 34.8010
    },
    {
        id: "yozgat-muzesi",
        name_tr: "Yozgat Müzesi",
        name_en: "Yozgat Museum",
        description_tr: "Bölgeden çıkarılan arkeolojik eserlerin ve yöresel etnografik ögelerin sergilendiği önemli bir kültür merkezidir.",
        description_en: "It is an important cultural center where archaeological artifacts unearthed from the region and local ethnographic items are exhibited.",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/5/52/YOZGAT_N%C4%B0ZAMO%C4%9ELU_KONA%C4%9EI_ETNO%C4%9ERAFYA_M%C3%9CZES%C4%B0.jpg",
        lat: 39.8180,
        lng: 34.8030
    },
    {
        id: "bas-cavus-camii",
        name_tr: "Baş Çavuş Camii",
        name_en: "Baş Çavuş Mosque",
        description_tr: "Yozgat'ın tarihi dokusunu yansıtan, manevi atmosferi yüksek ve mimari estetiğiyle dikkat çeken tarihi bir camidir.",
        description_en: "It is a historical mosque that reflects the historical texture of Yozgat, attracts attention with its architectural aesthetics and has a high spiritual atmosphere.",
        image_url: "https://www.kulturportali.gov.tr/repoKulturPortali/large/15052013144510061_Bascavus%20Camii%20Yozgat3.JPG?format=jpg&quality=50",
        lat: 39.8200,
        lng: 34.8000
    },
    {
        id: "sahin-tepesi",
        name_tr: "Şahin Tepesi",
        name_en: "Şahin Tepesi (Falcon Hill)",
        description_tr: "Yozgat'ı kuşbakışı izleyebileceğiniz, özellikle gün batımında eşsiz manzaralar sunan popüler bir seyir terasıdır.",
        description_en: "It is a popular viewing terrace where you can watch Yozgat from a bird's eye view, offering unique views especially at sunset.",
        image_url: "https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20180425150824984_Sahin-Tepesi-Tesisler.JPG?format=jpg&quality=50",
        lat: 39.8250,
        lng: 34.8100
    },
    {
        id: "ceska-kalesi",
        name_tr: "Çeşka Kalesi",
        name_en: "Çeşka Castle",
        description_tr: "Gizemli yeraltı şehri yolları ve tarihi kalıntılarıyla bölgenin eski çağlardaki yaşantısına ışık tutan önemli bir kaledir.",
        description_en: "It is an important castle that sheds light on the old age life of the region with its mysterious underground city roads and historical ruins.",
        image_url: "https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20180425151528656_Ceska-Kalesi.JPG?format=jpg&quality=50",
        lat: 39.8400,
        lng: 34.7800
    },
    {
        id: "husnu-baba-konagi",
        name_tr: "Hüsnü Baba Konağı",
        name_en: "Hüsnü Baba Mansion",
        description_tr: "Yozgat'ın yerel mimarisini görebileceğiniz, ahşap işlemeleri ve tarihi dokusuyla büyüleyen bir diğer önemli konaktır.",
        description_en: "It is another important mansion that fascinates with its wooden decorations and historical texture, where you can see the local architecture of Yozgat.",
        image_url: "https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20180425143324109_Husnu-Baba-Konagi.JPG?format=jpg&quality=50",
        lat: 39.8160,
        lng: 34.8040
    }
];
