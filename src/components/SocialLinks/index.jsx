import { WhatsApp, Facebook, Instagram, X, YouTube } from "@mui/icons-material";

const links = [
  {
    id: 1,
    Icon: <Facebook color="white" />,
    url: "https://web.facebook.com/?_rdc=2&_rdr",
  },
  {
    id: 2,
    Icon: <Instagram color="white" />,
    url: "https://web.instagram.com/?_rdc=2&_rdr",
  },
  {
    id: 3,
    Icon: <X color="white" />,
    url: "https://x.com/",
  },
  {
    id: 4,
    Icon: <WhatsApp color="white" />,
    url: "https://web.whatsapp.com/",
  },
  {
    id: 5,
    Icon: <YouTube color="white" />,
    url: "https://youTube.com/",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center flex-wrap justify-center gap-2">
      {links.map((link) => (
        <a
          target="_blank"
          href={link.url}
          className="md:text-white animate-scale-up"
          key={link.id}
        >
          {link.Icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
