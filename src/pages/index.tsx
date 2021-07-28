import { Frontmatter } from 'wilson'
import { FunctionalComponent } from 'preact'
import { ContentPageProps } from '../../../wilson/dist/types'
import styles from './index.module.scss'
import useOffset from '../hooks/use-offset'

export const Page: FunctionalComponent<ContentPageProps> = ({ title }) => {
  const { x, y, ref, isDizzy } = useOffset()
  console.log({ x, y, ref, isDizzy })

  const inlineStyles = {
    eyeFollow: {
      transition: 'transform 200ms linear',
      transform: `translate(${isDizzy ? 0 : x * (x > 0 ? 8 : 15)}px, ${
        isDizzy ? 0 : y * (y < 0 ? 4 : 7)
      }px)`,
    },
    headFollow: {
      transition: 'transform 150ms ease-in-out',
      transformOrigin: 'center',
      transform: `translate(0px, ${
        isDizzy ? 0 : y * (y < 0 ? 1 : 3)
      }px) rotate(${isDizzy ? 0 : x * y * (x < 0 && y < 0 ? 6 : 4)}deg)`,
    },
    leftBrowFollow: {
      transition: 'transform 300ms ease-in-out',
      transform: `translate(0px, ${
        isDizzy ? 0 : y * 3.5 + (x < 0 ? 3 : -5)
      }px)`,
    },
    rightBrowFollow: {
      transition: 'transform 300ms ease-in-out',
      transform: `translate(0px, ${
        isDizzy ? 0 : y * 3.5 + (x > 0 ? 3 : -5)
      }px)`,
    },
  }

  return (
    <article class={styles.article}>
      <section class={styles.avatarSection}>
        <div class={styles.avatarStage}>
          <div
            class={styles.avatarBackground}
            style={{
              transform: `translateX(${-x * 2 - 50}%) translateY(${-y * 2}%)`,
            }}
          />
          <div class={styles.avatarLayout}>
            <svg
              class={styles.avatar}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 668.8 757"
            >
              <defs>
                <clipPath id="left-eye-clip">
                  <path
                    id="left-eye-base"
                    class={styles.eye}
                    d="M306.5,251.8c17-4.1,36.5,7,35.9,13.5c-0.6,6.8-22.8,9.4-24,9.6 c-12,1.3-30.2-0.2-31.7-6.8C285.5,262.7,296.1,254.3,306.5,251.8z"
                  ></path>
                </clipPath>
                <clipPath id="right-eye-clip">
                  <path
                    id="right-eye-base"
                    class={styles.eye}
                    d="M176.9,258.5c10.3,0.3,21.8,6.8,21.7,13c-0.2,6.8-14.4,12.2-25.5,12.6 c-8.9,0.3-22-2.5-23.1-8.4C148.7,269,162.9,258,176.9,258.5z"
                  ></path>
                </clipPath>
              </defs>
              <g className={styles.background}>
                <path d="M461.8,376c0.1,6.6,0,17.3-0.7,30.4c-1.8,34.2-5.9,45.4-1.3,61.8 c2.3,8.1,7.4,19.8,20.5,32.4c19.2,1.6,74.9,8.8,122.9,53.2c71.6,66.2,65.7,159.4,64.7,171.7c-28.2-15.9-75.8-37.8-136.1-40.6 c-124.6-5.8-182.9,65.6-292,71.7c-56.8,3.2-137.1-11.4-237.5-91.8c4.6-13.4,11.2-27.6,20.8-41.6c47.5-69.2,132.4-81.4,155.2-83.9 c0.4-16.1,0.9-32.1,1.3-48.2c17.2-7.6,43.7-17.6,77.3-22.5c51.6-7.5,74.6,3.6,104.4-9.9c18.5-8.4,42-27.3,59.4-75.3 c3.3-16.2,16.9-25,27.1-22.5C457.6,363.2,461.5,375.1,461.8,376z"></path>
                <g style={inlineStyles.headFollow}>
                  <g>
                    <path d="M81.1,148.1c-6.5-41,30.9-91.2,95.4-106.3c88.1-54.4,190.9-49.7,250,5.3 c41.4,38.5,49.7,90.8,51.9,112.6c3.3,5.8,7.6,15,9.6,27.1c1.5,9.5,1.1,17.6,0.3,23.4c1.2,0.2,3,0.5,5,1.3 c24,9.6,28.5,62.9,19.8,100.1c-2.9,12.6-9.8,33.6-27.7,56.1c0,22.6-2.5,127.8-84.2,201.8c-11.8,10.7-99.9,88.3-173.7,58.1 c-59.6-24.4-78.5-106.1-94.5-175c-10-43.1-12.1-79.8-12.2-104c-25.2-31.5-30.8-45.8-30.4-52.8c0.1-1.8,1-9.9-4-16.2 c-1.6-2.1-2.7-2.5-4.3-4c-9-8.6-8.3-29.9-0.7-34c2.6-1.4,4.4,0,10.2-2c3.9-1.4,6.3-3.1,7.6-4c3.8-2.5,10.5-4.9,23-4 c-0.2-9.9-0.4-19.8-0.5-29.7C112.6,196.3,85.8,177.9,81.1,148.1z"></path>
                  </g>
                </g>
              </g>
              <g class="body">
                <path
                  class={styles.shirt}
                  d="M32.1,658.7c76,61.7,139.9,76.3,184.3,78.1c134.2,5.7,215.3-97.5,351.7-70.3 c37.1,7.4,65.3,22.9,82.6,34c-1-12.8-8.9-96.5-80.3-146.5c-37.9-26.5-76.7-31.6-96.3-32.8c-2,7.1-5.4,17-11,28.2 c-22.7,45.1-60.7,66.9-72.7,73.5c-19.7,11-92.1,51.3-143.1,15c-33.5-23.9-38.9-67.3-40.1-81.5c-16.9-0.8-76.3-1.5-127.6,40.8 C53.9,618.6,39.7,642.8,32.1,658.7z"
                ></path>
                <path
                  class={styles.neck}
                  d="M255.1,641.8c39.1,22,85,6.7,103,0.7c35-11.7,56.8-32.5,67.4-42.9c29.3-28.7,42.8-59.8,48.9-77.3 c-5.2-4-9.6-8.3-13.2-12.6c-34.2-39.8-22.9-98.3-19.2-114.9c-1.2,7.8-10.1,58.3-55.8,85.4c-23.9,14.1-47.3,15.6-59.3,15.5 c0,0-0.2,0-0.3,0c-17.2-2.3-41.4-3.5-69.7,1.4c-21.4,3.8-39.2,10-52.7,15.9C196,568.2,216.3,619.9,255.1,641.8z"
                ></path>
              </g>
              <g style={inlineStyles.headFollow}>
                <g class={styles.head} data-dizzy={isDizzy}>
                  <g class="face">
                    <path
                      class={styles.face}
                      d="M498.9,257.4c0-0.4-0.1-0.7-0.1-1.2c-0.4-4.9-1.1-11.5-3.6-18.6c-0.1-0.3-0.1-0.6-0.2-1 c-0.2-1.1-1.8-8.4-8.4-11.7c-2.2-1.1-4.3-1.4-5.9-1.4c-3.2-0.1-5.6,1-7.1,1.8c-0.4,0.2-0.6,0.3-1,0.5c-0.6,0.2-1.1,0.3-1.7,0.5 c-1.4-13.6-4.4-32-11.1-53c-6.2-19.2-13-32.7-14.5-35.6c-2.3-4.5-23-44.1-56-67.7c-47.5-34-123.6-37-181.2-0.8 c-54,33.9-70.3,89-74.2,103.9c-0.9,8.8-1.4,16-1.6,21c-0.5,9.7-0.2,12.7-0.4,17.4c-0.1,2.9-0.3,5-0.4,6.1 c-1.3,14.5-2,21.8-1.8,25.8c0.7,12.2,5,15.8,5.3,31.7c0,1.7,0,3.1,0,3.8c-0.1,2.9-0.6,6.8-2.6,24.6c-0.6,5.6-1.1,11.6-1.2,18 c-0.2,10.2,0.6,16,1.3,24.3c1.4,16,3.2,52.1,9.1,70.9c0,0.1,0,0.1,0.1,0.2c6.6,23,17.3,49.1,33.2,68c5.3,7.5,10.2,13.6,14,18.1 c2.4,3.5,5.9,8.7,10.3,14.8c3.1,5.2,5.9,9.9,11,16.3c2.6,3.3,7,8.9,11.9,13.4c2.1,2.2,4.1,3.9,6.1,5.1c9.3,5.8,18.4,6.5,32.1,6.7 c1.5,0,3,0.1,4.6,0c0.1,0,0.2,0,0.4,0c10.7,0.1,20.3-1,28.4-2.5c5.6-1,11-2.3,16.2-3.9c1.2-0.3,2.2-0.7,3.2-1c2-0.6,4-1.3,6-2.2 c25.4-9.6,47.3-25.9,73.2-45.2c1.4-1,2.7-2,4.1-3.1l0,0c10.1-7,26.5-18.6,40.7-35.1c7.9-8.8,14.2-18.2,17.8-28.4 c4.4-11.4,5.4-21.6,6.2-29.8l0,0c0.7-5.5,0.8-7.9,0.8-7.9c0-2,0-5.9,0.2-10.7c0.1-1.7,0.1-3.4,0.2-5.3c0.3-6.5,1-13.8,2.2-20.1 c1-3.8,2.2-7,3.4-9.7c0.1-0.1,0.1-0.2,0.2-0.3c3.3-5.2,7.7-7,11-9.3c1.6-1.1,3-2.4,4.2-3.9l0,0l0,0c2.6-3.2,4.5-7.4,7.5-13.7 c6.8-14.6,7.4-27.7,8.3-51.8C499.6,266.4,499,258.5,498.9,257.4z"
                    ></path>
                    <path
                      class={styles.shadow}
                      d="M431.2,244.7c-2.8-1.2-9.4-27.1-22.3-78.9l0,0c-11.9-39.7-49-90.6-97-103.8 C254.6,46.1,181.2,83.7,140,157.4c2.9-9.1,8.5-21,16.1-34.8c10.9-19.9,25.6-31.6,36.2-40.1c47.2-37.8,101.8-38.3,108.6-38.3 c12.9,0.1,42.9,0.5,75,17.9c0,0,40.8,22.1,63.1,64.1c7.3,13.8,13.9,29.4,13.9,29.4c3.6,8.6,13.6,34.5,10.2,25.9l0,0 c4.3,17.1,8.5,45.7,8.5,45.7h-0.1h0.1C471.7,227.3,445.1,250.7,431.2,244.7z"
                    ></path>
                    <path
                      class={styles.outline}
                      d="M499.6,258.4c0-0.4-0.1-0.7-0.1-1.2c-0.4-4.9-1.1-11.5-3.6-18.6c-0.1-0.3-0.1-0.6-0.2-1 c-0.2-1.1-1.8-8.4-8.4-11.7c-2.2-1.1-4.3-1.4-5.9-1.4c-3.2-0.1-5.6,1-7.1,1.8c-0.4,0.2-0.6,0.3-1,0.5c-0.6,0.2-1.1,0.3-1.7,0.5 c-1.4-13.6-4.4-32-11.1-53c-6.2-19.2-13-32.7-14.5-35.6c-2.3-4.5-23-44.1-56-67.7c-47.5-34-123.6-37-181.2-0.8 c-54,33.9-70.3,89-74.2,103.9c-0.9,8.8-1.4,16-1.6,21c-0.5,9.7-0.2,12.7-0.4,17.4c-0.1,2.9-0.3,5-0.4,6.1 c-1.3,14.5-2,21.8-1.8,25.8c0.7,12.2,5,15.8,5.3,31.7c0,1.7,0,3.1,0,3.8c-0.1,2.9-0.6,6.8-2.6,24.6c-0.6,5.6-1.1,11.6-1.2,18 c-0.1,2.9,0,5.5,0.1,7.9c0.3,7.1,0.8,10.6,1.3,16.4c1.3,14.6,0,17.2,1.8,28.3c0.6,3.6,1.3,6.5,1.8,8.4c0.5,7.9,1.7,19.6,5.5,34.2 c0,0.1,0.3,1.1,0.6,2.2c8.5,31.3,29.4,61.4,32.7,66c3.2,4.6,7.9,10.9,14,18.1c2.4,3.5,5.9,8.7,10.3,14.8c3.1,5.2,5.9,9.9,11,16.3 c2.6,3.3,7,8.9,11.9,13.4c2.1,2.2,4.1,3.9,6.1,5.1c9.3,5.8,18.4,6.5,32.1,6.7c1.5,0,3,0.1,4.6,0c0.1,0,0.2,0,0.4,0 c10.7,0.1,20.3-1,28.4-2.5c5.6-1,11-2.3,16.2-3.9c1.2-0.3,2.2-0.7,3.2-1c2-0.6,4-1.3,6-2.2c25.4-9.6,47.3-25.9,73.2-45.2 c1.4-1,2.7-2,4.1-3.1l0,0c10.1-7,26.5-18.6,40.7-35.1c7.9-8.8,14.2-18.2,17.8-28.4c4.4-11.4,5.4-21.6,6.2-29.8l0,0 c0.7-5.5,0.8-7.9,0.8-7.9c0-2,0-5.9,0.2-10.7c0.1-1.7,0.1-3.4,0.2-5.3c0.3-6.5,1-13.8,2.2-20.1c1-3.8,2.2-7,3.4-9.7 c0.1-0.1,0.1-0.2,0.2-0.3c3.3-5.2,7.7-7,11-9.3c1.6-1.1,3-2.4,4.2-3.9l0,0l0,0c2.6-3.2,4.5-7.4,7.5-13.7 c6.8-14.6,7.4-27.7,8.3-51.8C500.3,267.4,499.7,259.5,499.6,258.4z"
                    ></path>
                  </g>
                  <g class="beard">
                    <path
                      class={styles.hairBase}
                      d="M 469.4 229.3 C 468 229.9 466 231.1 464.2 233 C 455.9 241.6 457.8 258.8 457.8 258.8 C 458.1 264.4 458.5 272.9 459 283.4 C 459.5 295.3 459.5 295.1 459.7 296.9 C 460.8 307.7 462.5 312.6 462.3 323 C 462.2 326.1 462.1 326.5 462 329.3 C 461.5 343 464.9 352.6 466.5 359.9 C 467.2 362.8 471.1 380.9 465.9 400.3 C 462.6 412.4 455.9 424.7 459.6 433 C 460.2 434.2 461.8 437.2 460.9 440.6 C 460.3 443.1 458.7 444.1 455.9 447.9 C 453.6 451.1 452.5 452.7 452 454.5 C 450.4 459.6 452.7 463.4 450.9 464.5 C 449.5 465.4 447.5 463.2 446.3 464.1 C 444.7 465.3 447.7 469.4 446.5 474 C 445.4 478.3 442 477.2 439.2 482.6 C 437.1 486.7 438.3 488.6 435.4 494.5 C 434.8 495.8 434 497.1 433.1 498.4 C 431.6 500.6 429.6 502.8 428.3 504.3 C 422.9 510.5 421.1 510.9 419.1 514.5 C 416.5 519.1 418.4 520.1 416.1 523.7 C 412.7 529.2 408.5 527.3 403.2 532.6 C 397.4 538.5 400.3 543.1 394.3 547.1 C 391.5 548.9 388.8 549.4 387.4 552.4 C 386.2 555 387.4 556.5 386.1 558 C 383.8 560.6 378.9 557 375.5 559.3 C 371.2 562.2 373.6 571.6 371.2 572.2 C 369.5 572.6 368.4 568.2 365.9 568.2 C 362.3 568.2 362.2 577.4 355.3 580.8 C 352.2 582.3 351.5 580.7 348.4 582.5 C 343.1 585.4 342.8 591.1 339.2 591.4 C 337.1 591.6 336.8 589.7 334.6 589.9 C 330.9 590.1 330.6 595.1 326 597.4 C 322 599.3 320.4 596.4 315.1 598.1 C 309.8 599.8 309.6 603.2 305.5 603.4 C 301.6 603.5 300.8 600.4 297.2 600.8 C 293.2 601.2 293.1 605.1 288.6 606.1 C 284.7 606.9 283.6 604.2 279.7 605.1 C 275.6 606 275.7 609.2 272.1 609.7 C 267.9 610.3 265.9 606.1 262.5 607.2 C 259.5 608.2 258.9 612.3 257.4 612 C 256 611.8 256.7 608.1 254.2 605.7 C 251.8 603.5 247.2 603.3 244.2 604.9 C 241.7 606.3 241.6 608.2 240 608.2 C 238 608.2 237.4 605 233.6 600.9 C 231.4 598.6 228.7 595.6 226.1 596.1 C 222.6 596.7 221.6 603.3 220.2 603 C 218.4 602.7 220.8 592.5 215.9 588.8 C 212.9 586.5 210.4 589.2 207 586.8 C 202.6 583.8 203.8 577.6 199.5 576 C 197.7 575.3 196.8 576.2 195.3 575.1 C 193.9 574.1 193.5 572.2 192.9 568.5 C 191.5 560.8 191.4 559.7 190.5 559 C 189.4 558.1 187.1 557.8 182.2 560.3 C 182 556.4 181.4 550.8 179.6 545.1 C 178 540.2 176.6 538.3 176 537.5 C 174.5 535.7 173.7 535.5 172.7 533.9 C 170.9 531 171.9 528.9 171.4 525.3 C 170.5 519 166.6 518.6 164.5 510.8 C 164 509.1 164.5 510.1 163.5 503.5 C 161.4 489.4 159.5 486.6 157.5 485.4 C 157 485.1 155.9 484.6 154.9 483.3 C 153.4 481.5 153.3 479.4 153.2 478.7 C 152.7 472.8 150.3 467.2 149.8 461.3 C 149 450.4 144.2 436.2 140.9 422.3 C 137.9 409.7 134.7 391.3 134.2 366.5 C 138.7 379.8 160 442 173.7 449.2 C 174.6 449.7 177.1 451 178.8 450 C 179.6 449.5 182.7 447 175.3 421.7 C 169.3 401.2 164.7 393.9 168.8 386 C 169.3 385.1 171.2 381.5 175 379.3 C 185.5 373.5 199.4 384.4 210.8 389 C 242.9 402.1 261.1 371.6 312.5 376.1 C 328 377.5 346.7 379.1 355.8 393.1 C 368 411.9 356.6 443.3 352.7 443.3 C 352.2 443.3 351.9 442.8 350.3 439.7 C 346.3 431.8 344.3 427.9 342.6 423.5 C 339 414.1 317.6 407.4 297.6 407.8 C 265.5 408.4 258 426.8 238.5 419.7 C 230.6 416.8 224.5 411.2 210.2 409.2 C 203.6 408.3 198.7 407.7 194.1 410.2 C 182.8 416.5 182 437.7 186.8 452.1 C 191.5 466.3 204 481 212.6 478.8 C 216.8 477.7 219.5 473 220.1 471.9 C 223.9 465.1 221.4 458.1 221 457 C 223.6 458.6 226.4 460 229.5 461.3 C 252.6 470.9 275.7 464.7 287.3 460.5 C 285.6 465.15 284.9 469.65 285.212 473.475 C 285.525 477.3 286.85 480.45 289.2 482.4 C 293.5 486 299.9 484.4 308 481.9 C 315.4 479.7 341.2 471.9 348.7 449.1 C 350 445 350.4 441.6 350.6 439.5 C 380.2 430.4 422.8 411.4 434.9 374.3 C 438.2 364.1 437.3 346.6 434.8 311.8 C 431.9 271 424.5 228.6 424.5 228.6 C 424.5 228.6 426.7 228.2 431.1 227.3 C 448.1 223.9 451.4 222.5 456.9 223.3 C 459.6 224 464.1 225.2 469.4 229.3 Z"
                    ></path>
                    <path
                      class={styles.beardDark}
                      d="M466.5,359.9c3,0.6,1.1,24-0.6,40.4c-1.1,10.5-2.4,20.8-5.3,32.3c-0.5,2.1-3,8.4-4.6,15.3c-1.5,6-2.2,9-2.2,9.1c0,1.5,0.2,3.9-1.1,4.6c-0.8,0.5-1.5-0.2-2.4,0.2c-1.3,0.7-0.8,2.7-1.5,5.1c-0.9,2.9-2.5,2.5-4.2,5.5c-2.2,4-0.2,6-2.4,9.2c-1.8,2.7-3.5,1.6-5.3,4c-3.5,4.6,0.6,11.5-2.2,13.4c-1.8,1.2-3.9-1.1-5.7,0.2c-2.3,1.6-0.1,5.9-2.6,8.1c-1.7,1.5-3.3,0.3-4.8,1.8c-2.6,2.5-0.6,8.2-1.8,8.5c-0.8,0.2-1.5-2.3-2.8-2.3c-1.1,0-2.3,1.9-5.3,10.7c-1.9,5.5-2.1,6.5-3.5,7.9c-2.2,2.2-3.5,1.2-7.1,3.5c-1.5,0.9-6.1,3.7-7.8,8.8c-1,3.2-0.4,5.9-2,6.6c-1,0.5-1.6-0.6-3.1-0.5c-3.1,0.2-6,4.5-7.1,8.1c-0.6,2.1-0.6,3.7-1.3,3.8c-1,0.2-1.5-3-3.1-3.3c-2.3-0.5-5.5,4.8-7.9,8.9c-2.6,4.3-3.3,6.6-5.4,6.9c-1.7,0.3-2.2-1-4.5-1c-2.7,0-5.4,2-6.8,4.3c-2.2,3.6-0.4,7-2.3,8.1c-1.2,0.7-2.2-0.6-5.3-1c-0.3,0-6.4-0.7-9.4,2.8c-1.9,2.2-1.2,4.4-3,5.1c-1.7,0.7-2.7-1.3-5.3-1.2c-2.4,0.1-3.2,1.9-7.1,4.5c-2.8,1.9-4.4,3-6.6,3.3c-5.6,0.7-9.4-3.9-11.6-2.3c-1.9,1.4,0.5,5.8-1.3,7.3c-2.7,2.1-9.6-5.6-14.5-3.3c-3,1.4-2.5,5.4-5.3,5.9c-3.2,0.7-5.6-4.2-8.3-3.3c-2.3,0.8-1.8,5-3.6,5.3c-1.8,0.3-2.7-4-7.3-6.9c-0.6-0.4-5.4-3.4-8.3-1.7c-3,1.8-2.1,7.8-3.3,7.9c-1,0.1-1-3.9-4-6.6c-2.3-2-6-3-8.9-2c-3.5,1.1-3.5,4.1-5.6,4.3c-4.6,0.4-8.1-12.8-11.6-12.2c-2.3,0.4-2.8,6.1-3.9,6c-1-0.1-0.5-4.4-2.3-9.2c-2.1-5.5-6.6-10.3-8.6-9.6c-2.1,0.8-1.2,7.2-2,7.3c-0.7,0.1-1.8-4.3-4-12.6c-1.7-6.3-2.5-9.3-4.3-9.6c-1.8-0.3-2.9,2.4-4.3,2c-2.4-0.7,0.5-11.4-2.6-12.9c-1-0.5-1.7,0.4-2.8-0.2c-1.2-0.6-1.4-2.1-2.1-6.8c-0.8-5.2-0.7-5.3-1-6c-1.5-3.3-3.8-2.5-5.6-5.4c-2.5-4.1,0.6-8.5-2.1-10.8c-1.4-1.2-2.3-0.3-3.9-1.3c-2.4-1.5-1.7-5.2-2.4-12.6c-0.9-9.7-2.9-11.5-3.9-12.2c-1.8-1.2-2.4-0.2-4-1.3c-3.5-2.5-1.1-8.2-4.2-18.8c-0.2-0.7-0.1-0.3-0.9-2.9c-1.6-4.9-3.2-10.2-4.8-16c-7.1-25.4-13.5-57.3-15.6-94.8v0.2c6.7,37.5,12.8,71.5,36.1,90.2c5.4,4.3,7,4.1,10.6,8.3c11,12.9,6.9,28.9,8.6,43.6c2.7,22.9,19.5,42.9,33,51.2c40.4,24.9,117.4-13.6,123.5-51.5c2.4-15-6.6-28,2.6-42.6c6-9.4,15.7-13.4,26.1-17.5c25.4-10.1,35.3-3.2,49.5-8.9C459.4,425.5,461.4,358.9,466.5,359.9z"
                    ></path>
                    <path
                      class={styles.beardLight}
                      d="M230.8,462.2C230.8,462.2,230.8,462.1,230.8,462.2c0.3-1.1,11,4.2,23.1,3.6c6.2-0.3,22.9-2.7,25.6-3.1c0,0,0,0,0.1,0c1.1,0.2-0.2,8,0.6,17.2c0.5,5.6,1.2,5.4,1.1,7.6c-0.5,9.4-14,21.2-28.3,20.7c-19.2-0.6-32.1-22.8-28.7-30.8C225,475.6,231.3,463.9,230.8,462.2z"
                    ></path>
                  </g>
                  <g class="eyes">
                    <g class="left-eye">
                      {/* left lid */}
                      <g>
                        <path
                          class={styles.outline}
                          d="M273.4,267.5c3.4-5.4,8.5-11.3,16-15.6c14-8.2,32.9-8.9,46.7-1.8 c8.4,4.3,9.9,8.9,20.2,12.3c7.7,2.5,14.8,2.5,19.6,2.1"
                        ></path>
                        <path
                          class={styles.outline}
                          d="M351.9,268.5c0.8,0.6,17.5,6.5,25.1,2.7"
                        ></path>
                      </g>
                      <use href="#left-eye-base"></use>
                      <g clip-path="url(#left-eye-clip)">
                        <g x="0" y="0" style={inlineStyles.eyeFollow}>
                          <circle
                            class={styles.iris}
                            cx="320.3"
                            cy="264.9"
                            r="11.5"
                          ></circle>
                          <circle
                            class={styles.pupil}
                            cx="320.3"
                            cy="265.1"
                            r="6"
                          ></circle>
                          <circle
                            class={styles.eye}
                            cx="324.3"
                            cy="260.1"
                            r="2.5"
                          ></circle>
                        </g>
                      </g>
                    </g>
                    <g class="right-eye">
                      {/* right lid */}
                      <path
                        class={styles.outline}
                        d="M197.5,259.9c-1.8-1.1-18.5-11.4-36.4-4c-10,4.1-15.4,11.7-17.5,15"
                      ></path>
                      <use href="#right-eye-base"></use>
                      <g clip-path="url(#right-eye-clip)">
                        <g x="0" y="0" style={inlineStyles.eyeFollow}>
                          <circle
                            class={styles.iris}
                            cx="174.1"
                            cy="272.4"
                            r="11.5"
                          ></circle>
                          <circle
                            class={styles.pupil}
                            cx="174.1"
                            cy="272.6"
                            r="6"
                          ></circle>
                          <circle
                            class={styles.eye}
                            cx="177"
                            cy="267.8"
                            r="2.5"
                          ></circle>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g class="wrinkles">
                    {/* wrinkles forehead */}
                    <g>
                      <path
                        data-dizzy={isDizzy}
                        class={styles.wrinkles}
                        d="M192.7,169.8c2.2,0.1,5.4,0.3,9.2,1.2c5,1.2,6.2,2.3,11,3.6c3,0.8,7.6,2,13.3,1.5c1.1-0.1,6.8-0.7,12.9-4 c4.8-2.6,5.6-4.5,10.5-6.9c3.5-1.6,6.6-2.3,8.6-2.6"
                      ></path>
                      <path
                        data-dizzy={isDizzy}
                        class={styles.wrinkles}
                        d="M138.9,185.1c6.6-2.9,13.9-5.8,21.8-8.4c4.5-1.5,9-2.8,13.2-4"
                      ></path>
                      <path
                        data-dizzy={isDizzy}
                        class={styles.wrinkles}
                        d="M139.4,194.7c27.1-12.9,46-13.6,58.5-11.6c5.2,0.8,14.9,3,28.4,1.7c11.8-1.1,19.9-4.3,24.9-6 c34.4-11.9,77.1-9.6,108.8,1.4c3.7,1.3,6.6,2.5,8.3,3.2"
                      ></path>
                      <path
                        data-dizzy={isDizzy}
                        class={styles.wrinkles}
                        d="M301.5,161.6c14.3-0.7,33.9,0.3,55.3,7.9c6.7,2.3,12.6,5,18,7.8"
                      ></path>
                    </g>
                    {/* wrinkles smile */}
                    <g>
                      <path
                        class={styles.outline}
                        d="M168.5,399.2c-0.9-3-1.6-7.1-0.9-11.7c1.2-8,5.8-13.1,8.1-15.5 c3.1-3.4,6.3-5.5,8.6-6.7"
                      ></path>
                      <path
                        class={styles.outline}
                        d="M300,354c2.3,2.8,5.7,6.3,10,10c4.5,3.8,8.3,6.2,10.9,7.8c1.2,0.7,6.4,4,14,7.5 c7.3,3.4,9.6,3.7,14.2,7c2.4,1.6,4.6,3.2,6.7,5.8c5,6.2,5.2,14.1,4.9,18.3"
                      ></path>
                    </g>
                  </g>
                  <g class="ear">
                    <path
                      class={styles.shadow}
                      d="M466.5,291.2c-0.3-2.3-0.8-5.5-1.1-9.4c-0.7-7.2-0.4-8.5,0.5-9.6c2.6-3.1,9.2-1.5,9.5-1.4 c7.2,1.9,13.5,12.3,12,21.7c-0.8,5.2-4.3,12.6-9.4,13c-4.3,0.3-7.9-4.3-8.1-4.6C469.9,300.9,468.8,299.3,466.5,291.2L466.5,291.2z"
                    ></path>
                    <path
                      class={styles.outline}
                      d="M480.4,274.8c1.1,1.2,7.2,8,6.1,17.2c-0.6,5.5-4,13.9-9.4,14.2c-4.7,0.2-10.3-5.5-11.5-14.3 c-3.2-18.2,6.1-49.4,12.8-48.7c3.4,0.3,5.9,4.3,6.8,5.9c4.8,8.8,2.6,17.8,2.6,17.8"
                    ></path>
                  </g>
                  <g class="mouth">
                    <path
                      class={styles.shadow}
                      d="M191.5,408.4c1.2,7.7,6,31.6,26.6,46.7c30.4,22.3,68.9,6.3,80,1.7c6.8-2.8,24.1-10.3,33.9-27c2.9-5.1,6.9-13.9,5.4-14.9c-1.4-1-7.3,5.4-9,7.1c-20.6,21.3-87.9,40.2-107.8,18.1c-5.3-5.9-9.1-16.9-23.9-28C194.5,410.4,192.7,409.2,191.5,408.4z"
                    ></path>
                    <path
                      class={styles.teeth}
                      data-dizzy={isDizzy}
                      d="M193.7,409.2c3.3,2.4,8.2,6.3,13.4,11.9c8.2,8.8,10.2,14.5,13.6,18.6c12.2,14.5,41.5,9.5,53.6,7.4c29.9-5.2,50.6-21.6,61.2-31.5c-21.6-8.4-38-8.1-48.9-6.4c-23.1,3.7-33.7,15.9-50.6,9.9c-7.4-2.6-12.2-7.4-24.4-9.5C204.2,408.3,197.9,408.7,193.7,409.2z"
                    ></path>
                  </g>
                  <g class="nose">
                    {/* nose outline */}
                    <path
                      class={styles.shadow}
                      d="M226,266.8c-3.3-1-6.9,0.5-8.8,3.6c-4.3,17.6-8.4,31.3-11.4,40.9 c-3.1,9.8-5.2,19.9-9,29.4c-3,7.5-4.9,11.1-4.5,16.9c0.6,7.5,4.6,13,10.1,19.3c5.7,6.6,9.8,11.3,17,13.6 c4.6,1.5,12.3,0.2,12.1-0.1c-7-20.5-14.8-53.7-7.3-92.2c1.8-9.3,4.3-17.7,7-25.3C230.7,270,228.7,267.6,226,266.8z"
                    ></path>
                    <path
                      class={styles.outline}
                      d="M276,366.2c-24.8,16.9-44.9,25.9-50.4,25.5c-3.5-0.3-6.4-1.2-6.4-1.2 c-2.9-1.2-4.7-3-6-4.3c-11.7-11.8-14.4-13.7-18.5-20.6c-0.5-0.9-0.8-1.4-1-1.8c-0.9-1.9-3.8-9.4,4.2-25.8c0.1-0.1,0.1-0.3,0.2-0.3 c3.8-7.5,9.5-26.4,18.7-69.1"
                    ></path>
                  </g>
                  <g class="eyebrows">
                    <g style={inlineStyles.leftBrowFollow}>
                      <g class={styles.leftBrow} data-dizzy={isDizzy}>
                        <path
                          class={styles.shadow}
                          d="M260.4,236.8c-2.2-1-7.7-3.9-11.6-10.3c-4.8-7.8-3.9-15.6-3.6-17.8 c22.1-1.4,39.9-3.1,52-4.3c16.1-1.6,23.6-2.1,35.9-2c22.3,0.2,35.4,3.2,43.6,13c5.9,7.1,7.4,15.6,7.7,21.2 c-5.7-0.2-14.2-0.8-24.5-2.2c-11-1.5-11.3-2.2-20.3-3.5c-9.9-1.4-25.2-2.7-43.2-0.9c-7.3,0.7-13,1.9-19.4,3.1 C270.3,234.5,264.6,235.8,260.4,236.8z"
                        ></path>
                        <path
                          class={styles.hairBase}
                          d="M253.6,216.7c-4,0.2-7.5-2.3-8.6-5.9c-1.2-4,0.9-8.5,5-10.2c8.5-3,84.3-28.4,121.7,9.4 c3.7,3.7,7.2,8.3,10.3,14c-6.9-5-17.5-11.4-31.6-15.6c-22.6-6.7-41.9-3.8-59-1.2C281.6,208.7,268.6,211.3,253.6,216.7z"
                        ></path>
                      </g>
                    </g>
                    <g style={inlineStyles.rightBrowFollow}>
                      <g class={styles.rightBrow} data-dizzy={isDizzy}>
                        <path
                          class={styles.shadow}
                          d="M200.5,241.5c1.6-1.5,4-4.2,5.7-8.2c2.5-6,1.8-11.5,1.4-13.7 c-2.7-1.4-38.5-20.2-64-2.9c-3.5,2.4-7.6,6-11.3,11.5c-0.4,0.8-2.5,5.1-0.7,9.9c0.9,2.3,2.4,3.9,3.3,4.6 c6.2-2.9,16.3-6.6,29.1-7.4C180.6,234.3,193.6,238.6,200.5,241.5z"
                        ></path>
                        <path
                          class={styles.hairBase}
                          d="M206.3,228c0.6-1.5,1.6-4.5,1.3-8.3c-0.3-3.9-1.8-6.8-2.7-8.1 c-4.1-1.8-34.3-14.7-55.5-4.8c-4.9,2.3-13.9,6.4-16.6,15.4c-1,3.2-0.9,6.1-0.7,8.1c4.1-4.1,10.1-8.5,18-11.5 C177.1,208.8,202.7,225.5,206.3,228z"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g class={styles.mask} transform="translate(10 0)">
                    <path
                      class={styles.maskBase}
                      d="M375,375.4c-44.3-25.4-88.5-50.9-132.8-76.3c-0.5-0.6-10.3-13.5-26.8-11.9 c-16.3,1.6-23.4,16.1-23.8,16.8c-20.6,23.3-41.2,46.6-61.8,70c-1.1,19.5-0.5,49.1,9.9,82.6c4.7,15.2,34.4,110.6,95.9,119.8 c50.4,7.6,115.1-43.6,137.8-129.7L375,375.4z"
                    ></path>
                    <path
                      class={styles.maskShadow}
                      d="M214.6,333.6c0.3,4.7,1.5,27.9,18.7,41.8c12.2,9.8,18.7,3.8,34.3,12.2 c17,9.1,33.8,29.1,34.1,51.3c0.4,22.3-16,38.5-21.8,44.4c-31.4,31.5-69.1,20.9-76,42.4c-3.9,12.1,4.3,27.4,14.1,34.8 c25.4,19.3,72.6-5.4,91.8-19c66-46.7,63.2-146.4,62.4-163.8c-17.6-16.4-31.7-19.7-41.6-19.5c-8.6,0.2-10.9,3-21.1,2.6 c-3.3-0.1-22.9-0.7-36-13.9c-11.8-11.8-5.7-21-17.5-33c-8.5-8.7-23.9-16.4-33.4-10.9C213.2,308.6,214.1,325,214.6,333.6z"
                    ></path>
                    <path
                      class={styles.maskNose}
                      d="M203.2,319.1c-3,3.9-4.5,7.5-5,8.9c-5.9,15.1-11.9,33-13.7,38.4 c5.4-11.7,9-21.2,11.5-27.9c2.5-6.7,4.7-13.5,11.2-18.3c4.8-3.5,8.7-3.7,9.5-3.7c5.5-0.1,9.7,3.3,11.9,5.3 c17.3,15.2,47.4,46.6,47.4,46.6c0,0,2.9,1.1,4.3,0.3c0.7-0.4,1.3-1.3,1.4-3.8c-16.8-16.4-33.5-32.7-50.3-49.1 c-1-1.3-6-7.4-13.1-7.2C211.1,308.7,206.2,315.1,203.2,319.1z"
                    ></path>
                    <path
                      class={styles.maskBand}
                      d="M123.1,366.9c1.8,1.4,14.1,11.6,14.3,28.5c0.2,11.6-5.5,19.8-7.5,22.5 c0.3,2.3,0.7,4.6,1,6.8c2.8-3.6,9.4-13.2,9.9-26.8c0.7-22.3-15.8-36.4-18-38.2C122.8,362.1,123,364.5,123.1,366.9z"
                    ></path>
                    <path
                      class={styles.maskBand}
                      d="M374.9,375.4c24.9-48.9,49.8-97.9,74.7-146.8c1.4,1.8,2.8,3.5,4.1,5.3 c-26.2,49.3-52.4,98.6-78.6,147.9c-17.5,0.3-30.8,15.1-29.7,30.9c1,14,13.1,26,28.5,26.8c20.7,11.5,41.5,23,62.2,34.5 c-1,2.1-2,4.3-3,6.4c-19.9-11.2-39.8-22.4-59.7-33.6c-18.6-1.6-33-17.4-32.8-35.9C340.8,392,355.9,376.3,374.9,375.4z"
                    ></path>
                  </g>
                  <path
                    class={styles.glasses}
                    d="M465.5,218c-0.8-0.4-1.5-0.6-1.5-0.6c-3.9-1.1-7.4,0.8-8.7,1c-18,3.5-28.3,7.3-45.8,11.2 c-1.4,0.3-3.5,0.8-6,1.3c-1.1-0.5-2.5-1-4.3-1.4c0,0-1.6-0.3-3.2-0.4c-3.8-0.4-5.6,0.6-10.8,1.7c-3.8,0.8-7.3,1.6-11.5,1.6 c-3.4,0-4-0.5-12.2-1.5c-3.5-0.4-4.9-0.5-9.1-1c-12.1-1.3-14.5-1.9-20.9-2.5c-14.6-1.4-26.4-0.5-32.5,0 c-14.4,1.2-24.2,3.5-33.9,5.9c-19.6,4.8-23.5,8.4-25.8,11.1c-2.7,3.3-3.5,6.1-7.3,7.8c0,0-6.6,2.9-16.6-1.7 c-2.9-1.3-4.8-2.8-5.2-3.1c-4.6-3.5-13.9-7.2-34.2-9c-6.8-0.4-17-0.8-31.3,0.3c-9.5,0.7-21.8,2.3-36,5.6c-1.3,0.9-2.9,1.9-4.7,2.8 c-3,1.4-7.3,2.9-12.7,3c0,0-6,10.4,1.6,15.7c7.7,5.2,7.1,13.2,7.1,13.2s2.3,28.2,15.3,44.6s65.4,9.1,65.4,9.1 c4.1-0.1,11.9-0.9,17.7-6.4c3.9-3.7,5.4-7.9,6.3-10.6c9.2-27.3,7.6-41.9,16.1-45.9c4.4-2.1,9.8-0.6,12.8,1.4 c3.4,2.2,2.7,4.2,8.1,15.1c0,0,4.2,8.5,10.5,18.4c1,1.6,1.9,2.9,2.7,4.1c1.8,2.7,4,5.9,5.6,8c3.6,4.5,7.7,7,9.9,8.3 c4.2,2.6,10.1,4.9,24.1,5.7c14.5,0.9,25.3-0.9,46.9-4.4c0,0,5-0.8,14.6-4.4c0.7-0.2,1.9-0.7,3.4-1.8c1.8-1.3,3-2.9,3.6-3.9 c1.6-2,6.2-8.2,8.2-18.6c4.1-22-0.4-35.4,0.4-47c0.2-3.7,12.1-7.1,20.3-7.6c1.1-0.1,3.1-0.2,5.5-1.1c2.6-1.1,3.1-3,6-4.4 c1.7-0.8,3.2-1,4.1-1.1c4.9-0.7,14.7-3.1,33.4-7.8c10.3-2.5,14.2-4.1,18.3-1.7c2.7,1.6,4.2,4.2,5,6.2c2.7-1.8,5.4-3.6,8.2-5.4 C471.8,225.6,469.8,220.1,465.5,218z M205.3,299c-4.1,12.7-6.2,19.6-12.5,24.4c-4.7,3.6-13.5,4.2-31.1,5 c-29.8,1.4-36.1-2.9-39.6-6.2c-2.5-2.3-3.9-4.8-6.8-9.9c-5.8-10.1-7.2-15.8-8.8-24c-1.2-6.4-2.7-14-0.8-23.7 c0.5-2.9,1.2-5.2,1.8-6.8c8.9,0.6,17.7,1.3,26.6,1.9c-0.3-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.6-1.8-0.8-2.8c-1.6-0.1-3.7-0.1-6.3-0.3 c-10-0.5-15-0.8-15.1-1.5c-0.3-1.7,10.5-5.9,21.4-8c7-1.4,12.1-1.5,21-1.7c21.6-0.5,31.7,1.8,34.4,2.4c9,1.9,16.1,4.6,19,10.4 c1.1,2.2,1.7,5.2,2,6.4c0.9,3.9,1.1,7.7,0.8,12.4C208.9,284.7,206.4,294.6,205.3,299z M366.9,281c0.2,6.5-0.4,11.3-0.8,14.3 c-0.7,5.2-1.4,7.5-1.8,8.6c0,0-1.3,3.8-3.5,7.1c-6.8,10.6-36,12.8-45.2,13.5c-8.3,0.6-14.2,0.5-19.7,0.1 c-9.1-0.7-15.2-1.1-21.8-4.8c-7.7-4.3-12.4-11-12.4-11l0,0c-4.1-4.9-7.1-9.9-10-15.8c-4.2-8.7-13.3-27.3-9.2-39.1 c1.8-5.1,5.2-8.1,5.2-8.1c2.3-2,4.7-2.9,5.9-3.4c18.2-6.5,43.4-8.6,43.4-8.6c11.7-1,18.5-1.1,20.6-1.1c6.5-0.1,12.5,0.2,18,0.5 c6.4,0.4,17.4,2.2,22.6,10.1c0.8,1.2,1.3,2.4,2.4,4.9c2.9,6.8,3.8,12.3,4.9,19.4C366.2,272.5,366.7,276,366.9,281z"
                  ></path>
                  <g class="cap">
                    <path
                      class={styles.shadow}
                      d="M133.9,190.4c15.5-25.6,33.2-40.1,47.7-48.7c72.2-42.9,187.5-11.6,287.7,78.1 c0.1-2.6,0.2-7.4-0.7-13.2C453.6,115.4,226,37.3,156.7,109.5C145.9,120.8,131.6,143.5,133.9,190.4z"
                    ></path>
                    <path
                      class={styles.capBase}
                      d="M133.8,194.5c0.4-14.2,3.5-44.1,25.4-68.6c31.5-35.2,79.3-34,100.2-33.5 c27.6,0.7,46.5,8,74.6,18.9c0,0,55.4,21.5,111.4,72.7c7.7,7.1,11.5,12,13.7,15.2c9.9,14.4,12.1,28.2,13.8,27.8 c1.2-0.3-0.3-7.6,0.3-21.2c0.5-11.8,1.9-10.4,1.3-16c-1-10-5.8-19.1-9.7-26.5c-0.9-1.7-1.7-3.1-2.2-4c0.5-3.7,0.8-7.8,0.7-12.1 c-0.3-21-8.7-37.5-15-47.3c-14.5-20.4-38.3-46.2-74.2-61.6c-16.9-7.2-31.3-9.9-43.8-12.2c-18.4-3.4-48-8.2-83.8,0.2 c-26.1,6.2-47.1,17.4-62.9,28.6c-13.4,3.6-35.5,11.5-55.8,30.3c-10,9.3-32.3,30-32.9,58.3c0,0.5,0,0.9,0,1.2 c6,24.7,30.9,37.9,30.9,37.9C128.4,186.6,131.1,190.5,133.8,194.5z"
                    ></path>
                    <path
                      class={styles.capHighlights}
                      d="M391.9,141c-18.9-15.1-36.7-26.6-51.3-35c-11.5-6.6-26.7-14.6-45.1-22.5 c-12.5-5.3-33.4-14.2-50.4-17.6c-63.9-12.9-140.9,36.5-140.2,69.9c0.1,6.3,3.1,16.6,2.1,16.8c-1,0.3-5.4-8.5-6.2-16.3 c-1.9-18.6,15.9-34.6,25.1-42.7c35.3-31,79.4-34.6,85.4-35C249,56.1,275.9,68,316.4,86c36,16,58.7,33,102.3,65.6 c9.5,7.1,16.8,13,24.7,22.2c20.9,24.7,28.4,53.4,30.3,52.7c1.1-0.4-1.5-8.6-0.4-22.8l0,0c0.7-3.1,1.2-6.8,1.2-10.8 c-0.1-15.4-7.6-26.8-11.5-32c-4.9-2.5-12.5-6.3-21.7-11.2c-45.5-24-62.5-36.5-97.8-55.1c-23.5-12.4-35.3-18.6-49.5-23.9 C263.8,59.5,224.7,45,183.3,55.7c-45.3,11.7-95,54.2-87.7,91.3c3.3,16.9,17.8,28.8,30.1,36.2c2.6,3.9,5.3,7.7,7.9,11.6 c1.1-39.9,15.9-60.4,23.9-69.3C199.1,79.5,297,79.7,391.9,141z"
                    ></path>
                  </g>
                </g>
              </g>
              <circle
                ref={ref}
                class="center-of-gravity"
                cx="164"
                cy="260"
                r="1"
                fill="transparent"
              ></circle>
            </svg>
          </div>
        </div>
      </section>
      <section class={styles.introSection}>
        <div class={styles.introContent}>
          <h1 class={styles.introWelcome}>
            Hey, my name
            <br />
            is <em>Christoph</em>.
          </h1>

          <p class={styles.introParagraph}>
            I help teams deliver better products in less time by teaching web
            and cloud technologies.
          </p>
        </div>
      </section>
      <section>svg animation</section>
    </article>
  )
}

export const frontmatter: Frontmatter = {
  title: 'Home',
}
