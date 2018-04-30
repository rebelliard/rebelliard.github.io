import React from 'react'
import Link from 'gatsby-link'
import 'typeface-roboto-slab'
import 'typeface-open-sans'
import '../styles/main.scss'

class Template extends React.Component {
  Header = () => {
    const { location } = this.props
    let rootPath = '/'
    if (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + '/'
    }

    return (
      <header className="section header">
        {rootPath === location.pathname
          ? <h1 className="header-item title">
              <Link
                to={'/'}
                aria-label="Go to the root page.">rafael.do</Link>
            </h1>
          : <div className="header-item title">
              <Link
                to={'/'}
                aria-label="Go to the root page.">rafael.do</Link>
            </div>}
        <nav className="header-item nav" role="navigation">
          <Link
            className={`nav-item${location.pathname === rootPath ? ' active' : ''}`}
            to={'/'}>
            About
          </Link>
          <Link
            className={`nav-item${location.pathname.includes('/blog/') ? ' active' : ''}`}
            to={'/blog/'}>
            Blog
          </Link>
          <a className="nav-item" href="mailto:me@rafael.do">
            Contact
          </a>
        </nav>
      </header>
    )
  }

  Footer = () => {
    /**
     * Trim whitespace.
     * @see https://stackoverflow.com/a/12014464
     */
    const trim = str => str.replace(/>\s+</g, '><').trim()

    const svg = {
      linkedin: {
        __html: trim(`
          <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>LinkedIn</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-47.000000, -46.000000)" fill="#FFF53C" fill-rule="nonzero">
                    <g transform="translate(0.000000, 46.000000)">
                        <g transform="translate(47.000000, 0.000000)">
                            <path d="M20.447,20.452 L16.893,20.452 L16.893,14.883 C16.893,13.555 16.866,11.846 15.041,11.846 C13.188,11.846 12.905,13.291 12.905,14.785 L12.905,20.452 L9.351,20.452 L9.351,9 L12.765,9 L12.765,10.561 L12.811,10.561 C13.288,9.661 14.448,8.711 16.181,8.711 C19.782,8.711 20.448,11.081 20.448,14.166 L20.448,20.452 L20.447,20.452 Z M5.337,7.433 C4.193,7.433 3.274,6.507 3.274,5.368 C3.274,4.23 4.194,3.305 5.337,3.305 C6.477,3.305 7.401,4.23 7.401,5.368 C7.401,6.507 6.476,7.433 5.337,7.433 Z M7.119,20.452 L3.555,20.452 L3.555,9 L7.119,9 L7.119,20.452 Z M22.225,0 L1.771,0 C0.792,0 0,0.774 0,1.729 L0,22.271 C0,23.227 0.792,24 1.771,24 L22.222,24 C23.2,24 24,23.227 24,22.271 L24,1.729 C24,0.774 23.2,0 22.222,0 L22.225,0 Z"></path>
                        </g>
                    </g>
                </g>
            </g>
          </svg>
        `)
      },
      github: {
        __html: trim(`
          <svg width="23px" height="24px" viewBox="0 0 23 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>GitHub</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(0.000000, -46.000000)" fill="#FFF53C" fill-rule="nonzero">
                    <g transform="translate(0.000000, 46.000000)">
                        <g>
                            <path d="M11.5,0.297 C5.14625,0.297 0,5.67 0,12.297 C0,17.6 3.29475,22.097 7.863125,23.682 C8.438125,23.795 8.64895833,23.424 8.64895833,23.105 C8.64895833,22.82 8.639375,22.065 8.63458333,21.065 C5.43566667,21.789 4.761,19.455 4.761,19.455 C4.23775,18.07 3.481625,17.7 3.481625,17.7 C2.43991667,16.956 3.562125,16.971 3.562125,16.971 C4.71691667,17.055 5.32354167,18.207 5.32354167,18.207 C6.34895833,20.042 8.0155,19.512 8.67291667,19.205 C8.77641667,18.429 9.07254167,17.9 9.40125,17.6 C6.84729167,17.3 4.163,16.268 4.163,11.67 C4.163,10.36 4.608625,9.29 5.34654167,8.45 C5.21716667,8.147 4.82904167,6.927 5.44716667,5.274 C5.44716667,5.274 6.41029167,4.952 8.60966667,6.504 C9.52966667,6.237 10.5071667,6.105 11.4846667,6.099 C12.4621667,6.105 13.4396667,6.237 14.3596667,6.504 C16.5446667,4.952 17.5077917,5.274 17.5077917,5.274 C18.1259167,6.927 17.7377917,8.147 17.6227917,8.45 C18.3559167,9.29 18.8015417,10.36 18.8015417,11.67 C18.8015417,16.28 16.1134167,17.295 13.5546667,17.59 C13.9571667,17.95 14.3309167,18.686 14.3309167,19.81 C14.3309167,21.416 14.3165417,22.706 14.3165417,23.096 C14.3165417,23.411 14.5177917,23.786 15.1071667,23.666 C19.708125,22.092 23,17.592 23,12.297 C23,5.67 17.850875,0.297 11.5,0.297"></path>
                        </g>
                    </g>
                </g>
            </g>
          </svg>
        `)
      },
      twitter: {
        __html: trim(`
          <svg width="24px" height="20px" viewBox="0 0 24 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Twitter</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-95.000000, -48.000000)" fill="#FFF53C" fill-rule="nonzero">
                    <g transform="translate(0.000000, 46.000000)">
                        <g transform="translate(95.000000, 2.000000)">
                            <path d="M23.954,2.569 C23.069,2.958 22.124,3.223 21.129,3.344 C22.143,2.733 22.923,1.77 23.292,0.621 C22.341,1.176 21.287,1.58 20.165,1.805 C19.269,0.846 17.992,0.246 16.574,0.246 C13.857,0.246 11.654,2.449 11.654,5.163 C11.654,5.553 11.699,5.928 11.781,6.287 C7.691,6.094 4.066,4.13 1.64,1.161 C1.213,1.883 0.974,2.722 0.974,3.636 C0.974,5.346 1.844,6.849 3.162,7.732 C2.355,7.706 1.596,7.484 0.934,7.116 L0.934,7.177 C0.934,9.562 2.627,11.551 4.88,12.004 C4.467,12.115 4.031,12.175 3.584,12.175 C3.27,12.175 2.969,12.145 2.668,12.089 C3.299,14.042 5.113,15.466 7.272,15.506 C5.592,16.825 3.463,17.611 1.17,17.611 C0.78,17.611 0.391,17.588 0,17.544 C2.189,18.938 4.768,19.753 7.557,19.753 C16.611,19.753 21.556,12.257 21.556,5.767 C21.556,5.558 21.556,5.347 21.541,5.137 C22.502,4.448 23.341,3.577 24.001,2.589 L23.954,2.569 Z"></path>
                        </g>
                    </g>
                </g>
            </g>
          </svg>
        `)
      },
      lastfm: {
        __html: trim(`
          <svg width="25px" height="14px" viewBox="0 0 25 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>Last.fm</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-144.000000, -51.000000)" fill="#FFF53C" fill-rule="nonzero">
                    <g transform="translate(0.000000, 46.000000)">
                        <g transform="translate(144.000000, 5.000000)">
                            <path d="M11.02296,12.211 L10.10672,9.818 C10.10672,9.818 8.6164,11.414 6.38456,11.414 C4.40856,11.414 3.0056,9.762 3.0056,7.118 C3.0056,3.733 4.78192,2.522 6.52912,2.522 C9.04384,2.522 9.84048,4.09 10.52792,6.1 L11.43376,8.851 C12.3396,11.523 14.05768,13.669 19.01016,13.669 C22.55656,13.669 24.96104,12.624 24.96104,9.868 C24.96104,7.641 23.634,6.485 21.18064,5.933 L19.35336,5.549 C18.08768,5.275 17.71328,4.778 17.71328,3.952 C17.71328,3.016 18.47872,2.465 19.74336,2.465 C21.11928,2.465 21.85248,2.96 21.97624,4.144 L24.8352,3.814 C24.6012,1.335 22.82072,0.32 19.9004,0.32 C17.32224,0.32 14.80752,1.256 14.80752,4.254 C14.80752,6.127 15.7456,7.312 18.11992,7.859 L20.0564,8.302 C21.50928,8.632 21.99392,9.218 21.99392,10.015 C21.99392,11.036 20.96224,11.456 19.01016,11.456 C16.12,11.456 14.91672,9.999 14.22928,7.987 L13.29224,5.237 C12.09,1.663 10.16808,0.341 6.35648,0.341 C2.23288,0.327 0,2.879 0,7.235 C0,11.414 2.23288,13.68 6.24312,13.68 C9.47544,13.68 11.02296,12.223 11.02296,12.223 L11.02296,12.211 Z"></path>
                        </g>
                    </g>
                </g>
            </g>
          </svg>
        `)
      }
    }

    return (
      <footer id="footer" className="section footer">
        <h3>Find me online</h3>
        <nav role="navigation">
          <a
            className="social-icon"
            href="https://twitter.com/rebelliard"
            itemProp="sameAs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Twitter profile"
            dangerouslySetInnerHTML={svg.twitter}></a>
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/rebelliard"
            itemProp="sameAs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            dangerouslySetInnerHTML={svg.linkedin}></a>
          <a
            className="social-icon"
            href="https://github.com/rebelliard"
            itemProp="sameAs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            dangerouslySetInnerHTML={svg.github}></a>
          <a
            className="social-icon"
            href="http://www.last.fm/user/belliard"
            itemProp="sameAs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Last.fm profile"
            dangerouslySetInnerHTML={svg.lastfm}></a>
        </nav>
      </footer>
    )
  }

  render() {
    const main = this.props.children
    return (
      <div className="container">
        <this.Header></this.Header>
        {main()}
        <this.Footer></this.Footer>
      </div>
    )
  }
}

export default Template
