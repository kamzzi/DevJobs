type JobLogoProps = {
  className: string;
  logoBackground: string;
  logo: string;
  company: string;
};

export const JobLogo = ({
  className,
  logoBackground,
  logo,
  company,
}: JobLogoProps) => {
  return (
    <div className={className} style={{ backgroundColor: logoBackground }}>
      <img src={logo} alt={company} />
    </div>
  );
};
