"use client"
import { useActiveSection } from "@/app/hooks/useActiveSection"
import { Link } from "react-scroll"

export interface LinkItem {
  id: number;
  ref: string; // El id de la sección (ej: "nosotros")
  text: string;
}

export interface HeaderProps {
  readonly links: LinkItem[]
}

export default function HeaderLinks({ links }: HeaderProps) {

  const sectionIds = links.map(link => link.ref);
  const activeSection = useActiveSection(sectionIds);

  if (!links || links.length === 0) return null;

  return (
    <nav className='headerLinks'>
      {links.map((link) => (
        <Link
          key={link.id}
          to={link.ref}
          spy={true}
          smooth={true}
          duration={500}
          offset={-40}
          className={activeSection === link.ref ? 'active' : ''}
          
        >
          {link.text}
        </Link>
      ))}
    </nav>
  )
}