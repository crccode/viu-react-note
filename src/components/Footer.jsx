import './Footer.css';

// Vamos a trabajar con año
const year = new Date().getFullYear();

export default function Footer() {
    return (
        <footer>
            <p>Derechos desde {year}, reservados</p>
        </footer>
    );
}