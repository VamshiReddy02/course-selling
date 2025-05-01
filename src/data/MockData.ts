import Img1 from "../assets/icon/1.png";
import Img2 from "../assets/icon/2.png";
import Img3 from "../assets/icon/3.png";

export const NavbarData = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Features",
        link: "#",
    },
    {
        id: 3,
        title: "Shop",
        link: "#"
    },
    {
        id: 4,
        title: "About Us",
        link: "#"
    },
    {
        id: 5,
        title: "Contact",
        link: "#"
    }
]

interface CardItem {
    img: string;
    title: string;
    description: string;
    link: string;
  }
  
export const CardData: CardItem[] = [
    {
      img: Img1,
      title: "About",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem, aspernatur tempore doloribus voluptatum ex magnam accus.",
      link: "#",
    },
    {
      img: Img2,
      title: "Services",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem, aspernatur tempore doloribus voluptatum ex magnam accus.",
      link: "#",
    },
    {
      img: Img3,
      title: "Contact",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatem, aspernatur tempore doloribus voluptatum ex magnam accus.",
      link: "#",
    },
  ];