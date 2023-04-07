import './Buttons.scss'
import { Link } from 'react-router-dom';

const Button = ({ children, variant, onClick, className, style } : ButtonProps) => {
    return (
        <button className={`button-component ${variant} ${className}`} onClick={onClick} style={style}>{children}</button>
    );
};

const RouterLink = ({ children, variant, to, className, style } : RouterLinkProps) => {
    return (
        <Link to={to} className={`button-component ${variant} ${className}`} style={style}>{children}</Link>
    );
};

const Anchor = ({ children, variant, href, className, style } : AnchorProps) => {
    return (
        <a href={href} className={`button-component ${variant} ${className}`} style={style}>{children}</a>
    );
};

interface ButtonProps {
    children: React.ReactNode,
    variant: 'primary' | 'secondary' | 'link' | 'choice',
    className?: string,
    onClick?: () => void,
    style?: React.CSSProperties,
}

interface RouterLinkProps {
    children: React.ReactNode,
    variant: 'primary' | 'secondary' | 'link',
    className?: string,
    to: string,
    style?: React.CSSProperties,
}

interface AnchorProps {
    children: React.ReactNode,
    variant: 'primary' | 'secondary' | 'link',
    className?: string,
    href: string,
    style?: React.CSSProperties,
}

export { Button, Anchor, RouterLink };