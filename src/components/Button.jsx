const Button = ({ className, children, href, onClick, orange, px }) => {
  const classes = `button uppercase tracking-wider bg-font text-xs transition-colors hover:bg-font/90 ${px || 'px-4'}
  ${orange ? 'text-brown-100' : 'text-black'} ${className || ''}`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
