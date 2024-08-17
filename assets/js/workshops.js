/*
 * Gestion de l'affichage des workshops (ateliers découvertes)
 */

/**********************************************************************************************************************/
/* Données source */
/**********************************************************************************************************************/

// Par défaut, tous les workshops ont le même horaire
const defaultSchedule = "16:00-18:00";

// Contient la liste des workshops ayant lieu
const workshops = {
    "Jeudi 29 Aout": [
        {
            "title": "Visite du Swiss Plasma Center",
            "association": "swissplasmacenter",
            "description": "La fusion, source d’énergie durable. \nLa fusion est le processus primordial qui génère l’énergie au cœur du soleil et des autres étoiles. La maîtrise de cette source d’énergie sur terre apportera une contribution significative à la crise énergétique sous la forme d’une production d’électricité massive et respectueuse de l’environnement.\nLe Swiss Plasma Center de l’EPFL participe au développement de cette source d’énergie prometteuse, en collaboration avec les principaux laboratoires du monde entier. Il possède la plus grande installation de l’EPFL, un ‘tokamak’ unique au monde.\nLa visite débutera par une présentation des principes de base de la fusion, de leur mise en œuvre, de la situation actuelle de la recherche et des étapes encore nécessaires pour parvenir à injecter de l’électricité dans le réseau. Elle se poursuivra par la visite proprement dite des installations du Centre, notamment de ce ‘tokamak’ ainsi que d’une petite installation de démonstration appelée Helios.\nLa visite s’adresse à tous les étudiants quelle que soit la section choisie.",
            "bullets": [
                {
                    "icon": "warning",
                    "title": "Inscriptions terminées"
                },
                {
                    "icon": "warning",
                    "title": "Limitation: 50 étudiants max. par créneaux (4 créneaux)"
                }
            ],
            "schedule": "Je 29.8 à 14h00 et 16h00, Ma 3.9 à 16h00, Me 4.9 à 16h00"
        },
        {
            "title": "Présentation des projets MAKE et visite du SPOT",
            "association": "SPOT - Projet Make",
            "description": "Viens découvrir le SPOT (Student Prototyping and Outreach Tank), où les projets des étudiants prennent vie. Tu visiteras les ateliers d’électronique, d’impression 3D et de mécanique. Tu pourras également discuter avec les membres de plusieurs projets MAKE, qui te raconteront leur expérience et ce qu’ils font au SPOT. \n",
            "schedule": "Jeudi 29 août de 14h à 18h \n" +
                "2 créneaux : 14h à 16h et 16h à 18h\n",
            "bullets": [
                {
                    "icon": "warning",
                    "title": "Limitation: 60 étudiants max. par créneaux (2 créneaux)"
                }
            ]
        },
        {
            "title": "Jeux d’adresse",
            "association": "pese",
            "description": "Petite envie de penser à autre chose et de défier vos potes? Le Pôle des Evènements Sportifs Etudiants (PESE) vous propose des jeux d'adresse et d'autres défis sportifs avec quelques lots à la clé...",
            "schedule": "Jeudi 29 août à partir de 13h30"
        },
        {
            "title": "Viens passer un moment fun avec Ebou",
            "association": "ebou",
            "description": "Ici, c'est le coin détente ! Viens passer jouer à des jeux retro, switch ou PCs dans notre salle ! Une occasion pour nous de vous faire découvrir des petits jeux fun, et te permettre de montrer à tes potes que tu es supérieur à eux sur Nidhogg. Ou de discuter de tes pronostics pour les prochains Worlds de LoL. On sera ravi de t'accueillir pour de la bonne ambiance, du freeplay et de la détente !\n",
            "schedule": "Du jeudi 29 août au jeudi 5 septembre à partir de 16h"
        }
    ],
    "Vendredi 30 Aout": [
        {
            "title": "Formation Mécanique par Xplore",
            "association": "Xplore",
            "description": "La mécanique est le squelette et les muscles de l’ingénierie, pourquoi la mécanique est indispensable et où est-ce que vous pouvez en faire à l’EPFL ? Introduction à Fusion360, à Prusa slicer et à l’impression 3D à travers un projet interactif. - Loïc Delineau d’EPFL Xplore",
            "schedule": "Vendredi 30 Août 16h00 à 18h00"
        },
        {
            "title": "Apprendre à la vitesse de l’éclair (même si t’as la flemme)",
            "association": "Thomas K",
            "description": "Les études, ça n’a pas besoin d’être une corvée. Découvre les méthodes scientifiques pour apprendre sur le long terme, en profondeur et avec plaisir, tout en gardant du temps pour toi et pour ta vie sociale. Je vais t’aider à créer ton propre système flexible et durable qui t’aidera pendant toutes tes études et même après. On verra notamment :\n" +
                "\n" +
                "- Comment gérer et optimiser son temps en 2 min par jour sans se mettre la pression\n" +
                "- La méthode pour prendre des notes pour qu’elles soient prêtes à réviser sans effort\n" +
                "- Les fondements scientifiques pour apprendre de façon efficiente et comment les mettre en pratique\n" +
                "- Les stratégies pour concilier travail sérieux et vie sociale\n" +
                "- Les ingrédients pour créer des habitudes qui te soutiennent, sans que ça ne soit une punition\n" +
                "\n" +
                "Et plein d’autres stratégies concrètes pour optimiser ta vie d’étudiant !\n" +
                "\n" +
                "Je vais te partager mes années d’expérience à expérimenter avec plein de méthodes et à lire la recherche scientifique sur le sujet, pour que tu puisses partir avec les meilleurs outils dès le début et ne pas faire les mêmes erreurs que moi.\n" +
                "\n" +
                "Tu peux avoir un avant goût sur [ma chaîne YouTube](https://www.youtube.com/@th0mask) et en apprendre plus sur moi et mes méthodes sur la [page de présentation de ma formation](https://go.thomask.fr/turbolearn/) (qui couvre les mêmes sujets que cet atelier gratuit).\n",
            "schedule": "Jeudi 5 et Vendredi 30"
        },
        {
            "title": "Initiation aux olympiades de mathématiques",
            "association": "polympiads",
            "description": "Tu es passionné(e) par les mathématiques ? Tu aimes relever des challenges et résoudre des problèmes complexes ?  Alors ce workshop est fait pour toi ! \n" +
                "Viens découvrir Polympiads autour de défis captivants inspirés d'olympiades internationales. Tu pourras tester tes compétences, échanger avec d'anciens participants de l'IMC (International Mathematics Competition) et profiter d'un environnement stimulant et convivial, parfait pour rencontrer d'autres fervents amateurs de mathématiques.\n",
            "schedule": "Vendredi 30 août à partir de 16h"
        },
        {
            "title": "Introduction à Git",
            "association": "gnu",
            "description": "Viens découvrir Git ! Un outil pratique pour travailler sur des projets de prog à\n" +
                "plusieurs (ou seul) sans que cela ne devienne la pagaille. Au programme une\n" +
                "présentation suivie d'un workshop pour prendre tes marques avec ce super outil. Il y\n" +
                "aura également une petite introduction à quelques commandes pratiques du terminal\n" +
                "d'ordinateur qui rendent l'utilisation de Git plus rapide.",
            "schedule": "Vendredi 30 août à partir de 16h"
        },
        {
            "title": "Viens passer un moment fun avec Ebou",
            "association": "ebou",
            "description": "Ici, c'est le coin détente ! Viens passer jouer à des jeux retro, switch ou PCs dans notre salle ! Une occasion pour nous de vous faire découvrir des petits jeux fun, et te permettre de montrer à tes potes que tu es supérieur à eux sur Nidhogg. Ou de discuter de tes pronostics pour les prochains Worlds de LoL. On sera ravi de t'accueillir pour de la bonne ambiance, du freeplay et de la détente !\n",
            "schedule": "Du jeudi 29 août au jeudi 5 septembre à partir de 16h"
        }
    ],
    "Samedi 31 Aout": [
        {
            "title": "Formation Electronique par Xplore",
            "association": "Xplore",
            "description": "L’électronique est le système nerveux de l’ingénierie, pourquoi l’électronique est indispensable et où est-ce que vous pouvez en faire à l’EPFL ? Introduction à Arduino, KiCAD, Spice et à la soudure électronique à travers un projet interactif. - Loïc Delineau d’EPFL Xplore",
            "schedule": "Samedi 31 Août"
        },
        {
            "title": "Viens passer un moment fun avec Ebou",
            "association": "ebou",
            "description": "Ici, c'est le coin détente ! Viens passer jouer à des jeux retro, switch ou PCs dans notre salle ! Une occasion pour nous de vous faire découvrir des petits jeux fun, et te permettre de montrer à tes potes que tu es supérieur à eux sur Nidhogg. Ou de discuter de tes pronostics pour les prochains Worlds de LoL. On sera ravi de t'accueillir pour de la bonne ambiance, du freeplay et de la détente !\n",
            "schedule": "Du jeudi 29 août au jeudi 5 septembre à partir de 16h"
        }
    ],
    "Lundi 2 Septembre": [
        {
            "title": "Les Limites de l’Etre Humain",
            "association": "Xplore",
            "description": "Est-ce que vous pouvez travailler 100h par semaine pendant 1 an ? Comment y arriver et comment finir à l’Hospital en essayant. Example concret illustré par un étudiant qui a redoublé chaque année de son Bachelor…",
            "schedule": "Lundi 2 Septembre"
        },
        {
            "title": "Orientation, présentation des sections",
            "association": "s4s",
            "description": "Tu veux en savoir plus sur ta section, les cours qui t'attendent? Ou bien tu hésites entre plusieurs sections? Viens discuter avec des étudiants des différentes sections de bachelor et de master, qui seront présents pour répondre à tes questions.",
            "schedule": "Lundi 2 septembre et Jeudi 5 septembre"
        },
        {
            "title": "Viens passer un moment fun avec Ebou",
            "association": "ebou",
            "description": "Ici, c'est le coin détente ! Viens passer jouer à des jeux retro, switch ou PCs dans notre salle ! Une occasion pour nous de vous faire découvrir des petits jeux fun, et te permettre de montrer à tes potes que tu es supérieur à eux sur Nidhogg. Ou de discuter de tes pronostics pour les prochains Worlds de LoL. On sera ravi de t'accueillir pour de la bonne ambiance, du freeplay et de la détente !\n",
            "schedule": "Du jeudi 29 août au jeudi 5 septembre à partir de 16h"
        }
    ],
    "Mardi 3 Septembre": [
        {
            "title": "Visite du Swiss Plasma Center",
            "association": "swissplasmacenter",
            "description": "La fusion, source d’énergie durable. \nLa fusion est le processus primordial qui génère l’énergie au cœur du soleil et des autres étoiles. La maîtrise de cette source d’énergie sur terre apportera une contribution significative à la crise énergétique sous la forme d’une production d’électricité massive et respectueuse de l’environnement.\nLe Swiss Plasma Center de l’EPFL participe au développement de cette source d’énergie prometteuse, en collaboration avec les principaux laboratoires du monde entier. Il possède la plus grande installation de l’EPFL, un ‘tokamak’ unique au monde.\nLa visite débutera par une présentation des principes de base de la fusion, de leur mise en œuvre, de la situation actuelle de la recherche et des étapes encore nécessaires pour parvenir à injecter de l’électricité dans le réseau. Elle se poursuivra par la visite proprement dite des installations du Centre, notamment de ce ‘tokamak’ ainsi que d’une petite installation de démonstration appelée Helios.\nLa visite s’adresse à tous les étudiants quelle que soit la section choisie.",
            "bullets": [
                {
                    "icon": "warning",
                    "title": "Inscriptions terminées"
                },
                {
                    "icon": "warning",
                    "title": "Limitation: 50 étudiants max. par créneaux (4 créneaux)"
                }
            ],
            "schedule": "Je 29.8 à 14h00 et 16h00, Ma 3.9 à 16h00, Me 4.9 à 16h00"
        },
        {
            "title": "Initiation à la programmation compétitive",
            "association": "polympiads",
            "description": "Le monde de la programmation t’intrigue et tu aimerais en découvrir plus ? Tu rêves de participer aux compétitions internationales de programmation mais tu ne sais pas par où commencer ? Alors ne manque surtout pas le prochain workshop de Polympiads ! Que tu sois débutant ou programmeur expérimenté, divers problèmes plus ou moins complexes sauront mettre à l’épreuve tes compétences. De plus, tu pourras échanger avec d’anciens participants de l’ICPC pour découvrir leurs expériences et leurs parcours.\n",
            "schedule": "Mardi 3 septembre à partir de 16h"
        },
        {
            "title": "Jeux de rôle et de société",
            "association": "jdrpoly",
            "description": "-Vous en faites pas, j'ai un plan.\n" +
                "-Vas-y, fais ton jet.\n" +
                "*Échec critique*\n" +
                "-... bon, est ce que quelqu'un à un plan?\n" +
                "\n" +
                "Si le jeu de rôle (et tout ses aléas) vous intéresse, alors JDR-Poly est la commission pour vous! Que vous soyez adepte, néophyte ou simplement curieux, vous trouverez dans nos one-shots de quoi plaire à tout le monde.\n" +
                "Au programme également, une de nos fameuses parties de Loups-garous à ambiance, et des jeux de plateaux.\n" +
                "\n" +
                "Venez nombreux, nos MJs raffolent de chaos et de bonne humeur!\n" +
                "\n" +
                "Pour l’organisation: Veuillez contacter eve@jdrpoly.ch pour faire des jeux de rôles!!\n" +
                "\n",
            "schedule": "Mardi 3"
        },
        {
            "title": "Apprendre à utiliser l’information scientifique",
            "association": "Apprendre à étudier Rolex",
            "description": "Workshop en 2 parties. 1) En équipe, partez à la découverte des différents espaces et collections de la Bibliothèque avec la chasse au trésor « À la conquête du Rolex Learning Center ». 2) Le LAB « Évaluer la fiabilité des sources » vous permettra d’identifier les différentes méthodes et techniques à mettre en place pour la recherche et l’utilisation de d’information scientifique, et l’évaluation de la fiabilité des sources dont vous aurez besoin pendant vos études.",
            "schedule": "Mardi 3 septembre, 15h30 – 18h (il faut être devant le rolex à 15h30)"
        },
        {
            "title": "Viens passer un moment fun avec Ebou",
            "association": "ebou",
            "description": "Ici, c'est le coin détente ! Viens passer jouer à des jeux retro, switch ou PCs dans notre salle ! Une occasion pour nous de vous faire découvrir des petits jeux fun, et te permettre de montrer à tes potes que tu es supérieur à eux sur Nidhogg. Ou de discuter de tes pronostics pour les prochains Worlds de LoL. On sera ravi de t'accueillir pour de la bonne ambiance, du freeplay et de la détente !\n",
            "schedule": "Du jeudi 29 août au jeudi 5 septembre à partir de 16h"
        }
    ],
    "Mercredi 4 Septembre": [
        {
            "title": "Visite du Swiss Plasma Center",
            "association": "swissplasmacenter",
            "description": "La fusion, source d’énergie durable. \nLa fusion est le processus primordial qui génère l’énergie au cœur du soleil et des autres étoiles. La maîtrise de cette source d’énergie sur terre apportera une contribution significative à la crise énergétique sous la forme d’une production d’électricité massive et respectueuse de l’environnement.\nLe Swiss Plasma Center de l’EPFL participe au développement de cette source d’énergie prometteuse, en collaboration avec les principaux laboratoires du monde entier. Il possède la plus grande installation de l’EPFL, un ‘tokamak’ unique au monde.\nLa visite débutera par une présentation des principes de base de la fusion, de leur mise en œuvre, de la situation actuelle de la recherche et des étapes encore nécessaires pour parvenir à injecter de l’électricité dans le réseau. Elle se poursuivra par la visite proprement dite des installations du Centre, notamment de ce ‘tokamak’ ainsi que d’une petite installation de démonstration appelée Helios.\nLa visite s’adresse à tous les étudiants quelle que soit la section choisie.",
            "bullets": [
                {
                    "icon": "warning",
                    "title": "Inscriptions terminées"
                },
                {
                    "icon": "warning",
                    "title": "Limitation: 50 étudiants max. par créneaux (4 créneaux)"
                }
            ],
            "schedule": "Je 29.8 à 14h00 et 16h00, Ma 3.9 à 16h00, Me 4.9 à 16h00"
        }, {
            "title": "Tania LAFORE",
            "association": "Tania LAFORE",
            "description": "Tu entres dans l'univers de l'EPFL, prêt pour un voyage à la fois passionnant et parfois stressant. Le changement, la charge de travail et les enjeux te demanderont une réelle adaptation. Viens découvrir les capacités de ton cerveau et les pièges à éviter pour réussir ce nouveau défi. Explore et amuse-toi avec des outils pratiques et des expériences captivantes. L'objectif est de te fournir des clés pour réussir ton parcours, en découvrant des techniques scientifiquement reconnues, simples et efficaces, pour mieux gérer ton parcours et passer un moment ludique à la découverte de tes capacités mentales.\n" +
                "Tania Lafore, autrice du livre \"Surmonter le stress et l'anxiété\", te plongera dans le monde de la gestion mentale.\n",
            "schedule": "Mercredi 4",
            "room": "CE 1 6"
        },
        {
            "title": "Projection animation japonaise",
            "association": "PJ",
            "description": "Viens faire un détour par le Japon en regardant les 3 premiers épisodes de la série : Gekkan Shoujo Nozaki-kun !\n" +
                "Chiyo Sakura est une lycéenne qui est tombée follement amoureuse de son camarade Umetarou Nozaki. Se parant de courage, notre héroïne décide de confesser ses sentiments à l’immuable Umetarou mais ce dernier lui donne un étrange autographe en retour.\n" +
                "\n" +
                "Il s’avère que Umetarou est en fait un mangaka célèbre travaillant sous le nom Sakiko Yumeno!\n" +
                "\n" +
                "S'ensuit une série de situations loufoques dans lesquelles Chiyo essaie tant bien que mal d’aider Umetarou dans son travail de mangaka tout en essayant de lui faire remarquer ses sentiments. \n",
            "schedule": "Mercredi 4"
        },
        {
            "title": "Atelier Speedrun",
            "association": "clic",
            "description": "T'es-tu déjà demandé combien de temps il faut pour finir un jeu vidéo ? Viens découvrir le speedrun, une pratique qui consiste à atteindre un objectif en un minimum de temps. Qui sera le premier à arriver en haut de la montagne ?",
            "schedule": "Mercredi 4 Septembre"
        },
        {
            "title": "Viens passer un moment fun avec Ebou",
            "association": "ebou",
            "description": "Ici, c'est le coin détente ! Viens passer jouer à des jeux retro, switch ou PCs dans notre salle ! Une occasion pour nous de vous faire découvrir des petits jeux fun, et te permettre de montrer à tes potes que tu es supérieur à eux sur Nidhogg. Ou de discuter de tes pronostics pour les prochains Worlds de LoL. On sera ravi de t'accueillir pour de la bonne ambiance, du freeplay et de la détente !\n",
            "schedule": "Du jeudi 29 août au jeudi 5 septembre à partir de 16h"
        }
    ],
    "Jeudi 5 Septembre": [
        {
            "title": "Apprendre à la vitesse de l’éclair (même si t’as la flemme)",
            "association": "Thomas K",
            "description": "Les études, ça n’a pas besoin d’être une corvée. Découvre les méthodes scientifiques pour apprendre sur le long terme, en profondeur et avec plaisir, tout en gardant du temps pour toi et pour ta vie sociale. Je vais t’aider à créer ton propre système flexible et durable qui t’aidera pendant toutes tes études et même après. On verra notamment :\n" +
                "\n" +
                "- Comment gérer et optimiser son temps en 2 min par jour sans se mettre la pression\n" +
                "- La méthode pour prendre des notes pour qu’elles soient prêtes à réviser sans effort\n" +
                "- Les fondements scientifiques pour apprendre de façon efficiente et comment les mettre en pratique\n" +
                "- Les stratégies pour concilier travail sérieux et vie sociale\n" +
                "- Les ingrédients pour créer des habitudes qui te soutiennent, sans que ça ne soit une punition\n" +
                "\n" +
                "Et plein d’autres stratégies concrètes pour optimiser ta vie d’étudiant !\n" +
                "\n" +
                "Je vais te partager mes années d’expérience à expérimenter avec plein de méthodes et à lire la recherche scientifique sur le sujet, pour que tu puisses partir avec les meilleurs outils dès le début et ne pas faire les mêmes erreurs que moi.\n" +
                "\n" +
                "Tu peux avoir un avant goût sur [ma chaîne YouTube](https://www.youtube.com/@th0mask) et en apprendre plus sur moi et mes méthodes sur la [page de présentation de ma formation](https://go.thomask.fr/turbolearn/) (qui couvre les mêmes sujets que cet atelier gratuit).\n",
            "schedule": "Jeudi 5 et Vendredi 30"
        },
        {
            "title": "Orientation, présentation des sections",
            "association": "s4s",
            "description": "Tu veux en savoir plus sur ta section, les cours qui t'attendent? Ou bien tu hésites entre plusieurs sections? Viens discuter avec des étudiants des différentes sections de bachelor et de master, qui seront présents pour répondre à tes questions.",
            "schedule": "Lundi 2 septembre et Jeudi 5 septembre"
        },
        {
            "title": "l’IA, la découverte concrète",
            "association": "clic",
            "description": "Apprends à créer une intelligence artificielle pour jouer aux dames, un jeu de plateau simple, en utilisant des algorithmes de prise de décision.\n" +
                "À la fin, votre IA pourra participer à une compétition contre celles des autres participants, pour déterminer laquelle est la plus efficace !\n",
            "schedule": "Jeudi 5"
        },
        {
            "title": "Biocapteurs à l’EPFL",
            "association": "BioSense",
            "description": "Venez rencontrer BioSense EPFL ! Chez BioSense, nous pensons et rêvons aux biosenseurs, et nous en réalisons même des prototypes ! Chaque année, une équipe de 10 à 15 étudiants participe à la compétition SensUs qui se tient aux Pays-Bas. C’est une opportunité incroyable pour acquérir une expérience pratique, réaliser des projets de semestres personnalisés, rencontrer des personnes du monde entier et obtenir une première expérience dans le domaine des sciences de la santé (certaines équipes ont même fini par créer leur propre startup !).\n" +
                "\n" +
                "Après la présentation de la compétition de cette année (qui s'est tenue la semaine dernière!), certains des membres actuels de l'équipe seront heureux de répondre à toutes vos questions ! Nous avons hâte de vous retrouver ! 💚",
            "schedule": "Jeudi 5"
        },
        {
            "title": "Viens passer un moment fun avec Ebou",
            "association": "ebou",
            "description": "Ici, c'est le coin détente ! Viens passer jouer à des jeux retro, switch ou PCs dans notre salle ! Une occasion pour nous de vous faire découvrir des petits jeux fun, et te permettre de montrer à tes potes que tu es supérieur à eux sur Nidhogg. Ou de discuter de tes pronostics pour les prochains Worlds de LoL. On sera ravi de t'accueillir pour de la bonne ambiance, du freeplay et de la détente !\n",
            "schedule": "Du jeudi 29 août au jeudi 5 septembre à partir de 16h"
        }
    ],
};

// La liste des associations proposant des workshops avec certaines informations
// redondantes qui peuvent alors être omises de la liste des workshops
const associations = {
    "Xplore": {
        "title": "Xplore",
        "url": "",
        "image": ""
    },
    "gamestar": {
        "title": "Game*",
        "url": "https://clic.epfl.ch/commissions/game-star",
        "image": "workshop-gamestar.jpg"
    },
    "ebou": {
        "title": "E-bou",
        "url": "https://e-bou.pese.ch",
        "image": "workshop-ebou.jpg"
    },
    "clic": {
        "title": "la CLIC",
        "url": "https://clic.epfl.ch/",
        "image": "workshop-clic.jpg"
    },
    "gnu": {
        "title": "GNU Generation",
        "url": "https://gnugeneration.epfl.ch/fr/",
        "image": "workshop-gnu.jpg"
    },
    "polyjapan": {
        "title": "PolyJapan",
        "url": "https://www.instagram.com/polyjapan/",
        "image": "workshop-polyjapan.jpg"
    },
    "dameblanche": {
        "title": "La Dame Blanche",
        "url": "https://instagram.com/chess.epfl?igshid=NjIwNzIyMDk2Mg==",
        "image": "workshop-dameblanche.jpg"
    },
    "polympiads": {
        "title": "Polympiads",
        "url": "https://www.instagram.com/polympiads.epfl/",
        "image": "workshop-polympiads.jpg"
    },
    "ludopoly": {
        "title": "LudoPoly",
        "url": "https://www.instagram.com/ludopoly_epfl/",
        "image": "workshop-ludopoly.svg"
    },
    "s4s": {
        "title": "S4S",
        "url": "https://students4students.ch",
        "image": "assets/seo/opengraph.png"
    },
    "swissplasmacenter": {
        "title": "Swiss Plasma Center",
        "url": "https://www.epfl.ch/research/domains/swiss-plasma-center/",
        "image": "workshop-tokamak.jpg"
    },
    "pese": {
        "title": "PESE",
        "url": "https://pese.ch/",
        "image": "workshop-pese.jpg"
    },
    "biblio": {
        "title": "Bibliothèque EPFL",
        "url": "https://www.epfl.ch/campus/library/fr/",
        "image": "workshop-biblio.jpg"
    },
    "zeg": {
        "title": "Zero Emission Group",
        "url": "https://www.instagram.com/zeroemissiongroup/",
        "image": "workshop-zeg.jpg"
    }
}

const roomUrls = {
    "CM 1 221": "https://plan.epfl.ch/?room==CM%201%20221",
    "CM 1 120": "https://plan.epfl.ch/?room==CM%201%20120",
    "CM 1 100": "https://plan.epfl.ch/?room==CM%201%20100",
    "CM 1 104": "https://plan.epfl.ch/?room==CM%201%20104",
    "CE 1 1": "https://plan.epfl.ch/?room==CE%201%201",
    "RLC C1 820": "https://plan.epfl.ch/?room==RLC%20C1%20820",
    "Patio 5": "https://plan.epfl.ch/?dim_floor=1&lang=en&dim_lang=en&tree_groups=centres_nevralgiques%2Cmobilite_acces_grp%2Censeignement%2Ccommerces_et_services&baselayer_ref=grp_backgrounds&tree_group_layers_centres_nevralgiques=&tree_group_layers_mobilite_acces_grp=&tree_group_layers_enseignement=&tree_group_layers_commerces_et_services=&map_x=2533200&map_y=1152277&map_zoom=13",
    "Bernoulli Center": "https://www.google.com/maps/place/EPFL+Bernoulli+center/@46.5198032,6.5716923,15z/data=!4m2!3m1!1s0x0:0x3a4de4ac4fbd08c1?sa=X&ved=2ahUKEwiBhIO8gqv6AhXTi8MKHQD1AJIQ_BJ6BAhTEAU",
    "&Agrave; venir": ""
}

const bulletIcons = {
    "warning": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>`,
    "info": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>`,
    "inscription": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                    </svg>`
}

/**********************************************************************************************************************/
/* Affichage des workshops */

/**********************************************************************************************************************/
function computeWorkshopHtml(workshop) {
    let association = associations[workshop["association"]] ?? [];
    let imageName = workshop["image"] ?? association["image"] ?? "";
    let imageSrc = imageName.includes("/") ? imageName : "assets/illustrations/" + imageName;
    let title = workshop["title"];
    let associationUrl = workshop["url"] ?? association["url"];
    let associationTitle = association["title"];
    let description = workshop["description"].replaceAll("\n", "<br />");
    let room = workshop["room"];
    let roomUrl = roomUrls[room];
    let schedule = workshop["schedule"] ?? defaultSchedule;

    let points = "";
    if (workshop["bullets"]) {
        for (const point of workshop["bullets"]) {
            points += `<div class="workshop-bullet">
                       ` + bulletIcons[point.icon] + `

                       ` + point.title + `
                   </div>
                    `;
        }
    }

    return `<article class="workshop">
         <img class="workshop-image" src="` + imageSrc + `" alt="" />
         <h3>` + title + `</h3>` + (associationTitle === undefined ? "" :
        `<p class="workshop-association">
             par
             <a href="` + associationUrl + `" class="lead-link">` + associationTitle + `</a>
         </p>`) + `<p class="workshop-description">
             ` + description + `
         </p>

         <div class="workshop-bullets">
             ` + points + `
<!--            <div class="workshop-bullet">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">-->
<!--                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />-->
<!--                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />-->
<!--                </svg>-->
<!---->
<!--                // <a` + (roomUrl === "" ? `` : ` href="` + roomUrl + `"`) + ` class="lead-link">` + room + `</a>-->
<!--            </div>-->
            <div class="workshop-bullet">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                   ` + schedule + `
            </div>
        </div>
    </article>`
}

function computeDayHtml(dayTitle) {
    let day = workshops[dayTitle];
    let workshopsHtml = "";
    for (const workshop of day) {
        workshopsHtml += computeWorkshopHtml(workshop);
    }
    return `<details class="workshops-day">
                <summary>
                    ` + dayTitle + `
                </summary>
                <div class="scroll-x-wrapper">
                    <div class="workshops">
                        ` + workshopsHtml + `

                        <div class="workshops-right-padding"></div>
                    </div>
                </div>
            </details>`;
}

function computeWorkshopsContainerInnerHtml() {
    let result = "";
    for (const key of Object.keys(workshops)) {
        result += computeDayHtml(key);
    }
    return result;
}

document.getElementById("workshops-container").innerHTML = computeWorkshopsContainerInnerHtml();
