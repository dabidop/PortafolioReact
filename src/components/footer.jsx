"use client";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">

        <h2>Lets build something together 🚀</h2>

        <p>
          Open to collaborations, freelance projects and new opportunities.
        </p>

        <div className="footer-links">
          <a href="mailto:youremail@email.com">Email</a>
          <a href="https://github.com/" target="_blank">GitHub</a>
          <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} David Álvarez Restrepo — Built with Next.js</p>
        </div>

      </div>
    </footer>
  );
}