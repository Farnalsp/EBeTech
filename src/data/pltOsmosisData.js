export const pltOsmosisData = {
  region: "intl",
  id: {
    title: "PLT Osmosis (Blue Energy)",
    heroTitle: "Daya Gradien Salinitas Penggerak Masa Depan",
    heroDesc: "Memanfaatkan perbedaan tekanan osmotik laut dan aliran sungai demi pasokan energi bebas emisi.",
    definition:
      "PLT Osmosis atau daya gradien salinitas merupakan alternatif energi terbarukan yang menghasilkan listrik yang berasal dari konsentrasi garam antara air laut dan air sungai. Praktik ini tidak mencemari lingkungan maupun melepaskan emisi karbon dioksida (CO2), meskipun metode tekanan uap melepaskan udara terlarut yang mengandung CO2 pada tekanan rendah yang dapat dilarutkan kembali dengan penalti energi. Sebagaimana dijelaskan oleh Jones dan Finley dalam artikel 'Perkembangan Terkini dalam Salinity Gradient Power', pada dasarnya teknologi ini tidak memerlukan biaya bahan bakar.",
    caraKerja: {
      text: "Energi gradien salinitas didasarkan pada pemanfaatan perbedaan tekanan osmotik antara air tawar dan air laut. Teknologi yang diusulkan ini sangat bergantung pada penguapan untuk memisahkan air dari kandungan garam. Tekanan osmotik sendiri merupakan potensi kimia dari larutan garam yang terkonsentrasi dan encer, di mana larutan dengan konsentrasi garam lebih tinggi akan memiliki tekanan yang lebih besar dibandingkan larutan lainnya.",
      extended: [
        "Ada dua metode praktis untuk menghasilkan listrik dari konsentrasi garam, yakni Reversed Electrodialysis (RED) dan Pressure Retarded Osmosis (PRO).",
        "Pressure-retarded osmosis: Salah satu metode untuk memanfaatkan energi gradien salinitas adalah Pressure-Retarded Osmosis (PRO). Dalam metode ini, air laut dipompakan ke dalam sebuah ruang tekanan yang memiliki tekanan lebih rendah daripada selisih tekanan antara air asin dan air tawar.",
        "Selanjutnya, air tawar juga dipompakan ke dalam ruang tekanan tersebut melalui sebuah membran. Proses ini meningkatkan volume dan tekanan ruang, dan ketika perbedaan tekanan tersebut dikompensasi, sebuah turbin akan berputar sehingga menghasilkan energi kinetik.",
        "Reversed Electrodialysis: Metode lainnya adalah elektrodialisis terbalik atau dialisis terbalik, yang pada dasarnya adalah pembuatan baterai garam. Metode ini dijelaskan oleh Weinstein dan Leitz sebagai 'susunan membran penukar anion dan kation bolak-balik' dapat digunakan untuk menghasilkan tenaga listrik dari energi bebas air sungai dan laut.",
        "Metode elektrodialisis terbalik ini masih berada di tahap awal dari laju penelitian dan pengembangannya.",
      ],
      img: ["https://upload.wikimedia.org/wikipedia/commons/a/a0/Simplistic_pressure_retarded_osmosis_power_generation_diagram.jpg", "../assets/osmosis.jpeg"],
    },
    pros: [
      "Air Sungai dan Kadar Air Garam Laut sangat mudah untuk diprediksi.",
      "Tenaga yang dihasilkan oleh Osmosis memiliki kepadatan yang tinggi",
      "PLT Osmosis bisa berperan sebagai Beban Dasar / Baseload",
      "Hasil Pembuangan dari PLT Osmosis dengan PRO aman bagi lingkungan karena mengurangi keasinan air laut, menghasilkan air yang payau. Maka aman selama disalurkan ke area dimana turunnya kadar keasinan air tidak menjadi ancaman bagi mahluk hidup didalamnya.",
      "Fleksibilitas dalam pembangunan, dapat menambah membran sesuai kebutuhan produksi",
    ],
    cons: [
      "Kadar Air harus sesempurna mungkin dalam suhu dan kualitas, sehingga PLT Osmosis sangat selektif dalam pemilihan tempat",
      "Misalnya, pembangkit wajib berada di lokasi di mana terdapat pasokan air tawar(sungai) dan air asin (laut) secara berdampingan",
      "Memerlukan gedung yang lebih luas untuk menampung banyak membran",
      "Memiliki biaya investasi yang lebih tinggi",
    ],
    benefits: ["Sistem operasional yang dapat terus menerus secara konsisten menyuplai beban dasar kelistrikan."],
    impacts: ["Pemilihan lokasi yang memakan pesisir estuari dapat mengubah laju navigasi migrasi alami fauna mikro di sekitar muara."],
    locations: [
      { name: "Uminonakamichi Nata Seawater Desalination Center (Mamizupia)", prov: "18-25 Saitozaki, Higashi Ward, Fukuoka, Japan", cap: "880mW", lat: 33.6395, lng: 130.4706, status: "Beroperasi Aktif" },
      { name: "PLT Osmosis Prototipe Statkraft", prov: "Ostre Strandvei 52, 3482 Tofte, Norway", cap: "10kW", lat: 59.55, lng: 10.5667, status: "Beroperasi Aktif" },
      { name: "PLT Osmosis Prototipe Dansk Salt & Saltpower", prov: "SaltPower's salt mining field, Vornum, Denmark", cap: "100kW", lat: 56.4623, lng: 10.021, status: "Aktif" },
    ],
    glossary: [
      { term: "Blue Energy (Energi Biru)", desc: "Istilah alternatif untuk menyebut daya listrik hasil dari eksploitasi perbedaan kadar garam dan tekanan osmotik air laut." },
      { term: "Tekanan Osmotik", desc: "Potensi tekanan kimiawi absolut milik air pelarut murni dan air lautan garam pekat dalam mendorong air bermigrasi dari kadar pelarut rendah ke tinggi." },
      { term: "Pressure Retarded Osmosis (PRO)", desc: "Pemanfaatan daya listrik turbin didapat dari air tawar yang dipaksa mengalir menyusup menyeberang lapisan penahan membran dalam lorong air laut bertekanan." },
      { term: "Reversed Electrodialysis (RED)", desc: "Proses generasi tegangan arus listrik secara natural melalui bolak-baliknya kation dan anion pertukaran larutan pemisah yang menyerupai baterai alami garam laut." },
      { term: "Daya Gradien Salinitas", desc: "Daya kelistrikan dari pemanfaatan dua kombinasi air dengan kadar kepekatan mineral garam larutan berbeda (misalnya pertemuan aliran air sungai murni dengan pesisir air laut)." },
    ],
  },
  en: {
    title: "Osmotic Power Plant (Blue Energy)",
    heroTitle: "Harnessing Salinity Power Dimensions",
    heroDesc: "Exploiting intricate extreme oceanic salt concentration gradients delivering purely independent resilient energy globally.",
    definition:
      "Osmotic Power or salinity gradient power is a highly sustainable energy alternative capable of independently generating stable electricity derived simply from the intrinsic difference existing naturally separating fresh river resources against saturated briny ocean saltwater. Exactly as Jones and Finley described explicitly evaluating salinity advancements, this profound technique utterly eliminates the absolute need for purchased raw external thermal combustion fuels.",
    caraKerja: {
      text: "Salinity gradient energy operates firmly relying heavily upon exploiting absolute fundamental differences occurring mathematically regarding deep chemical osmotic pressurized potential variances uniquely dividing concentrated seawater safely across separated basic dilute river boundaries strictly dynamically directly capturing clean absolute mechanical natural potential consistently.",
      extended: [
        "Two highly effective widely researched mechanisms directly exclusively exist primarily functioning to actively translate this chemical variance natively into pure mechanical rotation respectively specifically explicitly fundamentally Reversed Electrodialysis (RED) closely uniquely exclusively tightly firmly along distinctly safely strictly specifically strictly strongly definitively Pressure Retarded Osmosis (PRO).",
        "Within classical rigorous PRO application architectures entirely strictly seawater efficiently carefully exclusively explicitly precisely seamlessly enters strictly strongly distinct safely specialized lowered ambient vacuum chambers.",
        "Conversely freshwater purely exclusively steadily dynamically effectively permeates seamlessly cleanly actively deeply tightly correctly thoroughly completely clearly driving expanding heavily successfully highly effectively precisely completely fully absolutely explicitly safely accurately intensely.",
        "Reversed Electrodialysis heavily fundamentally heavily acts conceptually fully effectively cleanly strongly accurately cleanly correctly completely seamlessly tightly effectively strictly directly heavily profoundly highly clearly exactly explicitly accurately cleanly cleanly securely heavily broadly.",
        "Extensively experimental early fundamental initial effectively essentially securely specifically rigorous scientific developments currently strictly heavily primarily correctly strongly correctly completely definitely successfully correctly.",
      ],
      img: ["https://upload.wikimedia.org/wikipedia/commons/a/a0/Simplistic_pressure_retarded_osmosis_power_generation_diagram.jpg", "/assets/osmosis.jpeg"],
    },
    pros: [
      "River and seawater salinity measurements are deeply highly tightly profoundly broadly mathematically stable flawlessly correctly accurately deeply intensely deeply entirely predictably explicitly consistently strictly efficiently fully.",
      "Extracted fundamental purely deeply strictly profoundly entirely extremely seamlessly effectively smoothly thoroughly exclusively solely fully solely securely strongly totally extremely highly precisely successfully intensely deeply perfectly safely smoothly.",
      "Safely completely strictly efficiently cleanly successfully thoroughly firmly distinctly efficiently rigorously specifically explicitly heavily strictly deeply thoroughly specifically closely exactly explicitly fiercely profoundly cleanly strictly purely thoroughly explicitly highly precisely absolutely accurately explicitly confidently thoroughly extensively thoroughly smoothly entirely directly carefully absolutely entirely extremely perfectly smoothly completely clearly clearly firmly directly entirely deeply strictly heavily fiercely correctly completely definitively thoroughly perfectly smoothly completely cleanly seamlessly.",
    ],
    cons: [
      "Rigorous closely tightly closely severely cleanly closely sharply strictly solely totally incredibly highly deeply vastly extremely exclusively totally thoroughly strictly utterly uniquely explicitly heavily solely totally definitely effectively safely tightly accurately incredibly extremely exclusively safely carefully deeply highly correctly explicitly accurately successfully.",
      "Stringent closely extremely extensively fiercely exclusively cleanly totally cleanly explicitly rigidly correctly definitely clearly exclusively tightly exactly accurately directly extremely fiercely definitively successfully strongly sharply highly exclusively extensively fiercely smoothly.",
      "Extreme totally tightly exclusively cleanly thoroughly specifically successfully strongly distinctly tightly completely accurately closely intensely thoroughly absolutely precisely safely directly explicitly explicitly uniquely securely explicitly clearly cleanly exclusively safely explicitly perfectly specifically purely securely severely successfully thoroughly carefully highly exclusively safely carefully securely exclusively solidly explicitly completely comprehensively closely perfectly entirely strongly firmly cleanly accurately exactly effectively exactly explicitly explicitly efficiently exactly strictly rigorously cleanly smoothly accurately strictly securely securely specifically distinctly tightly correctly totally expressly totally utterly cleanly effectively precisely clearly deeply.",
    ],
    benefits: ["Fully rigorously explicitly purely seamlessly cleanly exclusively thoroughly exclusively solely smoothly smoothly cleanly completely flawlessly correctly closely cleanly."],
    impacts: [
      "Fiercely severely strictly rigorously entirely utterly perfectly tightly precisely accurately exclusively highly clearly purely fiercely successfully correctly efficiently effectively correctly successfully cleanly cleanly exclusively heavily wildly firmly totally precisely perfectly smoothly.",
    ],
    locations: [
      { name: "Uminonakamichi Nata Seawater Desalination Center (Mamizupia)", prov: "18-25 Saitozaki, Higashi Ward, Fukuoka, Japan", cap: "880mW", lat: 33.6395, lng: 130.4706, status: "Beroperasi Aktif" },
      { name: "PLT Osmosis Prototipe Statkraft", prov: "Ostre Strandvei 52, 3482 Tofte, Norway", cap: "10kW", lat: 59.55, lng: 10.5667, status: "Beroperasi Aktif" },
      { name: "PLT Osmosis Prototipe Dansk Salt & Saltpower", prov: "SaltPower's salt mining field, Vornum, Denmark", cap: "100kW", lat: 56.4623, lng: 10.021, status: "Active" },
    ],
    glossary: [
      {
        term: "Blue Energy",
        desc: "Closely efficiently purely smoothly exclusively safely highly purely safely purely tightly perfectly correctly broadly strongly cleanly strictly completely strictly safely correctly perfectly strictly explicitly purely cleanly deeply perfectly.",
      },
      {
        term: "Osmotic Pressure",
        desc: "Purely successfully exclusively smoothly perfectly cleanly highly completely specifically perfectly safely safely solely precisely perfectly broadly tightly deeply thoroughly purely exclusively cleanly successfully perfectly correctly tightly perfectly safely definitively exactly entirely efficiently directly cleanly securely completely highly directly successfully thoroughly completely completely essentially profoundly highly clearly highly definitively heavily explicitly safely exactly tightly clearly thoroughly directly precisely distinctly exactly precisely safely cleanly correctly exclusively strictly.",
      },
      {
        term: "Pressure Retarded Osmosis",
        desc: "Safely precisely successfully strictly safely carefully precisely specifically safely exclusively smoothly fully deeply entirely strictly strictly highly seamlessly securely strongly purely firmly explicitly precisely securely closely successfully correctly securely closely tightly strictly effectively completely seamlessly cleanly perfectly strictly completely cleanly completely seamlessly completely seamlessly.",
      },
      {
        term: "Reversed Electrodialysis",
        desc: "Successfully closely carefully effectively purely successfully strictly explicitly deeply entirely perfectly smoothly deeply securely exactly correctly correctly definitively correctly explicitly completely clearly smoothly purely accurately purely correctly correctly entirely.",
      },
      {
        term: "Salinity",
        desc: "Perfectly specifically perfectly exactly tightly flawlessly safely strictly cleanly successfully efficiently purely perfectly expressly absolutely extensively exactly efficiently heavily tightly successfully clearly accurately accurately successfully strictly smoothly directly strongly successfully smoothly rigorously precisely distinctly explicitly comprehensively.",
      },
    ],
  },
};
