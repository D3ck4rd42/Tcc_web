import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Tennis Club Clairefontaine
            </h3>
            <p className="text-sm">
              Club de tennis convivial à Villeneuve-sur-Yonne, proposant des
              cours pour tous les niveaux.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Liens rapides
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/about" className="hover:text-white transition">
                À propos
              </Link>
              <Link href="/facilities" className="hover:text-white transition">
                Installations
              </Link>
              <Link href="/coaching" className="hover:text-white transition">
                Cours
              </Link>
              <Link href="/pricing" className="hover:text-white transition">
                Tarifs
              </Link>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>Villeneuve-sur-Yonne, France</p>
              <p>Email: contact@tennisclubclairefontaine.fr</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>
            © {currentYear} Tennis Club Clairefontaine. Tous droits réservés.
          </p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white transition">
              Politique de confidentialité
            </Link>
            <Link href="/legal" className="hover:text-white transition">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
