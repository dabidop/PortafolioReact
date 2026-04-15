"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <p>© 2026 David Álvarez Restrepo — Built with Next.js </p>
        </div>

        <div className="footer-right">
          <a href="mailto:youremail@email.com">Email</a>
          <a href="https://github.com/" target="_blank">GitHub</a>
          <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
        </div>

      </div>
    </footer>
  );
}