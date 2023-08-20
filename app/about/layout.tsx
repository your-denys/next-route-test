// Layout  -  страница относительно которой будут другие страницы (children) и которые будут иметь общие элементы

import Link from "next/link";

const AboutLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <ul>
                {/* Пути пишутся целиком */}
                <li><Link href='/about/contacts'>Contacts</Link></li> 
                <li><Link href='/about/team'>Team</Link></li>
                <li><Link href='/about/comments'>Comments</Link></li>
            </ul>
            {children}
        </div>
    );
}

export default AboutLayout 
