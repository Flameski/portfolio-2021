export const projects = [
  {
    id: 0,
    title: 'Този сайт',
    titleEn: 'This website',
    techs: ['SCSS', 'React'],
    description:
      'Този сайт е правен на React с create-react-app. Няма много сложни интеракции и английската версия вероятно би могла да бъде имплементирана по-добре, но като цяло се получи доста добре.',
    descriptionEn:
      'This website was created using React and create-react-app. There arent many complex interactions and the multi-lanhuage support could be implemented better, but as a whole it came out fine',
    desktopPic: require('../img/portfolio-desktop.jpg'),
    mobilePic: require('../img/portfolio-mobile.png'),
    url: '/',
    githubUrl: 'https://github.com/Flameski/portfolio-2021',
  },
  {
    id: 1,
    title: 'hranmash-bg.com',
    titleEn: 'hranmash-bg.com',
    techs: ['HTML', 'SCSS', 'JS', 'Bootstrap'],
    description:
      'Сайт на реална фирма, който се използва за промотиране на бизнеса и набиране на клиенти. Статичен, но ползва известно количество custom JS за галериите.',
    descriptionEn:
      'This site is for a real company and is being used to promote the business and attract new clients. Static, using Bootstrap, but has a bit of custom JS for the galleries.',
    desktopPic: require('../img/hranmash-desktop.jpg'),
    mobilePic: require('../img/hranmash-mobile.png'),
    url: 'http://hranmash-bg.com/',
    githubUrl: 'https://github.com/Flameski/hranmash',
  },
  {
    id: 2,
    title: "Beletho's General Goods",
    titleEn: "Belethor's General Goods",
    techs: ['CSS', 'React'],
    description:
      'Малък проект just for fun. Въпреки това продуктите и количката работят. Ако сте играли Skyrim ще се досетите за какво става въпрос.',
    descriptionEn:
      "A small project just for fun. Despite that products and shopping basket are working. If you've played Skyrim you know what's up.",
    desktopPic: require('../img/belethor-desktop.jpg'),
    mobilePic: require('../img/belethor-mobile.png'),
    url: 'https://belethor-react.netlify.app/',
    githubUrl: 'https://github.com/Flameski/belethor-react',
  },
  {
    id: 3,
    title: 'Скриптиран Welcome to the Dungeon',
    titleEn: 'Scripted Welcome to the Dungeon',
    techs: ['Lua'],
    description:
      'Спомняте ли си играта, която по-горе казах, че съм дигитализирал? Става въпрос за мод, направен с Lua, качен в Steam.',
    descriptionEn:
      'Remember when I said I digitized a board game? This is it - a mod, created with Lua, uploaded to Steam.',
    desktopPic: require('../img/tts.gif'),
    mobilePic: require('../img/none.png'),
    url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2159153550',
    githubUrl: '/',
  },
];
