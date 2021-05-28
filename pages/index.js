import Link from 'next/Link';

export default function Home() {
  return (
    <div>
      <div>
        <h1>Vienna Vanguards Online Store</h1>
        <button>
          <Link href="/productpage">
            <a>Shop Now</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
