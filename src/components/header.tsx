import { FunctionalComponent } from 'preact'
import Logo from '../assets/logo.svg'
import classes from './header.module.scss'

const Menu: FunctionalComponent = () => {
  return (
    // <nav>
    //   <ol>
    //     <li>
    //       <a href="/">Home</a>
    //     </li>
    //     <li>
    //       <a href="/writing/">Writing</a>
    //     </li>
    //     <li>
    //       <a href="/about/">About</a>
    //     </li>
    //   </ol>
    // </nav>
    <header class={classes.header}>
      <a href="/">
        <Logo class={classes.logo} />
      </a>
      <div>
        <button aria-label="Dark mode" aria-pressed="false">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="transparent"
              d="M 9.859 7.681 C 9.983 9.353 10.704 10.925 11.889 12.111 C 13.075 13.296 14.647 14.017 16.319 14.141 C 17.99 14.266 19.652 13.786 21 12.79 C 21 12.79 21 12.79 21 12.79 C 20.789 15.071 19.715 17.187 17.999 18.704 C 16.283 20.222 14.051 21.028 11.762 20.958 C 9.472 20.887 7.294 19.945 5.674 18.326 C 4.055 16.706 3.113 14.528 3.042 12.238 C 2.972 9.949 3.778 7.717 5.296 6.001 C 6.813 4.285 8.929 3.211 11.21 3 C 10.214 4.348 9.734 6.01 9.859 7.681 M 12 1 L 12 1 M 12 21 L 12 21 M 4.2 4.2 L 4.2 4.2 M 18.4 18.4 L 18.4 18.4 M 1 12 L 1 12 M 21 12 L 21 12 M 5.6 18.4 L 5.6 18.4 M 19.8 4.2 L 19.8 4.2"
            ></path>
          </svg>
        </button>
        <button aria-label="Menu" aria-pressed="false">
          <div>
            <span></span>
          </div>
        </button>
      </div>
    </header>
  )
}

export default Menu
