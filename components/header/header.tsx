import Link from "next/link";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="navbar justify-between bg-base-300">
                    <Link href="/" className="btn btn-ghost text-lg">
                        Amazon clone
                    </Link>
                    <ul className="flex">
                        <li>
                            <Link className="btn btn-ghost rounded-btn" href="/cart">Cart</Link>
                        </li>
                        <li className="flex">
                            <Link className="btn btn-ghost rounded-btn" href="/signin">Sign In</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </header>
    )
}

export default Header;