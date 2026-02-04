export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">Connect with us on professional platforms</p>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="hover:text-gray-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-gray-400 transition-colors"
          >
            Email
          </a>
          <a
            href="#"
            className="hover:text-gray-400 transition-colors"
          >
            Twitter
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          © 2023 Webify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
