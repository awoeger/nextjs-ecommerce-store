import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <p>Copyright Vienna Vanguards</p>
      <Link href="https://www.facebook.com/ViennaVanguards">
        <a>Instagram</a>
      </Link>
      <Link href="https://www.instagram.com/viennavanguards/?hl=de">
        <a>Facebook</a>
      </Link>
      <Link href="https://www.tiktok.com/@viennavanguards?lang=de-DE">
        <a>Tiktok</a>
      </Link>
    </>
  );
}
