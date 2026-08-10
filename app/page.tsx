import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const drinks = [
  {
    name: "Brown Sugar Milk Tea",
    description: "Rich, creamy, and classic.",
    image: "/brown-sugar.jpg",
    detail: "Brown sugar caramel, creamy milk, and chewy boba.",
  },
  {
    name: "Taro Milk Tea",
    description: "Smooth, fragrant, and satisfying.",
    image: "/taro.jpg",
    detail: "Premium taro and creamy milk, perfectly balanced with chewy boba.",
  },
  {
    name: "Matcha Milk Tea",
    description: "Earthy matcha with a creamy twist.",
    image: "/matcha.jpg",
    detail: "Smooth ceremonial-style matcha with fresh milk and boba.",
  },
  {
    name: "Classic Milk Tea",
    description: "Simple, smooth, and always a favorite.",
    image: "/classic.jpg",
    detail: "A timeless milk tea with a balanced tea aroma and chewy boba.",
  },
];

const socials = [
  { name: "YouTube", href: "https://www.youtube.com/", className: "youtube", icon: "▶" },
  { name: "X", href: "https://x.com/", className: "x", icon: "𝕏" },
  { name: "Facebook", href: "https://www.facebook.com/", className: "facebook", icon: "f" },
  { name: "Instagram", href: "https://www.instagram.com/", className: "instagram", icon: "◎" },
  { name: "TikTok", href: "https://www.tiktok.com/", className: "tiktok", icon: "♪" },
  { name: "WhatsApp", href: "https://www.whatsapp.com/", className: "whatsapp", icon: "◔" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Boba House home">
          <span className="brand-mark" aria-hidden="true">
            🧋
          </span>
          <span>
            <strong>BOBA HOUSE</strong>
            <small>Sip Happiness, Every Day</small>
          </span>
        </a>

        <a className="order-button" href="#order">
          Ready to Order?
          <span aria-hidden="true">🛍</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">HANDCRAFTED WITH CARE</p>
          <h1>
            Made for
            <span>Boba Lovers</span>
          </h1>
          <p className="script-line">Sips of happiness in every cup. ♡</p>

          <div className="benefits">
            <div>
              <span>◌</span>
              <strong>Premium<br />Ingredients</strong>
            </div>
            <div>
              <span>🧋</span>
              <strong>Handcrafted<br />with Love</strong>
            </div>
            <div>
              <span>♡</span>
              <strong>Fresh &amp;<br />Delicious</strong>
            </div>
          </div>
        </div>

        <div className="hero-product">
          <div className="hero-glow" />
          <Image
            src={`${basePath}/boba-hero.jpg`}
            alt="Caramel milk tea with tapioca pearls"
            width={430}
            height={590}
            priority
          />
        </div>
      </section>

      <section className="drinks-section" id="drinks">
        <div className="section-heading">
          <p className="script-accent">Discover</p>
          <h2>Our Signature Drinks</h2>
          <div className="divider"><span>♥</span></div>
          <p>Handcrafted drinks made with premium ingredients<br />for the best taste and quality.</p>
        </div>

        <div className="drink-grid">
          {drinks.map((drink) => (
            <article className="drink-card" key={drink.name}>
              <div className="drink-image-wrap">
                <Image
                  src={`${basePath}${drink.image}`}
                  alt={drink.name}
                  width={300}
                  height={360}
                />
                <div className="hover-detail">
                  <span className="detail-icon">✦</span>
                  <h3>Premium Ingredients</h3>
                  <p>{drink.detail}</p>
                </div>
              </div>
              <div className="drink-info">
                <h3>{drink.name}</h3>
                <p>{drink.description}</p>
                <span className="heart">♥</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="order-strip" id="order">
        <div>
          <p className="script-accent">Your next cup is waiting.</p>
          <h2>Ready to Order?</h2>
          <p>Click below to visit our ordering hub.</p>
        </div>
        <a className="order-button order-button-light" href="#">
          Add your order link
        </a>
      </section>

      <footer className="site-footer">
        <div className="footer-heading">
          <h2>FOLLOW US</h2>
          <div className="divider light"><span>♥</span></div>
        </div>

        <div className="socials">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className={`social ${social.className}`}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
            >
              <span>{social.icon}</span>
              <small>{social.name}</small>
            </a>
          ))}
        </div>

        <p className="footer-note">Stay updated with our latest drinks, offers, and more! ♥</p>
      </footer>
    </main>
  );
}
