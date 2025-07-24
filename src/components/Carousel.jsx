import { useEffect, useState, useRef } from "react";

// Utility to shuffle array
function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const originalWishes = [
  {
    text: "Your life is a light that guides and inspires—may your birthday be filled with the same love you so freely give.",
    img: "public/Assets/1.jpg"
  },
  {
    text: "Wishing a man of wisdom, strength, and grace a birthday as meaningful as the impact he’s had on others.",
    img: "public/Assets/2.jpg"
  },
  {
    text: "Thank you for standing tall when others leaned on you. Today, may you rest and be celebrated.",
    img: "public/Assets/3.jpg"
  },
  {
    text: "Your words have built bridges, your kindness has healed hearts—may this year return that love tenfold.",
    img: "public/Assets/4.jpg"
  },
  {
    text: "Happy Birthday to a man whose quiet strength and unwavering faith shape lives daily.",
    img: "public/Assets/5.jpg"
  },
  {
    text: "You may not wear a cape, but you've been a hero in every sense. May this birthday honor you fully.",
    img: "public/Assets/6.jpg"
  },
  {
    text: "Through every season, your presence has been a source of peace. May today bring you peace in return.",
    img: "public/Assets/7.jpg"
  },
  {
    text: "God’s grace shines through you. May He pour out joy, health, and rest upon you this year.",
    img: "public/Assets/8.jpg"
  },
  {
    text: "You’ve guided many with humility and love. May this birthday surround you with the same.",
    img: "public/Assets/9.jpg"
  },
  {
    text: "For the father you are and the leader you’ve been—thank you. Enjoy every moment of today.",
    img: "public/Assets/10.jpg"
  },
  {
    text: "May your day be filled with the same strength and comfort you’ve given all your life.",
    img: "public/Assets/11.jpg"
  },
  {
    text: "You have a shepherd’s heart—steady, strong, and tender. May this birthday bring blessings beyond measure.",
    img: "public/Assets/12.jpg"
  },
  {
    text: "The legacy you're building isn't written in stone, but in the lives you've touched. Happy Birthday.",
    img: "public/Assets/13.jpg"
  },
  {
    text: "Happy Birthday, Sir.\nThank you—for everything.\n\nThank you for being a father, a shepherd, a guide.\nYou gave me the name AY-bass, and it stuck—\nNot just because it sounded cool,\nBut because it came from someone whose words carry meaning.\n\nYou’ve been a constant guide,\nA steady hand when life felt uncertain,\nA pulsing heart for the youth—tireless, compassionate, unshakably faithful.\n\nYou carry us along, not with obligation, but with a love that cannot be human.\nIt’s divine.\nIt’s patient.\nIt’s real.\n\nThank you, Sir, for choosing to lead with empathy,\nFor correcting with love,\nFor laughing with us, teaching us, believing in us.\n\nI pray this new year brings you the same love, peace, and joy you’ve poured out so selflessly.\nMay God reward you openly for what you’ve done in the secret place.\n\nHappy Birthday, Daddy.\nYou are deeply loved.",
    sender: "AY-bass",
    img: "public/Assets/14.jpg"
  },
  {
    text: "Even when you weren't required to step in, you did—thank you for choosing to be a father when it mattered most.",
    img: "public/Assets/15.jpg"
  },
  {
    text: "Happy birthday sir, Meeting you has been one of the greatest encounters of my life. I can’t talk about it enough. I pray that as you move along the journey of life sir, your destiny helpers will come in their multitude, from left and from right. You will never lack help sir. More anointing sir. Before a need arises, God would raise men to sort it out. Strange order of favour will begin to follow you anywhere you go, you won’t understand why and how. Have a lovely day sir. I love you sir",
    sender: "Isaac", 
    img: "public/Assets/16.jpg"
  },
  {
    text: "You’ve lived with intention and loved without limit. Today, we honor that spirit.",
    img: "public/Assets/17.jpg"
  },
  {
    text: "Happy birthday, Daddy! Thanks for all you did, while in Ikole. I pray the Lord rewards you and continues to strengthen you, Amen. It's a better year sir",
    sender: "Testimomy",
    img: "public/Assets/18.jpg"
  },
  {
    text: "You’ve walked the walk with quiet dignity. We see you, we thank you, we celebrate you.",
    img: "public/Assets/19.jpg"
  },
  {
    text: "On this special day, we thank God for the gift of your life. Your leadership, compassion, and dedication have been a source of strength and inspiration to many , including I. Like David, you are a shepherd after God’s own heart; leading, teaching, caring ,and loving with wisdom and grace. and I will give you shepherds after my own heart, who will feed you with knowledge and understanding. Jeremiah 3:15. May the Lord continue to bless you with divine health, wisdom, and long life. The Lord bless you and keep you; the Lord make His face shine upon you and be gracious to you. numbers 6:24–25, Thank you for being a light and a vessel of honor in God’s kingdom. Thank you for being that father figure in my life. I love you daddy. Happy Birthday, sir! May this new year be filled with greater glory and deeper encounters with God.",
    sender: "Esther",
    img: "public/Assets/20.jpg"
  },
  {
    text: "The path of the just is as a shining light, shining more and more unto the perfect day. On this special day, I celebrate the steady, radiant light that is your life. Each year, your wisdom grows deeper, your kindness reaches further, and your faith shines brighter. Every birthday is not just a number- It is a plus in blessings, A testament of grace, And a reminder of purpose. May this new year bring you peace in abundance, strength renewed, and joy multiplied. You are cherished, celebrated, and deeply loved. Happy Birthday Sir! May your path continue to shine brighter with every step you take.",
    sender: "Simi",
    img: "public/Assets/22.jpg"
  }
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [wishes] = useState(shuffle(originalWishes));
  const intervalRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    startRotation();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startRotation = () => {
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) {
        setIndex((prev) => (prev + 1) % wishes.length);
      }
    }, 4000);
  };

  const handlePause = () => (isPaused.current = true);
  const handleResume = () => (isPaused.current = false);

  return (
    <div
      className="text-center max-w-md "
      onTouchStart={handlePause}
      onTouchEnd={handleResume}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      <img
        src={wishes[index].img}
        alt="birthday wish"
        className="rounded-xl mb-4 w-full h-fit object-cover shadow-lg transition duration-500"
      />
      <p className="text-xl italic text-gray-50">{wishes[index].text}</p>

      {wishes[index].sender && (
        <p className="text-sm font-semibold text-gray-50">— {wishes[index].sender}</p>
      )}
       {/* Footer */}
      <footer className="mt-8 text-xs text-gray-200">
         Created with ❤️ by{" "}
          <a
            href="https://wa.me/2347019780897"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-200 font-semibold underline hover:text-green-500"
          >
            Simi
          </a>
      </footer>
    </div>
  );
}
