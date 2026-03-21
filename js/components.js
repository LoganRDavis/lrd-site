class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div id="headerContent">
          <div>
            <a href="/"><img class="header-logo" src="/images/logo/horizontal-transparent.svg" alt="LRD Logo"></a>
          </div>

          <div class="hamburger-icon" onclick="document.getElementById('headerContent').classList.toggle('hamburger-icon-click')">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>

          <div class="desktop-menu">
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li>|</li>
                <li><a href="/background.html">Background</a></li>
                <li>|</li>
                <li><a href="/portfolio.html">Portfolio</a></li>
                <li>|</li>
                <li><a href="https://github.com/loganrdavis"><img src="/images/github-logo.png" alt="Github Logo" style="max-width: unset;"></a></li>
                <li><a href="https://www.linkedin.com/in/loganrdavis/"><img src="/images/linked-in-logo.png" alt="LinkedIn Logo" style="max-width: unset;"></a></li>
                <li><a href="/documents/logan-davis-resume.pdf"><img src="/images/resume.png" alt="Resume Logo" style="max-width: unset;"></a></li>
              </ul>
            </nav>
          </div>

          <div class="mobile-menu-container" id="mobile-menu-container">
            <div class="mobile-menu-outside" onclick="document.getElementById('headerContent').classList.toggle('hamburger-icon-click')"></div>
            <div class="mobile-menu" id="mobile-menu">
              <nav class="mobile-menu-nav">
                <ul>
                  <li class="mobile-menu-li"><a href="/">Home</a></li>
                  <li class="mobile-menu-li"><a href="/background.html">Background</a></li>
                  <li class="mobile-menu-li"><a href="/portfolio.html">Portfolio</a></li>
                  <li class="mobile-menu-li"><a href="https://github.com/loganrdavis"><img src="/images/github-logo.png" alt="Github Logo" style="max-width: unset;"></a></li>
                  <li class="mobile-menu-li"><a href="https://www.linkedin.com/in/loganrdavis/"><img src="/images/linked-in-logo.png" alt="LinkedIn Logo" style="max-width: unset;"></a></li>
                  <li class="mobile-menu-li"><a href="/documents/logan-davis-resume.pdf"><img src="/images/resume.png" alt="Resume Logo" style="max-width: unset;"></a></li>
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
              <a href="/"><img src="/images/logo/vertical-transparent.svg" alt="LRD Logo"></a>
            </div>
            <div>
              <p>
                Copyright &copy; Logan R Davis<br>
                All rights reserved.<br>
                <a style="word-break: break-all;" href="mailto:logan@loganrdavis.com">logan@loganrdavis.com</a><br>
              <ul>
                <li><a href="https://github.com/loganrdavis"><img src="/images/github-logo.png" alt="Github Logo" style="max-width: unset;"></a></li>
                <li><a href="https://www.linkedin.com/in/loganrdavis/"><img src="/images/linked-in-logo.png" alt="LinkedIn Logo" style="max-width: unset;"></a></li>
                <li><a href="/documents/logan-davis-resume.pdf"><img src="/images/resume.png" alt="Resume Logo" style="max-width: unset;"></a></li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
