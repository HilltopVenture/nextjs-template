const MenuIcon = ({ className = "text-secondary" }: { className?: string }) => (
  <svg
    width="25"
    height="21"
    viewBox="0 0 25 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 10.25C0 9.55964 0.456852 9 1.02041 9H23.9796C24.5431 9 25 9.55964 25 10.25C25 10.9404 24.5431 11.5 23.9796 11.5H1.02041C0.456852 11.5 0 10.9404 0 10.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1.25C0 0.559644 0.456852 0 1.02041 0H23.9796C24.5431 0 25 0.559644 25 1.25C25 1.94036 24.5431 2.5 23.9796 2.5H1.02041C0.456852 2.5 0 1.94036 0 1.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 19.25C0 18.5596 0.456852 18 1.02041 18H23.9796C24.5431 18 25 18.5596 25 19.25C25 19.9404 24.5431 20.5 23.9796 20.5H1.02041C0.456852 20.5 0 19.9404 0 19.25Z"
      fill="currentColor"
    />
  </svg>
);
MenuIcon.displayName = "MenuIcon";
export default MenuIcon;
