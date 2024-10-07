const Header = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <header className="text-center mb-12">
      <h1>{title}</h1>
      <p className="text-lead font-medium">{description}</p>
    </header>
  );
};

export { Header };
