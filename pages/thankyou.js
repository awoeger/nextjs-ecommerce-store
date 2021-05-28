import Link from 'next/link';

export default function thankyou() {
  return (
    <div>
      <span>Thank you for your order</span>
      <span>You've officially been pimped</span>
      <button>
        <Link href="/products">
          <a>Home</a>
        </Link>
      </button>
    </div>
  );
}
