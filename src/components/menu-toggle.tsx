import { FunctionalComponent } from 'preact'
import { StateUpdater } from 'preact/hooks'
import classes from './menu-toggle.module.scss'

const MenuToggleButton: FunctionalComponent<{
  isOpen: boolean
  setIsOpen: StateUpdater<boolean>
}> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      class={classes.button}
      aria-label="Menu"
      aria-pressed={isOpen}
      onClick={() => {
        window.scrollTo(0, 0)
        setIsOpen((isOpen) => !isOpen)
      }}
    >
      <div data-open={isOpen} class={classes.buns}>
        <span data-open={isOpen} class={classes.patty} />
      </div>
    </button>
  )
}

export default MenuToggleButton
