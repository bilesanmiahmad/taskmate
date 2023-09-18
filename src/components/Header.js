import Logo from "../assets/pizzaIcon.png"
export const Header = () => {
  return (
    <header>
        <img className="logo" src={Logo} alt="" />
        <a href="/">Home</a>
    </header>
  )
}
