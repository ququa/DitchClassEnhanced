var apps = [
    {
      'id': 'customapp',
      'title': 'Add Custom App',
      'image': 'assets/images/add.png',
      "description": "Adds custom apps instantly, without sending a request.",
      'img': 'https://shotkit.com/wp-content/uploads/2023/03/add_app_homescreen_ilgmyzin.jpg'
    },
    {
      "id": "google",
      "title": "Google",
      "url": "https://www.google.com/?safe=active&ssui=on",
      'image': 'https://img.freepik.com/free-icon/search_318-265146.jpg',
      "description": "Search the world's information, including webpages, images, videos and more.",
      'img': 'https://www.keyweo.com/wp-content/uploads/2022/04/google-logo-history.jpg'
      
    },

    {
      "id": "youtube",
      "title": "YouTube",
      "url": "https://invidious.nerdvpn.de/",
      "description": `See what the world is watching. If the video doesn't load, use the "Watch on Youtube."`,
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/YouTube_social_red_square_%282017%29.svg/2048px-YouTube_social_red_square_%282017%29.svg.png',
      'img': 'https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500'
    },
    {
      "id": "animefreak",
      "title": "AnimeFreak",
      "url": "https://animefreak.to/",
      "description": "Animefreak.to is the best free anime website.",
      'image': 'https://static.anmedm.com/img/animefreak-favicon.png',
      'img': 'https://online.pubhtml5.com/uxxm/bannerlogo.jpg'
    },

    {
      "id": "soundcloud",
      "title": "SoundCloud",
      "url": "https://soundcloud.com/",
      "description": "Discover and play over 320 million music tracks.",
      'image': 'https://play-lh.googleusercontent.com/DG3HkNtzWv1XvD6x38SI22gbuT9rKEEri3eeNRxrUA7FMiqFuIxEaFCOC5YYZj0elRz9=w240-h480-rw',
      'img': 'https://media.sonos.com/images/znqtjj88/production/41f8722699dbf2a3a72ec06c822c67728fda0748-662x377.png'
    },
    {
      "id": "yarrlist",
      "title": "YarrList",
      "url": "https://www.yarrlist.com/",
      "description": "YarrList Ahoy, Mateys! Movies/TV Shows.",
      'image': 'https://www.yarrlist.com/wp-content/uploads/2024/05/play-video.png',
      'img': 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2012/12/movie-pirate.jpg'
    },
    {
      "id": "twitch",
      "title": "Twitch",
      "url": "https://twitch.tv/",
      "description": "Twitch is an interactive livestreaming service for content spanning gaming, entertainment, sports, music, and more.",
      'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKhAtIU3_Dt3gffA3mJ4-VT9W63tt7UrsDXg&s',
      'img': 'https://cdn.m7g.twitch.tv/ba46b4e5e395b11efd34/assets/uploads/generic-email-header-1.jpg?w=1200&h=630&fm=jpg&auto=format'
    },
    {
      "id": "discord",
      "title": "Discord",
      "url": "https://discord.com/app",
      "description": "Discord is the easiest way to talk over voice, video, and text. Talk, chat, hang out, and stay close with your friends and communities.",
      'image': 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg',
      'img': 'https://i.ytimg.com/vi/7V5jdOjWVU4/hqdefault.jpg'
    },
    {
      "id": "github",
      "title": "GitHub",
      "url": "https://github.com/",
      "description": "GitHub is where people build software. More than 100 million people use GitHub to discover, fork, and contribute to over 420 million projects.",
      'image': 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      'img': 'https://github.blog/wp-content/uploads/2024/06/AI-DarkMode-4.png?resize=800%2C425'
    },
    {
      "id": "netflix",
      "title": "Netflix",
      "url": "https://www.netflix.com",
      "description": "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg',
      'img': 'https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_lim.size_1050x591.v1582751026.png'
    },
    {
      "id": "guilded",
      "title": "Guilded",
      "url": "https://www.guilded.gg/",
      "description":  "Guilded upgrades your group chat and equips your server with integrated event calendars, forums, and more. 100% free.",
      'image': 'https://yt3.googleusercontent.com/cPlwwgZkQQgHRLAg7jvJG4yKGLDId6NH7H_S87TCoEV_dbsF9Me_4YSBL5DyMsndx6hzoZxHUw=s176-c-k-c0x00ffffff-no-rj',
      'img': 'https://play-lh.googleusercontent.com/hQSWHVToHRlKYxs_ZGS0xusCgGUiv68MYapFX2OtdPDdEPMWTAedretzMzbhUD0QsPPN=w3840-h2160-rw'
    },
    {
      "id": "webarchive",
      "title": "Wayback Machine",
      "url": "https://web.archive.org/",
      "description": "Since 1996, this digital archive of the World Wide Web allows users to go back in time to see how websites looked in the past.",
      'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxb0CB1duktUNyiOddR8Ym6t6LRiunO1L9Mg&s',
      'img': 'https://www.computing.co.uk/news/2024/security/media_1eac7c9412210ff4f1109de63ea6ea09a65e4cb9f.png?width=1200&format=pjpg&optimize=medium'
    },
    {
      "id": "telegram",
      "title": "Telegram",
      "url": "https://web.telegram.org/a/",
      "description": "Communicate privately. Telegram lets you access your chats from multiple devices.",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png',
      'img': 'https://images.prismic.io/contrary-research/Zs-00UaF0TcGJfmj_Telegramcover-1-.png?auto=format,compress'
    },
    {
      "id": "geforce",
      "title": "GeForce NOW",
      "url": "https://play.geforcenow.com",
      "description": "GeForce NOW instantly transforms your laptop, desktop, Mac, TV, Android device, iPhone, or iPad into the powerful PC gaming rig you've always dreamed of.",
      'image': 'https://raw.githubusercontent.com/proudparrot2/cdn/main/8z9zeDIT_400x400-removebg-preview.png',
      'img': 'https://www.pcworld.com/wp-content/uploads/2024/11/gewforce-now-header.jpg?quality=50&strip=all'
    },
    {
      'id': 'vscode',
      'title': 'Visual Studio Code',
      'url': 'https://vscode.dev/',
      "description": "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
      'img': 'https://code.visualstudio.com/opengraphimg/opengraph-home.png'
    },
    {
      "id": "tiktok",
      "title": "TikTok",
      "url": "https://tiktok.com",
      "description": "A personalized video feed based on what you watch, like, and share. TikTok offers you real, interesting, and fun videos that will make your day.",
      'image': 'https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png',
      'img': 'https://cdn.prod.website-files.com/634d43dafb3ed559348a7d6f/654259c49aac99f85e9e3a5e_STK051_VRG_Illo_N_Barclay_7_tiktok.jpg'
    },
    {
      "id": "reddit",
      "title": "Reddit",
      "url": "https://old.reddit.com",
      "description": "The front page of the internet. Reddit is a network of communities where people can dive into their interests, hobbies and passions.",
      'image': 'https://www.redditinc.com/assets/images/site/reddit-logo.png',
      'img': 'https://pentagram-production.imgix.net/506cc7b9-5998-4798-9420-3be03c1202e7/Reddit_Thumbnail.jpg?crop=edges&fit=crop&h=630&rect=4%2C0%2C2992%2C1870&w=1200',
    },
    {
      "id": "twitter",
      "title": "Twitter",
      "url": "https://twitter.com",
      "description": "From breaking news and entertainment to sports and politics, get the full story with all the live commentary.",
      'image': 'https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png',
      'img': 'https://store-images.microsoft.com/image/apps.57874.9007199266244427.12d00104-ac5d-4406-ad7b-66f678d54e19.e9fa7d2a-16a1-437c-bbd5-cf0e4e2d2c70'
    },
    {
      'id': 'spotify',
      'title': 'Spotify',
      'url': 'https://open.spotify.com/browse',
      'description': 'Spotify is a digital music service that gives you access to millions of songs.',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png',
      'img': 'https://storage.googleapis.com/pr-newsroom-wp/1/2023/12/Generic-FTR-headers_V10-1920x733.jpg'
    },
    {
      'id': 'chess',
      'title': 'Chess.com',
      'url': 'https://chess.com',
      'description': 'Play chess online for free on Chess.com with over 150 million members from around the world. Have fun playing with friends or challenging the computer!',
      'image': 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png',
      'img': 'https://www.chess.com/bundles/web/images/social/share-logo.66c88b91.png'
    },
    {
      'id': 'coolmathgames',
      'title': 'Cool Math Games',
      'url': 'https://coolmathgames.com',
      'description': 'Free Online Games for Learning and Fun',
      'image': 'https://docs.google.com/drawings/d/e/2PACX-1vR6y2GvcGu9PdrX9zzE24dhm24hClcNsdAmZjIgSUC8sFOahf6t7Yg6l_W8Rd4GduWOH_X02GHVFdBb/pub?w=512&h=512',
      'img': 'https://hobanvisor.news/wp-content/uploads/2019/09/Screen_Shot_2019_06_05_at_11.22.24_AM.0.png.jpeg'
    },
    {
      'id': 'win11',
      'title': 'Windows 11 in React',
      'url': 'https://win11.blueedge.me/',
      "image": "https://preview.redd.it/sudz5o3s1vn91.png?width=1080&format=png&auto=webp&s=27107d9d26f3b82ee00f53becd873b7bef881744",
      "description": "A remake of the Windows 11 UI in React.js",
      'img': 'https://user-images.githubusercontent.com/89068816/154832942-b3e435dd-5fe4-4bc1-a9be-34262698625d.png'
    },
    {
      'id': 'win10',
      'title': 'Windows 10 in React',
      'url': 'https://win-10.vercel.app/',
      "image": "https://downlody.com/windows/files/image/Windows-10-icon.png",
      "description": "Windows 10 recreation in React.js",
      'img': 'https://user-images.githubusercontent.com/20419286/129488136-64f09700-ee4d-46e5-9d1d-f689f87ba114.png'
    },
    {
      'id': 'winxp',
      'title': 'Windows XP in React',
      'url': 'https://www.oonjaa.com/',
      "image": "https://archive.org/services/img/1d9464dbff7a1630882d0e2090cb714c",
      "description": "Windows XP recreation in React.js",
      'img': 'https://external-preview.redd.it/9_cYxUUvNSUhdvkGSIMtLrDwElPvDtpS9jDH7_QYjVk.jpg?auto=webp&s=d23aa2938fbc816c3e9cd5f79ed766f922aff793'
    },
  ]
  
  var customapps = JSON.parse(localStorage.getItem("customapps"))
  if (customapps) customapps.forEach(app => {
    apps.push(app)
  })
  
  console.log("Loaded " + apps.length + " apps")
  if (customapps) console.log("Loaded " + customapps.length + " custom apps")
