class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <header>
        <div id="headerContent">
          <div>
            <a href="/"><img class="header-logo" src="/images/logo/horizontal-transparent.svg" alt="LRD Logo" width="500" height="94"></a>
          </div>

          <button class="hamburger-icon" aria-label="Toggle navigation menu" aria-expanded="false" onclick="this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'); document.getElementById('headerContent').classList.toggle('hamburger-icon-click')">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </button>

          <div class="desktop-menu">
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/background.html">Background</a></li>
                <li><a href="/portfolio.html">Portfolio</a></li>
                <li><a href="https://github.com/loganrdavis" rel="noopener noreferrer" aria-label="GitHub profile"><img src="/images/github-logo.webp" alt="Github Logo" width="40" height="40" style="max-width: unset;"></a></li>
                <li><a href="https://www.linkedin.com/in/loganrdavis/" rel="noopener noreferrer" aria-label="LinkedIn profile"><img src="/images/linked-in-logo.webp" alt="LinkedIn Logo" width="40" height="40" style="max-width: unset;"></a></li>
                <li><a href="/documents/logan-davis-resume.pdf" aria-label="Download resume"><img src="/images/resume.webp" alt="Resume Logo" width="40" height="40" style="max-width: unset;"></a></li>
              </ul>
            </nav>
          </div>

          <div class="mobile-menu-container" id="mobile-menu-container">
            <div class="mobile-menu-outside" role="button" tabindex="0" aria-label="Close navigation menu" onclick="document.getElementById('headerContent').classList.toggle('hamburger-icon-click')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();document.getElementById('headerContent').classList.toggle('hamburger-icon-click')}"></div>
            <div class="mobile-menu" id="mobile-menu">
              <nav class="mobile-menu-nav">
                <ul>
                  <li class="mobile-menu-li"><a href="/">Home</a></li>
                  <li class="mobile-menu-li"><a href="/background.html">Background</a></li>
                  <li class="mobile-menu-li"><a href="/portfolio.html">Portfolio</a></li>
                  <li class="mobile-menu-li"><a href="https://github.com/loganrdavis" rel="noopener noreferrer" aria-label="GitHub profile"><img src="/images/github-logo.webp" alt="Github Logo" width="40" height="40" style="max-width: unset;"></a></li>
                  <li class="mobile-menu-li"><a href="https://www.linkedin.com/in/loganrdavis/" rel="noopener noreferrer" aria-label="LinkedIn profile"><img src="/images/linked-in-logo.webp" alt="LinkedIn Logo" width="40" height="40" style="max-width: unset;"></a></li>
                  <li class="mobile-menu-li"><a href="/documents/logan-davis-resume.pdf" aria-label="Download resume"><img src="/images/resume.webp" alt="Resume Logo" width="40" height="40" style="max-width: unset;"></a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div id="footerContent">
          <div class="footer-container">
            <div>
              <a href="/"><img src="/images/logo/vertical-transparent.svg" alt="LRD Logo" width="200" height="166"></a>
            </div>
            <div>
              <p>
                Copyright &copy; Logan R Davis<br>
                All rights reserved.<br>
                <a style="word-break: break-all;" href="mailto:logan@loganrdavis.com">logan@loganrdavis.com</a>
              </p>
              <ul>
                <li><a href="https://github.com/loganrdavis" rel="noopener noreferrer" aria-label="GitHub profile"><img src="/images/github-logo.webp" alt="Github Logo" width="40" height="40" style="max-width: unset;"></a></li>
                <li><a href="https://www.linkedin.com/in/loganrdavis/" rel="noopener noreferrer" aria-label="LinkedIn profile"><img src="/images/linked-in-logo.webp" alt="LinkedIn Logo" width="40" height="40" style="max-width: unset;"></a></li>
                <li><a href="/documents/logan-davis-resume.pdf" aria-label="Download resume"><img src="/images/resume.webp" alt="Resume Logo" width="40" height="40" style="max-width: unset;"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
