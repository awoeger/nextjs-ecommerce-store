import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Vienna Vanguards Online Store</h1>
      <button>
        <Link href="/products">
          <a>Shop Now</a>
        </Link>
      </button>
    </div>
  );
}
