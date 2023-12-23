type HeaderProps = {
  children?: React.ReactNode,
}

const Header = (props: HeaderProps) => {
  return (
    <div>
      {
        props.children
      }
    </div>
  );
};

export default Header;
