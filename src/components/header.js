import React from 'react'
import { Link } from 'gatsby'

const locationActive = at => {
  const windowGlobal = typeof document !== 'undefined' && document
  try {
    if (windowGlobal) {
      if (document.location.pathname == at) {
        return 'active'
      } else {
        return ''
      }
    }
  } catch (e) {
    console.log(e)
    return ''
  }
}

const Header = ({ siteTitle, headerClassName }) => (
  <nav
    className={['navbar navbar-default navbar-fixed-top affix-top']
      .concat([headerClassName])
      .join(' ')}
    data-spy="affix"
    data-offset-top={800}
    role="navigation"
  >
    <div className="container">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar-collapse"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <div className="navbar-brand-container">
          <svg className="navbar-brang-logo" width={50} height={64}>
            <path
              d="M14.488 6.053C17.34 2.155 22.443.293 27.286.025c6.178-.23 12.575 1.104 17.71 4.477a400.32 400.32 0 00-1.873 2.196c-4.807-2.884-10.602-4.183-16.256-3.81-3.795.35-7.782 1.822-9.987 4.927-1.403 1.944-1.476 4.43-.938 6.66.514-1.611.943-3.313 2.109-4.634 2.314-2.758 6.082-4.066 9.7-4.273 4.702-.143 9.513.835 13.536 3.212-.606.75-1.221 1.494-1.827 2.243a22.471 22.471 0 00-11.677-2.598c-2.634.221-5.413 1.022-7.203 2.97-1.836 2.023-2.01 5.128-.588 7.4-.164-3.078 1.822-6.083 4.93-7.074 4.164-1.325 8.784-.369 12.656 1.376a52.93 52.93 0 01-1.936 2.308 16.842 16.842 0 00-7.923-1.398c-1.563.112-3.18.766-4.041 2.06-1.076 1.594-.87 3.781.346 5.253 1.977 2.52 4.98 4.01 7.754 5.603 6.465 3.685 13.185 7.825 16.84 14.315 2.118 3.5 1.662 7.98-.42 11.393.387-4.443-1.061-8.929-3.936-12.44-4.647-5.716-11.4-9.31-17.805-12.96-4.237-2.46-8.675-4.967-11.632-8.868-2.715-3.533-3.002-8.678-.337-12.31zM7.03 9.538c.943-4.295 4.725-7.72 9.103-8.902-2.948 2.264-5.527 5.235-6.155 8.89-.953 4.71 1.225 9.538 4.733 12.83 7.267 7.005 17.678 9.989 24.986 16.964 3.453 3.127 6 7.556 5.522 12.207-.46 4.14-3.718 7.413-7.286 9.521 1.14-1.459 2.525-2.784 3.258-4.494 2.292-4.729 1.116-10.643-2.679-14.363-6.875-6.997-16.898-9.963-24.338-16.29C9.304 21.94 5.79 15.751 7.03 9.538zM3.668 21.351c-.939-2.884-.743-5.989.09-8.873.47 5.313 2.99 10.353 7.053 14.03 7.04 6.958 17.145 9.95 24.544 16.462 2.756 2.356 4.524 5.855 4.073 9.423-.324 3.568-2.889 6.599-6.005 8.435-4.633 2.745-10.297 3.498-15.659 3.052C11.313 63.257 5.217 60.633 0 57.047c.624-.736 1.253-1.463 1.877-2.2 5.918 3.958 13.049 6.769 20.397 6.288 4.465-.329 9.226-1.593 12.27-4.902 2.036-2.152 2.492-5.36 1.362-8.014-.405 1.697-.77 3.477-1.932 4.884-2.76 3.59-7.595 5.187-12.132 5.295-6.53.317-12.826-2.264-18.047-5.815.638-.736 1.28-1.472 1.932-2.195 5.476 3.72 12.433 6.278 19.217 4.81 3.422-.684 6.944-2.831 7.746-6.256.432-1.395-.443-3.77-.582-4.138-.41 1.369-.763 2.856-1.715 3.995-2.187 2.784-5.94 4.066-9.5 4.1-4.87-.034-9.476-2.005-13.403-4.616.633-.753 1.276-1.502 1.914-2.251 2.897 1.922 6.173 3.45 9.704 3.91 2.597.346 5.403-.113 7.536-1.62 1.48-1.052 2.638-2.784 2.291-4.602-.373-1.862-2.032-3.135-3.608-4.123-5.5-3.208-11.226-6.205-15.987-10.405-2.447-2.178-4.734-4.715-5.672-7.841z"
              fill="#3F3356"
              fillRule="nonzero"
            />
          </svg>
          <a className="navbar-brand" href="/">
            Spread
          </a>
        </div>
      </div>
      <div
        className="collapse navbar-collapse"
        id="navbar-collapse"
        aria-expanded="false"
      >
        <ul className="nav navbar-nav navbar-right">
          <li className={locationActive('/')}>
            <a href="/">For Clients</a>
          </li>
          <li className={locationActive('/freelancers/')}>
            <a href="/freelancers/">For Freelancers</a>
          </li>
          {/*
                <li><a href="#pricing" id="pricing-hide">Pricing</a></li>
                <li><a href="https://docs.spread0x.com/" target="_blank">Docs</a></li>
                <li><a target="_blank" href="/faq">FAQ</a></li>
                <li><a target="_blank" href="/support">Support</a></li>
              */}
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
