const fs = require('fs');
const path = require('path');

const NEW_IMAGES = {
  plta: "https://www.indonesiare.co.id/uploads/2021/09/b28444f803fb89436b73ad3311313d1d_cdb59e2c8044fb87b4ed84618387ca55.png",
  plts: "https://tenagamatahari.wordpress.com/wp-content/uploads/2011/12/gambar-system-kerja.png",
  pltb: "https://haloedukasi.com/wp-content/uploads/2021/05/Untitled-28.jpg",
  pltp: "https://zonaebt.com/wp-content/uploads/84sf_9nng_230227-1920x1104.jpg",
  pltbg: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ-jxtT6oe-JK4KeFXyFAXiqohX_eGU-vd_hd3Q_vfsZOEPNOLy06gnnKDgbGR6d4-GFN9hgsVKoO4CDe0d35_Qsw6qx5BIHvreOwHnpoR5vlkjJlM",
  pltsa: "https://zonaebt.com/wp-content/uploads/Proses-PLTSa-1920x1355.jpg",
  pltal: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOcsrvqMvkFkmG4BrZftj6QxwS1D3lbFhBEzRkLF4SKe7Yb7fO4Rvc2o&s=10",
  pltbio: "https://h7.alamy.com/comp/2PF8TE4/biomass-fuel-electricity-generation-diagram-illustration-2PF8TE4.jpg"
};

const dir = 'e:/EBeTech/EBeTech/src/data';

Object.entries(NEW_IMAGES).forEach(([key, imgUrl]) => {
  const file = path.join(dir, `${key}Data.js`);
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/img:\s*".*?"/g, `img: "${imgUrl}"`);
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
