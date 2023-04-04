import './Buttons.scss'
import { Link } from 'react-router-dom';

const Button = ({ children, variant, onClick, className } : ButtonProps) => {
    return (
        <button className={`button-component ${variant} ${className}`} onClick={onClick}>{children}</button>
    );
};

const RouterLink = ({ children, variant, to, className } : RouterLinkProps) => {
    return (
        <Link to={to} className={`button-component ${variant} ${className}`}>{children}</Link>
    );
};

const Anchor = ({ children, variant, href, className } : AnchorProps) => {
    return (
        <a href={href} className={`button-component ${variant} ${className}`}>{children}</a>
    );
};

interface ButtonProps {
    children: React.ReactNode,
    variant: 'primary' | 'secondary' | 'link' | 'choice',
    className?: string,
    onClick?: () => void,
}

interface RouterLinkProps {
    children: React.ReactNode,
    variant: 'primary' | 'secondary' | 'link',
    className?: string,
    to: string,
}

interface AnchorProps {
    children: React.ReactNode,
    variant: 'primary' | 'secondary' | 'link',
    className?: string,
    href: string,
}

export { Button, Anchor, RouterLink };